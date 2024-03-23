/*help*/
const helpButton= document.querySelector('.help-button button');
const helpInfo= document.querySelector('.instructions');

helpButton.addEventListener('click', function() {
    
    if (helpInfo.style.visibility=== 'hidden') {
        helpInfo.style.visibility= 'visible';
    } else {
        helpInfo.style.visibility= 'hidden';
    }
});

/*select mob*/
document.addEventListener("DOMContentLoaded", function() {

    const exitEndermanButton= document.querySelector('.enderman button')

    exitEndermanButton.addEventListener("click", function() {
        if (showEnderman.style.display = "block") {
            showEnderman.style.display = "none";
            const audio= document.querySelector('.enderman-audio')
            audio.pause();
        }
    });

    const smallEnderman= document.querySelector('.enderman-pic')
    const showEnderman= document.querySelector('.enderman')

    smallEnderman.addEventListener("click", function () {
        if (showEnderman.style.display == "none") {
            showEnderman.style.display = "block";
            exitEndermanButton.style.display = "block";
            const audio= document.querySelector('.enderman-audio')
            audio.currentTime = 0;
            audio.play();

        } else {
            showEnderman.style.display = "none";
        }
    });
});

const exitZombieButton= document.querySelector('.zombie button')

    exitZombieButton.addEventListener("click", function() {
        if (showZombie.style.display = "block") {
            showZombie.style.display = "none";
            const audio= document.querySelector('.zombie-audio')
            audio.pause();
        }
    });

const smallZombie= document.querySelector('.zombie-pic')
const showZombie= document.querySelector('.zombie')

