import React, { useRef } from "react";
import useFirestore from "../hooks/useFirestore";
import StackGrid from "react-stack-grid";
import { motion} from 'framer-motion'
import { rgba } from "style-value-types";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


const ImageGrid2 = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  const textInput = useRef(null);

  return (
    <div style={{ maxHeight: "100vh" }}>
      <StackGrid
      	monitorImagesLoaded={true}
        style={{ zIndex: "0", backgroundColor: "#1a1b1f" }}
        columnWidth={150}
        ref={textInput}
        gutterWidth={20}
        gutterHeight={20}
      >
        {docs.map((doc) => (
          <motion.div
            onClick={() => setSelectedImg(doc.url)}
            style={{ zIndex: "-1 !important" , opacity: 1}}
          >
            {/* {doc.id} */}
            <img
              src={doc.url}
              alt="uploaded pic"
              style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: 10 }}
            />
          </motion.div>
        ))}

       
      </StackGrid>
      <div style={{textAlign: "center", width: "100%" ,paddingBottom: "20px" }}>
        <footer style={{bottom: 0, paddingTop: "20px"}}>
                <p style={{ marginTop:"20px", textAlign:"center", color:"#aaa" }}> Copyright © 2021 Karishma Vanwari</p>
                <div >
                  <a href="https://github.com/KarishmaVanwari">

                <GitHubIcon style={{marginRight: "10px", fontSize: 27}}/>
                  </a>
                  <a href="https://www.linkedin.com/in/karishma-vanwari-a1a025204/">

                <LinkedInIcon style={{marginRight: "10px", fontSize: 30}}/>
                  </a>
                  <a href="mailto:karishmagvanwari@gmail.com">

                <MailIcon style={{marginRight: "10px", fontSize: 30}}/>
                  </a>
                </div>
  
                
            </footer>
            </div>
    </div>
  );
};

export default ImageGrid2;
