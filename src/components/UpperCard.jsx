// import React from "react";
// import { Card, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
// import { EnvelopeFill } from "react-bootstrap-icons";
// import { TelephoneFill } from "react-bootstrap-icons";
// import { CalendarCheckFill } from "react-bootstrap-icons";
// import { PersonExclamation } from "react-bootstrap-icons";
// import { CalendarCheck } from "react-bootstrap-icons";
// import { CheckLg } from "react-bootstrap-icons";
// import { XLg } from "react-bootstrap-icons";

// function UpperCard() {
//   return (
//     <Card>
//       <Card.Body>
//         <Row>
//           <Col md={6}>
//             <div className="user-info">
//               <div className="user-picture">
//                 {/* Add your user picture here */}
//                 <img
//                   className="user-image"
//                   src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                   alt="User"
//                 />
//               </div>
//               <div className="user-details">
//                 <h5>John Doe (UI/UX Designer)</h5>

//                 <p>
//                   <EnvelopeFill />
//                   <span style={{ marginLeft: 10, marginRight: 10 }}>
//                     john.doe@gmail.com
//                   </span>
//                   <TelephoneFill />
//                   <span style={{ marginLeft: 10 }}>9912446673</span>
//                 </p>
//                 <p>
//                   <CalendarCheckFill />
//                   <span style={{ marginLeft: 10, marginRight: 10 }}>
//                     20/09/2023
//                   </span>
//                   <PersonExclamation />
//                   <span style={{ marginLeft: 10, marginRight: 10 }}>
//                     20/09/2023
//                   </span>
//                 </p>
//                 <p>
//                   Attempt | Correct | Incorrect :{" "}
//                   <span style={{ marginLeft: 10, marginRight: 10 }}>
//                     <CalendarCheck />
//                     20
//                   </span>
//                   <span style={{ marginLeft: 10, marginRight: 10 }}>
//                     <CheckLg />
//                     15
//                   </span>{" "}
//                   <span style={{ marginLeft: 10, marginRight: 10 }}>
//                     <XLg />
//                     05
//                   </span>
//                 </p>
//                 <p>
//                   Registration Status: <span className="green">completed</span>
//                   <br />
//                   Total Tests: <span className="green">05</span>
//                 </p>
//               </div>
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="video-section">
//               <h3>Video</h3>
//               {/* Add your video here */}
//               <iframe
//                 title="User Video"
//                 width="80%"
//                 height="250"
//                 src="https://www.shutterstock.com/shutterstock/videos/1048517332/preview/stock-footage-closeup-smiling-man-talking-mobile-phone-in-office-close-up-of-cheerful-businessman-having-phone.webm"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//   );
// }

// export default UpperCard;
import React from "react";
import { Card, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";
import { PersonExclamation } from "react-bootstrap-icons";
import { CalendarCheck } from "react-bootstrap-icons";
import { CheckLg } from "react-bootstrap-icons";
import { XLg } from "react-bootstrap-icons";

function UpperCard() {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={6}>
            <div className="user-info">
              <div className="user-picture">
                {/* Add your user picture here */}
                <img
                  className="user-image"
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="User"
                />
              </div>
              <div className="user-details">
                <h5>John Doe (UI/UX Designer)</h5>

                <p>
                  <EnvelopeFill />
                  <span style={{ marginLeft: 10, marginRight: 10 }}>
                    john.doe@gmail.com
                  </span>
                  <TelephoneFill />
                  <span style={{ marginLeft: 10 }}>9912446673</span>
                </p>
                <p>
                  <CalendarCheckFill />
                  <span style={{ marginLeft: 10, marginRight: 10 }}>
                    20/09/2023
                  </span>
                  <PersonExclamation />
                  <span style={{ marginLeft: 10, marginRight: 10 }}>
                    20/09/2023
                  </span>
                </p>
                <p>
                  Attempt | Correct | Incorrect :{" "}
                  <span style={{ marginLeft: 10, marginRight: 10 }}>
                    <CalendarCheck />
                    20
                  </span>
                  <span style={{ marginLeft: 10, marginRight: 10 }}>
                    <CheckLg style={{ color: "green" }} />
                    15
                  </span>{" "}
                  <span style={{ marginLeft: 10, marginRight: 10 }}>
                    <XLg style={{ color: "red" }} />
                    05
                  </span>
                </p>
                <p>
                  Registration Status: <span className="green">completed</span>
                  <br />
                  Total Tests: <span className="green">05</span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="video-section">
              <h3>Video</h3>
              {/* Add your video here */}
              <iframe
                title="User Video"
                width="80%"
                height="250"
                src="https://www.shutterstock.com/shutterstock/videos/1048517332/preview/stock-footage-closeup-smiling-man-talking-mobile-phone-in-office-close-up-of-cheerful-businessman-having-phone.webm"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default UpperCard;
  