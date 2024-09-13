/// se crea la clase loginPage para definir los metodos relacionados a inicio de sesion, usuario, password, boton de inicio de sesion, pagina principal y mensaje de error.
class LoginPage {

    // Método para visitar la página de inicio de sesión
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    // Método para llenar el campo de nombre de usuario
  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  // Método para llenar el campo de contraseña
  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  // Método para hacer clic en el botón de inicio de sesión
  submit() {
    cy.get('button[type="submit"]').click();
  }

   // Método para obtener el elemento del dashboard
   getDashboard() {
    return cy.get('div#dashboard'); // Ajusta el selector según el HTML real
  }

  // Método para obtener el mensaje de error
  getErrorMessage() {
    return cy.get('.oxd-alert'); // Ajusta el selector según el HTML real
  }
}

export default LoginPage;