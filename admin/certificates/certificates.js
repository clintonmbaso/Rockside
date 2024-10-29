document.addEventListener('DOMContentLoaded', () => {
    const lessonsContainer = document.getElementById('lessonsContainer');
    const addLessonButton = document.getElementById('addLesson');
    const removeLessonButton = document.getElementById('removeLesson');
    const certificate = document.getElementById('certificate');

    // Add lesson input
    addLessonButton.addEventListener('click', () => {
        const lessonCount = lessonsContainer.children.length;
        const newLesson = document.createElement('input');
        newLesson.type = 'text';
        newLesson.name = 'lesson';
        newLesson.classList.add('lesson');
        newLesson.placeholder = `Lesson ${lessonCount + 1}`;
        lessonsContainer.appendChild(newLesson);
    });

    // Remove lesson input
    removeLessonButton.addEventListener('click', () => {
        const lessonCount = lessonsContainer.children.length;
        if (lessonCount > 1) {
            lessonsContainer.removeChild(lessonsContainer.lastChild);
        }
    });

// Function to update the certificate size and orientation in real time
// Function to update the certificate size and orientation in real time
function updateCertificateSizeAndOrientation() {
    const orientation = document.querySelector('input[name="orientation"]:checked').value;
    const paperSize = document.getElementById('paperSize').value;
    const certificate = document.getElementById('certificate');
    const body = document.body;

    // Clear previously applied classes on certificate and body
    certificate.classList.remove('a4-portrait', 'a4-landscape', 'a5-portrait', 'a5-landscape');
    body.classList.remove('a4-portrait', 'a4-landscape', 'a5-portrait', 'a5-landscape');

    // Apply the correct class based on paper size and orientation
    if (paperSize === 'A4' && orientation === 'portrait') {
        certificate.classList.add('a4-portrait');
        body.classList.add('a4-portrait');
    } else if (paperSize === 'A4' && orientation === 'landscape') {
        certificate.classList.add('a4-landscape');
        body.classList.add('a4-landscape');
    } else if (paperSize === 'A5' && orientation === 'portrait') {
        certificate.classList.add('a5-portrait');
        body.classList.add('a5-portrait');
    } else if (paperSize === 'A5' && orientation === 'landscape') {
        certificate.classList.add('a5-landscape');
        body.classList.add('a5-landscape');
    }
    
    // Adjust body width dynamically to match the certificate width
    document.body.style.width = certificate.style.width;
}

// Event listeners to update the design when paper size or orientation is changed
document.getElementById('paperSize').addEventListener('change', updateCertificateSizeAndOrientation);
document.querySelectorAll('input[name="orientation"]').forEach(radio => {
    radio.addEventListener('change', updateCertificateSizeAndOrientation);
});

// Initial call to apply default settings on page load
updateCertificateSizeAndOrientation();

// Event listeners to update the design when paper size or orientation is changed
document.getElementById('paperSize').addEventListener('change', updateCertificateSizeAndOrientation);
document.querySelectorAll('input[name="orientation"]').forEach(radio => {
    radio.addEventListener('change', updateCertificateSizeAndOrientation);
});

// Initial call to apply default settings on page load
updateCertificateSizeAndOrientation();

document.getElementById('generate').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const lessonsInputs = document.querySelectorAll('.lesson');
    const template = document.getElementById('templateSelect').value;

    if (name.trim() === '' || lessonsInputs.length === 0 || template === '') {
        alert('Please fill out all fields and select a template.');
        return;
    }

    // Collect lessons
    const lessons = Array.from(lessonsInputs).map(input => input.value.trim()).filter(Boolean);

    if (lessons.length === 0) {
        alert('Please enter at least one lesson.');
        return;
    }

    const certificate = document.getElementById('certificate');

    // Apply the template background image
    certificate.style.backgroundImage = `url('${template}')`;
    certificate.style.display = 'block';

    // Set content
    document.getElementById('nameDisplay').textContent = name;

    const lessonsDisplay = document.getElementById('lessonsDisplay');
    lessonsDisplay.innerHTML = '';  // Clear previous lessons
    lessons.forEach((lesson, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Lesson ${index + 1}: ${lesson}`;
        lessonsDisplay.appendChild(listItem);
    });

    document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString();

    // Display the download button
    document.getElementById('download').style.display = 'inline-block';
});
    
    
    
    // Handle template selection and apply styles
    document.getElementById('generate').addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const lessonsInputs = document.querySelectorAll('.lesson');
        const template = document.getElementById('templateSelect').value;
        const date = new Date().toLocaleDateString();
        const orientation = document.querySelector('input[name="orientation"]:checked').value;
        const paperSize = document.getElementById('paperSize').value;

        if (name.trim() === '' || lessonsInputs.length === 0 || template === '') {
            alert('Please fill out all fields and select a template.');
            return;
        }

        // Collect all lessons
        const lessons = Array.from(lessonsInputs).map(input => input.value.trim()).filter(Boolean);

        if (lessons.length === 0) {
            alert('Please enter at least one lesson.');
            return;
        }

        // Clear previously applied template classes
        certificate.classList.remove('template1', 'template2', 'template3', 'template4', 'template5', 'template6');

        // Apply the template-specific class
        if (template === 'templates/template1.png') {
            certificate.classList.add('template1');
        } else if (template === 'templates/template2.png') {
            certificate.classList.add('template2');
        } else if (template === 'templates/template3.png') {
            certificate.classList.add('template3');
        } else if (template === 'templates/template4.png') {
            certificate.classList.add('template4');
        } else if (template === 'templates/template5.png') {
            certificate.classList.add('template5');
        } else if (template === 'templates/template6.png') {
            certificate.classList.add('template6');
        } else if (template === 'templates/template7.png') {
            certificate.classList.add('template7');
        }

        // Set the background image based on the selected template
        certificate.style.backgroundImage = `url('${template}')`;
        certificate.style.display = 'block';

        // Set the text content
        document.getElementById('nameDisplay').textContent = name;

        const lessonsDisplay = document.getElementById('lessonsDisplay');
        lessonsDisplay.innerHTML = '';  // Clear any previous entries
        lessons.forEach((lesson, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Honour ${index + 1}: ${lesson}`;
            lessonsDisplay.appendChild(listItem);
        });

        document.getElementById('dateDisplay').textContent = date;

        document.getElementById('download').style.display = 'inline-block';
    });

