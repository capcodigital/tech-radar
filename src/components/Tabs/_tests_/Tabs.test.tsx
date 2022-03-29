import * as React from "react";
import { render } from "@testing-library/react";
import Tabs from "../Tabs";
import { BrowserRouter as Router } from "react-router-dom";

// const mockValues = {
//   ossProjectCount: number;
//   clientProjectCount: number;
//   panelOne: React.ReactNode;
//   panelTwo: React.ReactNode;
// }

// describe("Tabs", () => {
//   it("should render Tabs component", () => {
//     const { container } = render(
//       <Router>
//         <Tabs
//           ossProjectCount={1}
//           clientProjectCount={1}
//           panelOne={}
//           panelTwo={}
//           />
//       </Router>
//     );
//     expect(container.firstChild).toMatchSnapshot();
//   });

//   it("should check text content of Tabs", () => {
//     const { container } = render(
//       <Router>
//         <Tabs
//         ossProjectCount={1}
//         clientProjectCount={1}
//         panelOne={}
//         panelTwo={}/>
//       </Router>
//     );

//     expect(container.firstChild).toHaveTextContent(
//       ``
//     );
//   });
// });
