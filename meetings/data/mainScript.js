// --- 2. RENDERING FUNCTIONS ---

// Global variable to store current meeting data
let currentMeetingData = null;

// Function to create an HTML element
const createElement = (tag, className, content) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.innerHTML = content;
    return el;
};

// Global meeting data object - combines all meeting data
const ALL_MEETING_DATA = {
    'kemdaym_cm41': MEETING_DATA_kemdaym_cm41 ? MEETING_DATA_kemdaym_cm41['kemdaym_cm41'] : null,
    'kemdaym_cm51': MEETING_DATA_kemdaym_cm51 ? MEETING_DATA_kemdaym_cm51['kemdaym_cm51'] : null,
    'kemdaym_cm52': MEETING_DATA_kemdaym_cm52 ? MEETING_DATA_kemdaym_cm52['kemdaym_cm52'] : null,
    'kemdaym_cm53': MEETING_DATA_kemdaym_cm53 ? MEETING_DATA_kemdaym_cm53['kemdaym_cm53'] : null,
    'kemdaym_cm54': MEETING_DATA_kemdaym_cm54 ? MEETING_DATA_kemdaym_cm54['kemdaym_cm54'] : null
};

// Render the meetings list on landing page
const renderMeetingsList = () => {
    const listEl = document.getElementById('meetings-list');
    listEl.innerHTML = '';

    MEETINGS_LIST.forEach(meeting => {
        const card = createElement('div', 'card p-6 cursor-pointer hover:shadow-lg transition-shadow');
        card.addEventListener('click', () => loadMeeting(meeting.id));

        const statusBadge = createElement('span', `px-3 py-1 rounded-full text-xs font-medium ${meeting.status === 'completed' ? 'status-completed' : 'status-pending'}`);
        statusBadge.textContent = meeting.status === 'completed' ? 'Completed' : 'Upcoming';

        const title = createElement('h3', 'text-xl font-bold text-gray-800 mb-2', meeting.title);
        const type = createElement('p', 'text-gray-600 mb-1', meeting.type);
        const location = createElement('p', 'text-gray-600 mb-1', `📍 ${meeting.location}`);
        const date = createElement('p', 'text-gray-600 mb-3', `📅 ${meeting.date}`);
        const time = createElement('p', 'text-gray-600 mb-4', `⏰ ${meeting.time}`);

        card.appendChild(statusBadge);
        card.appendChild(title);
        card.appendChild(type);
        card.appendChild(location);
        card.appendChild(date);
        card.appendChild(time);

        listEl.appendChild(card);
    });
};

// Load a specific meeting
const loadMeeting = (meetingId) => {
    // Find basic meeting info from the list
    const meetingInfo = MEETINGS_LIST.find(m => m.id === meetingId);
    if (!meetingInfo) {
        alert('Meeting not found!');
        return;
    }

    // Show basic info immediately
    document.getElementById('meeting-title').textContent = meetingInfo.title;
    document.getElementById('meeting-details').innerHTML = `
        <h1>${meetingInfo.type}</h1>
        <p>Held at ${meetingInfo.location}</p>
        <p>${meetingInfo.date} at ${meetingInfo.time}</p>
        <p>Chaired by ${meetingInfo.chair}</p>
    `;
    document.getElementById('minutes-secretary').textContent = meetingInfo.secretary;

    // Switch to meeting details view
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('meeting-details-page').classList.remove('hidden');

    // Load the detailed meeting data
    currentMeetingData = ALL_MEETING_DATA[meetingId];
    
    if (currentMeetingData) {
        // Render the detailed data
        renderMetadata(currentMeetingData.metadata);
        renderAgenda(currentMeetingData.agenda);
        renderMinutes(currentMeetingData.minutes);
        renderReview(currentMeetingData.review);
    } else {
        // Show error state
        document.getElementById('agenda-list').innerHTML = '<p class="text-red-500">Failed to load agenda data.</p>';
        document.getElementById('minutes-content').innerHTML = '<p class="text-red-500">Failed to load minutes data.</p>';
        document.getElementById('review-content').innerHTML = '<p class="text-red-500">Failed to load review data.</p>';
    }
    
    // Default to agenda tab
    switchTab('agenda');
};

