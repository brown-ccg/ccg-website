
function createCard(name, role, classYear, about, email, linkedin, imageName) {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow h-100">
                <img src="./images/headshots/${imageName}" class="card-img-top person-image" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">${name}</h5>
                    <div class="card-text text-black-50">${role}, ${classYear}</div>
                    <p class="person-text">${about}</p>
                </div>
                <div class="card-footer bg-transparent">
                    <span class="person-span">
                        <a class="mail" href=${email}>
                            <img src="images/assets/mail.svg" width="30" height="30" onmouseover="hoverMail(this);" onmouseout="unhoverMail(this);">
                        </a>
                        <a class="linkedin" target="_blank" href="${linkedin}">
                            <img src="images/assets/linkedin.png" height="30">
                        </a>
                    </span>
                </div>
            </div>
        </div>
      `;
    // TODO: remove linkedin if none provided

    return template.content.firstElementChild;
}

function createRow() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="row justify-content-center">

        </div>
      `;
    return template.content.firstElementChild;
}

// Example data for each card.
const dummyCardData = [
    {
        "timestamp": "2022/10/24 10:19:12 PM AST",
        "name": "Karan Kashyap",
        "role": "Co-President",
        "classYear": 2025,
        "about": "Karan is a sophomore from New Delhi, India, studying Computer Science and Behavioral Decision Sciences. Outside of the classroom, he loves solving puzzles, playing tennis, and building software.",
        "email": "karan_kashyap@brown.edu",
        "linkedin": "https://www.linkedin.com/in/karan-kashyap04/",
        "fullImageLink": "",
        "imageName": "karan-k.jpg"
    },
    {
        "timestamp": "2022/09/26 2:19:35 PM AST",
        "name": "Benjamin Moshes",
        "role": "Co-President",
        "classYear": 2025,
        "about": "Benjamin is a junior from Newton, MA concentrating in Applied Math and Economics. He is also a member of the Finance Team on the Brown Daily Herald. In his free time, Benjamin loves watching NFL football and making scallion pancakes.",
        "email": "benjamin_moshes@brown.edu",
        "linkedin": "https://www.linkedin.com/in/benjamin-moshes-39a1a820b/",
        "fullImageLink": "https://drive.google.com/u/0/open?usp=forms_web&id=1HNRCeFLGb62bMwv5zyMWMykBCP90CPXP",
        "imageName": "benjamin-m.jpg"
    },
    {
        "timestamp": "2022/10/09 2:05:00 PM AST",
        "name": "Danna Ofek",
        "role": "Co-President",
        "classYear": 2024,
        "about": "Danna is a senior from Lexington, MA concentrating in Business Economics and Public Health. She is also a member of Brown Women’s Cross Country and Track teams. In her free time, Danna enjoys the outdoors and doing yoga.",
        "email": "danna_ofek@brown.edu",
        "linkedin": "https://www.linkedin.com/in/danna-ofek-12b4aa23b/",
        "fullImageLink": "https://drive.google.com/u/0/open?usp=forms_web&id=1Duh0rdOWxepx9Woi37NLFRSTk5DZry-S",
        "imageName": "danna-o.jpg"
    }
]


function generateCards(currentRow, cardData) {

    let tempRow = createRow();

    for (let i = 0; i < cardData.length; i++) {
        const card = createCard(cardData[i].name, cardData[i].role, cardData[i].classYear, cardData[i].about, cardData[i].email, cardData[i].linkedin, cardData[i].imageName);

        if ((i + 1) % 3 == 0) {
            // Create a new row every 3 cards
            tempRow.appendChild(card);
            currentRow.appendChild(tempRow);
            tempRow = createRow();
        } else {
            // Add the card to the current row
            tempRow.appendChild(card);
        }
        // leadershipRow.appendChild(card);
    }
    if (cardData.length % 3 != 0) {
        currentRow.appendChild(tempRow);
    }
}

// MAIN
const r1 = document.getElementById("card-dock-prez");
const r2 = document.getElementById("card-dock-leadership");
const r3 = document.getElementById("card-dock-consultants");
if (r1){
    generateCards(r1, dummyCardData);
}
if (r2){
    generateCards(r2, dummyCardData);
}
if (r3){
    generateCards(r3, dummyCardData);
}
