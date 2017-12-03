import React from 'react';
import { 
  PageHeader, 
  Grid, 
  Row, 
  Col, 
  Form, 
  FormGroup, 
  FormControl, 
  Button, 
  Checkbox, 
  Nav, 
  Navbar, 
  NavItem } from 'react-bootstrap';
import SearchBar from './SearchBar';

class Main extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={4}><PageHeader>Zen Cloud</PageHeader></Col>
          <Col lg={8}>
            <SearchBar></SearchBar>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <div>
              <h4>Teachers</h4>
              <Form horizontal>
                <FormGroup>
                  <Col>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Form inline>
                <FormGroup>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">Sort results by</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
              </Form>
            </Row>
            <Row>
              <Col lg={4}>VIDEO</Col>
              <Col lg={8}>DESCRIPTION</Col>
              <Col lg={4}>VIDEO</Col>
              <Col lg={8}>DESCRIPTION</Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Main;
