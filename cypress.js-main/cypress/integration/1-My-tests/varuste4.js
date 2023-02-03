describe('тестирование магазина varuste', function () {
    
    it('Проверка ввода в поисковой строке бренда и провалиться в него ', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.get('input[type="text"]').type('petzl')
        cy.get('[href="/ru/b6/petzl"] > .content-wrapper > .content > img').click()
        
    })
})