import React from 'react';

import { Title } from '../../atoms/Title';
import { Table } from '../../organisms/Table';

import { ListYearsWithMultipleWinnersProps } from './props';
import { Container } from './style';

const ListYearsWithMultipleWinners: React.FC<ListYearsWithMultipleWinnersProps> = ({content}) => {
  const titles = ["Year", "Win Count"];

  return (
    <Container>
        <Title>List years with multiple winners</Title>
        <Table data={content} titles={titles} />   
    </Container>
  );
};

export default ListYearsWithMultipleWinners;
