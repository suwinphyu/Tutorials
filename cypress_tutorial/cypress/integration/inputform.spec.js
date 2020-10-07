///<reference types = "cypress"/>

describe("Verify the input forms work correctly",()=>{
    it('Navigate the URL successfully',()=>{
        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
        cy.get('.at-cm-no-button').click()
        
    })

    it('Check simple input field is shown correctly',()=>{
        cy.get('.form-group > #user-message').type("Hello, cypress!",{timeout:6000})
        cy.get('#get-input > .btn').click()
        cy.get('#display').should("have.text","Hello, cypress!")

    })
    it('Check adding two numbers are correct',()=>{
        cy.get('#sum1').type(5000)
        cy.get('#sum2').type(2)
        cy.get('#gettotal > .btn').click()
        cy.get('#displayvalue').should("have.text","5002")
    })
})