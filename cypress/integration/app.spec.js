// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function() {
  beforeEach(function() {
    cy.visit("/");
    cy.get('.showTasks').click()
  });

  //Write your tests here
});
