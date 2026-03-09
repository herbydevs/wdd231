// --- NAVIGATION LOGIC ---
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
        // Toggle between hamburger icon and X
        menuToggle.innerHTML = navList.classList.contains('show') ? '&times;' : '&#9776;';
    });
}

// --- DATE LOGIC ---
const yearSpan = document.getElementById('currentyear');
const lastModPara = document.getElementById('lastModified');

// Set current year dynamically
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date dynamically
if (lastModPara) {
    lastModPara.textContent = `Last Modified: ${document.lastModified}`;
}

// --- COURSE DATA ---
// Array containing course objects for the Web and Computer Programming certificate
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to programming logic and structures.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Learning the basics of HTML and CSS.',
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on functional programming concepts.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to JavaScript and DOM manipulation.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Advanced frontend techniques and frameworks.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Object-oriented programming concepts.',
        completed: false
    }
];

// --- DYNAMIC RENDERING ---
const courseContainer = document.getElementById('course-container');
const creditsSummary = document.getElementById('credits-summary');

/**
 * Filters and displays course cards based on the subject.
 * @param {string} filter - 'all', 'cse', or 'wdd'
 */
function displayCourses(filter = 'all') {
    // Clear current display to avoid duplication
    if (courseContainer) {
        courseContainer.innerHTML = '';

        // Filter array based on user selection
        const filteredCourses = filter === 'all' 
            ? courses 
            : courses.filter(course => course.subject.toLowerCase() === filter.toLowerCase());

        // Generate HTML for each course card
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            // Apply different styling for completed vs incomplete courses
            card.className = `course-card ${course.completed ? 'completed' : 'incomplete'}`;
            card.innerHTML = `<span>${course.subject} ${course.number}</span>`;
            courseContainer.appendChild(card);
        });

        // Update total credits using the reduce method
        const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        if (creditsSummary) {
            creditsSummary.textContent = `Total Credits: ${total}`;
        }
    }
}

// Event Listeners for Filtering Buttons
const allBtn = document.getElementById('all');
const cseBtn = document.getElementById('cse');
const wddBtn = document.getElementById('wdd');

if (allBtn) allBtn.addEventListener('click', () => displayCourses('all'));
if (cseBtn) cseBtn.addEventListener('click', () => displayCourses('cse'));
if (wddBtn) wddBtn.addEventListener('click', () => displayCourses('wdd'));

// Initial Load on page startup
displayCourses();