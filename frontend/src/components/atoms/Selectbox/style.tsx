import styled from 'styled-components'

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #007bff;
  }
`
