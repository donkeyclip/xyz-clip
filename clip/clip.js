import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import initParams from "./initParams";
import {
  songPlayback,
  randomIn,
  Flip,
  Flip2,
  FlipParent,
  riple,
  Zrandom,
  Yrandom,
  FlipParentBack,
  Y0,
  Z0,
  rXc0,
  rXYb0,
  rZc0,
  tZc0,
  rZc1,
  tZc1,
  rZb01,
} from "./incidents";
const initParamsValue = initParams[0].value;
const rows = initParamsValue.totalBoxes.length / 2;
const columns = rows;

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "450px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;600;700&display=swap`,
    },
  ],
  audioSources: [
    {
      src: "https://donkey-spaces.ams3.cdn.digitaloceanspaces.com/assets/wave-clip/sound.mp3",
      id: "my-mp3",
      classes: ["songs", "rock"],
      base64: false,
    },
  ],
  initParams: initParamsValue,
});

clip.addIncident(songPlayback, 0);

clip.addIncident(randomIn, 0);
clip.addIncident(Flip, 9300);
clip.addIncident(Flip2, 9800);
clip.addIncident(FlipParent, 10300);
clip.addIncident(
  riple(rows, columns, rows / 2, columns / 2, 0, 125, { opacity: 0 }, ".box"),
  11000
);
clip.addIncident(
  riple(rows, columns, rows / 2, columns / 2, 0, 125, { opacity: 1 }, ".box"),
  11250
);
clip.addIncident(Zrandom, 11750);
clip.addIncident(Yrandom, 12250);
clip.addIncident(FlipParentBack, 12300);
clip.addIncident(Y0, 12750);
clip.addIncident(Z0, 13250);
clip.addIncident(
  riple(
    rows,
    columns,
    rows / 2,
    1,
    0,
    300,
    {
      transform: {
        translateZ: "-40px",
      },
    },
    ".box"
  ),
  13750
);
clip.addIncident(rZc0, 14200);
clip.addIncident(tZc0, 14700);
clip.addIncident(rZc1, 15200);
clip.addIncident(tZc1, 15700);
clip.addIncident(rZb01, 16200);
clip.addIncident(
  riple(
    rows,
    columns,
    rows / 2,
    1,
    0,
    300,
    {
      transform: {
        rotateZ: "0deg",
      },
    },
    ".box"
  ),
  16700
);
clip.addIncident(rXc0, 17125);

clip.addIncident(
  riple(
    rows,
    columns,
    rows / 2,
    columns / 2,
    0,
    300,
    {
      transform: {
        translateZ: "0px",
        scale: 0.5,
      },
    },
    ".box"
  ),
  18000
);

clip.addIncident(
  riple(
    rows,
    columns,
    rows / 2,
    columns / 2,
    0,
    300,
    {
      transform: {
        rotateZ: "45deg",
      },
    },
    ".box"
  ),
  18425
);

clip.addIncident(
  riple(
    rows,
    columns,
    rows / 2,
    columns / 2,
    0,
    300,
    {
      transform: {
        translateZ: "40px",
      },
    },
    ".box"
  ),
  18875
);
clip.addIncident(rXYb0, 19300);

clip.addIncident(
  riple(
    rows,
    columns,
    rows / 2,
    columns / 2,
    0,
    350,
    {
      opacity: 0,
    },
    ".box"
  ),
  19800
);

window.clip = clip;
