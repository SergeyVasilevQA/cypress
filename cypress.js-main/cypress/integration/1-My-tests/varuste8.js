describe('тестирование магазина varuste', function () {
    
    it('нег.проверка на вход без логина и пароля', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.contains('Войдите в систему').click()
        cy.contains('Войти').click()
            })
})
