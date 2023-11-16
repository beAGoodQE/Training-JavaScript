const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if ('rock' === userInput || 'paper' === userInput || 'scissors' === userInput || 'bomb' === userInput) {
        console.log(`Valid user choice - ${userInput}`);
        return userInput;
    }
    else {
        console.log('Invalid user choice - must be rock, paper or scissors');
    }
}

const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            num = 'rock';
            break;
        case 1:
            num = 'paper';
            break;
        case 2:
            num = 'scissors';
            break;
    }
    console.log('Computer Choice: ' + num);
    return num;
}

const determineWinner = (userChoice, computerChoice) => {
    console.log('User: ' + userChoice);
    console.log('Computer: ' + computerChoice);

    if ('bomb' === userChoice) {
        return 'User wins!';
    }
    if (userChoice === computerChoice) {
        return 'Game was a tie';
    }
    if ('rock' === userChoice) {
        if ('paper' === computerChoice) {
            return 'Computer wins!';
        }
        else {
            return 'User wins!';
        }
    }
    else if ('paper' === userChoice) {
        if ('scissors' === computerChoice) {
            return 'Computer wins!';
        }
        else {
            return 'User wins!';
        }
    }
    else if ('scissors' === userChoice) {
        if ('rock' === computerChoice) {
            return 'Computer wins!';
        }
        else {
            return 'User wins!';
        }
    }
}

const playGame = userSelection => {
    const userChoice = getUserChoice(userSelection);
    console.log(`userChoice : ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`computerChoice : ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame('rock');
//console.log(determineWinner(getUserChoice('scissors'), getComputerChoice()));
//getUserChoice('rock');
//getUserChoice('rocker');
//getComputerChoice();