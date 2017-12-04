import React from 'react';
import Filter from './Filter';
import filterData from './filterData.json';
import _ from 'lodash';

class FilterList extends React.Component {
    render() {
        let filters = _.map(filterData.filters, (filter) => {
            return <Filter filter={ filter } key={ filter.name } />;
        });
        return (
            <div>
                { filters }
            </div>
        );
    }
}

export default FilterList;
