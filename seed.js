require("dotenv").config();
require("./config/database");

const Team = require("./models/team");
const Player = require("./models/player");

(async function() {
    await Team.deleteMany({});
    const teams = await Team.create([
        {name: 'Amazon', sortOrder: 1},
        {name: 'Black Orcs', sortOrder: 2},
        {name: 'Chaos Chosen', sortOrder: 3},
        {name: 'Chaos Dwarfs', sortOrder: 4},
        {name: 'Chaos Renegades', sortOrder: 5},
        {name: 'Dark Elfs', sortOrder: 6},
        {name: 'Dwarfs', sortOrder: 7},
        {name: 'Elven Union', sortOrder: 8},
        {name: 'Goblins', sortOrder: 9},
        {name: 'Halflings', sortOrder: 10},
        {name: 'High Elves', sortOrder: 11}
        {name: 'Humans', sortOrder: 12},
        {name: 'Imperial Nobility', sortOrder: 13},
        {name: 'Khorne', sortOrder: 14},
        {name: 'Lizardmen', sortOrder: 15},
        {name: 'Necromantic Horror', sortOrder: 16},
        {name: 'Norse', sortOrder: 17},
        {name: 'Nurgle', sortOrder: 18},
        {name: 'Ogres', sortOrder: 19},
        {name: 'Old World Alliance', sortOrder: 20},
        {name: 'Orcs', sortOrder: 21},
        {name: 'Shambling Undead', sortOrder: 22},
        {name: 'Skaven', sortOrder: 23},
        {name: 'Slann/Kislev', sortOrder: 24},
        {name: 'Snotlings', sortOrder: 25},
        {name: 'Tomb Kings', sortOrder: 26},
        {name: 'Underworld Denizens', sortOrder: 27},
        {name: 'Vampires', sortOrder: 28},
        {name: 'Wood Elves', sortOrder: 29}

    ]);
    await Player.deleteMany({});
    const players = await Player.create([
        {name: 'Tribal Linewoman', cost: 50000, ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: ['Dodge'], primary: 'G', secondary: 'A, S', team: teams[0]},
        {name: 'Eagle Warrior Thrower', cost: 75000, ma: 6, st: 3, ag: 3, pa: 3, av: 8, skills: ['Dodge', 'Pass'], primary: 'G, P', secondary: 'A, S', team: teams[0]},
        {name: 'Piranha Warrior Catcher', cost: 75000, ma: 6, st: 3, ag: 3, pa: 5, av: 8, skills: ['Catch', 'Dodge'], primary: 'A, G', secondary: 'S', team: teams[0]},
        {name: 'Koka Kalim Blitzer', cost: 90000, ma: 6, st: 3, ag: 3, pa: 5, av: 8, skills: ['Block', 'Dodge'], primary: 'G, S', secondary: 'A', team: teams[0]},
        {name: 'Goblin Bruiser Lineman', cost: 45000, ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: ['Dodge', 'Right Stuff', 'Stunty', 'Thick Skull'], primary: 'A', secondary: 'G, P, S', team: teams[1]},
        {name: 'Black Orc', cost: 90000, ma: 4, st: 4, ag: 4, pa: 5, av: 10, skills: ['Brawler', 'Grab'], primary: 'G, S', secondary: 'A, P', team:teams[1]},
        {name: 'Trained Troll', cost: 115000, ma:4, st: 5, ag: 5, pa: 5, av: 10, skills: ['Always Hungry', 'Loner (3+)', 'Mighty Blow (+1)', 'Projectile Vomit', 'Really Stupid', 'Regeneration', 'Throw Team-mate'], primary: 'S', secondary: 'A, G, P', team: teams[1]}
    ])
})