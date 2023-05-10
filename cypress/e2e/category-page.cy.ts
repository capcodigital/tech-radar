// import { categoryList } from "../../src/data/data";

// describe("Category Page", () => {
//   beforeEach(() => {
//     cy.visit("/category/frontend");
//   });

//   categoryList.forEach((label: string) => {
//     return (
//       label != "Frontend" &&
//       it(`should click ${label} button and check that user is redirected to the correct category page`, () => {
//         cy.contains("a", label).click({ force: true });
//         cy.location().should((location) => {
//           expect(location.pathname).to.eq(
//             `/category/${label.replace(/\s/g, "-").toLowerCase()}`
//           );
//         });
//       })
//     );
//   });

//   it("should click into React and check that user is redirected to React content page", () => {
//     cy.contains("a", "React").click({ force: true });
//     cy.location().should((location) => {
//       expect(location.pathname).to.eq("/technology/frontend/react");
//     });
//   });

//   it("should hover React on radar and check that React highlights in the list", () => {
//     cy.get('[aria-label="React"]').trigger("mouseover");
//     cy.contains("a", "React").parent().should("have.class", "hovered");
//   });
// });
