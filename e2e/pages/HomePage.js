export class HomePage {

 // Знаходимо в правому верхньому кутку кнопку
validateBugerMenu () {
    cy.get(`[data-element-type="burger-menu"]`).click();
 }
 // Відкриваєио меню сайту
 // В меню знаходим кнопку Log out
 // Натискаєм на неї та повертаємся на сторінку логіна

 validateLogOut () {
    cy.get(`:nth-child(11) > .next-bve2vl`).click();
 }
}