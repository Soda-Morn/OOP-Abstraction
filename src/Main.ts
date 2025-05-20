import { Admin } from "./Admind";
import { Customer } from "./customer";
import { Sell } from "./sell";

// Create and test a CustomerLogin instance
const customer = new Customer("Lin", "Neat", "john@example.com", 1234567890, "password123");
customer.login();
customer.register();

// Create and test an Admin instance
const admin = new Admin("Rachana", "Ya", "jane@example.com", 9876543210, "adminpass");
admin.login();
admin.register();

// Create and test an seller instance
const seller = new Sell("Soda", "Morn", "jane@example.com", 9876543210, "seller");
seller.login();
seller.register();