import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormControl type="text" placeholder="search" />
                </FormGroup>
                {' '}
                <Button type="submit">
                    Search
                </Button>
            </Form>
        );
    }
}

export default SearchBar;
