import React, { useState, useEffect, useCallback } from "react";

import { DashboardContainer } from './style'

import {ListYearsWithMultipleWinners} from '../../components/templates/ListYearsWithMultipleWinners'
import {ListTopThreeStudiosWithWinners} from '../../components/templates/ListTopThreeStudiosWithWinners'
import {ListWinIntervalForProducers} from '../../components/templates/ListWinIntervalForProducers'
import {ListMovieWinnerByYear} from '../../components/templates/ListMovieWinnerByYear'

import { yearsWithMultipleWinners, studiosWithWinCount, maxMinWinIntervalForProducers, movieWinnerByYear } from "../../services/api";


const DashboardPage: React.FC = () => {
  const [data1, setData1] = useState<any | null>(null);
  const [data2, setData2] = useState<any | null>(null);
  const [data3, setData3] = useState<any | null>(null);
  const [data4, setData4] = useState<any | null>(null);

  const loadMovieByYear = useCallback(async (year: string) => {
    const result4 = await movieWinnerByYear(year);
    setData4(result4);
  }, [data4]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await yearsWithMultipleWinners();
        setData1(result1);

        const result2 = await studiosWithWinCount();
        setData2(result2);

        const result3 = await maxMinWinIntervalForProducers();
        setData3(result3);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data1 === null || data2 === null || data3 === null) {
    return <p>Carregando...</p>;
  }

  return (
    <DashboardContainer> 
      <ListYearsWithMultipleWinners content={data1.years} />
      <ListTopThreeStudiosWithWinners content={data2.studios} />
      <ListWinIntervalForProducers min={data3.min} max={data3.max} />
      <ListMovieWinnerByYear selectYear={(year) => loadMovieByYear(year)} content={data4} />
    </DashboardContainer>
  );
};

export default DashboardPage;