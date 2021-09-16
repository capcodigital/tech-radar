const techContent = [
  {
    technology: "React Native",
    docsLink: "https://reactnative.dev/docs/getting-started",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Swift",
    docsLink: "https://swift.org/documentation/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Kotlin",
    docsLink: "https://kotlinlang.org/docs/home.html",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Java",
    docsLink: "https://docs.oracle.com/en/java/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "Ionic",
    docsLink: "https://ionicframework.com/docs",
    intro:
      "<a href='https://ionicframework.com/docs'>Ionic</a> is an open-source SDK primarily used for hybrid mobile app development. With its initial release in 2013, which was built on top of AngularJS and Cordova. It has since evolved to provide tools and services that allow developers to build desktop and progressive web applications in conjunction with mobile platforms. It's easy to learn, and integrates with other libraries and frameworks, such as Angular, React, or Vue. Alternatively, it can be used standalone without any frontend framework using a simple script include. ",
    content: [
      {
        name: "State Management",
        intro: "",
        data: [
          {
            name: "When using Angular",
            description:
              "NgRX and NGXS are the most commonly used state management libraries when developing Ionic applications with Angular. Both are modelled on redux, and so work similar when managing state in that they both involve doing the standard steps of defining, dispatching and handling of the state. ",
          },
          {
            name: "When using React ",
            description:
              "React Redux and MobX are the most commonly used state management libraries with developing Ionic applications with React. Others include Recoil and Zustand. React Redux is the original Redux state management library for React and works by providing a core store that all component can access with the given permission. MobX works in a similar way, but has the added benefit of trying to reduce the boilerplate code that comes from defining a Redux store. ",
          },
        ],
      },
      {
        name: "Data Storage",
        intro: "",
        data: [
          {
            name: "Ionic Secure Storage ",
            description:
              "Ionic Secure Storage is the official storage solution developed by the Ionic team. It’s originally based on SQLite with encryption built in. Its benefits include query support, browser availability and high-performance that makes it ideal for applications with high volumes of traffic. Since it’s an officially supported product by Ionic, it’s likely that it will continue to receive long term support into the foreseeable future. ",
          },
          {
            name: "IndexedDB",
            description:
              "IndexedDB is a storage engine natively supported in browsers. It allows for query support and is also free to use. However, there is no support for encryption and there is also a limited storage capacity. ",
          },
          {
            name: "Ionic Storage",
            description:
              "Ionic Storage is an open-source utility with a simple storage solution centred around key/value API. It offers cross-platform support and allows for encryption when used with the Ionic Secure Storage driver. However, it offers no query support nor does it offer any relational data support. ",
          },
        ],
      },
      {
        name: "Animations",
        intro:
          "Ionic Animations is a utility that allows developers to build complex animations in a platform agnostic manner. Developers do not need to be using a particular framework such as React or Angular. If developers have access to v5.0 or greater of Ionic Framework, they will have access to all Ionic Animations.  ",
        data: [
          // {
          //   name: "",
          //   description:
          //     '<img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" />',
          // },
        ],
      },
      {
        name: "Testing",
        intro:
          "Testing is supported on React and Angular. When an ionic/angular application is generated using the Ionic CLI, it is automatically set up for unit testing and end-to-end testing of the application. There are four ways to test your app as you develop: ",
        data: [
          {
            name: "Desktop Browser Testing",
            description:
              "Run the command <code>ionic serve</code> in the root terminal - This will start a live-reload server for your project. When changes are made to any HTML, CSS, or JavaScript files, the browser will automatically reload when the files are saved.",
          },
          {
            name: "Simulator Testing ",
            description:
              "Test in the simulator using the Cordova commands <code>ionic cordova build ios</code> followed by <code>ionic cordova emulate ios</code>. To test android then replace ‘iOS’ with android.  Once changes have been made to the folder, run command <code>ionic cordova prepare ios</code>, which will update the ios specific project with the code from the www folder.  ",
          },
          {
            name: "Mobile browser testing",
            description:
              "Testing and debugging directly in mobile browser, for iOS users through web inspector in Safari, and for android through chrome dev tools. One caveat of mobile browser testing is that it you may not get the truest app experience. Mobile apps are meant for browsing not testing, and sometimes when testing it then adds functionality that conflicts with the app.",
          },
          {
            name: "Native App",
            description:
              "To test as a native app. For iOS apps, to test via dev tools such as Xcode there is a premium charge. For android apps, you can run the tests using the Cordova command <code>ionic cordova run android</code> .",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://ionicframework.com/docs"],
  },
  {
    technology: "Flutter",
    docsLink: "https://flutter.dev/docs",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
];
export default techContent;
