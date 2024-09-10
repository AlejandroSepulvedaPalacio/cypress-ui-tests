import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


Given("el Usuario esta en la pagina de inicio de sesion", () => {
    // Visita la página de inicio de sesión
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  
  When("When El Usuario ingresa su nombre de usuario {string} y password {string}, y el usuario hace clic en el boton Login" , (Username, password) => {
    cy.get('input[name="username"]').type(Username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Then("El usuario debe ser redirigido a la pagina de inicio principal, y debe aparecer un dashboard principal " , () => {
    // Visita la página de inicio de sesión
    cy.url().should('include', '/dashboard');
    cy.get('div#dashboard').should('be.visible');
  });
  