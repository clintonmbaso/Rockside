// Presentation data structure
const presentationData03 = {
    title: "Current Issues - Seminar 3",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "The Need for Specialized Youth Ministry",
            content: `
                <h1 class="slide-title animate-in">The Need for Specialized Youth Ministry</h1>
                <div class="slide-content">
                    <div class="media-container">
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Youth Ministry" class="slide-image animate-in" data-delay="200">
                    </div>
                    <p class="animate-in" data-delay="400">Addressing current issues and adapting ministry for today's youth</p>
                </div>
            `,
            notes: "Introduce the critical need for specialized youth ministry in today's context."
        },
        {
            id: 2,
            title: "Introduction - Changing Landscape",
            content: `
                <h1 class="slide-title animate-in">Changing Youth Ministry Landscape</h1>
                <div class="slide-content">
                    <div class="key-points">
                        <div class="point-item animate-in" data-delay="200">
                            <h3>🔄 Never the Same</h3>
                            <p>Youth ministry today will never be the same as yesterday</p>
                            <p>Requires complete rethinking of approaches and activities</p>
                        </div>
                        <div class="point-item animate-in" data-delay="400">
                            <h3>🎯 Key Question</h3>
                            <p>What can we do differently to <strong>help youth connect with God</strong> and develop <strong>strong faith-based convictions?</strong></p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Highlight the changing nature of youth ministry and need for new approaches."
        },
        {
            id: 3,
            title: "Seminar Objectives",
            content: `
                <h1 class="slide-title animate-in">Seminar Objectives</h1>
                <div class="slide-content">
                    <div class="objectives-grid">
                        <div class="objective-item animate-in" data-delay="200">
                            <h3>👥 Leader Awareness</h3>
                            <p>Improve ministry and mobilize youth in service</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="400">
                            <h3>🎯 Age-Specific Ministry</h3>
                            <p>Maintain specialized ministry for Ambassadors and Young Adults</p>
                        </div>
                        <div class="objective-item animate-in" data-delay="600">
                            <h3>💡 Strategy Development</h3>
                            <p>Face 21st century challenges and develop strong faith maturity</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Outline the three main objectives for specialized youth ministry."
        },
        {
            id: 4,
            title: "Biblical Basis for Specialized Ministry",
            content: `
                <h1 class="slide-title animate-in">Biblical Foundation</h1>
                <div class="slide-content">
                    <div class="scripture-basis">
                        <div class="scripture-item animate-in" data-delay="200">
                            <h3>📖 Deuteronomy 6:5 & Matthew 22:37-38</h3>
                            <ul class="bullet-points">
                                <li>"Love the Lord Your God" as foundational element</li>
                                <li>Taught from birth to adulthood</li>
                                <li>"Love your neighbor" as greatest commandment</li>
                            </ul>
                        </div>
                        <div class="scripture-item animate-in" data-delay="400">
                            <h3>📖 1 Corinthians 12:12-26</h3>
                            <ul class="bullet-points">
                                <li>Church as body of Christ</li>
                                <li>Need for diversity in the body</li>
                                <li>Interdependence among members</li>
                                <li>All members important for proper function</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present biblical foundation for specialized and diverse ministry approaches."
        },
        {
            id: 5,
            title: "The Urgent Reality - Barna Study",
            content: `
                <h1 class="slide-title animate-in">Urgent Reality: Barna Study</h1>
                <div class="slide-content">
                    <div class="statistics-alert">
                        <div class="stat-item animate-in" data-delay="200">
                            <h3>🚨 Critical Finding</h3>
                            <p class="highlight-stat">80% of church-reared youth will be "disengaged" by age 29</p>
                        </div>
                        <div class="response-item animate-in" data-delay="400">
                            <h3>🎯 Our Response Must Be:</h3>
                            <ul class="bullet-points">
                                <li>Address expressed needs in their environment</li>
                                <li>Respond to youth as they are</li>
                                <li>Incorporate into caring Christian community</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Share alarming statistics and call for immediate, relevant response."
        },
        {
            id: 6,
            title: "Addressing Millennial Concerns",
            content: `
                <h1 class="slide-title animate-in">Addressing Millennial Concerns</h1>
                <div class="slide-content">
                    <div class="concerns-list">
                        <div class="concern-item animate-in" data-delay="200">
                            <h3>🎯 Common Grievances:</h3>
                            <ul class="bullet-points">
                                <li>Intolerant of doubt</li>
                                <li>Elitist in relationships</li>
                                <li>Anti-science in beliefs</li>
                                <li>Overprotective of members</li>
                                <li>Shallow in teachings</li>
                                <li>Repressive of differences</li>
                            </ul>
                        </div>
                        <div class="solution-item animate-in" data-delay="400">
                            <h3>💡 Our Approach:</h3>
                            <ul class="bullet-points">
                                <li>Create safe haven for questions</li>
                                <li>Engage in open conversation and debate</li>
                                <li>Connect faith to daily reality</li>
                                <li>No fear of judgment or rejection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Identify common concerns and present solutions for authentic engagement."
        },
        {
            id: 7,
            title: "Understanding the EPIC Generation",
            content: `
                <h1 class="slide-title animate-in">The EPIC Generation</h1>
                <div class="slide-content">
                    <div class="epic-grid">
                        <div class="epic-item animate-in" data-delay="200">
                            <h3>�️ E - Experiential</h3>
                            <p>Learn through experience, not just polished speakers</p>
                        </div>
                        <div class="epic-item animate-in" data-delay="400">
                            <h3>👥 P - Participatory</h3>
                            <p>Motivated when they see their actions affect outcomes</p>
                        </div>
                        <div class="epic-item animate-in" data-delay="600">
                            <h3>🖼️ I - Image Rich</h3>
                            <p>Visual learners through social media platforms</p>
                            <p><em>If we're not on social media, we're missing connection</em></p>
                        </div>
                        <div class="epic-item animate-in" data-delay="800">
                            <h3>📱 C - Connected</h3>
                            <p>Constant global connection through technology</p>
                            <p>Understand power of viral impact</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain the EPIC characteristics that define today's youth generation."
        },
        {
            id: 8,
            title: "Integrated Specialized Ministry",
            content: `
                <h1 class="slide-title animate-in">Integrated Specialized Ministry</h1>
                <div class="slide-content">
                    <div class="integration-principles">
                        <div class="principle-item animate-in" data-delay="200">
                            <h3>👨‍👩‍👧‍👦 Family Focus</h3>
                            <p>Intentional integration within church family</p>
                            <p>Develop healthful intergenerational relationships</p>
                        </div>
                        <div class="principle-item animate-in" data-delay="400">
                            <h3>🌉 Build Bridges</h3>
                            <ul class="bullet-points">
                                <li>Create bridges between youth and adults</li>
                                <li>Pass on experience, knowledge, expertise</li>
                                <li>Authentic intergenerational dialogue</li>
                                <li>Facilitate meaningful leadership access</li>
                            </ul>
                        </div>
                        <div class="principle-item animate-in" data-delay="600">
                            <h3>🎯 Outcomes</h3>
                            <ul class="bullet-points">
                                <li>Greater sense of belonging and ownership</li>
                                <li>Active participation in Great Commission</li>
                                <li>Stronger community connection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Emphasize integration within church family while maintaining specialized approaches."
        },
        {
            id: 9,
            title: "5 Areas for Connection",
            content: `
                <h1 class="slide-title animate-in">5 Areas to Keep Youth Connected</h1>
                <div class="slide-content">
                    <div class="connection-areas">
                        <div class="area-item animate-in" data-delay="200">
                            <h3>1. 🤝 Meaningful Relationships</h3>
                            <p>Make room for authentic connections</p>
                        </div>
                        <div class="area-item animate-in" data-delay="400">
                            <h3>2. 🎯 Cultural Discernment</h3>
                            <p>Teach navigation of modern culture</p>
                        </div>
                        <div class="area-item animate-in" data-delay="600">
                            <h3>3. 🔄 Reverse Mentoring</h3>
                            <p>Make youth mentoring adults a priority</p>
                        </div>
                        <div class="area-item animate-in" data-delay="800">
                            <h3>4. 💼 Vocational Discipleship</h3>
                            <p>Embrace calling in daily work</p>
                        </div>
                        <div class="area-item animate-in" data-delay="1000">
                            <h3>5. ✝️ Jesus Connection</h3>
                            <p>Facilitate personal relationship with Christ</p>
                        </div>
                    </div>
                </div>
            `,
            notes: "Present five key areas for maintaining youth connection to church community."
        },
        {
            id: 10,
            title: "3 Positive Fields for Engagement",
            content: `
                <h1 class="slide-title animate-in">3 Positive Engagement Fields</h1>
                <div class="slide-content">
                    <div class="engagement-fields">
                        <div class="field-item animate-in" data-delay="200">
                            <h3>1. 👵👦 Intergenerational Relationships</h3>
                            <p>Church relationship determined by relationships with older members</p>
                        </div>
                        <div class="field-item animate-in" data-delay="400">
                            <h3>2. 💝 Forgiveness & Acceptance</h3>
                            <p>Nothing drives youth away faster than rejection</p>
                            <p>Nothing draws them in faster than acceptance</p>
                        </div>
                        <div class="field-item animate-in" data-delay="600">
                            <h3>3. 🗣️ Platforms for Sharing</h3>
                            <ul class="bullet-points">
                                <li>Power in experiencing God's love</li>
                                <li>Power in sharing that experience</li>
                                <li>Power in hearing others' encounters with God</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Highlight three research-based areas that positively impact youth engagement."
        },
        {
            id: 11,
            title: "Conclusion & Call to Action",
            content: `
                <h1 class="slide-title animate-in">Conclusion & Call to Action</h1>
                <div class="slide-content">
                    <div class="conclusion-points">
                        <div class="point-item animate-in" data-delay="200">
                            <h3>🎯 Youth Ministry Still Relevant</h3>
                            <p>Despite youth leaving, ministry plays decisive role in spiritual growth</p>
                        </div>
                        <div class="point-item animate-in" data-delay="400">
                            <h3>👥 Intentional Inclusion</h3>
                            <p>Address issues from intentional intergenerational perspective</p>
                        </div>
                        <div class="point-item animate-in" data-delay="600">
                            <h3>💝 Embrace This Generation</h3>
                            <ul class="bullet-points">
                                <li>Authentic relationships</li>
                                <li>Generous mentoring</li>
                                <li>Strong connection with Jesus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Summarize key conclusions and issue call to action for specialized ministry."
        },
        {
            id: 12,
            title: "Activities & Resources",
            content: `
                <h1 class="slide-title animate-in">Activities & Resources</h1>
                <div class="slide-content">
                    <div class="activities-section">
                        <div class="activity-item animate-in" data-delay="200">
                            <h3>📝 Individual Activity</h3>
                            <p><strong>Name and explain the EPIC acronym</strong> that defines this generation</p>
                        </div>
                        <div class="activity-item animate-in" data-delay="400">
                            <h3>👥 Group Activity</h3>
                            <p><strong>Discuss how youth leaders can engage youth</strong> in global networking using social media to impact the world with the Gospel</p>
                        </div>
                    </div>
                    
                    <div class="resources-section animate-in" data-delay="600">
                        <h3>🌐 Resources</h3>
                        <p><strong>Visit:</strong> youth.adventist.org for mentoring, devotional, and training resources</p>
                    </div>
                    
                    <div class="final-challenge animate-in" data-delay="800">
                        <p><strong>Challenge:</strong> Implement one EPIC principle in your youth ministry this month.</p>
                    </div>
                </div>
            `,
            notes: "Provide practical activities and resources for continued learning and application."
        }
    ]
}; 