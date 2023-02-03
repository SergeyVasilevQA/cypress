
describe('тестирование магазина varuste', function () {
    
    it('Проверка успешного добавления товара в корзину', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/')   
         
        cy.get('#kuva300 > .pikkukuva_linkki').click()
        cy.contains('Освещение').click()
        cy.contains('Налобные фонарики').click()
        cy.contains('Petzl Nao+').click()
        cy.contains('Добавить в корзину').click()
        })
})