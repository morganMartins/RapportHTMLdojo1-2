import { faker, th } from '@faker-js/faker';
describe('Demoblaze Dojo 02', () => {
// Création d'un utilisateur
  it('Création utilisateur', () => {
    // constantes faker
    const lastName = faker.person.lastName();
    const password = faker.internet.password();
    const country = faker.location.country();
    const city = faker.location.city();
    const creditCardNumber = faker.finance.creditCardNumber();
    cy.visit('https://www.demoblaze.com/');
    // Création d'un utilisateur
    cy.get('#signin2').click({ force: true });
    //cy.wait(500)
    cy.get('#sign-username').type(lastName);
    //cy.wait(500)
    cy.get('#sign-password').type(password);
    //cy.wait(500)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
    //cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click({ force: true })
    // connexion
    //cy.wait(500)
    cy.get('#login2').click({ force: true })
    //cy.wait(500)
    cy.get('#loginusername', {timeout: 4000}).type(lastName)
    //cy.wait(500)
    cy.get('#loginpassword', {timeout: 4000}).type(password)
    //cy.wait(500)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
    // ajout produit
    cy.wait(1000)
    cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').click({ force: true })
    cy.wait(1000)
    cy.get('.col-sm-12 > .btn').click({ force: true })
    cy.wait(1000)
    // confirmer commande {force true}
    cy.get('#cartur').click({ force: true })
    cy.get('.col-lg-1 > .btn').click({ force: true })
      //remplir formulaire
      cy.get('#name').type(lastName)
      cy.get('#country').type(country)
      cy.get('#city').type(city)
      cy.get('#card').type(creditCardNumber)
      cy.get('#month').type('05')
      cy.get('#year').type('2025')
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      // c'est tout joli d'avoir réussi
      cy.screenshot("validation-achat")
      // confirmation
      cy.get('.confirm').click()
  })
})
/* Coorection de Oussama
import { faker } from "@faker-js/faker";

describe("automatisation Demoblaze", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("creation et inscription d'un utilisateur aléatoire", () => {
    cy.intercept("https://api.demoblaze.com/signup").as("signup");
    cy.writeFile("cypress/fixtures/user.json", {
      userName: `${faker.internet.userName()}`,
      password: `${faker.internet.password()}`,
      name: `${faker.name.fullName()}`,
      country: `${faker.address.country()}`,
      city: `${faker.address.city()}`,
      creditCard: `${faker.finance.creditCardNumber()}`,
      month: `${faker.date.month()}`,
      year: `${Math.random()}`,
    });

    cy.fixture("user.json").as("user");
    cy.get("@user").then((user) => {
      cy.get("#signin2").click();
      cy.wait(500)
      cy.get("#sign-username").type(user.userName);
      cy.get("#sign-password").type(user.password);
      cy.get(
        "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
      cy.wait("@signup")
        .its("response")
        .then((response) => {
          cy.wrap(response).its("statusCode").should("eq", 200);
        });
    });
  });

  it("parcours utilisateur connecté", () => {
    cy.intercept("https://api.demoblaze.com/login").as("login");
    cy.fixture("user.json").as("user");
    cy.get("@user").then((user) => {
      cy.get("#login2").click();
      cy.wait(500)
      cy.get("#loginusername").type(user.userName);
      cy.get("#loginpassword").type(user.password);
      cy.get(
        "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
      cy.wait("@login")
        .its("response")
        .then((response) => {
          cy.wrap(response).its("statusCode").should("eq", 200);
          cy.wrap(response).its("statusMessage").should("eq", "OK");
          cy.wrap(response).its("body").should("contain", "Auth_token");
        });
      cy.wait(1000);
      cy.get(":nth-child(3) > .card > :nth-child(1) > .card-img-top").click();
      cy.wait(1000);
      cy.intercept("https://api.demoblaze.com/addtocart").as("addToCart");
      cy.get(".col-sm-12 > .btn").click();
      cy.wait(1000);
      cy.wait("@addToCart")
        .its("response")
        .then((response) => {
          cy.wrap(response).its("statusCode").should("eq", 200);
          cy.wrap(response).its("statusMessage").should("eq", "OK");
        });
      cy.wait(1000);
      cy.get("#cartur").click();
      cy.wait(1000);
      cy.get(".col-lg-1 > .btn").click();
      cy.wait(1000);
      cy.get("@user").then((user) => {
        cy.get("#name").type(user.name);
        cy.get("#country").type(user.country);
        cy.get("#city").type(user.city);
        cy.get("#card").type(user.creditCard);
        cy.get("#month").type(user.month);
        cy.get("#year").type(user.year);
      });
      cy.wait(1000);
      cy.intercept("https://api.demoblaze.com/deletecart").as("deleteCart");
      cy.get(
        "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
      cy.get(".sweet-alert").should("be.visible");
      cy.get(".sweet-alert").should("contain", "Thank you for your purchase!");
      cy.wait("@deleteCart")
        .its("response")
        .then((response) => {
          cy.wrap(response).its("statusCode").should("eq", 200);
          cy.wrap(response).its("statusMessage").should("eq", "OK");
        });
      cy.wait(1000);
      cy.get(".confirm").click();
      cy.url().should("include", "index.html");
    });
  });
});
*/