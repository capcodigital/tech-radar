import { categoryList } from "../../src/data/data";

describe("Category Page", () => {
  beforeEach(() => {
    cy.visit("/category/devops");
  });

  categoryList.slice(0, 6).forEach((label: string) => {
    return it(`should click ${label} button and check that user is redirected to the correct category page`, () => {
      cy.contains("a", label).click({ force: true });
      cy.location().should((location) => {
        expect(location.pathname).to.eq(`/category/${label.toLowerCase()}`);
      });
    });
  });

  it("should click into GitHub and check that user is redirected to GitHub content page", () => {
    cy.contains("a", "GitHub").click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/technology/devops/github");
    });
  });

  it("should hover GitHub on radar and check that GitHub highlights in the list", () => {
    cy.get('[aria-label="GitHub"]').trigger("mouseover");
    cy.contains("a", "GitHub")
      .parent()
      .should("have.class", "technology hovered");
  });
});
