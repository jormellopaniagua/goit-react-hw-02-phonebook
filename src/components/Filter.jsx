import React from 'react';
import FilterStyled from './styledComponents/FilterStyled';
import Input from './styledComponents/Input';
import Label from './Label';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterStyled>
      <Label htmlFor="filter">Filter contacts by name:</Label>
      <Input
        type="text"
        id="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
      />
    </FilterStyled>
  );
};

export default Filter;
