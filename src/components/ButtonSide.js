// import React, { useState } from "react";
// import "./ButtonSide.css";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import CallIcon from "@material-ui/icons/Call";
// import EmailIcon from "@material-ui/icons/Email";
// import PlaceIcon from "@material-ui/icons/Place";
// import { useEffect } from "react";

// // const useScript = url => {
// //   useEffect(() => {
// //     const script = document.createElement('script');

// //     script.src = url;
// //     script.async = true;

// //     document.body.appendChild(script);

// //     return () => {
// //       document.body.removeChild(script);
// //     }
// //   }, [url]);
// // };

// // export default useScript;

// // <script>

// // <img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="smiley.gif" alt="Smiley" width="32" height="32">

// // function bigImg(x) {
// //   x.style.height = "64px";
// //   x.style.width = "64px";
// // }

// // function normalImg(x) {
// //   x.style.height = "32px";
// //   x.style.width = "32px";
// // }
// // </script>
// const Card = () => {
//   const [width, setWidth] = useState("22.5vw");

//   const setStyle = (width) => {
//     setWidth(width);
//   };
// };

// class ButtonSide extends React.Component {
// constructor(props){super(props);
// this.state = {width: 2.4vw };}



//   render() {
//     return (
//       <div className="infocont">
//         <div className="innerinfocont">
//           klik op <br /> de icon
//         </div>
//         <div className="icon-bar">
//           <a className="twitter" href="#">
//             <i className="fa fa-map-marker"></i>
//             <span className="tooltip-ex-text tooltip-ex-right">
//               Rouppeplein 16,
//               <br /> 1000 Brussel
//             </span>
//             <PlaceIcon />
//           </a>

//           <a className="google" href="#">
//             <i className="fa fa-envelope"></i>
//             <span className="tooltip-ex-text tooltip-ex-right">
//               info@intecbrussel.be
//             </span>{" "}
//             <EmailIcon />
//           </a>

//           <a className="linkedin" href="#">
//             <i className="fa fa-phone"></i>
//             <span className="tooltip-ex-text tooltip-ex-right">
//               02 411 29 07{" "}
//             </span>{" "}
//             <CallIcon />
//           </a>

//           <a
//             className="youtube"
//             href="https://www.youtube.com/watch?v=hy6KtzDffu8"
//             target="_blank"
//           >
//             <i className="fa fa-youtube"></i>
//             <span className=""></span>
//             <YouTubeIcon />
//           </a>

//           <a
//           onMouseEnter={() => this.setStyle("#424246", "#fdfdfd")}
//           onMouseOut={() => this.setStyle("#fdfdfd", "#424246")}
//             className="tooltip-ex facebook"
//             href="https://www.facebook.com/intecbrussel.be/"
//             target="_blank"
//           >
//             <i className="fa fa-facebook"></i>
//             <span className=""></span>
//             <div icon={["fab", "facebook-f"]} />
//             <FacebookIcon />
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default ButtonSide;
