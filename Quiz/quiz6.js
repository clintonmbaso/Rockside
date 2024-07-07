const questions = [
  {
        question: "Who traveled to Switzerland spreading the message of the second advent and the seventh-day Sabbath?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "M. B. Czechowski", isCorrect: true },
            { text: "Charles Andrews", isCorrect: false },
            { text: "Mary Andrews", isCorrect: false }
        ],
        hint: "The passage mentions an individual who spread the message of the second advent and the seventh-day Sabbath in Switzerland."
    },
    {
        question: "When was the first official overseas missionary appointed and sent to Switzerland?",
        options: [
            { text: "1872", isCorrect: false },
            { text: "1874", isCorrect: true },
            { text: "1875", isCorrect: false },
            { text: "1876", isCorrect: false }
        ],
        hint: "The passage mentions the year when the first official overseas missionary was appointed and sent to Switzerland."
    },
    {
        question: "Who was appointed as the first official overseas missionary and sent to Switzerland?",
        options: [
            { text: "John Nevins Andrews", isCorrect: true },
            { text: "M. B. Czechowski", isCorrect: false },
            { text: "Charles Andrews", isCorrect: false },
            { text: "Mary Andrews", isCorrect: false }
        ],
        hint: "The passage mentions the individual appointed as the first official overseas missionary and sent to Switzerland."
    },
    {
        question: "Who sponsored M. B. Czechowski's travel to spread the message of the second advent and the seventh-day Sabbath?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "The General Conference", isCorrect: false },
            { text: "Another sponsorship", isCorrect: true },
            { text: "The European Mission", isCorrect: false }
        ],
        hint: "The passage mentions who sponsored M. B. Czechowski's travel to spread the message."
    },
    {
        question: "Who sailed with John Nevins Andrews to Switzerland?",
        options: [
            { text: "His wife", isCorrect: false },
            { text: "His son Charles and daughter Mary", isCorrect: true },
            { text: "His son Charles", isCorrect: false },
            { text: "His daughter Mary", isCorrect: false }
        ],
        hint: "The passage mentions who sailed with John Nevins Andrews to Switzerland."
    },
    {
        question: "When did John Nevins Andrews reach Prussia?",
        options: [
            { text: "1872", isCorrect: false },
            { text: "1874", isCorrect: false },
            { text: "1875", isCorrect: true },
            { text: "1876", isCorrect: false }
        ],
        hint: "The passage mentions the year when John Nevins Andrews reached Prussia."
    },
    {
        question: "How many Sabbathkeepers did John Nevins Andrews find in Prussia?",
        options: [
            { text: "32", isCorrect: false },
            { text: "46", isCorrect: true },
            { text: "50", isCorrect: false },
            { text: "55", isCorrect: false }
        ],
        hint: "The passage mentions the number of Sabbathkeepers found by John Nevins Andrews in Prussia."
    },
    {
        question: "Who organized the European Mission soon after John Nevins Andrews's arrival in Switzerland?",
        options: [
            { text: "M. B. Czechowski", isCorrect: false },
            { text: "Charles Andrews", isCorrect: false },
            { text: "John Nevins Andrews", isCorrect: true },
            { text: "Mary Andrews", isCorrect: false }
        ],
        hint: "The passage mentions who organized the European Mission."
    },
    {
        question: "What was the occupation of M. B. Czechowski before he traveled to spread the message in Switzerland?",
        options: [
            { text: "Minister", isCorrect: false },
            { text: "Catholic priest", isCorrect: true },
            { text: "Doctor", isCorrect: false },
            { text: "Teacher", isCorrect: false }
        ],
        hint: "The passage mentions the occupation of M. B. Czechowski before his missionary travels."
    },
    {
        question: "Who sailed with John Nevins Andrews to Switzerland?",
        options: [
            { text: "His wife", isCorrect: false },
            { text: "His son Charles and daughter Mary", isCorrect: true },
            { text: "His son Charles", isCorrect: false },
            { text: "His daughter Mary", isCorrect: false }
        ],
        hint: "The passage mentions who sailed with John Nevins Andrews to Switzerland."
    },
    {
        question: "In what year did publishing begin at Basel?",
        options: [
            { text: "1874", isCorrect: false },
            { text: "1876", isCorrect: true },
            { text: "1878", isCorrect: false },
            { text: "1880", isCorrect: false }
        ],
        hint: "The passage mentions the year when publishing began at Basel."
    },
    {
        question: "What was the name of the first Seventh-day Adventist periodical?",
        options: [
            { text: "The Adventist Review", isCorrect: false },
            { text: "The Signs of the Times", isCorrect: true },
            { text: "The Review and Herald", isCorrect: false },
            { text: "The Youth’s Instructor", isCorrect: false }
        ],
        hint: "The passage mentions the name of the first Seventh-day Adventist periodical."
    },
    {
        question: "In what language was the first Seventh-day Adventist periodical published?",
        options: [
            { text: "German", isCorrect: false },
            { text: "English", isCorrect: false },
            { text: "French", isCorrect: true },
            { text: "Spanish", isCorrect: false }
        ],
        hint: "The passage mentions the language in which the first Seventh-day Adventist periodical was published."
    },
    {
        question: "Where was the first Seventh-day Adventist periodical published?",
        options: [
            { text: "Basel", isCorrect: true },
            { text: "Geneva", isCorrect: false },
            { text: "Zurich", isCorrect: false },
            { text: "Lausanne", isCorrect: false }
        ],
        hint: "The passage mentions the location where the first Seventh-day Adventist periodical was published."
    },
    {
        question: "Which periodical appeared in 1876?",
        options: [
            { text: "The Adventist Review", isCorrect: false },
            { text: "The Signs of the Times", isCorrect: true },
            { text: "The Review and Herald", isCorrect: false },
            { text: "The Youth’s Instructor", isCorrect: false }
        ],
        hint: "The passage mentions the periodical that appeared in 1876."
    },
    {
        question: "Who entered Scandinavia in 1877?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: true },
            { text: "M. B. Czechowski", isCorrect: false },
            { text: "D. T. Bourdeau", isCorrect: false }
        ],
        hint: "The passage mentions the individual who entered Scandinavia in 1877."
    },
    {
        question: "When was the publishing house opened in Scandinavia?",
        options: [
            { text: "1875", isCorrect: false },
            { text: "1876", isCorrect: false },
            { text: "1877", isCorrect: false },
            { text: "1879", isCorrect: true }
        ],
        hint: "The passage mentions the year when the publishing house was opened in Scandinavia."
    },
    {
        question: "Who was assigned to consolidate the work in France?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: false },
            { text: "D. T. Bourdeau", isCorrect: true },
            { text: "A. C. Bourdeau", isCorrect: false }
        ],
        hint: "The passage mentions the individual assigned to consolidate the work in France."
    },
    {
        question: "In which countries did A. C. Bourdeau work?",
        options: [
            { text: "Italy, Germany, and Romania", isCorrect: true },
            { text: "France, Switzerland, and Russia", isCorrect: false },
            { text: "Spain, Austria, and Hungary", isCorrect: false },
            { text: "Sweden, Norway, and Denmark", isCorrect: false }
        ],
        hint: "The passage mentions the countries where A. C. Bourdeau worked."
    },
    {
        question: "Who was used by God to carry the message into Russia?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: false },
            { text: "D. T. Bourdeau", isCorrect: false },
            { text: "Philipp Reiswig", isCorrect: true }
        ],
        hint: "The passage mentions the individual who carried the message into Russia."
    },
    {
        question: "What role did Philipp Reiswig have?",
        options: [
            { text: "Educator", isCorrect: false },
            { text: "Preacher", isCorrect: false },
            { text: "Missionary", isCorrect: true },
            { text: "Translator", isCorrect: false }
        ],
        hint: "The passage mentions the role of Philipp Reiswig."
    },
    {
        question: "Who worked in Italy, Germany, France, Switzerland, and Romania?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: false },
            { text: "D. T. Bourdeau", isCorrect: false },
            { text: "A. C. Bourdeau", isCorrect: true }
        ],
        hint: "The passage mentions the individual who worked in multiple European countries."
    },
    {
        question: "Which country did D. T. Bourdeau work in?",
        options: [
            { text: "France", isCorrect: true },
            { text: "Italy", isCorrect: false },
            { text: "Germany", isCorrect: false },
            { text: "Russia", isCorrect: false }
        ],
        hint: "The passage mentions the country where D. T. Bourdeau worked."
    },
    {
        question: "Who opened a publishing house in Scandinavia?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: true },
            { text: "D. T. Bourdeau", isCorrect: false },
            { text: "A. C. Bourdeau", isCorrect: false }
        ],
        hint: "The passage mentions the individual who opened a publishing house in Scandinavia."
    },
    {
        question: "Who was sent to consolidate the work in France?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: false },
            { text: "D. T. Bourdeau", isCorrect: true },
            { text: "A. C. Bourdeau", isCorrect: false }
        ],
        hint: "The passage mentions the individual sent to consolidate the work in France."
    },
    {
        question: "Who went to England in 1878?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "William Ings", isCorrect: true },
            { text: "John Matteson", isCorrect: false },
            { text: "M. B. Czechowski", isCorrect: false }
        ],
        hint: "The passage mentions the individual who went to England in 1878."
    },
    {
        question: "How many people were keeping the Sabbath after William Ings's 16 weeks in England?",
        options: [
            { text: "Five", isCorrect: false },
            { text: "Eight", isCorrect: false },
            { text: "Ten", isCorrect: true },
            { text: "Fifteen", isCorrect: false }
        ],
        hint: "The passage mentions the number of people keeping the Sabbath after William Ings's 16 weeks in England."
    },
    {
        question: "Who arrived in England later that same year to lead out?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "John Matteson", isCorrect: false },
            { text: "Elder Loughborough", isCorrect: true },
            { text: "William Ings", isCorrect: false }
        ],
        hint: "The passage mentions the individual who arrived in England later that same year to lead out."
    },
    {
        question: "What establishments were later established in England?",
        options: [
            { text: "Stanborough Press and Newbold College", isCorrect: true },
            { text: "Battle Creek Sanitarium and Pacific Press", isCorrect: false },
            { text: "Loma Linda University and Andrews University", isCorrect: false },
            { text: "Ellen G. White Estate and Review and Herald Publishing Association", isCorrect: false }
        ],
        hint: "The passage mentions the establishments later established in England."
    },
    {
        question: "What was established in England after Elder Loughborough's arrival?",
        options: [
            { text: "Pacific Press", isCorrect: false },
            { text: "Newbold College", isCorrect: true },
            { text: "Loma Linda University", isCorrect: false },
            { text: "Ellen G. White Estate", isCorrect: false }
        ],
        hint: "The passage mentions what was established in England after Elder Loughborough's arrival."
    },
    {
        question: "Which of the following became a home base, sending out missionaries to other lands?",
        options: [
            { text: "Newbold College", isCorrect: false },
            { text: "Stanborough Press", isCorrect: false },
            { text: "England", isCorrect: true },
            { text: "London", isCorrect: false }
        ],
        hint: "The passage mentions which entity became a home base, sending out missionaries to other lands."
    },
    {
        question: "Who played a significant role in leading the missionary activities in England?",
        options: [
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "Elder Loughborough", isCorrect: true },
            { text: "John Matteson", isCorrect: false },
            { text: "William Ings", isCorrect: false }
        ],
        hint: "The passage mentions the individual who played a significant role in leading the missionary activities in England."
    },
    {
        question: "What significant event occurred in England in 1878?",
        options: [
            { text: "Establishment of Pacific Press", isCorrect: false },
            { text: "Arrival of Elder Loughborough", isCorrect: true },
            { text: "Opening of Loma Linda University", isCorrect: false },
            { text: "Publication of the first Sabbath school lessons", isCorrect: false }
        ],
        hint: "The passage mentions the significant event that occurred in England in 1878."
    },
    {
        question: "Who established the Stanborough Press in England?",
        options: [
            { text: "Elder Loughborough", isCorrect: false },
            { text: "William Ings", isCorrect: false },
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "Not mentioned", isCorrect: true }
        ],
        hint: "The passage does not mention who established the Stanborough Press in England."
    },
    {
        question: "Which institution was established in England?",
        options: [
            { text: "Battle Creek Sanitarium", isCorrect: false },
            { text: "Newbold College", isCorrect: true },
            { text: "Andrews University", isCorrect: false },
            { text: "Loma Linda University", isCorrect: false }
        ],
        hint: "The passage mentions an institution established in England."
    }
];