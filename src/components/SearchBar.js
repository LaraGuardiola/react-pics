import React from "react";

class SearchBar extends React.Component{

    state = { term: ''}

    //arrow functions are the most elegant way to avoid getting undefineds since it points to the class
    onFormSubmit = e => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    //by removing the () assigned on the onChange prop in the input only a reference is passed and it's not called every time is rendered
    render(){
        //setting up the value as state we control everything inside the 'react world'
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search:</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;