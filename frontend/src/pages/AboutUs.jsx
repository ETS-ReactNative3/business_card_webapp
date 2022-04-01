// import { Image, Row, Col, Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsCarousel from "../components/AboutUsCarousel"
//import ContactForm from "../components/ContactForm"
import 'bootstrap/dist/css/bootstrap.min.css'

const AboutUsPage = () => {
   return (
      <Container>
         <div /* style={{ background: "linear-gradient(#0080bf, #ccf9ff)" }} */>
            <div class="mx-auto shadow w-50 p-3 mb-1 bg-secondary rounded centered">
               <h1 class="text-light">
                  Meet the team behind Empty Stacks!
               </h1>
            </div>
            <Row>
               <Col>
                  <div class="mx-auto shadow w-75 p-1 mb-1 bg-secondary rounded centered">
                     <AboutUsCarousel>
                     </AboutUsCarousel>
                  </div>

               </Col>
            </Row>
         </div>
      </Container >
   );
};

export default AboutUsPage;
/*
const Team = () => {
   return (
      <Container
         className="d-flex flex-column justify-content-center"
         style={{ minHeight: "80vh" }}
      >
         <h1 className="text-center">Meet the team behind Empty Stacks!</h1>
         <p></p>
         <Row>
            <Col xs={6} md={4} className="text-center">
               <Image height={200} src={matt} rounded />
               <h2>Matthew Alcasabas</h2>
               <p style={{ fontSize: 20 }}>
                  has a massive horse cock
          </p>
            </Col>
            <Col xs={6} md={4} className="text-center">
               <Image height={200} src={ryan} rounded />
               <h2>Ryan Peji</h2>
               <p style={{ fontSize: 20 }}>
                  job description
          </p>
            </Col>
            <Col xs={6} md={4} className="text-center">
               <Image height={200} src={eldrin} rounded />
               <h2>Eldrin Pile</h2>
               <p style={{ fontSize: 20 }}>Sample Text</p>
            </Col>
         </Row>
         <Row>
            <Col xs={6} md={4} className="text-center">
               <Image height={200} src={jon} rounded />
               <h2>Jonathan Nickalus Galon</h2>
               <p style={{ fontSize: 20 }}>
                  yes
          </p>
            </Col>
         </Row>
      </Container>
   );
};

export default Team;
*/