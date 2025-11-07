// Presentation data structure
const presentationData01 = {
    title: "Introduction to Youth Ministry - Seminar 1",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Introduction to Youth Ministry",
            content: `
                <h1 class="slide-title animate-in">Introduction to Youth Ministry</h1>
                <div class="slide-content">
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Youth Ministry" class="slide-image animate-in" data-delay="200">
                    </div>
                    <p class="animate-in" data-delay="400">Understanding the History, Philosophy, Vision, Objectives and Structure of Adventist Youth Ministry</p>
                </div>
            `,
            notes: "Welcome participants and introduce the comprehensive scope of youth ministry foundations."
        },
        {
            id: 2,
            title: "Seminar Overview",
            content: `
                <h1 class="slide-title animate-in">Seminar Overview</h1>
                <div class="slide-content">
                    <div class="topics-grid">
                        <div class="topic-item animate-in" data-delay="200">
                            <h3>📊 Organizational Structure</h3>
                            <p>Adventist Church hierarchy and youth ministry placement</p>
                        </div>
                        <div class="topic-item animate-in" data-delay="400">
                            <h3>📜 Historical Development</h3>
                            <p>AYM history and JMV classes evolution</p>
                        </div>
                        <div class="topic-item animate-in" data-delay="600">
                            <h3>🏛️ Department Names</h3>
                            <p>Evolution of youth ministry department names</p>
                        </div>
                        <div class="topic-item animate-in" data-delay="800">
                            <h3>🎯 Philosophy & Mission</h3>
                            <p>Core beliefs and purpose of AYM</p>
                        </div>
                        <div class="topic-item animate-in" data-delay="1000">
                            <h3>👥 Age Grouping</h3>
                            <p>Structure for different youth age levels</p>
                        </div>
                        <div class="topic-item animate-in" data-delay="1200">
                            <h3>⭐ Ideals</h3>
                            <p>Aim, Mission, Motto, and Pledge</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide overview of all topics covered in this foundational seminar."
        },
        {
            id: 3,
            title: "Organizational Structure",
            content: `
                <h1 class="slide-title animate-in">Organizational Structure</h1>
                <div class="slide-content">
                    <div class="structure-flow">
                        <div class="level-item animate-in" data-delay="200">
                            <div class="level-number">🌍</div>
                            <div class="level-content">
                                <h3>General Conference</h3>
                                <p>World headquarters leadership</p>
                            </div>
                        </div>
                        <div class="level-item animate-in" data-delay="400">
                            <div class="level-number">🗺️</div>
                            <div class="level-content">
                                <h3>Division</h3>
                                <p>Regional world divisions</p>
                            </div>
                        </div>
                        <div class="level-item animate-in" data-delay="600">
                            <div class="level-number">🏢</div>
                            <div class="level-content">
                                <h3>Union</h3>
                                <p>Multi-conference territory</p>
                            </div>
                        </div>
                        <div class="level-item animate-in" data-delay="800">
                            <div class="level-number">⭐</div>
                            <div class="level-content">
                                <h3>Conference/Mission</h3>
                                <p>Local field administration</p>
                            </div>
                        </div>
                        <div class="level-item animate-in" data-delay="1000">
                            <div class="level-number">⚖️</div>
                            <div class="level-content">
                                <h3>Local Church</h3>
                                <p>Where youth ministry happens</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the Adventist Church organizational structure from global to local levels."
        },
        {
            id: 4,
            title: "History of Adventist Youth Ministries",
            content: `
                <h1 class="slide-title animate-in">AYM Historical Timeline</h1>
                <div class="slide-content">
                    <div class="timeline">
                        <div class="timeline-item animate-in" data-delay="200">
                            <div class="timeline-year">1879</div>
                            <div class="timeline-content">
                                <h3>First Youth Organization</h3>
                                <p>Harry Fenner (16) and Luther Warren (14) started first local church youth organization</p>
                            </div>
                        </div>
                        <div class="timeline-item animate-in" data-delay="400">
                            <div class="timeline-year">1901</div>
                            <div class="timeline-content">
                                <h3>GC Official Recognition</h3>
                                <p>General Conference voted young people's organization into existence under Sabbath School</p>
                            </div>
                        </div>
                        <div class="timeline-item animate-in" data-delay="600">
                            <div class="timeline-year">1907</div>
                            <div class="timeline-content">
                                <h3>Youth Department Created</h3>
                                <p>GC Council approved Youth Department within General Conference</p>
                                <p>Elder M. E. Kern elected first GC Youth Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Trace the early beginnings and formal establishment of Adventist youth ministry."
        },
        {
            id: 5,
            title: "JMV Classes & Pathfinder History",
            content: `
                <h1 class="slide-title animate-in">JMV Classes & Pathfinder Development</h1>
                <div class="slide-content">
                    <div class="historical-events">
                        <div class="event-item animate-in" data-delay="200">
                            <div class="event-year">1946</div>
                            <div class="event-content">
                                <h3>Character Classics & Pathfinders</h3>
                                <ul class="bullet-points">
                                    <li>Character Classics Reading Plan adopted (later Encounter)</li>
                                    <li>John Hancock organized first conference-sponsored Pathfinder Club in Riverside, California</li>
                                </ul>
                            </div>
                        </div>
                        <div class="event-item animate-in" data-delay="400">
                            <div class="event-year">1947</div>
                            <div class="event-content">
                                <h3>First NAD Youth Congress</h3>
                                <p>San Francisco - E.W. Dunbar as world youth director</p>
                            </div>
                        </div>
                        <div class="event-item animate-in" data-delay="600">
                            <div class="event-year">1969</div>
                            <div class="event-content">
                                <h3>First World Youth Congress</h3>
                                <p>Zurich, Switzerland - Theodore Lucas as world youth director</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Highlight key developments in JMV classes and Pathfinder ministry establishment."
        },
        {
            id: 6,
            title: "Progressive Classwork Evolution",
            content: `
                <h1 class="slide-title animate-in">Progressive Classwork Evolution</h1>
                <div class="slide-content">
                    <div class="classwork-timeline">
                        <div class="era-item animate-in" data-delay="200">
                            <h3>1922</h3>
                            <p>General Conference introduced Junior Missionary Volunteer Society progressive classwork</p>
                        </div>
                        <div class="era-item animate-in" data-delay="400">
                            <h3>1927</h3>
                            <p>GC Autumn Council expanded to three junior classes: Friend, Companion, Comrade</p>
                        </div>
                        <div class="era-item animate-in" data-delay="600">
                            <h3>1928</h3>
                            <ul class="bullet-points">
                                <li>MV Honors and Master Comrade Class developed</li>
                                <li>For senior youth and adult junior leadership preparation</li>
                            </ul>
                        </div>
                        <div class="era-item animate-in" data-delay="800">
                            <h3>1931</h3>
                            <p>First Master Comrade (later Master Guide) invested</p>
                        </div>
                        <div class="era-item animate-in" data-delay="1000">
                            <h3>1950</h3>
                            <p>General Conference adopted Pathfinder Club organization</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Detail the development of the progressive classwork system from JMV to current structure."
        },
        {
            id: 7,
            title: "Department Name Evolution",
            content: `
                <h1 class="slide-title animate-in">Department Name Evolution</h1>
                <div class="slide-content">
                    <div class="name-changes">
                        <div class="name-era animate-in" data-delay="200">
                            <div class="name-year">1907</div>
                            <div class="name-content">
                                <h3>"Seventh-day Adventist Young People's Department"</h3>
                                <p>Known as MV - Missionary Volunteers</p>
                            </div>
                        </div>
                        <div class="name-era animate-in" data-delay="400">
                            <div class="name-year">1972</div>
                            <div class="name-content">
                                <h3>"Youth Department of Missionary Volunteers"</h3>
                                <p>Updated naming convention</p>
                            </div>
                        </div>
                        <div class="name-era animate-in" data-delay="600">
                            <div class="name-year">1978</div>
                            <div class="name-content">
                                <h3>"Adventist Youth" (AY Department)</h3>
                                <p>Commonly known as AY department</p>
                            </div>
                        </div>
                        <div class="name-era animate-in" data-delay="800">
                            <div class="name-year">2005</div>
                            <div class="name-content">
                                <h3>"Youth Ministries Department"</h3>
                                <p>Encompassed all three age levels</p>
                            </div>
                        </div>
                        <div class="name-era animate-in" data-delay="1000">
                            <div class="name-year">2015</div>
                            <div class="name-content">
                                <h3>"Adventist Youth Ministries" (AYM)</h3>
                                <p>Current comprehensive name</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Track the historical name changes reflecting evolving ministry focus and scope."
        },
        {
            id: 8,
            title: "Philosophy of Adventist Youth Ministries",
            content: `
                <h1 class="slide-title animate-in">AYM Philosophy</h1>
                <div class="slide-content">
                    <div class="philosophy-points">
                        <div class="point-item animate-in" data-delay="200">
                            <h3>📖 Biblical Foundation</h3>
                            <p>Securely grounded in Biblical revelation of Jesus Christ</p>
                        </div>
                        <div class="point-item animate-in" data-delay="400">
                            <h3>👣 Servant Leadership Model</h3>
                            <p>Jesus showed Father's love through servant leadership (John 13:1-17)</p>
                        </div>
                        <div class="point-item animate-in" data-delay="600">
                            <h3>💪 Holy Spirit Power</h3>
                            <p>Demonstrated power to overcome sin through Holy Spirit</p>
                        </div>
                        <div class="point-item animate-in" data-delay="800">
                            <h3>🌍 Incarnational Ministry</h3>
                            <p>Jesus as model - allowing His character to be revealed in youth</p>
                        </div>
                        <div class="point-item animate-in" data-delay="1000">
                            <h3>🎯 True Discipleship</h3>
                            <p>Becoming true disciples of Jesus in this generation</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the Christ-centered philosophical foundation of Adventist youth ministry."
        },
        {
            id: 9,
            title: "Ellen White's Counsel on Youth Ministry",
            content: `
                <h1 class="slide-title animate-in">Ellen White's Youth Ministry Counsel</h1>
                <div class="slide-content">
                    <div class="counsel-points">
                        <div class="counsel-item animate-in" data-delay="200">
                            <h3>🎯 Special Attention Needed</h3>
                            <p>"Youth are objects of Satan's special attacks"</p>
                        </div>
                        <div class="counsel-item animate-in" data-delay="400">
                            <h3>💝 Christlike Approach</h3>
                            <p>"Kindness, courtesy, and sympathy from heart filled with love to Jesus will gain their confidence"</p>
                        </div>
                        <div class="counsel-item animate-in" data-delay="600">
                            <h3>🙏 Dedicated Study & Prayer</h3>
                            <p>"More study to problem of how to deal with youth, more earnest prayer for needed wisdom"</p>
                        </div>
                        <div class="counsel-item animate-in" data-delay="800">
                            <h3>🤝 Empathetic Engagement</h3>
                            <p>"Seek to enter into feelings of youth, sympathizing in joys, sorrows, conflicts, victories"</p>
                        </div>
                        <div class="counsel-item animate-in" data-delay="1000">
                            <h3>🛣️ Attractive Pathway</h3>
                            <p>"Make path to heaven bright and attractive" - Gospel Workers pp. 207-212</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share Ellen White's inspired counsel on effective youth ministry approaches."
        },
        {
            id: 10,
            title: "Mission & Vision",
            content: `
                <h1 class="slide-title animate-in">Mission & Vision</h1>
                <div class="slide-content">
                    <div class="mission-vision">
                        <div class="mission-item animate-in" data-delay="200">
                            <h3>🎯 Core Mission</h3>
                            <p class="mission-statement">"To lead young people into a saving relationship with Jesus Christ and help them embrace His call to discipleship"</p>
                        </div>
                        <div class="vision-item animate-in" data-delay="400">
                            <h3>👣 Jesus as Model</h3>
                            <ul class="bullet-points">
                                <li>Meet young people where they are</li>
                                <li>Offer pastoral care as spiritual guides, counselors, friends</li>
                                <li>Fellow pilgrims on similar spiritual journey</li>
                                <li>Personal and relational ministry</li>
                                <li>One-to-one time investment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the official mission statement and vision for Adventist youth ministry."
        },
        {
            id: 11,
            title: "Biblical Foundation of Mission",
            content: `
                <h1 class="slide-title animate-in">Biblical Mission Foundation</h1>
                <div class="slide-content">
                    <div class="biblical-mission">
                        <div class="foundation-item animate-in" data-delay="200">
                            <h3>📖 Acts 2:42-47 Model</h3>
                            <p>Mission grounded in early church's biblical model</p>
                        </div>
                        <div class="foundation-item animate-in" data-delay="400">
                            <h3>🎯 Threefold Mission</h3>
                            <ul class="bullet-points">
                                <li><strong>Salvation</strong> - Saving relationship with Jesus</li>
                                <li><strong>Discipleship</strong> - Spiritual growth and development</li>
                                <li><strong>Service</strong> - Active ministry to others</li>
                            </ul>
                        </div>
                        <div class="foundation-item animate-in" data-delay="600">
                            <h3>💪 Four Dynamic Forces</h3>
                            <ul class="bullet-points">
                                <li><strong>Grace</strong> - God's unmerited favor</li>
                                <li><strong>Worship</strong> - Honor and adoration of God</li>
                                <li><strong>Community</strong> - Fellowship and belonging</li>
                                <li><strong>Service</strong> - Ministry to others</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Connect AYM mission to biblical foundations and early church practices."
        },
        {
            id: 12,
            title: "Ellen White's Objectives for Youth Ministry",
            content: `
                <h1 class="slide-title animate-in">Ellen White's Objectives</h1>
                <div class="slide-content">
                    <div class="objectives-list">
                        <div class="objective-item animate-in" data-delay="200">
                            <h3>1. Train Youth for Youth</h3>
                            <p>"To train the youth to work for other youth"</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="400">
                            <h3>2. Recruit for Church Support</h3>
                            <p>"To recruit the youth to help their church and those who profess to be Sabbath-keepers"</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="600">
                            <h3>3. Outreach to All</h3>
                            <p>"To work for those who are not of our faith"</p>
                            <p><em>Signs of the Times, May 29, 1893</em></p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present Ellen White's original three objectives for youth ministry work."
        },
        {
            id: 13,
            title: "Implementation of Objectives",
            content: `
                <h1 class="slide-title animate-in">Implementing the Objectives</h1>
                <div class="slide-content">
                    <div class="implementation-actions">
                        <div class="action-item animate-in" data-delay="200">
                            <h3>🙏 Spiritual Practices</h3>
                            <ul class="bullet-points">
                                <li>Pray together</li>
                                <li>Study Word together</li>
                            </ul>
                        </div>
                        <div class="action-item animate-in" data-delay="400">
                            <h3>👥 Community Building</h3>
                            <ul class="bullet-points">
                                <li>Fellowship in Christian social interaction</li>
                                <li>Encourage one another in spiritual growth</li>
                            </ul>
                        </div>
                        <div class="action-item animate-in" data-delay="600">
                            <h3>🎯 Service Development</h3>
                            <ul class="bullet-points">
                                <li>Act together in small groups for witnessing</li>
                                <li>Develop tact, skill, talent in service to Jesus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain practical ways to implement the youth ministry objectives."
        },
        {
            id: 14,
            title: "M. E. Kern's Expanded Objectives",
            content: `
                <h1 class="slide-title animate-in">M. E. Kern's Objectives (1907)</h1>
                <div class="slide-content">
                    <div class="kern-objectives">
                        <div class="kern-item animate-in" data-delay="200">
                            <h3>📈 Raise Devotional Life</h3>
                            <p>Elevate the level of young person's devotional life</p>
                        </div>
                        <div class="kern-item animate-in" data-delay="400">
                            <h3>🎯 Lift Attainment Standard</h3>
                            <p>Increase expectations and achievements of youth</p>
                        </div>
                        <div class="kern-item animate-in" data-delay="600">
                            <h3>🎓 Educate for Service</h3>
                            <p>Train youth for effective ministry service</p>
                        </div>
                        <div class="kern-item animate-in" data-delay="800">
                            <h3>🌍 Provide Outreach Opportunities</h3>
                            <p>Create platforms for evangelism and service</p>
                        </div>
                        <div class="kern-item animate-in" data-delay="1000">
                            <h3>💰 Teach Stewardship</h3>
                            <p>Instruct principles of faithful stewardship</p>
                        </div>
                        <div class="kern-item animate-in" data-delay="1200">
                            <h3>💝 Discover Worth & Gifts</h3>
                            <p>Help youth discover individual worth and spiritual gifts</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share the comprehensive objectives set by the first GC Youth Director."
        },
        {
            id: 15,
            title: "Junior Youth Ministries Structure",
            content: `
                <h1 class="slide-title animate-in">Junior Youth Ministries (Ages 4-15)</h1>
                <div class="slide-content">
                    <div class="junior-ministries">
                        <div class="ministry-item animate-in" data-delay="200">
                            <h3>👶 Adventurer Ministry (Ages 4-9)</h3>
                            <ul class="bullet-points">
                                <li>Strengthens parent-child relationships</li>
                                <li>Weekly activities tuned to psychological needs</li>
                                <li>Parent learning opportunities</li>
                                <li>Special parent-child activities</li>
                            </ul>
                        </div>
                        <div class="ministry-item animate-in" data-delay="400">
                            <h3>🎯 Pathfinder Ministry (Ages 10-15)</h3>
                            <ul class="bullet-points">
                                <li>Critical identity formation years</li>
                                <li>Adolescent transformation focus</li>
                                <li>Intentional service and mission activities</li>
                                <li>Channels youth energy to community focus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the structure and purpose of Junior Youth Ministries programs."
        },
        {
            id: 16,
            title: "Senior Youth Ministries Structure",
            content: `
                <h1 class="slide-title animate-in">Senior Youth Ministries (Ages 16-30+)</h1>
                <div class="slide-content">
                    <div class="senior-ministries">
                        <div class="ministry-item animate-in" data-delay="200">
                            <h3>🌟 Ambassador Ministry (Ages 16-21)</h3>
                            <ul class="bullet-points">
                                <li>Strengthens current senior youth ministry</li>
                                <li>Challenges to experience/share personal relationship with Jesus</li>
                                <li>Develops belief-consistent lifestyle</li>
                                <li>Vocational interest training</li>
                                <li>Safe environment for lifelong friendships</li>
                            </ul>
                        </div>
                        <div class="ministry-item animate-in" data-delay="400">
                            <h3>👥 Young Adult Ministry (Ages 22-30+)</h3>
                            <ul class="bullet-points">
                                <li>Engages generation sharing living relationship with Jesus</li>
                                <li>Serves diverse demographics (students, workers, married, single, parents)</li>
                                <li>Empowers for leadership and mentoring</li>
                                <li>Focus on evangelism and healthy lives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Detail the structure and focus of Senior Youth Ministries programs."
        },
        {
            id: 17,
            title: "AYM Leadership Curriculum",
            content: `
                <h1 class="slide-title animate-in">Leadership Curriculum</h1>
                <div class="slide-content">
                    <div class="curriculum-structure">
                        <div class="level-column animate-in" data-delay="200">
                            <h3>👦 Junior Youth</h3>
                            <div class="program-item">
                                <h4>Adventurers</h4>
                                <p>Ages 4-9 years old</p>
                            </div>
                            <div class="program-item">
                                <h4>Pathfinders</h4>
                                <p>Ages 10-15 years old</p>
                            </div>
                        </div>
                        <div class="level-column animate-in" data-delay="400">
                            <h3>👨‍🎓 Senior Youth</h3>
                            <div class="program-item">
                                <h4>Ambassadors</h4>
                                <p>Ages 16-21 years old</p>
                            </div>
                            <div class="program-item">
                                <h4>Young Adults</h4>
                                <p>Ages 22-30+ years old</p>
                            </div>
                        </div>
                        <div class="level-column animate-in" data-delay="600">
                            <h3>🏆 Leadership Training</h3>
                            <div class="program-item">
                                <h4>Master Guide</h4>
                                <p>Senior youth leadership</p>
                            </div>
                            <div class="program-item">
                                <h4>Senior Youth Leader</h4>
                                <p>Adult leadership training</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline the comprehensive leadership training curriculum across age groups."
        },
        {
            id: 18,
            title: "AYM Colors and Symbolism",
            content: `
                <h1 class="slide-title animate-in">AYM Colors & Symbolism</h1>
                <div class="slide-content">
                    <div class="color-symbolism">
                        <div class="color-item animate-in" data-delay="200">
                            <div class="color-swatch blue"></div>
                            <div class="color-content">
                                <h3>Blue - Heaven</h3>
                                <p>Color of sky, reminder of heavenly realm</p>
                            </div>
                        </div>
                        <div class="color-item animate-in" data-delay="400">
                            <div class="color-swatch scarlet"></div>
                            <div class="color-content">
                                <h3>Scarlet - Redemption</h3>
                                <p>Represents blood and Christ's atonement (Leviticus 17:11)</p>
                            </div>
                        </div>
                        <div class="color-item animate-in" data-delay="600">
                            <div class="color-swatch green"></div>
                            <div class="color-content">
                                <h3>Green - Growth</h3>
                                <p>Growing and blooming where planted, fruit-bearing Christian life</p>
                            </div>
                        </div>
                        <div class="color-item animate-in" data-delay="800">
                            <div class="color-swatch white"></div>
                            <div class="color-content">
                                <h3>White - Righteousness</h3>
                                <p>Purity and light, points to the Righteous One</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the symbolic meaning behind AYM colors and their biblical significance."
        },
        {
            id: 19,
            title: "Pathfinder Logo Symbolism - Part 1",
            content: `
                <h1 class="slide-title animate-in">Pathfinder Logo Symbolism</h1>
                <div class="slide-content">
                    <div class="symbolism-items">
                        <div class="symbol-item animate-in" data-delay="200">
                            <h3>🔺 Triangle - Trinity & Education</h3>
                            <ul class="bullet-points">
                                <li>Three sides represent completeness of Trinity</li>
                                <li>Tripod of education: Mental, Physical, Spiritual</li>
                            </ul>
                        </div>
                        <div class="symbol-item animate-in" data-delay="400">
                            <h3>❤️ Red - Sacrifice & Love</h3>
                            <p>John 3:16 - "For God so loved the world..."</p>
                            <p>Romans 12:1 - "Present your bodies a living sacrifice"</p>
                        </div>
                        <div class="symbol-item animate-in" data-delay="600">
                            <h3>⭐ Gold - Excellence</h3>
                            <p>Revelation 3:18 - "Gold tried in the fire"</p>
                            <p>High standards for strong kingdom character</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the rich symbolism embedded in the Pathfinder logo design."
        },
        {
            id: 20,
            title: "Pathfinder Logo Symbolism - Part 2",
            content: `
                <h1 class="slide-title animate-in">More Pathfinder Symbols</h1>
                <div class="slide-content">
                    <div class="symbolism-items">
                        <div class="symbol-item animate-in" data-delay="200">
                            <h3>🛡️ Shield - Protection</h3>
                            <p>Genesis 15:1 - "I am thy shield"</p>
                            <p>Ephesians 6:16 - "Shield of faith"</p>
                        </div>
                        <div class="symbol-item animate-in" data-delay="400">
                            <h3>⚪ White - Purity</h3>
                            <p>Revelation 3:5 - "Clothed in white raiment"</p>
                            <p>Purity and righteousness of Christ's life</p>
                        </div>
                        <div class="symbol-item animate-in" data-delay="600">
                            <h3>🔵 Blue - Loyalty</h3>
                            <p>Loyalty to God, parents, church</p>
                            <p>Reflection of True Master Guide's character</p>
                        </div>
                        <div class="symbol-item animate-in" data-delay="800">
                            <h3>⚔️ Sword - Bible</h3>
                            <p>Ephesians 6:17 - "Sword of the Spirit"</p>
                            <p>Offensive weapon against sin</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Continue explaining the meaningful symbols in Pathfinder identity."
        },
        {
            id: 21,
            title: "AYM Logo Symbolism",
            content: `
                <h1 class="slide-title animate-in">AYM Logo Meaning</h1>
                <div class="slide-content">
                    <div class="logo-symbolism">
                        <div class="symbol-element animate-in" data-delay="200">
                            <h3>✝️ Cross - Central Focus</h3>
                            <p>Jesus' sacrifice center of relationship with Him</p>
                            <p>Cross on earth symbolizes hope for new life and earth made new</p>
                        </div>
                        <div class="symbol-element animate-in" data-delay="400">
                            <h3>📖 Open Book - God's Word</h3>
                            <p>Foundation for faith, knowledge, lifestyle</p>
                            <p>Open for internalization and sharing with all</p>
                        </div>
                        <div class="symbol-element animate-in" data-delay="600">
                            <h3>🌅 Yellow-Orange - Eternal Dawn</h3>
                            <p>Dawn of eternal life after temporal earthly experience</p>
                            <p>Graded colors represent transition from darkness to light</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the symbolism in the main Adventist Youth Ministries logo."
        },
        {
            id: 22,
            title: "Young Adult Ministry Symbols",
            content: `
                <h1 class="slide-title animate-in">Young Adult Symbols</h1>
                <div class="slide-content">
                    <div class="ya-symbols">
                        <div class="ya-symbol animate-in" data-delay="200">
                            <h3>✝️ Central Gospel</h3>
                            <p>Gospel of Jesus represented by cross at center</p>
                            <p>Colossians 1:17 - He is before all things</p>
                        </div>
                        <div class="ya-symbol animate-in" data-delay="400">
                            <h3>👼 Three Angels' Message</h3>
                            <p>Revelation 14:6-12 - Urgent plea to the world</p>
                            <p>Message to be carried by young adults to all world</p>
                        </div>
                        <div class="ya-symbol animate-in" data-delay="600">
                            <h3>🌍 Half Globe - World Field</h3>
                            <p>World field to receive three angels' message</p>
                            <p>For every tongue, nation, kindred - no discrimination</p>
                        </div>
                        <div class="ya-symbol animate-in" data-delay="800">
                            <h3>🎨 Color Meanings</h3>
                            <ul class="bullet-points">
                                <li><strong>Blue</strong> - Loyalty to God, mission, church</li>
                                <li><strong>Yellow</strong> - Joy, happiness, intellect, courage, energy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the symbolism specific to Young Adult Ministry identity."
        },
        {
            id: 23,
            title: "AYM Ideals",
            content: `
                <h1 class="slide-title animate-in">AYM Ideals</h1>
                <div class="slide-content">
                    <div class="ideals-list">
                        <div class="ideal-item animate-in" data-delay="200">
                            <h3>🎯 Aim</h3>
                            <p class="ideal-statement">"The Advent message to all the world in my generation."</p>
                        </div>
                        <div class="ideal-item animate-in" data-delay="400">
                            <h3>🌍 Mission</h3>
                            <p class="ideal-statement">"To lead young people in a saving relationship with Jesus and help them embrace his call to discipleship."</p>
                        </div>
                        <div class="ideal-item animate-in" data-delay="600">
                            <h3>💝 Motto</h3>
                            <p class="ideal-statement">"The love of Christ compels me."</p>
                        </div>
                        <div class="ideal-item animate-in" data-delay="800">
                            <h3>🤝 Pledge</h3>
                            <p class="ideal-statement">"Loving the Lord Jesus, I promise to take an active part in the work of the Adventist Youth Ministries, doing what I can to help others and to finish the work of the gospel in all the world."</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the four key ideals that guide Adventist Youth Ministries."
        },
        {
            id: 24,
            title: "Conclusion & Resources",
            content: `
                <h1 class="slide-title animate-in">Conclusion & Next Steps</h1>
                <div class="slide-content">
                    <div class="conclusion-content">
                        <div class="summary-point animate-in" data-delay="200">
                            <h3>📚 Foundational Understanding</h3>
                            <p>You now have comprehensive knowledge of AYM history, structure, and philosophy</p>
                        </div>
                        <div class="summary-point animate-in" data-delay="400">
                            <h3>🎯 Clear Purpose</h3>
                            <p>Understanding of mission, objectives, and ideals that guide youth ministry</p>
                        </div>
                        <div class="summary-point animate-in" data-delay="600">
                            <h3>👥 Structural Awareness</h3>
                            <p>Knowledge of age-appropriate ministries and leadership development</p>
                        </div>
                    </div>
                    
                    <div class="resources-section animate-in" data-delay="800">
                        <h3>🌐 Continued Learning</h3>
                        <p><strong>Visit:</strong> youth.adventist.org for more resources, training materials, and updates</p>
                    </div>
                    
                    <div class="final-challenge animate-in" data-delay="1000">
                        <p><strong>Challenge:</strong> Memorize the AYM Aim, Mission, Motto, and Pledge this week.</p>
                    </div>
                </div>
            `,
            notes: "Summarize key learnings and provide resources for continued growth in youth ministry understanding."
        }
    ]
};