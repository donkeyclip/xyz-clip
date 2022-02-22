import {HTMLClip,CSSEffect,loadPlugin,Group,AudioPlayback} from "@donkeyclip/motorcortex";
function createBixList (){
  let boxlist = ""
  for (var y = 0; y < 400; y++) {
      boxlist += `<div class="box"></div>`
  }
  return boxlist
}

const easeInOutQuint=[0.86,0,0.07,1];


export const clip = new HTMLClip({
  html: `
    <div class="root">
    <div id="video-container"></div>
      <div id="perspective">
        <div class="container">
          ${ createBixList()}
        </div>
      </div>
    </div>`,
  css: `
  .root {
    margin: 0;
    background: blue;
    overflow: hidden;
    margin: 0;
    background: #121212;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Outfit', sans-serif;
  }
  #video-container{
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  
  #perspective {
    width: 50vmin;
    height: 50vmin;
    perspective: 60vmin;
  }
  
  .container {
    width: 50vmin;
    height: 50vmin;
    line-height: 0;
    transform-style: preserve-3d;
    transform:rotateX(70deg);
  }
  
  .box {
    display: inline-block;
    background: #fff;
    width: 5%;
    height: 5%;
    opacity:0;
  }

  .box::before,.box::after{
    content:"";
    background: #fff;
    width: 0%;
    height: 0%;
    position: absolute;
  }
  .box::before{
    background: #000;
  }
  
  `,
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
});

const songPlayback = new AudioPlayback({
  selector: "~#my-mp3",
  startFrom: 0,
  duration: 21000,
});


const randomIn = new CSSEffect(
    {
      animatedAttrs: {
        opacity:1
      },
      
    },
    {
      selector: ".box",
      duration: 500,
      easing: "linear",
      delay:`@expression(round(random(8500,8500)))`
    }
    );
    
    
    
    const Flip = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            rotateX: "180deg",
          }
        },
        
      },
      {
        selector: ".box",
        duration: 500,
        easing: "linear",
      }
      );
      
    const Flip2 = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            rotateY: "180deg",
          }
        },
        
      },
      {
        selector: ".box",
        duration: 500,
        easing: "linear",
      }
      );
      
      
  const FlipParent = new CSSEffect(
    {
      animatedAttrs: {
        transform:{
          rotateZ: "135deg",
        }
      },
      initialValues:{
        transform:{
          rotateX: "70deg",
        }
      }
      
    },
    {
      selector: ".container",
      duration: 2000,
      easing: "linear",
    }
    );



function riple(rows,columns,startRow ,startCol, minDelay,maxDelay,attrs,selector) {
const maxY= (startCol + 1)*2 <= columns ? columns-1 - startCol:startCol;
const maxX= (startRow + 1)*2 <= rows ? rows-1 - startRow:startRow;
const maxDistance = Math.pow(maxX,2) + Math.pow(maxY,2);
  return new CSSEffect(
    {
      animatedAttrs: {...attrs}
      },
      {
        selector,
        duration: 125,
        easing: "linear",
        delay:`@expression(${minDelay}+(pow(floor(index/${columns})-${startRow},2)+pow(index % ${columns}-${startCol},2))*${maxDelay-minDelay}/${maxDistance})`
      }
    );
}


