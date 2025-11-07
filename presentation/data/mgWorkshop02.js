// Presentation data structure
const presentationData12 = {
    title: "Club Organization - PFAD 002",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Club Organization Overview",
            content: `
                <h1 class="slide-title animate-in">Club Organization Fundamentals</h1>
                <div class="slide-content">
                    <div class="overview-content">
                        <div class="overview-item animate-in" data-delay="200">
                            <h3>🎯 Workshop Objectives</h3>
                            <ul class="bullet-points">
                                <li>Understand steps to start/restart a Pathfinder Club</li>
                                <li>Learn club staff tasks and organization structure</li>
                                <li>Know Pathfinder uniform components and costs</li>
                                <li>Master club merit system and award determination</li>
                            </ul>
                        </div>
                        <div class="overview-item animate-in" data-delay="400">
                            <h3>📋 Getting Started</h3>
                            <ul class="bullet-points">
                                <li>Meet with pastor and conference leaders regularly</li>
                                <li>Follow local conference guidelines</li>
                                <li>Build church support and enthusiasm</li>
                                <li>Create sustainable foundation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Introduce club organization fundamentals and workshop objectives for new Pathfinder staff."
        },
        {
            id: 2,
            title: "Starting a Pathfinder Club",
            content: `
                <h1 class="slide-title animate-in">Launching Your Club Ministry</h1>
                <div class="slide-content">
                    <div class="launch-content">
                        <div class="launch-item animate-in" data-delay="200">
                            <h3>⛪ Church Board Approval Process</h3>
                            <ul class="bullet-points">
                                <li><strong>Required:</strong> Church board approval with recorded minutes</li>
                                <li><strong>Action:</strong> Work with pastor to create proposal</li>
                                <li><strong>Documentation:</strong> Obtain board member signatures</li>
                                <li><strong>Certification:</strong> Submit form for Certificate of Operation</li>
                            </ul>
                        </div>
                        <div class="launch-item animate-in" data-delay="400">
                            <h3>👥 Building Your Team</h3>
                            <ul class="bullet-points">
                                <li>Recruit church members as active staff</li>
                                <li>Share vision for youth and community impact</li>
                                <li>Invite area coordinator to staff meetings</li>
                                <li>Build enthusiasm through shared purpose</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the process for obtaining church approval and building initial leadership team."
        },
        {
            id: 3,
            title: "Recruitment & Church Support",
            content: `
                <h1 class="slide-title animate-in">Recruitment & Church Engagement</h1>
                <div class="slide-content">
                    <div class="recruitment-content">
                        <div class="recruitment-item animate-in" data-delay="200">
                            <h3>📢 Pathfinder Recruitment</h3>
                            <ul class="bullet-points">
                                <li>Announce during worship services</li>
                                <li>Build congregational support and enthusiasm</li>
                                <li>Meet with potential Pathfinders and parents</li>
                                <li>Share club plans and annual calendar</li>
                            </ul>
                        </div>
                        <div class="recruitment-item animate-in" data-delay="400">
                            <h3>🤝 Church Community Support</h3>
                            <ul class="bullet-points">
                                <li>Identify uniform sponsors</li>
                                <li>Recruit honor instructors</li>
                                <li>Engage fundraising helpers</li>
                                <li>Complete conference registration forms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover strategies for recruiting Pathfinders and engaging church community support."
        },
        {
            id: 4,
            title: "Staff Organization & Leadership",
            content: `
                <h1 class="slide-title animate-in">Staff Structure & Leadership</h1>
                <div class="slide-content">
                    <div class="staff-content">
                        <div class="staff-item animate-in" data-delay="200">
                            <h3>🏗️ Leadership Team Structure</h3>
                            <ul class="bullet-points">
                                <li><strong>Director</strong> - Overall leadership</li>
                                <li><strong>Deputy Director(s)</strong> - Support role</li>
                                <li><strong>Unit Counselors</strong> - Direct youth guidance</li>
                                <li><strong>Instructors</strong> - Skill and honor teaching</li>
                                <li><strong>Secretary & Treasurer</strong> - Administrative support</li>
                            </ul>
                        </div>
                        <div class="staff-item animate-in" data-delay="400">
                            <h3>✅ Staff Training & Approval</h3>
                            <ul class="bullet-points">
                                <li>All volunteers must complete basic training</li>
                                <li>Conference approval required before service</li>
                                <li>Continuing education available</li>
                                <li>Follow conference volunteer guidelines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Detail staff organization structure and training requirements for volunteers."
        },
        {
            id: 5,
            title: "Qualities of Effective Leaders",
            content: `
                <h1 class="slide-title animate-in">Servant Leadership Qualities</h1>
                <div class="slide-content">
                    <div class="qualities-content">
                        <div class="qualities-grid">
                            <div class="quality-item animate-in" data-delay="200">
                                <h4>❤️ Spiritual Foundation</h4>
                                <ul class="bullet-points">
                                    <li>Love God supremely</li>
                                    <li>Love children sincerely</li>
                                    <li>Serve with enthusiasm</li>
                                </ul>
                            </div>
                            <div class="quality-item animate-in" data-delay="300">
                                <h4>🎯 Personal Characteristics</h4>
                                <ul class="bullet-points">
                                    <li>Emotional stability</li>
                                    <li>Sense of humor</li>
                                    <li>Dignity of presence</li>
                                </ul>
                            </div>
                            <div class="quality-item animate-in" data-delay="400">
                                <h4>🌳 Outdoor & Skills</h4>
                                <ul class="bullet-points">
                                    <li>Enjoy being outdoors</li>
                                    <li>Learn variety of skills</li>
                                    <li>Resourceful and creative</li>
                                </ul>
                            </div>
                            <div class="quality-item animate-in" data-delay="500">
                                <h4>👥 Relational Skills</h4>
                                <ul class="bullet-points">
                                    <li>Understand adolescent characteristics</li>
                                    <li>Maintain good team relations</li>
                                    <li>Strong organizational ability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Highlight the essential qualities of effective Pathfinder leaders and role models."
        },
        {
            id: 6,
            title: "Club Budget & Uniform Management",
            content: `
                <h1 class="slide-title animate-in">Financial & Uniform Management</h1>
                <div class="slide-content">
                    <div class="management-content">
                        <div class="management-item animate-in" data-delay="200">
                            <h3>💰 Club Budget Essentials</h3>
                            <ul class="bullet-points">
                                <li>Every successful club operates with a budget</li>
                                <li>Treasurer cooperates with church treasurer</li>
                                <li>Staff awareness of financial operations</li>
                                <li><strong>Golden Rule:</strong> Expenses never exceed income</li>
                            </ul>
                        </div>
                        <div class="management-item animate-in" data-delay="400">
                            <h3>👕 Uniform Standards & Costs</h3>
                            <ul class="bullet-points">
                                <li>Review purpose and proper wearing occasions</li>
                                <li>Follow GC and local conference standards</li>
                                <li>Calculate costs for Pathfinders and adults</li>
                                <li>Develop uniform funding strategies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover budget management principles and uniform standards with cost considerations."
        },
        {
            id: 7,
            title: "Merit System & Awards",
            content: `
                <h1 class="slide-title animate-in">Recognition & Awards System</h1>
                <div class="slide-content">
                    <div class="awards-content">
                        <div class="awards-item animate-in" data-delay="200">
                            <h3>🏆 Award System Overview</h3>
                            <ul class="bullet-points">
                                <li><strong>Good Conduct Award</strong> - Behavior and participation</li>
                                <li><strong>Pathfinder of the Year</strong> - Overall excellence</li>
                                <li><strong>Investiture Service</strong> - Formal recognition event</li>
                                <li>Complete AY Achievement levels and honors</li>
                            </ul>
                        </div>
                        <div class="awards-item animate-in" data-delay="400">
                            <h3>📊 Merit System Implementation</h3>
                            <ul class="bullet-points">
                                <li>Each club develops own point values</li>
                                <li>Staff agreement on system parameters</li>
                                <li>Clear communication to Pathfinders and parents</li>
                                <li><strong>Key Principle:</strong> Simplicity ensures effectiveness</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the merit system for fair award determination and recognition programs."
        },
        {
            id: 8,
            title: "Practical Application & Activities",
            content: `
                <h1 class="slide-title animate-in">Hands-On Application</h1>
                <div class="slide-content">
                    <div class="application-content">
                        <div class="activity-item animate-in" data-delay="200">
                            <h3>📈 Organizational Activities</h3>
                            <ul class="bullet-points">
                                <li>Draw club flow chart with specific position names</li>
                                <li>Review sample budgets and income sources</li>
                                <li>Calculate uniform costs for your club</li>
                                <li>Practice opening ceremonies</li>
                            </ul>
                        </div>
                        <div class="activity-item animate-in" data-delay="400">
                            <h3>📝 Implementation Planning</h3>
                            <ul class="bullet-points">
                                <li>Identify specific staff roles of interest</li>
                                <li>Develop uniform funding strategy</li>
                                <li>Create club merit system framework</li>
                                <li>Plan staff training schedule</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide practical activities for implementing club organization principles."
        }
    ]
};