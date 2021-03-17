import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.productsContainer = Selector('.inventory_container')
        this.title = Selector('div').withExactText('Products')
        this.burgerButton = Selector('.bm-burger-button').withExactText('Open Menu')
        this.logoutButton = Selector('a').withExactText('Logout')
        this.shoppingCartButton = Selector('.shopping_cart_link')
        this.addToCartButton = Selector('button').withExactText('ADD TO CART').nth(0)
        this.addToCartButton2 = Selector('button').withExactText('ADD TO CART').nth(1)
        this.cartCounter = Selector('.fa-layers-counter')
    }
}

export default new ProductsPage();