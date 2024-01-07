export class HomePage {

 // Find the button in the upper right corner
validateBugerMenu () {
    cy.get(`[data-element-type="burger-menu"]`).click();
 }
 // Opens the site menu
 // In the menu we find the "Log out" button
 // Click on it and return to the login page

 validateLogOut () {
    cy.get(`:nth-child(11) > .next-bve2vl`).click();
 }
}