describe('тестирование магазина varuste', function () {
    
    it('Проверка введения логина и пароля и входа в корзину', function () {
        /зайти на сайт/
        cy.visit('https://varuste.net/ru/') 
        cy.contains('Войдите в систему').click()
        cy.get('#email').type('operatar@gmail.com')
        cy.get(':nth-child(2) > :nth-child(2) > input').type(18011986)
        cy.contains('Войти').click()
        cy.get('#ostoskori > .svg_icon').click()
            })
})