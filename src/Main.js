import React from 'react';
import {
  PageHeader,
  Grid,
  Row,
  Col,
  Well } from 'react-bootstrap';
import SearchBar from './SearchBar';
import FilterList from './filters/FilterList';
import NavBar from './NavBar';
// import Video from './videos/Video';
import Pagination from './Pagination';
import VideoList from './videos/VideoList';

class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Col lg={4}>
            <PageHeader>Zen Cloud</PageHeader>
          </Col>
          <Col lg={6}>
            <SearchBar></SearchBar>
          </Col>
          <Col lg={2}>
            <div>
              <a href="#">log in </a>
              |
              <a href="#"> help</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <NavBar />
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <Well>
              <FilterList />
            </Well>
          </Col>
          <Col lg={6}>
            <Pagination />
            <VideoList />
            {/* <Video /> */}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Main;
