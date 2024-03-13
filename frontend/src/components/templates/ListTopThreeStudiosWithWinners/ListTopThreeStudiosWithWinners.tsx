import React from 'react';

import { Title } from '../../atoms/Title';
import { Table } from '../../organisms/Table';

import { ListTopThreeStudiosWithWinnersProps } from './props';
import { Container } from './style';

const ListTopThreeStudiosWithWinners: React.FC<ListTopThreeStudiosWithWinnersProps> = ({content}) => {
  const titles = ["Name", "Win Count"];

  const data = content.sort((a, b) => b.winnerCount - a.winnerCount).slice(0,3);

  return (
    <Container>
        <Title>Top 3 studios with winner</Title>
        <Table data={data} titles={titles} />
    </Container>
  );
};

export default ListTopThreeStudiosWithWinners;
