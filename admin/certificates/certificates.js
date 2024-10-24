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
        certificate.classList.remove('template1', 'template2', 'template3');

        // Apply the template-specific class
        if (template === 'template1.png') {
            certificate.classList.add('template1');
        } else if (template === 'template2.png') {
            certificate.classList.add('template2');
        } else if (template === 'template3.png') {
            certificate.classList.add('template3');
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

    document.getElementById('download').addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const name = document.getElementById('nameDisplay').textContent;
        const lessonsList = Array.from(document.getElementById('lessonsDisplay').children);
        const lessons = lessonsList.map(item => item.textContent);
        const date = document.getElementById('dateDisplay').textContent;

        const orientation = document.querySelector('input[name="orientation"]:checked').value;
        const paperSize = document.getElementById('paperSize').value;

        // Map selected paper size to jsPDF dimensions
        let dimensions;
        if (paperSize === 'A4') {
            dimensions = [210, 297];  // A4 size in mm
        } else if (paperSize === 'A5') {
            dimensions = [148, 210];  // A5 size in mm
        }

        // Adjust for landscape if selected
        if (orientation === 'landscape') {
            dimensions.reverse();
        }

        const doc = new jsPDF({
            orientation: orientation,
            unit: 'mm',
            format: dimensions
        });

        doc.setFontSize(20);
        doc.text('Certificate of Achievement', dimensions[0] / 2, 40, { align: 'center' });
        doc.setFontSize(14);
        doc.text('This certifies that', dimensions[0] / 2, 70, { align: 'center' });
        doc.setFontSize(24);
        doc.text(name, dimensions[0] / 2, 100, { align: 'center' });
        doc.setFontSize(14);
        doc.text('has completed the course successfully.', dimensions[0] / 2, 130, { align: 'center' });
        doc.text('Lessons Learned:', dimensions[0] / 2, 150, { align: 'center' });

        // Add lessons in the PDF
        lessons.forEach((lesson, index) => {
            doc.setFontSize(12);
            doc.text(`${index + 1}. ${lesson}`, dimensions[0] / 2, 160 + (index * 10), { align: 'center' });
        });

        doc.setFontSize(14);
        doc.text(`Date: ${date}`, dimensions[0] / 2, 180 + (lessons.length * 10), { align: 'center' });

        doc.save('certificate.pdf');
    });
});