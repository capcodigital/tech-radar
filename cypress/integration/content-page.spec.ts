describe("Content Page", () => {
  beforeEach(() => {
    cy.visit("/technology/devops/github");
  });

  it("should click the back link and check that user is redirected to DevOps category page", () => {
    cy.contains("a", "Back to DevOps").click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/devops");
    });
  });

  it("should click Previous technology and check that GitHub isn't displayed in the title and url", () => {
    cy.get('[data-test-id="Previous"]').click();
    cy.get(".technology-github").should("not.exist");
    cy.location().should((location) => {
      expect(location.pathname).to.not.eq("/technology/devops/github");
    });
  });
});
