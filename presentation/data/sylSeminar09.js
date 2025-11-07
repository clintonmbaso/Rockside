// Presentation data structure
const presentationData09 = {
    title: "Youth Outreach - Seminar 9",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Youth Outreach - Core Philosophy & Mission",
            content: `
                <h1 class="slide-title animate-in">Youth Outreach Philosophy</h1>
                <div class="slide-content">
                    <div class="mission-content">
                        <div class="mission-item animate-in" data-delay="200">
                            <h3>📋 Our Purpose</h3>
                            <ul class="bullet-points">
                                <li>Proclaim the "Good News" of the Gospel</li>
                                <li>Bring joy and hope found in Christ</li>
                                <li>Focus on solutions, not just problems</li>
                            </ul>
                        </div>
                        <div class="mission-item animate-in" data-delay="400">
                            <h3>🎯 Youth's Dual Role</h3>
                            <ul class="bullet-points">
                                <li><strong>BE evangelized</strong> - Receive the Gospel</li>
                                <li><strong>BECOME evangelists</strong> - Share the Gospel</li>
                                <li>Youth programs must reflect this mission</li>
                            </ul>
                        </div>
                    </div>
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Youth mission" class="slide-image animate-in" data-delay="600">
                    </div>
                </div>
            `,
            notes: "Introduce the core philosophy and mission of youth outreach. Emphasize the dual role of evangelizing and empowering youth."
        },
        {
            id: 2,
            title: "Key Objectives & Evangelism Methods",
            content: `
                <h1 class="slide-title animate-in">Objectives & Evangelism Methods</h1>
                <div class="slide-content">
                    <div class="objectives-section animate-in" data-delay="200">
                        <h3>🎯 Seminar Objectives:</h3>
                        <ul class="bullet-points">
                            <li>Explore various forms of evangelism</li>
                            <li>Motivate youth to experiment with methods</li>
                            <li>Help each person discover their unique gifting</li>
                            <li>Find their place in God's mission</li>
                        </ul>
                    </div>
                    
                    <div class="methods-overview animate-in" data-delay="400">
                        <h3>🛠️ Four Primary Methods:</h3>
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Method</th>
                                        <th>Core Approach</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>1. Relational</strong></td>
                                        <td>Friendship-based evangelism</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2. Small Groups</strong></td>
                                        <td>Community building evangelism</td>
                                    </tr>
                                    <tr>
                                        <td><strong>3. Community Service</strong></td>
                                        <td>Needs-based evangelism</td>
                                    </tr>
                                    <tr>
                                        <td><strong>4. Public Proclamation</strong></td>
                                        <td>Traditional evangelism</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the key objectives and introduce the four primary evangelism methods. Emphasize the diversity of approaches."
        },
        {
            id: 3,
            title: "Relational & Small Group Evangelism",
            content: `
                <h1 class="slide-title animate-in">Relational & Small Group Methods</h1>
                <div class="slide-content">
                    <div class="method-details">
                        <div class="method-detail animate-in" data-delay="200">
                            <h3>🤝 Relational (Friendship) Evangelism</h3>
                            <ul class="bullet-points">
                                <li><strong>Most natural method</strong> - uses existing friendships</li>
                                <li><strong>Core action:</strong> Christ-like behavior toward friends</li>
                                <li><strong>Key principle:</strong> Love in action speaks louder than words</li>
                                <li><strong>Result:</strong> Friends see Jesus through your life</li>
                            </ul>
                        </div>
                        
                        <div class="method-detail animate-in" data-delay="400">
                            <h3>👥 Small Groups Evangelism</h3>
                            <ul class="bullet-points">
                                <li><strong>Structured community building</strong></li>
                                <li><strong>Activities:</strong> Singing, Bible study, prayer, sharing</li>
                                <li><strong>Creates safe space</strong> for spiritual exploration</li>
                                <li><strong>Perfect entry point</strong> for friends to join</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Small group discussion" class="slide-image animate-in" data-delay="600">
                    </div>
                </div>
            `,
            notes: "Detail relational and small group evangelism methods. Emphasize natural friendship evangelism and safe community building."
        },
        {
            id: 4,
            title: "Service & Public Evangelism Methods",
            content: `
                <h1 class="slide-title animate-in">Service & Public Evangelism</h1>
                <div class="slide-content">
                    <div class="method-details">
                        <div class="method-detail animate-in" data-delay="200">
                            <h3>🛠️ Local Community Service</h3>
                            <ul class="bullet-points">
                                <li><strong>Meets youth's need "to be needed"</strong></li>
                                <li><strong>Focus on "Jerusalem"</strong> - local community</li>
                                <li><strong>Target areas:</strong> Schools, neighborhoods, local needs</li>
                                <li><strong>Foundation:</strong> Christ's love in action</li>
                                <li><strong>Result:</strong> Gospel becomes tangible and visible</li>
                            </ul>
                        </div>
                        
                        <div class="method-detail animate-in" data-delay="400">
                            <h3>📢 Public Proclamation</h3>
                            <ul class="bullet-points">
                                <li><strong>Traditional evangelism model</strong></li>
                                <li><strong>Examples:</strong> Public meetings, crusades</li>
                                <li><strong>Most effective when:</strong> Built on relational foundation</li>
                                <li><strong>Requires:</strong> Previous friendship and service</li>
                                <li><strong>Result:</strong> Comprehensive approach to evangelism</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain service-oriented and public proclamation evangelism. Emphasize that public evangelism works best when built on relational foundations."
        },
        {
            id: 5,
            title: "Guiding Principles for Implementation",
            content: `
                <h1 class="slide-title animate-in">Guiding Principles</h1>
                <div class="slide-content">
                    <div class="principles-list">
                        <div class="principle-item animate-in" data-delay="200">
                            <h3>🎉 Celebrate Diversity</h3>
                            <ul class="bullet-points">
                                <li>Present all methods positively</li>
                                <li>Evangelism should be joyful</li>
                                <li>Both messenger and receiver should be blessed</li>
                            </ul>
                        </div>
                        <div class="principle-item animate-in" data-delay="400">
                            <h3>💝 Discover Spiritual Gifts</h3>
                            <ul class="bullet-points">
                                <li>Guide youth to find their gifts</li>
                                <li>Align methods with God-given talents</li>
                                <li>More effective and fulfilling</li>
                            </ul>
                        </div>
                        <div class="principle-item animate-in" data-delay="600">
                            <h3>💬 Foster Dialogue</h3>
                            <ul class="bullet-points">
                                <li>Dialogue instead of commands</li>
                                <li>Analyze local context together</li>
                                <li>Customize methods to community needs</li>
                            </ul>
                        </div>
                        <div class="principle-item animate-in" data-delay="800">
                            <h3>⛪ Follow Christ's Method</h3>
                            <ul class="bullet-points">
                                <li>Mingle with people</li>
                                <li>Show genuine sympathy</li>
                                <li>Minister to their needs</li>
                                <li>Win their confidence</li>
                                <li>Then invite to follow Jesus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the guiding principles for effective evangelism implementation. Emphasize diversity, gift discovery, and Christ's method."
        },
        {
            id: 6,
            title: "The Prophetic Role of Youth",
            content: `
                <h1 class="slide-title animate-in">Youth's Prophetic Role</h1>
                <div class="slide-content">
                    <div class="prophetic-role">
                        <div class="role-point animate-in" data-delay="200">
                            <h3>🌍 Called to Finish the Mission</h3>
                            <ul class="bullet-points">
                                <li>Youth complete global church mission</li>
                                <li>Essential partners in God's work</li>
                                <li>Not just future leaders - present warriors</li>
                            </ul>
                        </div>
                        <div class="role-point animate-in" data-delay="400">
                            <h3>🎙️ Best Interpreters</h3>
                            <ul class="bullet-points">
                                <li>Understand their generation best</li>
                                <li>Speak the language of peers</li>
                                <li>Bridge between generations</li>
                            </ul>
                        </div>
                        <div class="role-point animate-in" data-delay="600">
                            <h3>🌡️ Thermostat, Not Thermometer</h3>
                            <ul class="bullet-points">
                                <li><strong>Thermometer:</strong> Measures temperature (observes)</li>
                                <li><strong>Thermostat:</strong> Changes temperature (influences)</li>
                                <li>Youth are called to be change-makers</li>
                            </ul>
                        </div>
                        <div class="role-point animate-in" data-delay="800">
                            <h3>👨‍🏫 Leader's Privilege</h3>
                            <ul class="bullet-points">
                                <li>Cultivate passion in youth</li>
                                <li>Guide holistic participation</li>
                                <li>Empower, don't control</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Youth leadership" class="slide-image animate-in" data-delay="1000">
                    </div>
                </div>
            `,
            notes: "Explain the prophetic role of youth in mission. Emphasize their unique position as interpreters and influencers of their generation."
        },
        {
            id: 7,
            title: "Practical Application & Action Steps",
            content: `
                <h1 class="slide-title animate-in">Practical Application</h1>
                <div class="slide-content">
                    <div class="application-steps">
                        <div class="application-step animate-in" data-delay="200">
                            <h3>💬 Discussion Activity</h3>
                            <ul class="bullet-points">
                                <li>In pairs or small groups</li>
                                <li>Assess current methods being used</li>
                                <li>Identify methods to develop further</li>
                                <li>Share experiences and ideas</li>
                            </ul>
                        </div>
                        <div class="application-step animate-in" data-delay="400">
                            <h3>📝 Action Planning</h3>
                            <ul class="bullet-points">
                                <li>Create concrete implementation plans</li>
                                <li>List 2+ ways to encourage each method</li>
                                <li>Set timelines and responsibilities</li>
                                <li>Make it measurable and achievable</li>
                            </ul>
                        </div>
                        <div class="application-step animate-in" data-delay="600">
                            <h3>🔍 Self-Assessment</h3>
                            <ul class="bullet-points">
                                <li>Use online spiritual gifts assessment</li>
                                <li>Discover personal evangelism style</li>
                                <li>Identify areas for growth</li>
                                <li>Align gifts with ministry opportunities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide practical application steps and activities. Encourage immediate implementation and self-assessment."
        },
        {
            id: 8,
            title: "Key Takeaways & Conclusion",
            content: `
                <h1 class="slide-title animate-in">Key Takeaways</h1>
                <div class="slide-content">
                    <div class="takeaways-section">
                        <div class="learner-takeaway animate-in" data-delay="200">
                            <h3>🎯 For Learners:</h3>
                            <ul class="bullet-points">
                                <li>Your role in sharing Gospel is VITAL and PERSONAL</li>
                                <li>Discover your spiritual gifts</li>
                                <li>Engage in diverse methods</li>
                                <li>Start where you're comfortable</li>
                                <li>Be open to God's leading</li>
                                <li>You are Christ's "helping hand"</li>
                            </ul>
                        </div>
                        
                        <div class="instructor-takeaway animate-in" data-delay="400">
                            <h3>👨‍🏫 For Instructors:</h3>
                            <ul class="bullet-points">
                                <li>Your role: CULTIVATE, not command</li>
                                <li>Facilitate self-discovery</li>
                                <li>Encourage experimentation</li>
                                <li>Create joyful environment</li>
                                <li>Measure success by empowered participation</li>
                                <li>Help youth use unique gifts</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="final-challenge animate-in" data-delay="600">
                        <h3>🏁 Final Challenge:</h3>
                        <ul class="bullet-points">
                            <li>Implement ONE new outreach method this month</li>
                            <li>Share results with others</li>
                            <li>Encourage fellow youth leaders</li>
                            <li>Keep the momentum going!</li>
                        </ul>
                    </div>
                </div>
            `,
            notes: "Summarize key takeaways for both learners and instructors. Issue a practical challenge for implementation."
        }
    ]
};