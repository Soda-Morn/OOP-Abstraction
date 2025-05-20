import { UserLogin } from "./UserLogin";

export class Admin extends UserLogin {
  login(): void {
    console.log(`✅ Admin ${this.firstname + this.lastname} logged in.`);
  }

  register(): void {
    console.log(`📋 Admin ${this.firstname + this.lastname} registered.`);
  }
}



