// --- 2. MEETING SPECIFIC DATA ---

const MEETING_DATA_kemdaym_cm41 = {
    'kemdaym_cm41': {
        metadata: {
            title: "KABWE EAST MISSION DISTRICT",
            type: "YOUTH COUNCIL MEETING",
            location: "ROCKSIDE SDA CHURCH",
            date: "Sunday, 28th January 2024",
            time: "10:46 hours",
            chair: "Br. Rabson Musonda, President",
            secretary: "District Youth Secretary"
        },

        agenda: [
            { id: '1', title: 'Opening Prayer' },
            { id: '2', title: 'Devotion' },
            { id: '3', title: 'Roll Call' },
            { id: '4', title: 'Opening Remarks' },
            { id: '5', title: 'Time Management 2024' },
            { id: '5.1', title: 'Adventurers Department' },
            { id: '5.2', title: 'Pathfinders Department' },
            { id: '5.3', title: 'Ambassadors Department' },
            { id: '5.4', title: 'Young Adults' },
            { id: '5.5', title: 'Education Department' },
            { id: '5.6', title: 'Projects/Planning Committee' },
            { id: '5.7', title: 'Music Department' },
            { id: '6', title: 'Global Youth Day 2024' },
            { id: '7', title: 'Filling in of Vacancies' },
            { id: '8', title: 'Affiliation Fees' },
            { id: '9', title: 'Announcements' },
            { id: '10', title: 'Closing Remarks' },
            { id: '11', title: 'Closing Prayer' }
        ],

        minutes: [
            {
                id: '1',
                title: 'OPENING PRAYER',
                details: 'The opening prayer was offered by Br. Elvis Munengo.',
                sections: []
            },
            {
                id: '2',
                title: 'DEVOTION',
                details: 'The devotion was given by Br. Daswell Muzyamba from John 14:1.',
                sections: [
                    { type: 'note', text: 'The presenter encouraged the council members to put their trust in Jesus Christ despite the challenges we might be passing through in this world, for he has promised to take care of us.' }
                ]
            },
            {
                id: '3',
                title: 'ROLL CALL',
                details: 'The following churches were present:',
                sections: [
                    { type: 'subheading', text: 'Zone B Churches:' },
                    { type: 'list', items: ['Muteteshi', 'Rockside', 'Luanshimba', 'Green Leaf', 'Kamiswa', 'Kamabwe', 'Kamukuyu', 'Kabufumu', 'Kalama Branch'] },
                    { type: 'subheading', text: 'Zone A Churches:' },
                    { type: 'list', items: ['Kohima', 'Lukanga Main', 'Kamushanga', 'Kamuchanga', 'Natuseko'] },
                    { type: 'subheading', text: 'Apologies:' },
                    { type: 'list', items: ['Vice Presidents Zone A and Zone B', 'Secretary Zone A'] }
                ]
            },
            {
                id: '4',
                title: 'OPENING REMARKS',
                details: 'The meeting was called to order at 10:46 hours by the chairperson, Br. Rabson Musonda.',
                sections: [
                    { type: 'paragraph', text: 'The chairperson welcomed the members who attended the KEMD council meeting and urged everyone to feel free to air their views.' }
                ]
            },
            {
                id: '5',
                title: 'TIME MANAGEMENT 2024',
                details: 'The council reviewed and approved the 2024 time management plan for all departments:',
                sections: [
                    { type: 'subheading', text: '5.1. Adventurers Department' },
                    { type: 'paragraph', text: 'First Quarter: Bible Quiz (25th February 2024), Community Service (March during GYD)' },
                    { type: 'paragraph', text: 'Second Quarter: Arts and Skills Day (26th May 2024)' },
                    { type: 'paragraph', text: 'Third Quarter: Sports Day (21st July 2024), Fun Day (15th September 2024)' },
                    { type: 'paragraph', text: 'Fourth Quarter: Educational Tour (27th October 2024)' },

                    { type: 'subheading', text: '5.2. Pathfinders Department' },
                    { type: 'list', items: [
                        'Fair on 31st March',
                        'Bible Quiz and Spelling Bee on 26th May',
                        'Assessments on 28th July',
                        'Community Service in September 22nd (Back to School)',
                        'Recreation Day on 28th October',
                        'Big Sabbath on 28th December'
                    ]},

                    { type: 'subheading', text: '5.3. Ambassadors Department' },
                    { type: 'list', items: [
                        'One Big Sabbath and Uniform Promotion in March',
                        'Camp during the four days holiday (Entrepreneurship, Modules, Skills)',
                        'Music Fellowship in April',
                        'Community Service in May',
                        'A Trip in September',
                        'One Day Open Crusade in October'
                    ]},

                    { type: 'subheading', text: '5.4. Young Adults' },
                    { type: 'list', items: ['Family Life', 'Adults Recreation', 'Reunion'] },
                    { type: 'paragraph', text: 'The planning committee to plan for the above activities.' },

                    { type: 'subheading', text: '5.5. Education Department' },
                    { type: 'list', items: [
                        'Leadership Seminar in February',
                        'Expedition for Silver and Gold Award in April',
                        'Honors Exams in April and August',
                        'Church Heritage Exams in May and September'
                    ]},

                    { type: 'subheading', text: '5.6. Projects/Planning Committee' },
                    { type: 'paragraph', text: 'Activities for 2024:' },
                    { type: 'list', items: ['Picnic in July', 'Fundraising Brail in September'] },
                    { type: 'paragraph', text: 'The above activities will be used as a means of fundraising for following projects:' },
                    { type: 'list', items: ['Gardening', 'Chicken Layering'] },

                    { type: 'subheading', text: '5.7. Music Department' },
                    { type: 'list', items: [
                        'Music Rotation: Zones B to Zone A in April',
                        'Album Promotion in May - singing groups to contribute K500 (annually) towards album launch',
                        'Album Launch on 24th October 2024',
                        'Music Cross Over: each singing group to pay K200 towards food, the planning committee to look into it'
                    ]}
                ]
            },
            {
                id: '6',
                title: 'RESOLUTIONS ON TIME MANAGEMENT',
                details: 'The council made the following resolutions regarding the time management:',
                sections: [
                    { type: 'list', items: [
                        'The music fundraising for both zones that in every quarter singing bands should contribute K500 towards the purchasing of the PA system, be replaced with K500 contribution by each singing band in the district towards the album launch. The K500 amount is for the entire year.',
                        'The music rotation, that is zone B going to Zone A was moved from February 10 to April and the committee to look into it as soon as possible. The conclusion was reached because February is the month of stewardship, and also to give space to the churches because in March people will be making contributions towards GYD.',
                        'The music fellowships scheduled for February 18 and July 7 be merged. The council members further resolved that the music committee should revisit the contributions made for the two music fellowships and give a clear direction as soon as possible.',
                        'The inter district music fellowship be merged with the ambassador\'s big Sabbath / uniform promotion.'
                    ]}
                ]
            },
            {
                id: '7',
                title: 'GLOBAL YOUTH DAY 2024',
                details: 'The council discussed plans for Global Youth Day scheduled for 16th March 2024:',
                sections: [
                    { type: 'list', items: [
                        'The Global Youth Day for this year to be conducted in zones, however the activities to be done on that day should be the same.',
                        'This year\'s Global Youth Day people are encouraged to prioritize assisting people before buying the t-shirts.',
                        'Color of the t-shirts in our district to be communicated by the conference.',
                        'The Executive members for both zones to plan the activities to be done on that day and how they should be done, hence, this should be done as soon as possible.'
                    ]}
                ]
            },
            {
                id: '8',
                title: 'FILLING IN OF VACANCIES',
                details: 'The council filled the following vacant positions:',
                sections: [
                    { type: 'subheading', text: 'Zone A:' },
                    { type: 'list', items: ['Maxwell Mwiinga was elected as the Education Chair, thereby creating a vacancy of the Vice Pathfinder Director.'] },
                    { type: 'subheading', text: 'Zone B:' },
                    { type: 'list', items: [
                        'Lust Chilondola was elected as the Music Director',
                        'Daswell Chamba was elected as the Vice Ambassador Director',
                        'Frank Njobvu was elected as the Chief Marshall',
                        'Viness Mulenga was elected as the Vice Treasurer'
                    ]}
                ]
            },
            {
                id: '9',
                title: 'AFFILIATION FEES',
                details: 'Churches that have not paid the affiliation fees to the district should pay as soon as possible.',
                sections: [
                    { type: 'paragraph', text: 'The affiliation fees to be paid through the youth district treasurers.' }
                ]
            },
            {
                id: '10',
                title: 'ANNOUNCEMENTS',
                details: 'No additional announcements were made.',
                sections: []
            },
            {
                id: '11',
                title: 'CLOSING REMARKS',
                details: 'The closing remarks were given by the chairperson, Br. Rabson Musonda, President for KEMD Youth Department.',
                sections: [
                    { type: 'paragraph', text: 'The chairperson thanked the members who attended the council meeting.' },
                    { type: 'paragraph', text: 'He also encouraged the members to continue supporting the executive members and their local leaders. He further asked the planners to arrange the venues of the programs in the manner that will be convenient for all the zones. To the education committee he encouraged them to orient the leaders on their roles.' },
                    { type: 'paragraph', text: 'Lastly, the chairperson urged the churches that did not conduct their induction ceremonies to do so.' }
                ]
            },
            {
                id: '12',
                title: 'CLOSING PRAYER',
                details: 'The closing prayer was given by Br. Steady Chibela.',
                sections: []
            }
        ],

        review: [
            {
                id: '1',
                title: '2024 Time Management Implementation',
                description: 'Ensure all departments implement the approved 2024 time management plan',
                assignedTo: 'All Department Directors',
                deadline: '2024-12-31',
                status: 'completed',
                progress: 'Annual plan approved and distributed to all departments'
            },
            {
                id: '2',
                title: 'Global Youth Day Preparation',
                description: 'Plan and execute Global Youth Day activities across both zones',
                assignedTo: 'Executive Members Both Zones',
                deadline: '2024-03-16',
                status: 'completed',
                progress: 'Activities planned and executed successfully'
            },
            {
                id: '3',
                title: 'Music Department Reorganization',
                description: 'Implement new music fundraising structure and merged fellowship events',
                assignedTo: 'Music Department',
                deadline: '2024-04-30',
                status: 'completed',
                progress: 'New structure implemented, album launch preparations ongoing'
            },
            {
                id: '4',
                title: 'Position Orientation',
                description: 'Orient newly elected leaders on their roles and responsibilities',
                assignedTo: 'Education Committee',
                deadline: '2024-02-28',
                status: 'completed',
                progress: 'Orientation sessions conducted for all new leaders'
            },
            {
                id: '5',
                title: 'Affiliation Fees Collection',
                description: 'Ensure all churches pay their annual affiliation fees',
                assignedTo: 'District Treasurers',
                deadline: '2024-03-31',
                status: 'completed',
                progress: 'Majority of churches paid, follow-ups completed'
            },
            {
                id: '6',
                title: 'Church Induction Ceremonies',
                description: 'Ensure all churches conduct their induction ceremonies',
                assignedTo: 'Zone Presidents',
                deadline: '2024-02-29',
                status: 'completed',
                progress: 'All churches conducted induction ceremonies'
            }
        ]
    }
};