// MONSTER DB

const monsterData = [
    {
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
    },
    {
        id: 1,
        name: "Kulu-Ya-Ku",
        class: "Bird Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 811.12,
            big: 1036.43,
            giant: 1108.53,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics:
            "An odd bird wyvern that has developed limbs capable of carrying weapons. It's been spotted stealing eggs from nests found in the Ancient Forest and Wildspire Waste.",
        habitats: [{ id: 1, name: "Ancient Forest" }, { id: 2, name: "Wildspire Waste" }],
        information:
            "Kulu-Ya-Ku can use small boulders to shield itself or smash against its enemies. Force it to drop whatever it's holding by using your slinger. You can also frighten it by luring one of its natural enemies.",
        research: 0,
        iconPath: "./images/monster_icons/kulu_ya_ku.webp",
    },
    {
        id: 2,
        name: "Pukei-Pukei",
        class: "Bird Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 992.21,
            big: 1212.7,
            giant: 1322.94,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "A bird wyvern known to possess poisonous toxins in its body. It's been spotted storing scatternuts in its mouth or tail, coating them with poison and spitting them out at threats.",
        habitats: [{ id: 1, name: "Ancient Forest" }, { id: 2, name: "Wildspire Waste" }],
        information: "Observational reports state that Pukei-Pukei will bully weaker monsters but cower before bigger, stronger monsters. It's prone to retreating at the first sign of danger, so use that to your advantage.",
        research: 0,
        iconPath: "./images/monster_icons/pukei_pukei.webp",
    },
    {
        id: 3,
        name: "Barroth",
        class: "Brute Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1244.76,
            big: 1590.53,
            giant: 1701.18,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "Barroth seek out ants, their favorite snack, and mark their territory with mud. They attack potential rivals with their devastating charging attack.",
        habitats: [{ id: 2, name: "Wildspire Waste" }],
        information: "While it uses hardened mud as armor, Barroth can also fling it off its body as an attack. Use water element weapons or your slinger to gradually knock off its mud.",
        research: 0,
        iconPath: "./images/monster_icons/barroth.webp",
    },
    {
        id: 4,
        name: "Jyuratodus",
        class: "Piscine Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1357.84,
            big: 1735.02,
            giant: 1855.71,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "A large piscine wyvern that inhabits the swamps of the Wildspire Waste. It uses mud to capture prey, and it's known to battle Barroth over territory.",
        habitats: [{ id: 2, name: "Wildspire Waste" }],
        information: "It's nearly impossible to fight a Jyuratodus in its swampy home. Coerce it to land, and then use water element weapons or your slinger to slowly chip away its hardened mud armor.",
        research: 0,
        iconPath: "./images/monster_icons/jyuratodus.webp",
    },
    {
        id: 5,
        name: "Tobi-Kadachi",
        class: "Fanged Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1170.47,
            big: 1430.57,
            giant: 1560.62,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "A fanged wyvern that flies among the trees of the Ancient Forest. Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur.",
        habitats: [{ id: 1, name: "Ancient Forest" }],
        information: "Use the target camera to avoid getting ambushed from behind as it moves from tree to tree. The key to defeating this monster is to immobilize it and prevent it from reaching a charged state.",
        research: 0,
        iconPath: "./images/monster_icons/tobi_kadachi.webp",
    },
    {
        id: 6,
        name: "Anjanath",
        class: "Brute Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1481.81,
            big: 1811.11,
            giant: 1975.75,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "The Anjanath patrols the Ancient Forest, looking for its favorite meal, Aptonoth. This belligerent monster will attack anything without hesitation.",
        habitats: [{ id: 1, name: "Ancient Forest" }, { id: 2, name: "Wilspire Waste" }],
        information: "Anjanath spits fiery blasts from its mouth utilizing a unique organ in its throat. Focusing attacks on its throat will make battling it much easier.",
        research: 0,
        iconPath: "./images/monster_icons/anjanath.webp",
    },
    {
        id: 7,
        name: "Rathian",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1578.93,
            big: 2017.53,
            giant: 2157.88,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: 'Wyverns known as the "Queens of the Land." Terrestrial predators, they overpower prey with their venomous tails and powerful legs.',
        habitats: [{ id: 1, name: "Ancient Forest" }, { id: 2, name: "Wildspire Waste"}],
        information: "Come prepared with fire-resistant armor, and neuter its poison attacks by severing its tail. Be careful when stealing an egg from its nest, for a Rathian will chase an egg thief to the ends of the New World.",
        research: 0,
        iconPath: "./images/monster_icons/rathian.webp",
    },
    {
        id: 8,
        name: "Tzitzi-Ya-Ku",
        class: "Bird Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 804.64,
            big: 1028.15,
            giant: 1099.67,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "TBA",
        habitats: [{ id: 3, name: "Coral Highlands" }],
        information: "TBA",
        research: 0,
        iconPath: "./images/monster_icons/tzitzi_ya_ku.webp",
    },
    {
        id: 9,
        name: "Paolumu",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1029.02,
            big: 1314.86,
            giant: 1406.33,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "Paolumu feast on eggs found in the Coral Highlands. They are able to float through the air using unique sacs in their bodies, and attack with their extremely hard tails.",
        habitats: [{ id: 3, name: "Coral Highlands" }],
        information: "	Paolumu can't move around as freely when its air sacs are deflated. Aim for its inflated body parts, or purposefully draw out its attacks that use up stored air, to gain the upper hand.",
        research: 0,
        iconPath: "./images/monster_icons/paolumu.webp",
    },
    {
        id: 10,
        name: "Great Girros",
        class: "Fanged Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 947.84,
            big: 1211.12,
            giant: 1295.37,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "A monster that scavenges for meals dropped from the Coral Highlands. It acts as the alpha leader of a Girros pack, and sports giant fangs that paralyze its prey.",
        habitats: [{ id: 4, name: "Rotten Vale" }],
        information: "Taking down lesser Girros will make the rest of the pack scatter, and should be a top priority. Breaking the fangs of a Great Girros will make its paralyzing agent much weaker.",
        research: 0,
        iconPath: "./images/monster_icons/great_girros.webp",
    },
    {
        id: 11,
        name: "Radobaan",
        class: "Brute Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1623.12,
            big: 1983.82,
            giant: 2164.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "A gigantic brute wyvern that eats the bones of carcasses found in the Rotten Vale, using some of it as armor. It also rolls into a ball as a form of attack and transportation.",
        habitats: [{ id: 4, name: "Rotten Vale" }],
        information: "Attack it as it rolls around to throw it off balance and knock it down. Chunks of bone can be mined from its body once it's down. Shattering its bone armor is the key to winning a fight against this beast.",
        research: 0,
        iconPath: "./images/monster_icons/radobaan.webp",
    },
    {
        id: 12,
        name: "Legiana",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1529.78,
            big: 1954.71,
            giant: 2090.69,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos. It emits a chilling wind from its body, which dulls its prey's ability to escape.",
        habitats: [{ id: 3, name: "Coral Highlands" }],
        information: "The membrane that covers its entire body enables Legiana to move with incredible speed. Damaging this membrane should help with slowing it down. Poison attacks have also been known to be effective.",
        research: 0,
        iconPath: "./images/monster_icons/legiana.webp",
    },
    {
        id: 13,
        name: "Odogaron",
        class: "Fanged Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "A terrifying monster that scours the Rotten Vale for carrion. Its highly aggressive nature means that anything, be it monster or man, is a potential meal.",
        habitats: [{ id: 3, name: "Coral Highlands" }, { id: 4, name: "Rotten Vale" }],
        information: "Odogaron's nasty claws cause heavy bleeding and should be avoided at all costs. Use meat to lure it into traps, stagger it, or coerce it into bouts of rage to tire it out and make it easier to deal with.",
        research: 0,
        iconPath: "./images/monster_icons/odogaron.webp",
    },
    {
        id: 14,
        name: "Rathalos",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1533.8,
            big: 1959.85,
            giant: 2096.19,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: 'The apex monster of the Ancient Forest, also known as the "King of the Skies." A terrible wyvern that descends upon invaders, attacking with poison claws and fiery breath.',
        habitats: [{ id: 1, name: "Ancient Forest" }],
        information: "Rathalos prefer to stay airborne to unleash their myriad attacks, but a well-placed flash bomb or a shot from your slinger can send them crashing to the earth. Wounding their wings gives them a moment of vulnerability whenever they try to take flight.",
        research: 0,
        iconPath: "./images/monster_icons/rathalos.webp",
    },
    {
        id: 15,
        name: "Diablos",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1886.63,
            big: 2410.69,
            giant: 2578.39,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "The apex monster of the Wildspire Waste. A menacing, territorial beast that lurks underground. Loud noises will cause it to lunge out of the sand in search of prey.",
        habitats: [{ id: 2, name: "Wildspire Waste" }],
        information: "Diablos can be forcibly brought to the surface by using loud sounds. And its charging attack, while devastatingly powerful, can be baited into colliding with a wildspire, momentarily getting the Diablos stuck.",
        research: 0,
        iconPath: "./images/monster_icons/diablos.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
    {
        id: 13,
        name: "",
        class: "",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
            miniature: 1249.88,
            big: 1597.06,
            giant: 1708.16,
        },
        sizes: {
            smallest: 0,
            largest: 0,
        },
        characteristics: "",
        habitats: [{ id: 0, name: "" }],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/.webp",
    },
];

