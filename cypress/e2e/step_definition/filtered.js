import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../page_objects/loginPage.js'; // Se importa la clase LoginPage para usar sus metodos
import FilteredPage from "../page_objects/filteredPage.js";

const loginPage = new LoginPage();                        // se crea el objeto loginPage de la clase LoginPage para acceder al los metodos de la clase 
const filteredPage = new FilteredPage();                  // se crea el objeto filteredPage  de la FilteredPage para acceder al los metodos de la clase 

///CUARTO ESCENARIO 
/// Background para loguearse 
/*Given("El Usuario esta logueado en la pagina principal", () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.submit();
    cy.url().should('include', '/dashboard'); // Asegura de que estás en la página principal
});*/

When("El Usuario hace clic en la seccion Admin y el Usuario ingresa el username {string}, y el Usuario selecciona el menú despegable de Rol de usuario y hace clic en la opcion administracion, y el Usuario ingresa el nombre del empleado {string} y hace clic en el nombre filtrado y el Usuario selecciona el menu despegable de Estado y hace clic en la opcion Activado y hace clic en buscar", (username, 
    employeename)=> {
        
    filteredPage.openAdminSection();
    filteredPage.fillUserNameFiltered(username);
    filteredPage.openUserRole();
    filteredPage.getUserRoleAdmin();
    filteredPage.fillEmployeeName(employeename);
    filteredPage.openStatus();
    filteredPage.getOpenStatus();
    filteredPage.getSubmit();


});

Then("Debe aparecer una seccion con la informacion buscada", () => {

    filteredPage.getSection();
    
  }); 