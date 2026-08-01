const SAMPLE_MOCK_TESTS = [
{
  "id": "ssc-cgl-tier1-full-official",
  "title": "SSC CGL Tier-1 Official 100-Question Mock Test",
  "category": "Tier-1 Full Length",
  "durationMinutes": 60,
  "totalQuestions": 100,
  "totalMarks": 200,
  "negativeMarking": true,
  "description": "Authentic SSC CGL Tier-1 exam replica with exactly 100 distinct questions covering all 4 sections (Reasoning, GA, Quant, English). Timing: 60 minutes. Marking: +2.00 / -0.50.",
  "questions": [
    {
      "id": 1,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Select the related word: Heart : Cardiology :: Brain : ?",
      "options": [
        "Ophthalmology",
        "Neurology",
        "Nephrology",
        "Pathology"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Cardiology is the study of the heart; Neurology is the study of the brain and nervous system."
    },
    {
      "id": 2,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "If A = 1, AND = 19, then BAT = ?",
      "options": [
        "22",
        "23",
        "21",
        "20"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Sum of alphabetical positions: B(2) + A(1) + T(20) = 23."
    },
    {
      "id": 3,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Select the odd number pair out: 12-144, 15-225, 13-169, 14-198",
      "options": [
        "12-144",
        "15-225",
        "14-198",
        "13-169"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "All others are number and their squares (12^2=144, 15^2=225, 13^2=169). But 14^2 = 196, not 198."
    },
    {
      "id": 4,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Pointing to a boy, Veena said, 'He is the son of the only son of my paternal grandfather.' How is that boy related to Veena?",
      "options": [
        "Uncle",
        "Brother",
        "Cousin",
        "Nephew"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The only son of Veena's paternal grandfather is Veena's father. The son of Veena's father is Veena's brother."
    },
    {
      "id": 5,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Find the next number in the series: 5, 11, 24, 51, 106, ?",
      "options": [
        "217",
        "117",
        "222",
        "212"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Pattern: x2 + 1, x2 + 2, x2 + 3... 5x2+1=11; 11x2+2=24; 24x2+3=51; 51x2+4=106; 106x2+5=217."
    },
    {
      "id": 6,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Statements: All bags are books. Some books are boxes. \nConclusions:\nI. Some boxes are bags.\nII. Some bags are boxes.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Both I and II follow",
        "Neither I nor II follows"
      ],
      "correctAnswer": 3,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "There is no direct relation given between bags and boxes. Thus, neither conclusion follows."
    },
    {
      "id": 7,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "In a certain code, 'ROAST' is coded as 'SPBTU'. How will 'SLOPPY' be coded?",
      "options": [
        "TMPQQZ",
        "RKNQOX",
        "QMNORX",
        "TLPQQZ"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Each letter is shifted forward by 1 position (+1). SLOPPY -> TMPQQZ."
    },
    {
      "id": 8,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Select the correct mirror image of the word 'SSC' when mirror is placed to the right.",
      "options": [
        "CSS",
        "\u0186\u01a7\u01a7",
        "SCS",
        "\u01a7\u01a7\u0186"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "In a right mirror image, left becomes right and letters are reversed laterally. 'SSC' becomes '\u0186\u01a7\u01a7'."
    },
    {
      "id": 9,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Arrange in logical order: 1. Application 2. Selection 3. Exam 4. Interview 5. Advertisement",
      "options": [
        "5, 1, 3, 4, 2",
        "1, 2, 3, 4, 5",
        "5, 1, 4, 3, 2",
        "5, 3, 1, 4, 2"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "First an Advertisement is issued (5), then Application (1), Exam (3), Interview (4), and finally Selection (2)."
    },
    {
      "id": 10,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. C is between A and B. E is between D and F. B is to the immediate right of D. Who is opposite to B?",
      "options": [
        "F",
        "A",
        "C",
        "E"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Circle arrangement: D is to the left of B. E is between D and F (so F is to the left of E). A is to the right of B (C is between A and B). Order is B, C, A, F, E, D. Opposite B is F."
    },
    {
      "id": 11,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Find the missing number: 3, 8, 15, 24, ?",
      "options": [
        "35",
        "36",
        "34",
        "32"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Differences are 5, 7, 9. Next difference is 11. 24 + 11 = 35. (Also squares - 1: 2^2-1, 3^2-1, 4^2-1, 5^2-1, 6^2-1=35)."
    },
    {
      "id": 12,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Choose the word which is different from the rest.",
      "options": [
        "Calendar",
        "Year",
        "Date",
        "Month"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Year, Date, and Month are parts of a Calendar."
    },
    {
      "id": 13,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "If SOUTH-EAST becomes NORTH, NORTH-EAST becomes WEST and so on. What will WEST become?",
      "options": [
        "SOUTH-EAST",
        "NORTH-WEST",
        "SOUTH-WEST",
        "NORTH"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Direction is rotated 135 degrees anti-clockwise. WEST rotated 135 degrees anti-clockwise becomes SOUTH-EAST."
    },
    {
      "id": 14,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Select the missing number: 8, 27, 64, 125, ?",
      "options": [
        "216",
        "343",
        "196",
        "256"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "These are cubes of numbers: 2^3, 3^3, 4^3, 5^3. Next is 6^3 = 216."
    },
    {
      "id": 15,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "How many triangles are there in a square with both diagonals drawn?",
      "options": [
        "4",
        "8",
        "6",
        "10"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "A square divided by 2 diagonals contains 4 small triangles and 4 large triangles, making a total of 8 triangles."
    },
    {
      "id": 16,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "A man walks 5 km South, turns right and walks 3 km. He turns right again and walks 5 km. In which direction is he from the starting point?",
      "options": [
        "West",
        "East",
        "North",
        "South"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "He goes South, turns right (West), then right again (North) for the same distance. He is exactly 3 km West of the starting point."
    },
    {
      "id": 17,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "If 84 * 13 = 8, 37 * 13 = 6, 26 * 11 = 6, then 56 * 22 = ?",
      "options": [
        "7",
        "6",
        "9",
        "8"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Logic: (8+4)-(1+3) = 12-4 = 8. (3+7)-(1+3) = 10-4=6. (2+6)-(1+1) = 8-2=6. (5+6)-(2+2) = 11-4=7."
    },
    {
      "id": 18,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Arrange the words as per order in the dictionary: 1. Inhabit 2. Ingenious 3. Inherit 4. Infatuation",
      "options": [
        "4, 2, 1, 3",
        "4, 1, 2, 3",
        "4, 2, 3, 1",
        "2, 4, 1, 3"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Order: Infatuation (Inf), Ingenious (Ing), Inhabit (Inha), Inherit (Inhe). So, 4, 2, 1, 3."
    },
    {
      "id": 19,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Find the odd letters out.",
      "options": [
        "AEIM",
        "CGKO",
        "DHLP",
        "FJNQ"
      ],
      "correctAnswer": 3,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "First 3 options follow +4 pattern. In FJNQ, N(+4) should be R, but it is Q."
    },
    {
      "id": 20,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "A paper is folded and cut as shown. How will it appear when unfolded? (Imagine a square folded diagonally twice, with a circle cut in the center)",
      "options": [
        "1 circle",
        "2 circles",
        "4 circles",
        "8 circles"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "A center cut on a twice diagonally folded paper will reflect on all 4 quadrants, yielding 4 circles."
    },
    {
      "id": 21,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Syllogism: All A are B. No B is C. Conclusion: I. No A is C. II. Some B are A.",
      "options": [
        "Only I",
        "Only II",
        "Both I and II",
        "Neither I nor II"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Since all A are within B and B has no overlap with C, A cannot overlap with C (No A is C). 'All A are B' implies 'Some B are A'."
    },
    {
      "id": 22,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Find the missing term: B2D, E3H, I4M, ?",
      "options": [
        "N5R",
        "N5S",
        "M5R",
        "M5S"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "First letter: B(+3)E(+4)I(+5)N. Number: 2,3,4,5. Last letter: D(+4)H(+5)M(+6)S. Thus N5S."
    },
    {
      "id": 23,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "What comes next in the sequence: Z, W, S, P, L, I, E, ?",
      "options": [
        "B",
        "C",
        "D",
        "A"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Differences are -3, -4, -3, -4, -3, -4, -3. E (5) - 3 = B (2)."
    },
    {
      "id": 24,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "In a row of boys, Karun is 5th from the left and Panth is 6th from the right. When they exchange positions, Karun becomes 13th from the left. What is the new position of Panth from the right?",
      "options": [
        "14th",
        "11th",
        "12th",
        "13th"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Total boys = (Karun's new left pos + Panth's old right pos) - 1 = 13 + 6 - 1 = 18. Panth's new right pos = Total - old left pos + 1 = 18 - 5 + 1 = 14."
    },
    {
      "id": 25,
      "section": "General Intelligence & Reasoning",
      "type": "single",
      "question": "Venn Diagram: Which diagram represents relationship between: Doctors, Males, Fathers",
      "options": [
        "Circles inside one another",
        "Intersecting circles",
        "Two intersecting circles inside one large circle",
        "Three disjoint circles"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "All fathers are males (Fathers completely inside Males). Some doctors are males, and some doctors are fathers, so Doctors intersects both Males and Fathers."
    },
    {
      "id": 26,
      "section": "General Awareness",
      "type": "single",
      "question": "Which article of the Indian Constitution is related to the abolition of Untouchability?",
      "options": [
        "Article 15",
        "Article 16",
        "Article 17",
        "Article 18"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form."
    },
    {
      "id": 27,
      "section": "General Awareness",
      "type": "single",
      "question": "The Tropic of Cancer does NOT pass through which of the following Indian states?",
      "options": [
        "Gujarat",
        "Rajasthan",
        "Odisha",
        "Tripura"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does not pass through Odisha."
    },
    {
      "id": 28,
      "section": "General Awareness",
      "type": "single",
      "question": "Who was the Viceroy of India when the Rowlatt Act was passed in 1919?",
      "options": [
        "Lord Irwin",
        "Lord Chelmsford",
        "Lord Hardinge",
        "Lord Reading"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Lord Chelmsford was the Viceroy of India from 1916 to 1921. The Rowlatt Act was passed in 1919 during his tenure."
    },
    {
      "id": 29,
      "section": "General Awareness",
      "type": "single",
      "question": "Which of the following acids is present in an ant sting?",
      "options": [
        "Formic Acid",
        "Acetic Acid",
        "Lactic Acid",
        "Citric Acid"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Ant sting contains formic acid (methanoic acid), which causes a burning sensation."
    },
    {
      "id": 30,
      "section": "General Awareness",
      "type": "single",
      "question": "The Harappan site of Dholavira is located in which state?",
      "options": [
        "Rajasthan",
        "Haryana",
        "Punjab",
        "Gujarat"
      ],
      "correctAnswer": 3,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Dholavira, a major Harappan city, is located in the Khadir Bet island in the Kutch district of Gujarat."
    },
    {
      "id": 31,
      "section": "General Awareness",
      "type": "single",
      "question": "In economics, 'Gresham\u2019s Law' states that:",
      "options": [
        "Supply creates its own demand",
        "Bad money drives out good money",
        "Inflation is everywhere a monetary phenomenon",
        "Unemployment is inversely related to inflation"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Gresham's Law is a monetary principle stating that 'bad money drives out good money' from circulation."
    },
    {
      "id": 32,
      "section": "General Awareness",
      "type": "single",
      "question": "The SI unit of Electrical Resistance is:",
      "options": [
        "Volt",
        "Ampere",
        "Ohm",
        "Farad"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The ohm is the SI derived unit of electrical resistance, named after Georg Simon Ohm."
    },
    {
      "id": 33,
      "section": "General Awareness",
      "type": "single",
      "question": "Which of the following blood groups is called the 'Universal Acceptor'?",
      "options": [
        "O Negative",
        "O Positive",
        "AB Positive",
        "AB Negative"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "AB Positive blood group individuals can receive blood of any type, hence they are universal acceptors."
    },
    {
      "id": 34,
      "section": "General Awareness",
      "type": "single",
      "question": "Who wrote the famous book 'Poverty and Un-British Rule in India'?",
      "options": [
        "Dadabhai Naoroji",
        "R.C. Dutt",
        "Gopal Krishna Gokhale",
        "B.G. Tilak"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Dadabhai Naoroji wrote this book, highlighting the 'Drain of Wealth' theory from India to Britain."
    },
    {
      "id": 35,
      "section": "General Awareness",
      "type": "single",
      "question": "The 'Ring of Fire' is associated with which ocean?",
      "options": [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The Ring of Fire is a region around much of the rim of the Pacific Ocean where many volcanic eruptions and earthquakes occur."
    },
    {
      "id": 36,
      "section": "General Awareness",
      "type": "single",
      "question": "Which Schedule of the Indian Constitution contains the list of recognized languages?",
      "options": [
        "7th Schedule",
        "8th Schedule",
        "9th Schedule",
        "10th Schedule"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The 8th Schedule of the Indian Constitution contains 22 recognized official languages."
    },
    {
      "id": 37,
      "section": "General Awareness",
      "type": "single",
      "question": "Kudankulam Nuclear Power Plant is located in:",
      "options": [
        "Kerala",
        "Karnataka",
        "Tamil Nadu",
        "Andhra Pradesh"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Kudankulam Nuclear Power Plant is located in the Tirunelveli district of Tamil Nadu."
    },
    {
      "id": 38,
      "section": "General Awareness",
      "type": "single",
      "question": "What is the chemical name of Baking Soda?",
      "options": [
        "Sodium Carbonate",
        "Sodium Bicarbonate",
        "Calcium Carbonate",
        "Sodium Hydroxide"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Baking Soda is chemically known as Sodium Bicarbonate (NaHCO3)."
    },
    {
      "id": 39,
      "section": "General Awareness",
      "type": "single",
      "question": "The 'Khilafat Movement' in India was launched to protest the injustice done to:",
      "options": [
        "Egypt",
        "Turkey",
        "Afghanistan",
        "Persia"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The Khilafat Movement was launched by Indian Muslims to protest the dismantling of the Ottoman Empire (Turkey) after WWI."
    },
    {
      "id": 40,
      "section": "General Awareness",
      "type": "single",
      "question": "Which planet in our solar system has the most moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Saturn recently overtook Jupiter as the planet with the most moons in our solar system."
    },
    {
      "id": 41,
      "section": "General Awareness",
      "type": "single",
      "question": "Who is the first female President of India?",
      "options": [
        "Pratibha Patil",
        "Droupadi Murmu",
        "Indira Gandhi",
        "Sarojini Naidu"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Pratibha Patil served as the 12th President of India (2007-2012) and was the first woman to hold the office."
    },
    {
      "id": 42,
      "section": "General Awareness",
      "type": "single",
      "question": "In computer terminology, what does 'RAM' stand for?",
      "options": [
        "Read Access Memory",
        "Random Access Memory",
        "Rapid Access Memory",
        "Run Access Memory"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "RAM stands for Random Access Memory, the primary volatile memory in a computer system."
    },
    {
      "id": 43,
      "section": "General Awareness",
      "type": "single",
      "question": "Which instrument is used to measure atmospheric pressure?",
      "options": [
        "Thermometer",
        "Hygrometer",
        "Barometer",
        "Anemometer"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "A barometer is a scientific instrument used to measure atmospheric pressure."
    },
    {
      "id": 44,
      "section": "General Awareness",
      "type": "single",
      "question": "The headquarters of the Reserve Bank of India (RBI) is located in:",
      "options": [
        "New Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The RBI headquarters was initially in Kolkata but moved to Mumbai in 1937."
    },
    {
      "id": 45,
      "section": "General Awareness",
      "type": "single",
      "question": "Which gas makes up the majority of Earth's atmosphere?",
      "options": [
        "Oxygen",
        "Carbon Dioxide",
        "Nitrogen",
        "Argon"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Nitrogen makes up approximately 78% of the Earth's atmosphere."
    },
    {
      "id": 46,
      "section": "General Awareness",
      "type": "single",
      "question": "The Nobel Prize is NOT awarded in which of the following fields?",
      "options": [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Peace"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "There is no Nobel Prize for Mathematics. The Fields Medal is often considered its equivalent."
    },
    {
      "id": 47,
      "section": "General Awareness",
      "type": "single",
      "question": "Who was the first Indian to win an individual Olympic gold medal?",
      "options": [
        "Neeraj Chopra",
        "Abhinav Bindra",
        "K.D. Jadhav",
        "Milkha Singh"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Abhinav Bindra won the gold medal in the 10m Air Rifle event at the 2008 Beijing Olympics."
    },
    {
      "id": 48,
      "section": "General Awareness",
      "type": "single",
      "question": "Where is the famous Sun Temple located?",
      "options": [
        "Konark",
        "Khajuraho",
        "Madurai",
        "Hampi"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The Sun Temple is located in Konark, Odisha, built in the 13th century."
    },
    {
      "id": 49,
      "section": "General Awareness",
      "type": "single",
      "question": "Deficiency of Vitamin A causes which disease?",
      "options": [
        "Scurvy",
        "Rickets",
        "Night Blindness",
        "Beriberi"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Vitamin A deficiency leads to night blindness and other eye issues."
    },
    {
      "id": 50,
      "section": "General Awareness",
      "type": "single",
      "question": "What is the capital city of Australia?",
      "options": [
        "Sydney",
        "Melbourne",
        "Canberra",
        "Perth"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Canberra is the capital city of Australia, specifically planned and built for this purpose."
    },
    {
      "id": 51,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "If x + (1/x) = 4, find the value of x^2 + (1/x^2).",
      "options": [
        "14",
        "16",
        "12",
        "18"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "x^2 + 1/x^2 = (x + 1/x)^2 - 2 = 4^2 - 2 = 16 - 2 = 14."
    },
    {
      "id": 52,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "The ratio of the ages of A and B is 3:4. After 4 years, their ratio becomes 4:5. What is the present age of B?",
      "options": [
        "12 years",
        "16 years",
        "20 years",
        "24 years"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Let ages be 3x and 4x. (3x+4)/(4x+4) = 4/5. 15x + 20 = 16x + 16. x = 4. Present age of B = 4*4 = 16 years."
    },
    {
      "id": 53,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A can do a piece of work in 15 days, and B can do it in 20 days. If they work together for 4 days, what fraction of work is left?",
      "options": [
        "7/15",
        "8/15",
        "1/2",
        "1/3"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Work by A in 1 day = 1/15. By B = 1/20. Together in 1 day = 1/15 + 1/20 = 7/60. In 4 days = 28/60 = 7/15 completed. Left = 1 - 7/15 = 8/15."
    },
    {
      "id": 54,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "The marked price of an article is Rs 500. It is sold at successive discounts of 20% and 10%. Find the selling price.",
      "options": [
        "Rs 350",
        "Rs 360",
        "Rs 400",
        "Rs 340"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "SP = 500 * (80/100) * (90/100) = 500 * 0.8 * 0.9 = 360."
    },
    {
      "id": 55,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A train travels at 90 km/hr and crosses a pole in 10 seconds. Find the length of the train.",
      "options": [
        "200m",
        "250m",
        "300m",
        "150m"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Speed in m/s = 90 * 5/18 = 25 m/s. Length = Speed * Time = 25 * 10 = 250m."
    },
    {
      "id": 56,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "If the radius of a cylinder is doubled and its height is halved, what is the ratio of its new volume to the old volume?",
      "options": [
        "1:1",
        "2:1",
        "1:2",
        "4:1"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "V1 = pi * r^2 * h. V2 = pi * (2r)^2 * (h/2) = pi * 4r^2 * h/2 = 2 * (pi * r^2 * h) = 2 * V1. Ratio is 2:1."
    },
    {
      "id": 57,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "What is the greatest 4-digit number exactly divisible by 12, 15, 20, and 54?",
      "options": [
        "9900",
        "9720",
        "9960",
        "9840"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "LCM of 12, 15, 20, 54 = 540. Greatest 4-digit number = 9999. 9999 / 540 gives remainder 279. 9999 - 279 = 9720."
    },
    {
      "id": 58,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A man swims downstream at 12 km/hr and upstream at 8 km/hr. Find the speed of the current.",
      "options": [
        "2 km/hr",
        "3 km/hr",
        "4 km/hr",
        "5 km/hr"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Speed of current = (Downstream - Upstream) / 2 = (12 - 8) / 2 = 2 km/hr."
    },
    {
      "id": 59,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "Find the compound interest on Rs 10000 for 2 years at 10% per annum compounded annually.",
      "options": [
        "Rs 2000",
        "Rs 2100",
        "Rs 2200",
        "Rs 1900"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Amount = 10000 * (1.1)^2 = 12100. CI = 12100 - 10000 = Rs 2100."
    },
    {
      "id": 60,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "Evaluate: sin^2(30\u00b0) + cos^2(45\u00b0) + tan^2(60\u00b0)",
      "options": [
        "15/4",
        "13/4",
        "17/4",
        "7/2"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "(1/2)^2 + (1/sqrt(2))^2 + (sqrt(3))^2 = 1/4 + 1/2 + 3 = 1/4 + 2/4 + 12/4 = 15/4."
    },
    {
      "id": 61,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "If A = 30% of B, and B = 20% of C, what percentage of C is A?",
      "options": [
        "5%",
        "6%",
        "10%",
        "15%"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "A = 0.3B, B = 0.2C. A = 0.3(0.2C) = 0.06C, which is 6%."
    },
    {
      "id": 62,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "The average of 5 consecutive odd numbers is 27. What is the largest number?",
      "options": [
        "29",
        "31",
        "33",
        "27"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Let numbers be x, x+2, x+4, x+6, x+8. Average is the middle number (x+4) = 27. Largest is x+8 = 27 + 4 = 31."
    },
    {
      "id": 63,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "Two successive discounts of 10% and 20% are equivalent to a single discount of:",
      "options": [
        "30%",
        "28%",
        "25%",
        "22%"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Equivalent discount = a + b - (ab)/100 = 10 + 20 - (200)/100 = 30 - 2 = 28%."
    },
    {
      "id": 64,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "If 4 tan \u03b8 = 3, find the value of (4 sin \u03b8 - cos \u03b8) / (4 sin \u03b8 + cos \u03b8).",
      "options": [
        "1/2",
        "1/3",
        "2/3",
        "3/4"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Divide numerator and denominator by cos \u03b8: (4 tan \u03b8 - 1) / (4 tan \u03b8 + 1). Given 4 tan \u03b8 = 3. So, (3-1) / (3+1) = 2/4 = 1/2."
    },
    {
      "id": 65,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "The area of an equilateral triangle is 9\u221a3 sq.cm. Find its perimeter.",
      "options": [
        "12 cm",
        "18 cm",
        "24 cm",
        "36 cm"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Area = (\u221a3/4)a^2 = 9\u221a3 => a^2 = 36 => a = 6 cm. Perimeter = 3a = 18 cm."
    },
    {
      "id": 66,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times?",
      "options": [
        "10 years",
        "15 years",
        "20 years",
        "25 years"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Let P=100. Amount=200, SI=100 in 5 years. R = (100*100)/(100*5) = 20%. To become 4 times (Amount=400), SI=300. Time = (300*100)/(100*20) = 15 years."
    },
    {
      "id": 67,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "If the diagonals of a rhombus are 10 cm and 24 cm, find its perimeter.",
      "options": [
        "52 cm",
        "60 cm",
        "68 cm",
        "48 cm"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Diagonals bisect at 90\u00b0. Half-diagonals are 5 and 12. Side = \u221a(5^2+12^2) = \u221a169 = 13. Perimeter = 4 * 13 = 52 cm."
    },
    {
      "id": 68,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "Find the value of x if log2(x) + log2(x-3) = 2.",
      "options": [
        "4",
        "5",
        "-1",
        "4 and -1"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "log2(x(x-3)) = 2 => x(x-3) = 2^2 = 4. x^2 - 3x - 4 = 0 => (x-4)(x+1) = 0. x = 4 (x cannot be -1 as log is undefined)."
    },
    {
      "id": 69,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A polygon has 54 diagonals. How many sides does it have?",
      "options": [
        "10",
        "12",
        "14",
        "16"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "n(n-3)/2 = 54 => n^2 - 3n - 108 = 0 => (n-12)(n+9) = 0. So n = 12."
    },
    {
      "id": 70,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "If x + y = 10 and xy = 21, find the value of x^3 + y^3.",
      "options": [
        "370",
        "410",
        "430",
        "390"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "x^3 + y^3 = (x+y)^3 - 3xy(x+y) = 10^3 - 3(21)(10) = 1000 - 630 = 370."
    },
    {
      "id": 71,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "What is the HCF of 2/3, 4/5, and 6/7?",
      "options": [
        "12/105",
        "2/105",
        "12/35",
        "2/35"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "HCF of fractions = HCF(Num) / LCM(Den) = HCF(2,4,6) / LCM(3,5,7) = 2 / 105."
    },
    {
      "id": 72,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A vessel contains 60 liters of milk. 12 liters are removed and replaced with water. This is repeated one more time. How much milk remains?",
      "options": [
        "38.4 L",
        "40 L",
        "36.5 L",
        "42 L"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Final Milk = Initial * (1 - Removed/Total)^n = 60 * (1 - 12/60)^2 = 60 * (4/5)^2 = 60 * 16/25 = 38.4 L."
    },
    {
      "id": 73,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "A dishonest dealer professes to sell his goods at cost price but uses a 900gm weight for 1kg. Find his gain %.",
      "options": [
        "10%",
        "11.11%",
        "9.09%",
        "12.5%"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Gain % = (Error / True Weight - Error) * 100 = (100 / 900) * 100 = 100/9 % = 11.11%."
    },
    {
      "id": 74,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "In triangle ABC, D and E are points on AB and AC such that DE || BC. If AD:DB = 3:5, what is the ratio of area of ADE to area of ABC?",
      "options": [
        "9:25",
        "9:64",
        "3:8",
        "9:40"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Since DE || BC, ADE is similar to ABC. Ratio of areas = (AD/AB)^2 = (3/8)^2 = 9/64."
    },
    {
      "id": 75,
      "section": "Quantitative Aptitude",
      "type": "single",
      "question": "Find the unit digit of (137)^13 * (47)^47.",
      "options": [
        "1",
        "3",
        "7",
        "9"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "(137)^13 -> 7^13. Cyclicity of 7 is 4. 13%4 = 1, so 7^1 = 7. (47)^47 -> 7^47. 47%4 = 3, so 7^3 ends in 3. 7 * 3 = 21, unit digit is 1."
    },
    {
      "id": 76,
      "section": "English Comprehension",
      "type": "single",
      "question": "Select the correct synonym for 'MITIGATE':",
      "options": [
        "Aggravate",
        "Alleviate",
        "Instigate",
        "Confuse"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Mitigate means to make less severe. Alleviate is a direct synonym."
    },
    {
      "id": 77,
      "section": "English Comprehension",
      "type": "single",
      "question": "Select the correct antonym for 'CANDID':",
      "options": [
        "Frank",
        "Deceitful",
        "Honest",
        "Open"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Candid means truthful and straightforward. Deceitful is its antonym."
    },
    {
      "id": 78,
      "section": "English Comprehension",
      "type": "single",
      "question": "Identify the grammatical error: 'Each of the girls have brought her own book.'",
      "options": [
        "Each of the",
        "girls have",
        "brought her",
        "own book"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "'Each' takes a singular verb. It should be 'girls has'."
    },
    {
      "id": 79,
      "section": "English Comprehension",
      "type": "single",
      "question": "One word substitution: 'A person who does not believe in God'",
      "options": [
        "Agnostic",
        "Atheist",
        "Theist",
        "Ascetic"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "An atheist is someone who disbelieves in the existence of deities."
    },
    {
      "id": 80,
      "section": "English Comprehension",
      "type": "single",
      "question": "Select the meaning of the idiom: 'Once in a blue moon'",
      "options": [
        "Very rarely",
        "Very often",
        "In the night",
        "During eclipse"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Once in a blue moon means something that happens very rarely."
    },
    {
      "id": 81,
      "section": "English Comprehension",
      "type": "single",
      "question": "Fill in the blank: 'I prefer coffee ______ tea.'",
      "options": [
        "than",
        "to",
        "over",
        "from"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The preposition 'to' is used with 'prefer' (prefer X to Y)."
    },
    {
      "id": 82,
      "section": "English Comprehension",
      "type": "single",
      "question": "Change the voice: 'The teacher praised the boy.'",
      "options": [
        "The boy was praised by the teacher.",
        "The boy is praised by the teacher.",
        "The boy had been praised by the teacher.",
        "The teacher was praising the boy."
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Simple past active changes to 'was/were + V3' in passive: 'was praised'."
    },
    {
      "id": 83,
      "section": "English Comprehension",
      "type": "single",
      "question": "Change the narration: He said, 'I have passed the exam.'",
      "options": [
        "He said that he passed the exam.",
        "He said that he had passed the exam.",
        "He said that I had passed the exam.",
        "He told that he has passed the exam."
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Present perfect 'have passed' changes to past perfect 'had passed'."
    },
    {
      "id": 84,
      "section": "English Comprehension",
      "type": "single",
      "question": "Select the correctly spelt word:",
      "options": [
        "Embarrassment",
        "Embarassment",
        "Embarrasment",
        "Embarasment"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Embarrassment has double 'r' and double 's'."
    },
    {
      "id": 85,
      "section": "English Comprehension",
      "type": "single",
      "question": "Find the error: 'He is one of the best players who has ever played.'",
      "options": [
        "He is one",
        "of the best players",
        "who has",
        "ever played"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The relative pronoun 'who' refers to the antecedent 'players' (plural), so the verb should be plural 'have'."
    },
    {
      "id": 86,
      "section": "English Comprehension",
      "type": "single",
      "question": "Idiom meaning: 'To add fuel to the fire'",
      "options": [
        "To make a fire burn brighter",
        "To make a bad situation worse",
        "To try to solve a problem",
        "To cook food quickly"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "It means to worsen an already bad or volatile situation."
    },
    {
      "id": 87,
      "section": "English Comprehension",
      "type": "single",
      "question": "Synonym of 'LUCID':",
      "options": [
        "Confusing",
        "Clear",
        "Bright",
        "Dull"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Lucid means expressed clearly or easy to understand."
    },
    {
      "id": 88,
      "section": "English Comprehension",
      "type": "single",
      "question": "Antonym of 'OBSOLETE':",
      "options": [
        "Outdated",
        "Contemporary",
        "Ancient",
        "Defunct"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Obsolete means no longer in use. Contemporary (modern/current) is an antonym."
    },
    {
      "id": 89,
      "section": "English Comprehension",
      "type": "single",
      "question": "One word substitution: 'A place where birds are kept'",
      "options": [
        "Apiary",
        "Aquarium",
        "Aviary",
        "Zoo"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "An aviary is a large enclosure for confining birds. (Apiary is for bees)."
    },
    {
      "id": 90,
      "section": "English Comprehension",
      "type": "single",
      "question": "Fill in the blank: 'He was acquitted ______ all the charges.'",
      "options": [
        "from",
        "of",
        "with",
        "by"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The correct preposition to use after 'acquitted' is 'of'."
    },
    {
      "id": 91,
      "section": "English Comprehension",
      "type": "single",
      "question": "Improve the bracketed part: The children (has been playing) since morning.",
      "options": [
        "have been playing",
        "are playing",
        "played",
        "No improvement"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "'Children' is plural, so it requires 'have' instead of 'has'."
    },
    {
      "id": 92,
      "section": "English Comprehension",
      "type": "single",
      "question": "Synonym of 'FRAGILE':",
      "options": [
        "Strong",
        "Sturdy",
        "Delicate",
        "Flexible"
      ],
      "correctAnswer": 2,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Fragile means easily broken or delicate."
    },
    {
      "id": 93,
      "section": "English Comprehension",
      "type": "single",
      "question": "Find the error: 'Unless you do not work hard, you will not succeed.'",
      "options": [
        "Unless you",
        "do not work hard",
        "you will not",
        "succeed"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "'Unless' itself has a negative meaning. It should be 'Unless you work hard'."
    },
    {
      "id": 94,
      "section": "English Comprehension",
      "type": "single",
      "question": "Meaning of the idiom: 'To beat around the bush'",
      "options": [
        "To search for something",
        "To avoid the main topic",
        "To clean the garden",
        "To talk directly"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "It means to avoid talking about the main point or to speak evasively."
    },
    {
      "id": 95,
      "section": "English Comprehension",
      "type": "single",
      "question": "Select the incorrectly spelt word:",
      "options": [
        "Millennium",
        "Fascinate",
        "Vacuum",
        "Resturant"
      ],
      "correctAnswer": 3,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "The correct spelling is 'Restaurant'."
    },
    {
      "id": 96,
      "section": "English Comprehension",
      "type": "single",
      "question": "Change the voice: 'Open the door.'",
      "options": [
        "The door should be opened.",
        "Let the door be opened.",
        "You are ordered to opening the door.",
        "The door is to be opened."
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Imperative sentences generally use 'Let + object + be + V3' in passive voice."
    },
    {
      "id": 97,
      "section": "English Comprehension",
      "type": "single",
      "question": "Change the narration: She said to me, 'Are you coming?'",
      "options": [
        "She asked me if I was coming.",
        "She told me that I was coming.",
        "She asked me whether am I coming.",
        "She asked to me if I was coming."
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Reporting verb 'said to' changes to 'asked', and present continuous changes to past continuous."
    },
    {
      "id": 98,
      "section": "English Comprehension",
      "type": "single",
      "question": "One word substitution: 'A person who compiles a dictionary'",
      "options": [
        "Lexicographer",
        "Calligrapher",
        "Cartographer",
        "Choreographer"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "A lexicographer compiles dictionaries. (Cartographer makes maps, Calligrapher does beautiful writing)."
    },
    {
      "id": 99,
      "section": "English Comprehension",
      "type": "single",
      "question": "Fill in the blank: 'Neither the manager nor the employees ______ present.'",
      "options": [
        "was",
        "were",
        "has",
        "is"
      ],
      "correctAnswer": 1,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "When subjects are joined by neither-nor, the verb agrees with the nearest subject ('employees' is plural)."
    },
    {
      "id": 100,
      "section": "English Comprehension",
      "type": "single",
      "question": "Antonym of 'BARREN':",
      "options": [
        "Fertile",
        "Dry",
        "Empty",
        "Harsh"
      ],
      "correctAnswer": 0,
      "marks": 2,
      "negativeMarks": 0.5,
      "explanation": "Barren means land too poor to produce much vegetation. Fertile is the exact opposite."
    }
  ]
}
];
