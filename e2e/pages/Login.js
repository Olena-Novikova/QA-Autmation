export class Login {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
      }
     // Тест має перевіряти наявність заголовка на сайті, чи він видимий, чи є в ньому контент Login.  
    validateLoginTitle() {
        cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible");
        cy.get(".next-10stgr7 > .next-c1vj7d").should("have.text", "Login");
      }
      // Тест має перевіряти наявність поля для введення пошти і чи це поле видиме на сторінці.
      // Тест має перевіряти наявність поля для введення пароля і чи є це поле видиме на сторінці.
    validateInputs()   {
        cy.get("#user_email").should("be.visible");
        cy.get("#user_password").should("be.visible");
      }
      // Тест має перевіряти наявність кнопки з контентом Log in і чи видима вона на екрані. 
    validateButton() {
        cy.get(".eckniwg2").should("be.visible");
      }
        // Знаходимо інпут з поштою та вводимо email
        // Знаходимо інпут з паролем та вводимо пароль
        // Здійснюємо логінізацію
    uzerAutoization() {
            cy.logIn("user888@gmail.com", "1234567890");
      }
      //  Тест має перевірити наявність на сторінці фрази  I can't remember the password
      //  і чи видима вона на екрані
    validatePasswordLink() {
        cy.get(".next-1f1fv1i").should("be.visible");
        cy.get(".next-1f1fv1i").should("have.text", "I can't remember the password");
    }
}