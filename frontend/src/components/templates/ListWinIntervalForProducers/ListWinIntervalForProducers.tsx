import React from 'react';

import { Title } from '../../atoms/Title';
import { Table } from '../../organisms/Table';

import { ListWinIntervalForProducersProps } from './props';
import { Container, TitleTable } from './style';

const ListWinIntervalForProducers: React.FC<ListWinIntervalForProducersProps> = ({min, max}) => {
  const titles = ["Producer", "Interval", "Previous Year", "Following Year"];

  return (
    <Container>
        <Title>Producers with longest and shortest interval between wins</Title>

        <TitleTable>Maximum</TitleTable>
        <Table data={max} titles={titles} />
        <TitleTable>Minimun</TitleTable>
        <Table data={min} titles={titles} />
    </Container>
  );
};

export default ListWinIntervalForProducers;
