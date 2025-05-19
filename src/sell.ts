import { UserLogin } from "./UserLogin";

class SellerLogin extends UserLogin {
    Login(): void {
        console.log(`✅ Seller '${this.firstname} ${this.lastname}' logged in. Access to product and sales management.`);
    }

    Register(): void {
        console.log(`📝 Seller '${this.firstname} ${this.lastname}' registered successfully.`);
    }
}


