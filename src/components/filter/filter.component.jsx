import React, {useState} from "react";

import './filter.styles.scss'

const Filter = () => {
    const [filterValue, setFilterValue] = useState('');

    const handleChange = (event) => {
        setFilterValue(event.target.value)
    }

    return (
        <label>
        Filter by Region:
        <select value={filterValue} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
    )
};

export default Filter;