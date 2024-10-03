export class CartDTO {
    constructor(cart) {
        this.id = cart._id;
        this.user = cart.user;
        this.products = cart.products;
    }
}
