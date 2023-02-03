describe('тестирование магазина varuste', function () {
    
    it('нег.проверка на ввод невалидного пароля', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.contains('Войдите в систему').click()
        cy.get('#email').type('operatar@gmail.com')
        cy.get(':nth-child(2) > :nth-child(2) > input').type(3455011986)
        cy.contains('Войти').click()
            })
})
