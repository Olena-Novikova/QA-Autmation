describe("e2eTestHomework", () => {
     it("Тест 1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        // Знаходимо інпут з поштою та вводимо email
        // Знаходимо інпут з паролем та вводимо пароль
        // Здійснюємо логінізацію
        cy.logIn("user888@gmail.com", "1234567890");
        // Знаходимо в правому верхньому кутку кнопку
        cy.get(`[data-element-type="burger-menu"]`).click();
        // Відкриваєио меню сайту
        // В меню знаходим кнопку Log out
        // Натискаєм на неї та повертаємся на сторінку логіна
        cy.get(`:nth-child(11) > .next-bve2vl`).click();
        cy.visit("https://www.edu.goit.global/account/login");
     });
     it("Тест 2", () => {
      cy.visit("https://www.edu.goit.global/account/login");
          // Знаходимо інпут з поштою та вводимо email
          // Знаходимо інпут з паролем та вводимо пароль
          // Здійснюємо логінізацію
          cy.logIn("testowyqa@qa.team", "QA!automation-1");
          // Знаходимо в правому верхньому кутку кнопку
          cy.get(`[data-element-type="burger-menu"]`).click();
          // Відкриваєио меню сайту
          // В меню знаходим кнопку Log out
          // Натискаєм на неї та повертаємся на сторінку логіна
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
            // Знаходимо інпут з поштою та вводимо email
            // Знаходимо інпут з паролем та вводимо пароль
            // Здійснюємо логінізацію
         LoginPage.uzerAutoization("user888@gmail.com", "1234567890");
            // Знаходимо в правому верхньому кутку кнопку
         Home.validateBugerMenu ();
            // Відкриваєио меню сайту
            // В меню знаходим кнопку Log out
            // Натискаєм на неї та повертаємся на сторінку логіна
         Home.validateLogOut ();
         LoginPage.navigate();
         });
     it("Тест 4", () => {
         LoginPage.navigate();
              // Знаходимо інпут з поштою та вводимо email
              // Знаходимо інпут з паролем та вводимо пароль
              // Здійснюємо логінізацію
         LoginPage.uzerAutoization("testowyqa@qa.team", "QA!automation-1");
              // Знаходимо в правому верхньому кутку кнопку
         Home.validateBugerMenu ();
              // Відкриваєио меню сайту
              // В меню знаходим кнопку Log out
              // Натискаєм на неї та повертаємся на сторінку логіна
         Home.validateLogOut ();
         LoginPage.navigate();
         });
        }) 