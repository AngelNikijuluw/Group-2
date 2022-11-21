import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Button,
  CardImg,
} from "react-bootstrap";
import Layout from "../../components/Layout";

function Profile() {
  return (
    <Layout title="Tanam Uang | Home" showFooter showNavbar>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Card
            className="bg-dark text-light"
            style={{
              height: "700px",
              width: "800px",
              margin: "-115px",
              color: "#332F2F",
              marginTop: "100px",
              left: "350px",
              top: "80px",
              border: "1px solid white",
            }}
          >
            <p
              style={{
                textAlign: "left",
                marginLeft: "40px",
                padding: "50px",
                fontSize: "25px",
              }}
            >
              Hello,User!<p>Lengkapi Profil</p>
            </p>
            <hr></hr>
          </Card>
          <Card
            className="bg-dark text-light"
            style={{
              height: "500px",
              width: "400px",
              margin: "-115px",
              color: "#332F2F",
              marginBottom: "500px",
              marginTop: "-700px",
              border: "1px solid white",
            }}
          >
            <Card.Img
              variant="top"
              src={require("../../image/testi1.png")}
              style={{
                width: "80px",
                margin: "80px auto",
                zIndex: "1",
                borderRadius: "50%",
              }}
            />

            <Card.Text>
              <p style={{ marginLeft: "160px", marginTop: "-50px" }}>
                Back to bed
              </p>
            </Card.Text>
            <hr></hr>

            <Button
              style={{
                margin: "50px auto",
                width: "70px",
                height: "25px",
                textAlign: "",
                marginLeft: "250px",
                marginTop: "-140px",
                fontSize: "10px",
              }}
            >
              Change
            </Button>
            <div
              className="menu-hover"
              style={{ marginTop: "80px", textAlign: "justify" }}
            >
              <ul>
                <a>Profile</a>
              </ul>

              <ul>
                <a>Membership</a>
              </ul>

              <ul>
                <a>Riwayat Transaksi</a>
              </ul>

              <ul>
                <a>Logout</a>
              </ul>
            </div>
            <Card.Text></Card.Text>
          </Card>
        </Container>
      </Container>
    </Layout>
  );
}
export default Profile;
