// Presentation data structure
const presentationData07 = {
    title: "Creative Youth Ministry - Seminar 7",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Creative Youth Ministry",
            content: `
                <h1 class="slide-title animate-in">Creative Youth Ministry</h1>
                <div class="slide-content">
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Creative Ministry" class="slide-image animate-in" data-delay="200">
                    </div>
                    <p class="animate-in" data-delay="400">Thinking Outside the Box for Effective Youth Programming</p>
                </div>
            `,
            notes: "Introduce creative approaches to youth ministry programming."
        },
        {
            id: 2,
            title: "Module Objectives",
            content: `
                <h1 class="slide-title animate-in">Module Objectives</h1>
                <div class="slide-content">
                    <div class="objectives-grid">
                        <div class="objective-item animate-in" data-delay="200">
                            <h3>🎨 Creative Programming</h3>
                            <p>Learn relevant programming aligned with GC AYM themes</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="400">
                            <h3>⚖️ Balanced Approach</h3>
                            <p>Incorporate physical, social, intellectual, emotional components</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="600">
                            <h3>🎯 Core Objectives</h3>
                            <p>Adapt programs while maintaining AYM fundamental objectives</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline the key objectives for creative youth ministry development."
        },
        {
            id: 3,
            title: "Ellen White's Counsel on Youth Training",
            content: `
                <h1 class="slide-title animate-in">Ellen White's Youth Training Counsel</h1>
                <div class="slide-content">
                    <div class="counsel-points">
                        <div class="point-item animate-in" data-delay="200">
                            <h3>🎯 Beyond Conversion</h3>
                            <p>"When youth give their hearts to God, our responsibility does not cease"</p>
                        </div>
                        <div class="point-item animate-in" data-delay="400">
                            <h3>🛠️ Practical Training</h3>
                            <p>"They must be trained, disciplined, drilled in best methods of winning souls"</p>
                        </div>
                        <div class="point-item animate-in" data-delay="600">
                            <h3>🌍 Systematic Mission</h3>
                            <p>"Lay out different branches of missionary effort systematically"</p>
                            <p><em>Gospel Workers, p. 210</em></p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share Ellen White's inspired counsel on training youth for service."
        },
        {
            id: 4,
            title: "Basic Program Structure Essentials",
            content: `
                <h1 class="slide-title animate-in">Program Structure Essentials</h1>
                <div class="slide-content">
                    <div class="structure-elements">
                        <div class="element-item animate-in" data-delay="200">
                            <h3>💫 Core Components</h3>
                            <ul class="bullet-points">
                                <li>Fellowship and community building</li>
                                <li>Spirit lifting and encouragement</li>
                                <li>Active participation and involvement</li>
                                <li>Enjoyment and positive experience</li>
                                <li>Variety and change of pace</li>
                            </ul>
                        </div>
                        <div class="element-item animate-in" data-delay="400">
                            <h3>🎯 Spiritual Outcomes</h3>
                            <ul class="bullet-points">
                                <li>Youth-oriented religious insights</li>
                                <li>Relevance of beliefs to daily life</li>
                                <li>Christian worldview development</li>
                                <li>Understanding church mission</li>
                                <li>Personal relationship with Christ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline essential components for effective youth programming structure."
        },
        {
            id: 5,
            title: "Five Basic Needs of Youth",
            content: `
                <h1 class="slide-title animate-in">Five Basic Youth Needs</h1>
                <div class="slide-content">
                    <div class="needs-grid">
                        <div class="need-item animate-in" data-delay="200">
                            <div class="need-number">1</div>
                            <div class="need-content">
                                <h3>🤝 Acceptance & Recognition</h3>
                                <p>Feeling valued and acknowledged</p>
                            </div>
                        </div>
                        <div class="need-item animate-in" data-delay="400">
                            <div class="need-number">2</div>
                            <div class="need-content">
                                <h3>💝 Affection</h3>
                                <p>Experiencing genuine care and love</p>
                            </div>
                        </div>
                        <div class="need-item animate-in" data-delay="600">
                            <div class="need-number">3</div>
                            <div class="need-content">
                                <h3>⭐ Success & Achievement</h3>
                                <p>Opportunities to accomplish and excel</p>
                            </div>
                        </div>
                        <div class="need-item animate-in" data-delay="800">
                            <div class="need-number">4</div>
                            <div class="need-content">
                                <h3>🌍 New Experiences</h3>
                                <p>Variety and opportunities for growth</p>
                            </div>
                        </div>
                        <div class="need-item animate-in" data-delay="1000">
                            <div class="need-number">5</div>
                            <div class="need-content">
                                <h3>🏠 Security & Belonging</h3>
                                <p>Safe environment and community connection</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Identify the five fundamental needs that youth programming should address."
        },
        {
            id: 6,
            title: "Six Fundamental AYM Objectives",
            content: `
                <h1 class="slide-title animate-in">Six AYM Fundamental Objectives</h1>
                <div class="slide-content">
                    <div class="objectives-list">
                        <div class="objective-item animate-in" data-delay="200">
                            <h3>1. 🙏 Devotional Life</h3>
                            <p>Raise level of youth's devotional life</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="400">
                            <h3>2. 📈 Standard of Attainment</h3>
                            <p>Lift standard of youth achievement</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="600">
                            <h3>3. 🎓 Education & Training</h3>
                            <p>Educate and train youth for service</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="800">
                            <h3>4. 🌍 Outreach Opportunities</h3>
                            <p>Provide opportunities for service</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="1000">
                            <h3>5. 💰 Stewardship Principles</h3>
                            <p>Teach principles of faithful stewardship</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="1200">
                            <h3>6. 💝 Worth & Gifts</h3>
                            <p>Help youth discover worth and spiritual gifts</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the six foundational objectives established by M.E. Kern."
        },
        {
            id: 7,
            title: "Servant Leader Programming Model",
            content: `
                <h1 class="slide-title animate-in">Servant Leader Programming Model</h1>
                <div class="slide-content">
                    <div class="servant-model">
                        <div class="principle-item animate-in" data-delay="200">
                            <h3>👥 Youth Involvement</h3>
                            <p>Involve youth from beginning in planning</p>
                            <p>Their energy prevents leader burnout</p>
                        </div>
                        <div class="principle-item animate-in" data-delay="400">
                            <h3>🎯 Program Ownership</h3>
                            <p>3-4 youth plan and conduct each program</p>
                            <p>Leader provides guidance and resources</p>
                        </div>
                        <div class="principle-item animate-in" data-delay="600">
                            <h3>💡 Creative Engagement</h3>
                            <p>Youth come up with creative methods</p>
                            <p>Creates buy-in through ownership</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the servant leadership approach to youth programming."
        },
        {
            id: 8,
            title: "Six-Step Programming Process",
            content: `
                <h1 class="slide-title animate-in">Six-Step Programming Process</h1>
                <div class="slide-content">
                    <div class="steps-grid">
                        <div class="step-item animate-in" data-delay="200">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3>📅 Yearly Calendar</h3>
                                <p>Create AY quarterly yearly calendar outline</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="400">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3>👥 Council Planning</h3>
                                <p>Meet with AY Society Council and youth</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="600">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3>🌍 Major Events</h3>
                                <p>Fill in Division/Union/Conference events</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="800">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h3>🏛️ Local Calendar</h3>
                                <p>Add local church events and department presentations</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="1000">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h3>🎉 Social Events</h3>
                                <p>Schedule social and recreation activities</p>
                            </div>
                        </div>
                        <div class="step-item animate-in" data-delay="1200">
                            <div class="step-number">6</div>
                            <div class="step-content">
                                <h3>🔄 Implementation</h3>
                                <p>Post 3-month program and seek board approval</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline the six-step process for comprehensive youth programming."
        },
        {
            id: 9,
            title: "Program Types & Servant Leader Progression",
            content: `
                <h1 class="slide-title animate-in">Program Types & Leadership Progression</h1>
                <div class="slide-content">
                    <div class="program-types">
                        <div class="types-column animate-in" data-delay="200">
                            <h3>📋 Program Types:</h3>
                            <ul class="bullet-points">
                                <li><strong>SP</strong> - Spiritual Nurture</li>
                                <li><strong>E</strong> - Evangelism/Outreach</li>
                                <li><strong>T</strong> - Training</li>
                                <li><strong>D</strong> - Discussion</li>
                                <li><strong>V</strong> - Visits</li>
                                <li><strong>B</strong> - Bible Study</li>
                                <li><strong>R</strong> - Recreation</li>
                                <li><strong>C/S</strong> - Community Service</li>
                                <li><strong>M</strong> - Mission Outreach</li>
                            </ul>
                        </div>
                        <div class="progression-column animate-in" data-delay="400">
                            <h3>👑 Servant Leader Progression:</h3>
                            <ul class="bullet-points">
                                <li>I Do It – They Watch</li>
                                <li>I Do It – They Help</li>
                                <li>They Do – I Help</li>
                                <li>They Do – I Watch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Show various program types and the servant leadership development progression."
        },
        {
            id: 10,
            title: "Major Events to Include",
            content: `
                <h1 class="slide-title animate-in">Major Events for Yearly Calendar</h1>
                <div class="slide-content">
                    <div class="events-grid">
                        <div class="event-category animate-in" data-delay="200">
                            <h3>🙏 Spiritual Events</h3>
                            <ul class="bullet-points">
                                <li>AY Week of Prayer</li>
                                <li>Home Coming Sabbath</li>
                                <li>eWeek of Prayer</li>
                                <li>AY Evangelistic Efforts</li>
                            </ul>
                        </div>
                        <div class="event-category animate-in" data-delay="400">
                            <h3>🎉 Celebration Events</h3>
                            <ul class="bullet-points">
                                <li>AY Celebration Day</li>
                                <li>Global Youth Day</li>
                                <li>Youth Congress/Camp</li>
                                <li>Bible Bowl</li>
                            </ul>
                        </div>
                        <div class="event-category animate-in" data-delay="600">
                            <h3>🏥 Health & Training</h3>
                            <ul class="bullet-points">
                                <li>Health & Temperance Events</li>
                                <li>Training Seminars</li>
                                <li>Conference Camp Meeting</li>
                                <li>Youth Federation Programs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "List major events to incorporate into the yearly youth calendar."
        },
        {
            id: 11,
            title: "Creative Programming Tips",
            content: `
                <h1 class="slide-title animate-in">Creative Programming Tips</h1>
                <div class="slide-content">
                    <div class="tips-list">
                        <div class="tip-item animate-in" data-delay="200">
                            <h3>🎯 Quarterly Focus</h3>
                            <p>Choose 3-4 fundamental objectives each quarter</p>
                        </div>
                        <div class="tip-item animate-in" data-delay="400">
                            <h3>🔄 Try New Things</h3>
                            <p>Implement at least one new approach per quarter</p>
                        </div>
                        <div class="tip-item animate-in" data-delay="600">
                            <h3>📝 Evaluate & Adjust</h3>
                            <p>Note what works and adapt accordingly</p>
                        </div>
                        <div class="tip-item animate-in" data-delay="800">
                            <h3>🏛️ Board Approval</h3>
                            <p>Seek church board approval for new initiatives</p>
                        </div>
                        <div class="tip-item animate-in" data-delay="1000">
                            <h3>👥 Build Team</h3>
                            <p>Develop vibrant youth ministry team</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share practical tips for maintaining creativity in youth programming."
        },
        {
            id: 12,
            title: "Call to Creative Action",
            content: `
                <h1 class="slide-title animate-in">Call to Creative Action</h1>
                <div class="slide-content">
                    <div class="action-challenge">
                        <div class="biblical-goal animate-in" data-delay="200">
                            <h3>📖 Ultimate Goal</h3>
                            <p>"Present everyone perfect in Christ" - Colossians 1:28</p>
                            <p>"Prepare God's people for works of service" - Ephesians 4:12</p>
                        </div>
                        <div class="implementation-steps animate-in" data-delay="400">
                            <h3>🚀 Your Creative Challenge:</h3>
                            <ul class="bullet-points">
                                <li>Apply servant leadership model</li>
                                <li>Address five basic youth needs</li>
                                <li>Incorporate six fundamental objectives</li>
                                <li>Use variety of program types</li>
                                <li>Engage youth in planning and execution</li>
                            </ul>
                        </div>
                        <div class="final-encouragement animate-in" data-delay="600">
                            <p><strong>Challenge:</strong> Create your next quarter's youth program using the six-step creative planning process.</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Issue challenge to implement creative programming with biblical foundation."
        }
    ]
};