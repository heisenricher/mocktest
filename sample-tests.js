// Dedicated SSC CGL Mock Tests Dataset
const SAMPLE_MOCK_TESTS = [
  {
    id: "ssc-cgl-tier1-full-01",
    title: "SSC CGL Tier-1 Official Full Mock Test 01",
    category: "Tier-1 Full Length",
    durationMinutes: 60,
    totalQuestions: 20,
    totalMarks: 40,
    negativeMarking: true,
    description: "Exact 60-minute SSC CGL Tier-1 exam replica with 4 sections: Reasoning, GA, Quant, and English (+2.00 / -0.50 marking).",
    questions: [
      // SECTION 1: GENERAL INTELLIGENCE & REASONING
      {
        id: 1,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "Select the option that is related to the third word in the same way as the second word is related to the first word.\n\nPaleontology : Fossils :: Ornithology : ?",
        options: ["Insects", "Birds", "Reptiles", "Rocks"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Paleontology is the study of fossils. Similarly, Ornithology is the study of birds."
      },
      {
        id: 2,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "In a certain code language, 'BUILDING' is coded as 'DWIJFKPK'. How will 'TOWERING' be coded in that language?",
        options: ["VQYGTKPI", "VQYGTKPK", "VQYGTKQI", "WRZHUJQK"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Every letter is shifted by +2 position in alphabetical order: T(+2)=V, O(+2)=Q, W(+2)=Y, E(+2)=G, R(+2)=T, I(+2)=K, N(+2)=P, G(+2)=I => VQYGTKPI."
      },
      {
        id: 3,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "Statements:\n1. All cars are vehicles.\n2. Some vehicles are electric.\n\nConclusions:\nI. Some electric items are cars.\nII. Some vehicles are cars.",
        options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Since All cars are vehicles, by conversion 'Some vehicles are cars' is definitely TRUE (Conclusion II)."
      },
      {
        id: 4,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "Pointing to a photograph of a woman, Rahul said, 'She is the mother of the only daughter of my father-in-law.' How is the woman related to Rahul?",
        options: ["Sister", "Mother", "Wife", "Mother-in-law"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'My father-in-law's only daughter' = Rahul's Wife. 'The mother of Rahul's wife's daughter' = Rahul's Wife."
      },
      {
        id: 5,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "Select the missing number in the series: 7, 11, 19, 35, 67, ?",
        options: ["121", "131", "129", "135"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Difference doubles each step: +4, +8, +16, +32. Next difference = +64. 67 + 64 = 131."
      },

      // SECTION 2: GENERAL AWARENESS
      {
        id: 6,
        section: "General Awareness",
        type: "single",
        question: "Which Constitutional Amendment Act added the 11th Fundamental Duty under Article 51A of the Indian Constitution?",
        options: ["44th Amendment Act, 1978", "86th Amendment Act, 2002", "42nd Amendment Act, 1976", "91st Amendment Act, 2003"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "The 86th Constitutional Amendment Act, 2002 added fundamental duty 51A(k) for children's education aged 6-14."
      },
      {
        id: 7,
        section: "General Awareness",
        type: "single",
        question: "Who among the following was the founder of the Maurya Dynasty in ancient India?",
        options: ["Ashoka the Great", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Chandragupta Maurya founded the Maurya Empire in 322 BCE with Chanakya's guidance."
      },
      {
        id: 8,
        section: "General Awareness",
        type: "single",
        question: "In physics, what is the SI unit of Magnetic Flux?",
        options: ["Tesla", "Weber (Wb)", "Henry", "Gauss"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "The SI unit of Magnetic Flux is Weber (Wb)."
      },
      {
        id: 9,
        section: "General Awareness",
        type: "single",
        question: "Which Indian river is known as the 'Vridha Ganga' due to its large age and length?",
        options: ["Krishna", "Mahanadi", "Godavari", "Kaveri"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Godavari is the largest peninsular river system in India and is called 'Vridha Ganga'."
      },
      {
        id: 10,
        section: "General Awareness",
        type: "single",
        question: "What is 'Fiscal Deficit' in the Union Budget of India?",
        options: [
          "Total tax collection from GST",
          "Difference between total government expenditure and total receipts (excluding borrowings)",
          "Difference between total exports and imports",
          "Total foreign direct investment"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Fiscal Deficit represents total government borrowing requirements = Total Expenditure - Receipts (excl. borrowings)."
      },

      // SECTION 3: QUANTITATIVE APTITUDE
      {
        id: 11,
        section: "Quantitative Aptitude",
        type: "single",
        question: "If sin θ + cos θ = √2 cos θ, then what is the value of (cos θ - sin θ)?",
        options: ["√2 sin θ", "√2 cos θ", "1 / √2", "sin θ"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "sin θ = (√2 - 1) cos θ => (√2 + 1) sin θ = cos θ => cos θ - sin θ = √2 sin θ."
      },
      {
        id: 12,
        section: "Quantitative Aptitude",
        type: "single",
        question: "A, B, and C can complete a piece of work in 10, 12, and 15 days respectively. Working together, in how many days will the work be finished?",
        options: ["4 days", "5 days", "6 days", "3.5 days"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "LCM(10, 12, 15) = 60 units. Efficiency sum = 6 + 5 + 4 = 15. Time = 60 / 15 = 4 days."
      },
      {
        id: 13,
        section: "Quantitative Aptitude",
        type: "single",
        question: "In a circle with center O, arc AB subtends 110° at center. What is the angle subtended by arc AB at the circumference?",
        options: ["55°", "220°", "110°", "70°"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Angle at circumference = half of central angle = 110° / 2 = 55°."
      },
      {
        id: 14,
        section: "Quantitative Aptitude",
        type: "single",
        question: "A shopkeeper marks an article 30% above cost price and allows a discount of 15% on marked price. Find net profit %.",
        options: ["10.5%", "12.5%", "15%", "8.5%"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Net Change = +30 - 15 - (30*15)/100 = 15 - 4.5 = 10.5%."
      },
      {
        id: 15,
        section: "Quantitative Aptitude",
        type: "single",
        question: "The ratio of boat speed in still water to river current is 5:1. If boat takes 4 hours to go 48 km downstream, find upstream time for 48 km.",
        options: ["6 hours", "8 hours", "5 hours", "7 hours"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Downstream speed = 12 km/h (6x = 12 => x=2). Boat = 10, Current = 2. Upstream speed = 8 km/h. Time = 48/8 = 6 hours."
      },

      // SECTION 4: ENGLISH COMPREHENSION
      {
        id: 16,
        section: "English Comprehension",
        type: "single",
        question: "Select the option that corrects the underlined error:\n\n'Neither the manager nor his assistants *were present in the conference hall*.'",
        options: [
          "was present in the conference hall",
          "were present at the conference hall",
          "has present in the conference hall",
          "No correction required"
        ],
        correctAnswer: 3,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "With 'neither... nor', verb agrees with the closest subject ('assistants' -> plural verb 'were present'). No correction required."
      },
      {
        id: 17,
        section: "English Comprehension",
        type: "single",
        question: "Select the most appropriate SYNONYM of 'Meticulous':",
        options: ["Careless", "Fastidious", "Hasty", "Sloppy"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'Meticulous' means extremely careful and precise. 'Fastidious' is the closest synonym."
      },
      {
        id: 18,
        section: "English Comprehension",
        type: "single",
        question: "Select the most appropriate ANTONYM of 'AUDACIOUS':",
        options: ["Bold", "Timid", "Courageous", "Daring"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'Audacious' means bold/daring. Antonym is 'Timid'."
      },
      {
        id: 19,
        section: "English Comprehension",
        type: "single",
        question: "Select the meaning of the idiom: 'To bite the bullet'",
        options: [
          "To get shot in battle",
          "To force yourself to undergo something difficult or unpleasant",
          "To express anger openly",
          "To waste time on trivial matters"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'To bite the bullet' means to face a difficult situation courageously."
      },
      {
        id: 20,
        section: "English Comprehension",
        type: "single",
        question: "Select the correctly spelt word:",
        options: ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Correct spelling is 'Accommodate' (double c, double m)."
      }
    ]
  },
  {
    id: "ssc-cgl-quant-sectional-01",
    title: "SSC CGL Quantitative Aptitude Sectional Speed Test",
    category: "Quant Sectional",
    durationMinutes: 25,
    totalQuestions: 10,
    totalMarks: 20,
    negativeMarking: true,
    description: "Dedicated Quant Sectional covering Geometry, Algebra, Trigonometry, Arithmetic, and Data Interpretation.",
    questions: [
      {
        id: 1,
        section: "Quantitative Aptitude",
        type: "single",
        question: "If x + (1/x) = 5, what is the value of x³ + (1/x³)?",
        options: ["110", "115", "125", "140"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Formula: x³ + (1/x³) = k³ - 3k = 5³ - 3(5) = 125 - 15 = 110."
      },
      {
        id: 2,
        section: "Quantitative Aptitude",
        type: "single",
        question: "The radius of a sphere is increased by 10%. By what percentage does its volume increase?",
        options: ["33.1%", "30%", "31%", "34.2%"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Volume formula contains r³. Percentage change = (1.10)³ - 1 = 1.331 - 1 = 33.1% increase."
      },
      {
        id: 3,
        section: "Quantitative Aptitude",
        type: "single",
        question: "If a shopkeeper sells an article at 20% profit after 10% discount on marked price, find ratio of Cost Price to Marked Price.",
        options: ["3 : 4", "2 : 3", "4 : 5", "5 : 6"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Ratio CP / MP = (100 - Discount%) / (100 + Profit%) = (100 - 10) / (100 + 20) = 90 / 120 = 3 : 4."
      },
      {
        id: 4,
        section: "Quantitative Aptitude",
        type: "single",
        question: "Find the HCF of 2/3, 8/9, 64/81 and 10/27.",
        options: ["2 / 81", "160 / 3", "2 / 3", "1 / 81"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "HCF of fractions = HCF(Numerators) / LCM(Denominators) = HCF(2, 8, 64, 10) / LCM(3, 9, 81, 27) = 2 / 81."
      },
      {
        id: 5,
        section: "Quantitative Aptitude",
        type: "single",
        question: "A train 150m long passes a pole in 12 seconds. Find speed of train in km/h.",
        options: ["45 km/h", "50 km/h", "54 km/h", "60 km/h"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Speed = 150/12 = 12.5 m/s. In km/h = 12.5 * (18/5) = 45 km/h."
      }
    ]
  }
];
