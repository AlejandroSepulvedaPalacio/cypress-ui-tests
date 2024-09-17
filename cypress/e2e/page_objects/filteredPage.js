

class FilteredPage {
    openAdminSection(){
        cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').click();

    }

    fillUserNameFiltered(username)
    {
        cy.get('.oxd-input.oxd-input--active').type(username);
    }

    openUserRole(){

        cy.get('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();
    }

    getUserRoleAdmin(){

        cy,get('oxd-select-text.oxd-select-text--active').click();
    }


    fillEmployeeName(employeename){
        cy.get('oxd-autocomplete-text-input oxd-autocomplete-text-input--active').type(employeename); 
    }

    openStatus(){
        cy.get('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();
    
    }

    getOpenStatus(){

        cy.get('oxd-select-text-input').click();
    }

    getSubmit(){
        cy.get('button[type="submit"]').click();
    }

    getSection(){
        cy.get('.oxd-text oxd-text--span'); 
    }
}
export default FilteredPage; 

