// Presentation data structure
const presentationData02 = {
    title: "Youth Development - Seminar 2",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Understanding Today's Youth",
            content: `
                <h1 class="slide-title animate-in">Understanding Today's Youth</h1>
                <div class="slide-content">
                    <div class="intro-content">
                        <div class="intro-item animate-in" data-delay="200">
                            <h3>🌍 The Changing Youth Landscape</h3>
                            <ul class="bullet-points">
                                <li>Youth live in a digitally transformed world</li>
                                <li>Virtual experiences shape their reality and dreams</li>
                                <li>Often misunderstood by adult church members</li>
                                <li>Need leaders who understand their mental world</li>
                            </ul>
                        </div>
                        <div class="intro-item animate-in" data-delay="400">
                            <h3>🎯 Seminar Objectives</h3>
                            <ul class="bullet-points">
                                <li>Study Jesus' example of cultural accommodation</li>
                                <li>Discover challenges faced by young people</li>
                                <li>Understand the youth environment and world</li>
                                <li>Learn steps to enter and understand youth culture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Introduce the unique challenges and opportunities of ministering to today's digitally-native youth generation."
        },
        {
            id: 2,
            title: "Brain Development & Youth Reality",
            content: `
                <h1 class="slide-title animate-in">The Adolescent Brain</h1>
                <div class="slide-content">
                    <div class="brain-content">
                        <div class="brain-item animate-in" data-delay="200">
                            <h3>🧠 Neuropsychological Reality</h3>
                            <ul class="bullet-points">
                                <li>Frontal lobe development continues into mid-20s</li>
                                <li>Decision-making and reasoning still developing</li>
                                <li>Youth caught between childhood and adulthood</li>
                                <li>Both mature and childish behavior is normal</li>
                            </ul>
                        </div>
                        <div class="brain-item animate-in" data-delay="400">
                            <h3>💡 Leadership Implications</h3>
                            <ul class="bullet-points">
                                <li>Practice patience with developing youth</li>
                                <li>Understand emotional management challenges</li>
                                <li>Recognize world perception is still forming</li>
                                <li>Balance guidance with appropriate freedom</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the scientific reality of adolescent brain development and its implications for youth ministry."
        },
        {
            id: 3,
            title: "Biblical Examples of Cultural Engagement",
            content: `
                <h1 class="slide-title animate-in">Biblical Cultural Engagement</h1>
                <div class="slide-content">
                    <div class="biblical-content">
                        <div class="biblical-item animate-in" data-delay="200">
                            <h3>✝️ Jesus' Example</h3>
                            <ul class="bullet-points">
                                <li>Left heaven to understand human experience</li>
                                <li>Adopted local clothing, food, and customs</li>
                                <li>Mingled with people to understand them</li>
                                <li>Broke social codes to reach the marginalized</li>
                            </ul>
                        </div>
                        <div class="biblical-item animate-in" data-delay="400">
                            <h3>📖 Paul's Approach</h3>
                            <ul class="bullet-points">
                                <li>"I have become all things to all people"</li>
                                <li>Cultural adaptation for gospel effectiveness</li>
                                <li>Purpose: "that I might share in its blessings"</li>
                                <li>Flexibility without compromising truth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present biblical examples of cultural engagement and adaptation for effective ministry."
        },
        {
            id: 4,
            title: "Ellen White's Counsel on Youth Ministry",
            content: `
                <h1 class="slide-title animate-in">Spirit of Prophecy Guidance</h1>
                <div class="slide-content">
                    <div class="counsel-content">
                        <div class="counsel-item animate-in" data-delay="200">
                            <h3>💝 Christ's Method</h3>
                            <div class="highlight-box">
                                <p>"Christ's method alone will give true success in reaching the people. The Savior mingled with men as one who desired their good. He showed His sympathy for them, ministered to their needs, and won their confidence. Then He bade them, 'Follow Me.'"</p>
                            </div>
                        </div>
                        <div class="counsel-item animate-in" data-delay="400">
                            <h3>🌟 Youth Ministry Principles</h3>
                            <ul class="bullet-points">
                                <li>Show kindness, courtesy, and tender sympathy</li>
                                <li>Make religion attractive to youth</li>
                                <li>Develop hidden talents and potential</li>
                                <li>Provide aids to self-development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share Ellen White's counsel on effective youth ministry approaches and principles."
        },
        {
            id: 5,
            title: "Youth Environment & Influences",
            content: `
                <h1 class="slide-title animate-in">Understanding Youth World</h1>
                <div class="slide-content">
                    <div class="environment-content">
                        <div class="environment-item animate-in" data-delay="200">
                            <h3>📱 The Digital Environment</h3>
                            <ul class="bullet-points">
                                <li>Youth rapidly adapt to social climate</li>
                                <li>Virtual world shapes identity and values</li>
                                <li>Different concerns and needs than adults</li>
                                <li>Often feel church doesn't understand them</li>
                            </ul>
                        </div>
                        <div class="environment-item animate-in" data-delay="400">
                            <h3>🎭 Sources of Influence</h3>
                            <ul class="bullet-points">
                                <li><strong>Family:</strong> Parental training and home life</li>
                                <li><strong>School:</strong> Education, teachers, and peers</li>
                                <li><strong>Community:</strong> Neighborhood and friends</li>
                                <li><strong>Media:</strong> Internet, TV, and smartphones</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Analyze the youth environment and major influences shaping young people today."
        },
        {
            id: 6,
            title: "Youth Desires & Needs",
            content: `
                <h1 class="slide-title animate-in">What Youth Are Seeking</h1>
                <div class="slide-content">
                    <div class="desires-content">
                        <div class="desires-list">
                            <div class="desire-item animate-in" data-delay="200">
                                <h4>🤝 Recognition & Belonging</h4>
                                <p>Seeking acceptance as part of church family</p>
                            </div>
                            <div class="desire-item animate-in" data-delay="300">
                                <h4>💬 Confident Communication</h4>
                                <p>Adults they can trust with life realities</p>
                            </div>
                            <div class="desire-item animate-in" data-delay="400">
                                <h4>🎤 Safe Expression</h4>
                                <p>Framework to share thoughts without punishment</p>
                            </div>
                            <div class="desire-item animate-in" data-delay="500">
                                <h4>💡 Innovation & Change</h4>
                                <p>New ways that consider their opinions</p>
                            </div>
                            <div class="desire-item animate-in" data-delay="600">
                                <h4>🏰 Church Pride & Defense</h4>
                                <p>Willing to defend church when actions are worthy</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            notes: "Identify the core desires and needs youth are seeking from church and leaders."
        },
        {
            id: 7,
            title: "Entering the Youth Universe",
            content: `
                <h1 class="slide-title animate-in">Practical Engagement Methods</h1>
                <div class="slide-content">
                    <div class="engagement-content">
                        <div class="engagement-item animate-in" data-delay="200">
                            <h3>🗣️ Communication Strategies</h3>
                            <ul class="bullet-points">
                                <li>Organize frequent discussion meetings</li>
                                <li>Tolerate youth language and behavior</li>
                                <li>Allow emotional expression</li>
                                <li>Practice listening-based dialogue</li>
                                <li>Create informal programs and play time</li>
                            </ul>
                        </div>
                        <div class="engagement-item animate-in" data-delay="400">
                            <h3>🏗️ Framework for Involvement</h3>
                            <ul class="bullet-points">
                                <li>Create accepting environment</li>
                                <li>Encourage informal youth groups</li>
                                <li>Organize decision-making forums</li>
                                <li>Incorporate youth-oriented music and arts</li>
                                <li>Frequently allow youth leadership</li>
                                <li>Create intergenerational activities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Provide practical methods for entering youth culture and creating involvement frameworks."
        },
        {
            id: 8,
            title: "Application & Self-Assessment",
            content: `
                <h1 class="slide-title animate-in">Practical Application</h1>
                <div class="slide-content">
                    <div class="application-content">
                        <div class="assessment-item animate-in" data-delay="200">
                            <h3>📝 Part 1: Current Understanding</h3>
                            <ul class="bullet-points">
                                <li>Identify key youth influences in your church</li>
                                <li>Document musical trends and leisure activities</li>
                                <li>Assess youth values and church complaints</li>
                                <li>Understand their Christian living perspective</li>
                            </ul>
                        </div>
                        <div class="assessment-item animate-in" data-delay="400">
                            <h3>🔍 Part 2: Quarter-Long Engagement</h3>
                            <ul class="bullet-points">
                                <li>Use learned methods with church youth</li>
                                <li>Crosscheck your initial understanding</li>
                                <li>Measure depth of youth-adult relationships</li>
                                <li>Adjust approaches based on discoveries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Guide leaders through practical application and self-assessment of their youth understanding."
        }
    ]
};