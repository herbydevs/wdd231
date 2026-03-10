const url = 'data/members.json';
const display = document.querySelector("#members");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const displayMembers = (members) => {
    display.innerHTML = "";
    members.forEach((member) => {
        let section = document.createElement("section");
        section.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy" width="250" height="150">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p class="membership-level">Level: ${member.membership}</p>`;
        display.appendChild(section);
    });
}

gridbutton.addEventListener("click", () => {
    display.classList.add("grid-view");
    display.classList.remove("list-view");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list-view");
    display.classList.remove("grid-view");
});

// Footer Info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;

getMembers();
