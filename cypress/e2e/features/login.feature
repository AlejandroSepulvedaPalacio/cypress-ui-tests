Feature: INICIO DE SESION

    Scenario: Usuario con credenciales inicia sesion en el sitio ORANGE HRM
        Given el Usuario esta en la pagina de inicio de sesion
        When El Usuario ingresa su nombre de usuario "Admin" y password "admin123", y el usuario hace clic en el boton Login
        Then El usuario debe ser redirigido a la pagina de inicio principal y debe aparecer un dashboard principal
       

Feature: CAMBIO DE PASSWORD

    Scenario: Usuario con credenciales se loguea en ORANGE HRM y cambia su contraseña correctamente
        Given El Usuario esta logueado en la pagina principal
        When El Usuario selecciona en el nombre de su usario y selecciona la opcion Change password y el Usuario hace clic en el Change password, y el Usuario ingresa contraseña actual "admin123", y el Usuario ingresa nueva contraseña "admin1234", y el Usuario confirma la nueva contraseña "admin1234", y el Usuario hace clic en el boton Save 
        Then la contraseña debe ser cambiada con exito y el Usuario deve ver un mensaje de confirmacion