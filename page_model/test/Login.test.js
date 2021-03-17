import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import { CREDENTIALS } from "../data/Constants"

fixture('Login feature testin')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t => {

    await LoginPage.submitLoginForm(t,CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductsPage.productsContainer.exists).ok() 
    await t.expect(ProductsPage.title.exists).ok() 
})

test('Blocked users can not login', async t => {

    await LoginPage.submitLoginForm(t,CREDENTIALS.LOCKED_OUT_USER.USERNAME,CREDENTIALS.LOCKED_OUT_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok() 
    await t.expect(LoginPage.blockedUserText.exists).ok() 
})

test('Users can not login using invalid credentials', async t => {

    await LoginPage.submitLoginForm(t,CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok() 
})