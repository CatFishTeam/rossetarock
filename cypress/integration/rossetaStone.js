require('dotenv').config()
//process.env.MYGES_LOGIN
//process.env.MYGES_PWD

describe('RossetaStone', () => {
  it('Go to my ges on log in', () => {
    cy.visit('https://www.myges.fr/#/');
    cy.contains('Se connecter').click();
    cy.get('#username')
        .type('MYGES_LOGIN')
    cy.get('#password')
        .type('MYGES_PWD')
    cy.contains('CONNEXION').click();
  })
  it('Go to RossetaStone', () => {
    cy.visit('https://partenaires.reseau-ges.fr/tellmemore');
    cy.wait(7000);
    cy.get('body').then(($body) => {
      if($body.find('[href="javascript:kickOthers();"]')){
        cy.get('[href="javascript:kickOthers();"]').click()
      }
    }).then(() => {
        cy.get('#btnLimitedModeContinue').click();
        cy.get('[type="radio"]').check('ENGLISH');
        cy.get('#btnOk').click();
        cy.wait(2000);
        cy.contains('Poursuivre').click();
    })
  })
  it('Do exercice', function () {
    Cypress._.times(100, () => {
      cy.get('[id*="ActivityContainer"]').then(($body) => {
        if($body.find('[type="radio"]')){
          cy.get('[type="radio"]').each(($el) => {
            cy.wrap($el).click();
            cy.get('#btnCorrect').click();
            cy.wait(2000);
            cy.get('.rsAcitivityNoticeGood').should('be.visible').and('have.css','display').and('match',/none/).then(() => {
                cy.get('#btnNext').click();
            })
          })

        } else {
            cy.get('#btnSkip').click()
            cy.wait(60000);
        }
      })
    })
  })
})