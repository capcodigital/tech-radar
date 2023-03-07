import {
  categoryPaths,
  previousTechInCategory,
  categoryList,
} from "../../src/data/data";

describe("Content Page", () => {
  for (let i = 0; i < categoryPaths.length; i++) {
    it(`should click the back link and check that user is redirected to ${categoryList[i]} category page`, () => {
      cy.visit(`/technology/${categoryPaths[i]}/${previousTechInCategory[i]}`);
      cy.contains("a", `Back to ${categoryList[i]}`).click({ force: true });
      cy.location().should((location) => {
        expect(location.pathname).to.eq(`/category/${categoryPaths[i]}`);
      });
    });

    it(`should click Previous technology and check that ${previousTechInCategory[i]} isn't displayed in the title and url`, () => {
      cy.visit(`/technology/${categoryPaths[i]}/${previousTechInCategory[i]}`);
      cy.get('[data-test-id="Previous"]').click();
      cy.get(`.technology-${previousTechInCategory[i]}`).should("not.exist");
      cy.location().should((location) => {
        expect(location.pathname).to.not.eq(
          `/technology/${categoryPaths[i]}/${previousTechInCategory[i]}`
        );
      });
    });
  }
});
