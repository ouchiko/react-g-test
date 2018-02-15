import Fetcher from './Fetcher.js';

class Categories {

    constructor() {
        this.api = "https://api.gousto.co.uk/products/v2.0/categories";
    }

    getCategories() {
        return Fetcher.get(this.api);
    }
}

export default Categories;
