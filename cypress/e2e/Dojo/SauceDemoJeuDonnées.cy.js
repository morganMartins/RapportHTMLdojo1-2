describe('Utilisation de Saucedemo', () =>{
    // connexion
  beforeEach(() =>{
    cy.visit('https://www.saucedemo.com')
    cy.fixture("sauceDemo").as('users')
    });
   // cas 1
   it("connexion1", function() {
    const user = this.users[0];
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="login-button"]').click();
   }),
   //cas 2
   it("connexion2", function() {
    const user = this.users[1];
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="login-button"]').click();
   });
  // cas 3
   it("connexion3", function() {
    const user = this.users[2];
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="login-button"]').click();
   });
  // cas 4
    it("connexion4", function(){
    const user = this.users[3];
  cy.get('[data-test="username"]').type(user.username);
  cy.get('[data-test="password"]').type(user.password);
  cy.get('[data-test="login-button"]').click();
 });
  })