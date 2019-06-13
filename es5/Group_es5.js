function Group() { }

Group.prototype = Object.create(Array.prototype);

Group.prototype.attendance = function (secondName) {
    if (arguments.length === 0) {
        var score = 0;
        var counter = 0;

        this.forEach(function (element) {
            score += element.getAverageVisit();
            counter++;
        });

        return score / counter;
    } else {
        return this.map(function (element) {
            var score = element.getAverageVisit();
            
            return { student: element, score: score };
        }).sort(function (a, b) {
            return b.score - a.score;
        }).findIndex(function (element) {
            if (element.student.secondName === secondName)
                return true;
        }) + 1;

    }
}

Group.prototype.performance = function (secondName) {
    if (arguments.length === 0) {
        var score = 0;
        var counter = 0;

        this.forEach(function (element) {
            score += element.getAverageRating();
            counter++;
        });

        return score / counter;
    } else {
        return this.map(function (element) {
            var score = element.getAverageRating();
            
            return { student: element, score: score };
        }).sort(function (a, b) {
            return b.score - a.score;
        }).findIndex(function (element) {
            if (element.student.secondName === secondName)
                return true;
        }) + 1;
    }
}