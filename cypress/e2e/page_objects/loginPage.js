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
    return cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'); // Selecciona el h6 con las clases específicas
  }

  // Método para obtener el mensaje de error
  getErrorMessage() {
    return cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text'); // Ajusta el selector según el HTML real
  }
}

export default LoginPage;