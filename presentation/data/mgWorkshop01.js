// Presentation data structure
const presentationData11 = {
    title: "Club Ministry: Purpose & History - PFAD 001",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Club Ministry Overview & Purpose",
            content: `
                <h1 class="slide-title animate-in">Club Ministry Purpose</h1>
                <div class="slide-content">
                    <div class="mission-content">
                        <div class="mission-item animate-in" data-delay="200">
                            <h3>🎯 Three-Tiered Ministry Approach</h3>
                            <div class="comparison-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Ministry</th>
                                            <th>Ages</th>
                                            <th>Focus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Adventurer</strong></td>
                                            <td>4-9 years</td>
                                            <td>Strengthening family faith in Jesus Christ</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pathfinder</strong></td>
                                            <td>10-15 years</td>
                                            <td>Developing faith & providing lifelong mentors</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Master Guide</strong></td>
                                            <td>18+ years</td>
                                            <td>Training adult leaders for youth ministries</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="mission-item animate-in" data-delay="400">
                            <h3>📋 Workshop Focus</h3>
                            <ul class="bullet-points">
                                <li>Understanding how club ministries grow children in Christ</li>
                                <li>Pathfinder ministry emphasis</li>
                                <li>Keeping youth connected to the church</li>
                                <li>Faith development through structured programs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Introduce the three-tiered club ministry system and workshop focus on Pathfinder ministry."
        },
        {
            id: 2,
            title: "Pathfinder Club Philosophy & Objectives",
            content: `
                <h1 class="slide-title animate-in">Pathfinder Philosophy & Objectives</h1>
                <div class="slide-content">
                    <div class="philosophy-content">
                        <div class="philosophy-item animate-in" data-delay="200">
                            <h3>🌟 Core Philosophy</h3>
                            <ul class="bullet-points">
                                <li>Church-centered spiritual-recreational-activity program</li>
                                <li>Designed for youth ages 10-15</li>
                                <li>Meets developmental needs through action and adventure</li>
                                <li>"Children learn best by example, rather than by precept"</li>
                                <li>Bridges generation gap through shared experiences</li>
                            </ul>
                        </div>
                        <div class="objectives-item animate-in" data-delay="400">
                            <h3>🎯 Key Objectives</h3>
                            <ul class="bullet-points">
                                <li>Help youth feel God's love through the church</li>
                                <li>Encourage discovery of God-given potential</li>
                                <li>Inspire outreach through united activities</li>
                                <li>Make personal salvation the #1 priority</li>
                                <li>Build appreciation for God's creation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the Pathfinder philosophy and key objectives for youth development."
        },
        {
            id: 3,
            title: "Pathfinder Mission & Goals",
            content: `
                <h1 class="slide-title animate-in">Mission & Goals</h1>
                <div class="slide-content">
                    <div class="mission-goals-content">
                        <div class="mission-statement animate-in" data-delay="200">
                            <h3>📜 Mission Statement</h3>
                            <div class="highlight-box">
                                <p>"Pathfinder Ministry is dedicated to meeting the mental, physical, social and spiritual developmental needs of youth ages 10-15 by challenging them to experience a personal relationship with Christ, have a sense of achievement and responsibility, develop respect for God's creation, and care for each member of God's family."</p>
                            </div>
                        </div>
                        <div class="goals-list animate-in" data-delay="400">
                            <h3>🎯 Primary Goals</h3>
                            <ul class="bullet-points">
                                <li>Accept Jesus Christ as personal Savior and Lord</li>
                                <li>Reflect Christian values through mature decision making</li>
                                <li>Exhibit Christ's righteousness and holiness</li>
                                <li>Demonstrate leadership skills for service</li>
                                <li>Become full partners in church mission</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the official mission statement and primary goals of Pathfinder ministry."
        },
        {
            id: 4,
            title: "Historical Timeline - Foundation Years",
            content: `
                <h1 class="slide-title animate-in">Historical Foundation (1852-1927)</h1>
                <div class="slide-content">
                    <div class="timeline-content">
                        <div class="timeline-item animate-in" data-delay="200">
                            <h3>📅 Key Milestones</h3>
                            <div class="timeline">
                                <div class="timeline-event">
                                    <strong>1852</strong> - First Youth's Instructor magazine
                                </div>
                                <div class="timeline-event">
                                    <strong>1879</strong> - First Young People's Society in Hazelton, MI
                                </div>
                                <div class="timeline-event">
                                    <strong>1907</strong> - General Conference establishes Youth Department
                                </div>
                                <div class="timeline-event">
                                    <strong>1909</strong> - Junior Missionary Volunteer Societies organized
                                </div>
                                <div class="timeline-event">
                                    <strong>1919</strong> - Arthur Spalding starts "Mission Scouts"
                                </div>
                                <div class="timeline-event">
                                    <strong>1927</strong> - First conference-sponsored Pathfinder club in Anaheim, CA
                                </div>
                            </div>
                        </div>
                        <div class="historical-context animate-in" data-delay="400">
                            <h3>👥 Founding Pioneers</h3>
                            <ul class="bullet-points">
                                <li><strong>Arthur W. Spalding</strong> - Organized first clubs, wrote JMV Pledge & Law</li>
                                <li><strong>Harriet M. Holt</strong> - Co-developed progressive classes</li>
                                <li><strong>John McKim & Willa Steen</strong> - Introduced "Pathfinder" name</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover the foundational years and key pioneers of Pathfinder ministry."
        },
        {
            id: 5,
            title: "Historical Development & Growth",
            content: `
                <h1 class="slide-title animate-in">Development & Growth (1928-2020)</h1>
                <div class="slide-content">
                    <div class="development-content">
                        <div class="development-item animate-in" data-delay="200">
                            <h3>🚀 Program Evolution</h3>
                            <ul class="bullet-points">
                                <li><strong>1928</strong> - First 16 Vocational Merits (Honors) introduced</li>
                                <li><strong>1946</strong> - Pathfinder triangle emblem designed by John Hancock</li>
                                <li><strong>1949</strong> - Pathfinder Song written by Henry T. Bergh</li>
                                <li><strong>1950</strong> - GC authorizes JMV Pathfinder Clubs worldwide</li>
                                <li><strong>1953</strong> - First Conference Pathfinder Camporee</li>
                                <li><strong>1991</strong> - Pathfinder Basic Staff Training Course developed</li>
                            </ul>
                        </div>
                        <div class="growth-item animate-in" data-delay="400">
                            <h3>🌍 Global Expansion</h3>
                            <ul class="bullet-points">
                                <li><strong>1971</strong> - First Division Camporee (Northern Europe-West Africa)</li>
                                <li><strong>1985</strong> - First North American Division Camporee</li>
                                <li><strong>2019</strong> - "Chosen" Camporee with 57,000 participants</li>
                                <li><strong>2019</strong> - South American Division: 95,000 participants total</li>
                                <li><strong>2020</strong> - Master Guide Club voted as official NAD ministry</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Trace the development and global expansion of Pathfinder ministry."
        },
        {
            id: 6,
            title: "Pathfinder Symbols & Traditions",
            content: `
                <h1 class="slide-title animate-in">Symbols & Traditions</h1>
                <div class="slide-content">
                    <div class="symbols-content">
                        <div class="symbol-item animate-in" data-delay="200">
                            <h3>🔺 Pathfinder Triangle Logo</h3>
                            <ul class="bullet-points">
                                <li>Designed by John Hancock in 1946</li>
                                <li>Each component has significant meaning</li>
                                <li>Represents the holistic development approach</li>
                            </ul>
                        </div>
                        <div class="symbol-item animate-in" data-delay="400">
                            <h3>📜 Pledge & Law</h3>
                            <ul class="bullet-points">
                                <li>Recited at every Pathfinder ceremony</li>
                                <li>Living standard for Pathfinders and staff</li>
                                <li>Official since 1921 (written by Arthur Spalding)</li>
                            </ul>
                        </div>
                        <div class="symbol-item animate-in" data-delay="600">
                            <h3>🎵 Pathfinder Song</h3>
                            <ul class="bullet-points">
                                <li>Written by Henry T. Bergh in 1949</li>
                                <li>Translated into many languages worldwide</li>
                                <li>Sung at gatherings and ceremonies globally</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the significance of Pathfinder symbols, pledge, law, and song."
        },
        {
            id: 7,
            title: "Practical Application & Activities",
            content: `
                <h1 class="slide-title animate-in">Application & Activities</h1>
                <div class="slide-content">
                    <div class="application-content">
                        <div class="activity-item animate-in" data-delay="200">
                            <h3>💬 Group Discussion</h3>
                            <ul class="bullet-points">
                                <li>Discuss specific ways staff can meet Pathfinder goals</li>
                                <li>Focus on action words in goals and objectives</li>
                                <li>Share practical implementation ideas</li>
                            </ul>
                        </div>
                        <div class="activity-item animate-in" data-delay="400">
                            <h3>📝 Personal Commitment</h3>
                            <ul class="bullet-points">
                                <li>Write three ways to personally emulate Pathfinder goals</li>
                                <li>Create actionable plans for local club</li>
                                <li>Set personal ministry objectives</li>
                            </ul>
                        </div>
                        <div class="activity-item animate-in" data-delay="600">
                            <h3>🕰️ Timeline Activity</h3>
                            <ul class="bullet-points">
                                <li>Create physical timeline with key historical events</li>
                                <li>Include local conference dates of interest</li>
                                <li>Practice Pathfinder ceremonies and traditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide practical activities for applying Pathfinder principles in local clubs."
        }
    ]
};