import { UserLogin } from "./UserLogin";

class SellerLogin extends UserLogin {
    login(): void {
        console.log(`✅ Seller '${this.firstname} ${this.lastname}' logged in. Access to product and sales management.`);
    }

    register(): void {
        console.log(`📝 Seller '${this.firstname} ${this.lastname}' registered successfully.`);
    }
}


