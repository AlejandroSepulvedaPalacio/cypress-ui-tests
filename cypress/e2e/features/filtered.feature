Feature: FILTRADO Y BUSQUEDA

    Scenario: Usuario con credenciales se loguea en ORANGE HRM y realiza filtrado de secciones para realizar busquedas
        Given El Usuario esta logueado en la pagina principal
        When El Usuario hace clic en la seccion Admin y el Usuario ingresa el username "Admin", y el Usuario selecciona el menú despleglabe de Rol de usuario y hace clic en la opcion administracion, y el Usuario ingresa el nombre del empleado "Nirmala Kiruvale jayashankar" y el Usuario selecciona el menu desplable de Estado y hace clic en la opcion Activado y hace clic en buscar 
        Then  Debe aparecer una seccion con la informacion buscada 