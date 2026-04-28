const requestURL = 'http://localhost:3000/tournaments';

async function fetchTournamentsJson() {
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
}

fetchTournamentsJson().then(tournaments => {
    for (let index = 0; index < tournaments.length; index++) {

        const tournamentSection = document.getElementById('tournamentSection');

        let id          = tournaments[index].id;
        let image       = tournaments[index].image;
        let title       = tournaments[index].title;
        let edition     = tournaments[index].edition;
        let surface     = tournaments[index].surface;
        let location    = tournaments[index].location;
        let opponent    = tournaments[index].opponent;
        let score       = tournaments[index].score;
        let category    = tournaments[index].category;
        let description = tournaments[index].description;

        tournamentSection.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card tournamentCard border-0">
                <div class="cardImgWrapper">
                    <img src="${image}" class="card-img-top" alt="${title} - ${edition}">
                </div>
                <div class="cardBody">
                    <span class="cardCategoryBadge">${category}</span>
                    <h5 class="cardTitle">${title}</h5>
                    <p class="cardEdition">${edition}</p>
                    <p class="cardDescription">${description}</p>
                </div>
                <div class="cardFooterInfo">
                    <div class="cardDetail">
                        <span class="cardDetailLabel">Surface</span>
                        <span class="cardDetailValue">${surface}</span>
                    </div>
                    <div class="cardDetail">
                        <span class="cardDetailLabel">Location</span>
                        <span class="cardDetailValue">${location}</span>
                    </div>
                    <div class="cardDetail">
                        <span class="cardDetailLabel">Opponent</span>
                        <span class="cardDetailValue">${opponent}</span>
                    </div>
                    <div class="cardDetail">
                        <span class="cardDetailLabel">Score</span>
                        <span class="cardDetailValue">${score}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
});