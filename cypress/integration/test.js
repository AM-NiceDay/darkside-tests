describe("Test", () => {
  it("is live", () => {
    cy.visit("/");
  });

  it("able to create new todos", () => {
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
