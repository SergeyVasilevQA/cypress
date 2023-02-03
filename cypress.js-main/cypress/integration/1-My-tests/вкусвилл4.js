describe('тестирование магазина вкуссвилл', function () {
    
    it('добавление товара в корзину', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderSearchBlock__Input').type('молоко')
        cy.contains('Молоко 3,2%, 1 л').click()
        cy.contains('В корзину').click()
    })
})