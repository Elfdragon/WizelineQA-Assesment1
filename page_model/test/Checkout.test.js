import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"
import UserInformationPage from "../pages/UserInformationPage"
import OverviewPage from "../pages/OverviewPage"
import FinishPage from "../pages/FinishPage"
import { CREDENTIALS } from "../data/Constants"

fixture('Testing checkout flow')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(t,CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await t.click(ProductsPage.addToCartButton)
        await t.click(ProductsPage.shoppingCartButton)
        await t.click(ShoppingCartPage.checkoutButton)

    })


test('Users can navigate to the Checkout: Your information page', async t => {

    await t.expect(UserInformationPage.title.exists).ok() 
})

test('Users can not continue if First name is missing', async t => {

    await t.click(UserInformationPage.continueButton)

    await t.expect(UserInformationPage.firsNameError.exists).ok()
})

test('Users can not continue if Last name is missing', async t => {

    await t.typeText(UserInformationPage.firstNameField, CREDENTIALS.USER_INFO.FIRST)

    await t.click(UserInformationPage.continueButton)

    await t.expect(UserInformationPage.lastNameError.exists).ok()
})

test('Users can not continue if ZIP is missing', async t => {

    await t.typeText(UserInformationPage.firstNameField, CREDENTIALS.USER_INFO.FIRST)
    await t.typeText(UserInformationPage.lastNameField, CREDENTIALS.USER_INFO.LAST)

    await t.click(UserInformationPage.continueButton)

    await t.expect(UserInformationPage.ZIPError.exists).ok()
})

test('Users navigate to overview page when checkout form filled correctly', async t => {

    await t.typeText(UserInformationPage.firstNameField, CREDENTIALS.USER_INFO.FIRST)
    await t.typeText(UserInformationPage.lastNameField, CREDENTIALS.USER_INFO.LAST)
    await t.typeText(UserInformationPage.ZIPField, CREDENTIALS.USER_INFO.ZIP)

    await t.click(UserInformationPage.continueButton)

    await t.expect(OverviewPage.title.exists).ok()
})

test('Overview items match added items', async t => {

    await t.typeText(UserInformationPage.firstNameField, CREDENTIALS.USER_INFO.FIRST)
    await t.typeText(UserInformationPage.lastNameField, CREDENTIALS.USER_INFO.LAST)
    await t.typeText(UserInformationPage.ZIPField, CREDENTIALS.USER_INFO.ZIP)

    await t.click(UserInformationPage.continueButton)

    await t.expect(OverviewPage.item.exists).ok()
})

test('User can complete an order', async t => {

    await t.typeText(UserInformationPage.firstNameField, CREDENTIALS.USER_INFO.FIRST)
    await t.typeText(UserInformationPage.lastNameField, CREDENTIALS.USER_INFO.LAST)
    await t.typeText(UserInformationPage.ZIPField, CREDENTIALS.USER_INFO.ZIP)

    await t.click(UserInformationPage.continueButton)

    await t.click(OverviewPage.finishButton)

    await t.expect(FinishPage.title.exists).ok()
})