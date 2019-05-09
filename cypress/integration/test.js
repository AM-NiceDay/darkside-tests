// Cypress.on("fail", (error, runnable) => {
//   console.log(runnable);
// });

localStorage.debug = "cypress:*";

describe("1", () => {
  it("__1.1__", () => {
    cy.visit("/");
  });

  it("__1.2__", () => {
    cy.visit("/")
      .getByTestId("todo-form-input", { timeout: 100 })
      .getByTestId("todo-form-submit", { timeout: 100 });
  });

  it("__1.3__", () => {
    cy.visit("/")
      .getByTestId("todo-form-input", { timeout: 100 })
      .type("Test")
      .getByTestId("todo-form-submit", { timeout: 100 })
      .click()
      .getByTestId("todo-form-input", { timeout: 100 })
      .type("Test2")
      .getByTestId("todo-form-submit", { timeout: 100 })
      .click()
      .get("[data-test=todo-text]")
      .should(todos => {
        expect(todos[0]).to.have.text("Test");
        expect(todos[1]).to.have.text("Test2");
      });
  });
});
