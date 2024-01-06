describe("Test 1 Page object example", () => {
    it("login page test", () => {
      cy.visit("https://www.edu.goit.global/account/login");
  // Тест має перевіряти наявність заголовка на сайті, чи він видимий, чи є в ньому контент Login.
      cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible");
      cy.get(".next-10stgr7 > .next-c1vj7d").should("have.text", "Login");
  // Тест має перевіряти наявність поля для введення пошти і чи це поле видиме на сторінці.
      cy.get("#user_email").should("be.visible");
  // Тест має перевіряти наявність поля для введення пароля і чи є це поле видиме на сторінці.
      cy.get("#user_password").should("be.visible");
  // Тест має перевіряти наявність кнопки з контентом Log in і чи видима вона на екрані.
      cy.get(".eckniwg2").should("be.visible");
  //  Тест має перевірити наявність на сторінці фрази  I can't remember the password
  //  і чи видима вона на екрані
      cy.get(".next-1f1fv1i").should("be.visible");
      cy.get(".next-1f1fv1i").should("have.text", "I can't remember the password");
    });
  });
  
  import { Login } from "../e2e/pages/Login";
  const LoginPage = new Login();
  describe("Test 2 Page object example", () => {
     it("login page test", () => {
          //Тест має відвідувати сторінку https://www.edu.goit.global/account/login.
        LoginPage.navigate();
          // Тест має перевіряти наявність заголовка на сайті, чи він видимий, чи є в ньому контент Login.  
        LoginPage.validateLoginTitle();
          // Тест має перевіряти наявність поля для введення пошти і чи це поле видиме на сторінці.
          // Тест має перевіряти наявність поля для введення пароля і чи є це поле видиме на сторінці.
        LoginPage.validateInputs();
          // Тест має перевіряти наявність кнопки з контентом Log in і чи видима вона на екрані. 
        LoginPage.validateButton();
          //  Тест має перевірити наявність на сторінці фрази  I can't remember the password
          //  і чи видима вона на екрані
        LoginPage.validatePasswordLink();   
     });
  });