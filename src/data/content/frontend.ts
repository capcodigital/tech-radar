const techContent = [
  {
    technology: "React",
    docsLink: "https://reactjs.org/",
    intro:
      '<a href="https://reactjs.org">React</a> is the world’s most popular JavaScript library that uses components to change content of a single-page Mobile and Web application without refreshing.',
    content: [
      {
        name: "State Management",
        intro:
          "Managing states is one of the biggest challenges in large web applications. Using React alone may not be sufficient to handle such complexity. We need a way to share data across components by creating a central store that holds all states of your application.",
        data: [
          {
            name: "Redux",
            description:
              '<a href="https://redux.js.org/">Redux</a> provides a central store for states that each component can access. Main building parts: store, actions, reducers and optional middleware.',
          },
          {
            name: "ContextAPI",
            description:
              '<a href="https://reactjs.org/docs/context.html" >Context</a> provides a way to pass data through the component tree without having to pass props down manually at every level and helps to avoid the prop-drilling problem. It has 3 main building parts: context, provider and consumer.',
          },
        ],
      },
      {
        name: "UI Libraries",
        intro: "",
        data: [
          {
            name: "MaterialUI",
            description:
              '<a href="https://material-ui.com/">Google’s Material Design</a> is a popular React UI library with responsive animations and it has been adopted by the wider design community.',
          },
          {
            name: "SemanticUI",
            description:
              '<a href="https://react.semantic-ui.com/">SemanticUI</a> contains pre-built semantic components that helps create responsive layouts.',
          },
          {
            name: "Ant Design of React",
            description:
              '<a href="https://ant.design/docs/react/introduce">Ant Design of React</a> contains a set of high-quality components and demos for building rich, interactive user interfaces.',
          },
        ],
      },
      {
        name: "Styling",
        intro:
          "The point of building a frontend User Interface with React is how flexible it can be, especially when it comes to building separate components. It is important to know that whatever styling strategy you may decide to use, you are still writing CSS. The difference is that the strategies together with the library make the process easier because of the uniqueness of React.",
        data: [
          {
            name: "CSS and SASS",
            description:
              'This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called <a href="https://sass-lang.com/">SASS</a>.',
          },
          {
            name: "BEM - Block Element Modifier",
            description:
              "It's a CSS naming convention for writing cleaner and more readable CSS classes. <a href='http://getbem.com/'>BEM</a> aims to write independent CSS blocks increasing reusability.",
          },
          {
            name: "CSS Modules",
            description:
              "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With this, your CSS class names become similar to local variables in JavaScript. It goes into the compiler, and CSS comes out the other side.",
          },
          {
            name: "Styled Components",
            description:
              '<a href="https://styled-components.com/">styled-components</a> is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.',
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. ",
        data: [
          {
            name: "Jest",
            description:
              '<a href="https://jestjs.io/">Jest</a> is an open-source testing framework. It comes with built-in mocking and assertion libraries, which also runs your tests concurrently in parallel, providing faster test execution.',
          },
          {
            name: "Enzyme",
            description:
              '<a href="https://enzymejs.github.io/enzyme/">Enzyme</a> is an open-source JavaScript testing utility by Airbnb and needs a testing library to provide a foundation for the tests it generates. Using Jest and Enzyme together results in cleaner testing code that’s also easier to debug when a test breaks. Jest as a test runner and assertion library, then use Enzyme to build the tests for their UI. ',
          },
          {
            name: "React Testing Library",
            description:
              'The <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a> is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. ',
          },
          {
            name: "Cypress",
            description:
              "<a href='https://www.cypress.io/'>Cypress</a> is a JavaScript based end-to-end testing framework that doesn't use Selenium at all. It is built on top of Mocha, which is a feature-rich JavaScript test framework, making asynchronous testing simple. Cypress also uses a BDD/TDD assertion library and a browser that can be paired with any JavaScript testing framework.",
          },
        ],
      },
    ],
    examples: [
      {
        name: "Digital Engineering Framework",
        imageUrl:
          "https://general-gif-bucket.s3.eu-west-2.amazonaws.com/demo.gif",
        description:
          'A React, TypeScript web application that provides a more readable format of our Engineering Competency Framework to help explain performance expectations. Unit tests are written in Jest and React Testing Library, E2E tests are written in Cypress and are automated via <a href="https://github.com/features/actions">GitHub Actions</a>.',
      },
    ],
    reference: ["https://reactjs.org/", "https://redux.js.org/"],
  },
  {
    technology: "Angular",
    docsLink: "https://angular.io/docs",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Flutter",
    docsLink: "https://flutter.dev/docs",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Vue",
    docsLink: "https://vuejs.org/v2/guide/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "TypeScript",
    docsLink: "https://www.typescriptlang.org/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
];
export default techContent;