// Renders the main metadata (Title, Date, etc.)
const renderMetadata = (metadata) => {
    if (!metadata) return;
    
    document.getElementById('meeting-title').textContent = metadata.title;
    document.getElementById('meeting-details').innerHTML = `
        <h1>${metadata.type}</h1>
        <p>Held at ${metadata.location}</p>
        <p>${metadata.date} at ${metadata.time}</p>
        <p>Chaired by ${metadata.chair}</p>
    `;
    document.getElementById('minutes-secretary').textContent = metadata.secretary;
};

// Renders the Agenda tab
const renderAgenda = (agendaData) => {
    const listEl = document.getElementById('agenda-list');
    listEl.innerHTML = '';

    if (!agendaData || agendaData.length === 0) {
        listEl.innerHTML = '<p class="text-gray-500 text-center py-8">No agenda items available.</p>';
        return;
    }

    agendaData.forEach(item => {
        const div = createElement('div', 'agenda-item flex items-start space-x-3');

        // Number
        const numSpan = createElement('span', 'font-mono text-blue-600 font-bold text-lg');
        numSpan.textContent = item.id + '.';

        // Title
        const titleSpan = createElement('span', 'text-gray-800 text-base flex-1');
        titleSpan.textContent = item.title;

        div.appendChild(numSpan);
        div.appendChild(titleSpan);
        listEl.appendChild(div);
    });
};

// Renders the Minutes tab
const renderMinutes = (minutesData) => {
    const contentEl = document.getElementById('minutes-content');
    contentEl.innerHTML = '';

    if (!minutesData || minutesData.length === 0) {
        contentEl.innerHTML = '<p class="text-gray-500 text-center py-8">No minutes available for this meeting.</p>';
        return;
    }

    minutesData.forEach(item => {
        const sectionDiv = createElement('div', 'minutes-section');

        // Item Header
        const header = createElement('h3', 'text-lg font-bold text-blue-700 mb-2');
        header.textContent = `${item.id}. ${item.title}`;
        sectionDiv.appendChild(header);

        // Main Detail Paragraph
        if (item.details) {
            const detail = createElement('p', 'text-gray-700 mb-3', item.details);
            sectionDiv.appendChild(detail);
        }

        // Sub-sections (Lists, Challenges, Solutions, etc.)
        if (item.sections) {
            item.sections.forEach(section => {
                let sectionEl;

                switch (section.type) {
                    case 'subheading':
                        sectionEl = createElement('h4', 'subheading font-semibold text-gray-800 mt-4 mb-2', section.text);
                        break;
                    case 'paragraph':
                        sectionEl = createElement('p', 'text-gray-600 mb-3', section.text);
                        break;
                    case 'list':
                        const ul = createElement('ul', 'list-disc list-inside space-y-1 text-gray-600 ml-4');
                        section.items.forEach(liText => {
                            const li = createElement('li', '', liText);
                            ul.appendChild(li);
                        });
                        sectionEl = ul;
                        break;
                    case 'challenge':
                        sectionEl = createElement('div', 'challenge-box');
                        const challengeTitle = createElement('p', 'font-bold mb-1 uppercase', section.title);
                        sectionEl.appendChild(challengeTitle);
                        const challengeList = createElement('ul', 'list-disc list-inside space-y-1 text-sm ml-2');
                        section.items.forEach(liText => {
                            const li = createElement('li', '', liText);
                            challengeList.appendChild(li);
                        });
                        sectionEl.appendChild(challengeList);
                        break;
                    case 'solution':
                        sectionEl = createElement('div', 'solution-box');
                        const solutionTitle = createElement('p', 'font-bold mb-1 uppercase', section.title);
                        sectionEl.appendChild(solutionTitle);
                        const solutionList = createElement('ul', 'list-disc list-inside space-y-1 text-sm ml-2');
                        section.items.forEach(liText => {
                            const li = createElement('li', '', liText);
                            solutionList.appendChild(li);
                        });
                        sectionEl.appendChild(solutionList);
                        break;
                    case 'note':
                        sectionEl = createElement('div', 'note-box', section.text);
                        break;
                }

                if (sectionEl) {
                    sectionDiv.appendChild(sectionEl);
                }
            });
        }

        contentEl.appendChild(sectionDiv);
    });
};

