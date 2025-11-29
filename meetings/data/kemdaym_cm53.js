        // --- 1. DATA DEFINITIONS (Equivalent to separate JS files) ---

        const MEETING_METADATA = {
            title: "KABWE EAST MISSION DISTRICT",
            type: "YOUTH COUNCIL MEETING",
            location: "ROCKSIDE SDA CHURCH",
            date: "Sunday, 26th October 2025",
            time: "13:00 hours",
            chair: "Br Clinton Mbaso, Vice President Zone B",
            secretary: "Br Gift Masumo"
        };

        const AGENDA_DATA = [
            { id: '1', title: 'Call to Order' },
            { id: '2', title: 'Opening Remarks' },
            { id: '3', title: 'Opening Prayer' },
            { id: '4', title: 'Devotion' },
            { id: '5', title: 'Roll Call' },
            { id: '6', title: 'Previous Minutes' },
            { id: '7', title: 'Quarterly Departmental Reports' },
            { id: '7.1', title: 'Financial Report' },
            { id: '7.2', title: 'Education' },
            { id: '7.3', title: 'Pathfinder' },
            { id: '7.4', title: 'Ambassador' },
            { id: '8', title: 'Conference Camp Finances' },
            { id: '9', title: 'Closing Remarks' },
            { id: '10', title: 'Closing Prayer' },
        ];

        const MINUTES_DATA = [
            {
                id: '1',
                title: 'CALL TO ORDER',
                details: 'The meeting was called to order at 10:00 hours by Br Clinton Mbaso, Vice President Zone B.',
                sections: []
            },
            {
                id: '2',
                title: 'OPENING REMARKS',
                details: 'In his opening remarks, he welcomed all council members present and expressed appreciation for their efforts and commitment to attend the meeting.',
                sections: []
            },
            {
                id: '3',
                title: 'OPENING PRAYER',
                details: 'The opening prayer was offered by Br. Mike after a short song service.',
                sections: []
            },
            {
                id: '4',
                title: 'DEVOTION',
                details: 'Devotion was presented by Elder Munengo, from Psalms 107: "Give thanks to the LORD, because he is good; and his love is eternal!"',
                sections: [{ type: 'note', text: 'He emphasised to give thanks to the lord because he is our creator.' }]
            },
            {
                id: '5',
                title: 'ROLL CALL',
                details: 'The following churches were present:',
                sections: [{ type: 'list', items: ['Rockside', 'Muteteshi Main', 'Muteteshi Central', 'Luanshimba', 'Lukanga Main', 'Mapulu', 'Kamiswa', 'Kohima', 'Mulungushi', 'Kamukuyu'] }]
            },
            {
                id: '6',
                title: 'PREVIOUS MINUTES',
                details: 'The previous minutes were read and adopted with the following corrections:',
                sections: [{ type: 'note', text: 'Corrections: Br. Charles Nsakanya was spelled as Musakanya. Top Secretary Br. Gift Masumo and not Br. Japhet Cheelo, and Vice Secretary Sr. Emma and not Sr. Emily.' }]
            },
            {
                id: '7',
                title: 'QUARTERLY DEPARTMENTAL REPORTS',
                details: '',
                sections: [
                    { type: 'subheading', text: '7.1. Financial Report' },
                    { type: 'paragraph', text: 'The report was presented by Br. Charles Nsakanya, Vice Treasurer, Zone A.' },
                    { type: 'subheading', text: '7.2. Pathfinder' },
                    { type: 'paragraph', text: 'The report was presented by Br. Moris Bwalya, Pathfinder Director, Zone B. The program fir the parades day that was scheduled to occur on ___ was postponed to February 2026.' },
                    { type: 'subheading', text: '7.3. Education' },
                    { type: 'paragraph', text: 'Over 60 candidates were assessed but only 24 paid for the certificates.' },
                    { type: 'challenge', title: 'CHALLENGES', items: ['People are not learning in churches.', 'Low participation of youth members.'] },
                    { type: 'solution', title: 'SOLUTIONS', items: ['Need for the creation of an education committee.', 'Need for engagement of local church education leaders or youth leaders.'] },
                    { type: 'subheading', text: '7.4. Ambassador' },
                    { type: 'paragraph', text: 'The report was presented by the Ambassador Director, Zone B. The picnic was moved to the 28th of December 2025. Transport to be provided or managed by the department.' },
                ]
            },
            {
                id: '8',
                title: 'CONFERENCE CAMP FINANCES',
                details: 'The planning committee suggested that each church contributes food to reduce on the finances. The final breakdown was agreed to be as follows:',
                sections: [{ type: 'list', items: ['Registration K200', 'Transportation K200', 'Food K200'] }]
            },
            {
                id: '9',
                title: 'CLOSING REMARKS',
                details: 'The chairman thanked all council members for their patience and support to attend the meeting.',
                sections: []
            },
            {
                id: '10',
                title: 'CLOSING PRAYER',
                details: 'The meeting was closed with prayer by Br Moris Bwalya.',
                sections: []
            }
        ];