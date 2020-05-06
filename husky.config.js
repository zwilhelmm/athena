module.exports = {
  hooks: {
    "pre-commit": "npm run prettier && npm run test",
    "pre-push": "npm run prettier && npm run test",
  },
};
