import Fetcher from './Fetcher.js';

class Products {
    constructor() {
        this.api = "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120";
    }

    getProducts() {
        return Fetcher.get(this.api);
    }
}

export default Products;
