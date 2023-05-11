import { technologyList, data, technologies } from "../../src/data/data";
import { getNextItem, getPrevItem } from "../../src/helpers/helpers";
// import { techContent } from "../../src/data/content";

const segmentClass = [
  ".DevOps-segment",
  ".Data.Engineering-segment",
  ".Quality.Engineering-segment",
  ".Cloud.Platforms-segment",
  ".Integration-segment",
  ".Backend-segment",
  ".Frontend-segment",
  ".Mobile-segment",
];

const techData = data.map((item: any) => item.name);
// cy.log("cy.log(techData)", techData);

describe("End to end", () => {
  // it("should highlight each segment when mouse is hovered", () => {
  //   cy.visit("/home");
  //   segmentClass.forEach((segment: string) => {
  //     return (
  //       cy
  //         .get(segment)
  //         .trigger("mouseover")
  //         .should("have.css", "fill", "rgba(235, 35, 109, 0.3)")
  //         .and("not.have.css", "fill", "transparent"),
  //       cy.wait(2000)
  //     );
  //   });
  // });

  // it("should hover over each icon and check that icon pop up appears and displays technology text", () => {
  //   technologyList.forEach((label: string) => {
  //     return (
  //       cy.visit("/home"),
  //       cy.get(`[aria-label="${label}"]`).eq(0).trigger("mouseover"),
  //       label === "Flutter" &&
  //         cy.get(`[aria-label="${label}"]`).eq(1).trigger("mouseover"),
  //       cy.wait(2000),
  //       cy.log("label", label),
  //       cy
  //         .get(".MuiTooltip-popper")
  //         .should("be.visible")
  //         .and(
  //           "have.text",
  //           label !== "Flutter" ? `${label}` : `${label}${label}`
  //         )
  //         .and("not.have.text", getPrevItem(label))
  //     );
  //   });
  // });

  it("should click into each technology within the Dev Ops segment", () => {
    // cy.log("cy.log(techData)", techData);
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".DevOps-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".DevOps-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/devops");
      expect(location.pathname).to.not.eq("/category/data-engineering");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "DevOps") {
        cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/devops");
          cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/devops/${item.toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/devops/${item.toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
          // cy.contains("a", "View Projects").click({ force: true });
          // cy.location().should((location) => {
          //   expect(location.pathname).to.eq(
          //     `/projects/devops/${item.toLowerCase()}`
          //   );
          // });
          // cy.wait(2000);
        });
      }
    });
  });

  // it("should click into Dev Ops segment and check that Dev Ops category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".DevOps-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".DevOps-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/devops");
  //     expect(location.pathname).to.not.eq("/category/data-engineering");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "CircleCI").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "CircleCI is a continuous integration and delivery platform that automates the build"
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/devops/circleci");
  //     expect(location.pathname).to.not.eq("/technology/devops/docker");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/devops/circleci");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/devops/circleci");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/devops");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Docker").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/devops/docker");
  //     expect(location.pathname).to.not.eq("/technology/devops/jenkins");
  //   });
  //   cy.wait(3000);
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers."
  //   );
  //   cy.wait(3000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  //   cy.wait(2000);
  // });

  // it("should click into Data Engineering segment and check that Data Engineering category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Data.Engineering-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Data.Engineering-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/data-engineering");
  //     expect(location.pathname).to.not.eq("/category/quality-engineering");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "MongoDB").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "MongoDB is an open-source document-based database built on a horizontal scale-out architecture."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/data-engineering/mongodb");
  //     expect(location.pathname).to.not.eq(
  //       "/technology/data-engineering/oracle"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/data-engineering/mongodb");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/data-engineering/mongodb");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/data-engineering");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "MySQL").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Created in 1995, MySQL is the most popular open-source relational database management system."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/data-engineering/mysql");
  //     expect(location.pathname).to.not.eq(
  //       "//technology/data-engineering/mongodb"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  //   cy.wait(2000);
  // });

  // it("should click into Quality Engineering segment and check that Quality Engineering category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Quality.Engineering-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Quality.Engineering-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/quality-engineering");
  //     expect(location.pathname).to.not.eq("/category/cloud-&-platforms");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Cypress").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Cypress is the front-end testing tool built for the modern web."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq(
  //       "/technology/quality-engineering/cypress"
  //     );
  //     expect(location.pathname).to.not.eq(
  //       "/technology/quality-engineering/selenium"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/quality-engineering/cypress");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq(
  //       "/technology/quality-engineering/cypress"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/quality-engineering");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Cucumber").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Cucumber is an open-source tool written in Ruby language and developed to support Behaviour-Driven Development (BDD) software development process."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq(
  //       "/technology/quality-engineering/cucumber"
  //     );
  //     expect(location.pathname).to.not.eq(
  //       "/technology/quality-engineering/gatling"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  //   cy.wait(2000);
  // });

  // it("should click into Cloud & Platforms segment and check that Cloud & Platformscategory page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Cloud.Platforms-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Cloud.Platforms-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/cloud-&-platforms");
  //     expect(location.pathname).to.not.eq("/category/integration");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "GCP").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Google Cloud Platform, as the name implies, is a cloud computing platform that provides infrastructure tools and services for users to build applications and services on top of."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/cloud-&-platforms/gcp");
  //     expect(location.pathname).to.not.eq(
  //       "/technology/cloud-&-platforms/digital-ocean"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/cloud-&-platforms/gcp");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/cloud-&-platforms/gcp");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/cloud-&-platforms");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Azure").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Azure is Microsoft’s cloud computing platform offering many products and services across compute, storage, and networking."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/cloud-&-platforms/azure");
  //     expect(location.pathname).to.not.eq(
  //       "/technology/cloud-&-platforms/kubernetes"
  //     );
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  //   cy.wait(2000);
  // });

  // it("should click into Integration segment and check that Integration category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Integration-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Integration-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/integration");
  //     expect(location.pathname).to.not.eq("/category/backend");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Rest").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "REST (Representational State Transfer) is a software architectural style that defines a set of constraints to be used for creating web services."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/integration/rest");
  //     expect(location.pathname).to.not.eq("/technology/integration/graphql");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/integration/rest");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/integration/rest");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/integration");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "OpenAPI").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "The OpenAPI Specification (OAS) defines a standard and programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/integration/openapi");
  //     expect(location.pathname).to.not.eq("/technology/integration/camel");
  //   });
  //   cy.wait(2000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  // });

  // it("should click into Backend segment and check that Backend category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Backend-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Backend-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/backend");
  //     expect(location.pathname).to.not.eq("/category/frontend");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Java").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Java is a general purpose, high-level, class-based programming language that was built from the ground up to be object-oriented."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/backend/java");
  //     expect(location.pathname).to.not.eq("/technology/backend/groovy");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/backend/java");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/backend/java");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/backend");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Python").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Python - is a rapidly developing scripting language which is used for solving a myriad of multifaceted challenges and tasks."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/backend/python");
  //     expect(location.pathname).to.not.eq("/technology/backend/scala");
  //   });
  //   cy.wait(2000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  // });

  // it("should click into Frontend segment and check that Frontend category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Frontend-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Frontend-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/frontend");
  //     expect(location.pathname).to.not.eq("/category/mobile");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Angular").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Angular is a highly popular web development framework that offers rich user experiences, fast responsiveness, and code maintainability."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/frontend/angular");
  //     expect(location.pathname).to.not.eq("/technology/frontend/vue");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/frontend/angular");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/frontend/angular");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/frontend");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "JavaScript").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "JavaScript is a scripting or programming language that allows you to implement complex features on web pages"
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/frontend/javascript");
  //     expect(location.pathname).to.not.eq("/technology/frontend/css");
  //   });
  //   cy.wait(2000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  // });

  // it("should click into Mobile segment and check that Mobile category page loads", () => {
  //   cy.viewport(1440, 900);
  //   cy.visit("/home");
  //   cy.get(".Mobile-segment").trigger("mouseover");
  //   cy.wait(3000);
  //   cy.get(".Mobile-segment").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/mobile");
  //     expect(location.pathname).to.not.eq("/category/devops");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Swift").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "Swift is a programming language released by Apple Inc. in 2014 and it was made open-source in 2015."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/mobile/swift");
  //     expect(location.pathname).to.not.eq("/technology/mobile/flutter");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "View Projects").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/projects/mobile/swift");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/mobile/swift");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "Back to ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/category/mobile");
  //   });
  //   cy.wait(3000);
  //   cy.contains("a", "React Native").click({ force: true });
  //   cy.get(".content-intro").should(
  //     "contain",
  //     "React Native was created in 2015 by Facebook and runs on the framework is a popular open-source library for building user interfaces with JavaScript."
  //   );
  //   cy.wait(3000);
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/technology/mobile/react-native");
  //     expect(location.pathname).to.not.eq("/technology/mobile/ionic");
  //   });
  //   cy.wait(2000);
  //   cy.contains("a", "TECH RADAR ").click({ force: true });
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/home");
  //   });
  // });
});

