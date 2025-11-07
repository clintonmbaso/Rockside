// Presentation data structure
const presentationData05 = {
    title: "Mentoring - Seminar 5",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Mentoring - Empowerment of Youth",
            content: `
                <h1 class="slide-title animate-in">Mentoring - Empowerment of Youth</h1>
                <div class="slide-content">
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mentoring" class="slide-image animate-in" data-delay="200">
                    </div>
                    <p class="animate-in" data-delay="400">Empowering the next generation through intentional relationships</p>
                </div>
            `,
            notes: "Introduce the mentoring seminar theme and set the context for youth empowerment."
        },
        {
            id: 2,
            title: "Introduction - The Power of Connection",
            content: `
                <h1 class="slide-title animate-in">The Power of Connection</h1>
                <div class="slide-content">
                    <div class="key-points">
                        <div class="point-item animate-in" data-delay="200">
                            <h3>🔗 Starts with Authentic Relationships</h3>
                            <p>Connecting with young people opens up spiritual leadership opportunities</p>
                        </div>
                        <div class="point-item animate-in" data-delay="400">
                            <h3>🛡️ Protective Factor</h3>
                            <p>Youth with mentoring relationships are less likely to engage in delinquent behavior</p>
                        </div>
                        <div class="point-item animate-in" data-delay="600">
                            <h3>🧠 Self-Awareness First</h3>
                            <p>The mentor must know themselves before guiding others</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Emphasize the importance of authentic relationships and the mentor's self-awareness."
        },
        {
            id: 3,
            title: "The Current Reality in Church",
            content: `
                <h1 class="slide-title animate-in">The Current Church Reality</h1>
                <div class="slide-content">
                    <div class="contrast-section">
                        <div class="problem-side animate-in" data-delay="200">
                            <h3>⚠️ The Problem:</h3>
                            <ul class="bullet-points">
                                <li>Little space for young people in church life</li>
                                <li>Youth are 60-90% of membership but underrepresented</li>
                            </ul>
                        </div>
                        <div class="result-side animate-in" data-delay="400">
                            <h3>📉 The Result:</h3>
                            <ul class="bullet-points">
                                <li>Youth less interested in church activities</li>
                                <li>Loss of commitment and young members</li>
                                <li>Disconnected from church leadership</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Highlight the gap between youth population and their involvement in church leadership."
        },
        {
            id: 4,
            title: "Seminar Objectives",
            content: `
                <h1 class="slide-title animate-in">Seminar Objectives</h1>
                <div class="slide-content">
                    <div class="objectives-list">
                        <div class="objective-item animate-in" data-delay="200">
                            <h3>🎯 Understand the Need</h3>
                            <p>To "pass it on" to youth in all church sectors</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="400">
                            <h3>📖 Know Scriptural Bases</h3>
                            <p>Biblical foundation for youth involvement and authentic relationships</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="600">
                            <h3>🛠️ Know the Steps</h3>
                            <p>Process for working with young people for better results</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="800">
                            <h3>❤️ Embrace Mentoring</h3>
                            <p>As a lifetime process, not just an event</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline the four main objectives of the mentoring seminar."
        },
        {
            id: 5,
            title: "Biblical Foundation - Youth Empowerment",
            content: `
                <h1 class="slide-title animate-in">Biblical Foundation</h1>
                <div class="slide-content">
                    <div class="scripture-section">
                        <div class="scripture-item animate-in" data-delay="200">
                            <h3>Psalm 144:12</h3>
                            <p>"Let our sons in their youth be as grown-up plants, and our daughters as corner pillars fashioned as for a palace"</p>
                        </div>
                        <div class="scripture-item animate-in" data-delay="400">
                            <h3>Proverbs 20:29</h3>
                            <p>"Strength is the glory of young people"</p>
                        </div>
                        <div class="scripture-item animate-in" data-delay="600">
                            <h3>1 John 2:14</h3>
                            <p>"I have written to you, young men, because you are strong, and the word of God dwells in you"</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share key scriptures that emphasize youth strength and potential."
        },
        {
            id: 6,
            title: "Spirit of Prophecy Guidance",
            content: `
                <h1 class="slide-title animate-in">Spirit of Prophecy Guidance</h1>
                <div class="slide-content">
                    <div class="sop-quotes">
                        <div class="quote-item animate-in" data-delay="200">
                            <h3>📖 Testimonies, Vol. 6, p.435</h3>
                            <p>"Let not the youth be ignored; let them share in the labors and responsibility. Let them feel they are part of the act in helping and blessing others"</p>
                        </div>
                        <div class="quote-item animate-in" data-delay="400">
                            <h3>📖 Pastoral Ministry, p.275</h3>
                            <p>"Very much has been lost to the cause of God because of inattention to the young... it is accounted of Heaven a great neglect of duty"</p>
                        </div>
                        <div class="quote-item animate-in" data-delay="600">
                            <h3>📖 Messages to Young People, p.21</h3>
                            <p>"God wants the youth to become men of earnest mind, to be prepared for action in His noble work, and fitted to bear responsibilities"</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present Spirit of Prophecy counsel on youth involvement and mentoring."
        },
        {
            id: 7,
            title: "Empowerment Through Responsibility",
            content: `
                <h1 class="slide-title animate-in">Empowerment Through Responsibility</h1>
                <div class="slide-content">
                    <div class="empowerment-list">
                        <div class="empowerment-item animate-in" data-delay="200">
                            <h3>🎯 Give Them Responsibilities</h3>
                            <ul class="bullet-points">
                                <li>Involve them in church life</li>
                                <li>Help them grow in knowledge</li>
                                <li>Give opportunities for initiative</li>
                            </ul>
                        </div>
                        <div class="empowerment-item animate-in" data-delay="400">
                            <h3>🔑 Provide Authority</h3>
                            <ul class="bullet-points">
                                <li>Implement programs with them</li>
                                <li>Allow them to make mistakes</li>
                                <li>Guide gently through challenges</li>
                            </ul>
                        </div>
                        <div class="empowerment-item animate-in" data-delay="600">
                            <h3>🤝 Welcome Their Input</h3>
                            <ul class="bullet-points">
                                <li>Listen outside "our boxes"</li>
                                <li>Learn from them - symbiotic relationship</li>
                                <li>Don't control their growth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain practical ways to empower youth through responsibility and authority."
        },
        {
            id: 8,
            title: "What is Mentoring?",
            content: `
                <h1 class="slide-title animate-in">What is Mentoring?</h1>
                <div class="slide-content">
                    <div class="mentoring-definitions">
                        <div class="definition-item animate-in" data-delay="200">
                            <h3>📚 Intentional Relationship</h3>
                            <p>Created between less experienced and experienced persons</p>
                            <p>The experienced becomes a growth model for the inexperienced</p>
                        </div>
                        <div class="definition-item animate-in" data-delay="400">
                            <h3>🤝 David Clutterbuck's Definition</h3>
                            <p>"A mentor is a more experienced individual willing to share knowledge with someone less experienced in a relationship of mutual trust"</p>
                        </div>
                        <div class="definition-item animate-in" data-delay="600">
                            <h3>💡 Key Elements</h3>
                            <ul class="bullet-points">
                                <li>Intentional relationship building</li>
                                <li>Knowledge sharing</li>
                                <li>Mutual trust and respect</li>
                                <li>Growth modeling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Define mentoring and its key components for effective implementation."
        },
        {
            id: 9,
            title: "Biblical Mentoring Model - Moses & Joshua",
            content: `
                <h1 class="slide-title animate-in">Biblical Model: Moses & Joshua</h1>
                <div class="slide-content">
                    <div class="biblical-model">
                        <div class="model-step animate-in" data-delay="200">
                            <h3>⏰ Early Preparation</h3>
                            <p>Exodus 17:8-9 - Joshua given responsibility 40 years earlier</p>
                            <p>Moses involved Joshua in leadership from the beginning</p>
                        </div>
                        <div class="model-step animate-in" data-delay="400">
                            <h3>🔄 Smooth Transition</h3>
                            <p>Deuteronomy 34:9 - Joshua filled with spirit of wisdom</p>
                            <p>No leadership crisis because of preparation</p>
                        </div>
                        <div class="model-step animate-in" data-delay="600">
                            <h3>📝 Written Legacy</h3>
                            <p>Exodus 17:14 - "Write this... make sure Joshua hears it"</p>
                            <p>Intentional knowledge transfer</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Use Moses and Joshua as the prime biblical example of effective mentoring."
        },
        {
            id: 10,
            title: "Holistic Mentoring Approach",
            content: `
                <h1 class="slide-title animate-in">Holistic Mentoring Approach</h1>
                <div class="slide-content">
                    <div class="holistic-grid">
                        <div class="aspect-item animate-in" data-delay="200">
                            <h3>🙏 Spiritual Accompaniment</h3>
                            <ul class="bullet-points">
                                <li>Praying with them</li>
                                <li>Life example</li>
                                <li>Practical activities</li>
                            </ul>
                        </div>
                        <div class="aspect-item animate-in" data-delay="400">
                            <h3>💝 Moral Accompaniment</h3>
                            <ul class="bullet-points">
                                <li>Help them "cleanse their way"</li>
                                <li>Guidance in choices</li>
                                <li>Relationship support</li>
                            </ul>
                        </div>
                        <div class="aspect-item animate-in" data-delay="600">
                            <h3>👥 Social Support</h3>
                            <ul class="bullet-points">
                                <li>Nuclear family</li>
                                <li>School family</li>
                                <li>Church family</li>
                            </ul>
                        </div>
                        <div class="aspect-item animate-in" data-delay="800">
                            <h3>🤝 Commitment Building</h3>
                            <ul class="bullet-points">
                                <li>Life of commitment</li>
                                <li>Service orientation</li>
                                <li>Church connection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the comprehensive approach to mentoring covering all life aspects."
        },
        {
            id: 11,
            title: "Practical Mentoring Opportunities",
            content: `
                <h1 class="slide-title animate-in">Practical Mentoring Opportunities</h1>
                <div class="slide-content">
                    <div class="opportunities-grid">
                        <div class="role-item animate-in" data-delay="200">
                            <h3>🎵 Choir Director</h3>
                            <p>Mentor in music ministry and worship leadership</p>
                        </div>
                        <div class="role-item animate-in" data-delay="400">
                            <h3>📖 Sabbath School Leader</h3>
                            <p>Develop teaching and facilitation skills</p>
                        </div>
                        <div class="role-item animate-in" data-delay="600">
                            <h3>👨‍💼 Elder or Pastor</h3>
                            <p>Shadow church leadership and administration</p>
                        </div>
                        <div class="role-item animate-in" data-delay="800">
                            <h3>🌟 Youth Ministries</h3>
                            <p>Peer leadership and event planning</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Show specific church roles where mentoring can be implemented practically."
        },
        {
            id: 12,
            title: "Progressive Empowerment Process",
            content: `
                <h1 class="slide-title animate-in">Progressive Empowerment Process</h1>
                <div class="slide-content">
                    <div class="progressive-steps">
                        <div class="step-item animate-in" data-delay="200">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3>Try the Youth</h3>
                                <p>Give them opportunities to serve in the church</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="400">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3>Give Them Keys</h3>
                                <p>Provide access and authority in their areas of service</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="600">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3>Let Them Drive</h3>
                                <p>Allow them to lead and make decisions</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="800">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h3>Support Through Mistakes</h3>
                                <p>Guide gently when errors occur - it's part of learning</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="1000">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h3>Build Belonging</h3>
                                <p>Give them sense of ownership in church family</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline the step-by-step process for gradually empowering youth in leadership."
        },
        {
            id: 13,
            title: "Action Steps - What to Do",
            content: `
                <h1 class="slide-title animate-in">Action Steps - What to Do</h1>
                <div class="slide-content">
                    <div class="action-steps">
                        <div class="action-item animate-in" data-delay="200">
                            <h3>1. Community Will</h3>
                            <p>Develop strong congregational commitment to welcome youth</p>
                        </div>
                        <div class="action-item animate-in" data-delay="400">
                            <h3>2. Trained Mentors</h3>
                            <p>Develop dedicated and trained mentors in the congregation</p>
                        </div>
                        <div class="action-item animate-in" data-delay="600">
                            <h3>3. Invite Participation</h3>
                            <p>Include youth in events that strengthen them spiritually, intellectually, physically</p>
                        </div>
                        <div class="action-item animate-in" data-delay="800">
                            <h3>4. Allow Leadership</h3>
                            <p>Encourage them to organize activities, camps, sports events</p>
                        </div>
                        <div class="action-item animate-in" data-delay="1000">
                            <h3>5. Give Opportunities</h3>
                            <p>Provide chances to lead church programs and services</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide concrete action steps for implementing mentoring in local churches."
        },
        {
            id: 14,
            title: "More Action Steps",
            content: `
                <h1 class="slide-title animate-in">More Action Steps</h1>
                <div class="slide-content">
                    <div class="action-steps">
                        <div class="action-item animate-in" data-delay="200">
                            <h3>6. Appoint in Positions</h3>
                            <p>Place young people in diverse church positions and train them</p>
                        </div>
                        <div class="action-item animate-in" data-delay="400">
                            <h3>7. Value Them</h3>
                            <p>Verbally affirm and demonstrate their worth</p>
                        </div>
                        <div class="action-item animate-in" data-delay="600">
                            <h3>8. Invest Time</h3>
                            <p>Be accessible and spend quality time with them</p>
                        </div>
                        <div class="action-item animate-in" data-delay="800">
                            <h3>9. Be Real</h3>
                            <p>It's OK to be vulnerable and authentic</p>
                        </div>
                        <div class="action-item animate-in" data-delay="1000">
                            <h3>10. Stay True to Principles</h3>
                            <p>Methodology can be altered but principles remain</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Continue with additional practical steps for effective mentoring."
        },
        {
            id: 15,
            title: "Benefits of Mentoring - Part 1",
            content: `
                <h1 class="slide-title animate-in">Benefits of Mentoring</h1>
                <div class="slide-content">
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Function</th>
                                    <th>Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Instills Positive Values</strong></td>
                                    <td>Values learned from different adult perspective</td>
                                </tr>
                                <tr>
                                    <td><strong>Develops Individual Potential</strong></td>
                                    <td>Recognizes hidden potential beyond family view</td>
                                </tr>
                                <tr>
                                    <td><strong>Improves Self-Confidence</strong></td>
                                    <td>Builds self-concept through valued relationships</td>
                                </tr>
                                <tr>
                                    <td><strong>Provides Opportunities</strong></td>
                                    <td>Offers new perspectives without bias</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            notes: "Present the first set of mentoring benefits in table format for clarity."
        },
        {
            id: 16,
            title: "Benefits of Mentoring - Part 2",
            content: `
                <h1 class="slide-title animate-in">More Benefits of Mentoring</h1>
                <div class="slide-content">
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Function</th>
                                    <th>Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Shows a Model</strong></td>
                                    <td>Encourages service through example</td>
                                </tr>
                                <tr>
                                    <td><strong>Decreases Self-Centeredness</strong></td>
                                    <td>Reduces need for self-gratification through built esteem</td>
                                </tr>
                                <tr>
                                    <td><strong>Brings Accountability</strong></td>
                                    <td>Offers security through voluntary accountability</td>
                                </tr>
                                <tr>
                                    <td><strong>Develops Resilience</strong></td>
                                    <td>Provides support system during difficult situations</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            notes: "Continue with additional benefits of mentoring relationships."
        },
        {
            id: 17,
            title: "Practical Activities",
            content: `
                <h1 class="slide-title animate-in">Practical Activities</h1>
                <div class="slide-content">
                    <div class="activities-list">
                        <div class="activity-item animate-in" data-delay="200">
                            <h3>1. Youth Inventory</h3>
                            <p>Survey church departments and report youth appointments in each area</p>
                        </div>
                        <div class="activity-item animate-in" data-delay="400">
                            <h3>2. Involvement Assessment</h3>
                            <p>Report youth involvement in church's spiritual programs during the quarter</p>
                        </div>
                        <div class="activity-item animate-in" data-delay="600">
                            <h3>3. Youth-Led Event</h3>
                            <p>Organize church activity led by youth for entire congregation (at least yearly)</p>
                        </div>
                        <div class="activity-item animate-in" data-delay="800">
                            <h3>4. One-on-One Mentoring</h3>
                            <p>Choose one young person to mentor for a year with quarterly progress reports</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide actionable activities for immediate implementation in local churches."
        },
        {
            id: 18,
            title: "Conclusion",
            content: `
                <h1 class="slide-title animate-in">Conclusion</h1>
                <div class="slide-content">
                    <div class="conclusion-content">
                        <div class="key-point animate-in" data-delay="200">
                            <h3>💪 Youth Strengths</h3>
                            <p>Young people have plenty of strength, energy, ideas, and time</p>
                        </div>
                        <div class="key-point animate-in" data-delay="400">
                            <h3>🤝 Willing Commitment</h3>
                            <p>They can commit fully to church work, often free of charge</p>
                        </div>
                        <div class="key-point animate-in" data-delay="600">
                            <h3>🔗 Build Loyalty</h3>
                            <p>The sooner youth feel needed and important, the more loyal they become</p>
                        </div>
                        <div class="key-point animate-in" data-delay="800">
                            <h3>🚫 Prevent Departure</h3>
                            <p>Connected, valued youth are less likely to leave the church</p>
                        </div>
                    </div>
                    
                    <div class="final-challenge animate-in" data-delay="1000">
                        <p><strong>Challenge:</strong> Identify one young person to mentor this month and begin the journey of empowerment.</p>
                    </div>
                </div>
            `,
            notes: "Summarize key points and issue a challenge for immediate action in mentoring."
        }
    ]
};