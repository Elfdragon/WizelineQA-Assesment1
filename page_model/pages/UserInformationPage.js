import { Selector } from 'testcafe'

class UserInformationPage {
    constructor(){
        this.title = Selector('.subheader').withExactText('Checkout: Your Information')
        this.firstNameField = Selector('input[id="first-name"]')
        this.lastNameField = Selector('input[id="last-name"]')
        this.ZIPField = Selector('input[id="postal-code"]')
        this.firsNameError = Selector('h3').withText('First Name is required')
        this.lastNameError = Selector('h3').withText('Last Name is required')
        this.ZIPError = Selector('h3').withText('Postal Code is required')
        this.continueButton = Selector('input[class="btn_primary cart_button"]')
    }
}

export default new UserInformationPage();