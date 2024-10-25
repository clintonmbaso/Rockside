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

function updateCertificateSizeAndOrientation() {
    const orientation = document.querySelector('input[name="orientation"]:checked').value;
    const paperSize = document.getElementById('paperSize').value;
    const certificate = document.getElementById('certificate');

    // Remove previously applied classes
    certificate.classList.remove('a4-portrait', 'a4-landscape', 'a5-portrait', 'a5-landscape');

    // Apply the new size and orientation class
    if (paperSize === 'A4' && orientation === 'portrait') {
        certificate.classList.add('a4-portrait');
    } else if (paperSize === 'A4' && orientation === 'landscape') {
        certificate.classList.add('a4-landscape');
    } else if (paperSize === 'A5' && orientation === 'portrait') {
        certificate.classList.add('a5-portrait');
    } else if (paperSize === 'A5' && orientation === 'landscape') {
        certificate.classList.add('a5-landscape');
    }
}

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
            listItem.textContent = `Lesson ${index + 1}: ${lesson}`;
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

document.getElementById('download').addEventListener('click', function () {
    const certificate = document.getElementById('certificate');

    // Set options for the PDF generation (including orientation and format)
    const orientation = document.querySelector('input[name="orientation"]:checked').value;
    const paperSize = document.getElementById('paperSize').value;

    const options = {
        margin: 0,
        filename: 'certificate.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true }, // Ensures the background is rendered properly
        jsPDF: { unit: 'mm', format: paperSize === 'A4' ? 'a4' : 'a5', orientation: orientation }
    };

    // Generate PDF with background and text
    html2pdf().from(certificate).set(options).save();
});
});