let currentMonster = monsterData[0];

// NAV FUNCIONALITIES

const navMenu = document.querySelector(".menu-nav");
const navMonster = document.querySelector(".navMonster");
const navBackground = document.querySelector(".nav-background");
const navDisplay = document.querySelector(".nav-display")

navMenu.addEventListener("click", () => {
    navMonster.classList.add("open");
    navBackground.classList.add("active");
});

navBackground.addEventListener("click", () => {
    navMonster.classList.remove("open");
    navBackground.classList.remove("active");
});

const changeNavHover = (prevId, currId) => {
    document.getElementById(`monsterNav${prevId}`).classList.remove("nav-item-hover")
    document.getElementById(`monsterNav${currId}`).classList.add("nav-item-hover")
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
            const monsterById = getMonsterById(monsterData, monster.id)
            updateMonsterInfo(monsterById)

            changeNavHover(currentMonster.id, monster.id)

            currentMonster = monsterById
        })
    })

    
}


// MAIN MONSTER INFO FUNCIONALITIES

const monsterClass = document.querySelector("#monster-class");
const monsterName = document.querySelector("#monster-name");
const monsterIconPath = document.querySelector("#monster-icon");
const monsterHunted = document.querySelector("#monster-hunted");
const monsterSmallest = document.querySelector("#monster-smallest");
const monsterLargest = document.querySelector("#monster-largest");
const monsterCharacteristics = document.querySelector(
    "#monster-characteristics"
);
const monsterHabitatsList = document.querySelector(".habitats-list")
const monsterInformation = document.querySelector("#monster-information")

