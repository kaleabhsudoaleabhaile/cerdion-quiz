// ጥያቄዎችን የያዘ ዋና የ JavaScript Array
const questionsData = [
    {
        id: 'CQ-20261108-001',
        category: 'Science',
        difficulty: 'easy',
        question: "'Photosynthesis' በዋናነት ምንን ይገልጻል? ትክክለኛውን ትርጉም ምረጥ።",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 2,
        explanation: "በዚህ ሂደት ተክሎች ብርሃንን ወደ ኬሚካላዊ ኃይል ይቀይራሉ።"
    },
    {
        id: 'CQ-20261108-002',
        category: 'Science',
        difficulty: 'medium',
        question: "'Photosynthesis' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው?",
        options: [
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት"
        ],
        correct_answer: 0,
        explanation: "በዚህ ሂደት ተክሎች ብርሃንን ወደ ኬሚካላዊ ኃይል ይቀይራሉ።"
    },
    {
        id: 'CQ-20261108-006',
        category: 'Science',
        difficulty: 'easy',
        question: "'Diffusion' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው?",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 1,
        explanation: "Diffusion ቅንጣቶች በኮንሰንትሬሽን ልዩነት እንዲሰራጩ ያደርጋል።"
    },
    {
        id: 'CQ-20261108-011',
        category: 'Science',
        difficulty: 'easy',
        question: "'Osmosis' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል?",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 2,
        explanation: "Osmosis የውሃ ንቅናቄ በselectively permeable membrane በኩል ነው።"
    },
    {
        id: 'CQ-20261108-026',
        category: 'Mathematics',
        difficulty: 'easy',
        question: "'Prime number' በዋናነት ምንን ይገልጻል?",
        options: [
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት"
        ],
        correct_answer: 1,
        explanation: "Prime number ሁለት አዎንታዊ አካፋዮች ብቻ አሉት።"
    },
    {
        id: 'CQ-20261108-031',
        category: 'Mathematics',
        difficulty: 'easy',
        question: "'Function' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው?",
        options: [
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት"
        ],
        correct_answer: 2,
        explanation: "በfunction ውስጥ አንድ input ከአንድ በላይ output አይኖረውም።"
    },
    {
        id: 'CQ-20261108-051',
        category: 'Physics',
        difficulty: 'easy',
        question: "'Newton's first law' በዋናነት ምንን ይገልጻል?",
        options: [
            "ውጫዊ የተጣራ ኃይል ካልተገባ ነገር የእረፍት ወይም የቋሚ ፍጥነት ሁኔታውን ይጠብቃል",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት"
        ],
        correct_answer: 0,
        explanation: "ይህ የinertia ሕግ ተብሎም ይጠራል።"
    },
    {
        id: 'CQ-20261108-101',
        category: 'Biology',
        difficulty: 'easy',
        question: "'DNA' በዋናነት ምንን ይገልጻል?",
        options: [
            "የዘር ውርስ መረጃን የሚይዝ ኒውክሊክ አሲድ",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት"
        ],
        correct_answer: 0,
        explanation: "DNA የዘር መረጃ ዋና ማከማቻ ነው።"
    },
    {
        id: 'CQ-20261108-126',
        category: 'Computer Science',
        difficulty: 'easy',
        question: "'Algorithm' በዋናነት ምንን ይገልጻል?",
        options: [
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ችግርን ለመፍታት የተደራጀ የደረጃዎች ስብስብ",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት"
        ],
        correct_answer: 1,
        explanation: "Algorithm ግልጽና የሚያበቃ ደረጃዎችን ይይዛል።"
    },
    {
        id: 'CQ-20261108-151',
        category: 'AI',
        difficulty: 'easy',
        question: "'Machine learning' በዋናነት ምንን ይገልጻል?",
        options: [
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ኮምፒዩተር ከዳታ ቅጦችን በመማር ትንበያ ወይም ውሳኔ የሚያደርግበት ዘርፍ",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት"
        ],
        correct_answer: 1,
        explanation: "Machine learning በዳታ ላይ ተመስርቶ ሞዴል ያሠለጥናል።"
    }
];
