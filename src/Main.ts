import { Admin } from "./Admind";
import { Customer } from "./customer";
import { Order } from "./Order";

// Create and test a CustomerLogin instance
const customer = new Customer("John", "Doe", "john@example.com", 1234567890, "password123");
customer.login();
customer.register();

const order = new Order(1, ["Item1", "Item2"], 100.0);
customer.addOrder(order);

// Create and test an Admin instance
const admin = new Admin("Jane", "Smith", "jane@example.com", 9876543210, "adminpass");
admin.login();
admin.register();