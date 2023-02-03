describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка поиска в инпуте и нажатия ентер', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderSearchBlock__Input').type('йогурт').type('{enter}')
        
    })
})