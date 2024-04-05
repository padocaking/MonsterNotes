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
          giant: 2578.39
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "The apex monster of the Wildspire Waste. A menacing, territorial beast that lurks underground. Loud noises will cause it to lunge out of the sand in search of prey.",
        habitats: [
          {
            id: 2,
            name: "Wildspire Waste"
          }
        ],
        information: "Diablos can be forcibly brought to the surface by using loud sounds. And its charging attack, while devastatingly powerful, can be baited into colliding with a wildspire, momentarily getting the Diablos stuck.",
        research: 0,
        iconPath: "./images/monster_icons/diablos.webp"
      },
      {
        id: 16,
        name: "Zorah Magdaros",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 23188.13,
          big: 29629.28,
          giant: 31690.45
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "An elder dragon that rises from the earth like a volcano. Where it's headed, and why, the Research Commission has yet to figure out.",
        habitats: [],
        information: "",
        research: 0,
        iconPath: "./images/monster_icons/zorah_magdaros.webp"
      },
      {
        id: 17,
        name: "Dodogama",
        class: "Fanged Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1000,
          big: 1277.78,
          giant: 1366.67
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "A monster that devours rocks as its primary diet. The crystals it devours mix with its saliva to produce explosive minerals that it can spit at its enemies.",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "Dodogama collects explosive minerals in its mouth, but doing so weakens its massive jaw. Causing the minerals to detonate while they're still in Dodogama's mouth will create a great opening for an attack.",
        research: 0,
        iconPath: "./images/monster_icons/dodogama.webp"
      },
      {
        id: 18,
        name: "Lavasioth",
        class: "Piscine Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1617.52,
          big: 2066.83,
          giant: 2210.61
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "Lavasioths utilize molten lava as armor. They are extremely aggressive and will attack without prejudice until the threat has been eliminated.",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "The hardened magma on Lavasioth's body becomes softer as it swims through the lava. Attack its armor immediately after it surfaces to increase your chances of destroying it before it rehardens.",
        research: 0,
        iconPath: "./images/monster_icons/lavasioth.webp"
      },
      {
        id: 19,
        name: "Uragaan",
        class: "Brute Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1852.77,
          big: 2264.49,
          giant: 2470.36
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "Large brute wyverns that feed on ore, using their mighty jaws to crush solid rock to powder. They've been known to confront Lavasioths over territory disputes.",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "A crushing slam from the Uragaan's jaw can send shockwaves across the ground, detonating any explosive rocks in the area. In addition, when an Uragaan is toppled, its body can be mined for ore.",
        research: 0,
        iconPath: "./images/monster_icons/uragaan.webp"
      },
      {
        id: 20,
        name: "Azure Rathalos",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1533.8,
          big: 1959.85,
          giant: 2096.19
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "An azure-colored subspecies of Rathalos. More mobile than their standard cousins, they locate prey from the air and quickly swoop in for the kill.",
        habitats: [
          {
            id: 1,
            name: "Ancient Forest"
          },
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "Counter its airborne onslaught by observing its flight patterns and finding the right moment to knock it out of the sky. Once grounded, it loses its ability to perform consecutive attacks, making the fight much easier.",
        research: 0,
        iconPath: "./images/monster_icons/azure_rathalos.webp"
      },
      {
        id: 21,
        name: "Bazelgeuse",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1735.54,
          big: 2217.64,
          giant: 2371.91
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "TBA",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "TBA",
        research: 0,
        iconPath: "./images/monster_icons/bazelgeuse.webp"
      },
      {
        id: 22,
        name: "Black Diablos",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1886.63,
          big: 2410.69,
          giant: 2578.39
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "These black-shelled Diablos are actually female Diablos in heat. The color signals their aggressiveness and heightened hostility to other creatures in their habitat.",
        habitats: [
          {
            id: 2,
            name: "Wildspire Waste"
          }
        ],
        information: "Diablos are much more aggressive against intruders when in heat, and are known to attack enemies in retreat. Do not let your guard down even if you think you've established a safe distance from these monsters.",
        research: 0,
        iconPath: "./images/monster_icons/black_diablos.webp"
      },
      {
        id: 23,
        name: "Kirin",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 482.63,
          big: 616.7,
          giant: 659.6
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "Kirin are so rarely sighted that little is known of their ecology. It's been said they envelop themselves in pure electricity when they are provoked.",
        habitats: [
          {
            id: 3,
            name: "Coral Highlands"
          }
        ],
        information: "The lightning a Kirin cloaks itself with has been confirmed to toughen its skin. The key to hunting a Kirin lies in staggering it, using Elderseal weapons, and protecting yourself from and avoiding its lightning attacks.",
        research: 0,
        iconPath: "./images/monster_icons/kirin.webp"
      },
      {
        id: 24,
        name: "Nergigante",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1663.31,
          big: 2125.34,
          giant: 2273.19
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "A terrible elder dragon that appears when other elders are in the vicinity. Its penchant for destruction is well-documented.",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "Nergigante can recover from wounds almost instantaneously. Regenerated body parts grow harder over time, so attacking them while they're still fresh is the ideal strategy.",
        research: 0,
        iconPath: "./images/monster_icons/nergigante.webp"
      },
      {
        id: 25,
        name: "Teostra",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1611.14,
          big: 2058.67,
          giant: 2201.88
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "Brutal elder dragons wreathed in flames that spit blazing fire. Teostra are of such a fierce and deadly nature that the Guild closely monitors their movements.",
        habitats: [
          {
            id: 2,
            name: "Wildspire Waste"
          },
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "The black scale dust Teostra scatters will spread over a wide area until it finally explodes. Keep an eye on that, as well as the flames it occasionally shields itself in, and aim to stagger it with weapons possessing Elderseal capabilities.",
        research: 0,
        iconPath: "./images/monster_icons/teostra.webp"
      },
      {
        id: 26,
        name: "Kushala Daora",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1721.82,
          big: 2200.1,
          giant: 2353.15
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "An elder dragon that shields itself with fierce winds, preventing anyone from approaching it. Its skin consists of hard, metallic scales.",
        habitats: [
          {
            id: 1,
            name: "Ancient Forest"
          },
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "When confronted by enemies, Kushala's wind shield continuously grows in intensity, eventually deflecting bow and bowgun attacks. Its wind shield can be weakened by staggering it, particularly with weapons with Elderseal capabilities.",
        research: 0,
        iconPath: "./images/monster_icons/kushala_daora.webp"
      },
      {
        id: 27,
        name: "Deviljho",
        class: "Brute Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1857.44,
          big: 2270.2,
          giant: 2476.58
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "Due to its enhanced metabolism, Deviljho must constantly seek out prey. It is extremely violent, and known to snatch up large monsters in its powerful maw and flail them around.",
        habitats: [
          {
            id: 1,
            name: "Ancient Forest"
          },
          {
            id: 2,
            name: "Wildspire Waste"
          },
          {
            id: 3,
            name: "Coral Highlands"
          },
          {
            id: 4,
            name: "Rotten Vale"
          },
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "When enraged, Deviljho's swollen muscles glow a hellish red. It will start spewing a sweeping dragon element attack, so watch your distance. Deviljho stays on the attack even when wounded, but don't give up; keep fighting and you'll come out on top.",
        research: 0,
        iconPath: "./images/monster_icons/deviljho.webp"
      },
      {
        id: 28,
        name: "Pink Rathian",
        class: "Flying Wyvern",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1578.93,
          big: 2017.53,
          giant: 2157.88
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "A subspecies with vibrant pink scales. Pink Rathians wield their toxic tails more deftly than normal Rathians, weakening prey with poison before moving in for the kill.",
        habitats: [
          {
            id: 2,
            name: "Wildspire Waste"
          },
          {
            id: 3,
            name: "Coral Highlands"
          }
        ],
        information: "Pink Rathians develop hard shells on different body parts compared to standard Rathians, particularly on their tails. If you're looking to sever its tail, aim for the relatively soft tip of the tail.",
        research: 0,
        iconPath: "./images/monster_icons/pink_rathian.webp"
      },
      {
        id: 29,
        name: "Vaal Hazak",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1885.86,
          big: 2409.71,
          giant: 2577.34
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "A grotesque elder dragon that inhabits the deepest part of the Rotten Vale. It uses the fatal vapor of the vale in what appears to be a symbiotic relationship.",
        habitats: [
          {
            id: 4,
            name: "Rotten Vale"
          }
        ],
        information: "Once you've become tainted, inhaling the vapor of the vale causes your own health to drain. Head for areas where the vapor is thin, and if you do get tainted, do your best to get rid of it.",
        research: 0,
        iconPath: "./images/monster_icons/vaal_hazak.webp"
      },
      {
        id: 30,
        name: "Xeno'jiiva",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 4058.19,
          big: 5185.47,
          giant: 5546.19
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "A new species discovered in the depths of the Elder's Recess. Its relationship to the other elder dragons is unclear, as is its ecology.",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "Perhaps as a result of its inability to fully control its own incalculable power, Xeno'jiiva is prone to go into a rampage when its energy-filled limbs take enough damage. Endure its rampage and you may be rewarded with a good opening for attacks.",
        research: 0,
        iconPath: "./images/monster_icons/xeno'jiiva.webp"
      },
      {
        id: 31,
        name: "Kulve Taroth",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 4115.93,
          big: 5259.24,
          giant: 5625.1
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "An elder dragon that protects itself with a glittering coat of metal. Its ecology and coat differ with each appearance, thus the need for a thorough investigation.",
        habitats: [],
        information: "An exhaustive investigation is required in order to break Kulve Taroth's giant gold plated horns. Pursue the monster to learn more about it. Gather tracks and recruit hunters to help you further your investigation.",
        research: 0,
        iconPath: "./images/monster_icons/kulve_taroth.webp"
      },
      {
        id: 32,
        name: "Lunastra",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 1645.81,
          big: 2102.98,
          giant: 2249.28
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "A rare female Elder Dragon that litters the air with hot blue dust. Reports of it traveling with her mate, Teostra, are still unconfirmed.",
        habitats: [
          {
            id: 2,
            name: "Wildspire Waste"
          },
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "Lunastra's high body temperature and dust saps away health unless you use a Cool Drink. Its dust and blue flame explode when it comes into contact with fire, so use a bomb or Crystalburst.",
        research: 0,
        iconPath: "./images/monster_icons/lunastra.webp"
      },
      {
        id: 33,
        name: "Behemoth",
        class: "Elder Dragon",
        hunted: 0,
        captured: 0,
        smallest: 0,
        largest: 0,
        baseSizes: {
          miniature: 3081.29,
          big: 3937.2,
          giant: 4211.09
        },
        sizes: {
          smallest: 0,
          largest: 0
        },
        characteristics: "Barroth seek out ants, their favorite snack, and mark their territory with mud. They attack potential rivals with their devastating charging attack.",
        habitats: [
          {
            id: 5,
            name: "Elder's Recess"
          }
        ],
        information: "While it uses hardened mud as armor, Barroth can also fling it off its body as an attack. Use water element weapons or your slinger to gradually knock off its mud.",
        research: 0,
        iconPath: "./images/monster_icons/behemoth.webp"
      }
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
    createNav(monsterData)
    updateMonsterInfo(currentMonster);
    document.getElementById("monsterNav0").classList.add("nav-item-hover")
});


