export class ProductDTO {
    constructor(product) {
        this.id = product._id;
        this.name = product.name;
        this.price = product.price;
        this.description = product.description;
        this.stock = product.stock;
    }
}