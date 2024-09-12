import {          /// Se importan las funciones que permiten implementar pasos de prueba en Cypress utilizando la sintaxis de Cucumber
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


/// PRIMER ESCENARIO 

Given("el Usuario esta en la pagina de inicio de sesion", () => {
    // Visita la página de inicio de sesión
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  
  When("El Usuario ingresa su nombre de usuario {string} y password {string}, y el usuario hace clic en el boton Login" , (Username, password) => {
    cy.get('input[name="username"]').type(Username); // get busca un elemento tipo input que tenga de nombre username y el type significa que va a escribir dentro del campo html
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Then("El usuario debe ser redirigido a la pagina de inicio principal y debe aparecer un dashboard principal" , () => {
    // Visita la página de inicio de sesión
    cy.url().should('include', '/dashboard');
    //cy.get('div#dashboard').should('be.visible');
  });
  
/// SEGUNDO ESCENARIO 
  
  Then("Se debe mostrar un mensaje de error indicando que el nombre de usuario o la contraseña son incorrectos", () => {
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('.oxd-alert').should('be.visible').and('contain.text', 'Invalid credentials');
  });

