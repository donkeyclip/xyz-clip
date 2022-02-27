const count = 6;
export default [
  {
    name: "Default",
    value: {
      width: 100 / count + "%",
      height: 100 / count + "%",
      totalBoxes: Array(count * count).fill(""),
    },
  },
];
