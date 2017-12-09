import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

class Pagination extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Form inline>
                        <FormGroup>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Sort results by</option>
                                <option value="other">...</option>
                            </FormControl>
                        </FormGroup>
                    </Form>

                    <Form inline>
                        <FormGroup>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">120 per page</option>
                                <option value="other">30 per page</option>
                                <option value="other">60 per page</option>
                                <option value="other">90 per page</option>
                            </FormControl>
                        </FormGroup>
                    </Form>

                    <div>
                        1 result
                    </div>
                </div>
                <div>
                    <div>
                        <a href="#">Page 1 of 10 </a>
                        |
                        <a href="#"> Next</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;
