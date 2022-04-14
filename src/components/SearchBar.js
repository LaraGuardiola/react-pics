import React from "react";

class SearchBar extends React.Component{

    onInputClick(){
        console.log('input was clicked')
    }

    //by removing the () assigned on the onChange prop in the input only a reference is passed and it's not called every time is rendered
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image search:</label>
                        <input type="text" onClick={this.onInputClick} onChange={(event) => console.log(event.target.value)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;