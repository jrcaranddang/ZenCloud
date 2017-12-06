import React from 'react';
import { Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';

class Video extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Video;
