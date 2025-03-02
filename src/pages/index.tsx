import { MouseEvent, useRef, useState } from "react";
import domtoimage from "dom-to-image-more";
// import { GetServerSideProps } from "next";
import Head from "next/head";

// interface ICard {
//   image:{profileImage:""},
//   basicInfo:{
//     name: "",
//     jobTitle: "",
//     businessName: "",
//     services: "",
//     desc: "",
//     cat: "",
//     type: "",
//   },
//   contactUs:{
//     personalMobile: "",
//     wpNumber: "",
//     websiteUrl: "",
//     email: "",
//   },
//   timing: "",
//   address:"",
//   social:"",
//   tags:"",
//   plan: 'paid',
//   createdBy: "",
//   shareableUrl: "",
//   device: '',
//   requestTime: "",
//   isApproved: false,
//   expiry: ""
// }

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const scaleFactor = 1;
  const headerHeight = 50;
  const [obj, setObj] = useState({
    roof: {
      isSelected: false,
      color: '#e3e3e3'
    },
    leftWall: {
      isSelected: false,
      color: '#e3e3e3'
    },
    rightWall: {
      isSelected: false,
      color: '#e3e3e3'
    }
  });
  const changeColor = (color: string) => {
    if(obj.roof.isSelected){
      setObj({...obj,
        roof: {...obj.roof, color: `#${color}`},
      })
    }else if(obj.leftWall.isSelected){
      setObj({...obj,
        leftWall: {...obj.leftWall, color: `#${color}`},
      })
    }else{
      setObj({...obj,
        rightWall: {...obj.rightWall, color: `#${color}`},
      })
    }
  };

  const downloadJPEG = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!divRef.current) return;

    const iWidth = 600;
    const iHeight = 375;
    domtoimage.toJpeg(divRef.current, { quality: 1, width: iWidth * scaleFactor, height: (iHeight * scaleFactor) + headerHeight }) // High-quality JPEG
      .then((imgData: string) => {
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "download.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error: Error) => {
        console.error("Error generating JPEG:", error);
      });
  };
  
  return (
    <div className="main-wrp">
      {/* Dynamic SEO Metadata */}
      <Head>
        <title>Visualizer Demo | HardReload</title>
        <meta name="description" content="This is a demo for visualizer." />
        <meta property="og:title" content="Visualizer Demo | HardReload" />
        <meta property="og:description" content="This is a demo for visualizer." />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visualizer-demo.vercel.app" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="SMart Card" />
        <meta name="twitter:title" content="Visualizer Demo | HardReload" />
        <meta name="twitter:description" content="This is a demo for visualizer." />
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
      </Head>
      <h1>Home Glazer - Visualiser Demo</h1>
      <div>
          <div className="left-wrp" ref={divRef} id="downloadable">
              <h2>Your Room</h2>
              <div className="img-wrp">
                  <img className="room" src="/assets/images/bedroom.jpg" />
                  <img src="/assets/images/left-wall.png" style={{backgroundColor: obj.leftWall.color}} />
                  <img src="/assets/images/right-wall.png" style={{backgroundColor: obj.rightWall.color}} />
                  <img src="/assets/images/roof.png" style={{backgroundColor: obj.roof.color}} />
              </div> 
          </div>
          <div className="right-wrp">
              <h2>Change Your Room Color</h2>
              <div className="wall-wrp">
                  <div className="roof-wrp" style={{backgroundColor: obj.roof.isSelected?'#1a9bd74d':''}} onClick={()=>{
                    setObj({...obj,
                      roof: {...obj.roof, isSelected: true},
                      leftWall: {...obj.leftWall, isSelected: false},
                      rightWall: {...obj.rightWall, isSelected: false},
                    })
                  }} >
                      <span style={{backgroundColor: obj.roof.color}}></span>
                      <p>Roof</p>
                  </div>
                  <div style={{backgroundColor: obj.leftWall.isSelected?'#1a9bd74d':''}} onClick={()=>{
                    setObj({...obj,
                      roof: {...obj.roof, isSelected: false},
                      leftWall: {...obj.leftWall, isSelected: true},
                      rightWall: {...obj.rightWall, isSelected: false},
                    })
                  }}>
                      <span style={{backgroundColor: obj.leftWall.color}}></span>
                      <p>Left Wall</p>
                  </div>
                  <div style={{border: '0',backgroundColor: obj.rightWall.isSelected?'#1a9bd74d':''}} onClick={()=>{
                    setObj({...obj,
                      roof: {...obj.roof, isSelected: false},
                      leftWall: {...obj.leftWall, isSelected: false},
                      rightWall: {...obj.rightWall, isSelected: true},
                    })
                  }}>
                      <span style={{backgroundColor: obj.rightWall.color}}></span>
                      <p>Left Wall</p>
                  </div>
                  {/* <div className="wall-2-wrp" style={{border: '0'}}>
                      <span></span>
                      <p>Wall 2</p>
                  </div> */}
              </div> 
              <div className="choose-color-wrp">
                  <h2>Choose Color</h2>
                  <div>
                      <div onClick={()=>{changeColor("793D17")}} style={{background: '#793D17'}}></div>
                      <div onClick={()=>{changeColor("E8E9E4")}} style={{background: '#E8E9E4'}}></div>
                      <div onClick={()=>{changeColor("B9BCCB")}} style={{background: '#B9BCCB'}}></div>
                      <div onClick={()=>{changeColor("243156")}} style={{background: '#243156'}}></div>
                  </div>
              </div>
              <a className="download-btn" onClick={(e)=>{downloadJPEG(e)}}>Download Your Design</a>
          </div>
      </div>
    </div>
  );
}


// // Fetch data before rendering (Server-Side Rendering)
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch("https://searchmaar.com/api/sharable-sm-card/searchmaar");
//   const data = await res.json();

//   return {
//     props: data
//   };
// };