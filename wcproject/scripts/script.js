const days = {
    '12/9': [
        {
            flagTeam: 'croatia',
            flagVsTeam: 'brazil',
            hour: '10:00am',
        },
        {
            flagTeam: 'netherlands',
            flagVsTeam: 'argentina',
            hour: '2:00pm',
        },
    ],
    '12/10': [
        {
            flagTeam: 'morocco',
            flagVsTeam: 'portugal',
            hour: '10:00am',
        },
        {
            flagTeam: 'england',
            flagVsTeam: 'france',
            hour: '2:00pm',
        },
    ],
    '12/13': [
        {
            flagTeam: 'tbd',
            flagVsTeam: 'croatia',
            hour: '10:00am',
        },
        {
            flagTeam: 'tbd',
            flagVsTeam: 'tbd',
            hour: '2:00pm',
        },
    ],
    '12/17': [
        {
            flagTeam: 'tbd',
            flagVsTeam: 'tbd',
            hour: '10:00am',
        },
        {
            flagTeam: 'tbd',
            flagVsTeam: 'tbd',
            hour: '2:00pm',
        },
    ],
    '12/18': [
        {
            flagTeam: 'tbd',
            flagVsTeam: 'tbd',
            hour: 'tbd',
        }
    ]
}
let currentDate = new Date();

const changeDate = (time) => {
    const date = new Date(time);
    const weekday = date.toLocaleString('en-us', {weekday: 'long'});
    const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}`;
    const cardTitle = document.getElementById('card-title')
    cardTitle.title = dateFormatted;
    cardTitle.innerHTML = `${dateFormatted}<span>${weekday}</span>`;

    const gameList = document.getElementById('game-list');
    const games = days[dateFormatted];
    if (games) {
        gameList.innerHTML = games.map(game => {
            return `
        <li class="main__card-item">
            <img
                src="./assets/images/icons8-${game.flagTeam}-48.png"
                alt="Flag of ${game.flagTeam}"
                title="Flag of ${game.flagTeam}"
                class="icon"
            />
            <strong>${game.hour}</strong>
            <img
                src="./assets/images/icons8-${game.flagVsTeam}-48.png"
                alt="Flag of ${game.flagVsTeam}"
                title="Flag of ${game.flagVsTeam}"
                class="icon"
            />
        </li>     
        `;
        }).join('\n');
    } else {
        gameList.innerHTML = '<p style="color: white">No matches.</p>';
    }
}

changeDate(currentDate);

function nextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    changeDate(currentDate);
}
function prevDay() {
    currentDate.setDate(currentDate.getDate() - 1);
    changeDate(currentDate);
}
