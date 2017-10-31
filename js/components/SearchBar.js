import React from 'react';
const Component = React.Component;


class SearchBar extends Component {
    render() {
        return (
            <div>
                <input value="{this.params.Value}" />    
            </div>
        )
    }
}

export default SearchBar;
