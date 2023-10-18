// import React from "react";
// import { FileEarmarkText } from "react-bootstrap-icons";
// import { PersonVideo } from "react-bootstrap-icons";
// import { Images } from "react-bootstrap-icons";
// function TopBar() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div
//           className="col-md-4 border-end border-2"
//           style={{ backgroundColor: "#5b02d8" }}
//         >
//           <div className="text-center py-2">
//             <span className="text-white">
//               <FileEarmarkText />
//               BASIC DETAILS
//             </span>
//           </div>
//         </div>
//         <div
//           className="col-md-4 border-end border-2"
//           style={{ backgroundColor: "#e8ebee" }}
//         >
//           <div className="text-center py-2">
//             <span>
//               <PersonVideo />
//               USER ALL TEST
//             </span>
//           </div>
//         </div>
//         <div className="col-md-4" style={{ backgroundColor: "#e8ebee" }}>
//           <div className="text-center py-2">
//             <span>
//               <Images />
//               INTERVIEW SCREENSHOTS
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopBar;
import React from "react";
import { FileEarmarkText } from "react-bootstrap-icons";
import { PersonVideo } from "react-bootstrap-icons";
import { Images } from "react-bootstrap-icons";

function TopBar() {
  const iconStyle = {
    marginRight: "10px", // Add space to the right of the icon
  };

  const blackText = {
    color: "black", // Set text color to black
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 border-end border-2" style={{ backgroundColor: "#5b02d8" }}>
          <div className="text-center py-2">
            <span className="text-white">
              <FileEarmarkText style={iconStyle} />
              BASIC DETAILS
            </span>
          </div>
        </div>
        <div className="col-md-4 border-end border-2" style={{ backgroundColor: "#e8ebee" }}>
          <div className="text-center py-2">
            <span style={blackText}>
              <PersonVideo style={iconStyle} />
              USER ALL TEST
            </span>
          </div>
        </div>
        <div className="col-md-4" style={{ backgroundColor: "#e8ebee" }}>
          <div className="text-center py-2">
            <span style={blackText}>
              <Images style={iconStyle} />
              INTERVIEW SCREENSHOTS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
