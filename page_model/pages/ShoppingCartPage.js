import { Selector } from 'testcafe'

class ShoppingCartPage {
    constructor(){
        this.title = Selector('.subheader').withExactText('Your Cart')
        this.item = Selector('.cart_item')
        this.checkoutButton = Selector('a').withExactText('CHECKOUT')
    }
}

export default new ShoppingCartPage();