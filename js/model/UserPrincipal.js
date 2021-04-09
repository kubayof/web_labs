export default class UserPrincipal {
    constructor(name, email, gender, birthDate) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}