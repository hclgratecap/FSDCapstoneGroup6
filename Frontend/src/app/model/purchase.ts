import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";

export class Purchase {
    order!:Order;
    customer:Customer;
    address!:Address;
    constructor(customer:Customer,address:Address,order:Order){
        this.customer=customer;
        this.order=order;
        this.address=address;
        
    }
}
