export abstract class UserLogin {
    firstname: string;
    lastname:string;
    email:string;
    phonNumbeer:number;
    password:string;

    constructor(fistName:string, lastName:string, email:string, phoneNumber:number, password:string) {
        this.firstname = fistName;
        this.lastname = lastName;
        this.email = email;
        this.password = password;
        this.phonNumbeer = phoneNumber
    }

    abstract Login(): void;
    abstract Register(): void
}