const Zrandom = new CSSEffect(
  {
    animatedAttrs: {
      transform:{
        translateZ: "@expression(random(-100,100))px",
      }
    },
    
  },
  {
    selector: ".box",
    duration: 500,
    easing: "linear",
  }
  );


  const Yrandom = new CSSEffect(
    {
      animatedAttrs: {
        transform:{
          translateY: "@expression(random(-100,100))px",
        }
      },
      
    },
    {
      selector: ".box",
      duration: 500,
      easing: "linear",
    }
    );
 
    const FlipParentBack = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            rotateX: "0deg",
          }
        },      
      },
      {
        selector: ".container",
        duration: 500,
        easing: "linear",
      }
    );


    const Y0 = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            translateY: "0px",
          }
        },
        
      },
      {
        selector: ".box",
        duration: 500,
        easing: "linear",
      }
      );  


    const Z0 = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            translateZ: "0px",
          }
        },
        
      },
      {
        selector: ".box",
        duration: 500,
        easing: "linear",
      }
    ); 

    const rZc0 = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            rotateZ: "90deg",
          }
        },      
      },
      {
        selector: ".container",
        duration: 500,
        easing: easeInOutQuint,
      }
    );
    const tZc0 = new CSSEffect(
      {
        animatedAttrs: {
          transform:{
            translateZ: "-50px"
          }
        },      
      },
      {
        selector: ".container",
        duration: 500,
        easing: easeInOutQuint,
      }
    );

    const rZc1 = rZc0.clone(
      {
        animatedAttrs: {
        transform: {
          rotateZ: "45deg",
        },
      }
      },
      {}
    );

    const tZc1 = tZc0.clone(
      {
        animatedAttrs: {
        transform:{
          translateZ: "-100px"
        }
      }
      },
      {}
    );


    const rZb01 = rZc0.clone(
      {
        animatedAttrs: {
        transform: {
          rotateZ: "45deg",
        },
      }
      },
      {selector: ".box",}
    );


    const rXc0 = tZc0.clone(
      {
        animatedAttrs: {
        transform:{
          rotateX: "70deg"
        }
      }
      },
      {duration:875}
    );

    const rXYb0 = rZc0.clone(
      {
        animatedAttrs: {
          transform: {
            // rotateX: "180deg",
            rotateY: "180deg",
          },
        },
        initialValues:{
          transform: {
            rotateX: "0deg",
            rotateY: "0deg",
            rotateZ: "45deg"
          },
        }
      },
      {selector: ".box",}
    );

  
  


const clipMotion = new Group()
clip.addIncident(songPlayback,0)
clipMotion.addIncident(randomIn, 0);
clipMotion.addIncident(Flip, 9300);
clipMotion.addIncident(Flip2,9800);
clipMotion.addIncident(FlipParent,10300);
clipMotion.addIncident(riple(20,20,10,10,0,125,{opacity:0},".box"),11000);
clipMotion.addIncident(riple(20,20,10,10,0,125,{opacity:1},".box"),11250);
clipMotion.addIncident(Zrandom,11750);
clipMotion.addIncident(Yrandom,12250);
clipMotion.addIncident(FlipParentBack,12300);
clipMotion.addIncident(Y0,12750);
clipMotion.addIncident(Z0,13250)
clipMotion.addIncident(riple(20,20,10,1,0,300,{
  transform:{
    translateZ: "-40px",
  }
},".box"),13750);
clipMotion.addIncident(rZc0,14200)
clipMotion.addIncident(tZc0,14700)
clipMotion.addIncident(rZc1,15200)
clipMotion.addIncident(tZc1,15700)
clipMotion.addIncident(rZb01,16200)
clipMotion.addIncident(riple(20,20,10,1,0,300,{
  transform:{
    rotateZ: "0deg",
  }
},".box"),16700)
clipMotion.addIncident(rXc0,17125)

clipMotion.addIncident(riple(20,20,10,10,0,300,{
  transform:{
    translateZ: "0px",
    scale:0.5
  }
},".box"),18000)

clipMotion.addIncident(riple(20,20,10,10,0,300,{
  transform:{
    rotateZ: "45deg",
  }
},".box"),18425)

clipMotion.addIncident(riple(20,20,10,10,0,300,{
  transform:{
    translateZ: "40px",
  }
},".box"),18875)
clipMotion.addIncident(rXYb0,19300)

clipMotion.addIncident(riple(20,20,10,10,0,350,{
  opacity:0
},".box"),19800)

clip.addIncident(clipMotion,0)
