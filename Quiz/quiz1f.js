const questions = [

// First Missionaries
{
    question: "Who is known as the father of modern missions?",
    options: [
        { text: "William Carey", isCorrect: true },
        { text: "Robert Morrison", isCorrect: false },
        { text: "Adoniram Judson", isCorrect: false },
        { text: "David Livingstone", isCorrect: false }
    ],
    hint: "Identify the individual credited with pioneering modern missions."
},
{
    question: "What was William Carey's profession before becoming a missionary?",
    options: [
        { text: "Shoemaker", isCorrect: true },
        { text: "Farmer", isCorrect: false },
        { text: "Soldier", isCorrect: false },
        { text: "Teacher", isCorrect: false }
    ],
    hint: "Identify the occupation William Carey had before embarking on his missionary work."
},
{
    question: "Which explorer's voyages inspired William Carey to become a missionary?",
    options: [
        { text: "Captain Cook", isCorrect: true },
        { text: "Christopher Columbus", isCorrect: false },
        { text: "Marco Polo", isCorrect: false },
        { text: "Vasco da Gama", isCorrect: false }
    ],
    hint: "Identify the explorer whose travels influenced William Carey's missionary aspirations."
},
{
    question: "What resulted from a sermon preached by William Carey to a group of ministers?",
    options: [
        { text: "Formation of the first missionary society", isCorrect: true },
        { text: "Publication of a missionary journal", isCorrect: false },
        { text: "Expansion of local churches", isCorrect: false },
        { text: "Establishment of a theological school", isCorrect: false }
    ],
    hint: "Identify the outcome of William Carey's sermon that sparked missionary efforts."
},
{
    question: "Where did William Carey serve as a pioneer missionary?",
    options: [
        { text: "India", isCorrect: true },
        { text: "China", isCorrect: false },
        { text: "Africa", isCorrect: false },
        { text: "South Pacific", isCorrect: false }
    ],
    hint: "Identify the country where William Carey conducted his missionary work."
},
{
    question: "Which missionary translated portions of the Scriptures and laid the foundation for modern missions?",
    options: [
        { text: "William Carey", isCorrect: true },
        { text: "Adoniram Judson", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "Robert Moffat", isCorrect: false }
    ],
    hint: "Identify the missionary known for his translation work and impact on modern missions."
},
{
    question: "In what year was the Church Missionary Society founded?",
    options: [
        { text: "1799", isCorrect: true },
        { text: "1761", isCorrect: false },
        { text: "1834", isCorrect: false },
        { text: "1810", isCorrect: false }
    ],
    hint: "Identify the founding year of the Church Missionary Society, marking the era of modern missions."
},
{
    question: "Who prepared an English/Chinese dictionary and published the Bible?",
    options: [
        { text: "Robert Morrison", isCorrect: true },
        { text: "Adoniram Judson", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "Robert Moffat", isCorrect: false }
    ],
    hint: "Identify the missionary known for his linguistic work in China."
},
{
    question: "Which missionary translated the Bible into Burmese and also served in India?",
    options: [
        { text: "Adoniram Judson", isCorrect: true },
        { text: "Robert Morrison", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "John G. Paton", isCorrect: false }
    ],
    hint: "Identify the missionary known for his translation work in Burma (Myanmar) and service in India."
},
{
    question: "Who is credited with opening Africa for Christianity?",
    options: [
        { text: "David Livingstone", isCorrect: true },
        { text: "Robert Moffat", isCorrect: false },
        { text: "John Williams", isCorrect: false },
        { text: "John G. Paton", isCorrect: false }
    ],
    hint: "Identify the missionary known for his explorations and evangelism in Africa."
},
{
    question: "Which missionary pioneered work in Africa alongside David Livingstone?",
    options: [
        { text: "Robert Moffat", isCorrect: true },
        { text: "Adoniram Judson", isCorrect: false },
        { text: "John Williams", isCorrect: false },
        { text: "John G. Paton", isCorrect: false }
    ],
    hint: "Identify the missionary known for his efforts in Africa alongside David Livingstone."
},
{
    question: "Who pioneered missionary work in the South Pacific with a boat named 'The Messenger of Peace'?",
    options: [
        { text: "John Williams", isCorrect: true },
        { text: "Robert Moffat", isCorrect: false },
        { text: "John G. Paton", isCorrect: false },
        { text: "William Carey", isCorrect: false }
    ],
    hint: "Identify the missionary known for his work in the South Pacific using a distinctive boat."
},
{
    question: "How many times was John G. Paton's life threatened by cannibals in the South Pacific Islands?",
    options: [
        { text: "Fifty-three times", isCorrect: true },
        { text: "Ten times", isCorrect: false },
        { text: "Twenty-five times", isCorrect: false },
        { text: "Eighty times", isCorrect: false }
    ],
    hint: "Identify the number of times John G. Paton faced life-threatening situations with cannibals."
},
{
    question: "Who is known for translating the Bible into the Burmese language?",
    options: [
        { text: "Adoniram Judson", isCorrect: true },
        { text: "Robert Morrison", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "John Williams", isCorrect: false }
    ],
    hint: "Identify the missionary recognized for his translation work in Burma (Myanmar)."
},
{
    question: "Which missionary translated the Scriptures into Chinese and published an English/Chinese dictionary?",
    options: [
        { text: "Robert Morrison", isCorrect: true },
        { text: "Adoniram Judson", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "John G. Paton", isCorrect: false }
    ],
    hint: "Identify the missionary known for his linguistic contributions in China."
},
{
    question: "Who was the first missionary to India?",
    options: [
        { text: "William Carey", isCorrect: true },
        { text: "Robert Morrison", isCorrect: false },
        { text: "Adoniram Judson", isCorrect: false },
        { text: "David Livingstone", isCorrect: false }
    ],
    hint: "Identify the pioneering missionary who embarked on mission work in India."
},
{
    question: "Which missionary is associated with suffering privation and loss to extend the gospel?",
    options: [
        { text: "All of the above", isCorrect: true },
        { text: "Robert Moffat", isCorrect: false },
        { text: "John Williams", isCorrect: false },
        { text: "Adoniram Judson", isCorrect: false }
    ],
    hint: "Identify the missionary recognized for enduring hardships in spreading the gospel."
},
{
    question: "Who served in India and also translated the Scriptures into Burmese?",
    options: [
        { text: "Adoniram Judson", isCorrect: true },
        { text: "Robert Morrison", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "John G. Paton", isCorrect: false }
    ],
    hint: "Identify the missionary known for work in both India and Burma (Myanmar)."
},
{
    question: "Which missionary is credited with pioneering work in China and translating the Bible?",
    options: [
        { text: "Robert Morrison", isCorrect: true },
        { text: "William Carey", isCorrect: false },
        { text: "David Livingstone", isCorrect: false },
        { text: "John G. Paton", isCorrect: false }
    ],
    hint: "Identify the missionary recognized for early missions in China and Bible translation."
},
{
    question: "Who opened Africa for Christianity?",
    options: [
        { text: "David Livingstone", isCorrect: true },
        { text: "Robert Moffat", isCorrect: false },
        { text: "John Williams", isCorrect: false },
        { text: "Adoniram Judson", isCorrect: false }
    ],
    hint: "Identify the missionary known for significant efforts in evangelizing Africa."
}
]