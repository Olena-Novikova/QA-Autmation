describe('Our first block of tests', () => {
    it("scrollIntoView test", () => {
        cy.visit("https://www.edu.goit.global/account/login");

    cy.get('#user_email').type("user888@gmail.com");

    cy.get("#user_password").type("1234567890");

    cy.get("[type='submit']").click();

    cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
 });
  })