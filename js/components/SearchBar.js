import React from 'react';
const Component = React.Component;

class SearchBar extends Component {

    handleChange(event) {
        console.log("search -> " + event.target.value);
        this.props.onKeyChange(event.target.value);
    }

    render() {
        return (
            <div className="search-bar text-center">
                <input className="" onChange={this.handleChange.bind(this)} placeholder="Search Key" /> 
            </div>
        )
    }
}

export default SearchBar;
