import { monsterData } from "./data/monstersData.js";

// NAV FUNCIONALITIES

const navMenu = document.querySelector(".menu-nav");
const navMonster = document.querySelector(".navMonster");
const navBackground = document.querySelector(".nav-background");

navMenu.addEventListener("click", () => {
    navMonster.classList.add("open");
    navBackground.classList.add("active");
});

navBackground.addEventListener("click", () => {
    navMonster.classList.remove("open");
    navBackground.classList.remove("active");
});

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

let currentMonster = monsterData[0];

const updateMonsterInfo = (monster) => {
    monsterClass.innerHTML = monster.class;
    monsterName.innerHTML = monster.name;
    monsterIconPath.src = monster.iconPath;
    monsterHunted.innerHTML = monster.hunted;
    monsterSmallest.innerHTML = monster.smallest;
    monsterLargest.innerHTML = monster.largest;
    monsterCharacteristics.innerHTML = monster.characteristics;
};

window.addEventListener("DOMContentLoaded", () => {
    console.log("carregou");
});
