import { ImageAspectRatioOutlined } from '@material-ui/icons';

export type TechContentType = {
  technology: string;
  intro: string;
  content: Array<{
    name: string;
    intro: string;
    data: Array<{ name: string; description: string }>;
  }>;
  examples: Array<{ name: string; description: string }>;
};

export default [
  {
    technology: 'React',
    intro:
      'React is the world’s most popular JavaScript library that uses components to change content of a single-page Mobile and Web application without refreshing.',
    content: [
      {
        name: 'State Management',
        intro:
          'Managing states is one of the biggest challenges in large web applications. Using React alone may not be sufficient to handle such complexity. We need a way to share data across components by creating a central store that holds all states of your application.',
        data: [
          {
            name: 'Redux',
            description:
              'Redux provides a central store for states that each component can access.  Main building parts: store, actions, reducers and optional middleware.',
          },
          {
            name: 'ContextAPI',
            description:
              'Context provides a way to pass data through the component tree without having to pass props down manually at every level and helps to avoid the prop-drilling problem. 3 main building parts: context, provider and consumer.',
          },
        ],
      },
      {
        name: 'UI Libraries',
        intro: '',
        data: [
          {
            name: 'MaterialUI',
            description:
              'Google’s Material Design is a popular React UI library with responsive animations and it has been adopted by the wider design community.',
          },
          {
            name: 'SemanticUI',
            description:
              'It contains pre-built semantic components that helps create responsive layouts.',
          },
          {
            name: 'Ant Design of React',
            description:
              'Contains a set of high-quality components and demos for building rich, interactive user interfaces.',
          },
        ],
      },
      {
        name: 'Styling',
        intro: '',
        data: [
          {
            name: 'CSS and SASS',
            description:
              'This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called SASS.',
          },
          {
            name: 'BEM - Block Element Modifier',
            description:
              "BEM It's a CSS naming convention for writing cleaner and more readable CSS classes. BEM aims to write independent CSS blocks increasing reusability.",
          },
          {
            name: 'Styled Components',
            description:
              'styled-components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.',
          },
        ],
      },
    ],
    examples: [
      {
        name: 'Digital Engineering Framework App',
        description: '',
      },
      {
        name: 'UK Challenge App',
        description: '',
      },
    ],
  },
];
