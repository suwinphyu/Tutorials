///<reference types = "cypress"/>

it('should navigate to the application',()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=2000');
    cy.get('.new-todo').type("testing{enter}")
    //cy.get('.new-todo').type("todo{enter}")
    //cy.get(':nth-child(2) > .view > label',{timeout:3000}).click();
   // cy.get('.clear-completed').click();

   cy.get('label').should('have.text','testing')
  // cy.get('.toggle').should('not.be.checked')
   cy.get('.toggle').click()
   cy.get('.toggle').should('be.checked')




})