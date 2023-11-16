const getSleepHours = day => {
    day = day.toLowerCase();

    switch (day) {
        case 'sunday':
            return 8;
        case 'monday':
            return 7;
        case 'tuesday':
            return 6;
        case 'wednesday':
            return 5;
        case 'thursday':
            return 4;
        case 'friday':
            return 3;
        case 'saturday':
            return 2;
        default:
            throw new Error('Not a valid day of the week');
        }    
}

const getActualSleepHours = () =>
    getSleepHours('sunday') + 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    console.log('actual: ' + actualSleepHours);

    const idealSleepHours = getIdealSleepHours();
    console.log('ideal: ' + idealSleepHours);

    if (actualSleepHours === idealSleepHours) {
        console.log('User got perfect amount of sleep.');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log(`User got MORE sleep than needed by ${actualSleepHours - idealSleepHours} hours.`);
    }
    else {
        console.log(`User got LESS sleep than needed by ${idealSleepHours - actualSleepHours} hours.`);
    }
}

//console.log(getSleepHours('sunday'));
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
calculateSleepDebt();