describe('тестирование магазина varuste', function () {
    
    it('Проверка проскролить до бренда и провалиться в него ', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.scrollTo(0,4000)
        cy.get('#kuva285').click()
    })
})