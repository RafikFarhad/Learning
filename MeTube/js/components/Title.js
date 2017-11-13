import React from 'react';
const Component = React.Component;


class Title extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center"> {this.props.title} </h1> 
            </div>
        )
    }
}

export default Title;
