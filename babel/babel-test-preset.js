export default function myPreset() {
  return {
    plugins: [
      [
        "./plugin-test.js",
        {
          myNameIs: "Babel Plugin",
        },
      ],
    ],
  };
}
