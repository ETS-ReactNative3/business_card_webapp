import { Image, Container } from "react-bootstrap";
import logo from "../../assets/jon.png";

const Footer = () => {
  return (
    <Container>
      <p className="text-center">
        <small> Copyright &copy; 2022 Empty Stacks.</small>
        <Image
          height={30}
          width={30}
          src={logo}
          style={{
            verticalAlign: "center",
            marginTop: "10px",
            marginLeft: "6px",
          }}
        />
      </p>
    </Container>
  );
};

export default Footer;