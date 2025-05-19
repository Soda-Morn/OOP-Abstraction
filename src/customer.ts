export abstract class UserLogin {
  protected username: string;
  protected password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  abstract login(): void;
}

class CustomerLogin extends UserLogin {
  login(): void {
    console.log(`Customer '${this.username}' logged in. Showing product catalog and order history.`);
  }
}

const customer = new CustomerLogin("customerUser", "cust789");
customer.login();