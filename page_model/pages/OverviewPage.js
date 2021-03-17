import { Selector } from 'testcafe'

class OverviewPage {
    constructor(){
        this.title = Selector('.subheader').withExactText('Checkout: Overview')
        this.item = Selector('div.inventory_item_name').withExactText('Sauce Labs Backpack')
        this.finishButton = Selector('a').withExactText('FINISH')
    }
}

export default new OverviewPage();