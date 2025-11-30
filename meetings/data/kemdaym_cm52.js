// --- 2. MEETING SPECIFIC DATA ---

const MEETING_DATA_kemdaym_cm52 = {
    'kemdaym_cm52': {
        metadata: {
            title: "KABWE EAST MISSION DISTRICT",
            type: "YOUTH COUNCIL MEETING",
            location: "NABUSANGA SDA CHURCH",
            date: "Sunday, 22nd June 2025",
            time: "14:50 hours",
            chair: "Br. Mwangelwa Silimi. Vice Youth President Zone A",
            secretary: "Sr. Loveness Mishealson Mwanza"
        },

        agenda: [
            { id: '1', title: 'Call to Order' },
            { id: '2', title: 'Opening Remarks' },
            { id: '3', title: 'Opening Prayer' },
            { id: '4', title: 'Devotion' },
            { id: '5', title: 'Roll Call' },
            { id: '6', title: 'Apologies' },
            { id: '7', title: 'Reading, Correction, and Adoption of Previous Minutes' },
            { id: '8', title: 'Quarterly Departmental Reports' },
            { id: '8.1', title: 'Financial Report' },
            { id: '8.2', title: 'Education' },
            { id: '8.3', title: 'Media' },
            { id: '8.4', title: 'Music' },
            { id: '8.5', title: 'Pathfinder' },
            { id: '8.6', title: 'Adventurer' },
            { id: '8.7', title: 'Ambassador' },
            { id: '8.8', title: 'Adoption of the Reports' },
            { id: '9', title: 'Vacancies and Swapping' },
            { id: '10', title: 'Adjustment of Time Management' },
            { id: '11', title: 'Closing Remarks' },
            { id: '12', title: 'Closing Prayer' }
        ],

        minutes: [
            {
                id: '1',
                title: 'CALL TO ORDER',
                details: 'The meeting was called to order at 14:50 hours by the Vice Youth President for Zone A.',
                sections: []
            },
            {
                id: '2',
                title: 'OPENING REMARKS',
                details: 'The Chairperson welcomed all members present and expressed appreciation for their commitment and effort to attend the meeting. He encouraged active participation, unity, and order throughout the proceedings.',
                sections: [
                    { type: 'note', text: 'The Chairperson noted that most members were not in Class A uniform. He reminded the council of the importance of wearing full uniform as a mark of identity for the youth movement and urged all to normalize wearing the official attire during formal meetings.' }
                ]
            },
            {
                id: '3',
                title: 'OPENING PRAYER',
                details: 'A prayer was offered by Br. Morgan Lushinga, Pathfinder Director for Zone A.',
                sections: []
            },
            {
                id: '4',
                title: 'DEVOTION',
                details: 'Br. Cornelius Chanda led the devotion from Matthew 28:18-20 and Mark 16:15-16, emphasizing the importance of obedience to the Great Commission and the call to evangelize with dedication and humility.',
                sections: []
            },
            {
                id: '5',
                title: 'ROLL CALL',
                details: 'The following churches were present:',
                sections: [
                    { type: 'subheading', text: 'Zone A Churches:' },
                    { type: 'list', items: ['Natuseko', 'Lukanga Main', 'Lukanga North', 'Silos', 'Kohima', 'Nabusabga', 'Kamushanga', 'Kamuchanga', 'Mulungushi'] },
                    { type: 'subheading', text: 'Zone B Churches:' },
                    { type: 'list', items: ['Rockside', 'Mapulu'] }
                ]
            },
            {
                id: '6',
                title: 'APOLOGIES',
                details: 'There was no apology received.',
                sections: []
            },
            {
                id: '7',
                title: 'READING AND ADOPTION OF PREVIOUS MINUTES',
                details: 'The minutes of the previous meeting were read, and after some corrections, they were adopted by the house as a true record of proceedings.',
                sections: []
            },
            {
                id: '8',
                title: 'QUARTERLY DEPARTMENTAL REPORTS',
                details: '',
                sections: [
                    { type: 'subheading', text: '8.1. Financial Report' },
                    { type: 'paragraph', text: 'The Financial Report was presented and discussed. Members appreciated the update and encouraged continued accountability and transparency in managing district funds.' },
                    
                    { type: 'subheading', text: '8.2. Education Department' },
                    { type: 'challenge', title: 'CHALLENGES', items: [
                        'Leaders are not actively teaching children at local churches.',
                        'Low attendance during district assessments.',
                        'Limited receptiveness to digital learning and assessments.',
                        'Dormancy of some Master Guides at church level.'
                    ]},
                    { type: 'solution', title: 'RECOMMENDATIONS', items: [
                        'Conduct orientation on the digital learning platform.',
                        'Sensitize members on the importance of district-level assessments.',
                        'Strengthen collaboration between the Education Department and Master Guides to promote activeness at the local level.'
                    ]},
                    
                    { type: 'subheading', text: '8.3. Media Department' },
                    { type: 'paragraph', text: 'The department presented the Google Pixel stand purchased recently, which brought great joy among members. The department expressed gratitude and indicated the desire to acquire a larger stand in the future.' },
                    { type: 'challenge', title: 'CHALLENGES / RECOMMENDATIONS', items: [
                        'The WhatsApp group lacks clear direction; members should be oriented on its purpose and guidelines.',
                        'Leaders are not consistently engaging the media team for coverage of their programs; all leaders were encouraged to collaborate effectively.',
                        'There are two Facebook pages bearing the district\'s name; the official one with 8.3K followers has not yet been fully handed over to the department.',
                        'The department expressed willingness to train interested individuals at both district and local church levels.'
                    ]},
                    { type: 'note', text: 'The report was adopted, and the Chairperson cautioned members to handle the media equipment with care.' },
                    
                    { type: 'subheading', text: '8.4. Music Department' },
                    { type: 'challenge', title: 'CHALLENGES / RECOMMENDATIONS', items: [
                        'Some local churches are inactive musically; the district music leadership was urged to visit these churches and address their challenges.',
                        'The Youth Music Department was operating independently of the main district music team; greater collaboration was encouraged.',
                        'There is limited coordination between Zone A and B leaders; stronger teamwork was emphasized.'
                    ]},
                    
                    { type: 'subheading', text: '8.5. Pathfinder Department' },
                    { type: 'paragraph', text: 'The newly purchased club colors were displayed. A District Pathfinder Squad comprising 90 Pathfinders from both zones was successfully formed. All Pathfinder programs recorded excellent attendance and participation.' },
                    { type: 'challenge', title: 'CHALLENGES', items: [
                        'The Pathfinder Fair leaned more toward competition rather than spiritual growth.',
                        'Some clubs falsified ages to qualify members for certain categories.',
                        'A few churches sent financial contributions but did not attend the events physically.'
                    ]},
                    
                    { type: 'subheading', text: '8.6. Adventurer Department' },
                    { type: 'challenge', title: 'CHALLENGES / RECOMMENDATIONS', items: [
                        'The Media Department was not available to cover most programs; both departments were encouraged to coordinate more effectively.',
                        'Poor communication persists between Zone A and B leaders; efforts should be made to improve engagement.',
                        'Attendance at programs was generally low; leaders were urged to identify and address the causes of poor participation.'
                    ]},
                    
                    { type: 'subheading', text: '8.7. Ambassador Department' },
                    { type: 'paragraph', text: 'All planned programs were successfully conducted.' },
                    { type: 'challenge', title: 'CHALLENGES', items: [
                        'Some churches made payments on the actual day of the events, affecting planning.',
                        'Others have not yet completed payments.',
                        'There is poor cooperation between local and district leaders.',
                        'Communication gaps persist between local church leaders and district administration.'
                    ]},
                    
                    { type: 'subheading', text: '8.8. Adoption of Reports' },
                    { type: 'paragraph', text: 'All reports were reviewed and adopted by the council.' }
                ]
            },
            {
                id: '9',
                title: 'VACANCIES AND SWAPPING',
                details: 'The council received the notification of a vacancy for Vice President, Zone B, and approved the following appointments and adjustments:',
                sections: [
                    { type: 'list', items: [
                        'Vice President, Zone B: Br. Clinton Mbaso',
                        'Top Secretary, Zone B: Br. Gift Masumo',
                        'Vice Secretary, Zone B: Sr. Emma Muleya'
                    ]},
                    { type: 'paragraph', text: 'Additionally, following the election of Br. Mbaso as Vice President, the position of Education Chairperson (Zone B) became vacant. The council unanimously elected Mr. Vincent Kanjele to fill this position.' }
                ]
            },
            {
                id: '10',
                title: 'TIME MANAGEMENT ADJUSTMENT',
                details: 'After deliberation, the council resolved to maintain the existing time management structure, noting that local churches had already aligned their programs with the district\'s schedule. They indicated that any further adjustment would disrupt existing plans and create unnecessary inconvenience.',
                sections: []
            },
            {
                id: '11',
                title: 'CLOSING REMARKS',
                details: 'The Chairperson expressed sincere appreciation to all members for their patience, dedication, and participation. He encouraged continued unity, commitment, and love in service to God and the youth ministry.',
                sections: []
            },
            {
                id: '12',
                title: 'CLOSING PRAYER',
                details: 'The meeting closed with a prayer by Br. Mwangelwa Silimi.',
                sections: []
            }
        ],

        review: [
            {
                id: '1',
                title: 'Uniform Compliance',
                description: 'Ensure all members wear Class A uniform during formal meetings',
                assignedTo: 'All Zone Leaders',
                deadline: '2025-07-31',
                status: 'in progress',
                progress: 'Awareness created, compliance monitored'
            },
            {
                id: '2',
                title: 'Education Department Orientation',
                description: 'Conduct orientation on digital learning platform and district assessments',
                assignedTo: 'Education Department',
                deadline: '2025-07-15',
                status: 'pending',
                progress: 'Planning stage'
            },
            {
                id: '3',
                title: 'Media Department Coordination',
                description: 'Establish clear guidelines for WhatsApp group and coordinate Facebook page handover',
                assignedTo: 'Media Department',
                deadline: '2025-07-20',
                status: 'pending',
                progress: 'Initial discussions held'
            },
            {
                id: '4',
                title: 'Inter-Zone Collaboration',
                description: 'Improve coordination between Zone A and B leaders across all departments',
                assignedTo: 'Zone Presidents',
                deadline: '2025-07-30',
                status: 'pending',
                progress: 'Regular communication channels being established'
            },
            {
                id: '5',
                title: 'Position Vacancies Filled',
                description: 'Complete the transition and orientation for newly appointed leaders',
                assignedTo: 'Executive Committee',
                deadline: '2025-06-30',
                status: 'completed',
                progress: 'All positions filled and announced'
            }
        ]
    }
};