import React from "react";
function About ({ image = "https://via.placeholder.com/215", about }) {
    return(
    <aside>
        <img src= {image} alt="blog logo"></img>
        <p> {about}</p>
    </aside>
    )
}
export default About

// const ImageComponent = ({ src }) => {
//     return <img src={src || "https://via.placeholder.com/215"} alt="Placeholder" />;
//   };
  
//   // Usage
//   <ImageComponent />
//   <ImageComponent src="https://example.com/my-image.jpg" />