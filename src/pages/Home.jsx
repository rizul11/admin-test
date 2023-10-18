// import React from "react";
// import { Container } from "react-bootstrap";
// import LowerCard from "../components/LowerCard";
// import UpperCard from "../components/UpperCard";

// function Home() {
//   return (
//     <Container fluid>
//       {/* Upper Card */}
//       <UpperCard />

//       <div style={{ marginBottom: "20px" }}></div>

//       {/* Container with Custom Background Color (#dddee7) for mt-4 */}
//       <div className="mt-4" style={{ backgroundColor: "#dddee7" }}>
//         <LowerCard />
//       </div>
//     </Container>
//   );
// }

// export default Home;
import React from "react";
import { Container } from "react-bootstrap";
import LowerCard from "../components/LowerCard";
import UpperCard from "../components/UpperCard";
import TopBar from "../components/TopBar";

function Home() {
  const styles = {
    upperCard: {
      marginTop: 20,
    },
  };

  return (
    <Container fluid>
      {/* Upper Card */}
      <UpperCard style={styles.upperCard} />

      <div style={{ marginBottom: "20px" }}></div>

      {/* Container with Custom Background Color (#dddee7) for mt-4 */}
      <div className="mt-4" style={{ backgroundColor: "#dddee7" }}>
        <TopBar/>
        <LowerCard />
      </div>
    </Container>
  );
}

export default Home;

