class Student{
    constructor(firstName, secondName, bornYear) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.bornYear = bornYear;
        this.ratings = new Array();
        this.visits = new Array(25);
    }

    getAge() {
        return new Date().getFullYear() - this.bornYear;
    }

    getAverageRating() {
        return Math.round(this.ratings.reduce(reducerForRating) / this.ratings.length);
    }
    
    getAverageVisit() {
        return this.visits.reduce(reducerForVisit) / Object.keys(this.visits).length;
    }
    
    present() {
        const index = getEmptyItemIndex(this.visits);
        
        if (index != -1) this.visits[index] = true;
    }
    
    absent() {
        const index = getEmptyItemIndex(this.visits);
        
        if (index != -1) this.visits[index] = false;
    }
    
    summary() {
        const avaregeRating = this.getAverageRating();
        const avaregeVisits = this.getAverageVisit();
    
        if(avaregeRating > 90 && avaregeVisits > 0.9){
            return "Ути какой молодчинка!";
        }else if(avaregeRating > 90 || avaregeVisits > 0.9){
            return "Норм, но можно лучше";
        }else{
            return "Редиска!";
        }
    }
}

function reducerForRating(accumulator, currentValue) {
    return accumulator + currentValue;
}

function reducerForVisit(accumulator, currentValue) {
    if (currentValue) 
        return accumulator + currentValue;
    
    return accumulator;
}

function getEmptyItemIndex(array) {
    return array.findIndex(element => {
        return element === undefined;
    })
}