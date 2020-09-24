## Automated Accessibility Testing

A demonstration of automated accessibilty testing with [cypress] and [axe] using [cypress-axe].

This repo contains two branches:
`before-a11y-fixes` - (default) includes accessibility errors to demonstrate test feedback
`after-a11y-fixes` - includes fixes for the above accessibility errors

## Usage

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

Open a new terminal and run the tests:

```
npm test
```

[cypress]: https://www.cypress.io/
[axe]: https://www.deque.com/axe/
[cypress-axe]: https://www.npmjs.com/package/cypress-axe
