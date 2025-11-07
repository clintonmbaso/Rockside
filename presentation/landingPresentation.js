// Global array to store all available presentations
const availablePresentations = [
{
    id: 1,
    title: "Introduction to Youth Ministry",
    description: "Comprehensive overview of Adventist Youth Ministries history, philosophy, structure, and mission foundations",
    slideCount: 24,
    lastModified: "2023-10-01",
    category: "Foundations & History",
    data: presentationData01
},
{
    "id": 2,
    "title": "Youth Development",
    "description": "Understanding adolescent development, cultural engagement strategies, and practical methods for effective youth ministry in today's digital world",
    "slideCount": 8,
    "lastModified": "2022-12-09",
    "category": "Youth Ministry Psychology",
    "data": presentationData02
},
{
    id: 3,
    title: "Specialized Youth Ministry",
    description: "Addressing current issues and the urgent need for specialized, relevant youth ministry for the EPIC generation",
    slideCount: 12,
    lastModified: "2023-10-03",
    category: "Ministry Development",
    data: presentationData03
},
{
    id: 4,
    title: "Youth Leadership Development",
    description: "The youth leader as spiritual leader, mentor and friend - building authentic influence through Christ-like example",
    slideCount: 20,
    lastModified: "2023-10-04",
    category: "Leadership & Discipleship",
    data: presentationData04
},
{
    id: 5,
    title: "Youth Mentoring & Empowerment",
    description: "Biblical foundation and practical strategies for mentoring youth and empowering them in church leadership",
    slideCount: 18,
    lastModified: "2023-10-05",
    category: "Leadership & Discipleship",
    data: presentationData05
},
{
    id: 6,
    title: "Church Planning & Purpose-Driven Ministry",
    description: "Developing purpose-driven youth ministry models using biblical foundations and Reach Up/In/Out framework",
    slideCount: 12,
    lastModified: "2023-10-06",
    category: "Ministry Development",
    data: presentationData06
},
{
    id: 7,
    title: "Creative Youth Ministry Programming",
    description: "Thinking outside the box with servant leadership model and comprehensive programming structure",
    slideCount: 12,
    lastModified: "2023-10-07",
    category: "Ministry Development",
    data: presentationData07
},
{
    "id": 8,
    "title": "Spiritual Giftedness and Service",
    "description": "Discovering, developing, and deploying spiritual gifts in youth ministry for effective service and church building",
    "slideCount": 16,
    "lastModified": "2023-11-15",
    "category": "Spiritual Development",
    "data": presentationData08
},
    {
        id: 9,
        title: "Youth Outreach Evangelism",
        description: "Empowering youth to become evangelists through diverse methods and spiritual gifts discovery",
        slideCount: 8,
        lastModified: "2023-10-15",
        category: "Evangelism & Outreach",
        data: presentationData09 // This will be loaded from sylSeminar10.js
    },
    {
        id: 10,
        title: "Digital Ministry Guide",
        description: "A comprehensive guide for youth leaders on digital discipleship",
        slideCount: 9,
        lastModified: "2023-10-15",
        category: "Youth Ministry",
        data: presentationData10 // This will be loaded from sylSeminar10.js
    },

//
{
    "id": 11,
    "title": "Club Ministry Purpose & History",
    "description": "Overview of Pathfinder ministry with historical development, philosophy, and practical application for new staff",
    "slideCount": 7,
    "lastModified": "2023-08-20",
    "category": "Club Ministry Training",
    "data": presentationData11
},
{
    "id": 12,
    "title": "Club Organization",
    "description": "Comprehensive guide to Pathfinder club structure, staff roles, budgeting, uniforms, and merit systems for effective ministry operation",
    "slideCount": 8,
    "lastModified": "2023-09-12",
    "category": "Club Ministry Training",
    "data": presentationData12
},
{
    "id": 13,
    "title": "Programming & Planning",
    "description": "Comprehensive guide to Pathfinder program planning, yearly calendar development, weekly meeting structure, and Investiture Achievement integration",
    "slideCount": 8,
    "lastModified": "2023-10-05",
    "category": "Club Ministry Training",
    "data": presentationData13
},
{
    "id": 14,
    "title": "Club Outreach",
    "description": "Mentoring youth as evangelists through community service, spiritual discovery, and integrating outreach into Pathfinder programming and Investiture Achievement",
    "slideCount": 8,
    "lastModified": "2023-11-08",
    "category": "Club Ministry Training",
    "data": presentationData14
},
{
    "id": 15,
    "title": "Ceremonies & Drill",
    "description": "Practical training in Pathfinder ceremonies, stationary and marching commands, flag etiquette, and opening exercises for effective club leadership",
    "slideCount": 8,
    "lastModified": "2023-12-15",
    "category": "Club Ministry Training",
    "data": presentationData15
},
{
    "id": 16,
    "title": "Developmental Growth",
    "description": "Understanding youth development stages ages 10-15, effective mentoring strategies, age-appropriate programming, and positive discipline principles for Pathfinder leadership",
    "slideCount": 8,
    "lastModified": "2024-01-10",
    "category": "Youth Ministry Psychology",
    "data": presentationData16
},
{
    "id": 17,
    "title": "Introduction to Teaching",
    "description": "Fundamental teaching concepts, learning styles, teaching methods, and Investiture Achievement integration for effective Pathfinder instruction",
    "slideCount": 8,
    "lastModified": "2024-02-15",
    "category": "Educational Methods",
    "data": presentationData17
},
{
    "id": 18,
    "title": "Medical, Risk Management & Child Safety",
    "description": "Comprehensive safety training covering medical forms, abuse prevention, volunteer screening, supervision protocols, and emergency preparedness for Pathfinder ministry",
    "slideCount": 8,
    "lastModified": "2024-03-20",
    "category": "Safety & Risk Management",
    "data": presentationData18
}
];