// PRE REFACTOR CODE
// it("should hover over MongoDB icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-MongoDB").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "MongoDB")
//     .and("not.have.text", "Oracle");
//   cy.wait(2000);
// });

// it("should hover over Cucumber icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-Cucumber").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "Cucumber")
//     .and("not.have.text", "Gatling");
//   cy.wait(2000);
// });

// it("should hover over Anthos icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-Anthos").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "Anthos")
//     .and("not.have.text", "Grafana");
//   cy.wait(2000);
// });

// it("should hover over Camel icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-Camel").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "Camel")
//     .and("not.have.text", "Rest");
//   cy.wait(2000);
// });

// it("should hover over Groovy icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-Groovy").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "Groovy")
//     .and("not.have.text", "Scala");
//   cy.wait(2000);
// });

// it("should hover over TypeScript icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-TypeScript").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "TypeScript")
//     .and("not.have.text", "React");
//   cy.wait(2000);
// });

// it("should hover over Swift icon and check that icon pop up appears and displays technology text", () => {
//   cy.visit("/home");
//   cy.get(".techIcon-Swift").trigger("mouseover");
//   cy.wait(2500);
//   cy.get(".MuiTooltip-popper")
//     .should("be.visible")
//     .and("have.text", "Swift")
//     .and("not.have.text", "Flutter");
//   cy.wait(2000);
// });
