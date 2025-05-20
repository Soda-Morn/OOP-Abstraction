import { UserLogin } from "./UserLogin";

export class Customer extends UserLogin {
  login(): void {
    console.log(`✅ customer ${this.firstname + this.lastname} logged in.`);
  }

  register(): void {
    console.log(`📋 customer ${this.firstname + this.lastname} registered.`);
  }
}