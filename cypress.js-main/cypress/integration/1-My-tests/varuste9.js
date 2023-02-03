describe('тестирование магазина varuste', function () {
    
    it('нег.проверка ввода невалидых данных в поисковую строку и попытаться найти ', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.get('input[type="text"]').type('ddsfsdfsdf').click()
        
        
    })
})