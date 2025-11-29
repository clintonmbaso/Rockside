

        // --- 2. RENDERING FUNCTIONS ---

        // Function to create an HTML element
        const createElement = (tag, className, content) => {
            const el = document.createElement(tag);
            if (className) el.className = className;
            if (content) el.innerHTML = content;
            return el;
        };

        // Renders the main metadata (Title, Date, etc.)
        const renderMetadata = () => {
            document.getElementById('meeting-title').textContent = MEETING_METADATA.title;
            document.getElementById('meeting-details').innerHTML = `
                <h1>${MEETING_METADATA.type}</h1>
                <p>Held at ${MEETING_METADATA.location}</p>
                <p>${MEETING_METADATA.date} at ${MEETING_METADATA.time}</p>
                <p>Chaired by ${MEETING_METADATA.chair}</p>
            `;
            document.getElementById('minutes-secretary').textContent = MEETING_METADATA.secretary;
        };

        // Renders the Agenda tab
        const renderAgenda = () => {
            const listEl = document.getElementById('agenda-list');
            listEl.innerHTML = '';

            AGENDA_DATA.forEach(item => {
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
        const renderMinutes = () => {
            const contentEl = document.getElementById('minutes-content');
            contentEl.innerHTML = '';

            MINUTES_DATA.forEach(item => {
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
                item.sections.forEach(section => {
                    let sectionEl;

                    switch (section.type) {
                        case 'subheading':
                            sectionEl = createElement('h4', 'subheading', section.text);
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

                contentEl.appendChild(sectionDiv);
            });
        };

        // --- 3. UI/EVENT LOGIC ---

        const switchTab = (tabName) => {
            const agendaContent = document.getElementById('content-agenda');
            const minutesContent = document.getElementById('content-minutes');
            const agendaButton = document.getElementById('tab-agenda');
            const minutesButton = document.getElementById('tab-minutes');

            // Reset all buttons
            [agendaButton, minutesButton].forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Hide all content
            [agendaContent, minutesContent].forEach(content => content.classList.add('hidden'));

            // Activate the selected tab
            if (tabName === 'agenda') {
                agendaContent.classList.remove('hidden');
                agendaButton.classList.add('active');
            } else if (tabName === 'minutes') {
                minutesContent.classList.remove('hidden');
                minutesButton.classList.add('active');
            }
        };

        // Print functionality
        const setupPrint = () => {
            const printButton = document.getElementById('print-button');
            printButton.addEventListener('click', () => {
                window.print();
            });
        };

        // --- 4. INITIALIZATION ---

        window.onload = () => {
            renderMetadata();
            renderAgenda();
            renderMinutes();
            setupPrint();
            // Default to the Agenda view on load
            switchTab('agenda');
        };