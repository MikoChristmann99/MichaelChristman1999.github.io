const Team = require('./team');

let teams = [
    new Team ('Arsenal', 'Gunnersaurus', 35),
    new Team ('Bournemouth', 'Cherry Bear', 38),
    new Team ('Chelsea', 'Stamford & Bridget the Lion', 36),
    new Team ('Liverpool', 'Mighty Red', 35),
    new Team ('Manchester City', 'Moonchester', 40),
]

module.exports.getTeams = function() {
    return teams;
}

module.exports.getTeam = function(name) {
    return teams.find(team => team.name === name);
}

module.exports.displayTeam = function(Team) {
    return 'Name: ' + Team.name +'\nMascot: ' + Team.mascot + '\nPlayer Count: ' + Team.playerCount + "\n"
}
