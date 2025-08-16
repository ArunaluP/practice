// 
class User {
    static userCount =0

    constructor(name){
        this.username = name
        User.userCount += 1; // Increment user count each time a new user is created
    }
}
const user1 = new User(`Arunalu`)
const user2 = new User(`Arunalu`)
const user3 = new User(`Arunalu`)

console.log(User.userCount)