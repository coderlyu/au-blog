export default {
  presets: [],
  plugins: [
    [
      "./plugin-test.js",
      {
        myNameIs: "Babel Plugin",
      },
    ],
  ],
};
