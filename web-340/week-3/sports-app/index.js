const Team = require('./team');
const TeamManager = require('./team-manager');

let teams = TeamManager.getTeams();

console.log('\n-- DISPLAYING TEAMS --');
for (let team of teams){
    console.log(TeamManager.displayTeam(team));
}

const teamOne = TeamManager.getTeam('Arsenal');
const teamTwo = TeamManager.getTeam('Liverpool');

console.log('\n-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(teamOne));

console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(teamTwo));