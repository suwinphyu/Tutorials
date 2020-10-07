///<reference types = "cypress"/>

describe("Checking date picker",()=>{
    before(()=>{
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html',{timeout:9000})

    })

    it("Able to select date picker",()=>{
        cy.get('#sandbox-container1 > .input-group > .input-group-addon').click()
        cy.get('tbody > :nth-child(3) > :nth-child(4)').click()
        cy.get('#sandbox-container1 > .input-group > .form-control').should("have.value","17/09/2020")
    })

    it.only("Clear button works correctly",()=>{
        cy.get('#sandbox-container1 > .input-group > .input-group-addon').click()
        cy.get('.datepicker-days > .table-condensed > tfoot > :nth-child(2) > .clear').click()
    })
})