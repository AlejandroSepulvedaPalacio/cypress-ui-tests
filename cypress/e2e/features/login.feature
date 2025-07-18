
@inicioExitoso
Feature: INICIO DE SESION

    Scenario: inicio exitoso de sesion 
        Given el Usuario esta en la pagina de inicio de sesion
        When El Usuario ingresa su nombre de usuario "Admin" y password "admin123", y el usuario hace clic en el boton Login
        Then El usuario debe ser redirigido a la pagina de inicio principal y debe aparecer un dashboard principal

    @inicioFallido
    Scenario: inicio fallido de sesion con usuario y contraseña invalidos
        Given el Usuario esta en la pagina de inicio de sesion
        When El Usuario ingresa su nombre de usuario "UsuarioInvalido" y password "ContraseñaInvalida", y el usuario hace clic en el boton Login
        Then Se debe mostrar un mensaje de error indicando que el nombre de usuario o la contraseña son incorrectos    