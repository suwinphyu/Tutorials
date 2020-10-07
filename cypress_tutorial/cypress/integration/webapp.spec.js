/// <reference types="Cypress" />

context('Verify that web app works correctly', () => {
    before(() => {
      cy.visit('https://web.mvoterapp.com/',{timeout:90000})
    })

      it("Check the candidates menu is correct",()=>{
        cy.get('.col-lg-3 > .Navigation > ul > :nth-child(2) > :nth-child(1) > div.active > .text',{timeout:1000}).click()
        cy.location('pathname').should('include', 'candidates')
        cy.go('back')
        
      })
      it("Check the parties menu is correct",()=>{
        cy.get('.col-lg-3 > .Navigation > ul > :nth-child(3) > :nth-child(1) > .inactive > .text',{timeout:800}).click()
        cy.location('pathname').should('include','parties')
        cy.go('back')
       
      })
      it("Check the how_to_vote menu is correct",()=>{
        cy.get('.col-lg-3 > .Navigation > ul > :nth-child(4) > :nth-child(1) > .inactive > .text',{timeout:800}).click()
        cy.location('pathname').should('include','vote')
        cy.go('back')
      })
      it("Check the faq menu is correct",()=>{
        cy.get('.col-lg-3 > .Navigation > ul > :nth-child(5) > :nth-child(1) > .inactive > .text',{timeout:800}).click()
        cy.location('pathname').should('include','faq')
        cy.go('back')
      })
      it("Check the news menu is correct",()=>{
        cy.get('.col-lg-3 > .Navigation > ul > :nth-child(6) > :nth-child(1) > .inactive > .text',{timeout:800}).click()
        cy.location('pathname').should('include','news')
        cy.go('back')
      })
      it("Navigate the candidates list by filtering location",()=>{
        cy.get('.color-primary > [href="/location"] > .Button > .material-icons').click()
        cy.get(':nth-child(4) > span > .material-icons').click()
        cy.get(':nth-child(9) > .Collapsible__trigger').click()
        cy.get('.Collapsible__contentInner > :nth-child(11)').click()

        cy.get(':nth-child(5) > span > .material-icons').click()
        cy.wait(200)
        cy.get('.ReactModal__Content > :nth-child(17)').click()
        cy.get('.Location__done').click()

        cy.get(':nth-child(1) > .cursor-pointer > .text-center').click()
        cy.wait(50)
        cy.get(':nth-child(2) > .cursor-pointer > .text-center').click()
        cy.wait(50)
        cy.get(':nth-child(3) > .cursor-pointer > .text-center').click()
        cy.wait(500)
        cy.get(':nth-child(3) > .cursor-pointer > .text-center').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .no-style > .Card > .CandidateList__avatar').click()
        cy.get('.Candidate__partyName > .material-icons').click()

      })

  
     
})