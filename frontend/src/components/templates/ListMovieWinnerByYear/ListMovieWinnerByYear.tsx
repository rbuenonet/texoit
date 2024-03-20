import React from 'react'

import { SelectYear } from '../../molecules/SelectYear'
import { Title } from '../../atoms/Title'
import { Table } from '../../organisms/Table'

import { ListMovieWinnerByYearProps, ListContent } from './props'
import { Container } from './style'

const ListMovieWinnerByYear: React.FC<ListMovieWinnerByYearProps> = ({
  content,
  selectYear,
}) => {
  const DefaulValue = [{ Id: '', Year: '', Title: '' }]
  const titles = ['Id', 'Year', 'Title']
  const newData: Array<ListContent> | undefined = content?.map((current) => ({
    id: current.id,
    year: current.year,
    title: current.title,
  }))

  return (
    <Container>
      <Title>List movie winners by year</Title>
      <SelectYear onSelect={(year) => selectYear(year)} />
      {newData && newData.length > 0 && (
        <Table data={newData} titles={titles} />
      )}
      {(!newData || newData.length === 0) && (
        <Table data={DefaulValue} titles={titles} />
      )}
    </Container>
  )
}

export default ListMovieWinnerByYear
