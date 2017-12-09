import React from 'react';
import { Form, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

class SearchBar extends React.Component {
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormControl type="text" placeholder="search" />
                    <Button type="submit">
                        <Glyphicon glyph="search" />
                    </Button>
                </FormGroup>
                {' '}
            </Form>
        );
    }
}

export default SearchBar;
