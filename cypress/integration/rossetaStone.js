describe('RossetaStone', function () {
  it('Go to my ges on log in', function () {
    cy.visit('https://www.myges.fr/#/');
    cy.contains('Se connecter').click();
    cy.get('#username')
        .type('[YourMyGESLogin]')
    cy.get('#password')
        .type('[YourMyGESPassword]')
    cy.contains('CONNEXION').click();
  })
  it('Go to RossetaStone', function () {
    cy.visit('https://partenaires.reseau-ges.fr/tellmemore');
    cy.wait(7000);
    cy.get('#btnLimitedModeContinue').click();
    cy.get('[type="radio"]').check('ENGLISH');
    cy.get('#btnOk').click();
    cy.wait(2000);
    cy.contains('Poursuivre').click();
  })
  it('Do exercice', function () {
    Cypress._.times(100, (i) => {
        //cy.get('#btnNext').click()
        cy.get('#btnSkip').click()
        cy.wait(60000);
    });
  })
})