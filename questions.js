// Soru veritabanı
const questions = [
    {
        question: "Kuantum dolanıklık (quantum entanglement) hangi fizik prensibine aykırı görünmektedir?",
        options: ["Heisenberg Belirsizlik İlkesi", "Lokal Gerçeklik Prensibi", "Pauli Dışlama İlkesi", "Schrödinger Dalga Denklemi"],
        correct: 1,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Einstein'ın 'Uzaktan Ürkütücü Etki' olarak tanımladığı fenomen."
    },
    {
        question: "2024 yılı itibariyle dünyanın en güçlü süper bilgisayarı hangisidir?",
        options: ["Summit", "Tianhe-2", "Fugaku", "Frontier"],
        correct: 3,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Oak Ridge Ulusal Laboratuvarı'nda bulunur."
    },
    {
        question: "Hangi programlama paradigması 'monad' kavramını kullanır?",
        options: ["Mantıksal Programlama", "Prosedürel Programlama", "Fonksiyonel Programlama", "Nesne Yönelimli Programlama"],
        correct: 2,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Haskell dilinde yaygın olarak kullanılır."
    },
    {
        question: "RNA'nın protein sentezindeki rolü nedir?",
        options: ["DNA'yı kopyalar", "Enerji üretir", "Hücre zarını oluşturur", "Genetik bilgiyi ribozomlara taşır"],
        correct: 3,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "mRNA olarak da bilinir."
    },
    {
        question: "Hangi element periyodik tabloda 'Fe' sembolü ile gösterilir?",
        options: ["Fosfor", "Fermiyum", "Flor", "Demir"],
        correct: 3,
        category: "Bilim",
        level: 1,
        reward: 100,
        hint: "Günlük hayatta sıkça kullandığımız metalik bir elementtir."
    },
    {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Kaçkar Dağı", "Süphan Dağı", "Ağrı Dağı", "Erciyes Dağı"],
        correct: 2,
        category: "Coğrafya",
        level: 1,
        reward: 100,
        hint: "5137 metre yüksekliğindedir ve Doğu Anadolu Bölgesi'nde yer alır."
    },
    {
        question: "P vs NP problemi hangi matematik alanına aittir?",
        options: ["Analiz", "Sayılar Teorisi", "Topoloji", "Kompleksite Teorisi"],
        correct: 3,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Bilgisayar biliminin en önemli açık problemlerinden biridir."
    },
    {
        question: "Hangi yıl Türkiye Cumhuriyeti kurulmuştur?",
        options: ["1922", "1924", "1920", "1923"],
        correct: 3,
        category: "Tarih",
        level: 2,
        reward: 200,
        hint: "Cumhuriyet Bayramı bu tarihte kutlanır."
    },
    {
        question: "Yapay zeka terimi ilk kez hangi yıl kullanılmıştır?",
        options: ["1976", "1946", "1956", "1966"],
        correct: 2,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Dartmouth Konferansı'nda ortaya çıkmıştır."
    },
    {
        question: "Blockchain teknolojisinde kullanılan konsensüs algoritması hangisi değildir?",
        options: ["Proof of Stake", "SHA-256", "Delegated Proof of Stake", "Proof of Work"],
        correct: 1,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Bu bir hash algoritmasıdır, konsensüs algoritması değil."
    },
    {
        question: "CRISPR-Cas9 teknolojisi hangi alanda kullanılır?",
        options: ["Kuantum Hesaplama", "Blockchain", "Gen Düzenleme", "Yapay Zeka"],
        correct: 2,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "DNA dizilimini değiştirmek için kullanılan bir yöntemdir."
    },
    {
        question: "Hangi programlama dili 'Rust' dilinin geliştirilmesinde örnek alınmamıştır?",
        options: ["Haskell", "OCaml", "C++", "MATLAB"],
        correct: 3,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Bu dil daha çok bilimsel hesaplamalar için kullanılır."
    },
    {
        question: "Dünyanın en büyük memelisi hangisidir?",
        options: ["Fil", "Mavi balina", "Zürafa", "Gergedan"],
        correct: 1,
        category: "Bilim",
        level: 1,
        reward: 100,
        hint: "Okyanuslarda yaşayan bir memeli."
    },
    {
        question: "Guacamole'nin ana malzemesi nedir?",
        options: ["Domates", "Biber", "Avokado", "Soğan"],
        correct: 2,
        category: "Genel Kültür",
        level: 1,
        reward: 100,
        hint: "Yeşil renkli, yağlı bir meyve."
    },
    {
        question: "Mona Lisa'yı kim çizdi?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Vincent van Gogh"],
        correct: 1,
        category: "Sanat",
        level: 1,
        reward: 100,
        hint: "İtalyan Rönesans döneminin en ünlü sanatçılarından biri."
    },
    {
        question: "Dünyadaki en büyük okyanusun adı nedir?",
        options: ["Atlantik", "Pasifik", "Hint", "Arktik"],
        correct: 1,
        category: "Coğrafya",
        level: 1,
        reward: 100,
        hint: "Yüzölçümü tüm okyanusların toplamının yaklaşık yarısı kadardır."
    },
    {
        question: "Yunan mitolojisinde tanrıların kralı kimdir?",
        options: ["Poseidon", "Zeus", "Hades", "Apollo"],
        correct: 1,
        category: "Tarih",
        level: 2,
        reward: 200,
        hint: "Olimpos Dağı'nın hakimi ve yıldırımların efendisi."
    },
    {
        question: "Güneş sistemimiz hangi galakside yer almaktadır?",
        options: ["Andromeda", "Samanyolu", "Üçgen", "Büyük Macellan"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Geceleyin gökyüzünde görülebilen beyaz şerit."
    },
    {
        question: "İnsanlar arasında en nadir bulunan kan grubu hangisidir?",
        options: ["0-negatif", "AB-negatif", "B-negatif", "A-negatif"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Dünya nüfusunun sadece %1'inde bulunur."
    },
    {
        question: "Facebook'u kurmadan önce Mark Zuckerberg'in oluşturduğu web sitesinin adı neydi?",
        options: ["MySpace", "Facemash", "ConnectU", "Harvard Network"],
        correct: 1,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Harvard öğrencilerinin fotoğraflarını karşılaştıran bir site."
    },
    {
        question: "Civa elementinin kimyasal sembolü nedir?",
        options: ["Cv", "Hg", "Ci", "Mg"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Latince 'hydrargyrum' kelimesinden gelir."
    },
    {
        question: "Jüpiter'in en büyük uydusunun adı nedir?",
        options: ["Io", "Europa", "Ganymede", "Callisto"],
        correct: 2,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Güneş sistemindeki en büyük uydu."
    },
    {
        question: "Yan tarafına doğru dönen tek gezegen hangisidir?",
        options: ["Neptün", "Uranüs", "Satürn", "Mars"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Eksen eğikliği yaklaşık 98 derece."
    },
    {
        question: "Berlin Duvarı hangi yılda yıkıldı?",
        options: ["1991", "1989", "1987", "1985"],
        correct: 1,
        category: "Tarih",
        level: 2,
        reward: 200,
        hint: "Soğuk Savaş'ın sonunu simgeleyen olay."
    },
    {
        question: "Modern Fiziğin Babası olarak bilinen kişi kimdir?",
        options: ["Newton", "Einstein", "Galileo", "Hawking"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Görelilik teorisini geliştiren bilim insanı."
    },
    {
        question: "iPhone'un ilk modeli hangi yıl piyasaya sürüldü?",
        options: ["2005", "2006", "2007", "2008"],
        correct: 2,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Steve Jobs tarafından tanıtıldı."
    },
    {
        question: "Linus Torvalds tarafından oluşturulan açık kaynaklı işletim sisteminin adı nedir?",
        options: ["Unix", "Linux", "Windows", "MacOS"],
        correct: 1,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Penguen maskotu vardır."
    },
    {
        question: "Penisilini kim keşfetti?",
        options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "1928 yılında tesadüfen keşfetti."
    },
    {
        question: "Güneş sistemindeki en sıcak gezegen hangisidir?",
        options: ["Merkür", "Venüs", "Mars", "Jüpiter"],
        correct: 1,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Yoğun sera etkisi nedeniyle."
    },
    {
        question: "Batman'in uşağının adı nedir?",
        options: ["James", "Alfred", "William", "Thomas"],
        correct: 1,
        category: "Eğlence",
        level: 1,
        reward: 100,
        hint: "Bruce Wayne'in sadık yardımcısı."
    },
    {
        question: "Frozen filminde Kraliçe Elsa'nın buzdan kalesini inşa ederken söylediği şarkının adı nedir?",
        options: ["Into the Unknown", "Let It Go", "For the First Time in Forever", "Do You Want to Build a Snowman"],
        correct: 1,
        category: "Eğlence",
        level: 1,
        reward: 100,
        hint: "Film'in en popüler şarkısı."
    }
];

// Soruları kategorilere göre grupla
const questionsByCategory = questions.reduce((acc, question) => {
    if (!acc[question.category]) {
        acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
}, {});

// Soruları seviyelere göre grupla
const questionsByLevel = questions.reduce((acc, question) => {
    if (!acc[question.level]) {
        acc[question.level] = [];
    }
    acc[question.level].push(question);
    return acc;
}, {}); 