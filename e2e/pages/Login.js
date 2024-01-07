export class Login {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
      }
     // The test should check the presence of the header on the site, whether it is visible, whether it contains Login content.  
    validateLoginTitle() {
        cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible");
        cy.get(".next-10stgr7 > .next-c1vj7d").should("have.text", "Login");
      }
      // The test should check if there is a field for entering email and if this field is visible on the page.
      // The test should check if there is a field for entering a password and if this field is visible on the page.
    validateInputs()   {
        cy.get("#user_email").should("be.visible");
        cy.get("#user_password").should("be.visible");
      }
      // The test should check the presence of the button with the content Log in and whether it is visible on the screen.
    validateButton() {
        cy.get(".eckniwg2").should("be.visible");
      }
        // Find the input with email and enter email
        // Find the input with the password and enter the password
        // Log in
    uzerAutoization() {
            cy.logIn("user888@gmail.com", "1234567890");
      }
      //  The test should check the presence of the phrase "I can't remember the password" on the page
      //  and whether it is visible on the screen
    validatePasswordLink() {
        cy.get(".next-1f1fv1i").should("be.visible");
        cy.get(".next-1f1fv1i").should("have.text", "I can't remember the password");
    }
}