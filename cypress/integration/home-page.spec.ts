import { radarKeysText, categoryList } from "../../src/data/data";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  categoryList.forEach((label: string) => {
    return it(`should check that radar has ${label} nav links`, () => {
      cy.contains("text", label).should("be.visible");
    });
  });

  it("should click into DevOps segment and check that DevOps category page loads", () => {
    cy.get(".DevOps-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/devops");
    });
  });

  it("should click DevOps nav link and check that DevOps category page loads", () => {
    cy.get(".DevOps").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/devops");
    });
  });

  it("should hover CircleCI and check that icon pop up appears and displays CircleCI text", () => {
    cy.get(".techIcon-CircleCI").trigger("mouseover");
    cy.get(".MuiTooltip-popper")
      .should("be.visible")
      .and("have.text", "CircleCI");
  });

  it("should hover radar Scaling key and check that info pop up appears with the correct text", () => {
    cy.contains("Scaling").trigger("mouseover");
    cy.get(".MuiTooltip-popper")
      .should("be.visible")
      .and("have.text", `Scaling${radarKeysText.scaling}`);
  });

  it("should open menu and check that all 8 categories are displayed with correct href links", () => {
    cy.get('[aria-label="menu"]').click();
    categoryList.forEach((label: string) =>
      cy
        .contains("a", label)
        .should("have.attr", "href")
        .and("include", `/${label.toLowerCase()}`)
    );
  });

  it("should open menu, click close and check that menu disappears", () => {
    cy.get('[aria-label="menu"]').click();
    cy.get('[aria-label="clear"]').click({ force: true });
    cy.get('[aria-label="menu"]').should("be.visible");
  });

  it("should open menu, click DevOps and check that DevOps category page loads", () => {
    cy.get('[aria-label="menu"]').click();
    cy.contains("a", "DevOps").click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/devops");
    });
  });
});
