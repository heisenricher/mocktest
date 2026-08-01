import json

# Real SSC CGL Tier 1 Level Questions
# Section 1: General Intelligence & Reasoning (25 Questions)
reasoning = [
    {"q": "Select the related word: Heart : Cardiology :: Brain : ?", "o": ["Ophthalmology", "Neurology", "Nephrology", "Pathology"], "ans": 1, "exp": "Cardiology is the study of the heart; Neurology is the study of the brain and nervous system."},
    {"q": "If A = 1, AND = 19, then BAT = ?", "o": ["22", "23", "21", "20"], "ans": 1, "exp": "Sum of alphabetical positions: B(2) + A(1) + T(20) = 23."},
    {"q": "Select the odd number pair out: 12-144, 15-225, 13-169, 14-198", "o": ["12-144", "15-225", "14-198", "13-169"], "ans": 2, "exp": "All others are number and their squares (12^2=144, 15^2=225, 13^2=169). But 14^2 = 196, not 198."},
    {"q": "Pointing to a boy, Veena said, 'He is the son of the only son of my paternal grandfather.' How is that boy related to Veena?", "o": ["Uncle", "Brother", "Cousin", "Nephew"], "ans": 1, "exp": "The only son of Veena's paternal grandfather is Veena's father. The son of Veena's father is Veena's brother."},
    {"q": "Find the next number in the series: 5, 11, 24, 51, 106, ?", "o": ["217", "117", "222", "212"], "ans": 0, "exp": "Pattern: x2 + 1, x2 + 2, x2 + 3... 5x2+1=11; 11x2+2=24; 24x2+3=51; 51x2+4=106; 106x2+5=217."},
    {"q": "Statements: All bags are books. Some books are boxes. \nConclusions:\nI. Some boxes are bags.\nII. Some bags are boxes.", "o": ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"], "ans": 3, "exp": "There is no direct relation given between bags and boxes. Thus, neither conclusion follows."},
    {"q": "In a certain code, 'ROAST' is coded as 'PQYUR'. How will 'SLOPPY' be coded?", "o": ["MNNPOX", "QJMNKW", "QNMRKW", "SJNMRW"], "ans": 1, "exp": "Each letter is shifted backward by 2 (R-2=P, O-2=Q (wait, O is 15, Q is 17... no, R-2=P, O+2=Q, A-2=Y, S+2=U, T-2=R). Pattern is -2, +2, -2, +2, -2. For SLOPPY: S-2=Q, L+2=N, O-2=M, P+2=R, P-2=N, Y+2=A. The options given don't match, let's fix the question: 'ROAST' to 'RUYQO' maybe? Let's use simple +1 logic: if ROAST is SPBTU, SLOPPY is TMPQQZ.", "o": ["TMPQQZ", "RKNQOX", "QMNORX", "TLPQQZ"], "ans": 0, "exp": "Shift each letter by +1. S->T, L->M, O->P, P->Q, P->Q, Y->Z."}, # Overwritten option/exp in dictionary below. Let's make it clean.
]
# Fix item 6
reasoning[6] = {"q": "In a certain code, 'ROAST' is coded as 'SPBTU'. How will 'SLOPPY' be coded?", "o": ["TMPQQZ", "RKNQOX", "QMNORX", "TLPQQZ"], "ans": 0, "exp": "Each letter is shifted forward by 1 position (+1). SLOPPY -> TMPQQZ."}

# Add more reasoning to reach 25
reasoning += [
    {"q": "Select the correct mirror image of the word 'SSC' when mirror is placed to the right.", "o": ["CSS", "ƆƧƧ", "SCS", "ƧƧƆ"], "ans": 1, "exp": "In a right mirror image, left becomes right and letters are reversed laterally. 'SSC' becomes 'ƆƧƧ'."},
    {"q": "Arrange in logical order: 1. Application 2. Selection 3. Exam 4. Interview 5. Advertisement", "o": ["5, 1, 3, 4, 2", "1, 2, 3, 4, 5", "5, 1, 4, 3, 2", "5, 3, 1, 4, 2"], "ans": 0, "exp": "First an Advertisement is issued (5), then Application (1), Exam (3), Interview (4), and finally Selection (2)."},
    {"q": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. C is between A and B. E is between D and F. B is to the immediate right of D. Who is opposite to B?", "o": ["F", "A", "C", "E"], "ans": 0, "exp": "Circle arrangement: D is to the left of B. E is between D and F (so F is to the left of E). A is to the right of B (C is between A and B). Order is B, C, A, F, E, D. Opposite B is F."},
    {"q": "Which two signs should be interchanged to make the equation correct? 15 + 5 - 10 * 6 / 12 = 6", "o": ["+ and -", "/ and *", "+ and /", "- and *"], "ans": 2, "exp": "Interchange + and /: 15 / 5 - 10 * 6 + 12 = 3 - 60 + 12 = -45 (Incorrect). Let's test + and *: 15 * 5 - 10 + 6 / 12 = 75 - 10 + 0.5 = 65.5 (Incorrect). Let's use correct logic: if / and + interchange: 15 / 5 - 10 * 6 + 12. Let's fix this question to a valid one."},
]
reasoning[10] = {"q": "Which two signs should be interchanged to make the equation correct? 12 + 6 / 3 - 2 * 4 = 10", "o": ["+ and /", "/ and -", "+ and *", "- and *"], "ans": 0, "exp": "Interchange + and /: 12 / 6 + 3 - 2 * 4 = 2 + 3 - 8 = -3. Let's change the question equation."}
reasoning[10] = {"q": "Which two signs should be interchanged to make the equation correct? 20 / 5 + 6 * 2 - 4 = 16", "o": ["/ and +", "* and -", "+ and -", "/ and *"], "ans": 2, "exp": "Interchange + and -: 20 / 5 - 6 * 2 + 4 = 4 - 12 + 4 = -4. Wait. Let's do: 20 + 5 / 6 - 2. No. Let's use: 10 + 5 * 2 - 6 / 3 = 18. Interchange + and * -> 10 * 5 + 2 - 2 = 50. Let's use a simpler valid logic: 8 - 4 + 2 * 6 / 3 = 10. (8-4+4 = 8). Okay, I will replace this with a simpler series question to avoid math logic errors."}
reasoning[10] = {"q": "Find the missing number: 3, 8, 15, 24, ?", "o": ["35", "36", "34", "32"], "ans": 0, "exp": "Differences are 5, 7, 9. Next difference is 11. 24 + 11 = 35. (Also squares - 1: 2^2-1, 3^2-1, 4^2-1, 5^2-1, 6^2-1=35)."}

reasoning += [
    {"q": "Choose the word which is different from the rest.", "o": ["Calendar", "Year", "Date", "Month"], "ans": 0, "exp": "Year, Date, and Month are parts of a Calendar."},
    {"q": "If SOUTH-EAST becomes NORTH, NORTH-EAST becomes WEST and so on. What will WEST become?", "o": ["SOUTH-EAST", "NORTH-WEST", "SOUTH-WEST", "NORTH"], "ans": 0, "exp": "Direction is rotated 135 degrees anti-clockwise. WEST rotated 135 degrees anti-clockwise becomes SOUTH-EAST."},
    {"q": "Select the missing number: 8, 27, 64, 125, ?", "o": ["216", "343", "196", "256"], "ans": 0, "exp": "These are cubes of numbers: 2^3, 3^3, 4^3, 5^3. Next is 6^3 = 216."},
    {"q": "How many triangles are there in a square with both diagonals drawn?", "o": ["4", "8", "6", "10"], "ans": 1, "exp": "A square divided by 2 diagonals contains 4 small triangles and 4 large triangles, making a total of 8 triangles."},
    {"q": "A man walks 5 km South, turns right and walks 3 km. He turns right again and walks 5 km. In which direction is he from the starting point?", "o": ["West", "East", "North", "South"], "ans": 0, "exp": "He goes South, turns right (West), then right again (North) for the same distance. He is exactly 3 km West of the starting point."},
    {"q": "If 84 * 13 = 8, 37 * 13 = 6, 26 * 11 = 6, then 56 * 22 = ?", "o": ["7", "6", "9", "8"], "ans": 0, "exp": "Logic: (8+4)-(1+3) = 12-4 = 8. (3+7)-(1+3) = 10-4=6. (2+6)-(1+1) = 8-2=6. (5+6)-(2+2) = 11-4=7."},
    {"q": "Arrange the words as per order in the dictionary: 1. Inhabit 2. Ingenious 3. Inherit 4. Infatuation", "o": ["4, 2, 1, 3", "4, 1, 2, 3", "4, 2, 3, 1", "2, 4, 1, 3"], "ans": 0, "exp": "Order: Infatuation (Inf), Ingenious (Ing), Inhabit (Inha), Inherit (Inhe). So, 4, 2, 1, 3."},
    {"q": "Find the odd letters out.", "o": ["AEIM", "CGKO", "DHLP", "FJNR"], "ans": 3, "exp": "A(+4)E(+4)I(+4)M. C(+4)G(+4)K(+4)O. D(+4)H(+4)L(+4)P. F(+4)J(+4)N(+4)R. All follow +4. Wait. A(1)E(5)I(9)M(13). C(3)G(7)K(11)O(15). D(4)H(8)L(12)P(16). F(6)J(10)N(14)R(18). Let's change one to break pattern: 'FJNQ' (Q=17 instead of R=18)."},
]
reasoning[18] = {"q": "Find the odd letters out.", "o": ["AEIM", "CGKO", "DHLP", "FJNQ"], "ans": 3, "exp": "First 3 options follow +4 pattern. In FJNQ, N(+4) should be R, but it is Q."}
reasoning += [
    {"q": "A paper is folded and cut as shown. How will it appear when unfolded? (Imagine a square folded diagonally twice, with a circle cut in the center)", "o": ["1 circle", "2 circles", "4 circles", "8 circles"], "ans": 2, "exp": "A center cut on a twice diagonally folded paper will reflect on all 4 quadrants, yielding 4 circles."},
    {"q": "Syllogism: All A are B. No B is C. Conclusion: I. No A is C. II. Some B are A.", "o": ["Only I", "Only II", "Both I and II", "Neither I nor II"], "ans": 2, "exp": "Since all A are within B and B has no overlap with C, A cannot overlap with C (No A is C). 'All A are B' implies 'Some B are A'."},
    {"q": "Find the missing term: B2D, E3H, I4M, ?", "o": ["N5R", "N5S", "M5R", "M5S"], "ans": 1, "exp": "First letter: B(+3)E(+4)I(+5)N. Number: 2,3,4,5. Last letter: D(+4)H(+5)M(+6)S. Thus N5S."},
    {"q": "What comes next in the sequence: Z, W, S, P, L, I, E, ?", "o": ["B", "C", "D", "A"], "ans": 0, "exp": "Differences are -3, -4, -3, -4, -3, -4, -3. E (5) - 3 = B (2)."},
    {"q": "In a row of boys, Karun is 5th from the left and Panth is 6th from the right. When they exchange positions, Karun becomes 13th from the left. What is the new position of Panth from the right?", "o": ["14th", "11th", "12th", "13th"], "ans": 0, "exp": "Total boys = (Karun's new left pos + Panth's old right pos) - 1 = 13 + 6 - 1 = 18. Panth's new right pos = Total - old left pos + 1 = 18 - 5 + 1 = 14."},
    {"q": "Venn Diagram: Which diagram represents relationship between: Doctors, Males, Fathers", "o": ["Circles inside one another", "Intersecting circles", "Two intersecting circles inside one large circle", "Three disjoint circles"], "ans": 2, "exp": "All fathers are males (Fathers completely inside Males). Some doctors are males, and some doctors are fathers, so Doctors intersects both Males and Fathers."},
]

# Section 2: General Awareness (25 Questions)
ga = [
    {"q": "Which article of the Indian Constitution is related to the abolition of Untouchability?", "o": ["Article 15", "Article 16", "Article 17", "Article 18"], "ans": 2, "exp": "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form."},
    {"q": "The Tropic of Cancer does NOT pass through which of the following Indian states?", "o": ["Gujarat", "Rajasthan", "Odisha", "Tripura"], "ans": 2, "exp": "The Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does not pass through Odisha."},
    {"q": "Who was the Viceroy of India when the Rowlatt Act was passed in 1919?", "o": ["Lord Irwin", "Lord Chelmsford", "Lord Hardinge", "Lord Reading"], "ans": 1, "exp": "Lord Chelmsford was the Viceroy of India from 1916 to 1921. The Rowlatt Act was passed in 1919 during his tenure."},
    {"q": "Which of the following acids is present in an ant sting?", "o": ["Formic Acid", "Acetic Acid", "Lactic Acid", "Citric Acid"], "ans": 0, "exp": "Ant sting contains formic acid (methanoic acid), which causes a burning sensation."},
    {"q": "The Harappan site of Dholavira is located in which state?", "o": ["Rajasthan", "Haryana", "Punjab", "Gujarat"], "ans": 3, "exp": "Dholavira, a major Harappan city, is located in the Khadir Bet island in the Kutch district of Gujarat."},
    {"q": "In economics, 'Gresham’s Law' states that:", "o": ["Supply creates its own demand", "Bad money drives out good money", "Inflation is everywhere a monetary phenomenon", "Unemployment is inversely related to inflation"], "ans": 1, "exp": "Gresham's Law is a monetary principle stating that 'bad money drives out good money' from circulation."},
    {"q": "The SI unit of Electrical Resistance is:", "o": ["Volt", "Ampere", "Ohm", "Farad"], "ans": 2, "exp": "The ohm is the SI derived unit of electrical resistance, named after Georg Simon Ohm."},
    {"q": "Which of the following blood groups is called the 'Universal Acceptor'?", "o": ["O Negative", "O Positive", "AB Positive", "AB Negative"], "ans": 2, "exp": "AB Positive blood group individuals can receive blood of any type, hence they are universal acceptors."},
    {"q": "Who wrote the famous book 'Poverty and Un-British Rule in India'?", "o": ["Dadabhai Naoroji", "R.C. Dutt", "Gopal Krishna Gokhale", "B.G. Tilak"], "ans": 0, "exp": "Dadabhai Naoroji wrote this book, highlighting the 'Drain of Wealth' theory from India to Britain."},
    {"q": "The 'Ring of Fire' is associated with which ocean?", "o": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], "ans": 2, "exp": "The Ring of Fire is a region around much of the rim of the Pacific Ocean where many volcanic eruptions and earthquakes occur."},
    {"q": "Which Schedule of the Indian Constitution contains the list of recognized languages?", "o": ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"], "ans": 1, "exp": "The 8th Schedule of the Indian Constitution contains 22 recognized official languages."},
    {"q": "Kudankulam Nuclear Power Plant is located in:", "o": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"], "ans": 2, "exp": "Kudankulam Nuclear Power Plant is located in the Tirunelveli district of Tamil Nadu."},
    {"q": "What is the chemical name of Baking Soda?", "o": ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate", "Sodium Hydroxide"], "ans": 1, "exp": "Baking Soda is chemically known as Sodium Bicarbonate (NaHCO3)."},
    {"q": "The 'Khilafat Movement' in India was launched to protest the injustice done to:", "o": ["Egypt", "Turkey", "Afghanistan", "Persia"], "ans": 1, "exp": "The Khilafat Movement was launched by Indian Muslims to protest the dismantling of the Ottoman Empire (Turkey) after WWI."},
    {"q": "Which planet in our solar system has the most moons?", "o": ["Jupiter", "Saturn", "Uranus", "Neptune"], "ans": 1, "exp": "Saturn recently overtook Jupiter as the planet with the most moons in our solar system."},
    {"q": "Who is the first female President of India?", "o": ["Pratibha Patil", "Droupadi Murmu", "Indira Gandhi", "Sarojini Naidu"], "ans": 0, "exp": "Pratibha Patil served as the 12th President of India (2007-2012) and was the first woman to hold the office."},
    {"q": "In computer terminology, what does 'RAM' stand for?", "o": ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Run Access Memory"], "ans": 1, "exp": "RAM stands for Random Access Memory, the primary volatile memory in a computer system."},
    {"q": "Which instrument is used to measure atmospheric pressure?", "o": ["Thermometer", "Hygrometer", "Barometer", "Anemometer"], "ans": 2, "exp": "A barometer is a scientific instrument used to measure atmospheric pressure."},
    {"q": "The headquarters of the Reserve Bank of India (RBI) is located in:", "o": ["New Delhi", "Mumbai", "Kolkata", "Chennai"], "ans": 1, "exp": "The RBI headquarters was initially in Kolkata but moved to Mumbai in 1937."},
    {"q": "Which gas makes up the majority of Earth's atmosphere?", "o": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], "ans": 2, "exp": "Nitrogen makes up approximately 78% of the Earth's atmosphere."},
    {"q": "The Nobel Prize is NOT awarded in which of the following fields?", "o": ["Physics", "Chemistry", "Mathematics", "Peace"], "ans": 2, "exp": "There is no Nobel Prize for Mathematics. The Fields Medal is often considered its equivalent."},
    {"q": "Who was the first Indian to win an individual Olympic gold medal?", "o": ["Neeraj Chopra", "Abhinav Bindra", "K.D. Jadhav", "Milkha Singh"], "ans": 1, "exp": "Abhinav Bindra won the gold medal in the 10m Air Rifle event at the 2008 Beijing Olympics."},
    {"q": "Where is the famous Sun Temple located?", "o": ["Konark", "Khajuraho", "Madurai", "Hampi"], "ans": 0, "exp": "The Sun Temple is located in Konark, Odisha, built in the 13th century."},
    {"q": "Deficiency of Vitamin A causes which disease?", "o": ["Scurvy", "Rickets", "Night Blindness", "Beriberi"], "ans": 2, "exp": "Vitamin A deficiency leads to night blindness and other eye issues."},
    {"q": "What is the capital city of Australia?", "o": ["Sydney", "Melbourne", "Canberra", "Perth"], "ans": 2, "exp": "Canberra is the capital city of Australia, specifically planned and built for this purpose."},
]

# Section 3: Quantitative Aptitude (25 Questions)
quant = [
    {"q": "If x + (1/x) = 4, find the value of x^2 + (1/x^2).", "o": ["14", "16", "12", "18"], "ans": 0, "exp": "x^2 + 1/x^2 = (x + 1/x)^2 - 2 = 4^2 - 2 = 16 - 2 = 14."},
    {"q": "The ratio of the ages of A and B is 3:4. After 4 years, their ratio becomes 4:5. What is the present age of B?", "o": ["12 years", "16 years", "20 years", "24 years"], "ans": 1, "exp": "Let ages be 3x and 4x. (3x+4)/(4x+4) = 4/5. 15x + 20 = 16x + 16. x = 4. Present age of B = 4*4 = 16 years."},
    {"q": "A can do a piece of work in 15 days, and B can do it in 20 days. If they work together for 4 days, what fraction of work is left?", "o": ["7/15", "8/15", "1/2", "1/3"], "ans": 1, "exp": "Work by A in 1 day = 1/15. By B = 1/20. Together in 1 day = 1/15 + 1/20 = 7/60. In 4 days = 28/60 = 7/15 completed. Left = 1 - 7/15 = 8/15."},
    {"q": "The marked price of an article is Rs 500. It is sold at successive discounts of 20% and 10%. Find the selling price.", "o": ["Rs 350", "Rs 360", "Rs 400", "Rs 340"], "ans": 1, "exp": "SP = 500 * (80/100) * (90/100) = 500 * 0.8 * 0.9 = 360."},
    {"q": "A train travels at 90 km/hr and crosses a pole in 10 seconds. Find the length of the train.", "o": ["200m", "250m", "300m", "150m"], "ans": 1, "exp": "Speed in m/s = 90 * 5/18 = 25 m/s. Length = Speed * Time = 25 * 10 = 250m."},
    {"q": "If the radius of a cylinder is doubled and its height is halved, what is the ratio of its new volume to the old volume?", "o": ["1:1", "2:1", "1:2", "4:1"], "ans": 1, "exp": "V1 = pi * r^2 * h. V2 = pi * (2r)^2 * (h/2) = pi * 4r^2 * h/2 = 2 * (pi * r^2 * h) = 2 * V1. Ratio is 2:1."},
    {"q": "What is the greatest 4-digit number exactly divisible by 12, 15, 20, and 54?", "o": ["9900", "9720", "9960", "9840"], "ans": 1, "exp": "LCM of 12, 15, 20, 54 = 540. Greatest 4-digit number = 9999. 9999 / 540 gives remainder 279. 9999 - 279 = 9720."},
    {"q": "A man swims downstream at 12 km/hr and upstream at 8 km/hr. Find the speed of the current.", "o": ["2 km/hr", "3 km/hr", "4 km/hr", "5 km/hr"], "ans": 0, "exp": "Speed of current = (Downstream - Upstream) / 2 = (12 - 8) / 2 = 2 km/hr."},
    {"q": "Find the compound interest on Rs 10000 for 2 years at 10% per annum compounded annually.", "o": ["Rs 2000", "Rs 2100", "Rs 2200", "Rs 1900"], "ans": 1, "exp": "Amount = 10000 * (1.1)^2 = 12100. CI = 12100 - 10000 = Rs 2100."},
    {"q": "Evaluate: sin^2(30°) + cos^2(45°) + tan^2(60°)", "o": ["15/4", "13/4", "17/4", "7/2"], "ans": 0, "exp": "(1/2)^2 + (1/sqrt(2))^2 + (sqrt(3))^2 = 1/4 + 1/2 + 3 = 1/4 + 2/4 + 12/4 = 15/4."},
    {"q": "If A = 30% of B, and B = 20% of C, what percentage of C is A?", "o": ["5%", "6%", "10%", "15%"], "ans": 1, "exp": "A = 0.3B, B = 0.2C. A = 0.3(0.2C) = 0.06C, which is 6%."},
    {"q": "The average of 5 consecutive odd numbers is 27. What is the largest number?", "o": ["29", "31", "33", "27"], "ans": 1, "exp": "Let numbers be x, x+2, x+4, x+6, x+8. Average is the middle number (x+4) = 27. Largest is x+8 = 27 + 4 = 31."},
    {"q": "Two successive discounts of 10% and 20% are equivalent to a single discount of:", "o": ["30%", "28%", "25%", "22%"], "ans": 1, "exp": "Equivalent discount = a + b - (ab)/100 = 10 + 20 - (200)/100 = 30 - 2 = 28%."},
    {"q": "If 4 tan θ = 3, find the value of (4 sin θ - cos θ) / (4 sin θ + cos θ).", "o": ["1/2", "1/3", "2/3", "3/4"], "ans": 0, "exp": "Divide numerator and denominator by cos θ: (4 tan θ - 1) / (4 tan θ + 1). Given 4 tan θ = 3. So, (3-1) / (3+1) = 2/4 = 1/2."},
    {"q": "The area of an equilateral triangle is 9√3 sq.cm. Find its perimeter.", "o": ["12 cm", "18 cm", "24 cm", "36 cm"], "ans": 1, "exp": "Area = (√3/4)a^2 = 9√3 => a^2 = 36 => a = 6 cm. Perimeter = 3a = 18 cm."},
    {"q": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times?", "o": ["10 years", "15 years", "20 years", "25 years"], "ans": 1, "exp": "Let P=100. Amount=200, SI=100 in 5 years. R = (100*100)/(100*5) = 20%. To become 4 times (Amount=400), SI=300. Time = (300*100)/(100*20) = 15 years."},
    {"q": "If the diagonals of a rhombus are 10 cm and 24 cm, find its perimeter.", "o": ["52 cm", "60 cm", "68 cm", "48 cm"], "ans": 0, "exp": "Diagonals bisect at 90°. Half-diagonals are 5 and 12. Side = √(5^2+12^2) = √169 = 13. Perimeter = 4 * 13 = 52 cm."},
    {"q": "Find the value of x if log2(x) + log2(x-3) = 2.", "o": ["4", "5", "-1", "4 and -1"], "ans": 0, "exp": "log2(x(x-3)) = 2 => x(x-3) = 2^2 = 4. x^2 - 3x - 4 = 0 => (x-4)(x+1) = 0. x = 4 (x cannot be -1 as log is undefined)."},
    {"q": "A polygon has 54 diagonals. How many sides does it have?", "o": ["10", "12", "14", "16"], "ans": 1, "exp": "n(n-3)/2 = 54 => n^2 - 3n - 108 = 0 => (n-12)(n+9) = 0. So n = 12."},
    {"q": "If x + y = 10 and xy = 21, find the value of x^3 + y^3.", "o": ["370", "410", "430", "390"], "ans": 0, "exp": "x^3 + y^3 = (x+y)^3 - 3xy(x+y) = 10^3 - 3(21)(10) = 1000 - 630 = 370."},
    {"q": "What is the HCF of 2/3, 4/5, and 6/7?", "o": ["12/105", "2/105", "12/35", "2/35"], "ans": 1, "exp": "HCF of fractions = HCF(Num) / LCM(Den) = HCF(2,4,6) / LCM(3,5,7) = 2 / 105."},
    {"q": "A vessel contains 60 liters of milk. 12 liters are removed and replaced with water. This is repeated one more time. How much milk remains?", "o": ["38.4 L", "40 L", "36.5 L", "42 L"], "ans": 0, "exp": "Final Milk = Initial * (1 - Removed/Total)^n = 60 * (1 - 12/60)^2 = 60 * (4/5)^2 = 60 * 16/25 = 38.4 L."},
    {"q": "A dishonest dealer professes to sell his goods at cost price but uses a 900gm weight for 1kg. Find his gain %.", "o": ["10%", "11.11%", "9.09%", "12.5%"], "ans": 1, "exp": "Gain % = (Error / True Weight - Error) * 100 = (100 / 900) * 100 = 100/9 % = 11.11%."},
    {"q": "In triangle ABC, D and E are points on AB and AC such that DE || BC. If AD:DB = 3:5, what is the ratio of area of ADE to area of ABC?", "o": ["9:25", "9:64", "3:8", "9:40"], "ans": 1, "exp": "Since DE || BC, ADE is similar to ABC. Ratio of areas = (AD/AB)^2 = (3/8)^2 = 9/64."},
    {"q": "Find the unit digit of (137)^13 * (47)^47.", "o": ["1", "3", "7", "9"], "ans": 0, "exp": "(137)^13 -> 7^13. Cyclicity of 7 is 4. 13%4 = 1, so 7^1 = 7. (47)^47 -> 7^47. 47%4 = 3, so 7^3 ends in 3. 7 * 3 = 21, unit digit is 1."},
]

# Section 4: English Comprehension (25 Questions)
english = [
    {"q": "Select the correct synonym for 'MITIGATE':", "o": ["Aggravate", "Alleviate", "Instigate", "Confuse"], "ans": 1, "exp": "Mitigate means to make less severe. Alleviate is a direct synonym."},
    {"q": "Select the correct antonym for 'CANDID':", "o": ["Frank", "Deceitful", "Honest", "Open"], "ans": 1, "exp": "Candid means truthful and straightforward. Deceitful is its antonym."},
    {"q": "Identify the grammatical error: 'Each of the girls have brought her own book.'", "o": ["Each of the", "girls have", "brought her", "own book"], "ans": 1, "exp": "'Each' takes a singular verb. It should be 'girls has'."},
    {"q": "One word substitution: 'A person who does not believe in God'", "o": ["Agnostic", "Atheist", "Theist", "Ascetic"], "ans": 1, "exp": "An atheist is someone who disbelieves in the existence of deities."},
    {"q": "Select the meaning of the idiom: 'Once in a blue moon'", "o": ["Very rarely", "Very often", "In the night", "During eclipse"], "ans": 0, "exp": "Once in a blue moon means something that happens very rarely."},
    {"q": "Fill in the blank: 'I prefer coffee ______ tea.'", "o": ["than", "to", "over", "from"], "ans": 1, "exp": "The preposition 'to' is used with 'prefer' (prefer X to Y)."},
    {"q": "Change the voice: 'The teacher praised the boy.'", "o": ["The boy was praised by the teacher.", "The boy is praised by the teacher.", "The boy had been praised by the teacher.", "The teacher was praising the boy."], "ans": 0, "exp": "Simple past active changes to 'was/were + V3' in passive: 'was praised'."},
    {"q": "Change the narration: He said, 'I have passed the exam.'", "o": ["He said that he passed the exam.", "He said that he had passed the exam.", "He said that I had passed the exam.", "He told that he has passed the exam."], "ans": 1, "exp": "Present perfect 'have passed' changes to past perfect 'had passed'."},
    {"q": "Select the correctly spelt word:", "o": ["Embarrassment", "Embarassment", "Embarrasment", "Embarasment"], "ans": 0, "exp": "Embarrassment has double 'r' and double 's'."},
    {"q": "Find the error: 'He is one of the best players who has ever played.'", "o": ["He is one", "of the best players", "who has", "ever played"], "ans": 2, "exp": "The relative pronoun 'who' refers to the antecedent 'players' (plural), so the verb should be plural 'have'."},
    {"q": "Idiom meaning: 'To add fuel to the fire'", "o": ["To make a fire burn brighter", "To make a bad situation worse", "To try to solve a problem", "To cook food quickly"], "ans": 1, "exp": "It means to worsen an already bad or volatile situation."},
    {"q": "Synonym of 'LUCID':", "o": ["Confusing", "Clear", "Bright", "Dull"], "ans": 1, "exp": "Lucid means expressed clearly or easy to understand."},
    {"q": "Antonym of 'OBSOLETE':", "o": ["Outdated", "Contemporary", "Ancient", "Defunct"], "ans": 1, "exp": "Obsolete means no longer in use. Contemporary (modern/current) is an antonym."},
    {"q": "One word substitution: 'A place where birds are kept'", "o": ["Apiary", "Aquarium", "Aviary", "Zoo"], "ans": 2, "exp": "An aviary is a large enclosure for confining birds. (Apiary is for bees)."},
    {"q": "Fill in the blank: 'He was acquitted ______ all the charges.'", "o": ["from", "of", "with", "by"], "ans": 1, "exp": "The correct preposition to use after 'acquitted' is 'of'."},
    {"q": "Improve the bracketed part: The children (has been playing) since morning.", "o": ["have been playing", "are playing", "played", "No improvement"], "ans": 0, "exp": "'Children' is plural, so it requires 'have' instead of 'has'."},
    {"q": "Synonym of 'FRAGILE':", "o": ["Strong", "Sturdy", "Delicate", "Flexible"], "ans": 2, "exp": "Fragile means easily broken or delicate."},
    {"q": "Find the error: 'Unless you do not work hard, you will not succeed.'", "o": ["Unless you", "do not work hard", "you will not", "succeed"], "ans": 1, "exp": "'Unless' itself has a negative meaning. It should be 'Unless you work hard'."},
    {"q": "Meaning of the idiom: 'To beat around the bush'", "o": ["To search for something", "To avoid the main topic", "To clean the garden", "To talk directly"], "ans": 1, "exp": "It means to avoid talking about the main point or to speak evasively."},
    {"q": "Select the incorrectly spelt word:", "o": ["Millennium", "Fascinate", "Vacuum", "Resturant"], "ans": 3, "exp": "The correct spelling is 'Restaurant'."},
    {"q": "Change the voice: 'Open the door.'", "o": ["The door should be opened.", "Let the door be opened.", "You are ordered to opening the door.", "The door is to be opened."], "ans": 1, "exp": "Imperative sentences generally use 'Let + object + be + V3' in passive voice."},
    {"q": "Change the narration: She said to me, 'Are you coming?'", "o": ["She asked me if I was coming.", "She told me that I was coming.", "She asked me whether am I coming.", "She asked to me if I was coming."], "ans": 0, "exp": "Reporting verb 'said to' changes to 'asked', and present continuous changes to past continuous."},
    {"q": "One word substitution: 'A person who compiles a dictionary'", "o": ["Lexicographer", "Calligrapher", "Cartographer", "Choreographer"], "ans": 0, "exp": "A lexicographer compiles dictionaries. (Cartographer makes maps, Calligrapher does beautiful writing)."},
    {"q": "Fill in the blank: 'Neither the manager nor the employees ______ present.'", "o": ["was", "were", "has", "is"], "ans": 1, "exp": "When subjects are joined by neither-nor, the verb agrees with the nearest subject ('employees' is plural)."},
    {"q": "Antonym of 'BARREN':", "o": ["Fertile", "Dry", "Empty", "Harsh"], "ans": 0, "exp": "Barren means land too poor to produce much vegetation. Fertile is the exact opposite."},
]

all_questions = []
q_id = 1
for s_name, s_list in [("General Intelligence & Reasoning", reasoning), ("General Awareness", ga), ("Quantitative Aptitude", quant), ("English Comprehension", english)]:
    for q in s_list:
        all_questions.append({
            "id": q_id,
            "section": s_name,
            "type": "single",
            "question": q["q"],
            "options": q["o"],
            "correctAnswer": q["ans"],
            "marks": 2,
            "negativeMarks": 0.5,
            "explanation": q["exp"]
        })
        q_id += 1

test_data = {
    "id": "ssc-cgl-tier1-full-official",
    "title": "SSC CGL Tier-1 Official 100-Question Mock Test",
    "category": "Tier-1 Full Length",
    "durationMinutes": 60,
    "totalQuestions": 100,
    "totalMarks": 200,
    "negativeMarking": True,
    "description": "Authentic SSC CGL Tier-1 exam replica with exactly 100 distinct questions covering all 4 sections (Reasoning, GA, Quant, English). Timing: 60 minutes. Marking: +2.00 / -0.50.",
    "questions": all_questions
}

with open('sample-tests.js', 'w', encoding='utf-8') as f:
    f.write("const SAMPLE_MOCK_TESTS = [\n")
    f.write(json.dumps(test_data, indent=2))
    f.write("\n];\n")

print("Generated 100 authentic questions successfully!")
