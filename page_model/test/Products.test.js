import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"
import { CREDENTIALS } from "../data/Constants"

fixture('Testing products page')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(t,CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    })

test('Users can log out', async t => {

    await t
        .click(ProductsPage.burgerButton)
        .click(ProductsPage.logoutButton)

    await t.expect(LoginPage.loginButton.exists).ok() 
})

test('Users can navigate to the shopping cart', async t => {

    await t.click(ProductsPage.shoppingCartButton)

    await t.expect(ShoppingCartPage.title.exists).ok() 
})

test('Users can add one item to the shopping cart', async t => {

    await t.click(ProductsPage.addToCartButton)

    await t.expect(ProductsPage.cartCounter.exists).ok()

    await t.click(ProductsPage.shoppingCartButton)

    await t.expect(ShoppingCartPage.item.count).eql(1)


})

test('Users can add multiple items to the shopping cart', async t => {

    await t.click(ProductsPage.addToCartButton)
    await t.click(ProductsPage.addToCartButton)

    await t.expect(ProductsPage.cartCounter.exists).ok()
    await t.click(ProductsPage.shoppingCartButton)

    await t.expect(ShoppingCartPage.item.count).eql(2)

})