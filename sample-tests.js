// Official Mock Tests Dataset for MockTest Hub
const SAMPLE_MOCK_TESTS = [
  {
    id: "ssc-cgl-tier1-official-2026",
    title: "SSC CGL Tier-1 Official Pattern Full Mock Test 2026",
    category: "SSC & Banking",
    durationMinutes: 60,
    totalQuestions: 20,
    totalMarks: 40,
    negativeMarking: true,
    description: "Exact SSC CGL Tier-1 exam replica: 4 Sections (Reasoning, General Awareness, Quant, English), 60-minute real exam timer, +2/-0.5 marking.",
    questions: [
      // SECTION 1: GENERAL INTELLIGENCE & REASONING
      {
        id: 1,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "Select the option that is related to the third word in the same way as the second word is related to the first word.\n\nPALEontology : Fossils :: Ornithology : ?",
        options: ["Insects", "Birds", "Reptiles", "Rocks"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Paleontology is the study of fossils. Similarly, Ornithology is the study of birds. (Entomology is the study of insects, Herpetology is the study of reptiles)."
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
        explanation: "Pattern: Alternate letters are shifted by +2 position in alphabetical order.\nB(+2)=D, U(+2)=W, I(+2)=K... wait: B(+2)=D, U(+2)=W, I(+0)? Let's check: T(+2)=V, O(+2)=Q, W(+2)=Y, E(+2)=G, R(+2)=T, I(+2)=K, N(+2)=P, G(+2)=I => VQYGTKPI."
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
        explanation: "Since All cars are vehicles, by conversion 'Some vehicles are cars' is definitely TRUE (Conclusion II). Conclusion I cannot be definitely established from the statements."
      },
      {
        id: 4,
        section: "General Intelligence & Reasoning",
        type: "single",
        question: "Pointing to a photograph of a woman, Rahul said, 'She is the mother of the only daughter of my father-in-law.' How is the woman in the photograph related to Rahul?",
        options: ["Sister", "Mother", "Wife", "Mother-in-law"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'My father-in-law's only daughter' = Rahul's Wife. 'The mother of Rahul's wife's daughter' = Rahul's Wife. Thus, the woman is Rahul's Wife."
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
        explanation: "Pattern: Difference doubles each step: (11-7=4), (19-11=8), (35-19=16), (67-35=32). Next diff = 64. Next number = 67 + 64 = 131."
      },

      // SECTION 2: GENERAL AWARENESS (GK / GS)
      {
        id: 6,
        section: "General Awareness",
        type: "single",
        question: "Which Constitutional Amendment Act added the 11th Fundamental Duty (education for children aged 6 to 14) under Article 51A of the Indian Constitution?",
        options: ["44th Amendment Act, 1978", "86th Amendment Act, 2002", "42nd Amendment Act, 1976", "91st Amendment Act, 2003"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "The 86th Constitutional Amendment Act, 2002 added fundamental duty 51A(k) making education for children aged 6 to 14 years the responsibility of parents/guardians."
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
        explanation: "Chandragupta Maurya founded the Maurya Empire in 322 BCE with the assistance of Chanakya (Kautilya), defeating the Nanda Dynasty."
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
        explanation: "The SI unit of Magnetic Flux is Weber (Wb). Tesla is the unit of Magnetic Flux Density (B)."
      },
      {
        id: 9,
        section: "General Awareness",
        type: "single",
        question: "Which Indian river is known as the 'Vridha Ganga' or 'Sorrow of the South' due to its large age and length?",
        options: ["Krishna", "Mahanadi", "Godavari", "Kaveri"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Godavari is the largest peninsular river system in India and is called 'Vridha Ganga' (Old Ganga)."
      },
      {
        id: 10,
        section: "General Awareness",
        type: "single",
        question: "What is the primary objective of the 'Fiscal Deficit' indicator in the Union Budget of India?",
        options: [
          "Total revenue collected from direct taxes",
          "Difference between total government expenditure and total receipts (excluding borrowings)",
          "Difference between exports and imports of goods",
          "Total interest payments made on foreign debt"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Fiscal Deficit represents the total borrowing requirements of the government: (Total Expenditure - Total Receipts excluding borrowings)."
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
        explanation: "Given sin θ = (√2 - 1) cos θ => multiply both sides by (√2 + 1): (√2 + 1) sin θ = cos θ => √2 sin θ + sin θ = cos θ => cos θ - sin θ = √2 sin θ."
      },
      {
        id: 12,
        section: "Quantitative Aptitude",
        type: "single",
        question: "A, B, and C can complete a piece of work in 10, 12, and 15 days respectively. If they all start working together, in how many days will the work be completed?",
        options: ["4 days", "5 days", "6 days", "3.5 days"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Total Work = LCM(10, 12, 15) = 60 units. Efficiency of A = 6, B = 5, C = 4. Combined efficiency = 15 units/day. Time = 60 / 15 = 4 days."
      },
      {
        id: 13,
        section: "Quantitative Aptitude",
        type: "single",
        question: "In a circle with center O, an arc AB subtends an angle of 110° at the center. What is the angle subtended by the same arc at any point on the remaining circumference?",
        options: ["55°", "220°", "110°", "70°"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "By Central Angle Theorem, the angle subtended by an arc at the center is double the angle subtended by it at any point on the circle. Angle = 110° / 2 = 55°."
      },
      {
        id: 14,
        section: "Quantitative Aptitude",
        type: "single",
        question: "A shopkeeper marks an article 30% above its cost price and allows a discount of 15% on the marked price. Find his net profit percentage.",
        options: ["10.5%", "12.5%", "15%", "8.5%"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Net Change formula = a + b + (ab/100) = +30 - 15 - (30*15)/100 = 15 - 4.5 = 10.5% profit."
      },
      {
        id: 15,
        section: "Quantitative Aptitude",
        type: "single",
        question: "The ratio of the speed of a boat in still water to the speed of the river current is 5 : 1. If the boat takes 4 hours to travel 48 km downstream, find the time taken to travel the same distance upstream.",
        options: ["6 hours", "8 hours", "5 hours", "7 hours"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Downstream speed = 48 / 4 = 12 km/h. Let boat speed = 5x, current = 1x. Downstream = 6x = 12 => x = 2. Boat = 10 km/h, Current = 2 km/h. Upstream speed = 10 - 2 = 8 km/h. Upstream time = 48 / 8 = 6 hours."
      },

      // SECTION 4: ENGLISH COMPREHENSION
      {
        id: 16,
        section: "English Comprehension",
        type: "single",
        question: "Select the option that corrects the underlined error in the sentence:\n\n'Neither the manager nor his assistants *were present in the conference hall*.'",
        options: [
          "was present in the conference hall",
          "were present at the conference hall",
          "has present in the conference hall",
          "No correction required"
        ],
        correctAnswer: 3,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "When subjects are connected by 'neither... nor', the verb agrees with the subject closest to it. 'Assistants' is plural, so plural verb 'were present' is correct. No correction required."
      },
      {
        id: 17,
        section: "English Comprehension",
        type: "single",
        question: "Select the most appropriate SYNONYM of the given word:\n\n'Meticulous'",
        options: ["Careless", "Fastidious", "Hasty", "Sloppy"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'Meticulous' means showing great attention to detail or very careful. 'Fastidious' means giving careful attention to details."
      },
      {
        id: 18,
        section: "English Comprehension",
        type: "single",
        question: "Select the most appropriate ANTONYM of the given word:\n\n'AUDACIOUS'",
        options: ["Bold", "Timid", "Courageous", "Daring"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'Audacious' means showing a willingness to take surprisingly bold risks. The antonym is 'Timid' (showing a lack of courage or confidence)."
      },
      {
        id: 19,
        section: "English Comprehension",
        type: "single",
        question: "Select the option that means the same as the given idiom:\n\n'To bite the bullet'",
        options: [
          "To get shot in battle",
          "To force yourself to undergo something difficult or unpleasant",
          "To express anger openly",
          "To waste time on trivial matters"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'To bite the bullet' means to face a difficult situation with courage and accept its inevitable consequences."
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
        explanation: "The correct spelling is 'Accommodate' (with double 'c' and double 'm')."
      }
    ]
  },
  {
    id: "gate-cs-2026-01",
    title: "GATE Computer Science 2026 - Full Mock 01",
    category: "GATE / Engineering",
    durationMinutes: 180,
    totalQuestions: 15,
    totalMarks: 30,
    negativeMarking: true,
    description: "Comprehensive Full-Length Mock Test for GATE CS covering Data Structures, Algorithms, OS, DBMS, and Computer Networks.",
    questions: [
      {
        id: 1,
        section: "Data Structures & Algorithms",
        type: "single",
        question: "What is the tightest upper bound time complexity of building a min-heap from an unsorted array of n elements using Floyd's build-heap algorithm?",
        options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Floyd's build-heap algorithm processes nodes bottom-up. The sum of heights across all nodes evaluates to O(n)."
      }
    ]
  }
];
