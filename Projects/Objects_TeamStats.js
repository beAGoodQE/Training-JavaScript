const team = {
    _players : [
        {firstName : 'Jonah', lastName : 'Lomu', age : 40},
        {firstName : 'Derek', lastName : 'Jeter', age : 30},
        {firstName : 'Gerrit', lastName : 'Cole', age : 32}
    ],
    _games : [
        {opponent : 'All Blacks', teamPoints : 22, opponentPoints : 21},
        {opponent : 'Ireland', teamPoints : 10, opponentPoints : 3},
        {opponent : 'Wallabies', teamPoints : 33, opponentPoints : 30}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName : newFirstName,
            lastName : newLastName,
            age : newAge
        }
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent : newOpponent,
            teamPoints : newTeamPoints,
            opponentPoints : newOpponentPoints
        }
        this.games.push(game);
    }
}

console.log(team.players);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players[3]);

team.addGame('Titans', 100, 98);
console.log(team.games[3]);