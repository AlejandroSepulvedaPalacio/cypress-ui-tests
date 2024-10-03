class ProfilePage{

   openUserMenu(){
        cy.get('li.oxd-userdropdown').click();
   }

    openChangePasswordModal() {
        // Implementa elemento HTML abrir el modal de cambio de contraseña
        cy.get('a[href="/pim/updatePassword"]').click();   //<a href="/pim/updatePassword" role="menuitem" class="oxd-userdropdown-link">Change Password</a>
        //cy.visit('https://opensource-demo.orangehrmlive.com/dashboard/index');
        
    }

    fillCurrentPassword(password) {  ////input[@type="password"]  (//input[@type="password"])[1]  ctl* F
        // Selecciona el campo de entrada para la contraseña actual usando la clase o tipo
        cy.contains('label', 'Current Password')
        cy.get('input[type="password"]').eq(0).type(password);

    }

    fillNewPassword(password) {
         cy.contains('label', 'Password')
         // Usa .eq() si hay más de un campo de tipo password
         cy.get('input[type="password"]').eq(1).type(password); // get es un selector que busca y nos trae un elemento tipo input que tenga de nombre NewPassword y el type significa que va a escribir dentro del campo html
    }

    
    fillConfirmPassword(password) {
        cy.contains('label', 'Confirm Password')
        cy.get('input[type="password"]').eq(2).type(password); 
    } 
    
    submitChangePassword() {
        cy.get('button[type="submit"]').click(); 
    }
    
    getSuccessMessage() {
        return cy.get('.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text');
        //return cy.get('successfully saved'); 
      }

}

export default ProfilePage;