// Renders the Review tab
const renderReview = (reviewData) => {
    const contentEl = document.getElementById('review-content');
    contentEl.innerHTML = '';

    if (!reviewData || reviewData.length === 0) {
        contentEl.innerHTML = '<p class="text-gray-500 text-center py-8">No review items available for this meeting.</p>';
        return;
    }

    reviewData.forEach(item => {
        const card = createElement('div', 'card p-6');

        // Header with title and status
        const header = createElement('div', 'flex justify-between items-start mb-4');
        const title = createElement('h3', 'text-lg font-semibold text-gray-800', item.title);
        const status = createElement('span', `px-3 py-1 rounded-full text-sm font-medium status-${item.status}`);
        status.textContent = item.status.charAt(0).toUpperCase() + item.status.slice(1);
        
        header.appendChild(title);
        header.appendChild(status);
        card.appendChild(header);

        // Description
        const description = createElement('p', 'text-gray-600 mb-4', item.description);
        card.appendChild(description);

        // Details grid
        const details = createElement('div', 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-4');
        
        const assignedTo = createElement('div', 'text-sm');
        assignedTo.innerHTML = `<span class="font-semibold">Assigned To:</span> ${item.assignedTo}`;
        
        const deadline = createElement('div', 'text-sm');
        deadline.innerHTML = `<span class="font-semibold">Deadline:</span> ${new Date(item.deadline).toLocaleDateString()}`;
        
        details.appendChild(assignedTo);
        details.appendChild(deadline);
        card.appendChild(details);

        // Progress
        const progress = createElement('div', 'text-sm');
        progress.innerHTML = `<span class="font-semibold">Progress:</span> ${item.progress}`;
        card.appendChild(progress);

        contentEl.appendChild(card);
    });
};

// --- 3. UI/EVENT LOGIC ---

const switchTab = (tabName) => {
    const agendaContent = document.getElementById('content-agenda');
    const minutesContent = document.getElementById('content-minutes');
    const reviewContent = document.getElementById('content-review');
    const agendaButton = document.getElementById('tab-agenda');
    const minutesButton = document.getElementById('tab-minutes');
    const reviewButton = document.getElementById('tab-review');

    // Reset all buttons
    [agendaButton, minutesButton, reviewButton].forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all content
    [agendaContent, minutesContent, reviewContent].forEach(content => content.classList.add('hidden'));

    // Activate the selected tab
    if (tabName === 'agenda') {
        agendaContent.classList.remove('hidden');
        agendaButton.classList.add('active');
    } else if (tabName === 'minutes') {
        minutesContent.classList.remove('hidden');
        minutesButton.classList.add('active');
    } else if (tabName === 'review') {
        reviewContent.classList.remove('hidden');
        reviewButton.classList.add('active');
    }
};

// Back to meetings list
const goBackToMeetings = () => {
    document.getElementById('meeting-details-page').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    currentMeetingData = null;
};

// Print functionality
const setupPrint = () => {
    const printButton = document.getElementById('print-button');
    printButton.addEventListener('click', () => {
        window.print();
    });
};

// Back button functionality
const setupBackButton = () => {
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', goBackToMeetings);
};

// --- 4. INITIALIZATION ---

window.onload = () => {
    renderMeetingsList();
    setupPrint();
    setupBackButton();
    
    // Default to landing page
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('meeting-details-page').classList.add('hidden');
};