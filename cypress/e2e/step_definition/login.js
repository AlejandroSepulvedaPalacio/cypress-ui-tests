import {          /// Se importan las funciones que permiten implementar pasos de prueba en Cypress utilizando la sintaxis de Cucumber
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


import LoginPage from '../page_objects/loginPage.js'; // Se importa la clase LoginPage para usar sus metodos

const loginPage = new LoginPage();   // se crea el objeto loginPage de la clase LoginPage para acceder al los metodos de la clase 

/// PRIMER ESCENARIO 

Given("el Usuario esta en la pagina de inicio de sesion", () => {
  loginPage.visit();  // se accede al metodo visit para visitar la pagina 
});

When("El Usuario ingresa su nombre de usuario {string} y password {string}, y el usuario hace clic en el boton Login", (username, password) => {
  loginPage.fillUsername(username);    // se accede al metodo fillUsername para ingresar el usuario 
  loginPage.fillPassword(password);    // se accede al metodo fillpassword para ingresar la contraseña 
  loginPage.submit();                  // se accede al metodo submit para hacer clic en el boton 
});

Then("El usuario debe ser redirigido a la pagina de inicio principal y debe aparecer un dashboard principal", () => {
  cy.url().should('include', '/dashboard');
  loginPage.getDashboard().should('be.visible').and('contain.text', 'Dashboard');
});

/*/// SEGUNDO ESCENARIO

Then("Se debe mostrar un mensaje de error indicando que el nombre de usuario o la contraseña son incorrectos", () => {
  cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  loginPage.getErrorMessage().should('be.visible').and('contain.text', 'Invalid credentials');
}); */




/*  /// PRIMER ESCENARIO 

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

/// TERCER ESCENARIO
*/