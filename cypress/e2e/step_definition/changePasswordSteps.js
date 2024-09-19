import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../page_objects/loginPage.js'; // Se importa la clase LoginPage para usar sus metodos
import ProfilePage from '../page_objects/ProfilePage.js'; // Se importa la clase ProfilPage para usar sus metodos


const loginPage = new LoginPage();                        // se crea el objeto loginPage de la clase LoginPage para acceder al los metodos de la clase 
const profilePage = new ProfilePage();                    // se crea el objeto profilePage de la clase profilePage para acceder al los metodos de la clase 

// TERCER ESCENARIO

Given("El Usuario esta logueado en la pagina principal", () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.submit();
    cy.url().should('include', '/dashboard'); // Asegura de que estás en la página principal
});
  
When("El Usuario selecciona en el nombre de su usario y selecciona la opcion Change password y el Usuario hace clic en el Change password, y el Usuario ingresa contraseña actual {string}, y el Usuario ingresa nueva contraseña {string}, y el Usuario confirma la nueva contraseña {string}, y el Usuario hace clic en el boton Save", (currentPassword, newPassword, confirmPassword) => {
    profilePage.openUserMenu(); // Abre el menú del usuario
    profilePage.openChangePasswordModal(); // Método para abrir el modo de cambio de contraseña
    profilePage.fillCurrentPassword(currentPassword);
    profilePage.fillNewPassword(newPassword);
    profilePage.fillConfirmPassword(confirmPassword);
    profilePage.submitChangePassword();
    
});
  
Then("la contraseña debe ser cambiada con exito y el Usuario debe ver un mensaje de confirmacion", () => {
    profilePage.getSuccessMessage().should('be.visible').and('contain.text', 'Successfully Saved');
});