document.addEventListener("DOMContentLoaded", function() {
    smallZombie.addEventListener("click", function () {
        if (showZombie.style.display == "none") {
            showZombie.style.display = "block";
            exitZombieButton.style.display = "block";
            const audio= document.querySelector('.zombie-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showZombie.style.display = "none";
        }
    });
});

const exitPigButton= document.querySelector('.pig button')

    exitPigButton.addEventListener("click", function() {
        if (showPig.style.display = "block") {
            showPig.style.display = "none";
            const audio= document.querySelector('.pig-audio')
            audio.pause();
        }
    });


const smallPig= document.querySelector('.pig-pic')
const showPig= document.querySelector('.pig')

document.addEventListener("DOMContentLoaded", function() {
    smallPig.addEventListener("click", function () {
        if (showPig.style.display == "none") {
            showPig.style.display = "block";
            exitPigButton.style.display = "block";
            const audio= document.querySelector('.pig-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showPig.style.display = "none";
        }
    });
});

const exitSheepButton= document.querySelector('.sheep button')

    exitSheepButton.addEventListener("click", function() {
        if (showSheep.style.display = "block") {
            showSheep.style.display = "none";
            const audio= document.querySelector('.sheep-audio')
            audio.pause();
        }
    });

const smallSheep= document.querySelector('.sheep-pic')
const showSheep= document.querySelector('.sheep')

document.addEventListener("DOMContentLoaded", function() {
    smallSheep.addEventListener("click", function () {
        if (showSheep.style.display == "none") {
            showSheep.style.display = "block";
            exitSheepButton.style.display = "block";
            const audio= document.querySelector('.sheep-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showSheep.style.display = "none";
        }
    });
});

const exitSkeletonButton= document.querySelector('.skeleton button')

    exitSkeletonButton.addEventListener("click", function() {
        if (showSkeleton.style.display = "block") {
            showSkeleton.style.display = "none";
            const audio= document.querySelector('.skeleton-audio')
            audio.pause();
        }
    });

const smallSkeleton= document.querySelector('.skeleton-pic')
const showSkeleton= document.querySelector('.skeleton')

document.addEventListener("DOMContentLoaded", function() {
    smallSkeleton.addEventListener("click", function () {
        if (showSkeleton.style.display == "none") {
            showSkeleton.style.display = "block";
            exitSkeletonButton.style.display = "block";
            const audio= document.querySelector('.skeleton-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showSkeleton.style.display = "none";
        }
    });
});

const exitChickenButton= document.querySelector('.chicken button')

    exitChickenButton.addEventListener("click", function() {
        if (showChicken.style.display = "block") {
            showChicken.style.display = "none";
            const audio= document.querySelector('.chicken-audio')
            audio.pause();
        }
    });

const smallChicken= document.querySelector('.chicken-pic')
const showChicken= document.querySelector('.chicken')

document.addEventListener("DOMContentLoaded", function() {
    smallChicken.addEventListener("click", function () {
        if (showChicken.style.display == "none") {
            showChicken.style.display = "block";
            exitChickenButton.style.display = "block";
            const audio= document.querySelector('.chicken-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showChicken.style.display = "none";
        }
    });
});

const exitSpiderButton= document.querySelector('.spider button')

    exitSpiderButton.addEventListener("click", function() {
        if (showSpider.style.display = "block") {
            showSpider.style.display = "none";
            const audio= document.querySelector('.spider-audio')
            audio.pause();
        }
    });

const smallSpider= document.querySelector('.spider-pic')
const showSpider= document.querySelector('.spider')

document.addEventListener("DOMContentLoaded", function() {
    smallSpider.addEventListener("click", function () {
        if (showSpider.style.display == "none") {
            showSpider.style.display = "block";
            exitSpiderButton.style.display = "block";
            const audio= document.querySelector('.spider-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showSpider.style.display = "none";
        }
    });
});

const exitCreeperButton= document.querySelector('.creeper button')

    exitCreeperButton.addEventListener("click", function() {
        if (showCreeper.style.display = "block") {
            showCreeper.style.display = "none";
            const audio= document.querySelector('.creeper-audio')
            audio.pause();
        }
    });

const smallCreeper= document.querySelector('.creeper-pic')
const showCreeper= document.querySelector('.creeper')

document.addEventListener("DOMContentLoaded", function() {
    smallCreeper.addEventListener("click", function () {
        if (showCreeper.style.display == "none") {
            showCreeper.style.display = "block";
            exitCreeperButton.style.display = "block";
            const audio= document.querySelector('.creeper-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showCreeper.style.display = "none";
        }
    });
});

const exitVillagerButton= document.querySelector('.villager button')

    exitVillagerButton.addEventListener("click", function() {
        if (showVillager.style.display = "block") {
            showVillager.style.display = "none";
            const audio= document.querySelector('.villager-audio')
            audio.pause();
        }
    });

const smallVillager= document.querySelector('.villager-pic')
const showVillager= document.querySelector('.villager')

document.addEventListener("DOMContentLoaded", function() {
    smallVillager.addEventListener("click", function () {
        if (showVillager.style.display == "none") {
            showVillager.style.display = "block";
            exitVillagerButton.style.display = "block";
            const audio= document.querySelector('.villager-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showVillager.style.display = "none";
        }
    });
});

const exitEnderDragonButton= document.querySelector('.ender-dragon button')

    exitEnderDragonButton.addEventListener("click", function() {
        if (showEnderDragon.style.display = "block") {
            showEnderDragon.style.display = "none";
            const audio= document.querySelector('.ender-dragon-audio')
            audio.pause();
        }
    });

const smallEnderDragon= document.querySelector('.ender-dragon-pic')
const showEnderDragon= document.querySelector('.ender-dragon')

document.addEventListener("DOMContentLoaded", function() {
    smallEnderDragon.addEventListener("click", function () {
        if (showEnderDragon.style.display == "none") {
            showEnderDragon.style.display = "block";
            exitEnderDragonButton.style.display = "block";
            const audio= document.querySelector('.ender-dragon-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showEnderDragon.style.display = "none";
        }
    });
});

const exitLlamaButton= document.querySelector('.llama button')

    exitLlamaButton.addEventListener("click", function() {
        if (showLlama.style.display = "block") {
            showLlama.style.display = "none";
            const audio= document.querySelector('.llama-audio')
            audio.pause();
        }
    });

const smallLlama= document.querySelector('.llama-pic')
const showLlama= document.querySelector('.llama')

document.addEventListener("DOMContentLoaded", function() {
    smallLlama.addEventListener("click", function () {
        if (showLlama.style.display == "none") {
            showLlama.style.display = "block";
            exitLlamaButton.style.display = "block";
            const audio= document.querySelector('.llama-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showLlama.style.display = "none";
        }
    });
});

const exitWolfButton= document.querySelector('.wolf button')

    exitWolfButton.addEventListener("click", function() {
        if (showWolf.style.display = "block") {
            showWolf.style.display = "none";
            const audio= document.querySelector('.wolf-audio')
            audio.pause();
        }
    });

const smallWolf= document.querySelector('.wolf-pic')
const showWolf= document.querySelector('.wolf')

document.addEventListener("DOMContentLoaded", function() {
    smallWolf.addEventListener("click", function () {
        if (showWolf.style.display == "none") {
            showWolf.style.display = "block";
            exitWolfButton.style.display = "block";
            const audio= document.querySelector('.wolf-audio')
            audio.currentTime = 0;
            audio.play();
        } else {
            showWolf.style.display = "none";
        }
    });
});

/*-------------- */
function getMonthDay(dateString) {
    var dateArr = dateString.split("-");
    var month = dateArr[1]
    var day = dateArr[2]
    return month, day
}

function getBirthdayMob() {
    var dateString = document.getElementsByClassName("calendar")[0].value;
    var month, day = getMonth(dateString);
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        document.getElementById("Mob").textContent = "wolf";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        document.getElementById("Mob").textContent = "llama";
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        document.getElementById("Mob").textContent = "ender-dragon";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        document.getElementById("Mob").textContent = "villager";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        document.getElementById("Mob").textContent = "creeper";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        document.getElementById("Mob").textContent = "spider";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        document.getElementById("Mob").textContent = "chicken";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        document.getElementById("Mob").textContent = "skeleton";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        document.getElementById("Mob").textContent = "sheep";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        document.getElementById("Mob").textContent = "pig";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        document.getElementById("Mob").textContent = "zombie";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        document.getElementById("Mob").textContent = "enderman";
    }
}