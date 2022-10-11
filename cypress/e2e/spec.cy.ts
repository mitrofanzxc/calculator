describe('Calculator App', () => {
  it('Should visit the Deploy Link', () => {
    cy.visit('https://mitrofanzxc.github.io/calculator/');
  });

  it('Should check the router', () => {
    cy.visit('http://localhost:8080/');

    cy.contains('Home (FC)').should('have.class', 'active');
    cy.contains('Home (CC)').click().should('have.class', 'active');
    cy.contains('Settings (FC)').click().should('have.class', 'active');
    cy.contains('Settings (CC)').click().should('have.class', 'active');
    cy.contains('Home (FC)').click().should('have.class', 'active');
  });

  it('Should check the work of addition', () => {
    cy.get('form input').should('have.value', '0');

    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();

    cy.get('form input').should('have.value', '3');
  });

  it('Should add to history', () => {
    cy.get('section h3').contains('1+2');
    cy.get('section h3').should('have.length', 1);
  });

  it('Should clear history', () => {
    cy.contains('Settings (FC)').click();
    cy.contains('Clear History').click();
    cy.contains('Home (FC)').click();
    cy.get('section h3').should('have.length', 0);
  });
});

export {};
