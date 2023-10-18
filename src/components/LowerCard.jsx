import React from "react";
import { Card, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function LowerCard() {
  return (
    <Row>
      <Col md={6}>
        <Card style={{ height: "530px" }}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <div
                  style={{
                    border: "1px solid rgb(190 172 172)",
                    padding: "10px",
                    height: "493px",
                    borderRadius: "11px",
                  }}
                >
                  <h2 className="educational-heading">Personal Information</h2>
                  <hr /> {/* Line between title and content */}
                  <Row>
                    <Col md={6}>
                      <div>
                        <strong>Name</strong>
                      </div>
                      <div>
                        <strong>Email</strong>
                      </div>
                      <div>
                        <strong>Contact number</strong>
                      </div>
                      <div>
                        <strong>Date of birth</strong>
                      </div>
                      <div>
                        <strong>Registration date</strong>
                      </div>
                      <div>
                        <strong>Last login</strong>
                      </div>
                      <div>
                        <strong>Language</strong>
                      </div>
                      <div>
                        <strong>Martial status</strong>
                      </div>
                      <div>
                        <strong>Hometown</strong>
                      </div>
                      <div>
                        <strong>Nationality</strong>
                      </div>
                      <div>
                        <strong>Permanent address</strong>
                      </div>
                      <div>
                        <strong>Current address</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <span className="gray-text">John Doe</span>
                      </div>
                      <div>
                        <span className="gray-text">johndoe@gmail.com</span>
                      </div>
                      <div>
                        <span className="gray-text">+89 5468973210</span>
                      </div>
                      <div>
                        <span className="gray-text">5th March, 1996</span>
                      </div>
                      <div>
                        <span className="gray-text">20/09/2023</span>
                      </div>
                      <div>
                        <span className="gray-text">20/09/2023</span>
                      </div>
                      <div>
                        <span className="gray-text">
                          English, Hindi, French
                        </span>
                      </div>
                      <div>
                        <span className="gray-text">Single</span>
                      </div>
                      <div>
                        <span className="gray-text">Bangalore</span>
                      </div>
                      <div>
                        <span className="gray-text">Indian</span>
                      </div>
                      <div>
                        <span className="gray-text">
                          C 53, Nelco Ltd, Mahakali Caves Rd, Andheri East,
                          Mumbai
                        </span>
                      </div>
                      <div>
                        <span className="gray-text">
                          8/4, Msr Industrial Area, Mathikere, Bangalore
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6}>
                <div
                  style={{
                    border: "1px solid rgb(190 172 172)",
                    borderRadius: "11px",
                    padding: "10px",
                  }}
                >
                  <h2 className="educational-heading">
                    Educational Information
                  </h2>
                  <hr /> {/* Line between title and content */}
                  <div className="educational-info">
                    <div>
                      <strong>Master in Master of Computer Application</strong>
                    </div>
                    <div>
                      <span className="gray-text">
                        Integral University Lucknow (UP)
                      </span>
                      <span className="gray-text-1">2015-2018</span>
                    </div>
                    <div>
                      <strong>Bachelor in Business Administration</strong>
                    </div>
                    <div>
                      <span className="gray-text">
                        CSJM University Kanpur (UP)
                      </span>
                      <span className="gray-text-1">2021-2022</span>
                    </div>{" "}
                    <div>
                      <strong>Certificate of Web Designing</strong>
                    </div>
                    <div>
                      <span className="gray-text">
                        Ducat Institute Gurugram (H.R)
                      </span>
                      <span className="gray-text-1">2021-2022</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid rgb(190 172 172)",
                    borderRadius: "11px",
                    padding: "10px",

                    marginTop: "10px",
                  }}
                >
                  <h4 className="employment-heading">Employment Details</h4>
                  <hr /> {/* Line between title and content */}
                  <div className="employment-info">
                    <div>
                      <strong>Current company</strong>
                    </div>
                    <div>
                      <span className="gray-text">
                        Virtual Employee Private Limited
                      </span>
                    </div>
                    <div>
                      <strong>Job role</strong>
                    </div>
                    <div>
                      <span className="gray-text">
                        Senior Executive Multimedia
                      </span>
                    </div>{" "}
                    <div>
                      <strong>Annual package</strong>
                    </div>
                    <div>
                      <span className="gray-text">6 LPA</span>
                    </div>
                    <div>
                      <strong>Notice period</strong>
                    </div>
                    <div>
                      <span className="gray-text">2 Months</span>
                    </div>
                    <div>
                      <strong>Working since</strong>
                    </div>
                    <div>
                      <span className="gray-text">2018</span>
                    </div>
                    <div>
                      <strong>Key skills</strong>
                    </div>
                    <div>
                      <span className="gray-text">
                        HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, FIGMA
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default LowerCard;
