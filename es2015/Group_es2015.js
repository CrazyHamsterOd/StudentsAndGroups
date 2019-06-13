class Group extends Array {
    constructor() {
        super();
    }

    attendance(secondName) {
        if (arguments.length === 0) {
            let score = 0;
            let counter = 0;

            this.forEach(element => {
                score += element.getAverageVisit();
                counter++;
            });

            return score / counter;
        } else {
            return this.map(element => {
                let score = element.getAverageVisit();
                
                return { student: element, score: score };
            }).sort((a, b) => {
                return b.score - a.score;
            }).findIndex(element => {
                if (element.student.secondName === secondName)
                    return true;
            }) + 1;
        }
    }

    performance(secondName) {
        if (arguments.length === 0) {
            let score = 0;
            let counter = 0;

            this.forEach(element => {
                score += element.getAverageRating();
                counter++;
            });

            return score / counter;
        } else {
            return this.map(element => {
                let score = element.getAverageRating();
                
                return { student: element, score: score };
            }).sort((a, b) => {
                return b.score - a.score;
            }).findIndex(element => {
                if (element.student.secondName === secondName)
                    return true;
            }) + 1;
        }
    }
}
