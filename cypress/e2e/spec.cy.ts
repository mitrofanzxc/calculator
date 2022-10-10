describe('Deploy Link', () => {
  it('Visits the Deploy Link', () => {
    cy.visit('https://mitrofanzxc.github.io/calculator/');
  });
});

describe('Localhost', () => {
  it('Visits the Localhost', () => {
    cy.visit('http://localhost:8080/');
  });
});

export {};
