import React, { useState, useEffect, useCallback } from "react";

import {Container} from './style'

import { Title } from '../../components/atoms/Title';
import { Table } from '../../components/organisms/Table';
import { titleAdvanced } from '../../components/organisms/Table/props';

import { listMovies } from "../../services/api";


const pageSize = 10; 
const ListPage: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [content, setContent] = useState<any | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const DefaulValue = [{Id: '', Year: '', Title: '', Winner: ''}];
  const currentYear = new Date().getFullYear();
  const [titles, setTitles] = useState<Array<string | titleAdvanced>>([
    "Id",
    {
      value: '',
      text: "Year", 
      options: Array.from({ length: currentYear - 1970 + 1 }, (_, index) => (currentYear - index).toString()),
      onChange: (value: string) => changeFilter("Year", value)
    },
    "Title",
    {
      value: '',
      text: "Winner", 
      options: ["yes", "no"],
      onChange: (value: string) => changeFilter('Winner', value)
    },
  ]);

  const changeFilter = (filter: string, value: string) => {
    value = filter === 'Winner' ? 
      (value === 'yes' ? 'true' : 'false' ) :
      value;
    setPage(1);
    setTitles(prevTitles => {
      return prevTitles.map(item => {
        if (typeof item === 'string' || (item.text !== filter)) {
          return item;
        } else {
          return { ...item, value };
        }
      });
    });
  };
  

  const getFilter = (filter: string) => {
    const titleObject = titles.find(item => typeof item !== 'string' && item.text === filter);
    return (titleObject as titleAdvanced)?.value ?? ''
  }
  
  const fetchData = async () => {
    try {
      const result = await listMovies(
        (page - 1).toString(), 
        pageSize.toString(), 
        getFilter('Winner'), 
        getFilter('Year')
      );
      setTotalPages(result.totalPages);
      setData(result.content);
      setContent(result.content.slice(0, pageSize).map((current: any) => ({
        id: current.id,
        year: current.year,
        title: current.title,
        winner: current.winner
      })))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, titles]);

  useEffect(() => {
    fetchData();
  }, []);

  if (data === null) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
        <Title>List movies</Title>
        {content && content.length > 0 && 
          <Table 
            data={content} 
            titles={titles} 
            currentPage={page} 
            totalPages={totalPages} 
            onPageChange={(page) => {setPage(page)}} 
          />
        }
        {!content || content.length === 0 && 
          <Table 
            data={DefaulValue} 
            titles={titles} 
          />
        }
    </Container>
  );
};

export default ListPage;