// Function to register a new presentation
function registerPresentation(presentationData, id, category = "Youth Ministry") {
    // Check if presentation with this ID already exists
    const existingIndex = availablePresentations.findIndex(p => p.id === id);
    
    // Extract title from the presentation data
    const title = presentationData.title || 
                 (presentationData.slides && presentationData.slides[0] ? 
                  presentationData.slides[0].title : `Presentation ${id}`);
    
    // Extract description from the first slide's content
    let description = "A comprehensive presentation for youth ministry";
    if (presentationData.slides && presentationData.slides[0]) {
        const firstSlideContent = presentationData.slides[0].content;
        // Extract text content (remove HTML tags)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = firstSlideContent;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        description = textContent.substring(0, 100) + (textContent.length > 100 ? '...' : '');
    }

    const presentationInfo = {
        id: id,
        title: title,
        description: description,
        slideCount: presentationData.slides ? presentationData.slides.length : 0,
        lastModified: new Date().toISOString().split('T')[0],
        category: category,
        data: presentationData
    };

    if (existingIndex >= 0) {
        // Update existing presentation
        availablePresentations[existingIndex] = presentationInfo;
    } else {
        // Add new presentation
        availablePresentations.push(presentationInfo);
    }
}

// Auto-register presentations from global variables
function autoRegisterPresentations() {
    console.log("Auto-registering presentations...");
    
    // Check for various presentation data variable patterns
    const patterns = [
        'presentationData',
        'sylSeminar01', 'sylSeminar02', 'sylSeminar03', 'sylSeminar04', 'sylSeminar05',
        'sylSeminar06', 'sylSeminar07', 'sylSeminar08', 'sylSeminar09', 'sylSeminar10',
        'presentationData01', 'presentationData02', 'presentationData03', 'presentationData04', 'presentationData05',
        'presentationData06', 'presentationData07', 'presentationData08', 'presentationData09', 'presentationData10'
    ];

    patterns.forEach((pattern, index) => {
        if (window[pattern]) {
            console.log(`Found presentation: ${pattern}`);
            registerPresentation(window[pattern], index + 1, "Youth Ministry");
        }
    });

    // Also check for numbered patterns
    for (let i = 1; i <= 20; i++) {
        const paddedNumber = i.toString().padStart(2, '0');
        const patterns = [
            `sylSeminar${paddedNumber}`,
            `presentationData${paddedNumber}`,
            `seminar${paddedNumber}`
        ];
        
        patterns.forEach(pattern => {
            if (window[pattern]) {
                console.log(`Found presentation: ${pattern}`);
                registerPresentation(window[pattern], i, "Youth Ministry");
            }
        });
    }

    console.log(`Registered ${availablePresentations.length} presentations`);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for all scripts to load, then register presentations
    setTimeout(autoRegisterPresentations, 500);
});