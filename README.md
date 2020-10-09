# An example of UI library with @nuxt/content-based living styleguide 

## In this repository:

- `lib` directory contains two Vue components that are:
     - written in TypeScript 
     - shipped as sources
     - rely on the presence of `nuxt-i18n` in the application consuming those components
- `docs` directory is a TypeScript `@nuxt/content` project used to preview components from `lib` using the `*.md` files from `markdown` directory

## To run the example:
```
cd docs && yarn && yarn dev
```

## To reproduce the problem:

Once application has started, visit:

- [https://localhost:3000/StyleButton/StyleButton](https://localhost:3000/StyleButton/StyleButton) - this would be rendered as expected, proving that components get registered
- [https://localhost:3000/ControlPanel/ControlPanel](https://localhost:3000/ControlPanel/ControlPanel) - here the preview will not be rendered due to the absence of `$t` method on the Vue instance
