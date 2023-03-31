import React from 'react'

const FilterButton = ({ name, index, items }) => {
    return (
        <div>
        <div className="form-chack">
            <input className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
            <label className="btn btn-outline-primary" for={`${name}-${index}`} >  
                    {items}
            </label>
        </div>
    </div>
    )
}

export default FilterButton
