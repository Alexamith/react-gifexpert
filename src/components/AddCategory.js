import React, {useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('Cars');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories([]);
            setCategories(categories => [inputValue,...categories]);
            setInputValue('');
            
        }
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Search gif'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    </div>
  )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

};