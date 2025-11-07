// Presentation data structure
const presentationData18 = {
    title: "Medical, Risk Management & Child Safety - MEDI 100",
    author: "Adventist Youth Ministries",
    date: new Date().toLocaleDateString(),
    slides: [
        {
            id: 1,
            title: "Safety & Risk Management Overview",
            content: `
                <h1 class="slide-title animate-in">Safety & Risk Management</h1>
                <div class="slide-content">
                    <div class="overview-content">
                        <div class="overview-item animate-in" data-delay="200">
                            <h3>🎯 Workshop Objectives</h3>
                            <ul class="bullet-points">
                                <li>Understand medical forms and release requirements</li>
                                <li>Learn abuse prevention and volunteer screening</li>
                                <li>Master staffing levels and transportation guidelines</li>
                                <li>Develop emergency plans and first aid protocols</li>
                            </ul>
                        </div>
                        <div class="overview-item animate-in" data-delay="400">
                            <h3>📚 Essential Resources</h3>
                            <ul class="bullet-points">
                                <li>Pathfinder Administrative Manual</li>
                                <li>Adventist Risk Management Pathfinder Safety</li>
                                <li>Local conference guidelines and policies</li>
                                <li>Emergency response procedures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Introduce safety and risk management workshop objectives and essential resources for Pathfinder leaders."
        },
        {
            id: 2,
            title: "Volunteer Screening & Safety Commitment",
            content: `
                <h1 class="slide-title animate-in">Volunteer Safety Commitment</h1>
                <div class="slide-content">
                    <div class="screening-content">
                        <div class="screening-item animate-in" data-delay="200">
                            <h3>🚫 Critical Restrictions</h3>
                            <ul class="bullet-points">
                                <li><strong>No participation allowed for:</strong></li>
                                <li>Individuals convicted of child abuse</li>
                                <li>Those disciplined for child violence</li>
                                <li>Persons with sexual abuse history</li>
                                <li>Restoration to membership ≠ ministry eligibility</li>
                            </ul>
                        </div>
                        <div class="screening-item animate-in" data-delay="400">
                            <h3>📝 Volunteer Commitment</h3>
                            <ul class="bullet-points">
                                <li>Complete Volunteer Ministry Information form</li>
                                <li>Cooperate with screening process</li>
                                <li>Participate in orientation and training</li>
                                <li>Uphold Seventh-day Adventist Church standards</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain volunteer screening requirements and critical safety restrictions for ministry participation."
        },
        {
            id: 3,
            title: "Supervision & Two-Person Rule",
            content: `
                <h1 class="slide-title animate-in">Supervision Standards</h1>
                <div class="slide-content">
                    <div class="supervision-content">
                        <div class="supervision-item animate-in" data-delay="200">
                            <h3>👥 Adult Supervision Requirements</h3>
                            <ul class="bullet-points">
                                <li>Provide appropriate adult supervision at ALL times</li>
                                <li>Minimum two adults (18+) present for all activities</li>
                                <li>Never be alone with one child (Two-Person Rule)</li>
                                <li>Protects both children and adults from allegations</li>
                            </ul>
                        </div>
                        <div class="supervision-item animate-in" data-delay="400">
                            <h3>🚪 Room & Facility Safety</h3>
                            <ul class="bullet-points">
                                <li>Avoid rooms without interior viewing areas</li>
                                <li>Leave doors open during activities for observation</li>
                                <li>Ensure easy visibility by others at all times</li>
                                <li>Maintain accessible and observable environments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Detail supervision requirements including the critical two-person rule and facility safety standards."
        },
        {
            id: 4,
            title: "Appropriate Physical Contact",
            content: `
                <h1 class="slide-title animate-in">Physical Contact Guidelines</h1>
                <div class="slide-content">
                    <div class="contact-content">
                        <div class="contact-item animate-in" data-delay="200">
                            <h3>🤗 Appropriate Affirmation</h3>
                            <ul class="bullet-points">
                                <li><strong>Ask permission</strong> before physical touch</li>
                                <li><strong>Brief, shoulder-to-shoulder</strong> hugs only</li>
                                <li><strong>Hands at or above</strong> shoulder level</li>
                                <li>Encourage sitting <strong>next to</strong> rather than on laps</li>
                            </ul>
                        </div>
                        <div class="contact-item animate-in" data-delay="400">
                            <h3>🏥 Injury Response Protocol</h3>
                            <ul class="bullet-points">
                                <li>Ask permission before treating injuries</li>
                                <li>For areas covered by T-shirt/shorts: require second adult</li>
                                <li>Never be alone when providing medical care</li>
                                <li>Maintain professional boundaries at all times</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain appropriate physical contact guidelines and medical response protocols with boundaries."
        },
        {
            id: 5,
            title: "Restroom & Private Area Safety",
            content: `
                <h1 class="slide-title animate-in">Private Area Protocols</h1>
                <div class="slide-content">
                    <div class="restroom-content">
                        <div class="restroom-item animate-in" data-delay="200">
                            <h3>🚻 Restroom Safety</h3>
                            <ul class="bullet-points">
                                <li><strong>Extra care</strong> with small children in restrooms</li>
                                <li><strong>Take another adult</strong> along for assistance</li>
                                <li><strong>Leave door open</strong> when appropriate and safe</li>
                                <li>Maintain supervision while respecting privacy</li>
                            </ul>
                        </div>
                        <div class="restroom-item animate-in" data-delay="400">
                            <h3>🔒 Private Situation Prevention</h3>
                            <ul class="bullet-points">
                                <li>Avoid one-on-one situations behind closed doors</li>
                                <li>Ensure multiple adults present in isolated areas</li>
                                <li>Maintain visibility and accountability</li>
                                <li>Plan activities to minimize private interactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover restroom safety protocols and prevention strategies for private situations."
        },
        {
            id: 6,
            title: "Discipline & Abuse Prevention",
            content: `
                <h1 class="slide-title animate-in">Appropriate Discipline</h1>
                <div class="slide-content">
                    <div class="discipline-content">
                        <div class="discipline-item animate-in" data-delay="200">
                            <h3>🚫 Prohibited Practices</h3>
                            <ul class="bullet-points">
                                <li><strong>No physical attacks</strong> or corporal punishment</li>
                                <li><strong>No verbal attacks</strong> or harsh language</li>
                                <li><strong>No inappropriate behaviors</strong> as discipline</li>
                                <li>These practices are NEVER acceptable</li>
                            </ul>
                        </div>
                        <div class="discipline-item animate-in" data-delay="400">
                            <h3>✅ Appropriate Methods</h3>
                            <ul class="bullet-points">
                                <li><strong>"Time out"</strong> as effective discipline</li>
                                <li><strong>"Sit off-that-chair"</strong> for reflection</li>
                                <li>Positive reinforcement and redirection</li>
                                <li>Clear expectations and consistent consequences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Explain prohibited discipline practices and appropriate alternative methods for behavior management."
        },
        {
            id: 7,
            title: "Abuse Recognition & Reporting",
            content: `
                <h1 class="slide-title animate-in">Abuse Awareness & Response</h1>
                <div class="slide-content">
                    <div class="abuse-content">
                        <div class="abuse-item animate-in" data-delay="200">
                            <h3>👀 Recognition Responsibilities</h3>
                            <ul class="bullet-points">
                                <li>Be aware of signs and symptoms of child abuse</li>
                                <li>Know legal requirements for reporting suspected abuse</li>
                                <li>Understand mandatory reporting obligations</li>
                                <li>Recognize inappropriate behavior toward children</li>
                            </ul>
                        </div>
                        <div class="abuse-item animate-in" data-delay="400">
                            <h3>📞 Reporting Protocol</h3>
                            <ul class="bullet-points">
                                <li>Report to church pastor, elder, or conference leadership</li>
                                <li>Contact Conference Treasurer or Risk Management Director</li>
                                <li>Follow legal reporting requirements in your area</li>
                                <li>Document concerns and actions taken</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover abuse recognition responsibilities and proper reporting protocols for suspected cases."
        },
        {
            id: 8,
            title: "Medical & Emergency Preparedness",
            content: `
                <h1 class="slide-title animate-in">Medical & Emergency Planning</h1>
                <div class="slide-content">
                    <div class="medical-content">
                        <div class="medical-item animate-in" data-delay="200">
                            <h3>🏥 Medical Preparedness</h3>
                            <ul class="bullet-points">
                                <li>Maintain proper first aid kits for all activities</li>
                                <li>Designate responsible persons for medical supplies</li>
                                <li>Ensure medical forms and releases are current</li>
                                <li>Know emergency contact procedures</li>
                            </ul>
                        </div>
                        <div class="medical-item animate-in" data-delay="400">
                            <h3>🚨 Emergency Planning</h3>
                            <ul class="bullet-points">
                                <li>Develop comprehensive emergency response plans</li>
                                <li>Establish transportation safety guidelines</li>
                                <li>Maintain proper staffing levels for all events</li>
                                <li>Utilize Adventist Risk Management resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            notes: "Cover medical preparedness, first aid protocols, and comprehensive emergency planning requirements."
        }
    ]
};