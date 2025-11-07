// Presentation data structure
const presentationData16 = {
    title: "Developmental Growth - PYSO 104",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Understanding Youth Development",
            content: `
                <h1 class="slide-title animate-in">Developmental Growth in Pathfinders</h1>
                <div class="slide-content">
                    <div class="overview-content">
                        <div class="overview-item animate-in" data-delay="200">
                            <h3>🎯 Workshop Objectives</h3>
                            <ul class="bullet-points">
                                <li>Understand age characteristics of Pathfinders (10-15)</li>
                                <li>Learn engaging developmental games and activities</li>
                                <li>Discover programming that meets developmental needs</li>
                                <li>Master appropriate discipline principles and practices</li>
                            </ul>
                        </div>
                        <div class="overview-item animate-in" data-delay="400">
                            <h3>🧠 Understanding Behavior</h3>
                            <ul class="bullet-points">
                                <li>Behavior stems from efforts to meet psychological needs</li>
                                <li>Emotional growth more central than intellectual</li>
                                <li>Feelings drive actions more than understanding</li>
                                <li>Focus on four areas: physical, mental, social, spiritual</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Introduce developmental growth concepts and the psychological basis for youth behavior."
        },
        {
            id: 2,
            title: "Biblical Foundation & Basic Needs",
            content: `
                <h1 class="slide-title animate-in">Scriptural Basis & Core Needs</h1>
                <div class="slide-content">
                    <div class="needs-content">
                        <div class="needs-item animate-in" data-delay="200">
                            <h3>📖 Scripture on Development</h3>
                            <ul class="bullet-points">
                                <li><strong>Infancy:</strong> Jeremiah 1:5-7; Psalm 139:13-18</li>
                                <li><strong>Childhood:</strong> 1 Timothy 4:12; 2 Timothy 3:15</li>
                                <li><strong>Growth:</strong> 2 Peter 3:18; Deuteronomy 6:6-7</li>
                                <li><strong>Life Stages:</strong> Ecclesiastes 3:1-8; Psalm 23</li>
                            </ul>
                        </div>
                        <div class="needs-item animate-in" data-delay="400">
                            <h3>🏗️ Four Areas of Development</h3>
                            <ul class="bullet-points">
                                <li><strong>Physical:</strong> Food, warmth, shelter, safety</li>
                                <li><strong>Mental:</strong> Choice-making, discovering gifts</li>
                                <li><strong>Emotional:</strong> Belonging, approval, love, humor</li>
                                <li><strong>Spiritual:</strong> God's love, forgiveness, prayer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Establish biblical foundation for development and outline core needs across four areas."
        },
        {
            id: 3,
            title: "Junior Pathfinders (Ages 10-12)",
            content: `
                <h1 class="slide-title animate-in">Pre-Adolescent Characteristics</h1>
                <div class="slide-content">
                    <div class="junior-content">
                        <div class="characteristic-item animate-in" data-delay="200">
                            <h4>💪 Physical Abundance</h4>
                            <p>Slow growth, gaining strength, abundant energy, loves challenges</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="300">
                            <h4>👥 Social Development</h4>
                            <p>Seeks same-sex friends, gender antagonism, proud of new skills</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="400">
                            <h4>🏆 Competitive Spirit</h4>
                            <p>Enjoys teamwork, makes contests of everything, group loyalty</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="500">
                            <h4>🌟 Wholehearted Engagement</h4>
                            <p>Strong likes/dislikes, desires independence, respects authority</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="600">
                            <h4>📚 Eager Learner</h4>
                            <p>Alert, wide interests, avid reader, collector, notes relationships</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Detail the characteristics and needs of Junior Pathfinders ages 10-12."
        },
        {
            id: 4,
            title: "Teen Pathfinders (Ages 13-15)",
            content: `
                <h1 class="slide-title animate-in">Early Adolescent Characteristics</h1>
                <div class="slide-content">
                    <div class="teen-content">
                        <div class="characteristic-item animate-in" data-delay="200">
                            <h4>⚡ Physical Changes</h4>
                            <p>Growth spurts, improving muscles, needs rest and relaxation</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="300">
                            <h4>💞 Social Adjustment</h4>
                            <p>Emerging boy-girl interests, awkwardness, group relationships</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="400">
                            <h4>🎯 Social Preoccupation</h4>
                            <p>Club-oriented, social contacts priority, needs group acceptance</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="500">
                            <h4>🎭 Unpredictable Behavior</h4>
                            <p>Childish-adult transition, self-conscious, needs friendship</p>
                        </div>
                        <div class="characteristic-item animate-in" data-delay="600">
                            <h4>🆓 Independence Seeking</h4>
                            <p>Throws off restraints, wants autonomy, resents control</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the unique characteristics and challenges of Teen Pathfinders ages 13-15."
        },
        {
            id: 5,
            title: "Motivation & Program Planning",
            content: `
                <h1 class="slide-title animate-in">Engaging Pathfinders Effectively</h1>
                <div class="slide-content">
                    <div class="motivation-content">
                        <div class="motivation-item animate-in" data-delay="200">
                            <h3>🎯 Motivation Strategies</h3>
                            <ul class="bullet-points">
                                <li>Ice-breaker games and relationship building</li>
                                <li>Hands-on learning and teamwork activities</li>
                                <li>Group planning and shared responsibilities</li>
                                <li>Drill practice, ceremonies, awards, and travel</li>
                            </ul>
                        </div>
                        <div class="motivation-item animate-in" data-delay="400">
                            <h3>📅 Age-Appropriate Programming</h3>
                            <ul class="bullet-points">
                                <li>What excites Juniors may bore Teens</li>
                                <li>Teens need new challenges to stay engaged</li>
                                <li>Plan different activities for age groups</li>
                                <li>Prevent dropout by meeting evolving needs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover motivation techniques and age-appropriate programming strategies."
        },
        {
            id: 6,
            title: "Interaction & Leadership Approaches",
            content: `
                <h1 class="slide-title animate-in">Effective Leadership Interaction</h1>
                <div class="slide-content">
                    <div class="interaction-content">
                        <div class="interaction-item animate-in" data-delay="200">
                            <h3>👥 Response to Instructions</h3>
                            <ul class="bullet-points">
                                <li><strong>Junior Pathfinder:</strong> Gladly complies</li>
                                <li><strong>Teen Pathfinder:</strong> Questions and discusses</li>
                                <li><strong>Collegiate Staff:</strong> Shares opinions and thoughts</li>
                                <li>Adjust approach based on developmental stage</li>
                            </ul>
                        </div>
                        <div class="interaction-item animate-in" data-delay="400">
                            <h3>🌟 Leadership Qualities</h3>
                            <ul class="bullet-points">
                                <li>Reference Pathfinder Club Handbook qualities</li>
                                <li>Regular staff meetings for program coordination</li>
                                <li>Consistent treatment across all leadership</li>
                                <li>Vital for continued youth involvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain different interaction styles needed for various age groups and leadership qualities."
        },
        {
            id: 7,
            title: "Positive Discipline Principles",
            content: `
                <h1 class="slide-title animate-in">Constructive Discipline Approach</h1>
                <div class="slide-content">
                    <div class="discipline-content">
                        <div class="discipline-item animate-in" data-delay="200">
                            <h3>🎯 Pathfinder Discipline Philosophy</h3>
                            <div class="highlight-box">
                                <p>"Good discipline provides environment conducive to cheerful attitudes and cooperative behavior. It emphasizes guidance rather than restraint, is constructive rather than destructive, enabling rather than crippling."</p>
                            </div>
                        </div>
                        <div class="discipline-item animate-in" data-delay="400">
                            <h3>🤝 Effective Practices</h3>
                            <ul class="bullet-points">
                                <li>All staff agree on and follow same guidelines</li>
                                <li>Encourages self-control and purposeful activity</li>
                                <li>Discourages punishment-focused approaches</li>
                                <li>Builds cooperative participation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present the positive discipline philosophy and essential practices for Pathfinder clubs."
        },
        {
            id: 8,
            title: "Practical Application & Activities",
            content: `
                <h1 class="slide-title animate-in">Implementation & Practice</h1>
                <div class="slide-content">
                    <div class="application-content">
                        <div class="activity-item animate-in" data-delay="200">
                            <h3>💬 Discussion Activities</h3>
                            <ul class="bullet-points">
                                <li>Discuss how staff can meet Pathfinders' needs</li>
                                <li>Share Scriptures addressing life stages</li>
                                <li>Teach ice-breaker and relationship games</li>
                                <li>Plan age-appropriate activities for both groups</li>
                            </ul>
                        </div>
                        <div class="activity-item animate-in" data-delay="400">
                            <h3>🛠️ Practical Implementation</h3>
                            <ul class="bullet-points">
                                <li>Develop club discipline policy together</li>
                                <li>Share examples of proper/improper discipline</li>
                                <li>Practice responding to different age behaviors</li>
                                <li>Create programming that addresses all four development areas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide practical activities for applying developmental understanding in club leadership."
        }
    ]
};