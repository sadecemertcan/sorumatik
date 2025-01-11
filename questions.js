// Soru veritabanı
const questions = [
    {
        question: "Hangi element periyodik tabloda 'Fe' sembolü ile gösterilir?",
        options: ["Demir", "Flor", "Fosfor", "Fermiyum"],
        correct: 0,
        category: "Bilim",
        level: 1,
        reward: 100,
        hint: "Günlük hayatta sıkça kullandığımız metalik bir elementtir."
    },
    {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Ağrı Dağı", "Erciyes Dağı", "Kaçkar Dağı", "Süphan Dağı"],
        correct: 0,
        category: "Coğrafya",
        level: 1,
        reward: 100,
        hint: "5137 metre yüksekliğindedir ve Doğu Anadolu Bölgesi'nde yer alır."
    },
    {
        question: "Hangisi bir web tarayıcısı değildir?",
        options: ["Photoshop", "Chrome", "Firefox", "Safari"],
        correct: 0,
        category: "Teknoloji",
        level: 1,
        reward: 100,
        hint: "Bu program görüntü düzenleme için kullanılır."
    },
    {
        question: "Hangi yıl Türkiye Cumhuriyeti kurulmuştur?",
        options: ["1923", "1920", "1922", "1924"],
        correct: 0,
        category: "Tarih",
        level: 2,
        reward: 200,
        hint: "Cumhuriyet Bayramı bu tarihte kutlanır."
    },
    {
        question: "İnsan vücudunda kaç kemik vardır?",
        options: ["206", "186", "226", "246"],
        correct: 0,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Yetişkin bir insanda bu sayı sabittir."
    },
    {
        question: "Yapay zeka terimi ilk kez hangi yıl kullanılmıştır?",
        options: ["1956", "1946", "1966", "1976"],
        correct: 0,
        category: "Teknoloji",
        level: 2,
        reward: 200,
        hint: "Dartmouth Konferansı'nda ortaya çıkmıştır."
    },
    {
        question: "Dünya'nın en derin okyanus çukuru hangisidir?",
        options: ["Mariana Çukuru", "Puerto Rico Çukuru", "Java Çukuru", "Filipin Çukuru"],
        correct: 0,
        category: "Coğrafya",
        level: 3,
        reward: 300,
        hint: "Pasifik Okyanusu'nda yer alır."
    },
    {
        question: "Kuantum bilgisayarlar hangi birimle çalışır?",
        options: ["Qubit", "Byte", "Bit", "Megabyte"],
        correct: 0,
        category: "Teknoloji",
        level: 3,
        reward: 300,
        hint: "Klasik bilgisayarlardaki bit'in kuantum versiyonudur."
    },
    {
        question: "İnsan DNA'sı yüzde kaç oranında şempanzelerle benzerdir?",
        options: ["98", "95", "90", "85"],
        correct: 0,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Bu oran %95'ten fazladır."
    },
    {
        question: "Bir ışık yılı kaç kilometredir?",
        options: ["9.46 trilyon", "8.46 trilyon", "7.46 trilyon", "6.46 trilyon"],
        correct: 0,
        category: "Bilim",
        level: 3,
        reward: 300,
        hint: "Işığın bir yılda aldığı mesafedir."
    },
    {
        question: "Romeo ve Juliet hangi ünlü yazara aittir?",
        options: ["William Shakespeare", "Charles Dickens", "Victor Hugo", "Jane Austen"],
        correct: 0,
        category: "Sanat",
        level: 1,
        reward: 100,
        hint: "İngiliz edebiyatının en önemli yazarlarından biridir."
    },
    {
        question: "Güneş sistemindeki en büyük gezegen hangisidir?",
        options: ["Jüpiter", "Satürn", "Uranüs", "Neptün"],
        correct: 0,
        category: "Bilim",
        level: 1,
        reward: 100,
        hint: "Roma mitolojisinde tanrıların kralı olan bir tanrının adını taşır."
    },
    {
        question: "İstanbul hangi yıl fethedilmiştir?",
        options: ["1453", "1454", "1452", "1455"],
        correct: 0,
        category: "Tarih",
        level: 1,
        reward: 100,
        hint: "Fatih Sultan Mehmet tarafından fethedilmiştir."
    },
    {
        question: "Hangisi bir programlama dili değildir?",
        options: ["Microsoft Word", "Python", "Java", "C++"],
        correct: 0,
        category: "Teknoloji",
        level: 1,
        reward: 100,
        hint: "Bu program metin düzenleme için kullanılır."
    },
    {
        question: "DNA'nın açılımı nedir?",
        options: ["Deoksiribo Nükleik Asit", "Deoksi Nitrik Asit", "Deoksiribo Nitrik Asit", "Deoksi Nükleik Asit"],
        correct: 0,
        category: "Bilim",
        level: 2,
        reward: 200,
        hint: "Genetik bilgilerimizi taşıyan moleküldür."
    },
    {
        question: "Hangi yıl Türk kadınlarına seçme ve seçilme hakkı verilmiştir?",
        options: ["1934", "1923", "1935", "1932"],
        correct: 0,
        category: "Tarih",
        level: 2,
        reward: 200,
        hint: "Birçok Avrupa ülkesinden önce bu hak tanınmıştır."
    },
    {
        question: "Picasso hangi sanat akımının öncülerindendir?",
        options: ["Kübizm", "Empresyonizm", "Romantizm", "Realizm"],
        correct: 0,
        category: "Sanat",
        level: 2,
        reward: 200,
        hint: "Nesneleri geometrik şekillerle ifade eden bir akımdır."
    },
    {
        question: "Hangisi bir işletim sistemi değildir?",
        options: ["Excel", "Windows", "Linux", "MacOS"],
        correct: 0,
        category: "Teknoloji",
        level: 1,
        reward: 100,
        hint: "Bu program tablolama ve hesaplama için kullanılır."
    },
    {
        question: "Dünya'nın en büyük okyanusu hangisidir?",
        options: ["Pasifik", "Atlantik", "Hint", "Arktik"],
        correct: 0,
        category: "Coğrafya",
        level: 1,
        reward: 100,
        hint: "Yüzölçümü tüm okyanusların toplamının yaklaşık yarısı kadardır."
    },
    {
        question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
        options: ["Mars", "Venüs", "Merkür", "Jüpiter"],
        correct: 0,
        category: "Bilim",
        level: 1,
        reward: 100,
        hint: "Yüzeyindeki demir oksit nedeniyle kırmızı görünür."
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