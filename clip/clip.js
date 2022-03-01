import { HTMLClip, Group, setCSSCore } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import initParams from "./initParams";

import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);

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
  initParams: initParamsValue,
});

const clipMotion = new Group();
clipMotion.addIncident(Zrandom, 1350);
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
  925
);

clipMotion.addIncident(Flip2, 0);

clip.addIncident(clipMotion, 0);
