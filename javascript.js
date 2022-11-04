class City {
    constructor(name, location) {
    this.name = name;
    this.location = location;
}

describe() {
    return `${this.name} plays ${this.location}.`;
}
}

class State {
    constructor(name) {
    this.name = name
    this.cities = [];
}

addCity(city) {
    if (city instanceof City) {
        this.cities.push(city);
    } else {
        throw new Error('You can only add an instance of City. Argument is not a city: ${city}');
    }
}

describe() {
    return `${this.name} has ${this.cities.length} cities.`;
    }
}

class Menu {
    constructor() {
        this.states = [];
        this.selectedStates = null;
    }
    
    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createState();
                    break;
                case '2':
                    this.viewState();
                    break;
                case '3':
                    this.deleteState();
                    break
                case '4':
                    this.displayStates();
                    break
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!'); 
    }

    showMainMenuOptions() {
        return prompt(` 
            0) exit
            1) create new state
            2) view state
            3) delete state
            4) display all states
     ` );
    }

    showTeamMenuOptions(stateInfo) {
        return prompt(`
            0) back
            1) create City
            2) delete City
            ---------------------
            ${teamInfo}
       ` );
    }
    displayStates () {
        let stateString = ''; 
        for (let i = 0; i < this.states.length; i++) {
            stateString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(stateString);
    }

    createTeam() {
        let name = prompt('Enter name for new state:');
        this.states.push(new State(name));
    }

    viewState() {
        let index = prompt('Enter the index of the state you wish to view:');
        if (index > -1 && index < this.states.length) {
            this.selectedState = this.states[index];
            let description = 'State Name: ' + this.selectedState.name + '\n';

            for (let i = 0; i < this.selectedState.cities.length; i++) {
                description += i + ') ' + this.selectedState.cities[i].name + ' , ' + this.selectedTeam.players[i].name
                    + ' , ' + this.selectedState.cities[i].location + '\n';
            }

            let selection = this.showStateMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCity();
                    break;
                case '2':
                    this.deleteCity();
            }
        }
    }

    deleteCity() {
        let index = prompt('Enter the index of the state you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.states.splice(index, 1);
        }
    }
    createCity() {
        let name = prompt('Enter name for new city:');
        let location = prompt('Enter location for new city:');
        this.selected.cities.push(new Cities(name,position));
    }

    deleteCity() {
        let index = prompt('Enter the index of the city you wish to delete:');
        if (index > -1 && index < this.selectedState.cities.length) {
            this.selectedState.cities.splice(index, 1);
        }
    }
}
    let menu = new Menu();
    menu.start();