const levelConvert = (research) => {
    const level = Math.floor(research / 100) + 1
    const progress = String(research).slice(-2)
    
    return researchLevel =  {
        level,
        progress
    }
}

const createLi = (id) => {
    const listItem = document.createElement("li")
    listItem.className = "habitats-item"

    const itemImg = document.createElement("img")
    const itemSpan = document.createElement("span")

    let paths = {imgPath: "", spanPath: ""}

    switch (id) {
        case 0:
            paths.imgPath = "./images/map_icons/none.png"
            paths.spanPath = "&#8205"
            break
        case 1:
            paths.imgPath = "./images/map_icons/ancient_forest.webp"
            paths.spanPath = "Ancient Forest"
            break
        case 2:
            paths.imgPath = "./images/map_icons/wildspire_waste.webp"
            paths.spanPath = "Wildspire Waste"
            break
        case 3:
            paths.imgPath = "./images/map_icons/coral_highlands.webp"
            paths.spanPath = "Coral Highlands"
            break
        case 4:
            paths.imgPath = "./images/map_icons/rotten_vale.webp"
            paths.spanPath = "Rotten Vale"
            break
        case 5:
            paths.imgPath = "./images/map_icons/elders_recess.webp"
            paths.spanPath = "Elders Recess"
            break
        case 6:
            paths.imgPath = "./images/map_icons/hoartfrost_reach.png"
            paths.spanPath = "Hoartfrost Reach"
            break
    }

    itemImg.src = paths.imgPath
    itemSpan.innerHTML = paths.spanPath

    listItem.appendChild(itemImg)
    listItem.appendChild(itemSpan)
    monsterHabitatsList.appendChild(listItem)
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

const getMonsterById = (arr, id) => {
    return arr.filter((monster) => monster.id === id)[0]
}

window.addEventListener("DOMContentLoaded", () => {
    updateMonsterInfo(currentMonster);
    document.getElementById("monsterNav0").classList.add("nav-item-hover")
});


createNav(monsterData)