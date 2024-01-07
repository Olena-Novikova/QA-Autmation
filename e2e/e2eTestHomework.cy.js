describe("e2eTestHomework", () => {
     it("Тест 1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        // We find the input with mail and enter email
        // Find an input with a password and enter the password
        // Login
        cy.logIn("user888@gmail.com", "1234567890");
        // Find the button in the upper right corner
        cy.get(`[data-element-type="burger-menu"]`).click();
        // Opens the site menu
        // Find the Log out button in the menu
        // Click on it and return to the login page
        cy.get(`:nth-child(11) > .next-bve2vl`).click();
        cy.visit("https://www.edu.goit.global/account/login");
     });
     it("Тест 2", () => {
      cy.visit("https://www.edu.goit.global/account/login");
          // We find the input with mail and enter email
          // Find an input with a password and enter the password
          // Login
          cy.logIn("testowyqa@qa.team", "QA!automation-1");
          // Find the button in the upper right corner
          cy.get(`[data-element-type="burger-menu"]`).click();
          // Opens the site menu
          // Find the Log out button in the menu
          // Click on it and return to the login page
          cy.get(`:nth-child(9) > .next-bve2vl`).click();
          cy.visit("https://www.edu.goit.global/account/login");
    });
 });
            import { Login } from "../e2e/pages/Login";
            const LoginPage = new Login ();

            import { HomePage} from "../e2e/pages/HomePage";
            const Home = new HomePage ();

describe("PageObjectExample", () => {
     it("Тест 3", () => {
         LoginPage.navigate();
            // We find the input with mail and enter email
            // Find an input with a password and enter the password
            // Login
         LoginPage.uzerAutoization("user888@gmail.com", "1234567890");
            // Find the button in the upper right corner
         Home.validateBugerMenu ();
            // Opens the site menu
            // Find the Log out button in the menu
            // Click on it and return to the login page
         Home.validateLogOut ();
         LoginPage.navigate();
         });
     it("Тест 4", () => {
         LoginPage.navigate();
              // We find the input with mail and enter email
              // Find an input with a password and enter the password
              // Login
         LoginPage.uzerAutoization("testowyqa@qa.team", "QA!automation-1");
              // Find the button in the upper right corner
         Home.validateBugerMenu ();
              // Opens the site menu
              // Find the Log out button in the menu
              // Click on it and return to the login page
         Home.validateLogOut ();
         LoginPage.navigate();
         });
        }) 