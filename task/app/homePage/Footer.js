import Image from 'next/image';
import Logo from "./images/Logo.png"

// import {Logo} from "images/Logo.png"
export default function ShapeComponent() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", marginTop: "10%" }}>
        <svg
          width="100%"
          height="200"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Arc */}
          <path
            d="M0,100 Q100,-50 200,100"
            fill="#6C4DFF"
          />
          
          {/* Image */}
          {/* <Image 
            src={Logo} // Update this path based on your file setup
            x="50" // X position of the image
            y="30" // Y position of the image
            width="50" // Image width
            height="50" // Image height
            alt="logo"
          /> */}
        </svg>
      </div>
    );
  }
  