import React, {Component} from 'react';

class DynamicSelect extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        console.log(this.props.array)
        let arrayOfData = this.props.array;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data}
                    value={data}
                >
                    {data}
                </option>
            );

            return (
                <div> {arrayOfData.length} matches found for the image
            <select name="customSearch" className="custom-search-select m-4" onChange={this.handleChange}>
                <option>Select Item</option>
                {options}
                <option>None of the above</option>
           </select></div>
        )
    }
}

export default DynamicSelect;