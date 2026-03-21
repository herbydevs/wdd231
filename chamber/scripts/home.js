// --- Setup & Configuration ---
const members = [
    { "name": "Vincy Tech", "logo": "💻", "phone": "784-555-0101", "address": "Kingstown", "website": "vincytech.com", "level": "Gold" },
    { "name": "Island Realty", "logo": "🏝️", "phone": "784-555-0202", "address": "Bequia", "website": "islandrealty.vc", "level": "Silver" },
    { "name": "Green Energy VC", "logo": "🔋", "phone": "784-555-0303", "address": "Arnos Vale", "website": "greenvc.com", "level": "Gold" },
    { "name": "Harbor Cafe", "logo": "☕", "phone": "784-555-0404", "address": "Port Elizabeth", "website": "harborcafe.vc", "level": "Silver" }
];

// --- Weather Function ---
async function loadWeather() {
    const container = document.getElementById('weather-content');
    try {
        // Simulated weather data (use OpenWeatherMap API for production)
        const data = {
            temp: 82,
            desc: "Sunny",
            forecast: [
                { day: "Mon", high: 84 },
                { day: "Tue", high: 83 },
                { day: "Wed", high: 85 }
            ]
        };

        container.innerHTML = `
            <div style="font-size: 3rem; font-weight: bold;">${data.temp}°F</div>
            <div>
                <p style="font-weight: bold; font-size: 1.2rem;">${data.desc}</p>
                <p>Kingstown, SVG</p>
            </div>
            <div class="forecast">
                ${data.forecast.map(f => `
                    <div class="forecast-day">
                        <span style="font-size: 0.8rem; display: block;">${f.day}</span>
                        <strong>${f.high}°</strong>
                    </div>
                `).join('')}
            </div>
        `;
    } catch (e) {
        container.innerHTML = "Weather currently unavailable.";
    }
}

// --- Spotlight Function ---
function loadSpotlights() {
    const container = document.getElementById('spotlight-container');
    if (!container) return;

    // Filter members for Gold and Silver only
    const eligible = members.filter(m => m.level === "Gold" || m.level === "Silver");

    // Shuffle and pick 2 random members
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selection = shuffled.slice(0, 2);

    container.innerHTML = selection.map(m => `
        <div class="spotlight-card">
            <h4>${m.logo} ${m.name} <span class="level-badge">${m.level}</span></h4>
            <p style="font-size: 0.9rem;">${m.phone}</p>
            <p style="font-size: 0.9rem;"><a href="https://${m.website}" target="_blank" style="color: var(--accent-color);">${m.website}</a></p>
        </div>
    `).join('');
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Update Dates
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) lastModSpan.textContent = `Last Modified: ${document.lastModified}`;

    // 2. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuBtn && navUl) {
        menuBtn.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // 3. Load Dynamic Components
    loadWeather();
    loadSpotlights();
});