document.getElementById('generate').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const lessonsInputs = document.querySelectorAll('.lesson');
    const template = document.getElementById('templateSelect').value;

    if (name.trim() === '' || lessonsInputs.length === 0 || template === '') {
        alert('Please fill out all fields and select a template.');
        return;
    }

    // Collect lessons
    const lessons = Array.from(lessonsInputs).map(input => input.value.trim()).filter(Boolean);

    if (lessons.length === 0) {
        alert('Please enter at least one lesson.');
        return;
    }

    const certificate = document.getElementById('certificate');

    // Apply the template background image
    certificate.style.backgroundImage = `url('${template}')`;
    certificate.style.display = 'block';

    // Set content
    document.getElementById('nameDisplay').textContent = name;

    const lessonsDisplay = document.getElementById('lessonsDisplay');
    lessonsDisplay.innerHTML = '';  // Clear previous lessons
    lessons.forEach((lesson, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Lesson ${index + 1}: ${lesson}`;
        lessonsDisplay.appendChild(listItem);
    });

    document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString();

    // Display the download button
    document.getElementById('download').style.display = 'inline-block';
});

    
    
    const saveButton = document.getElementById('save');
    const savedEntriesDropdown = document.getElementById('savedEntries');
    
    // Function to save the current form data to local storage
    saveButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const lessonsInputs = document.querySelectorAll('.lesson');
        const template = document.getElementById('templateSelect').value;
        const paperSize = document.getElementById('paperSize').value;
        const orientation = document.querySelector('input[name="orientation"]:checked').value;

        // Collect lessons
        const lessons = Array.from(lessonsInputs).map(input => input.value.trim()).filter(Boolean);
        
        if (name.trim() === '' || lessons.length === 0 || template === '') {
            alert('Please fill out all fields before saving.');
            return;
        }

        // Create an entry object
        const entry = {
            name,
            lessons,
            template,
            paperSize,
            orientation
        };

        // Save entry to local storage
        let savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
        savedEntries.push(entry);
        localStorage.setItem('savedEntries', JSON.stringify(savedEntries));
        
        alert('Entry saved successfully!');

        // Update dropdown with the new entry
        updateSavedEntriesDropdown();
    });

    // Function to populate the dropdown with saved entries
    function updateSavedEntriesDropdown() {
        // Clear existing options except the first one
        savedEntriesDropdown.innerHTML = '<option value="">Select a saved entry</option>';
        
        const savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
        savedEntries.forEach((entry, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = entry.name;
            savedEntriesDropdown.appendChild(option);
        });
    }

    // Load the selected entry from the dropdown
    savedEntriesDropdown.addEventListener('change', () => {
        const selectedIndex = savedEntriesDropdown.value;
        if (selectedIndex === "") return;

        const savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
        const selectedEntry = savedEntries[selectedIndex];

        // Populate form fields with selected entry details
        document.getElementById('name').value = selectedEntry.name;
        document.getElementById('templateSelect').value = selectedEntry.template;
        document.getElementById('paperSize').value = selectedEntry.paperSize;
        document.querySelector(`input[name="orientation"][value="${selectedEntry.orientation}"]`).checked = true;

        // Populate lessons
        const lessonsContainer = document.getElementById('lessonsContainer');
        lessonsContainer.innerHTML = ''; // Clear existing inputs
        selectedEntry.lessons.forEach((lesson, index) => {
            const newLesson = document.createElement('input');
            newLesson.type = 'text';
            newLesson.name = 'lesson';
            newLesson.classList.add('lesson');
            newLesson.placeholder = `Lesson ${index + 1}`;
            newLesson.value = lesson;
            lessonsContainer.appendChild(newLesson);
        });
    });

    // Initial load to populate dropdown with any saved entries
    updateSavedEntriesDropdown();

    
    
    
    
document.getElementById('download').addEventListener('click', function () {
    const certificate = document.getElementById('certificate');

    domtoimage.toPng(certificate)
        .then(function (dataUrl) {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'certificate.png';
            link.click();
        })
        .catch(error => console.error('Error capturing the element:', error));
});
    
});