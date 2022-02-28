import { HTMLClip, Group } from "@donkeyclip/motorcortex";
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
const rows = initParamsValue.totalBoxes / 2;
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
const clipMotion = new Group();
clipMotion.addIncident(rXYb0, 19300);
clipMotion.addIncident(
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
clipMotion.addIncident(FlipParentBack, 12300);
clipMotion.addIncident(rZc1, 15200);
clipMotion.addIncident(Flip2, 9800);
clipMotion.addIncident(
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
clipMotion.addIncident(rXc0, 17125);

clipMotion.addIncident(Flip, 9300);
clipMotion.addIncident(FlipParent, 10300);
clipMotion.addIncident(
  riple(rows, columns, rows / 2, columns / 2, 0, 125, { opacity: 0 }, ".box"),
  11000
);
clipMotion.addIncident(
  riple(rows, columns, rows / 2, columns / 2, 0, 125, { opacity: 1 }, ".box"),
  11250
);
clipMotion.addIncident(Zrandom, 11750);
clipMotion.addIncident(Yrandom, 12250);
clipMotion.addIncident(Y0, 12750);
clipMotion.addIncident(Z0, 13250);

clipMotion.addIncident(rZc0, 14200);
clipMotion.addIncident(tZc0, 14700);
clipMotion.addIncident(tZc1, 15700);
clipMotion.addIncident(rZb01, 16200);
clipMotion.addIncident(
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

clipMotion.addIncident(
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

clipMotion.addIncident(
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

clipMotion.addIncident(
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

clipMotion.addIncident(randomIn, 0);
clip.addIncident(clipMotion, 0);
