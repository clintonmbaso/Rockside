const questions = [
{
    question: "According to Genesis 26:5, what did Abraham do regarding God's commandments?",
    options: [
        { text: "He obeyed God's voice and kept His charge, commandments, statutes, and laws.", isCorrect: true },
        { text: "He ignored God's commandments.", isCorrect: false },
        { text: "He modified God's laws.", isCorrect: false },
        { text: "He questioned God's statutes.", isCorrect: false }
    ],
    hint: "Consider Abraham's obedience to God's instructions as described in Genesis."
},
{
    question: "What is described as the unchangeable expression of God's character?",
    options: [
        { text: "The Ten Commandments", isCorrect: true },
        { text: "The ceremonial laws", isCorrect: false },
        { text: "The cultural norms", isCorrect: false },
        { text: "The societal rules", isCorrect: false }
    ],
    hint: "Identify the specific set of laws that reflect God's unchangeable character."
},
{
    question: "In Psalm 105:8-11, who did God make a covenant with?",
    options: [
        { text: "Abraham, Isaac, Jacob, and the children of Israel", isCorrect: true },
        { text: "Only Moses", isCorrect: false },
        { text: "The kings of Israel", isCorrect: false },
        { text: "The prophets of Israel", isCorrect: false }
    ],
    hint: "Look for the specific individuals and groups mentioned in the passage."
},
{
    question: "According to Psalm 105:10-11, how long was God's covenant intended to last?",
    options: [
        { text: "Forever", isCorrect: true },
        { text: "For a few generations", isCorrect: false },
        { text: "Until the time of Jesus", isCorrect: false },
        { text: "For a thousand years", isCorrect: false }
    ],
    hint: "Consider the language used to describe the duration of the covenant."
},
{
    question: "What is the harmonious relationship God has maintained throughout the ages?",
    options: [
        { text: "Law and grace", isCorrect: true },
        { text: "Justice and mercy", isCorrect: false },
        { text: "Fear and obedience", isCorrect: false },
        { text: "War and peace", isCorrect: false }
    ],
    hint: "Identify the two concepts that are depicted as complementary and not contradictory."
},
{
    question: "How are we saved?",
    options: [
        { text: "By faith in the Lord Jesus Christ", isCorrect: true },
        { text: "By following strict rules", isCorrect: false },
        { text: "Through personal achievements", isCorrect: false },
        { text: "By ceremonial sacrifices", isCorrect: false }
    ],
    hint: "Consider the role of faith and belief in the salvation process."
},
{
    question: "What has been consistent about God's method of salvation throughout history?",
    options: [
        { text: "It has always been the same", isCorrect: true },
        { text: "It has evolved over time", isCorrect: false },
        { text: "It was only for specific groups", isCorrect: false },
        { text: "It changed after the Old Testament", isCorrect: false }
    ],
    hint: "Think about the continuity in God's approach to saving humanity."
},
{
    question: "What does the text say believers delight to do after experiencing salvation?",
    options: [
        { text: "To do God's will", isCorrect: true },
        { text: "To follow their desires", isCorrect: false },
        { text: "To establish their own laws", isCorrect: false },
        { text: "To disregard God's commands", isCorrect: false }
    ],
    hint: "Consider the response of those who have been saved."
},
{
    question: "What was the rule of life for the Old Testament church?",
    options: [
        { text: "The law of God", isCorrect: true },
        { text: "Human traditions", isCorrect: false },
        { text: "Philosophical ideals", isCorrect: false },
        { text: "Political regulations", isCorrect: false }
    ],
    hint: "Identify the specific guidance that governed the Old Testament church."
},
{
    question: "According to Genesis, what names were used to refer to those who obeyed God in the Old Testament?",
    options: [
        { text: "Sons of God, seed of Abraham, children of Israel", isCorrect: true },
        { text: "Disciples of Moses", isCorrect: false },
        { text: "Followers of David", isCorrect: false },
        { text: "Prophets of God", isCorrect: false }
    ],
    hint: "Look for the various names used to describe obedient individuals."
},
{
    question: "How did members of the Old Testament church demonstrate their faith in the plan of salvation?",
    options: [
        { text: "By offering a sacrifice", isCorrect: true },
        { text: "By reciting prayers", isCorrect: false },
        { text: "By fasting regularly", isCorrect: false },
        { text: "By performing rituals", isCorrect: false }
    ],
    hint: "Consider the act that symbolized their acceptance of God's plan."
},
{
    question: "What did the sacrifice represent for the members of the Old Testament church?",
    options: [
        { text: "The Lamb of God who would take away the sins of the world", isCorrect: true },
        { text: "A means of gaining social status", isCorrect: false },
        { text: "An act of tradition", isCorrect: false },
        { text: "A demonstration of wealth", isCorrect: false }
    ],
    hint: "Identify the symbolic meaning associated with the sacrifice."
},
{
    question: "How did members of the Old Testament church become 'new creatures'?",
    options: [
        { text: "Through faith in the coming Messiah", isCorrect: true },
        { text: "Through observing strict rituals", isCorrect: false },
        { text: "Through political reform", isCorrect: false },
        { text: "Through personal achievements", isCorrect: false }
    ],
    hint: "Consider the transformative power of their faith in the Messiah."
},
{
    question: "What has always been the hope of the ages?",
    options: [
        { text: "The coming of the Lord", isCorrect: true },
        { text: "The establishment of earthly kingdoms", isCorrect: false },
        { text: "The fulfillment of personal desires", isCorrect: false },
        { text: "The accumulation of wealth", isCorrect: false }
    ],
    hint: "Identify the central theme of hope throughout history."
},
{
    question: "Who did God use to instruct the church members in Old Testament times?",
    options: [
        { text: "Prophets", isCorrect: true },
        { text: "Kings", isCorrect: false },
        { text: "Warriors", isCorrect: false },
        { text: "Merchants", isCorrect: false }
    ],
    hint: "Consider the specific role of individuals chosen by God to communicate His instructions."
},
{
    question: "Who was the first writer used by God to record permanent instructions for His church?",
    options: [
        { text: "Moses", isCorrect: true },
        { text: "David", isCorrect: false },
        { text: "Isaiah", isCorrect: false },
        { text: "Elijah", isCorrect: false }
    ],
    hint: "Identify the key figure responsible for preserving the people's experiences."
},
{
    question: "When were the inspired writings read to the congregations in Old Testament times?",
    options: [
        { text: "On the seventh-day Sabbath and other special occasions", isCorrect: true },
        { text: "Every day at sunrise", isCorrect: false },
        { text: "During annual festivals only", isCorrect: false },
        { text: "On weekdays after work", isCorrect: false }
    ],
    hint: "Consider the timing of the public reading of the inspired writings."
},
{
    question: "What are the inspired writings from Old Testament times known as today?",
    options: [
        { text: "The Old Testament", isCorrect: true },
        { text: "The New Testament", isCorrect: false },
        { text: "The Apocrypha", isCorrect: false },
        { text: "The Dead Sea Scrolls", isCorrect: false }
    ],
    hint: "Identify the familiar name given to the preserved writings."
},
{
    question: "What did the sacrifice in the Old Testament symbolize?",
    options: [
        { text: "The Lamb of God", isCorrect: true },
        { text: "Human obedience", isCorrect: false },
        { text: "Community unity", isCorrect: false },
        { text: "Historical events", isCorrect: false }
    ],
    hint: "Consider the symbolic meaning associated with the act of sacrifice."
},
{
    question: "What was the primary theme of instruction given to the Old Testament church?",
    options: [
        { text: "God's plan of salvation", isCorrect: true },
        { text: "Political governance", isCorrect: false },
        { text: "Economic prosperity", isCorrect: false },
        { text: "Social etiquette", isCorrect: false }
    ],
    hint: "Identify the central focus of the teachings imparted to the church members."
},
{
    question: "What act was used by the Old Testament church to demonstrate acceptance of God's plan?",
    options: [
        { text: "Offering a sacrifice", isCorrect: true },
        { text: "Fasting for days", isCorrect: false },
        { text: "Performing rituals", isCorrect: false },
        { text: "Building temples", isCorrect: false }
    ],
    hint: "Consider the symbolic act that represented faith in God's salvation plan."
}
]