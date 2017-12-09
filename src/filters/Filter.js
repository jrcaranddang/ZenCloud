import React from 'react';
import { Form, Col, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Filter extends React.Component {
    render() {
        let options = _.map(this.props.filter.options, (opt) => {
            return <Checkbox key={ opt } >{ opt } inputRef={ref => { this.input = ref }}</Checkbox>;
        });
        return (
            <div>
                <h4>
                    { this.props.filter.name }
                </h4>
                <Form horizontal>
                    <Col>
                        { options }
                    </Col>
                </Form>
            </div>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.object
};

export default Filter;
