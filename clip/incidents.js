import { CSSEffect, AudioPlayback } from "@donkeyclip/motorcortex";
const easeInOutQuint = [0.86, 0, 0.07, 1];

export function riple(
  rows,
  columns,
  startRow,
  startCol,
  minDelay,
  maxDelay,
  attrs,
  selector
) {
  const maxY =
    (startCol + 1) * 2 <= columns ? columns - 1 - startCol : startCol;
  const maxX = (startRow + 1) * 2 <= rows ? rows - 1 - startRow : startRow;
  const maxDistance = Math.pow(maxX, 2) + Math.pow(maxY, 2);
  return new CSSEffect(
    {
      animatedAttrs: { ...attrs },
    },
    {
      selector,
      duration: 125,
      easing: "linear",
      delay: `@expression(${minDelay}+(pow(floor(index/${columns})-${startRow},2)+pow(index % ${columns}-${startCol},2))*${
        maxDelay - minDelay
      }/${maxDistance})`,
    }
  );
}

export const songPlayback = new AudioPlayback({
  selector: "~#my-mp3",
  startFrom: 0,
  duration: 21000,
});

export const randomIn = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
    delay: `@expression(round(random(8500,8500)))`,
  }
);

export const Flip = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateX: "180deg",
      },
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
);

export const Flip2 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateY: "180deg",
      },
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
);

export const FlipParent = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "135deg",
      },
    },
    initialValues: {
      transform: {
        rotateX: "70deg",
      },
    },
  },
  {
    selector: ".container",
    duration: 2000,
    easing: "linear",
  }
);

export const Zrandom = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        translateZ: "@expression(random(-100,100))px",
      },
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
);

export const Yrandom = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        translateY: "@expression(random(-100,100))px",
      },
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
);

export const FlipParentBack = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateX: "0deg",
      },
    },
  },
  {
    selector: ".container",
    duration: 500,
    easing: "linear",
  }
);

export const Y0 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        translateY: "0px",
      },
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
);

export const Z0 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        translateZ: "0px",
      },
    },
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
);

export const rZc0 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "90deg",
      },
    },
  },
  {
    selector: ".container",
    duration: 500,
    easing: easeInOutQuint,
  }
);
export const tZc0 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        translateZ: "-50px",
      },
    },
  },
  {
    selector: ".container",
    duration: 500,
    easing: easeInOutQuint,
  }
);

export const rZc1 = rZc0.clone(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "45deg",
      },
    },
  },
  {}
);

export const tZc1 = tZc0.clone(
  {
    animatedAttrs: {
      transform: {
        translateZ: "-100px",
      },
    },
  },
  {}
);

export const rZb01 = rZc0.clone(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "45deg",
      },
    },
  },
  { selector: ".box" }
);

export const rXc0 = tZc0.clone(
  {
    animatedAttrs: {
      transform: {
        rotateX: "70deg",
      },
    },
  },
  { duration: 875 }
);

export const rXYb0 = rZc0.clone(
  {
    animatedAttrs: {
      transform: {
        // rotateX: "180deg",
        rotateY: "180deg",
      },
    },
    initialValues: {
      transform: {
        rotateX: "0deg",
        rotateY: "0deg",
        rotateZ: "45deg",
      },
    },
  },
  { selector: ".box" }
);
