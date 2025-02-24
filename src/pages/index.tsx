import { useRef, useState } from "react";
import domtoimage from "dom-to-image-more";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Home({data, seo}: any) {
  const divRef = useRef<HTMLDivElement>(null);
  const scaleFactor = 1;
  const headerHeight = 50;
  const [obj, setObj] = useState({
    roof: {
      isSelected: false,
      color: '#e3e3e3'
    },
    wall: {
      isSelected: false,
      color: '#e3e3e3'
    }
  });
  const changeColor = (color: string) => {
    if(obj.roof.isSelected){
      setObj({...obj,
        roof: {...obj.roof, color: `#${color}`},
      })
    }else{
      setObj({...obj,
        wall: {...obj.wall, color: `#${color}`},
      })
    }
  };

  const downloadJPEG = async (e: any) => {
    e.preventDefault();
    if (!divRef.current) return;

    domtoimage.toJpeg(divRef.current, { quality: 1, width: 335 * scaleFactor, height: (500 * scaleFactor) + headerHeight }) // High-quality JPEG
      .then((imgData: string) => {
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "download.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error: any) => {
        console.error("Error generating JPEG:", error);
      });
  };
  
  return (
    <div className="main-wrp">
      {/* Dynamic SEO Metadata */}
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={`https://searchmaar.com/${data.image.profileImage}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/employees" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Head>
      <h1>Home Glazer - Visualiser Demo</h1>
      <div>
          <div className="left-wrp" ref={divRef} id="downloadable">
              <h2>Your Room</h2>
              <div className="img-wrp">
                  <img className="room" src="/assets/images/main.png" />
                  <img src="/assets/images/wall.png" style={{backgroundColor: obj.wall.color}} />
                  <img src="/assets/images/roof.png" style={{backgroundColor: obj.roof.color}} />
              </div> 
          </div>
          <div className="right-wrp">
              <h2>Change Your Room Color</h2>
              <div className="wall-wrp">
                  <div className="roof-wrp" style={{backgroundColor: obj.roof.isSelected?'#1a9bd74d':''}} onClick={()=>{
                    setObj({...obj,
                      roof: {...obj.roof, isSelected: true},
                      wall: {...obj.wall, isSelected: false},
                    })
                  }} >
                      <span style={{backgroundColor: obj.roof.color}}></span>
                      <p>Roof</p>
                  </div>
                  <div className="wall-1-wrp" style={{border: '0',backgroundColor: obj.wall.isSelected?'#1a9bd74d':''}} onClick={()=>{
                    setObj({...obj,
                      roof: {...obj.roof, isSelected: false},
                      wall: {...obj.wall, isSelected: true},
                    })
                  }}>
                      <span style={{backgroundColor: obj.wall.color}}></span>
                      <p>Wall 1</p>
                  </div>
                  {/* <div className="wall-2-wrp" style={{border: '0'}}>
                      <span></span>
                      <p>Wall 2</p>
                  </div> */}
              </div> 
              <div className="choose-color-wrp">
                  <h2>Choose Color</h2>
                  <div>
                      <div onClick={()=>{changeColor("a13f3f")}} style={{background: '#a13f3f'}}></div>
                      <div onClick={()=>{changeColor("4e5e87")}} style={{background: '#4e5e87'}}></div>
                      <div onClick={()=>{changeColor("45a339")}} style={{background: '#45a339'}}></div>
                      <div onClick={()=>{changeColor("8d5f1d")}} style={{background: '#8d5f1d'}}></div>
                  </div>
              </div>
              <a className="download-btn" onClick={downloadJPEG}>Download Your Design</a>
          </div>
      </div>
    </div>
  );
}


// Fetch data before rendering (Server-Side Rendering)
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://searchmaar.com/api/sharable-sm-card/searchmaar");
  const data = await res.json();

  // Simulating SEO data from API response
  const seo = {
    title: "Employee Directory | Our Team Members",
    description:
      "Explore our team members and their roles in the company. Find out more about our skilled professionals.",
    image: "https://via.placeholder.com/1200x630.png?text=Employee+Directory", // Replace with real image URL
  };

  return {
    props: {
      data: data,
      seo,
    },
  };
};