describe('тестирование магазина varuste', function () {
    
    it('Проверка смены языка и возвращения на главную страницу', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.get('[fill="#0039a6"]').click()
        cy.contains('English').click()
        cy.get('.ajaxlinkki > img').click()
    })
})