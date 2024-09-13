class ProfilePage{

   openUserMenu(){
        cy.get('li.oxd-userdropdown').click();
   }

    openChangePasswordModal() {
        // Implementa elemento HTML abrir el modal de cambio de contraseña
        cy.get('a[href="/web/index.php/pim/updatePassword"]').click();
    }

    fillCurrentPassword(password) {
        // Selecciona el campo de entrada para la contraseña actual usando la clase o tipo
        cy.get('input.oxd-input[type="password"]').type(password); 

    }

    fillNewPassword(password) {
         // Usa .eq() si hay más de un campo de tipo password
        cy.get('input.oxd-input[type="password"]').eq(1).type(password); // get busca un elemento tipo input que tenga de nombre currentPassword y el type significa que va a escribir dentro del campo html
    }

    
    fillConfirmPassword(password) {
        cy.get('input.oxd-input[type="password"]').eq(2).type(password); 
    } 
    
    submitChangePassword() {
        cy.get('button[type="submit"]').click(); 
    }
    
    getSuccessMessage() {
        return cy.get('.success-message'); 
      }

}


export default ProfilePage;