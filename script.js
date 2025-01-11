class BilgeBaykus {
    constructor() {
        this.money = 0;
        this.level = 1;
        this.streak = 0;
        this.askedQuestions = [];
        this.timeLeft = 10;
        this.timer = null;
        this.setupEventListeners();
        this.setupThemeControls();
        this.loadGameState();
        this.setupTouchEvents();
    }

    setupThemeControls() {
        const toggleButton = document.getElementById('toggleTheme');
        const colorPalette = document.querySelector('.color-palette');
        const colorOptions = document.querySelectorAll('.color-option');
        
        // Kaydedilmiş temayı yükle
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.dataset.theme = savedTheme;
        }

        // Tema butonuna tıklama
        toggleButton.addEventListener('click', () => {
            colorPalette.classList.toggle('show');
        });

        // Renk seçeneklerine tıklama
        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                document.body.dataset.theme = theme;
                localStorage.setItem('theme', theme);
                colorPalette.classList.remove('show');
            });
        });

        // Palette dışına tıklandığında kapat
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.theme-controls')) {
                colorPalette.classList.remove('show');
            }
        });
    }

    getDefaultJokers() {
        return {
            fiftyFifty: 0,
            skipQuestion: 0,
            doubleChance: 0,
            extraTime: 0,
            doubleMoney: 0,
            showHint: 0
        };
    }

    loadGameState() {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.money = state.money || 0;
            this.level = state.level || 1;
            this.streak = state.streak || 0;
            this.askedQuestions = state.askedQuestions || [];
            this.jokers = state.jokers || this.getDefaultJokers();
        } else {
            this.jokers = this.getDefaultJokers();
        }
        this.updateUI();
    }

    saveGameState() {
        const state = {
            money: this.money,
            level: this.level,
            streak: this.streak,
            askedQuestions: this.askedQuestions,
            jokers: this.jokers
        };
        localStorage.setItem('gameState', JSON.stringify(state));
    }

    setupEventListeners() {
        document.getElementById('startGame').addEventListener('click', () => this.startGame());
        document.getElementById('openMarket').addEventListener('click', () => this.openMarket());
        document.getElementById('closeMarket').addEventListener('click', () => this.closeMarket());
        
        // Ayarlar menüsü için event listener'lar
        document.getElementById('settingsButton').addEventListener('click', () => this.openSettings());
        document.getElementById('closeSettings').addEventListener('click', () => this.closeSettings());
        document.getElementById('resumeFromSettings').addEventListener('click', () => this.resumeGame());
        document.getElementById('restartFromSettings').addEventListener('click', () => this.restartGame());
        document.getElementById('quitFromSettings').addEventListener('click', () => this.quitToMenu());
        
        // Joker butonları
        const jokerButtons = document.querySelectorAll('.joker-button');
        jokerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const jokerId = e.currentTarget.id;
                this.useJoker(jokerId);
            });
        });

        // Market butonları
        const buyButtons = document.querySelectorAll('.buy-button');
        buyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.currentTarget.getAttribute('data-item');
                this.buyItem(itemId);
            });
        });
    }

    startGame() {
        document.querySelector('.main-menu').style.display = 'none';
        document.querySelector('.game-screen').style.display = 'block';
        this.showQuestion();
        this.updateUI();
    }

    showQuestion() {
        if (!questions || questions.length === 0) {
            console.error('Sorular yüklenemedi!');
            return;
        }

        let availableQuestions = questions.filter(q => 
            !this.askedQuestions.includes(questions.indexOf(q)) && 
            q.level <= this.level
        );

        if (availableQuestions.length === 0) {
            if (this.askedQuestions.length === questions.length) {
                this.showNotification('Tebrikler! Tüm soruları tamamladınız. Sorular yeniden başlayacak.', 'success');
                this.askedQuestions = [];
                availableQuestions = questions.filter(q => q.level <= this.level);
            } else {
                availableQuestions = questions.filter(q => !this.askedQuestions.includes(questions.indexOf(q)));
            }
        }

        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const question = availableQuestions[randomIndex];
        const questionIndex = questions.indexOf(question);

        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.querySelector('.options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.style.display = 'block';
            button.style.visibility = 'visible';
            button.style.opacity = '1';
            button.addEventListener('click', () => this.checkAnswer(index, questionIndex));
            optionsContainer.appendChild(button);
        });

        // Kategori ve seviye bilgisini göster
        document.querySelector('.category-text').textContent = question.category;
        document.querySelector('.category-icon').className = `category-icon fas ${this.getCategoryIcon(question.category)}`;

        this.askedQuestions.push(questionIndex);
        this.saveGameState();

        // Zamanlayıcıyı başlat
        this.timeLeft = 10;
        this.updateTimer();
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.updateTimer(), 1000);

        // Soru konteynerini görünür yap
        const questionContainer = document.querySelector('.question-container');
        questionContainer.style.display = 'block';
        questionContainer.style.visibility = 'visible';
        questionContainer.style.opacity = '1';
    }

    getCategoryIcon(category) {
        const categoryIcons = {
            'Bilim': 'fa-flask',
            'Tarih': 'fa-landmark',
            'Coğrafya': 'fa-globe-americas',
            'Sanat': 'fa-palette',
            'Spor': 'fa-futbol',
            'Teknoloji': 'fa-microchip',
            'Eğlence': 'fa-film',
            'Genel Kültür': 'fa-book'
        };
        return categoryIcons[category] || 'fa-question';
    }

    updateTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
            const timerBar = document.querySelector('.timer-bar');
            const timerContainer = document.querySelector('.timer');
            
            timerBar.style.width = `${(this.timeLeft / 10) * 100}%`;
            
            if (this.timeLeft <= 3) {
                timerContainer.classList.add('timer-warning');
            } else {
                timerContainer.classList.remove('timer-warning');
            }
        } else {
            this.timeOut();
        }
    }

    timeOut() {
        clearInterval(this.timer);
        this.money = Math.max(-1000, this.money - 200);
        this.streak = 0;
        this.showNotification('Süre doldu! Oyunu kaybettiniz!', 'error');
        
        // Doğru cevabı göster
        const currentQuestionIndex = this.askedQuestions[this.askedQuestions.length - 1];
        const currentQuestion = questions[currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        options[currentQuestion.correct].classList.add('correct');
        
        setTimeout(() => {
            this.showQuestion();
            this.updateUI();
        }, 1000);
    }

    checkAnswer(selectedIndex, questionIndex) {
        clearInterval(this.timer);
        const question = questions[questionIndex];
        const options = document.querySelectorAll('.option');
        
        if (selectedIndex === question.correct) {
            options[selectedIndex].classList.add('correct');
            this.money += 100;
            this.streak++;
            this.showNotification('Doğru cevap! +100₺ kazandınız!', 'success');
            this.createExplosion(options[selectedIndex]);
        } else {
            options[selectedIndex].classList.add('wrong');
            options[question.correct].classList.add('correct');
            this.money = Math.max(-1000, this.money - 200);
            this.streak = 0;
            this.showNotification('Yanlış cevap! -200₺ kaybettiniz!', 'error');
        }
        
        setTimeout(() => {
            this.showQuestion();
            this.updateUI();
        }, 1000);
    }

    createExplosion(element) {
        const rect = element.getBoundingClientRect();
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.left = rect.left + rect.width / 2 + 'px';
        explosion.style.top = rect.top + rect.height / 2 + 'px';
        document.body.appendChild(explosion);
        
        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    updateUI() {
        document.getElementById('money').textContent = this.money;
        document.getElementById('level').textContent = this.level;
        document.getElementById('streak').textContent = this.streak;
        
        // Joker sayılarını güncelle
        Object.keys(this.jokers).forEach(joker => {
            const countElement = document.querySelector(`#${joker} .joker-count`);
            if (countElement) {
                countElement.textContent = `(${this.jokers[joker]})`;
            }
        });
        
        this.saveGameState();
    }

    useJoker(jokerId) {
        if (this.jokers[jokerId] > 0) {
            this.jokers[jokerId]--;
            
            switch(jokerId) {
                case 'fiftyFifty':
                    this.useFiftyFifty();
                    break;
                case 'skipQuestion':
                    this.skipQuestion();
                    break;
                case 'doubleChance':
                    this.useDoubleChance();
                    break;
                case 'extraTime':
                    this.useExtraTime();
                    break;
                case 'doubleMoney':
                    this.useDoubleMoney();
                    break;
                case 'showHint':
                    this.showHint();
                    break;
            }
            
            this.updateUI();
        } else {
            this.showNotification('Bu jokeri kullanmak için yeterli hakkınız yok!', 'error');
        }
    }

    buyItem(itemId) {
        const prices = {
            fiftyFifty: 300,
            skipQuestion: 200,
            doubleChance: 400,
            extraTime: 250,
            doubleMoney: 500,
            showHint: 350
        };

        if (this.money >= prices[itemId]) {
            this.money -= prices[itemId];
            this.jokers[itemId]++;
            this.showNotification(`${itemId} jokeri satın alındı!`, 'success');
            this.updateUI();
        } else {
            this.showNotification('Yeterli paranız yok!', 'error');
        }
    }

    openMarket() {
        document.querySelector('.main-menu').style.display = 'none';
        document.querySelector('.market').style.display = 'block';
    }

    closeMarket() {
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.main-menu').style.display = 'block';
    }

    openSettings() {
        if (this.timer) clearInterval(this.timer);
        document.querySelector('.settings-menu').style.display = 'block';
    }

    closeSettings() {
        document.querySelector('.settings-menu').style.display = 'none';
        if (document.querySelector('.game-screen').style.display === 'block') {
            this.resumeGame();
        }
    }

    resumeGame() {
        document.querySelector('.settings-menu').style.display = 'none';
        this.timeLeft = 10;
        this.updateTimer();
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.updateTimer(), 1000);
    }

    restartGame() {
        this.money = 0;
        this.level = 1;
        this.streak = 0;
        this.askedQuestions = [];
        this.closeSettings();
        this.showQuestion();
        this.updateUI();
        this.showNotification('Oyun yeniden başlatıldı!', 'success');
    }

    quitToMenu() {
        clearInterval(this.timer);
        document.querySelector('.game-screen').style.display = 'none';
        document.querySelector('.market').style.display = 'none';
        document.querySelector('.settings-menu').style.display = 'none';
        document.querySelector('.main-menu').style.display = 'block';
        this.saveGameState();
        this.showNotification('Ana menüye dönüldü!', 'success');
    }

    setupTouchEvents() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                button.click();
            });
        });

        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const theme = option.getAttribute('data-theme');
                this.changeTheme(theme);
                document.querySelector('.color-palette').style.display = 'none';
            });
        });
    }
}

// Oyunu başlat
window.onload = () => {
    window.game = new BilgeBaykus();
}; 