import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <Input value={filter} onChange={onChangeFilter}></Input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
