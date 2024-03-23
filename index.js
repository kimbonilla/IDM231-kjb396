/*audio*/
document.addEventListener("DOMContentLoaded", function() {
    const showAndPlay = (selector, audioSelector) => {
        const element = document.querySelector(selector);
        if (element.style.display === "none") {
            element.style.display = "block";
            const audio = document.querySelector(audioSelector);
            audio.currentTime = 0;
            audio.play();
        } else {
            element.style.display = "none";
        }
    };

/*exit button*/
    const addExitEventListener = (exitButtonSelector, elementSelector, audioSelector) => {
        const exitButton = document.querySelector(exitButtonSelector);
        exitButton.addEventListener("click", function() {
            const element = document.querySelector(elementSelector);
            element.style.display = "none";
            const audio = document.querySelector(audioSelector);
            audio.pause();
        });
    };

/*mob content*/
    const mobSelectors = [
        { button: '.enderman button', pic: '.enderman-pic', container: '.enderman', audio: '.enderman-audio' },
        { button: '.zombie button', pic: '.zombie-pic', container: '.zombie', audio: '.zombie-audio' },
        { button: '.pig button', pic: '.pig-pic', container: '.pig', audio: '.pig-audio' },
        { button: '.sheep button', pic: '.sheep-pic', container: '.sheep', audio: '.sheep-audio' },
        { button: '.skeleton button', pic: '.skeleton-pic', container: '.skeleton', audio: '.skeleton-audio' },
        { button: '.chicken button', pic: '.chicken-pic', container: '.chicken', audio: '.chicken-audio' },
        { button: '.spider button', pic: '.spider-pic', container: '.spider', audio: '.spider-audio' },
        { button: '.creeper button', pic: '.creeper-pic', container: '.creeper', audio: '.creeper-audio' },
        { button: '.villager button', pic: '.villager-pic', container: '.villager', audio: '.villager-audio' },
        { button: '.ender-dragon button', pic: '.ender-dragon-pic', container: '.ender-dragon', audio: '.ender-dragon-audio' },
        { button: '.llama button', pic: '.llama-pic', container: '.llama', audio: '.llama-audio' },
        { button: '.wolf button', pic: '.wolf-pic', container: '.wolf', audio: '.wolf-audio' }
    ];

/*pop up cards on click*/
    mobSelectors.forEach(({ button, pic, container, audio }) => {
        const exitButton = `${container} button`;
        const exitElement = `${container}-button`;
        const exitAudio = `${container}-audio`;

        const exitButtonSelector = document.querySelector(exitButton);
        const elementSelector = document.querySelector(exitElement);
        const audioSelector = document.querySelector(exitAudio);

        addExitEventListener(exitButton, elementSelector, audioSelector);

        const smallElement = document.querySelector(pic);
        smallElement.addEventListener("click", () => showAndPlay(container, audio));
    });

/*help button*/
    const helpButton = document.querySelector('.help-button button');
    const helpInfo = document.querySelector('.instructions');
    helpButton.addEventListener('click', function() {
        if (helpInfo.style.visibility === 'hidden') {
            helpInfo.style.visibility = 'visible';
        } else {
            helpInfo.style.visibility = 'hidden';
        }
    });

/*pop up card on birthday input*/
    const birthdayForm = document.querySelector('.birthday-form');
    const handleBirthdayForm = event => {
        event.preventDefault();
        const birthdayInput = document.querySelector('.calendar');
        const birthdayValue = birthdayInput.value;
        let mob;

        const month = parseInt(birthdayValue.split('-')[1]);
        const day = parseInt(birthdayValue.split('-')[2]);

        const dateRanges = [
            { mob: 'enderman', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
            { mob: 'zombie', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
            { mob: 'pig', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
            { mob: 'sheep', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
            { mob: 'skeleton', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
            { mob: 'chicken', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
            { mob: 'spider', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
            { mob: 'creeper', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
            { mob: 'villager', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
            { mob: 'ender-dragon', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
            { mob: 'llama', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
            { mob: 'wolf', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 }
        ];

        for (const range of dateRanges) {
            if ((month === range.startMonth && day >= range.startDay) || (month === range.endMonth && day <= range.endDay)) {
                mob = range.mob;
                break;
            }
        }

        const hideAllMobs = document.querySelectorAll('.cards > div');
        hideAllMobs.forEach(m => m.style.display = 'none');

        const showMob = document.querySelector('.' + mob);
        showMob.style.display = 'block';

        const audio = document.querySelector('.' + mob + '-audio');
        if (audio) {
            audio.play();
        }

        const exitButton = showMob.querySelector('.close');
        exitButton.style.display = 'block';
        exitButton.addEventListener('click', function() {
            showMob.style.display = 'none';
            if (audio) {
                audio.pause();
            }
        });
    };

    birthdayForm.addEventListener('submit', handleBirthdayForm);
});