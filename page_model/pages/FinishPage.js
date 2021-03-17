import { Selector } from 'testcafe'

class FinishPage {
    constructor(){
        this.title = Selector('.subheader').withExactText('Finish')
    }
}

export default new FinishPage();