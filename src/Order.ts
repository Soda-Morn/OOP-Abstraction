export class Order{
    orderId: number;
    item: string[];
    quantity: number;

    constructor(orderId: number, item: string[], quantity: number) {
        this.orderId = orderId;
        this.item = item;
        this.quantity = quantity;
    }
}