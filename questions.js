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
        question: "'Photosynthesis' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው? ከተሰጡት አማራጮች ትክክለኛውን ለይ።",
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
        id: 'CQ-20261108-003',
        category: 'Science',
        difficulty: 'hard',
        question: "'Photosynthesis' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል? በአካዳሚክ አጠቃቀሙ መሠረት መልስ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 1,
        explanation: "በዚህ ሂደት ተክሎች ብርሃንን ወደ ኬሚካላዊ ኃይል ይቀይራሉ።"
    },
    {
        id: 'CQ-20261108-004',
        category: 'Science',
        difficulty: 'very_hard',
        question: "'Photosynthesis' በተግባር የሚያብራራው ምንድን ነው? በጽንሰ-ሐሳቡ መሠረታዊ ባህሪ ላይ ተመስርተህ ምረጥ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት"
        ],
        correct_answer: 3,
        explanation: "በዚህ ሂደት ተክሎች ብርሃንን ወደ ኬሚካላዊ ኃይል ይቀይራሉ።"
    },
    {
        id: 'CQ-20261108-005',
        category: 'Science',
        difficulty: 'expert',
        question: "'Photosynthesis' የሚለውን ቃል በትክክል የሚገልጸው የትኛው ነው? ከሚከተሉት ውስጥ በትክክል የሚያብራራውን ምረጥ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 2,
        explanation: "በዚህ ሂደት ተክሎች ብርሃንን ወደ ኬሚካላዊ ኃይል ይቀይራሉ።"
    },
    {
        id: 'CQ-20261108-006',
        category: 'Science',
        difficulty: 'easy',
        question: "'Diffusion' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው? ትክክለኛውን ትርጉም ምረጥ።",
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
        id: 'CQ-20261108-007',
        category: 'Science',
        difficulty: 'medium',
        question: "'Diffusion' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል? ከተሰጡት አማራጮች ትክክለኛውን ለይ።",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት"
        ],
        correct_answer: 3,
        explanation: "Diffusion ቅንጣቶች በኮንሰንትሬሽን ልዩነት እንዲሰራጩ ያደርጋል።"
    },
    {
        id: 'CQ-20261108-008',
        category: 'Science',
        difficulty: 'hard',
        question: "'Diffusion' በተግባር የሚያብራራው ምንድን ነው? በአካዳሚክ አጠቃቀሙ መሠረት መልስ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "የተግባር ፈጣን የለውጥ መጠን"
        ],
        correct_answer: 1,
        explanation: "Diffusion ቅንጣቶች በኮንሰንትሬሽን ልዩነት እንዲሰራጩ ያደርጋል።"
    },
    {
        id: 'CQ-20261108-009',
        category: 'Science',
        difficulty: 'very_hard',
        question: "'Diffusion' የሚለውን ቃል በትክክል የሚገልጸው የትኛው ነው? በጽንሰ-ሐሳቡ መሠረታዊ ባህሪ ላይ ተመስርተህ ምረጥ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት"
        ],
        correct_answer: 3,
        explanation: "Diffusion ቅንጣቶች በኮንሰንትሬሽን ልዩነት እንዲሰራጩ ያደርጋል።"
    },
    {
        id: 'CQ-20261108-010',
        category: 'Science',
        difficulty: 'expert',
        question: "'Diffusion' በዋናነት ምንን ይገልጻል? ከሚከተሉት ውስጥ በትክክል የሚያብራራውን ምረጥ።",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት"
        ],
        correct_answer: 1,
        explanation: "Diffusion ቅንጣቶች በኮንሰንትሬሽን ልዩነት እንዲሰራጩ ያደርጋል።"
    },
    {
        id: 'CQ-20261108-011',
        category: 'Science',
        difficulty: 'easy',
        question: "'Osmosis' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል? ትክክለኛውን ትርጉም ምረጥ።",
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
        id: 'CQ-20261108-012',
        category: 'Science',
        difficulty: 'medium',
        question: "'Osmosis' በተግባር የሚያብራራው ምንድን ነው? ከተሰጡት አማራጮች ትክክለኛውን ለይ።",
        options: [
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 0,
        explanation: "Osmosis የውሃ ንቅናቄ በselectively permeable membrane በኩል ነው።"
    },
    {
        id: 'CQ-20261108-013',
        category: 'Science',
        difficulty: 'hard',
        question: "'Osmosis' የሚለውን ቃል በትክክል የሚገልጸው የትኛው ነው? በአካዳሚክ አጠቃቀሙ መሠረት መልስ።",
        options: [
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "የተግባር ፈጣን የለውጥ መጠን"
        ],
        correct_answer: 0,
        explanation: "Osmosis የውሃ ንቅናቄ በselectively permeable membrane በኩል ነው።"
    },
    {
        id: 'CQ-20261108-014',
        category: 'Science',
        difficulty: 'very_hard',
        question: "'Osmosis' በዋናነት ምንን ይገልጻል? በጽንሰ-ሐሳቡ መሠረታዊ ባህሪ ላይ ተመስርተህ ምረጥ።",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 1,
        explanation: "Osmosis የውሃ ንቅናቄ በselectively permeable membrane በኩል ነው።"
    },
    {
        id: 'CQ-20261108-015',
        category: 'Science',
        difficulty: 'expert',
        question: "'Osmosis' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው? ከሚከተሉት ውስጥ በትክክል የሚያብራራውን ምረጥ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "የተግባር ፈጣን የለውጥ መጠን"
        ],
        correct_answer: 2,
        explanation: "Osmosis የውሃ ንቅናቄ በselectively permeable membrane በኩል ነው።"
    },
    {
        id: 'CQ-20261108-016',
        category: 'Science',
        difficulty: 'easy',
        question: "'Density' በተግባር የሚያብራራው ምንድን ነው? ትክክለኛውን ትርጉም ምረጥ።",
        options: [
            "የአንድ ነገር የክብደት መጠን በአንድ የድምፅ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት"
        ],
        correct_answer: 0,
        explanation: "Density በmass/volume ይገለጻል።"
    },
    {
        id: 'CQ-20261108-017',
        category: 'Science',
        difficulty: 'medium',
        question: "'Density' የሚለውን ቃል በትክክል የሚገልጸው የትኛው ነው? ከተሰጡት አማራጮች ትክክለኛውን ለይ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "የአንድ ነገር የክብደት መጠን በአንድ የድምፅ መጠን",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 1,
        explanation: "Density በmass/volume ይገለጻል።"
    },
    {
        id: 'CQ-20261108-018',
        category: 'Science',
        difficulty: 'hard',
        question: "'Density' በዋናነት ምንን ይገልጻል? በአካዳሚክ አጠቃቀሙ መሠረት መልስ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "የአንድ ነገር የክብደት መጠን በአንድ የድምፅ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "የተግባር ፈጣን የለውጥ መጠን"
        ],
        correct_answer: 1,
        explanation: "Density በmass/volume ይገለጻል።"
    },
    {
        id: 'CQ-20261108-019',
        category: 'Science',
        difficulty: 'very_hard',
        question: "'Density' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው? በጽንሰ-ሐሳቡ መሠረታዊ ባህሪ ላይ ተመስርተህ ምረጥ።",
        options: [
            "የአንድ ነገር የክብደት መጠን በአንድ የድምፅ መጠን",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 0,
        explanation: "Density በmass/volume ይገለጻል።"
    },
    {
        id: 'CQ-20261108-020',
        category: 'Science',
        difficulty: 'expert',
        question: "'Density' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል? ከሚከተሉት ውስጥ በትክክል የሚያብራራውን ምረጥ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "የአንድ ነገር የክብደት መጠን በአንድ የድምፅ መጠን"
        ],
        correct_answer: 3,
        explanation: "Density በmass/volume ይገለጻል።"
    },
    {
        id: 'CQ-20261108-021',
        category: 'Science',
        difficulty: 'easy',
        question: "'Scientific method' የሚለውን ቃል በትክክል የሚገልጸው የትኛው ነው? ትክክለኛውን ትርጉም ምረጥ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ጥያቄ፣ መላምት፣ ሙከራና ትንተና የሚያካትት የምርምር ሂደት",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት"
        ],
        correct_answer: 2,
        explanation: "Scientific method ማስረጃ በመጠቀም ጥያቄዎችን ይመልሳል።"
    },
    {
        id: 'CQ-20261108-022',
        category: 'Science',
        difficulty: 'medium',
        question: "'Scientific method' በዋናነት ምንን ይገልጻል? ከተሰጡት አማራጮች ትክክለኛውን ለይ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ጥያቄ፣ መላምት፣ ሙከራና ትንተና የሚያካትት የምርምር ሂደት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት"
        ],
        correct_answer: 1,
        explanation: "Scientific method ማስረጃ በመጠቀም ጥያቄዎችን ይመልሳል።"
    },
    {
        id: 'CQ-20261108-023',
        category: 'Science',
        difficulty: 'hard',
        question: "'Scientific method' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው? በአካዳሚክ አጠቃቀሙ መሠረት መልስ።",
        options: [
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ጥያቄ፣ መላምት፣ ሙከራና ትንተና የሚያካትት የምርምር ሂደት",
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 1,
        explanation: "Scientific method ማስረጃ በመጠቀም ጥያቄዎችን ይመልሳል።"
    },
    {
        id: 'CQ-20261108-024',
        category: 'Science',
        difficulty: 'very_hard',
        question: "'Scientific method' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል? በጽንሰ-ሐሳቡ መሠረታዊ ባህሪ ላይ ተመስርተህ ምረጥ።",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ጥያቄ፣ መላምት፣ ሙከራና ትንተና የሚያካትት የምርምር ሂደት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት"
        ],
        correct_answer: 1,
        explanation: "Scientific method ማስረጃ በመጠቀም ጥያቄዎችን ይመልሳል።"
    },
    {
        id: 'CQ-20261108-025',
        category: 'Science',
        difficulty: 'expert',
        question: "'Scientific method' በተግባር የሚያብራራው ምንድን ነው? ከሚከተሉት ውስጥ በትክክል የሚያብራራውን ምረጥ።",
        options: [
            "የተግባር ፈጣን የለውጥ መጠን",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ለእያንዳንዱ input አንድ ብቻ output የሚያዛምድ ግንኙነት",
            "ጥያቄ፣ መላምት፣ ሙከራና ትንተና የሚያካትት የምርምር ሂደት"
        ],
        correct_answer: 3,
        explanation: "Scientific method ማስረጃ በመጠቀም ጥያቄዎችን ይመልሳል።"
    },
    {
        id: 'CQ-20261108-026',
        category: 'Mathematics',
        difficulty: 'easy',
        question: "'Prime number' በዋናነት ምንን ይገልጻል? ትክክለኛውን ትርጉም ምረጥ።",
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
        id: 'CQ-20261108-027',
        category: 'Mathematics',
        difficulty: 'medium',
        question: "'Prime number' በትምህርቱ ውስጥ የሚያመለክተው የትኛውን ጽንሰ-ሐሳብ ነው? ከተሰጡት አማራጮች ትክክለኛውን ለይ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት"
        ],
        correct_answer: 0,
        explanation: "Prime number ሁለት አዎንታዊ አካፋዮች ብቻ አሉት።"
    },
    {
        id: 'CQ-20261108-028',
        category: 'Mathematics',
        difficulty: 'hard',
        question: "'Prime number' ከሚከተሉት የትኛው ትርጉም ጋር ይዛመዳል? በአካዳሚክ አጠቃቀሙ መሠረት መልስ።",
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
        id: 'CQ-20261108-029',
        category: 'Mathematics',
        difficulty: 'very_hard',
        question: "'Prime number' በተግባር የሚያብራራው ምንድን ነው? በጽንሰ-ሐሳቡ መሠረታዊ ባህሪ ላይ ተመስርተህ ምረጥ።",
        options: [
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት"
        ],
        correct_answer: 0,
        explanation: "Prime number ሁለት አዎንታዊ አካፋዮች ብቻ አሉት።"
    },
    {
        id: 'CQ-20261108-030',
        category: 'Mathematics',
        difficulty: 'expert',
        question: "'Prime number' የሚለውን ቃል በትክክል የሚገልጸው የትኛው ነው? ከሚከተሉት ውስጥ በትክክል የሚያብራራውን ምረጥ።",
        options: [
            "ተክሎች በብርሃን ኃይል ምግብ የሚያዘጋጁበት ሂደት",
            "ቅንጣቶች ከከፍተኛ ኮንሰንትሬሽን ወደ ዝቅተኛ መሰራጨት",
            "ውሃ በከፊል የሚያሳልፍ ሽፋን በኩል የሚንቀሳቀስበት ሂደት",
            "ከ1 በላይ በ1ና በራሱ ብቻ የሚካፈል ሙሉ ቁጥር"
        ],
        correct_answer: 3,
        explanation: "Prime number ሁለት አዎንታዊ አካፋዮች ብቻ አሉት።"
    }
];
