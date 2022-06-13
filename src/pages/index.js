import * as React from "react"
import {  Divider} from 'antd';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../images/zohar_kapach.jpeg'
import './index.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


const menuStyle = {
  backgroundColor: "#14213D",
  fontFamily: " Roboto, -apple-system, sans-serif, serif",
  fontSize: 18,
  fontColor: '#FFFFFF',
  color: "#FFFFFF",
}

const brand = {
  fontFamily: " Roboto, -apple-system, sans-serif, serif",
  fontSize: 30,
  paddingRight: 30,

}

const resumeLink = {
  fontFamily: " Roboto, -apple-system, sans-serif, serif",
  borderRadius: 5,
  color: '#FFFFFF',
  borderColor: '#FFFFFF',
  borderStyle: 'solid',
  borderWidth: 1
}

const aboutPage = {
  fontFamily: " Roboto, -apple-system, sans-serif, serif",
  backgroundColor: '#0A192F',
  color:"#FFFFFF"
}

const picStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight:'auto',

}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            margin: 0

        }}
    />
);

const IndexPage = () => {
  return (
    <div>
    <Row>
      <Col >
        <Navbar style={menuStyle} collapseOnSelect expand="lg" variant="dark">
          <Container>
          <Navbar.Brand style={brand} href="#home">Zohar Kapach</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">About Me</Nav.Link>
                <Nav.Link href="#pricing">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Item>
                  <Nav.Link style={resumeLink} href="#resume">Resume</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>

    <Row style={aboutPage}>
      <Container style={{maxWidth: "700px"}}>

        <p className='pt-5' ><small><strong>Hi, my name is</strong></small></p>
        <p className=' display-1'>Zohar Kapach.</p>
        <p className='m-0 '>I'm a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building platforms that gather and display analytics from computer vision AIs.</p>
      </Container>
    </Row>

    <Row  style={aboutPage}>

      <Container style={{maxWidth: "700px"}}>

        <Col >
        <h2 className='pt-5'>About Me</h2>
        <ColoredLine color="#ffb703" />

          <Image className="p-3 rounded mx-auto" style={{float: 'left', width:"300px"}} src={ProfilePic} rounded/>
        </Col>
        <Col >
          <Container className='p-3 '>
            <p>I am an entrepreneur with a deep passion for computer vision systems. There is so much visual data around us, and I believe that it can offer insight into development, finance, health, and so much more. I am a firm believer that AI will shape our future and the physical world around us. </p>

            <p>Outside work, I am an avid traveler. In my travels I have had some of my best adventures hiking through mountains in Vietnam, working in a Scottish Castle, and even attending the Rio 2016 Olympics.</p>

            <p>I am always happy to chat about AI applications, new business ideas, or just life in general. If you got this far in my bio, I absolutely encourage you to reach out.</p>

            <p>~Zohar</p>
          </Container>
        </Col>
      </Container>
    </Row>
    <Row style={aboutPage}>
      <Container style={{maxWidth: "700px"}}>
        <Col>
          <h2 className='pt-5 '>Where I've Worked</h2>
          <ColoredLine color="#ffb703" />
          <Tab.Container id="jobs" defaultActiveKey="first">
            <Row className='pt-3'>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Oqullo</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Cam 2 Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Fiat Chrysler</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h3 className='d-inline'> Co-Founder & CEO </h3><h3 id='atcompany' className='d-inline'>@ Oqullo</h3>
                    <ul>
                      <li id="listitem">Person Re-ID AI: Evaluated existing Multiple Object Tracking research and designed a Deep SORT-based person Re-ID algorithm to be used in commercial real estate.</li>
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    test2
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    test3
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Container>
    </Row>

    <Row style={aboutPage}>
      <Container style={{maxWidth: "700px"}}>
        <Col>
          <h2 className='pt-5 '>Portfolio</h2>
          <ColoredLine color="#ffb703" />
        </Col>
      </Container>

    </Row>
  </div>

  )
}


export default IndexPage
