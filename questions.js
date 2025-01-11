// Soru veritabanı
const questions = [
    {
        question: "Kuantum dolanıklık (quantum entanglement) hangi fizik prensibine aykırı görünmektedir?",
        options: ["Lokal Gerçeklik Prensibi", "Heisenberg Belirsizlik İlkesi", "Pauli Dışlama İlkesi", "Schrödinger Dalga Denklemi"],
        correct: 0,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Einstein'ın 'Uzaktan Ürkütücü Etki' olarak tanımladığı fenomen."
    },
    {
        question: "2024 yılı itibariyle dünyanın en güçlü süper bilgisayarı hangisidir?",
        options: ["Frontier", "Summit", "Fugaku", "Tianhe-2"],
        correct: 0,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Oak Ridge Ulusal Laboratuvarı'nda bulunur."
    },
    {
        question: "Hangi programlama paradigması 'monad' kavramını kullanır?",
        options: ["Fonksiyonel Programlama", "Nesne Yönelimli Programlama", "Prosedürel Programlama", "Mantıksal Programlama"],
        correct: 0,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Haskell dilinde yaygın olarak kullanılır."
    },
    {
        question: "RNA'nın protein sentezindeki rolü nedir?",
        options: ["Genetik bilgiyi ribozomlara taşır", "DNA'yı kopyalar", "Hücre zarını oluşturur", "Enerji üretir"],
        correct: 0,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "mRNA olarak da bilinir."
    },
    {
        question: "Hangi element periyodik tabloda 'Fe' sembolü ile gösterilir?",
        options: ["Flor", "Demir", "Fosfor", "Fermiyum"],
        correct: 1,
        category: "Bilim",
        level: 1,
        reward: 100,
        hint: "Günlük hayatta sıkça kullandığımız metalik bir elementtir."
    },
    {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Erciyes Dağı", "Ağrı Dağı", "Kaçkar Dağı", "Süphan Dağı"],
        correct: 1,
        category: "Coğrafya",
        level: 1,
        reward: 100,
        hint: "5137 metre yüksekliğindedir ve Doğu Anadolu Bölgesi'nde yer alır."
    },
    {
        question: "P vs NP problemi hangi matematik alanına aittir?",
        options: ["Topoloji", "Kompleksite Teorisi", "Sayılar Teorisi", "Analiz"],
        correct: 1,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Bilgisayar biliminin en önemli açık problemlerinden biridir."
    },
    {
        question: "Hangi yıl Türkiye Cumhuriyeti kurulmuştur?",
        options: ["1920", "1923", "1922", "1924"],
        correct: 1,
        category: "Tarih",
        level: 2,
        reward: 200,
        hint: "Cumhuriyet Bayramı bu tarihte kutlanır."
    },
    {
        question: "Yapay zeka terimi ilk kez hangi yıl kullanılmıştır?",
        options: ["1946", "1966", "1956", "1976"],
        correct: 2,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Dartmouth Konferansı'nda ortaya çıkmıştır."
    },
    {
        question: "Blockchain teknolojisinde kullanılan konsensüs algoritması hangisi değildir?",
        options: ["SHA-256", "Proof of Work", "Proof of Stake", "Delegated Proof of Stake"],
        correct: 0,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Bu bir hash algoritmasıdır, konsensüs algoritması değil."
    },
    {
        question: "CRISPR-Cas9 teknolojisi hangi alanda kullanılır?",
        options: ["Yapay Zeka", "Gen Düzenleme", "Kuantum Hesaplama", "Blockchain"],
        correct: 1,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "DNA dizilimini değiştirmek için kullanılan bir yöntemdir."
    },
    {
        question: "Hangi programlama dili 'Rust' dilinin geliştirilmesinde örnek alınmamıştır?",
        options: ["C++", "Haskell", "MATLAB", "OCaml"],
        correct: 2,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Bu dil daha çok bilimsel hesaplamalar için kullanılır."
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