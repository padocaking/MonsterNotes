const navDisplay = document.querySelector(".nav-display")
const monsterClass = document.querySelector("#monster-class");
const monsterName = document.querySelector("#monster-name");
const monsterIconPath = document.querySelector("#monster-icon");
const monsterHunted = document.querySelector("#monster-hunted");
const monsterSmallest = document.querySelector("#monster-smallest");
const monsterLargest = document.querySelector("#monster-largest");
const monsterCharacteristics = document.querySelector("#monster-characteristics");
const monsterHabitatsList = document.querySelector(".habitats-list")
const monsterInformation = document.querySelector("#monster-information")
const loading = document.querySelector("#loading")

const url = './dataBase/monsters.json'

let currentMonster = {
    id: 0,
    name: "Great Jagras",
    class: "Fanged Wyvern",
    hunted: 0,
    captured: 0,
    smallest: 0,
    largest: 0,
    baseSizes: {
        miniature: 998.69,
        big: 1276.11,
        giant: 1364.88,
    },
    sizes: {
        smallest: 0,
        largest: 0,
    },
    characteristics:
        "The pack leader of the Jagras. When hungry, Great Jagras are known to attack monsters even stronger than themselves. It balloons to unbelievable proportions after swallowing prey.",
    habitats: [{ id: 1, name: "Ancient Forest" }],
    information:
        "Even after a giant meal, a Great Jagras can use its expanded stomach to attack unsuspecting hunters. Aim for its belly to force it to vomit out its prey and significantly weaken it.",
    research: 0,
    iconPath: "./images/monster_icons/great_jagras.webp",
}

const fetchMonsters = async (url) => {
    const response = await fetch(url)
    const monsterDB = await response.json()

    createNav(monsterDB)
    updateMonsterInfo(monsterDB[0])
}

const changeNavHover = (prevId, currId) => {
    document.getElementById(`monsterNav${prevId}`).classList.remove("nav-item-hover")
    document.getElementById(`monsterNav${currId}`).classList.add("nav-item-hover")
}

const getMonsterById = (arr, id) => {
    return arr.filter((monster) => monster.id === id)[0]
}

const levelConvert = (research) => {
    const level = Math.floor(research / 100) + 1
    const progress = String(research).slice(-2)
    
    return researchLevel =  {
        level,
        progress
    }
}

const renderHabitat = (habitatArr) => {
    for (let i = 0; i < 6; i++) {
        document.getElementById(`habitatImg${i}`).src = "./images/map_icons/none.png"
        document.getElementById(`habitatSpan${i}`).innerHTML = "&#8205"
    }

    for (let i = 0; i < 6; i++) {
        const habitatImg = document.getElementById(`habitatImg${i}`)
        const habitatSpan = document.getElementById(`habitatSpan${i}`)

        if (habitatArr[i] !== undefined) {
            switch (habitatArr[i].id) {
                case 0:
                    habitatImg.src = "./images/map_icons/none.png"
                    habitatSpan.innerHTML = "&#8205"
                    break
                case 1:
                    habitatImg.src = "./images/map_icons/ancient_forest.webp"
                    habitatSpan.innerHTML = "Ancient Forest"
                    break
                case 2:
                    habitatImg.src = "./images/map_icons/wildspire_waste.webp"
                    habitatSpan.innerHTML = "Wildspire Waste"
                    break
                case 3:
                    habitatImg.src = "./images/map_icons/coral_highlands.webp"
                    habitatSpan.innerHTML = "Coral Highlands"
                    break
                case 4:
                    habitatImg.src = "./images/map_icons/rotten_vale.webp"
                    habitatSpan.innerHTML = "Rotten Vale"
                    break
                case 5:
                    habitatImg.src = "./images/map_icons/elders_recess.webp"
                    habitatSpan.innerHTML = "Elders Recess"
                    break
                case 6:
                    habitatImg.src = "./images/map_icons/hoartfrost_reach.png"
                    habitatSpan.innerHTML = "Hoartfrost Reach"
                    break
            }
        }
    }
}

const createNav = (monsterArr) => {
    monsterArr.map((monster) => {
        const navItem = document.createElement("li")
        navItem.className = "nav-item"
        navItem.id = `monsterNav${monster.id}`

        const navImg = document.createElement("img")
        const srcImg = monster.name.replaceAll(" ", "_").replaceAll("-", "_").toLowerCase()
        navImg.src = `./images/monster_icons/${srcImg}.webp`
        navImg.alt = monster.name

        const navItemInfo = document.createElement("div")
        navItemInfo.className = "nav-item-info"

        const navTitle = document.createElement("span")
        navTitle.className = "nav-title"
        navTitle.innerHTML = monster.name

        const researchInfo = document.createElement("div")
        researchInfo.className = "research-info"

        const researchSpan = document.createElement("span")
        researchSpan.className = "research-span"
        researchSpan.innerHTML = "Research Lv"

        const researchLvl = document.createElement("span")
        researchLvl.className = "research-lvl"
        researchLvl.innerHTML = levelConvert(monster.research).level

        const researchBar = document.createElement("div")
        researchBar.className = "research-bar"

        const barProgress = document.createElement("div")
        barProgress.className = "bar-progress"
        barProgress.style.width = `${levelConvert(monster.research).progress}%`

        researchBar.appendChild(barProgress)
        researchInfo.appendChild(researchSpan)
        researchInfo.appendChild(researchLvl)
        researchInfo.appendChild(researchBar)
        navItemInfo.appendChild(navTitle)
        navItemInfo.appendChild(researchInfo)
        navItem.appendChild(navImg)
        navItem.appendChild(navItemInfo)
        

        navDisplay.appendChild(navItem)

        navItem.addEventListener("mouseenter", () => {
            const monsterById = getMonsterById(monsterArr, monster.id)
            updateMonsterInfo(monsterById)

            changeNavHover(currentMonster.id, monster.id)

            currentMonster = monsterById
        })
    })
}

const updateMonsterInfo = (monster) => {
    monsterClass.innerHTML = monster.class;
    monsterName.innerHTML = monster.name;
    monsterIconPath.src = monster.iconPath;
    monsterHunted.innerHTML = `${monster.hunted} (${monster.captured})`;
    monsterSmallest.innerHTML = monster.smallest === 0 ? "-" : monster.smallest;
    monsterLargest.innerHTML = monster.largest === 0 ? "-" : monster.largest;
    monsterCharacteristics.innerHTML = monster.characteristics;
    renderHabitat(monster.habitats)
    monsterInformation.innerHTML = monster.information
};

window.addEventListener("DOMContentLoaded", async () => {
    loading.style.visibility = "inherit"
    try {
        await fetchMonsters(url)

        const mainImg = document.querySelector("#monster-icon")

        mainImg.onload = () => loading.style.visibility = "hidden"
    }

    catch (err) {
        console.log(err)
    }
});