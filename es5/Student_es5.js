function Student(firstName, secondName, bornYear) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.bornYear = bornYear;
    this.ratings = new Array();
    this.visits = new Array(25);
}

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.bornYear;
}

Student.prototype.getAverageRating = function () {
    return Math.round(this.ratings.reduce(reducerForRating) / this.ratings.length);
}

Student.prototype.getAverageVisit = function () {
    return this.visits.reduce(reducerForVisit) / Object.keys(this.visits).length;
}

Student.prototype.present = function () {
    var index = getEmptyItemIndex(this.visits);
    
    if (index != -1) this.visits[index] = true;
}

Student.prototype.absent = function () {
    var index = getEmptyItemIndex(this.visits);
    
    if (index != -1) this.visits[index] = false;
}

Student.prototype.summary = function () {
    var avaregeRating = this.getAverageRating();
    var avaregeVisits = this.getAverageVisit();

    if(avaregeRating > 90 && avaregeVisits > 0.9){
        return "Ути какой молодчинка!";
    }else if(avaregeRating > 90 || avaregeVisits > 0.9){
        return "Норм, но можно лучше";
    }else{
        return "Редиска!";
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
    return array.findIndex(function (element) {
        return element === undefined;
    })
}