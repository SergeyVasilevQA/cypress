describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка входа в корзину', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderCart__Img').click()
    })
})