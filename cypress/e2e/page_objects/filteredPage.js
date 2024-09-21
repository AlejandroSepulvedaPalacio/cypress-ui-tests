
class FilteredPage {
    openAdminSection(){
        //cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').click();
        cy.contains('span', 'Admin').click();

    }

    fillUserNameFiltered(username)
    {
        //cy.get('input[data-v-636d6b87]').type(username);
        cy.get(':nth-child(2) > .oxd-input').type(username);
    }

    openUserRole(){

        cy.get('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(0).click();
    }

    getUserRoleAdmin(){

        cy.get('.oxd-select-text.oxd-select-text--active').click();
    }


    fillEmployeeName(employeename){
        cy.get('.oxd-autocomplete-text-input ').type(employeename); 
    }

    /*openStatus(){
        cy.get('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(1).click();
    
    }*/

    /*getOpenStatus(){

        //cy.get('oxd-select-text-input').click();
        cy.get('.oxd-select-text-input').eq(2).click(); //<div data-v-67d2aedf="" class="oxd-select-text-input" tabindex="0">Enabled</div>
    }*/

    getSubmit(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click();

    }

    getSection(){
        return cy.get('.orangehrm-horizontal-padding > .oxd-text'); 
    }
}
export default FilteredPage; 

