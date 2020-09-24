const executeRun = require('./helpers/executeRun');
const formatErrors = require('./helpers/format-a11y-errors');

expect.extend({
  toBeAccessible(url, violations) {
    const pass = violations.length === 0;
    const errors = formatErrors(url, violations);
    const message = () => errors;
    return { pass, message }
  },
});

it('home page is accessible', async () => {
  const url = 'http://localhost:8080/';
  const flags = { onlyCategories: ['accessibility'] };
  const result = await executeRun(url, flags);
  const { violations } = result.artifacts.Accessibility;
  expect(url).toBeAccessible(violations);
});
