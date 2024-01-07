describe("Test 1 Page object example", () => {
    it("login page test", () => {
      cy.visit("https://www.edu.goit.global/account/login");
  // The test should check the presence of the header on the site, whether it is visible, whether it contains Login content.
      cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible");
      cy.get(".next-10stgr7 > .next-c1vj7d").should("have.text", "Login");
  // The test should check if there is a field for entering mail and if this field is visible on the page.
      cy.get("#user_email").should("be.visible");
  // The test should check if there is a field for entering a password and if this field is visible on the page.
      cy.get("#user_password").should("be.visible");
  // The test should check the presence of the button with the content Log in and whether it is visible on the screen.
      cy.get(".eckniwg2").should("be.visible");
  //  The test should check the presence of the phrase "I can't remember the password" on the page
  // and whether it is visible on the screen
      cy.get(".next-1f1fv1i").should("be.visible");
      cy.get(".next-1f1fv1i").should("have.text", "I can't remember the password");
    });
  });
  
  import { Login } from "../e2e/pages/Login";
  const LoginPage = new Login();
  describe("Test 2 Page object example", () => {
     it("login page test", () => {
          //The test must visit https://www.edu.goit.global/account/login.
        LoginPage.navigate();
          // The test should check the presence of the header on the site, whether it is visible, whether it contains Login content. 
        LoginPage.validateLoginTitle();
          // The test should check if there is a field for entering mail and if this field is visible on the page.
          // The test should check if there is a field for entering a password and if this field is visible on the page.
        LoginPage.validateInputs();
          // The test should check the presence of the button with the content Log in and whether it is visible on the screen. 
        LoginPage.validateButton();
          //  The test should check the presence of the phrase "I can't remember the password" on the page
          // and whether it is visible on the screen
        LoginPage.validatePasswordLink();   
     });
  });