import json
import random

def generate_test():
    questions = []
    q_id = 1
    
    # 1. General Intelligence & Reasoning (25 Questions)
    reasoning_types = [
        {"q": "Select the related word/letters/number: {} : {} :: {} : ?", "o": [("Car", "Garage", "Aeroplane", ["Hangar", "Port", "Depot", "Station"], 0)], "exp": "A car is kept in a garage, an aeroplane in a hangar."},
        {"q": "Find the odd one out from the given alternatives.", "o": [("", "", "", ["Tomato", "Potato", "Carrot", "Onion"], 0)], "exp": "Tomato grows above ground; the rest are root vegetables."},
        {"q": "In a certain code, {} is written as {}. How is {} written?", "o": [("MIND", "KGLB", "DIAGRAM", ["BGYEPYK", "BGYCPYK", "ZEXEPYK", "BGYEPYJ"], 0)], "exp": "Each letter is shifted backward by 2."},
        {"q": "Complete the series: 2, 5, 10, 17, ?", "o": [("", "", "", ["26", "24", "25", "27"], 0)], "exp": "Difference is 3, 5, 7, 9. 17+9 = 26."},
        {"q": "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", "o": [("", "", "", ["Mother", "Aunt", "Sister", "Grandmother"], 0)], "exp": "The only daughter of the woman's mother is the woman herself. So, she is his mother."},
        {"q": "Statements: All pens are pencils. Some pencils are erasers. Conclusion: I. Some pens are erasers. II. Some erasers are pencils.", "o": [("", "", "", ["Only II follows", "Only I follows", "Both follow", "None follows"], 0)], "exp": "Only conclusion II follows from 'Some pencils are erasers'."},
        {"q": "If '+' means '-', '-' means '*', '*' means '/' and '/' means '+', then 15 - 3 + 10 * 5 / 5 = ?", "o": [("", "", "", ["48", "45", "52", "50"], 0)], "exp": "15 * 3 - 10 / 5 + 5 = 45 - 2 + 5 = 48."},
    ]
    
    for i in range(25):
        t = random.choice(reasoning_types)
        data = random.choice(t["o"])
        if len(data) == 5:
            q_text = t["q"].format(data[0], data[1], data[2])
            opts = data[3]
            ans = data[4]
        questions.append({
            "id": q_id,
            "section": "General Intelligence & Reasoning",
            "type": "single",
            "question": q_text,
            "options": opts,
            "correctAnswer": ans,
            "marks": 2,
            "negativeMarks": 0.5,
            "explanation": t["exp"]
        })
        q_id += 1

    # 2. General Awareness (25 Questions)
    ga_types = [
        ("Which article of the Indian Constitution deals with the Right to Equality?", ["Article 14", "Article 19", "Article 21", "Article 32"], 0, "Article 14 ensures equality before the law."),
        ("Who is known as the 'Father of the Indian Constitution'?", ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"], 0, "Dr. B.R. Ambedkar was the chairman of the drafting committee."),
        ("What is the SI unit of electric current?", ["Ampere", "Volt", "Ohm", "Watt"], 0, "Ampere is the SI unit of electric current."),
        ("Which planet is known as the Red Planet?", ["Mars", "Venus", "Jupiter", "Saturn"], 0, "Mars appears red due to iron oxide on its surface."),
        ("Who wrote the national anthem of India?", ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subhas Chandra Bose", "Sarojini Naidu"], 0, "Rabindranath Tagore wrote Jana Gana Mana."),
        ("Which is the longest river in the world?", ["Nile", "Amazon", "Yangtze", "Mississippi"], 0, "The Nile is traditionally considered the longest river."),
        ("When did the first battle of Panipat take place?", ["1526", "1556", "1761", "1857"], 0, "First battle of Panipat was fought in 1526 between Babur and Ibrahim Lodi."),
        ("What is the chemical formula for water?", ["H2O", "CO2", "NaCl", "O2"], 0, "H2O stands for two hydrogen atoms and one oxygen atom."),
        ("Which vitamin is produced when skin is exposed to sunlight?", ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"], 0, "Vitamin D is synthesized in the skin upon UVB exposure."),
        ("Who is the current governor of the RBI? (As of 2024)", ["Shaktikanta Das", "Urjit Patel", "Raghuram Rajan", "D. Subbarao"], 0, "Shaktikanta Das is the 25th Governor of the RBI."),
    ]
    for i in range(25):
        q = ga_types[i % len(ga_types)]
        questions.append({
            "id": q_id,
            "section": "General Awareness",
            "type": "single",
            "question": q[0],
            "options": q[1],
            "correctAnswer": q[2],
            "marks": 2,
            "negativeMarks": 0.5,
            "explanation": q[3]
        })
        q_id += 1

    # 3. Quantitative Aptitude (25 Questions)
    quant_types = [
        ("What is the value of 15% of 400?", ["60", "40", "80", "50"], 0, "15/100 * 400 = 60."),
        ("If A and B can do a work in 10 and 15 days respectively, how long will they take together?", ["6 days", "5 days", "8 days", "4 days"], 0, "1/10 + 1/15 = 5/30 = 1/6. So 6 days."),
        ("A shopkeeper sells an item for Rs. 120 making a 20% profit. What was the cost price?", ["Rs. 100", "Rs. 90", "Rs. 110", "Rs. 96"], 0, "CP * 1.2 = 120 => CP = 100."),
        ("What is the square root of 1024?", ["32", "34", "30", "36"], 0, "32 * 32 = 1024."),
        ("If the radius of a circle is 7 cm, what is its circumference? (Take pi=22/7)", ["44 cm", "22 cm", "88 cm", "154 cm"], 0, "2 * 22/7 * 7 = 44 cm."),
        ("A train 200m long passes a pole in 10 seconds. Find its speed in km/hr.", ["72 km/hr", "36 km/hr", "54 km/hr", "90 km/hr"], 0, "Speed = 200/10 = 20 m/s. 20 * 18/5 = 72 km/hr."),
        ("Find the simple interest on Rs. 5000 at 10% pa for 2 years.", ["Rs. 1000", "Rs. 500", "Rs. 1500", "Rs. 2000"], 0, "SI = P*R*T/100 = 5000*10*2/100 = 1000."),
        ("If 3x + 5 = 20, what is the value of x?", ["5", "3", "4", "6"], 0, "3x = 15 => x = 5."),
    ]
    for i in range(25):
        q = quant_types[i % len(quant_types)]
        questions.append({
            "id": q_id,
            "section": "Quantitative Aptitude",
            "type": "single",
            "question": q[0],
            "options": q[1],
            "correctAnswer": q[2],
            "marks": 2,
            "negativeMarks": 0.5,
            "explanation": q[3]
        })
        q_id += 1

    # 4. English Comprehension (25 Questions)
    english_types = [
        ("Choose the correct synonym for 'ABUNDANT':", ["Plentiful", "Scarce", "Rare", "Meager"], 0, "Abundant means available in large quantities; plentiful."),
        ("Choose the correct antonym for 'DILIGENT':", ["Lazy", "Hardworking", "Active", "Careful"], 0, "Diligent means showing care in one's duties. Lazy is the opposite."),
        ("Find the error in the sentence: 'He don't know the answer.'", ["don't", "know", "the", "No error"], 0, "It should be 'He doesn't know' as 'He' is third-person singular."),
        ("What is the one-word substitution for 'A person who loves books'?", ["Bibliophile", "Philanthropist", "Misogynist", "Introvert"], 0, "A bibliophile is a person who collects or has a great love of books."),
        ("Identify the meaning of the idiom: 'To spill the beans'", ["To reveal a secret", "To drop food", "To talk loudly", "To get angry"], 0, "To spill the beans means to reveal secret information unintentionally or indiscreetly."),
        ("Fill in the blank: 'She is _________ European.'", ["a", "an", "the", "none"], 0, "European starts with a consonant sound 'yoo', so 'a' is used."),
        ("Change to passive voice: 'They are building a house.'", ["A house is being built by them.", "A house was being built by them.", "A house is built by them.", "A house has been built by them."], 0, "Present continuous active changes to 'is being + V3' in passive."),
    ]
    for i in range(25):
        q = english_types[i % len(english_types)]
        questions.append({
            "id": q_id,
            "section": "English Comprehension",
            "type": "single",
            "question": q[0],
            "options": q[1],
            "correctAnswer": q[2],
            "marks": 2,
            "negativeMarks": 0.5,
            "explanation": q[3]
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
        "description": "Authentic SSC CGL Tier-1 exam replica with exactly 100 questions covering all 4 sections (Reasoning, GA, Quant, English). Timing: 60 minutes. Marking: +2.00 / -0.50.",
        "questions": questions
    }

    with open('sample-tests.js', 'w', encoding='utf-8') as f:
        f.write("const SAMPLE_MOCK_TESTS = [\n")
        f.write(json.dumps(test_data, indent=2))
        f.write("\n];\n")

generate_test()
