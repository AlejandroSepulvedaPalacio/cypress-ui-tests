Feature: FILTRADO Y BUSQUEDA

    Background:
    Given El Usuario esta logueado en la pagina principal

    Scenario: Usuario con credenciales se loguea en ORANGE HRM y realiza filtrado de secciones para realizar busquedas
        When El Usuario hace clic en la seccion Admin y el Usuario ingresa el username "Admin", y el Usuario selecciona el menú despegable de Rol de usuario y hace clic en la opcion administracion, y el Usuario ingresa el nombre del empleado "manda akhil user" y hace clic en el nombre filtrado y el Usuario selecciona el menu despegable de Estado y hace clic en la opcion Activado y hace clic en buscar 
        Then  Debe aparecer una seccion con la informacion buscada 