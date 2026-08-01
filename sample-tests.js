// Pre-loaded sample mock tests dataset
const SAMPLE_MOCK_TESTS = [
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
        explanation: "Floyd's build-heap algorithm processes nodes bottom-up. The sum of heights across all nodes evaluates to n * (1/2 + 2/4 + 3/8 + ...) = O(n)."
      },
      {
        id: 2,
        section: "Data Structures & Algorithms",
        type: "single",
        question: "Which of the following traversal orders uniquely identifies a binary tree when given along with the Inorder traversal?",
        options: ["Preorder only", "Postorder only", "Either Preorder or Postorder", "Neither Preorder nor Postorder"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Inorder traversal along with either Preorder or Postorder traversal can uniquely reconstruct a binary tree."
      },
      {
        id: 3,
        section: "Operating Systems",
        type: "single",
        question: "Consider a system with 4 processes and 3 resource units of the same type. Each process requires at most 1 unit. Is deadlock possible?",
        options: ["Yes, always", "No, deadlock cannot occur", "Depends on execution order", "Only if processes run sequentially"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Since the sum of max demands (4 * 1 = 4) is less than total resources + processes, deadlock cannot occur."
      },
      {
        id: 4,
        section: "Operating Systems",
        type: "single",
        question: "In virtual memory management, Page Fault occurs when:",
        options: [
          "An invalid memory address is accessed",
          "The requested page is not currently present in main memory (RAM)",
          "A page in cache memory is corrupted",
          "Disk I/O buffer overflows"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "A page fault is a hardware interrupt triggered when a program accesses a page that is mapped into virtual address space, but not loaded in physical RAM."
      },
      {
        id: 5,
        section: "Database Management Systems",
        type: "single",
        question: "Which normal form guarantees the elimination of all insertion, update, and deletion anomalies caused by functional dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: 3,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Boyce-Codd Normal Form (BCNF) strictly requires every non-trivial functional dependency X -> Y to have X as a super key."
      },
      {
        id: 6,
        section: "Database Management Systems",
        type: "single",
        question: "In ACID properties of transactions, 'Atomicity' is maintained by which component of DBMS?",
        options: ["Concurrency Control Manager", "Recovery Manager", "Query Optimizer", "Buffer Manager"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "The Recovery Manager uses undo/redo logs to ensure all operations of a transaction complete or none do (Atomicity)."
      },
      {
        id: 7,
        section: "Computer Networks",
        type: "single",
        question: "What is the maximum payload size (in bytes) of a standard IPv4 packet?",
        options: ["65,535", "65,515", "1,500", "64,000"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Max IPv4 total length is 65,535 bytes. With a minimum header size of 20 bytes, max payload = 65,535 - 20 = 65,515 bytes."
      },
      {
        id: 8,
        section: "Computer Networks",
        type: "single",
        question: "Which TCP congestion control state doubles the congestion window (cwnd) every Round Trip Time (RTT)?",
        options: ["Congestion Avoidance", "Slow Start", "Fast Recovery", "Fast Retransmit"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "During Slow Start, cwnd increases exponentially by doubling every RTT until ssthresh is reached."
      },
      {
        id: 9,
        section: "General Aptitude",
        type: "single",
        question: "If 6 men or 8 women can complete a work in 12 days, how many days will 3 men and 4 women take to complete the same work?",
        options: ["12 days", "16 days", "8 days", "24 days"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "6 Men = 8 Women => 3 Men = 4 Women. So (3 Men + 4 Women) = (4 Women + 4 Women) = 8 Women. 8 women take 12 days."
      },
      {
        id: 10,
        section: "General Aptitude",
        type: "single",
        question: "Find the missing term in the sequence: 2, 6, 12, 20, 30, 42, ?",
        options: ["52", "54", "56", "60"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Sequence follows n² + n: (1²+1=2), (2²+2=6), (3²+3=12), (4²+4=20), (5²+5=30), (6²+6=42), (7²+7=56)."
      },
      {
        id: 11,
        section: "Data Structures & Algorithms",
        type: "single",
        question: "Which data structure is primarily used to implement Breadth-First Search (BFS) on a graph?",
        options: ["Stack", "Queue", "Priority Queue", "Deque"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Queue follows First-In-First-Out (FIFO) which naturally explores graph nodes level-by-level in BFS."
      },
      {
        id: 12,
        section: "Operating Systems",
        type: "single",
        question: "Banker's Algorithm is used for which aspect of deadlock management?",
        options: ["Deadlock Detection", "Deadlock Prevention", "Deadlock Avoidance", "Deadlock Recovery"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Banker's Algorithm tests for safety by simulating the allocation for predetermined maximum possible amounts of resources to avoid deadlock."
      },
      {
        id: 13,
        section: "Computer Networks",
        type: "single",
        question: "At which layer of the OSI model does a Router operate?",
        options: ["Data Link Layer (Layer 2)", "Network Layer (Layer 3)", "Transport Layer (Layer 4)", "Application Layer (Layer 7)"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Routers forward packets between network segments based on IP addresses, operating at Network Layer (Layer 3)."
      },
      {
        id: 14,
        section: "Database Management Systems",
        type: "single",
        question: "What type of join returns all rows from the left table, and matching rows from the right table?",
        options: ["INNER JOIN", "RIGHT JOIN", "LEFT OUTER JOIN", "FULL OUTER JOIN"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "LEFT OUTER JOIN guarantees that all records from the left relation are retained, filling NULLs for unmatched right relation attributes."
      },
      {
        id: 15,
        section: "General Aptitude",
        type: "single",
        question: "Choose the word most nearly opposite in meaning to 'EPHEMERAL':",
        options: ["Transient", "Permanent", "Fleeting", "Short-lived"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "'Ephemeral' means lasting for a very short time. The antonym is 'Permanent'."
      }
    ]
  },
  {
    id: "upsc-gs1-2026-01",
    title: "UPSC Civil Services GS Paper 1 - Practice Test",
    category: "UPSC / Civil Services",
    durationMinutes: 120,
    totalQuestions: 10,
    totalMarks: 20,
    negativeMarking: true,
    description: "Mock test covering Indian Polity, History, Geography, Economy, and General Environment for Civil Services aspirants.",
    questions: [
      {
        id: 1,
        section: "Indian Polity",
        type: "single",
        question: "Which Fundamental Right under the Constitution of India cannot be suspended even during a National Emergency declared under Article 352?",
        options: [
          "Article 19 (Freedom of Speech)",
          "Article 20 & Article 21 (Protection of life & personal liberty)",
          "Article 32 (Right to Constitutional Remedies)",
          "Article 14 (Equality before Law)"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "The 44th Constitutional Amendment Act, 1978 specified that Articles 20 and 21 cannot be suspended even during National Emergency."
      },
      {
        id: 2,
        section: "Indian History",
        type: "single",
        question: "The famous 'Purna Swaraj' (Complete Independence) resolution was passed at which session of the Indian National Congress?",
        options: ["Lahore Session (1929)", "Karachi Session (1931)", "Calcutta Session (1920)", "Belgaum Session (1924)"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Under the presidency of Jawaharlal Nehru, the INC passed the Purna Swaraj resolution at its Lahore Session in December 1929."
      },
      {
        id: 3,
        section: "Geography",
        type: "single",
        question: "Which Indian state has the longest coastline in mainland India?",
        options: ["Tamil Nadu", "Maharashtra", "Gujarat", "Andhra Pradesh"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Gujarat has the longest coastline in mainland India, stretching approximately 1,600 km along the Arabian Sea."
      },
      {
        id: 4,
        section: "Indian Economy",
        type: "single",
        question: "What is 'Repo Rate' as defined by the Reserve Bank of India (RBI)?",
        options: [
          "Rate at which RBI borrows money from commercial banks",
          "Rate at which RBI lends short-term money to commercial banks",
          "Rate at which banks lend to their most creditworthy customers",
          "Interest rate paid on savings accounts"
        ],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Repo Rate is the repurchase agreement rate at which the RBI lends money to commercial banks against government securities."
      },
      {
        id: 5,
        section: "Environment & Ecology",
        type: "single",
        question: "The Ramsar Convention is an international treaty for the conservation and sustainable use of:",
        options: ["Forest reserves", "Wetlands", "Coral reefs", "Ozone layer"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Signed in Ramsar, Iran in 1971, the convention focuses on the conservation and wise use of wetlands."
      },
      {
        id: 6,
        section: "Indian Polity",
        type: "single",
        question: "Who acts as the ex-officio Chairman of the Rajya Sabha (Upper House of Indian Parliament)?",
        options: ["The President of India", "The Vice-President of India", "The Prime Minister", "The Speaker of Lok Sabha"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Under Article 89(1), the Vice-President of India is ex-officio Chairman of the Council of States (Rajya Sabha)."
      },
      {
        id: 7,
        section: "Indian History",
        type: "single",
        question: "Who among the following initiated the Permanent Settlement system of land revenue in Bengal (1793)?",
        options: ["Lord Warren Hastings", "Lord Cornwallis", "Lord Dalhousie", "Lord William Bentinck"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "Lord Cornwallis introduced the Permanent Settlement in Bengal, Bihar, and Odisha in 1793."
      },
      {
        id: 8,
        section: "Geography",
        type: "single",
        question: "The 'Ten Degree Channel' separates which of the following geographical groups?",
        options: ["Andaman and Nicobar Islands", "Lakshadweep and Maldives", "India and Sri Lanka", "North and South Andaman"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "The Ten Degree Channel separates the Andaman Islands from the Nicobar Islands in the Bay of Bengal."
      },
      {
        id: 9,
        section: "Indian Economy",
        type: "single",
        question: "Which index in India is published monthly by the NSO to measure short-term changes in the volume of industrial production?",
        options: ["Consumer Price Index (CPI)", "Wholesale Price Index (WPI)", "Index of Industrial Production (IIP)", "Purchasing Managers Index (PMI)"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "IIP evaluates growth rates in industry groups like Mining, Manufacturing, and Electricity."
      },
      {
        id: 10,
        section: "Environment & Ecology",
        type: "single",
        question: "Which gas is primarily responsible for global warming and ocean acidification?",
        options: ["Methane (CH4)", "Carbon Dioxide (CO2)", "Nitrous Oxide (N2O)", "Chlorofluorocarbons (CFCs)"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.66,
        explanation: "CO2 is the primary greenhouse gas driving anthropogenic global warming and forms carbonic acid in ocean waters causing acidification."
      }
    ]
  },
  {
    id: "tech-fullstack-2026",
    title: "Full-Stack Web Development & JavaScript Master Quiz",
    category: "Tech & Coding",
    durationMinutes: 45,
    totalQuestions: 8,
    totalMarks: 16,
    negativeMarking: false,
    description: "Assess core modern web knowledge covering ES6+, Node.js, React, CSS Grid/Flexbox, and Web Security.",
    questions: [
      {
        id: 1,
        section: "JavaScript Core",
        type: "single",
        question: "What will `console.log(typeof NaN)` output in JavaScript?",
        options: ["'number'", "'nan'", "'undefined'", "'object'"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0,
        explanation: "In JavaScript, NaN (Not-a-Number) is a special numeric value defined by IEEE 754, so `typeof NaN` returns 'number'."
      },
      {
        id: 2,
        section: "JavaScript Core",
        type: "single",
        question: "Which mechanism in JavaScript moves variable and function declarations to the top of their scope during compilation?",
        options: ["Closure", "Hoisting", "Event Loop", "Prototype Chaining"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0,
        explanation: "Hoisting allows variables declared with `var` and `function` declarations to be referenced prior to their declaration."
      },
      {
        id: 3,
        section: "React & Frameworks",
        type: "single",
        question: "In React, what hook is used to run side-effects such as data fetching, subscriptions, or DOM mutations?",
        options: ["useContext", "useMemo", "useEffect", "useCallback"],
        correctAnswer: 2,
        marks: 2,
        negativeMarks: 0,
        explanation: "`useEffect` handles lifecycle side-effects in functional React components."
      },
      {
        id: 4,
        section: "CSS Architecture",
        type: "single",
        question: "Which CSS property shorthand sets `flex-grow`, `flex-shrink`, and `flex-basis` in a single declaration?",
        options: ["flex-flow", "flex", "align-self", "grid-template"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0,
        explanation: "The `flex` property specifies how a flex item will grow or shrink to fit space (e.g. `flex: 1 0 auto`)."
      },
      {
        id: 5,
        section: "Web Performance & Security",
        type: "single",
        question: "What HTTP header protects web applications from Cross-Site Scripting (XSS) and data injection attacks by restricting resources?",
        options: ["Strict-Transport-Security", "Content-Security-Policy (CSP)", "X-Frame-Options", "Access-Control-Allow-Origin"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0,
        explanation: "CSP allows site administrators to declare approved sources of content that the browser is allowed to load."
      },
      {
        id: 6,
        section: "Node.js & Backend",
        type: "single",
        question: "Which component of Node.js architecture enables non-blocking asynchronous I/O operations?",
        options: ["V8 Engine", "Libuv Event Loop", "NPM Manager", "Cluster module"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0,
        explanation: "Libuv is a multi-platform C library that provides the event loop and asynchronous thread pool abstractions in Node.js."
      },
      {
        id: 7,
        section: "JavaScript Core",
        type: "single",
        question: "What is the output of `[1, 2, 3] + [4, 5, 6]` in JavaScript?",
        options: ["[1, 2, 3, 4, 5, 6]", "'1,2,34,5,6'", "NaN", "TypeError"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0,
        explanation: "The `+` operator coerces both arrays into strings ('1,2,3' + '4,5,6') resulting in the concatenated string '1,2,34,5,6'."
      },
      {
        id: 8,
        section: "Web Performance & Security",
        type: "single",
        question: "Which HTTP status code signifies that a client request lacks valid authentication credentials for the target resource?",
        options: ["400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0,
        explanation: "401 Unauthorized indicates the request has not been applied because it lacks valid authentication credentials."
      }
    ]
  },
  {
    id: "ssc-cgl-aptitude-2026",
    title: "SSC CGL General Intelligence & Quantitative Aptitude",
    category: "SSC & Banking",
    durationMinutes: 60,
    totalQuestions: 6,
    totalMarks: 12,
    negativeMarking: true,
    description: "Speed test for SSC CGL & Banking exam aspirants covering Quantitative Reasoning, Percentages, Ratio, and Logic.",
    questions: [
      {
        id: 1,
        section: "Quantitative Aptitude",
        type: "single",
        question: "If a shopkeeper sells an article at a profit of 20% after giving a discount of 10% on the marked price, what is the ratio of cost price to marked price?",
        options: ["3 : 4", "2 : 3", "4 : 5", "5 : 6"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Let CP = 100. Profit = 20% => SP = 120. Marked Price (MP) * (1 - 0.10) = 120 => MP * 0.9 = 120 => MP = 1200/9 = 400/3. Ratio CP/MP = 100 / (400/3) = 300/400 = 3:4."
      },
      {
        id: 2,
        section: "Quantitative Aptitude",
        type: "single",
        question: "A train 150 meters long passes a telegraph pole in 12 seconds. Find the speed of the train in kilometers per hour (km/h).",
        options: ["45 km/h", "50 km/h", "54 km/h", "60 km/h"],
        correctAnswer: 0,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Speed in m/s = 150 / 12 = 12.5 m/s. Convert to km/h: 12.5 * (18/5) = 45 km/h."
      },
      {
        id: 3,
        section: "General Intelligence",
        type: "single",
        question: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that code?",
        options: ["EOJDEJFM", "EOJDJEFM", "MFEDJJOE", "MFEJDJOE"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Reverse the word and add +1 to each middle letter while keeping outer letters reversed: E -> E... M. Result = EOJDJEFM."
      },
      {
        id: 4,
        section: "Quantitative Aptitude",
        type: "single",
        question: "What is the compound interest on ₹10,000 at 10% per annum for 2 years compounded annually?",
        options: ["₹2,000", "₹2,100", "₹2,200", "₹2,050"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Amount = 10000 * (1.10)² = 10000 * 1.21 = ₹12,100. CI = 12100 - 10000 = ₹2,100."
      },
      {
        id: 5,
        section: "General Intelligence",
        type: "single",
        question: "Pointing to a photograph, a man said 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
        options: ["His own", "His son's", "His father's", "His nephew's"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "'My father's son' = The man himself (since he has no brother). So 'That man's father is ME'. The photograph is of his son."
      },
      {
        id: 6,
        section: "Quantitative Aptitude",
        type: "single",
        question: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?",
        options: ["44 years", "46 years", "45 years", "50 years"],
        correctAnswer: 1,
        marks: 2,
        negativeMarks: 0.5,
        explanation: "Original total age = 30 * 15 = 450. New total age with teacher (31 people, avg 16) = 31 * 16 = 496. Teacher age = 496 - 450 = 46 years."
      }
    ]
  }
];
