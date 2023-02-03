describe('тестирование магазина varuste', function () {
    
    it('Нег.пров. на ввод логина и пропуск пароля', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.contains('Войдите в систему').click()
        cy.get('#email').type('operatar@gmail.com')
        cy.contains('Войти').click()
            })
})