const questions = [
    {
        question: "Where was the first young people's society organized?",
        options: [
            { text: "Hazelton Township, Michigan", isCorrect: true },
            { text: "New York City, New York", isCorrect: false },
            { text: "Los Angeles, California", isCorrect: false },
            { text: "Chicago, Illinois", isCorrect: false }
        ],
        hint: "The passage mentions the location of the first young people's society."
    },
    {
        question: "Who organized the first young people's society?",
        options: [
            { text: "Harry Fenner and Luther Warren", isCorrect: true },
            { text: "John Nevins Andrews and Ellen G. White", isCorrect: false },
            { text: "William Miller and James White", isCorrect: false },
            { text: "Joseph Bates and Uriah Smith", isCorrect: false }
        ],
        hint: "The passage mentions the individuals who organized the first young people's society."
    },
    {
        question: "In what year did the Ohio Conference become the first to form a conference-wide youth organization?",
        options: [
            { text: "1879", isCorrect: false },
            { text: "1890", isCorrect: false },
            { text: "1899", isCorrect: true },
            { text: "1907", isCorrect: false }
        ],
        hint: "The passage mentions the year when the Ohio Conference became the first to form a conference-wide youth organization."
    },
    {
        question: "What was the name of the youth organization formed by the Ohio Conference in 1899?",
        options: [
            { text: "Youth Allies", isCorrect: false },
            { text: "Youth Fellowship", isCorrect: false },
            { text: "Christian Volunteers", isCorrect: true },
            { text: "Youth Ambassadors", isCorrect: false }
        ],
        hint: "The passage mentions the name of the youth organization formed by the Ohio Conference in 1899."
    },
    {
        question: "In what year did the first youth ministry-related manual appear?",
        options: [
            { text: "1880", isCorrect: false },
            { text: "1890", isCorrect: true },
            { text: "1900", isCorrect: false },
            { text: "1910", isCorrect: false }
        ],
        hint: "The passage mentions the year when the first youth ministry-related manual appeared."
    },
    {
        question: "Where were Youth Societies formed by 1891?",
        options: [
            { text: "New York", isCorrect: false },
            { text: "Wisconsin", isCorrect: true },
            { text: "California", isCorrect: false },
            { text: "Texas", isCorrect: false }
        ],
        hint: "The passage mentions the location where Youth Societies were formed by 1891."
    },
    {
        question: "By what year had Youth Societies spread to Australia?",
        options: [
            { text: "1885", isCorrect: false },
            { text: "1892", isCorrect: true },
            { text: "1901", isCorrect: false },
            { text: "1904", isCorrect: false }
        ],
        hint: "The passage mentions the year by which Youth Societies had spread to Australia."
    },
    {
        question: "What kind of cards were being issued by 1901?",
        options: [
            { text: "Membership cards", isCorrect: false },
            { text: "ID cards", isCorrect: false },
            { text: "Missionary Volunteer membership cards", isCorrect: true },
            { text: "Reward cards", isCorrect: false }
        ],
        hint: "The passage mentions the type of cards being issued by 1901."
    },
    {
        question: "In what year was the General Conference Youth Department formally organized?",
        options: [
            { text: "1899", isCorrect: false },
            { text: "1904", isCorrect: false },
            { text: "1907", isCorrect: true },
            { text: "1910", isCorrect: false }
        ],
        hint: "The passage mentions the year when the General Conference Youth Department was formally organized."
    },
    {
        question: "Who was appointed as the director of the General Conference Youth Department in 1907?",
        options: [
            { text: "Harry Fenner", isCorrect: false },
            { text: "Luther Warren", isCorrect: false },
            { text: "M. E. Kern", isCorrect: false },
            { text: "Elder M. E. Kern", isCorrect: true }
        ],
        hint: "The passage mentions the individual appointed as the director of the General Conference Youth Department in 1907."
    },
    {
        question: "Who authored the first youth ministry-related manual?",
        options: [
            { text: "Ellen G. White", isCorrect: false },
            { text: "John Nevins Andrews", isCorrect: false },
            { text: "James White", isCorrect: false },
            { text: "Not mentioned", isCorrect: true }
        ],
        hint: "The passage does not specify the author of the first youth ministry-related manual."
    },
    {
        question: "Which conference became the first to form a conference-wide youth organization?",
        options: [
            { text: "Wisconsin Conference", isCorrect: false },
            { text: "Michigan Conference", isCorrect: false },
            { text: "Ohio Conference", isCorrect: true },
            { text: "California Conference", isCorrect: false }
        ],
        hint: "The passage mentions the conference that became the first to form a conference-wide youth organization."
    },
    {
        question: "What was the title of the first youth ministry-related manual?",
        options: [
            { text: "Manual of Youth Work", isCorrect: false },
            { text: "Youth Ministry Handbook", isCorrect: false },
            { text: "Manual of Suggestions for Those Conducting Youth Meetings", isCorrect: true },
            { text: "Guidebook for Youth Leaders", isCorrect: false }
        ],
        hint: "The passage mentions the title of the first youth ministry-related manual."
    },
    {
        question: "In what year did Missionary Volunteer membership cards start being issued?",
        options: [
            { text: "1899", isCorrect: false },
            { text: "1901", isCorrect: true },
            { text: "1904", isCorrect: false },
            { text: "1907", isCorrect: false }
        ],
        hint: "The passage mentions the year when Missionary Volunteer membership cards started being issued."
    },
    {
        question: "Who was appointed as the director of the General Conference Youth Department?",
        options: [
            { text: "Harry Fenner", isCorrect: false },
            { text: "Luther Warren", isCorrect: false },
            { text: "M. E. Kern", isCorrect: false },
            { text: "Elder M. E. Kern", isCorrect: true }
        ],
        hint: "The passage mentions the individual appointed as the director of the General Conference Youth Department."
    },
    {
        question: "In which year was Ellen White shown the need to circulate books widely among the public?",
        options: [
            { text: "1877", isCorrect: false },
            { text: "1879", isCorrect: true },
            { text: "1881", isCorrect: false },
            { text: "1883", isCorrect: false }
        ],
        hint: "The passage mentions the year when Ellen White was shown the need to circulate books widely."
    },
    {
        question: "Who felt burdened to sell Uriah Smith's book Daniel and the Revelation?",
        options: [
            { text: "Ellen White", isCorrect: false },
            { text: "James White", isCorrect: false },
            { text: "George King", isCorrect: true },
            { text: "Uriah Smith", isCorrect: false }
        ],
        hint: "The passage mentions the individual who felt burdened to sell Uriah Smith's book."
    },
    {
        question: "What book did George King feel burdened to sell?",
        options: [
            { text: "The Great Controversy", isCorrect: false },
            { text: "Steps to Christ", isCorrect: false },
            { text: "Daniel and the Revelation", isCorrect: true },
            { text: "Desire of Ages", isCorrect: false }
        ],
        hint: "The passage mentions the specific book George King felt burdened to sell."
    },
    {
        question: "What did the successful plan introduced by George King introduce to the church?",
        options: [
            { text: "Youth ministry", isCorrect: false },
            { text: "Health ministry", isCorrect: false },
            { text: "Colporteur ministry", isCorrect: true },
            { text: "Missionary aviation", isCorrect: false }
        ],
        hint: "The passage mentions the ministry introduced to the church by George King's successful plan."
    },
    {
        question: "How many years after Ellen White's vision did George King implement the successful plan?",
        options: [
            { text: "One year", isCorrect: false },
            { text: "Two years", isCorrect: true },
            { text: "Three years", isCorrect: false },
            { text: "Four years", isCorrect: false }
        ],
        hint: "The passage mentions the time gap between Ellen White's vision and George King's implementation of the successful plan."
    },
    {
        question: "What do thousands around the world do today as a result of the colporteur ministry?",
        options: [
            { text: "Bible studies", isCorrect: false },
            { text: "Make their living", isCorrect: true },
            { text: "Work as pastors", isCorrect: false },
            { text: "Lead evangelistic campaigns", isCorrect: false }
        ],
        hint: "The passage mentions the impact of the colporteur ministry on people around the world."
    },
    {
        question: "What kind of scholarships do some individuals earn during the summer months?",
        options: [
            { text: "Athletic scholarships", isCorrect: false },
            { text: "Academic scholarships", isCorrect: false },
            { text: "School scholarships", isCorrect: true },
            { text: "Music scholarships", isCorrect: false }
        ],
        hint: "The passage mentions the type of scholarships some individuals earn during the summer months."
    },
    {
        question: "Who authored the book 'Daniel and the Revelation'?",
        options: [
            { text: "Ellen G. White", isCorrect: false },
            { text: "James White", isCorrect: false },
            { text: "Uriah Smith", isCorrect: true },
            { text: "George King", isCorrect: false }
        ],
        hint: "The passage mentions the author of the book 'Daniel and the Revelation.'"
    },
    {
        question: "What was the successful plan implemented by George King related to?",
        options: [
            { text: "Selling health products", isCorrect: false },
            { text: "Distributing literature", isCorrect: true },
            { text: "Organizing evangelistic campaigns", isCorrect: false },
            { text: "Establishing schools", isCorrect: false }
        ],
        hint: "The passage mentions the nature of the successful plan implemented by George King."
    },
    {
        question: "What did Ellen White see the need for in 1879?",
        options: [
            { text: "Building churches", isCorrect: false },
            { text: "Circulating books widely", isCorrect: true },
            { text: "Starting a publishing house", isCorrect: false },
            { text: "Expanding overseas missions", isCorrect: false }
        ],
        hint: "The passage mentions what Ellen White saw the need for in 1879."
    },
    {
        question: "What system replaced the systematic benevolence plan in 1878?",
        options: [
            { text: "Tithing system", isCorrect: true },
            { text: "Donation system", isCorrect: false },
            { text: "Voluntary contribution system", isCorrect: false },
            { text: "Charity system", isCorrect: false }
        ],
        hint: "The passage mentions the system that replaced the systematic benevolence plan in 1878."
    },
    {
        question: "How did the combination of tithes and book sales affect ministry?",
        options: [
            { text: "It weakened ministry", isCorrect: false },
            { text: "It had no impact on ministry", isCorrect: false },
            { text: "It greatly strengthened ministry", isCorrect: true },
            { text: "It slightly improved ministry", isCorrect: false }
        ],
        hint: "The passage mentions the impact of the combination of tithes and book sales on ministry."
    },
    {
        question: "What did the plans of tithes and systematic offerings enable the church to finance?",
        options: [
            { text: "Local events", isCorrect: false },
            { text: "Worldwide mission and institutional development program", isCorrect: true },
            { text: "Personal expenses", isCorrect: false },
            { text: "Political campaigns", isCorrect: false }
        ],
        hint: "The passage mentions what the plans of tithes and systematic offerings enabled the church to finance."
    },
    {
        question: "In what year did the tithing system replace the systematic benevolence plan?",
        options: [
            { text: "1876", isCorrect: false },
            { text: "1878", isCorrect: true },
            { text: "1880", isCorrect: false },
            { text: "1882", isCorrect: false }
        ],
        hint: "The passage mentions the year when the tithing system replaced the systematic benevolence plan."
    },
    {
        question: "What did the new combination of tithes and book sales strengthen?",
        options: [
            { text: "Local gatherings", isCorrect: false },
            { text: "Family relationships", isCorrect: false },
            { text: "All phases of ministry", isCorrect: true },
            { text: "Personal health", isCorrect: false }
        ],
        hint: "The passage mentions what the new combination of tithes and book sales strengthened."
    },
    {
        question: "What has the tithing system enabled the church to finance?",
        options: [
            { text: "Luxury goods", isCorrect: false },
            { text: "A worldwide mission and institutional development program", isCorrect: true },
            { text: "Entertainment expenses", isCorrect: false },
            { text: "Individual retirement plans", isCorrect: false }
        ],
        hint: "The passage mentions what the tithing system has enabled the church to finance."
    },
    {
        question: "What did the systematic benevolence plan get replaced with?",
        options: [
            { text: "Donation system", isCorrect: false },
            { text: "Tithing system", isCorrect: true },
            { text: "Voluntary contribution system", isCorrect: false },
            { text: "Charity system", isCorrect: false }
        ],
        hint: "The passage mentions what the systematic benevolence plan was replaced with."
    },
    {
        question: "By what year did the number of churches increase over five-fold from the original 125?",
        options: [
            { text: "1875", isCorrect: false },
            { text: "1880", isCorrect: false },
            { text: "1883", isCorrect: true },
            { text: "1886", isCorrect: false }
        ],
        hint: "The passage mentions the year when the number of churches increased over five-fold."
    },
    {
        question: "Who visited Europe in 1884 and led in forming the European Conference?",
        options: [
            { text: "Ellen White", isCorrect: false },
            { text: "George I. Butler", isCorrect: true },
            { text: "S. N. Haskell", isCorrect: false },
            { text: "J. E. Fulton", isCorrect: false }
        ],
        hint: "The passage mentions the individual who visited Europe in 1884 and led in forming the European Conference."
    },
    {
        question: "Which country received a party led by S. N. Haskell, M. C. Israel, and J. O. Corliss?",
        options: [
            { text: "New Zealand", isCorrect: false },
            { text: "Fiji Islands", isCorrect: false },
            { text: "Australia", isCorrect: true },
            { text: "Pitcairn Island", isCorrect: false }
        ],
        hint: "The passage mentions the country that received a party led by S. N. Haskell, M. C. Israel, and J. O. Corliss."
    },
    {
        question: "Who traveled to New Zealand in 1885 to spread the Advent Message?",
        options: [
            { text: "S. N. Haskell", isCorrect: true },
            { text: "A. G. Daniels", isCorrect: false },
            { text: "John I. Tay", isCorrect: false },
            { text: "J. E. Fulton", isCorrect: false }
        ],
        hint: "The passage mentions the individual who traveled to New Zealand in 1885."
    },
    {
        question: "Which missionary visited Fiji Islands in 1886?",
        options: [
            { text: "S. N. Haskell", isCorrect: false },
            { text: "A. G. Daniels", isCorrect: false },
            { text: "J. E. Fulton", isCorrect: true },
            { text: "Abram La Rue", isCorrect: false }
        ],
        hint: "The passage mentions the missionary who visited Fiji Islands in 1886."
    },
    {
        question: "In what year did Africa receive the Advent Message?",
        options: [
            { text: "1884", isCorrect: false },
            { text: "1885", isCorrect: false },
            { text: "1886", isCorrect: true },
            { text: "1888", isCorrect: false }
        ],
        hint: "The passage mentions the year when Africa received the Advent Message."
    },
    {
        question: "Who visited Hong Kong as a self-supporting colporteur in 1888?",
        options: [
            { text: "S. N. Haskell", isCorrect: false },
            { text: "M. C. Israel", isCorrect: false },
            { text: "J. N. Anderson", isCorrect: false },
            { text: "Abram La Rue", isCorrect: true }
        ],
        hint: "The passage mentions the individual who visited Hong Kong as a self-supporting colporteur in 1888."
    },
    {
        question: "Who were the missionaries who entered China fourteen years later after the preparation by Abram La Rue?",
        options: [
            { text: "George I. Butler and Edwin H. Wilbur", isCorrect: false },
            { text: "Ellen White and J. N. Anderson", isCorrect: false },
            { text: "Edwin H. Wilbur and J. N. Anderson", isCorrect: true },
            { text: "S. N. Haskell and M. C. Israel", isCorrect: false }
        ],
        hint: "The passage mentions the missionaries who entered China fourteen years later after the preparation by Abram La Rue."
    },
    {
        question: "What was born in Rhodesia in 1894?",
        options: [
            { text: "Solusi College", isCorrect: true },
            { text: "Adventist Hospital", isCorrect: false },
            { text: "Missionary Training Center", isCorrect: false },
            { text: "Rhodesian Adventist Mission", isCorrect: false }
        ],
        hint: "The passage mentions what was born in Rhodesia in 1894."
    },
    {
        question: "Who visited Cecil Rhodes, Prime Minister of Cape Colony, in 1894?",
        options: [
            { text: "George I. Butler", isCorrect: false },
            { text: "Pieter Wessels", isCorrect: true },
            { text: "John I. Tay", isCorrect: false },
            { text: "Abram La Rue", isCorrect: false }
        ],
        hint: "The passage mentions the individual who visited Cecil Rhodes, Prime Minister of Cape Colony, in 1894."
    },
    {
        question: "Who led in forming the European Conference during his visit to Europe in 1884?",
        options: [
            { text: "Ellen White", isCorrect: false },
            { text: "George I. Butler", isCorrect: true },
            { text: "S. N. Haskell", isCorrect: false },
            { text: "J. N. Andrews", isCorrect: false }
        ],
        hint: "The passage mentions the individual who led in forming the European Conference during his visit to Europe in 1884."
    },
    {
        question: "Which missionary visited Pitcairn Island in 1886?",
        options: [
            { text: "S. N. Haskell", isCorrect: false },
            { text: "A. G. Daniels", isCorrect: false },
            { text: "John I. Tay", isCorrect: true },
            { text: "J. E. Fulton", isCorrect: false }
        ],
        hint: "The passage mentions the missionary who visited Pitcairn Island in 1886."
    },
    {
        question: "Who visited Hong Kong as a self-supporting colporteur in 1888?",
        options: [
            { text: "S. N. Haskell", isCorrect: false },
            { text: "M. C. Israel", isCorrect: false },
            { text: "J. N. Anderson", isCorrect: false },
            { text: "Abram La Rue", isCorrect: true }
        ],
        hint: "The passage mentions the individual who visited Hong Kong as a self-supporting colporteur in 1888."
    },
    {
        question: "Which missionary traveled to China fourteen years later after Abram La Rue's visit to Hong Kong?",
        options: [
            { text: "George I. Butler", isCorrect: false },
            { text: "Edwin H. Wilbur", isCorrect: true },
            { text: "S. N. Haskell", isCorrect: false },
            { text: "M. C. Israel", isCorrect: false }
        ],
        hint: "The passage mentions the missionary who traveled to China fourteen years later after Abram La Rue's visit to Hong Kong."
    },
    {
        question: "What institution was born in Rhodesia as a result of a visit by Pieter Wessels and a small delegation in 1894?",
        options: [
            { text: "Solusi College", isCorrect: true },
            { text: "Rhodesian Adventist Hospital", isCorrect: false },
            { text: "Missionary Training Center", isCorrect: false },
            { text: "Rhodesian Adventist Mission", isCorrect: false }
        ],
        hint: "The passage mentions the institution born in Rhodesia as a result of a visit in 1894."
    },
    {
        question: "During the 1860's and 1870's, what aspect of doctrine did Adventist evangelists primarily focus on?",
        options: [
            { text: "The faith of Jesus", isCorrect: false },
            { text: "The commandments of God", isCorrect: true },
            { text: "The Trinity", isCorrect: false },
            { text: "The personality of the Holy Spirit", isCorrect: false }
        ],
        hint: "The passage mentions the aspect of doctrine that Adventist evangelists primarily focused on during the 1860's and 1870's."
    },
    {
        question: "What significant meeting in church history took place at Minneapolis, Minnesota, in 1888?",
        options: [
            { text: "The First Adventist Church Council", isCorrect: false },
            { text: "The Minneapolis Conference", isCorrect: true },
            { text: "The Great Reformation", isCorrect: false },
            { text: "The Millennium Summit", isCorrect: false }
        ],
        hint: "The passage mentions the significant meeting in church history that took place at Minneapolis, Minnesota, in 1888."
    },
    {
        question: "What doctrine was vigorously discussed and gratefully accepted in the decade following the 1888 General Conference session?",
        options: [
            { text: "The Trinity", isCorrect: false },
            { text: "The commandments of God", isCorrect: false },
            { text: "Righteousness by faith", isCorrect: true },
            { text: "The personality of the Holy Spirit", isCorrect: false }
        ],
        hint: "The passage mentions the doctrine that was vigorously discussed and gratefully accepted in the decade following the 1888 General Conference session."
    },
    {
        question: "Which book by Ellen White was introduced during this period to help correct erroneous teachings on the nature of Christ?",
        options: [
            { text: "Patriarchs and Prophets", isCorrect: false },
            { text: "The Great Controversy", isCorrect: false },
            { text: "The Desire of Ages", isCorrect: true },
            { text: "Steps to Christ", isCorrect: false }
        ],
        hint: "The passage mentions a book by Ellen White introduced during this period to help correct erroneous teachings on the nature of Christ."
    },
    {
        question: "What concept did Adventist evangelists give little attention to during the 1860's and 1870's?",
        options: [
            { text: "The Sabbath", isCorrect: false },
            { text: "The Trinity", isCorrect: false },
            { text: "The faith of Jesus", isCorrect: true },
            { text: "The Second Coming", isCorrect: false }
        ],
        hint: "The passage mentions the concept that Adventist evangelists gave little attention to during the 1860's and 1870's."
    },
    {
        question: "What term refers to the crisis reached and dealt with during the General Conference session of 1888?",
        options: [
            { text: "The Great Awakening", isCorrect: false },
            { text: "The Righteousness Revival", isCorrect: false },
            { text: "The Minneapolis Crisis", isCorrect: true },
            { text: "The Doctrinal Dispute", isCorrect: false }
        ],
        hint: "The passage mentions the term referring to the crisis reached and dealt with during the General Conference session of 1888."
    },
    {
        question: "Who authored the book 'Movement of Destiny,' which provides a full and well-documented study of the 1888 General Conference session?",
        options: [
            { text: "Leroy Edwin", isCorrect: true },
            { text: "Ellen White", isCorrect: false },
            { text: "James White", isCorrect: false },
            { text: "J. N. Andrews", isCorrect: false }
        ],
        hint: "The passage mentions the author of the book 'Movement of Destiny,' which provides a full and well-documented study of the 1888 General Conference session."
    },
    {
        question: "What doctrine did Ellen White's books 'The Desire of Ages' and 'Steps to Christ' endorse?",
        options: [
            { text: "The Sabbath", isCorrect: false },
            { text: "The Trinity", isCorrect: false },
            { text: "Righteousness by faith", isCorrect: true },
            { text: "The Second Coming", isCorrect: false }
        ],
        hint: "The passage mentions the doctrine endorsed by Ellen White's books 'The Desire of Ages' and 'Steps to Christ.'"
    },
    {
        question: "What views did some individuals still hold regarding Christ during the 1860's and 1870's?",
        options: [
            { text: "Arian views", isCorrect: true },
            { text: "Trinitarian views", isCorrect: false },
            { text: "Unitarian views", isCorrect: false },
            { text: "Adoptionist views", isCorrect: false }
        ],
        hint: "The passage mentions the views some individuals still held regarding Christ during the 1860's and 1870's."
    },
    {
        question: "What period marked the discussion and acceptance of righteousness by faith after the 1888 General Conference session?",
        options: [
            { text: "The Great Awakening", isCorrect: false },
            { text: "The Decade of Doctrine", isCorrect: false },
            { text: "The Righteousness Revival", isCorrect: true },
            { text: "The Adventist Reformation", isCorrect: false }
        ],
        hint: "The passage mentions the period marked by the discussion and acceptance of righteousness by faith after the 1888 General Conference session."
    },
    {
        question: "In which year was the first SDA College outside of North America opened near Cape Town, South Africa?",
        options: [
            { text: "1886", isCorrect: false },
            { text: "1889", isCorrect: false },
            { text: "1893", isCorrect: true },
            { text: "1897", isCorrect: false }
        ],
        hint: "The first SDA College outside of North America was opened near Cape Town, South Africa, in this year."
    },
    {
        question: "Which institution is considered the forerunner of today's Helderberg College?",
        options: [
            { text: "Signs Publishing Company", isCorrect: false },
            { text: "Stanborough Press", isCorrect: false },
            { text: "Hamburg Publishing House", isCorrect: false },
            { text: "Avondale College", isCorrect: true }
        ],
        hint: "The institution opened near Cape Town, South Africa, in 1893 is considered the forerunner of today's Helderberg College."
    },
    {
        question: "In which country was the Signs Publishing Company established in 1886?",
        options: [
            { text: "Australia", isCorrect: true },
            { text: "England", isCorrect: false },
            { text: "Germany", isCorrect: false },
            { text: "South Africa", isCorrect: false }
        ],
        hint: "The Signs Publishing Company was established in this country in 1886."
    },
    {
        question: "Which early institution overseas was opened in England in 1889?",
        options: [
            { text: "Stanborough Press", isCorrect: true },
            { text: "Hamburg Publishing House", isCorrect: false },
            { text: "Avondale College", isCorrect: false },
            { text: "Signs Publishing Company", isCorrect: false }
        ],
        hint: "The early institution overseas opened in England in 1889 was the..."
    },
    {
        question: "What was the name of the institution established in Australia in 1897?",
        options: [
            { text: "Avondale College", isCorrect: true },
            { text: "Helderberg College", isCorrect: false },
            { text: "Stanborough Press", isCorrect: false },
            { text: "Hamburg Publishing House", isCorrect: false }
        ],
        hint: "The institution established in Australia in 1897 was called..."
    },
    {
        question: "Which country saw the establishment of the Hamburg Publishing House in 1889?",
        options: [
            { text: "Australia", isCorrect: false },
            { text: "England", isCorrect: false },
            { text: "Germany", isCorrect: true },
            { text: "South Africa", isCorrect: false }
        ],
        hint: "The Hamburg Publishing House was established in this country in 1889."
    },
    {
        question: "Where was the first SDA College outside of North America located?",
        options: [
            { text: "Australia", isCorrect: false },
            { text: "England", isCorrect: false },
            { text: "Germany", isCorrect: false },
            { text: "South Africa", isCorrect: true }
        ],
        hint: "The first SDA College outside of North America was located near Cape Town in this country."
    },
    {
        question: "Which institution was opened in Australia in 1897?",
        options: [
            { text: "Signs Publishing Company", isCorrect: false },
            { text: "Stanborough Press", isCorrect: false },
            { text: "Hamburg Publishing House", isCorrect: false },
            { text: "Avondale College", isCorrect: true }
        ],
        hint: "The institution opened in Australia in 1897 was called..."
    },
    {
        question: "Which institution was opened in England in 1889?",
        options: [
            { text: "Signs Publishing Company", isCorrect: false },
            { text: "Stanborough Press", isCorrect: true },
            { text: "Hamburg Publishing House", isCorrect: false },
            { text: "Avondale College", isCorrect: false }
        ],
        hint: "The institution opened in England in 1889 was called..."
    },
    {
        question: "In which year was Avondale College established?",
        options: [
            { text: "1886", isCorrect: false },
            { text: "1889", isCorrect: false },
            { text: "1893", isCorrect: false },
            { text: "1897", isCorrect: true }
        ],
        hint: "Avondale College was established in this year."
    },
    {
        question: "In which year did Ellen White sail for Australia?",
        options: [
            { text: "1891", isCorrect: true },
            { text: "1894", isCorrect: false },
            { text: "1898", isCorrect: false },
            { text: "1900", isCorrect: false }
        ],
        hint: "Ellen White sailed for Australia in this year."
    },
    {
        question: "How long did Ellen White remain in Australia?",
        options: [
            { text: "Five years", isCorrect: false },
            { text: "Seven years", isCorrect: false },
            { text: "Nine years", isCorrect: true },
            { text: "Eleven years", isCorrect: false }
        ],
        hint: "Ellen White remained in Australia for this duration."
    },
    {
        question: "Which college did Ellen White found while in Australia?",
        options: [
            { text: "Helderberg College", isCorrect: false },
            { text: "Sanitarium Health Food Company", isCorrect: false },
            { text: "Avondale College", isCorrect: true },
            { text: "Stanborough Press", isCorrect: false }
        ],
        hint: "Ellen White founded this college while in Australia."
    },
    {
        question: "What major company was established as a result of Ellen White's encouragement to establish health food factories?",
        options: [
            { text: "Signs Publishing Company", isCorrect: false },
            { text: "Stanborough Press", isCorrect: false },
            { text: "Hamburg Publishing House", isCorrect: false },
            { text: "Sanitarium Health Food Company", isCorrect: true }
        ],
        hint: "This major company was established as a result of Ellen White's encouragement."
    },
    {
        question: "Which region formed the first Union Conference in 1894?",
        options: [
            { text: "North America", isCorrect: false },
            { text: "Europe", isCorrect: false },
            { text: "Australia", isCorrect: true },
            { text: "Asia", isCorrect: false }
        ],
        hint: "The first Union Conference was formed in this region in 1894."
    },
    {
        question: "How many Union Conferences were there according to the 1997 statistical report?",
        options: [
            { text: "50", isCorrect: false },
            { text: "75", isCorrect: false },
            { text: "95", isCorrect: true },
            { text: "120", isCorrect: false }
        ],
        hint: "According to the 1997 statistical report, there were this many Union Conferences."
    },
    {
        question: "Where did Ellen White remain for several months besides Australia?",
        options: [
            { text: "South America", isCorrect: false },
            { text: "Europe", isCorrect: false },
            { text: "North America", isCorrect: false },
            { text: "New Zealand", isCorrect: true }
        ],
        hint: "Besides Australia, Ellen White remained for several months in this location."
    },
    {
        question: "What is the Sanitarium Health Food Company known for today?",
        options: [
            { text: "Publishing books", isCorrect: false },
            { text: "Manufacturing automobiles", isCorrect: false },
            { text: "Supplying health foods", isCorrect: true },
            { text: "Operating airlines", isCorrect: false }
        ],
        hint: "The Sanitarium Health Food Company is known for this today."
    },
    {
        question: "Which of the following did Ellen White NOT encourage the establishment of in Australia?",
        options: [
            { text: "Health food factories", isCorrect: false },
            { text: "Avondale College", isCorrect: false },
            { text: "Sanitarium Health Food Company", isCorrect: false },
            { text: "Sanitarium hospitals", isCorrect: true }
        ],
        hint: "Ellen White did not encourage the establishment of this in Australia."
    },
    {
        question: "What type of organization is the Sanitarium Health Food Company today?",
        options: [
            { text: "Religious organization", isCorrect: false },
            { text: "Non-profit organization", isCorrect: false },
            { text: "Major supplier of health foods", isCorrect: true },
            { text: "Tech company", isCorrect: false }
        ],
        hint: "The Sanitarium Health Food Company is known as a major supplier of this today."
    },
    {
        question: "Which General Conference session is considered one of the most significant for the church and its structure?",
        options: [
            { text: "1901", isCorrect: true },
            { text: "1888", isCorrect: false },
            { text: "1914", isCorrect: false },
            { text: "1920", isCorrect: false }
        ],
        hint: "This General Conference session is regarded as one of the most significant for the church and its structure."
    },
    {
        question: "What major changes took place in the management structure during the 1901 General Conference session?",
        options: [
            { text: "Centralization of decision-making", isCorrect: false },
            { text: "Greater freedom of decision-making at the local level", isCorrect: true },
            { text: "Expansion of headquarters", isCorrect: false },
            { text: "Reduction of local autonomy", isCorrect: false }
        ],
        hint: "During the 1901 General Conference session, major changes resulted in this aspect of the management structure."
    },
    {
        question: "What was one of the changes made regarding the General Conference Committee during the 1901 session?",
        options: [
            { text: "Reduced representation", isCorrect: false },
            { text: "Enlarged and made more representative", isCorrect: true },
            { text: "Abolished", isCorrect: false },
            { text: "Centralized decision-making", isCorrect: false }
        ],
        hint: "One of the changes made regarding the General Conference Committee during the 1901 session involved enlarging it and making it more representative."
    },
    {
        question: "What became the pattern of organization for union conferences/missions and local conferences/missions after the 1901 General Conference session?",
        options: [
            { text: "Centralized hierarchy", isCorrect: false },
            { text: "Independently operated units", isCorrect: false },
            { text: "Autonomous entities", isCorrect: false },
            { text: "Union conferences/missions and local conferences/missions", isCorrect: true }
        ],
        hint: "After the 1901 General Conference session, this became the pattern of organization for union conferences/missions and local conferences/missions."
    },
    {
        question: "What were conferences instructed to do regarding their tithes and offerings after the 1901 General Conference session?",
        options: [
            { text: "Keep them for local use only", isCorrect: false },
            { text: "Send them to the General Conference", isCorrect: false },
            { text: "Share them with the missions", isCorrect: true },
            { text: "Invest them in local infrastructure", isCorrect: false }
        ],
        hint: "After the 1901 General Conference session, conferences were instructed to do this with their tithes and offerings."
    },
    {
        question: "Which of the following did NOT happen during the 1901 General Conference session?",
        options: [
            { text: "Centralization of power", isCorrect: true },
            { text: "Enlargement of the General Conference Committee", isCorrect: false },
            { text: "Adoption of a pattern of organization for unions and local conferences", isCorrect: false },
            { text: "Sharing of tithes and offerings with missions", isCorrect: false }
        ],
        hint: "One of these did NOT happen during the 1901 General Conference session."
    },
    {
        question: "What did various independent organizations representing various interests of the denomination become after the 1901 General Conference session?",
        options: [
            { text: "Separated entities", isCorrect: false },
            { text: "Dissolved", isCorrect: false },
            { text: "Departments of the General Conference", isCorrect: true },
            { text: "Became independent corporations", isCorrect: false }
        ],
        hint: "After the 1901 General Conference session, various independent organizations representing various interests of the denomination became this."
    },
    {
        question: "What term is associated with the 1901 General Conference session, signifying a significant change in the church's direction?",
        options: [
            { text: "Stagnation point", isCorrect: false },
            { text: "Regression session", isCorrect: false },
            { text: "Turning point toward unity, reform, solvency, and ardent evangelism", isCorrect: true },
            { text: "Consolidation session", isCorrect: false }
        ],
        hint: "The 1901 General Conference session is associated with this term, signifying a significant change in the church's direction."
    },
    {
        question: "What was one of the aims of the changes made during the 1901 General Conference session?",
        options: [
            { text: "Increased centralization of power", isCorrect: false },
            { text: "Limitation of local autonomy", isCorrect: false },
            { text: "Greater freedom of decision-making at the local level", isCorrect: true },
            { text: "Expansion of headquarters", isCorrect: false }
        ],
        hint: "One of the aims of the changes made during the 1901 General Conference session was to achieve this."
    },
    {
        question: "What aspect of evangelism was emphasized after the 1901 General Conference session?",
        options: [
            { text: "Localized efforts", isCorrect: false },
            { text: "Arduous missionary journeys", isCorrect: false },
            { text: "Widespread expansion into all the world", isCorrect: true },
            { text: "Exclusive focus on domestic missions", isCorrect: false }
        ],
        hint: "After the 1901 General Conference session, emphasis was placed on this aspect of evangelism."
    },
    {
        question: "In which year did James White die?",
        options: [
            { text: "1875", isCorrect: false },
            { text: "1881", isCorrect: true },
            { text: "1887", isCorrect: false },
            { text: "1903", isCorrect: false }
        ],
        hint: "James White, a pioneer of the Adventist movement, died in this year."
    },
    {
        question: "Who was the first president of the General Conference?",
        options: [
            { text: "James White", isCorrect: false },
            { text: "John Byington", isCorrect: true },
            { text: "John N. Andrews", isCorrect: false },
            { text: "Uriah Smith", isCorrect: false }
        ],
        hint: "The first president of the General Conference, buried next to the first Adventist in Battle Creek, was this person."
    },
    {
        question: "Where is John Byington buried?",
        options: [
            { text: "Basel, Switzerland", isCorrect: false },
            { text: "Battle Creek, next to David Hewitt", isCorrect: true },
            { text: "In New York City", isCorrect: false },
            { text: "In Melbourne, Australia", isCorrect: false }
        ],
        hint: "John Byington, the first president of the General Conference, is buried next to the first Adventist in Battle Creek, who is David Hewitt, and chose Revelation 3:21 as his funeral text."
    },
    {
        question: "Who authored the book 'Thoughts on Daniel and the Revelation'?",
        options: [
            { text: "John Byington", isCorrect: false },
            { text: "John N. Andrews", isCorrect: false },
            { text: "Uriah Smith", isCorrect: true },
            { text: "D. M. Canright", isCorrect: false }
        ],
        hint: "This individual, who died in 1903, was the longtime editor of the Review and authored the book 'Thoughts on Daniel and the Revelation,' which is still much used today."
    },
    {
        question: "What happened to D. M. Canright after leaving the church?",
        options: [
            { text: "He became a leading minister", isCorrect: false },
            { text: "He became an ardent opposer of the movement", isCorrect: true },
            { text: "He continued to support the Adventist cause", isCorrect: false },
            { text: "He founded his own denomination", isCorrect: false }
        ],
        hint: "After leaving the church, D. M. Canright took this stance."
    },
    {
        question: "Who managed to take the Battle Creek Sanitarium after mixing pagan pantheism with the Bible?",
        options: [
            { text: "James White", isCorrect: false },
            { text: "John Byington", isCorrect: false },
            { text: "John N. Andrews", isCorrect: false },
            { text: "Dr. J. H. Kellogg", isCorrect: true }
        ],
        hint: "This individual, an administrator of the Battle Creek Sanitarium, mixed pagan pantheism with the Bible and managed to take the hospital with him after leaving."
    },
    {
        question: "Where are both John N. Andrews and J. H. Waggoner buried?",
        options: [
            { text: "Battle Creek, next to David Hewitt", isCorrect: false },
            { text: "Basel, Switzerland", isCorrect: true },
            { text: "In New York City", isCorrect: false },
            { text: "In Melbourne, Australia", isCorrect: false }
        ],
        hint: "Both of these individuals are buried in Basel, Switzerland."
    },
    {
        question: "Which individual's death coincided with the end of the Battle Creek era?",
        options: [
            { text: "John Byington", isCorrect: false },
            { text: "John N. Andrews", isCorrect: false },
            { text: "Uriah Smith", isCorrect: true },
            { text: "D. M. Canright", isCorrect: false }
        ],
        hint: "This individual's death coincided with the end of the Battle Creek era."
    },
    {
        question: "Who died a broken and forgotten man after leaving the church?",
        options: [
            { text: "John Byington", isCorrect: false },
            { text: "John N. Andrews", isCorrect: false },
            { text: "D. M. Canright", isCorrect: true },
            { text: "Uriah Smith", isCorrect: false }
        ],
        hint: "This individual, a leading minister, left the church and died a broken and forgotten man."
    },
    {
        question: "Which individual's funeral text was Revelation 3:21?",
        options: [
            { text: "James White", isCorrect: false },
            { text: "John Byington", isCorrect: true },
            { text: "John N. Andrews", isCorrect: false },
            { text: "Uriah Smith", isCorrect: false }
        ],
        hint: "This individual, buried next to the first Adventist in Battle Creek, had previously chosen Revelation 3:21 as his funeral text."
    },
    {
        question: "What warning did the members in Battle Creek receive regarding their location?",
        options: [
            { text: "To concentrate in one location", isCorrect: false },
            { text: "To scatter out and take the 'Good News' with them", isCorrect: true },
            { text: "To expand their institutions", isCorrect: false },
            { text: "To build more facilities", isCorrect: false }
        ],
        hint: "Members in Battle Creek were warned by God several times to do this regarding their location."
    },
    {
        question: "When did the main building of the sanitarium in Battle Creek burn down?",
        options: [
            { text: "1900", isCorrect: false },
            { text: "1901", isCorrect: false },
            { text: "1902", isCorrect: true },
            { text: "1903", isCorrect: false }
        ],
        hint: "The main building of the sanitarium in Battle Creek burned down in this year."
    },
    {
        question: "Which institution was destroyed by fire in December 1902?",
        options: [
            { text: "Avondale College", isCorrect: false },
            { text: "The Review factory", isCorrect: true },
            { text: "Stanborough Press", isCorrect: false },
            { text: "Hamburg Publishing House", isCorrect: false }
        ],
        hint: "In December 1902, this institution was destroyed by fire."
    },
    {
        question: "What advice did Ellen White give regarding the relocation of the headquarters?",
        options: [
            { text: "To move west", isCorrect: false },
            { text: "To move to Europe", isCorrect: false },
            { text: "To move to Washington, D.C.", isCorrect: true },
            { text: "To move to Australia", isCorrect: false }
        ],
        hint: "Ellen White advised to move the headquarters to this location."
    },
    {
        question: "What was the consequence of not decentralizing the institutions in Battle Creek, according to the warning given in 1893?",
        options: [
            { text: "Financial instability", isCorrect: false },
            { text: "Loss of membership", isCorrect: false },
            { text: "Destruction by fire", isCorrect: true },
            { text: "Closure of institutions", isCorrect: false }
        ],
        hint: "The consequence of not decentralizing the institutions in Battle Creek was this, according to the warning given in 1893."
    },
    {
        question: "What was the significance of the year 1903 in relation to Ellen White's advice?",
        options: [
            { text: "The relocation of the Review factory", isCorrect: false },
            { text: "The purchase of property near the nation's capital", isCorrect: true },
            { text: "The establishment of Avondale College", isCorrect: false },
            { text: "The burning down of the sanitarium", isCorrect: false }
        ],
        hint: "In 1903, this significant action was taken in relation to Ellen White's advice."
    },
    {
        question: "What was the outcome of heeding Ellen White's advice regarding the headquarters?",
        options: [
            { text: "Increased financial burden", isCorrect: false },
            { text: "Stagnation in growth", isCorrect: false },
            { text: "Purchase of property near Washington, D.C.", isCorrect: true },
            { text: "Relocation to Australia", isCorrect: false }
        ],
        hint: "Heeding Ellen White's advice regarding the headquarters resulted in this outcome."
    },
    {
        question: "What lesson can be drawn from the destruction of institutions in Battle Creek?",
        options: [
            { text: "The importance of centralized institutions", isCorrect: false },
            { text: "The need for more advanced fire safety measures", isCorrect: false },
            { text: "The importance of heeding divine warnings", isCorrect: true },
            { text: "The inevitability of natural disasters", isCorrect: false }
        ],
        hint: "The destruction of institutions in Battle Creek highlights the importance of this lesson."
    },
    {
        question: "What event prompted the relocation of the Review factory?",
        options: [
            { text: "A financial crisis", isCorrect: false },
            { text: "Ellen White's advice", isCorrect: false },
            { text: "Destruction by fire", isCorrect: true },
            { text: "Government intervention", isCorrect: false }
        ],
        hint: "The relocation of the Review factory was prompted by this event."
    },
    {
        question: "What was the state ofthe Review factory after it was destroyed by fire in December 1902?",
        options: [
            { text: "It was rebuilt in the same location", isCorrect: false },
            { text: "It was relocated near the nation's capital", isCorrect: false },
            { text: "It was completely destroyed", isCorrect: true },
            { text: "It was partially damaged", isCorrect: false }
        ],
        hint: "After being destroyed by fire, the Review factory was in this state."
    }
];