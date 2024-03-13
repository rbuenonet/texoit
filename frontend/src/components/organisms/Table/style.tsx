import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }

  &:nth-child(even) {
    background-color: #eeeeee;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #D9D9D9;
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const TablePage = styled.tr`
  background-color: #f9f9f9;
`;

export const TablePageCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: #D9D9D9;
  text-align: center;
`;

export const PageButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed
  }  

  &.active {
    font-weight: bold;
    font-size: 16px;
  }
`;