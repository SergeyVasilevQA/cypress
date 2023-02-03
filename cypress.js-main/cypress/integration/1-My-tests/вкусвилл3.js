describe('тестирование магазина вкуссвилл', function () {
    
    it('ввод в поисковой строке и проваливание в определенный товар', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderSearchBlock__Input').type('молоко')
        cy.contains('Молоко 3,2%, 1 л').click()
    })
})