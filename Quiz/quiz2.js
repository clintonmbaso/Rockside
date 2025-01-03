const questions = [
    {
        question: "What was the first spectacular event mentioned in the text?",
        options: [
            { text: "The Dark Day", isCorrect: false },
            { text: "The Falling of the Stars", isCorrect: false },
            { text: "The Lisbon Earthquake", isCorrect: true },
            { text: "The Great Flood", isCorrect: false }
        ],
      hint: "This event caused widespread destruction in a specific city and was felt over a vast region."
    },
    {
        question: "Which prophecy from the Bible is connected to the Lisbon Earthquake?",
        options: [
            { text: "Revelation 6:12, 13", isCorrect: true },
            { text: "Mark 13:24", isCorrect: false },
            { text: "Acts of Toleration", isCorrect: false },
            { text: "Genesis 1:1", isCorrect: false }
        ],
      hint: "This prophecy is found in the book of Revelation and describes a cataclysmic event."
    },
    {
        question: "When did the Dark Day occur?",
        options: [
            { text: "May 19, 1773", isCorrect: false },
            { text: "May 19, 1780", isCorrect: true },
            { text: "May 19, 1798", isCorrect: false },
            { text: "May 19, 1812", isCorrect: false }
        ],
      hint: "This event took place on a specific date in the late 18th century."
    },
    {
        question: "What was the significant event that ended the 1260-year period of persecution?",
        options: [
            { text: "Acts of Toleration", isCorrect: true },
            { text: "Empress Maria Theresa's decree", isCorrect: false },
            { text: "Dark Day of May 19, 1780", isCorrect: false },
            { text: "Declaration of Independence", isCorrect: false }
        ],
      hint: "This event marked the end of a long period of religious persecution."
    },
    {
        question: "Where did the Dark Day of May 19, 1780, occur?",
        options: [
            { text: "Europe", isCorrect: false },
            { text: "Western Hemisphere", isCorrect: true },
            { text: "Asia", isCorrect: false },
            { text: "Africa", isCorrect: false }
        ],
      hint: "This event took place in a specific geographical region."
    },
    {
        question: "What was the remarkable characteristic of the Dark Day despite the presence of a full moon?",
        options: [
            { text: "Intense brightness", isCorrect: false },
            { text: "Complete darkness", isCorrect: true },
            { text: "Mild sunlight", isCorrect: false },
            { text: "Flickering lights", isCorrect: false }
        ],
      hint: "Despite the presence of a full moon, this event was characterized by an unusual phenomenon."
    },
    {
        question: "When did the Falling of the Stars event occur?",
        options: [
            { text: "November 13, 1755", isCorrect: false },
            { text: "November 13, 1798", isCorrect: false },
            { text: "November 13, 1833", isCorrect: true },
            { text: "November 13, 1900", isCorrect: false }
        ],
      hint: "This event took place on a specific date in the 19th century."
    },
    {
        question: "How were the meteorite showers described during the Falling of the Stars event?",
        options: [
            { text: "Streams of water", isCorrect: false },
            { text: "Streams of fire", isCorrect: true },
            { text: "Streams of light", isCorrect: false },
            { text: "Streams of dust", isCorrect: false }
        ],
      hint: "Witnesses described the meteorite showers using this metaphor."
    },
    {
        question: "What was the reaction of horses to the Falling of the Stars event?",
        options: [
            { text: "Calmness", isCorrect: false },
            { text: "Frightened and fell to the ground", isCorrect: true },
            { text: "Ignorance", isCorrect: false },
            { text: "Excitement", isCorrect: false }
        ],
      hint: "Animals exhibited this behavior in response to the meteorite showers."
    },
    {
        question: "Which biblical prophecy was fulfilled by the Falling of the Stars event?",
        options: [
            { text: "Revelation 6:12, 13", isCorrect: true },
            { text: "Mark 13:24", isCorrect: false },
            { text: "Acts of Toleration", isCorrect: false },
            { text: "Genesis 1:1", isCorrect: false }
        ],
      hint: "This biblical prophecy was fulfilled by the occurrence of the meteorite showers."
    },
    {
        question: "How were the meteorite showers described by witnesses during the Falling of the Stars event?",
        options: [
            { text: "Like snowflakes in a snowstorm", isCorrect: false },
            { text: "Like rain of fire", isCorrect: false },
            { text: "Both like shooting stars and rain of fire", isCorrect: true },
            { text: "Like shooting stars", isCorrect: false }
        ],
      hint: "Witnesses used these descriptive phrases to portray the intensity of the meteorite showers."
    },
    {
        question: "What was the purpose of the spectacular signs in the natural world?",
        options: [
            { text: "Entertainment", isCorrect: false },
            { text: "Divine intervention to call attention to the truth", isCorrect: true },
            { text: "Random occurrences", isCorrect: false },
            { text: "Scientific phenomena", isCorrect: false }
        ],
      hint: "These events were interpreted as signs designed to draw attention to a particular message."
    },
    {
        question: "Who issued the decree that marked the end of the persecution period?",
        options: [
            { text: "Empress Maria Theresa", isCorrect: true },
            { text: "Noah Webster", isCorrect: false },
            { text: "Jesus Christ", isCorrect: false },
            { text: "Pope Francis", isCorrect: false }
        ],
      hint: "This historical figure played a significant role in ending religious persecution."
    },
    {
        question: "What event occurred over Europe a few days after the Falling of the Stars in the Western Hemisphere?",
        options: [
            { text: "Lisbon Earthquake", isCorrect: false },
            { text: "Dark Day", isCorrect: false },
            { text: "Another meteorite shower", isCorrect: true },
            { text: "Solar eclipse", isCorrect: false }
        ],
      hint: "This event occurred shortly after the meteorite showers and took place in a different geographical region."
    },
    {
        question: "What period ended in 1798?",
        options: [
            { text: "Persecution period", isCorrect: true },
            { text: "Enlightenment period", isCorrect: false },
            { text: "Dark Age", isCorrect: false },
            { text: "Renaissance", isCorrect: false }
        ],
      hint: "This historical period came to an end in 1798."
    },
    {
        question: "What prophecy from the Bible was fulfilled by the Dark Day?",
        options: [
            { text: "Revelation 6:12, 13", isCorrect: false },
            { text: "Mark 13:24", isCorrect: true },
            { text: "Acts of Toleration", isCorrect: false },
            { text: "Genesis 1:1", isCorrect: false }
        ],
      hint: "This biblical prophecy was fulfilled by a specific event known as the Dark Day."
    },
    {
        question: "Who described the Dark Day as having no satisfactory explanation?",
        options: [
            { text: "Noah Webster", isCorrect: true },
            { text: "Empress Maria Theresa", isCorrect: false },
            { text: "Theologians", isCorrect: false },
            { text: "Scientists", isCorrect: false }
        ],
      hint: "This individual, known for his dictionary, expressed perplexity over the Dark Day phenomenon."
    },
    {
        question: "Which region experienced the Lisbon Earthquake?",
        options: [
            { text: "Asia", isCorrect: false },
            { text: "Europe", isCorrect: false },
            { text: "Lisbon, Scandinavia, Greenland, and the West Indies", isCorrect: true },
            { text: "Australia", isCorrect: false }
        ],
      hint: "This event affected a specific city and was felt across a vast area, including Scandinavia, Greenland, and the West Indies."
    },
    {
        question: "What was the reaction of people to the Falling of the Stars event?",
        options: [
            { text: "Joy", isCorrect: false },
            { text: "Fear and sickness", isCorrect: true },
            { text: "Apathy", isCorrect: false },
            { text: "Excitement", isCorrect: false }
        ],
      hint: "People reacted with fear and sickness to a celestial event described as streams of fire coming down from heaven."
    },
    {
        question: "What did the Falling of the Stars event look like to witnesses?",
        options: [
            { text: "Houses on fire", isCorrect: false },
            { text: "A rain of light", isCorrect: false },
            { text: "Streams of fire falling from the sky", isCorrect: true },
            { text: "Glowing clouds", isCorrect: false }
        ],
      hint: "Witnesses described this event as 'streams of fire falling from the sky.'"
    },
    {
        question: "What is the purpose of the three special angels mentioned in the text?",
        options: [
            { text: "To entertain people with celestial beings", isCorrect: false },
            { text: "To deliver the last warning message to the world", isCorrect: true },
            { text: "To announce the end of the world", isCorrect: false },
            { text: "To predict future events", isCorrect: false }
        ],
        hint: "These angels are chosen to convey a specific message to humanity."
    },
    {
        question: "What does the first angel's message call for?",
        options: [
            { text: "Worship of spiritual leaders", isCorrect: false },
            { text: "Allegiance to God, the Creator", isCorrect: true },
            { text: "Adherence to worldly desires", isCorrect: false },
            { text: "Submission to human authorities", isCorrect: false }
        ],
        hint: "This message emphasizes loyalty to the Creator."
    },
    {
        question: "What does the second angel's message declare?",
        options: [
            { text: "The rise of spiritual Babylon", isCorrect: true },
            { text: "The fall of physical cities", isCorrect: false },
            { text: "The triumph of earthly kingdoms", isCorrect: false },
            { text: "The arrival of celestial beings", isCorrect: false }
        ],
        hint: "This message proclaims the downfall of a spiritual entity."
    },
    {
        question: "What does the third angel's message warn against?",
        options: [
            { text: "Following the teachings of the prophets", isCorrect: false },
            { text: "Rejecting the authority of God", isCorrect: false },
            { text: "Receiving the mark of the beast", isCorrect: true },
            { text: "Embracing divine guidance", isCorrect: false }
        ],
        hint: "This message cautions against a specific action in the end times."
    },
    {
        question: "What special significance do the books of Daniel and Revelation hold?",
        options: [
            { text: "They predict the future of humanity", isCorrect: false },
            { text: "They contain ancient prophecies", isCorrect: false },
            { text: "They provide guidance for everyday life", isCorrect: false },
            { text: "They are relevant for the last period of world history", isCorrect: true }
        ],
        hint: "These books are particularly important for understanding the end times."
    },
    {
        question: "What summarizes the teachings of the three angels' messages?",
        options: [
            { text: "The judgment hour is coming", isCorrect: false },
            { text: "Spiritual Babylon is falling", isCorrect: false },
            { text: "Beware of the mark of the beast", isCorrect: false },
            { text: "All of the above", isCorrect: true }
        ],
        hint: "These messages encapsulate key doctrines for the last days."
    },
    {
        question: "Who is entrusted with proclaiming the three angels' messages to the world?",
        options: [
            { text: "Celestial beings", isCorrect: false },
            { text: "Religious leaders only", isCorrect: false },
            { text: "Members of the church of God", isCorrect: true },
            { text: "Government officials", isCorrect: false }
        ],
        hint: "The responsibility lies with a specific group mentioned in the text."
    },
    {
        question: "What should those living in the last days do regarding the teachings of Daniel and Revelation?",
        options: [
            { text: "Ignore them", isCorrect: false },
            { text: "Study them carefully", isCorrect: true },
            { text: "Discredit them", isCorrect: false },
            { text: "Fear them", isCorrect: false }
        ],
        hint: "The text emphasizes the importance of careful study."
    },
    {
        question: "What is the central theme of the first angel's message?",
        options: [
            { text: "Allegiance to God", isCorrect: true },
            { text: "Worship of idols", isCorrect: false },
            { text: "Love for humanity", isCorrect: false },
            { text: "Pursuit of wealth", isCorrect: false }
        ],
        hint: "This message focuses on loyalty to a divine figure."
    },
    {
        question: "What event does the second angel's message declare as fallen?",
        options: [
            { text: "Spiritual Babylon", isCorrect: true },
            { text: "Physical Jerusalem", isCorrect: false },
            { text: "Heavenly kingdom", isCorrect: false },
            { text: "Earthly paradise", isCorrect: false }
        ],
        hint: "This message announces the downfall of a spiritual entity."
    },
    {
        question: "What is the primary warning of the third angel's message?",
        options: [
            { text: "Beware of false prophets", isCorrect: false },
            { text: "Reject worldly pleasures", isCorrect: false },
            { text: "Avoid persecution", isCorrect: false },
            { text: "Do not receive the mark of the beast", isCorrect: true }
        ],
        hint: "This message cautions against a specific action in the end times."
    },
    {
        question: "Who should herald the three angels'?",
        options: [
            { text: "Religious scholars", isCorrect: false },
            { text: "Political leaders", isCorrect: false },
            { text: "Members of the remnant church", isCorrect: true },
            { text: "Celestial beings", isCorrect: false }
        ],
        hint: "The responsibility lies with a specific group mentioned in the text."
    },
    {
        question: "What is the main purpose of the three angels' messages?",
        options: [
            { text: "To entertain", isCorrect: false },
            { text: "To confuse", isCorrect: false },
            { text: "To warn and guide", isCorrect: true },
            { text: "To conquer", isCorrect: false }
        ],
        hint: "These messages serve a specific purpose mentioned in the text."
    },
    {
        question: "What should people living in the last days decide for?",
        options: [
            { text: "Truth", isCorrect: true },
            { text: "Tradition", isCorrect: false },
            { text: "Deception", isCorrect: false },
            { text: "Comfort", isCorrect: false }
        ],
        hint: "The text emphasizes the importance of making a specific choice."
    },
    {
        question: "What is the role of the Holy Spirit in delivering the messages?",
        options: [
            { text: "To create confusion", isCorrect: false },
            { text: "To empower the messengers", isCorrect: true },
            { text: "To remain distant", isCorrect: false },
            { text: "To ignore human actions", isCorrect: false }
        ],
        hint: "The involvement of a divine entity in empowering the messengers."
    },
    {
        question: "What was William Miller's profession?",
        options: [
            { text: "Politician", isCorrect: false },
            { text: "Deist philosopher", isCorrect: false },
            { text: "Preacher of the second coming of Christ", isCorrect: true },
            { text: "Educator", isCorrect: false }
        ],
        hint: "William Miller was a prominent preacher known for his beliefs in the second coming of Christ."
    },
    {
        question: "What prompted William Miller to make a change from deism to full faith in God and the Bible?",
        options: [
            { text: "His encounter with God", isCorrect: true },
            { text: "A debate with his deist friends", isCorrect: false },
            { text: "His curiosity and desire for knowledge", isCorrect: false },
            { text: "His nephew's request", isCorrect: false }
        ],
        hint: "Miller experienced a significant encounter that led him to embrace faith in God and the Bible."
    },
    {
        question: "Where did William Miller begin preaching after his encounter with God?",
        options: [
            { text: "New York City", isCorrect: false },
            { text: "Rural areas around his home", isCorrect: true },
            { text: "Boston", isCorrect: false },
            { text: "Dresden", isCorrect: false }
        ],
        hint: "Miller started his preaching journey in the rural areas around his home."
    },
    {
        question: "What miraculous sign aided William Miller's preaching work?",
        options: [
            { text: "The Dark Day of May 19, 1780", isCorrect: true },
            { text: "The falling of the stars on November 13, 1833", isCorrect: false },
            { text: "The earthquake in Lisbon", isCorrect: false },
            { text: "The Acts of Toleration", isCorrect: false }
        ],
        hint: "Miller's earlier messages included signs of the second coming, such as the Dark Day of May 19, 1780."
    },
    {
        question: "What prophecy did William Miller study and become convinced of its significance?",
        options: [
            { text: "The prophecy of the Great Flood", isCorrect: false },
            { text: "The 2300-day prophecy of Daniel 8 and 9", isCorrect: true },
            { text: "The prophecy of the birth of Jesus", isCorrect: false },
            { text: "The prophecy of the Exodus", isCorrect: false }
        ],
        hint: "Miller studied the 2300-day prophecy of Daniel 8 and 9 and believed it pointed to the second coming of Christ."
    },
    {
        question: "When did William Miller accept a definite date for the second coming of Christ?",
        options: [
            { text: "In 1844", isCorrect: true },
            { text: "In 1845", isCorrect: false },
            { text: "In 1843", isCorrect: false },
            { text: "In 1848", isCorrect: false }
        ],
        hint: "Miller accepted a definite date for the second coming of Christ in the year 1844."
    },
    {
        question: "How did other ministers initially view the preaching of William Miller and his associates?",
        options: [
            { text: "As a means of bringing about a revival", isCorrect: true },
            { text: "As a threat to their authority", isCorrect: false },
            { text: "As irrelevant to their congregations", isCorrect: false },
            { text: "As a form of heresy", isCorrect: false }
        ],
        hint: "Many ministers initially saw Miller's preaching as an opportunity for revival and filling their churches."
    },
    {
        question: "What term was used to refer to William Miller's followers?",
        options: [
            { text: "Adventists", isCorrect: false },
            { text: "Lutherans", isCorrect: false },
            { text: "Millerites", isCorrect: true },
            { text: "Calvinists", isCorrect: false }
        ],
        hint: "Miller's followers were commonly referred to as Millerites."
    },
    {
        question: "What event marked the end of William Miller's public ministry?",
        options: [
            { text: "The Great Disappointment", isCorrect: false },
            { text: "His acceptance of a definite date for the second coming", isCorrect: false },
            { text: "In 1845", isCorrect: true },
            { text: "The falling of the stars on November 13, 1833", isCorrect: false }
        ],
        hint: "Miller's public ministry ended in the year 1845."
    },
    {
        question: "What significant truth did William Miller fail to embrace during his lifetime?",
        options: [
            { text: "The prophecy of the birth of Jesus", isCorrect: false },
            { text: "The doctrine of baptism by immersion", isCorrect: false },
            { text: "The Sabbath truth", isCorrect: true },
            { text: "The divinity of Jesus Christ", isCorrect: false }
        ],
        hint: "Despite his keen study of the Bible, Miller did not come to see the Sabbath truth."
    },
    {
        question: "Who became William Miller's chief promoter after their meeting in Exeter, New Hampshire?",
        options: [
            { text: "Robert Harmon", isCorrect: false },
            { text: "Joshua V. Himes", isCorrect: true },
            { text: "Irving Guilford", isCorrect: false },
            { text: "Sylvester Bliss", isCorrect: false }
        ],
        hint: "After their encounter, this individual became Miller's chief promoter and arranged preaching appointments."
    },
    {
        question: "Where was Joshua V. Himes born?",
        options: [
            { text: "New York City", isCorrect: false },
            { text: "Rhode Island", isCorrect: true },
            { text: "Boston", isCorrect: false },
            { text: "Exeter, New Hampshire", isCorrect: false }
        ],
        hint: "Himes was born in a specific state mentioned in the text."
    },
    {
        question: "What publication did Joshua V. Himes begin in Boston in 1840?",
        options: [
            { text: "The Midnight Cry", isCorrect: false },
            { text: "Signs of the Times", isCorrect: true },
            { text: "The Herald of the Morning", isCorrect: false },
            { text: "The Advent Herald", isCorrect: false }
        ],
        hint: "Himes initiated a specific publication on the second coming of Christ mentioned in the text."
    },
    {
        question: "What role did Joshua V. Himes play in organizing the Millerite movement?",
        options: [
            { text: "He served as a preacher", isCorrect: false },
            { text: "He published Advent papers", isCorrect: true },
            { text: "He conducted camp meetings", isCorrect: false },
            { text: "He led in the study of prophecy", isCorrect: false }
        ],
        hint: "Himes played a key role in a specific aspect of organizing the Millerite movement."
    },
    {
        question: "What was the significance of The Midnight Cry publication?",
        options: [
            { text: "It was the first periodical on the second coming of Christ", isCorrect: false },
            { text: "It was published daily with a large circulation", isCorrect: true },
            { text: "It emphasized the study of prophecy", isCorrect: false },
            { text: "It advocated for social reform", isCorrect: false }
        ],
        hint: "The Midnight Cry publication had a specific significance mentioned in the text."
    },
    {
        question: "What impact did camp meetings have on spreading the Advent message?",
        options: [
            { text: "They led to the conversion of Joshua V. Himes", isCorrect: false },
            { text: "They attracted thousands of attendees", isCorrect: true },
            { text: "They resulted in the publication of Advent papers", isCorrect: false },
            { text: "They marked the beginning of Miller's preaching career", isCorrect: false }
        ],
        hint: "Camp meetings had a specific effect on the spread of the Advent message mentioned in the text."
    },
    {
        question: "What was Joshua V. Himes' career after 1850 characterized by?",
        options: [
            { text: "He continued promoting the Advent message", isCorrect: false },
            { text: "He joined the Seventh-day Adventist group", isCorrect: false },
            { text: "He did not play a prominent role in the Advent movement", isCorrect: true },
            { text: "He became a prominent preacher", isCorrect: false }
        ],
        hint: "After 1850, Himes' career took a specific direction mentioned in the text."
    },
    {
        question: "What was Joshua V. Himes' attitude towards supporting William Miller?",
        options: [
            { text: "He remained neutral", isCorrect: false },
            { text: "He was critical of Miller's teachings", isCorrect: false },
            { text: "He dedicated himself and his resources to supporting Miller", isCorrect: true },
            { text: "He opposed Miller's preaching", isCorrect: false }
        ],
        hint: "Himes showed a specific attitude towards supporting Miller mentioned in the text."
    },
    {
        question: "What impact did Joshua V. Himes have on the Advent movement in America?",
        options: [
            { text: "He initiated the Advent movement", isCorrect: false },
            { text: "He played a minor role in the Advent movement", isCorrect: false },
            { text: "He was a major force in heralding the Advent in America", isCorrect: true },
            { text: "He opposed the Advent movement", isCorrect: false }
        ],
        hint: "Himes had a specific impact on the Advent movement in America mentioned in the text."
    },
    {
        question: "What characterized Joshua V. Himes' career before 1850?",
        options: [
            { text: "He served as a cabinetmaker", isCorrect: false },
            { text: "He published The Midnight Cry", isCorrect: false },
            { text: "He arranged preaching appointments for William Miller", isCorrect: true },
            { text: "He led camp meetings", isCorrect: false }
        ],
        hint: "Himes' career before 1850 was characterized by a specific role mentioned in the text."
    },
    {
        question: "Who was one of the first ministers to join William Miller in spreading the Advent message?",
        options: [
            { text: "Josiah Litch", isCorrect: true },
            { text: "Charles Fitch", isCorrect: false },
            { text: "Sylvester Bliss", isCorrect: false },
            { text: "James White", isCorrect: false }
        ],
        hint: "This individual was among the first ministers to join Miller in spreading the Advent message."
    },
    {
        question: "What was Josiah Litch's initial reaction to William Miller's teachings?",
        options: [
            { text: "He rejected them outright", isCorrect: false },
            { text: "He was uncertain but eventually became convinced of their scriptural basis", isCorrect: true },
            { text: "He accepted them immediately without question", isCorrect: false },
            { text: "He agreed with some aspects but disagreed with others", isCorrect: false }
        ],
        hint: "Litch initially had a specific reaction to Miller's teachings mentioned in the text."
    },
    {
        question: "What denomination was Charles Fitch pastoring before he began preaching the Advent message?",
        options: [
            { text: "Baptist", isCorrect: false },
            { text: "Methodist", isCorrect: false },
            { text: "Congregational", isCorrect: true },
            { text: "Presbyterian", isCorrect: false }
        ],
        hint: "Before preaching the Advent message, Fitch was pastoring a church of a specific denomination mentioned in the text."
    },
    {
        question: "Which contribution is NOT attributed to Charles Fitch in the Advent movement?",
        options: [
            { text: "Preacher", isCorrect: false },
            { text: "Writer", isCorrect: false },
            { text: "Hymn writer", isCorrect: false },
            { text: "Prophetic chart artist", isCorrect: true }
        ],
        hint: "One of the contributions mentioned was not attributed to Charles Fitch."
    },
    {
        question: "How did Charles Fitch die?",
        options: [
            { text: "Drowned", isCorrect: false },
            { text: "Pneumonia", isCorrect: true },
            { text: "In a preaching accident", isCorrect: false },
            { text: "Old age", isCorrect: false }
        ],
        hint: "Fitch's cause of death is mentioned in the text."
    },
    {
        question: "Who wrote the memoirs of William Miller in 1853?",
        options: [
            { text: "Charles Fitch", isCorrect: false },
            { text: "Josiah Litch", isCorrect: false },
            { text: "Sylvester Bliss", isCorrect: true },
            { text: "James White", isCorrect: false }
        ],
        hint: "The author of William Miller's memoirs is mentioned in the text."
    },
    {
        question: "Who determined the correct date for the close of the 2300-day prophecy?",
        options: [
            { text: "Josiah Litch", isCorrect: false },
            { text: "Charles Fitch", isCorrect: false },
            { text: "S. S. Snow", isCorrect: true },
            { text: "James White", isCorrect: false }
        ],
        hint: "The individual who determined the correct date for the 2300-day prophecy is mentioned in the text."
    },
    {
        question: "What discovery did S. S. Snow make regarding the 2300-day prophecy?",
        options: [
            { text: "It was off by a few months", isCorrect: true },
            { text: "It was off by a few years", isCorrect: false },
            { text: "It was off by a few days", isCorrect: false },
            { text: "It was entirely incorrect", isCorrect: false }
        ],
        hint: "S. S. Snow made a specific discovery regarding the timing of the 2300-day prophecy."
    },
    {
        question: "What significant achievement did James White report back to the leaders of the Advent movement?",
        options: [
            { text: "He wrote a book about the Advent movement", isCorrect: false },
            { text: "He started a new denomination", isCorrect: false },
            { text: "He converted over a thousand individuals in three months of preaching", isCorrect: true },
            { text: "He discovered new prophecies in the Bible", isCorrect: false }
        ],
        hint: "James White reported a specific achievement back to the Advent movement leaders."
    },
    {
        question: "Which individual contributed to the Advent movement through his artistic ability in developing prophetic charts?",
        options: [
            { text: "Josiah Litch", isCorrect: false },
            { text: "Sylvester Bliss", isCorrect: false },
            { text: "Charles Fitch", isCorrect: true },
            { text: "S. S. Snow", isCorrect: false }
        ],
        hint: "This individual's artistic ability played a role in the Advent movement."
    },
    {
        question: "What was Josiah Litch's occupation before he became a minister?",
        options: [
            { text: "Teacher", isCorrect: false },
            { text: "Lawyer", isCorrect: false },
            { text: "Carpenter", isCorrect: false },
            { text: "Methodist preacher", isCorrect: true }
        ],
        hint: "Litch had a specific occupation before entering the ministry."
    },
    {
        question: "Which denomination did Charles Fitch belong to before joining the Advent movement?",
        options: [
            { text: "Baptist", isCorrect: false },
            { text: "Methodist", isCorrect: false },
            { text: "Congregational", isCorrect: true },
            { text: "Presbyterian", isCorrect: false }
        ],
        hint: "Fitch was associated with a particular denomination before embracing the Advent message."
    },
    {
        question: "What distinguished Charles Fitch's preaching theme?",
        options: [
            { text: "Hellfire and brimstone", isCorrect: false },
            { text: "The imminent second coming of Christ", isCorrect: true },
            { text: "Social justice", isCorrect: false },
            { text: "Christian love and unity", isCorrect: false }
        ],
        hint: "Fitch's preaching theme had a specific focus mentioned in the text."
    },
    {
        question: "How did Charles Fitch contribute to the Advent movement as an artist?",
        options: [
            { text: "He designed intricate stained glass windows for Adventist churches", isCorrect: false },
            { text: "He painted portraits of prominent Adventist leaders", isCorrect: false },
            { text: "He created the first prophetic charts used in public evangelism", isCorrect: true },
            { text: "He sculpted statues depicting scenes from Revelation", isCorrect: false }
        ],
        hint: "Fitch's artistic contribution to the Advent movement had a specific form mentioned in the text."
    },
    {
        question: "How did Charles Fitch meet his demise?",
        options: [
            { text: "In a preaching accident", isCorrect: false },
            { text: "In a shipwreck", isCorrect: false },
            { text: "From pneumonia", isCorrect: true },
            { text: "In a horseback riding accident", isCorrect: false }
        ],
        hint: "Fitch's cause of death is mentioned in the text."
    },
    {
        question: "What role did Sylvester Bliss play in the Advent movement?",
        options: [
            { text: "He was a prominent preacher", isCorrect: false },
            { text: "He was a leading writer for Adventist publications", isCorrect: false },
            { text: "He wrote the memoirs of William Miller", isCorrect: true },
            { text: "He organized large camp meetings", isCorrect: false }
        ],
        hint: "Bliss had a specific role in the Advent movement mentioned in the text."
    },
    {
        question: "Who determined the correct date for the close of the 2300-day prophecy?",
        options: [
            { text: "Josiah Litch", isCorrect: false },
            { text: "Sylvester Bliss", isCorrect: false },
            { text: "S. S. Snow", isCorrect: true },
            { text: "James White", isCorrect: false }
        ],
        hint: "The individual who determined the correct date for the 2300-day prophecy is mentioned in the text."
    },
    {
        question: "What did S. S. Snow conclude about the timing of the 2300-day prophecy?",
        options: [
            { text: "It was off by a few months", isCorrect: true },
            { text: "It was off by a few years", isCorrect: false },
            { text: "It was off by a few days", isCorrect: false },
            { text: "It was entirely incorrect", isCorrect: false }
        ],
        hint: "S. S. Snow reached a specific conclusion about the timing of the 2300-day prophecy."
    },
    {
        question: "What notable achievement did James White report back to the Advent movement leaders?",
        options: [
            { text: "He started a new denomination", isCorrect: false },
            { text: "He converted over a thousand individuals in three months of preaching", isCorrect: true },
            { text: "He discovered new prophecies in the Bible", isCorrect: false },
            { text: "He published a comprehensive study on the book of Revelation", isCorrect: false }
        ],
        hint: "James White reported a specific achievement back to the Advent movement leaders."
    },
    {
        question: "What contribution did Josiah Litch make to the Advent movement through his writing?",
        options: [
            { text: "He authored a widely circulated book on prophecy", isCorrect: false },
            { text: "He published a daily newspaper dedicated to Adventist teachings", isCorrect: false },
            { text: "He wrote articles supporting the Advent message", isCorrect: true },
            { text: "He compiled a comprehensive Adventist hymnal", isCorrect: false }
        ],
        hint: "Litch contributed to the Advent movement through a specific form of writing mentioned in the text."
    },
    {
        question: "Where did Joseph Wolff travel during his missionary journeys?",
        options: [
            { text: "Europe only", isCorrect: false },
            { text: "Asia and Africa", isCorrect: true },
            { text: "North and South America", isCorrect: false },
            { text: "Australia and New Zealand", isCorrect: false }
        ],
        hint: "Wolff's missionary travels spanned across specific continents mentioned in the text."
    },
    {
        question: "What was Joseph Wolff's original religious background?",
        options: [
            { text: "Catholic", isCorrect: true },
            { text: "Protestant", isCorrect: false },
            { text: "Jewish", isCorrect: false },
            { text: "Muslim", isCorrect: false }
        ],
        hint: "Wolff was born into a specific religious background mentioned in the text."
    },
    {
        question: "How many languages did Joseph Wolff speak?",
        options: [
            { text: "Five", isCorrect: false },
            { text: "Ten", isCorrect: false },
            { text: "Fourteen", isCorrect: true },
            { text: "Twenty", isCorrect: false }
        ],
        hint: "Wolff's proficiency in languages is mentioned in the text."
    },
    {
        question: "What was Joseph Wolff's nickname?",
        options: [
            { text: "The Linguist", isCorrect: false },
            { text: "The Missionary to the World", isCorrect: true },
            { text: "The Advent Preacher", isCorrect: false },
            { text: "The Traveling Scholar", isCorrect: false }
        ],
        hint: "Wolff was known by a specific nickname mentioned in the text."
    },
    {
        question: "Which country did Johann A. Bengel teach about the Second Advent?",
        options: [
            { text: "England", isCorrect: false },
            { text: "Germany", isCorrect: true },
            { text: "France", isCorrect: false },
            { text: "Italy", isCorrect: false }
        ],
        hint: "Bengel taught about the Second Advent in a specific country mentioned in the text."
    },
    {
        question: "What denomination did Johann A. Bengel belong to?",
        options: [
            { text: "Catholic", isCorrect: false },
            { text: "Lutheran", isCorrect: true },
            { text: "Anglican", isCorrect: false },
            { text: "Calvinist", isCorrect: false }
        ],
        hint: "Bengel belonged to a specific denomination mentioned in the text."
    },
    {
        question: "What was one of Johann A. Bengel's significant contributions?",
        options: [
            { text: "He founded missionary societies in Africa", isCorrect: false },
            { text: "He wrote extensively about religious liberty", isCorrect: false },
            { text: "He trained young men for ministry", isCorrect: true },
            { text: "He translated the Bible into multiple languages", isCorrect: false }
        ],
        hint: "One of Bengel's contributions is mentioned in the text."
    },
    {
        question: "During which time period did Johann A. Bengel teach about the Second Advent?",
        options: [
            { text: "1800s", isCorrect: false },
            { text: "1600s", isCorrect: false },
            { text: "1700s", isCorrect: true },
            { text: "1900s", isCorrect: false }
        ],
        hint: "Bengel's teachings about the Second Advent occurred during a specific century mentioned in the text."
    },
    {
        question: "What was the primary influence of Johann A. Bengel's writings?",
        options: [
            { text: "American theology", isCorrect: false },
            { text: "Russian literature", isCorrect: false },
            { text: "Wesley's theology", isCorrect: true },
            { text: "French philosophy", isCorrect: false }
        ],
        hint: "Bengel's writings had a specific influence mentioned in the text."
    },
    {
        question: "Where did Johann A. Bengel's books about the Second Advent gain popularity?",
        options: [
            { text: "Africa", isCorrect: false },
            { text: "England", isCorrect: false },
            { text: "Russia", isCorrect: true },
            { text: "Asia", isCorrect: false }
        ],
        hint: "Bengel's books gained popularity in a specific country mentioned in the text."
    },
    {
        question: "What was the specific focus of Johann A. Bengel's teachings?",
        options: [
            { text: "End-time prophecies", isCorrect: true },
            { text: "Moral philosophy", isCorrect: false },
            { text: "Scientific advancements", isCorrect: false },
            { text: "Political reform", isCorrect: false }
        ],
        hint: "Bengel's teachings had a specific focus mentioned in the text."
    },
    {
        question: "How did Joseph Wolff become involved in missionary work?",
        options: [
            { text: "Through a family inheritance", isCorrect: false },
            { text: "Through a scholarship", isCorrect: false },
            { text: "Through personal ambition", isCorrect: false },
            { text: "Through a desire for education", isCorrect: true }
        ],
        hint: "Wolff's involvement in missionary work stemmed from a specific reason mentioned in the text."
    },
    {
        question: "What was Joseph Wolff's initial religious conversion?",
        options: [
            { text: "From Protestantism to Catholicism", isCorrect: true },
            { text: "From Judaism to Protestantism", isCorrect: false },
            { text: "From Catholicism to Judaism", isCorrect: false },
            { text: "From Atheism to Christianity", isCorrect: false }
        ],
        hint: "Wolff underwent a specific religious conversion mentioned in the text."
    },
    {
        question: "What challenges did Joseph Wolff face during his missionary travels?",
        options: [
            { text: "Financial difficulties", isCorrect: false },
            { text: "Language barriers", isCorrect: false },
            { text: "Persecution and danger", isCorrect: true },
            { text: "Cultural misunderstandings", isCorrect: false }
        ],
        hint: "Wolff encountered specific challenges during his missionary travels mentioned in the text."
    },
    {
        question: "What earned Joseph Wolff his nickname 'the Missionary to the World'?",
        options: [
            { text: "His prolific writings", isCorrect: false },
            { text: "His extensive travels and preaching", isCorrect: true },
            { text: "His charitable work", isCorrect: false },
            { text: "His linguistic abilities", isCorrect: false }
        ],
        hint: "Wolff's nickname was associated with a specific aspect of his missionary work mentioned in the text."
    },
    {
        question: "Where did Joseph Wolff originate from?",
        options: [
            { text: "Russia", isCorrect: false },
            { text: "Germany", isCorrect: false },
            { text: "Bavaria", isCorrect: true },
            { text: "Austria", isCorrect: false }
        ],
        hint: "Wolff's place of origin."
    },
    {
        question: "What was Johann A. Bengel's view on religious freedom?",
        options: [
            { text: "He opposed it", isCorrect: false },
            { text: "He advocated for it", isCorrect: true },
            { text: "He was indifferent to it", isCorrect: false },
            { text: "He actively worked against it", isCorrect: false }
        ],
        hint: "Bengel had a specific view on religious freedom."
    },
    {
    question: "Where did Edward Irving receive his M.A. degree?",
        options: [
            { text: "United States", isCorrect: false },
            { text: "Scotland", isCorrect: true },
            { text: "England", isCorrect: false },
            { text: "France", isCorrect: false }
        ],
        hint: "Irving received his degree from a specific country mentioned in the text."
    },
    {
        question: "Which book did Edward Irving translate from Spanish to English?",
        options: [
            { text: "The Coming of the Messiah in Glory and Majesty", isCorrect: true },
            { text: "The Prophetic Revelations of Lacunza", isCorrect: false },
            { text: "The Second Advent Prophecies", isCorrect: false },
            { text: "The Apocalyptic Visions of Lacunza", isCorrect: false }
        ],
        hint: "Irving translated a specific book mentioned in the text."
    },
    {
        question: "Who organized the Albury Conferences?",
        options: [
            { text: "Edward Irving", isCorrect: false },
            { text: "Henry Drummond", isCorrect: true },
            { text: "Robert Winter", isCorrect: false },
            { text: "Joseph Wolff", isCorrect: false }
        ],
        hint: "The Albury Conferences were organized by a specific person mentioned in the text."
    },
    {
        question: "What was Henry Drummond's profession?",
        options: [
            { text: "Banker and Member of Parliament", isCorrect: true },
            { text: "Evangelist", isCorrect: false },
            { text: "Clergyman", isCorrect: false },
            { text: "Missionary", isCorrect: false }
        ],
        hint: "Drummond's profession is mentioned in the text."
    },
    {
        question: "Where did Robert Winter first hear about the doctrine of the Second Advent?",
        options: [
            { text: "England", isCorrect: false },
            { text: "Scotland", isCorrect: false },
            { text: "America", isCorrect: true },
            { text: "France", isCorrect: false }
        ],
        hint: "Winter first heard about the doctrine in a specific country mentioned in the text."
    },
    {
        question: "What attracted the upper classes to Edward Irving's preaching?",
        options: [
            { text: "His stature", isCorrect: false },
            { text: "His eloquence", isCorrect: true },
            { text: "His wealth", isCorrect: false },
            { text: "His connections", isCorrect: false }
        ],
        hint: "Irving's preaching attracted a specific demographic mentioned in the text."
    },
    {
        question: "Who lent Edward Irving a copy of Lacunza's book?",
        options: [
            { text: "Edward Irving", isCorrect: false },
            { text: "Henry Drummond", isCorrect: false },
            { text: "A clergyman from Paris", isCorrect: true },
            { text: "Robert Winter", isCorrect: false }
        ],
        hint: "A specific individual lent Irving a copy of the book mentioned in the text."
    },
    {
        question: "How many prophetic conferences did Henry Drummond arrange?",
        options: [
            { text: "Three", isCorrect: false },
            { text: "Five", isCorrect: true },
            { text: "Ten", isCorrect: false },
            { text: "Seven", isCorrect: false }
        ],
        hint: "Drummond arranged a specific number of conferences mentioned in the text."
    },
    {
        question: "What did Henry Drummond write about the Albury Conferences?",
        options: [
            { text: "They were a failure", isCorrect: false },
            { text: "They led to discord", isCorrect: false },
            { text: "They achieved harmony on key points", isCorrect: true },
            { text: "They focused on political issues", isCorrect: false }
        ],
        hint: "Drummond wrote about a specific outcome of the conferences mentioned in the text."
    },
    {
        question: "What was the primary result of Robert Winter's preaching efforts?",
        options: [
            { text: "Financial gain", isCorrect: false },
            { text: "Social recognition", isCorrect: false },
            { text: "Conversion of several thousand individuals", isCorrect: true },
            { text: "Political influence", isCorrect: false }
        ],
        hint: "Winter's preaching efforts resulted in a specific outcome mentioned in the text."
    },
    {
        question: "Which of the following countries did Joseph Wolff NOT travel to during his missionary work?",
        options: [
            { text: "Syria", isCorrect: false },
            { text: "India", isCorrect: false },
            { text: "France", isCorrect: true },
            { text: "St. Helena", isCorrect: false }
        ],
        hint: "Wolff traveled to specific countries mentioned in the text during his missionary work."
    },
    {
        question: "What was Joseph Wolff's ethnic background?",
        options: [
            { text: "German", isCorrect: false },
            { text: "Scottish", isCorrect: false },
            { text: "Jewish", isCorrect: true },
            { text: "English", isCorrect: false }
        ],
        hint: "Wolff's ethnic background is mentioned in the text."
    },
    {
        question: "How many languages did Joseph Wolff speak?",
        options: [
            { text: "Four", isCorrect: false },
            { text: "Eight", isCorrect: false },
            { text: "Fourteen", isCorrect: true },
            { text: "Ten", isCorrect: false }
        ],
        hint: "Wolff was proficient in a specific number of languages mentioned in the text."
    },
    {
        question: "What was Joseph Wolff's nickname?",
        options: [
            { text: "The Great Orator", isCorrect: false },
            { text: "The Fearless Traveler", isCorrect: false },
            { text: "The Missionary to the World", isCorrect: true },
            { text: "The Prophetic Visionary", isCorrect: false }
        ],
        hint: "Wolff was nicknamed a specific term mentioned in the text."
    },
    {
        question: "What was Edward Irving's role in the Albury Conferences?",
        options: [
            { text: "Organizer", isCorrect: false },
            { text: "Translator", isCorrect: false },
            { text: "Key participant", isCorrect: true },
            { text: "Observer", isCorrect: false }
        ],
        hint: "Irving had a specific role in the Albury Conferences mentioned in the text."
    },
    {
        question: "What was the subject of Charles Fitch's central theme in his preaching?",
        options: [
            { text: "The Second Coming of Christ", isCorrect: true },
            { text: "The Importance of Prayer", isCorrect: false },
            { text: "The Ten Commandments", isCorrect: false },
            { text: "The Sermon on the Mount", isCorrect: false }
        ],
        hint: "Fitch's preaching focused on a specific subject mentioned in the text."
    },
    {
        question: "What role did Charles Fitch play in the Advent movement?",
        options: [
            { text: "Painter", isCorrect: false },
            { text: "Hymn writer", isCorrect: true },
            { text: "Banker", isCorrect: false },
            { text: "Politician", isCorrect: false }
        ],
        hint: "Fitch had a specific role in the Advent movement mentioned in the text."
    },
    {
        question: "What event led to Charles Fitch's death?",
        options: [
            { text: "Drowning", isCorrect: false },
            { text: "Pneumonia", isCorrect: true },
            { text: "Heart attack", isCorrect: false },
            { text: "Old age", isCorrect: false }
        ],
        hint: "Fitch's death was caused by a specific event mentioned in the text."
    },
    {
        question: "Which individual received the death penalty three times?",
        options: [
            { text: "Joseph Wolff", isCorrect: true },
            { text: "Edward Irving", isCorrect: false },
            { text: "Henry Drummond", isCorrect: false },
            { text: "Charles Fitch", isCorrect: false }
        ],
        hint: "One individual faced the death penalty multiple times as mentioned in the text."
    },
    {
        question: "What was the primary focus of the Albury Conferences organized by Henry Drummond?",
        options: [
            { text: "Political issues", isCorrect: false },
            { text: "Prophetic studies", isCorrect: true },
            { text: "Social reform", isCorrect: false },
            { text: "Scientific advancements", isCorrect: false }
        ],
        hint: "The Albury Conferences focused on a specific topic mentioned in the text."
    },
    {
        question: "What was the pseudonym used by Manuel de Lacunza?",
        options: [
            { text: "Juan Ben-Ezra", isCorrect: true },
            { text: "Joseph Wolff", isCorrect: false },
            { text: "Henry Drummond", isCorrect: false },
            { text: "Charles Fitch", isCorrect: false }
        ],
        hint: "Lacunza wrote under a specific pseudonym mentioned in the text."
    },
    {
        question: "Where was Manuel de Lacunza born?",
        options: [
            { text: "Spain", isCorrect: false },
            { text: "Italy", isCorrect: false },
            { text: "Chile", isCorrect: true },
            { text: "France", isCorrect: false }
        ],
        hint: "Lacunza's place of birth is mentioned in the text."
    },
    {
        question: "What was the title of the book written by Manuel de Lacunza?",
        options: [
            { text: "The Coming of the Messiah in Glory and Majesty", isCorrect: true },
            { text: "The Advent Movement", isCorrect: false },
            { text: "The Second Coming Unveiled", isCorrect: false },
            { text: "Prophetic Visions", isCorrect: false }
        ],
        hint: "The book's title is mentioned in the text."
    },
    {
        question: "Where did Manuel de Lacunza live in exile?",
        options: [
            { text: "France", isCorrect: false },
            { text: "Italy", isCorrect: true },
            { text: "Germany", isCorrect: false },
            { text: "England", isCorrect: false }
        ],
        hint: "Lacunza lived in exile in a specific country mentioned in the text."
    },
    {
        question: "What was H. Heintzpeter's profession?",
        options: [
            { text: "Bishop", isCorrect: false },
            { text: "Scientist", isCorrect: false },
            { text: "Jesuit priest", isCorrect: false },
            { text: "Museum keeper", isCorrect: true }
        ],
        hint: "Heintzpeter's profession is mentioned in the text."
    },
    {
        question: "What did Manuel de Lacunza write about?",
        options: [
            { text: "The prophecies of Daniel and Revelation", isCorrect: true },
            { text: "The history of the Catholic Church", isCorrect: false },
            { text: "The life of Jesus Christ", isCorrect: false },
            { text: "The miracles of the apostles", isCorrect: false }
        ],
        hint: "Lacunza's writings focused on a specific topic mentioned in the text."
    },
    {
        question: "Which languages was Lacunza's book translated into?",
        options: [
            { text: "Spanish, French, German", isCorrect: false },
            { text: "Latin, Italian, English", isCorrect: true },
            { text: "Russian, Chinese, Arabic", isCorrect: false },
            { text: "Portuguese, Japanese, Dutch", isCorrect: false }
        ],
        hint: "The languages into which Lacunza's book was translated are mentioned in the text."
    },
    {
        question: "Who was the Jesuit priest who wrote under the pseudonym Juan Ben-Ezra?",
        options: [
            { text: "Henry Drummond", isCorrect: false },
            { text: "Charles Fitch", isCorrect: false },
            { text: "Manuel de Lacunza", isCorrect: true },
            { text: "H. Heintzpeter", isCorrect: false }
        ],
        hint: "The pseudonym Juan Ben-Ezra is associated with a specific individual mentioned in the text."
    },
    {
        question: "What position did H. Heintzpeter hold?",
        options: [
            { text: "Pastor", isCorrect: false },
            { text: "Missionary", isCorrect: false },
            { text: "Royal Museum keeper", isCorrect: true },
            { text: "University professor", isCorrect: false }
        ],
        hint: "Heintzpeter's specific position is mentioned in the text."
    },
    {
        question: "What did H. Heintzpeter write about in his pamphlets?",
        options: [
            { text: "The life of Jesus", isCorrect: false },
            { text: "The history of Holland", isCorrect: false },
            { text: "The prophecies of Daniel and Revelation", isCorrect: true },
            { text: "The miracles of the apostles", isCorrect: false }
        ],
        hint: "The content of Heintzpeter's pamphlets is mentioned in the text."
    },
    {
        question: "Which country was H. Heintzpeter from?",
        options: [
            { text: "Germany", isCorrect: true },
            { text: "England", isCorrect: false },
            { text: "France", isCorrect: false },
            { text: "Italy", isCorrect: false }
        ],
        hint: "Heintzpeter's country of origin is mentioned in the text."
    },
    {
        question: "What was Lacunza dissatisfied with?",
        options: [
            { text: "His career as a Jesuit priest", isCorrect: false },
            { text: "The Catholic interpretations of prophecy", isCorrect: true },
            { text: "His exile in Italy", isCorrect: false },
            { text: "His lack of knowledge in foreign languages", isCorrect: false }
        ],
        hint: "Lacunza's dissatisfaction is mentioned in the text."
    },
    {
        question: "What was Lacunza's primary goal in studying the Bible?",
        options: [
            { text: "To become a better Jesuit priest", isCorrect: false },
            { text: "To find the best translations of the Bible", isCorrect: false },
            { text: "To challenge the authority of the Catholic Church", isCorrect: false },
            { text: "To understand prophecy for himself", isCorrect: true }
        ],
        hint: "Lacunza's goal in studying the Bible is mentioned in the text."
    },
    {
        question: "Where did Lacunza live during his exile?",
        options: [
            { text: "Germany", isCorrect: false },
            { text: "Chile", isCorrect: false },
            { text: "Italy", isCorrect: true },
            { text: "England", isCorrect: false }
        ],
        hint: "Lacunza's place of exile is mentioned in the text."
    },
    {
        question: "What impact did Lacunza's book have despite the challenges of distribution?",
        options: [
            { text: "It became a bestseller in Spain", isCorrect: false },
            { text: "It was widely circulated and translated into multiple languages", isCorrect: true },
            { text: "It was banned by the Catholic Church", isCorrect: false },
            { text: "It received criticism from religious scholars", isCorrect: false }
        ],
        hint: "The impact of Lacunza's book is mentioned in the text."
    },
    {
        question: "How did Louis Gaussen teach the good news?",
        options: [
            { text: "Through sermons to adults", isCorrect: false },
            { text: "By publishing books for adults", isCorrect: false },
            { text: "By teaching children using a unique method", isCorrect: true },
            { text: "By organizing evangelistic campaigns", isCorrect: false }
        ],
        hint: "Gaussen's teaching method, as described in the text, was unique and involved children."
    },
    {
        question: "What was Louis Gaussen suspended for?",
        options: [
            { text: "Preaching false doctrines", isCorrect: false },
            { text: "Using the Bible to instruct youth instead of the church catechism", isCorrect: true },
            { text: "Refusing to preach to high society", isCorrect: false },
            { text: "Neglecting his ministerial duties", isCorrect: false }
        ],
        hint: "Gaussen's suspension was due to a specific reason mentioned in the text."
    },
    {
        question: "In which country did Francisco Ramos Mejia live?",
        options: [
            { text: "France", isCorrect: false },
            { text: "United States", isCorrect: false },
            { text: "Argentina", isCorrect: true },
            { text: "Spain", isCorrect: false }
        ],
        hint: "Ramos Mejia's country of residence is mentioned in the text."
    },
    {
        question: "What did Francisco Ramos Mejia believe about Christ's return?",
        options: [
            { text: "It was a distant event", isCorrect: false },
            { text: "It was imminent", isCorrect: true },
            { text: "It was a symbolic event", isCorrect: false },
            { text: "It would never happen", isCorrect: false }
        ],
        hint: "Ramos Mejia believed in a specific timing regarding Christ's return, as mentioned in the text."
    },
    {
        question: "What was the role of education according to Francisco Ramos Mejia?",
        options: [
            { text: "It was unimportant", isCorrect: false },
            { text: "It was necessary for economic growth", isCorrect: false },
            { text: "It was of paramount importance", isCorrect: true },
            { text: "It was a luxury for the elite", isCorrect: false }
        ],
        hint: "Ramos Mejia attributed a specific importance to education, as mentioned in the text."
    },
    {
        question: "Who was Domingo Sarmiento?",
        options: [
            { text: "An artist", isCorrect: false },
            { text: "A politician", isCorrect: true },
            { text: "A scientist", isCorrect: false },
            { text: "A musician", isCorrect: false }
        ],
        hint: "Sarmiento's profession is mentioned in the text."
    },
    {
        question: "What did Francisco Ramos Mejia establish for the Indians?",
        options: [
            { text: "Trading posts", isCorrect: false },
            { text: "Farming communities", isCorrect: false },
            { text: "Schools", isCorrect: true },
            { text: "Military outposts", isCorrect: false }
        ],
        hint: "Ramos Mejia established a specific institution for the Indians, as mentioned in the text."
    },
    {
        question: "Which national hero of Argentina designed the national flag?",
        options: [
            { text: "Francisco Ramos Mejia", isCorrect: false },
            { text: "Manuel Belgrano", isCorrect: true },
            { text: "Domingo Sarmiento", isCorrect: false },
            { text: "Louis Gaussen", isCorrect: false }
        ],
        hint: "The designer of the national flag of Argentina is mentioned in the text."
    },
    {
        question: "What did Louis Gaussen prioritize over tradition in teaching the good news?",
        options: [
            { text: "Church catechism", isCorrect: false },
            { text: "Children's games", isCorrect: false },
            { text: "The Bible", isCorrect: true },
            { text: "School textbooks", isCorrect: false }
        ],
        hint: "Gaussen's teaching approach prioritized a specific source mentioned in the text."
    },
    {
        question: "What did Louis Gaussen's unique teaching method result in?",
        options: [
            { text: "Increased opposition from high society", isCorrect: false },
            { text: "A wider acceptance of the good news", isCorrect: true },
            { text: "A decrease in church attendance", isCorrect: false },
            { text: "A decline in interest from children", isCorrect: false }
        ],
        hint: "Gaussen's teaching method had a specific outcome mentioned in the text."
    },
    {
        question: "What pseudonym did Manuel de Lacunza use when writing about prophecy?",
        options: [
            { text: "Juan Ben-Ezra", isCorrect: true },
            { text: "Joseph Wolff", isCorrect: false },
            { text: "H. Heintzpeter", isCorrect: false },
            { text: "Louis Gaussen", isCorrect: false }
        ],
        hint: "Lacunza used a specific pseudonym, as mentioned in the text."
    },
    {
        question: "Where did Manuel de Lacunza live in exile?",
        options: [
            { text: "Italy", isCorrect: false },
            { text: "Spain", isCorrect: true },
            { text: "Chile", isCorrect: false },
            { text: "Germany", isCorrect: false }
        ],
        hint: "Lacunza lived in a specific country during his exile, as mentioned in the text."
    },
    {
        question: "What language did Joseph Wolff learn to communicate with people during his travels?",
        options: [
            { text: "English", isCorrect: false },
            { text: "Spanish", isCorrect: false },
            { text: "Arabic", isCorrect: true },
            { text: "French", isCorrect: false }
        ],
        hint: "Wolff learned a specific language for communication, as mentioned in the text."
    },
    {
        question: "How many languages did Joseph Wolff speak?",
        options: [
            { text: "Ten", isCorrect: false },
            { text: "Fourteen", isCorrect: true },
            { text: "Eight", isCorrect: false },
            { text: "Six", isCorrect: false }
        ],
        hint: "Wolff had fluency in a specific number of languages, as mentioned in the text."
    },
    {
        question: "What was the occupation of H. Heintzpeter?",
        options: [
            { text: "Minister", isCorrect: false },
            { text: "Banker", isCorrect: false },
            { text: "Keeper of the Royal Museum", isCorrect: true },
            { text: "Politician", isCorrect: false }
        ],
        hint: "Heintzpeter had a specific occupation, as mentioned in the text."
    },
    {
        question: "What was H. Heintzpeter's vision about?",
        options: [
            { text: "Christ's crucifixion", isCorrect: false },
            { text: "The soon return of Christ", isCorrect: true },
            { text: "The establishment of a new kingdom", isCorrect: false },
            { text: "The spread of Christianity", isCorrect: false }
        ],
        hint: "Heintzpeter had a specific vision related to a future event, as mentioned in the text."
    },
    {
        question: "In which country did Henry Drummond arrange prophetic conferences?",
        options: [
            { text: "United States", isCorrect: false },
            { text: "England", isCorrect: true },
            { text: "France", isCorrect: false },
            { text: "Germany", isCorrect: false }
        ],
        hint: "Drummond organized conferences in a specific country, as mentioned in the text."
    },
    {
        question: "What role did Henry Drummond play in the Advent movement?",
        options: [
            { text: "Banker", isCorrect: false },
            { text: "Politician", isCorrect: false },
            { text: "Organizer of prophetic conferences", isCorrect: true },
            { text: "Keeper of the Royal Museum", isCorrect: false }
        ],
        hint: "Drummond had a specific role in advancing the Advent movement, as mentioned in the text."
    },
    {
        question: "Which book did Edward Irving translate into English?",
        options: [
            { text: "The Great Controversy", isCorrect: false },
            { text: "The Coming of the Messiah in Glory and Majesty", isCorrect: true },
            { text: "Memoirs of William Miller", isCorrect: false },
            { text: "Herald of the Midnight Cry", isCorrect: false }
        ],
        hint: "Irving translated a specific book, as mentioned in the text."
    },
    {
        question: "What were the Albury Conferences organized by Henry Drummond focused on?",
        options: [
            { text: "Political reform", isCorrect: false },
            { text: "Literary discussions", isCorrect: false },
            { text: "Studying prophetic books", isCorrect: true },
            { text: "Scientific research", isCorrect: false }
        ],
        hint: "The Albury Conferences had a specific focus, as mentioned in the text."
    }
    // Add more questions here...
];