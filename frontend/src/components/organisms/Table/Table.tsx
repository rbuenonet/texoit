import React from 'react'

import { Selectbox } from '../../atoms/Selectbox'

import {
  TableContainer,
  TableRow,
  TableHeaderCell,
  TableCell,
  TablePage,
  TablePageCell,
  PageButton,
} from './style'
import { TableProps, titleAdvanced } from './props'

const Table: React.FC<TableProps> = ({
  data,
  titles,
  currentPage,
  totalPages = 1,
  onPageChange,
}) => {
  const displayCount = 5
  const columns = Object.keys(data[0] || {})

  const getTitle = (column: string, index: number): string => {
    if (titles) {
      if (typeof titles[index] === 'string') {
        return titles[index] as string
      }
      return (titles[index] as titleAdvanced).text
    }

    return column
  }

  function getPageNumbers(
    currentPage: number,
    totalPages: number
  ): Array<number> {
    const halfDisplayCount = Math.floor(displayCount / 2)
    let startPage = Math.max(1, currentPage - halfDisplayCount)
    let endPage = Math.min(totalPages, startPage + displayCount - 1)

    if (endPage - startPage + 1 < displayCount) {
      startPage = Math.max(1, endPage - displayCount + 1)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }

  const clickPage = (page: number) => {
    if (onPageChange) {
      onPageChange(page)
    }
  }

  return (
    <TableContainer>
      <thead>
        <TableRow>
          {columns.map((column, index) => (
            <TableHeaderCell key={column}>
              <p>{getTitle(column, index)}</p>
              {titles && typeof titles[index] !== 'string' && (
                <Selectbox
                  value={(titles[index] as titleAdvanced).value}
                  options={(titles[index] as titleAdvanced).options}
                  onSelect={(value) =>
                    (titles[index] as titleAdvanced).onChange(value)
                  }
                />
              )}
            </TableHeaderCell>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column}>{`${row[column]}`}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      {currentPage && (
        <tfoot>
          <TablePage>
            <TablePageCell colSpan={columns.length}>
              <PageButton
                onClick={() => clickPage(1)}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </PageButton>
              <PageButton
                onClick={() => clickPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </PageButton>

              {getPageNumbers(currentPage, totalPages).map((pageCurrent) => (
                <PageButton
                  key={pageCurrent}
                  onClick={() => clickPage(pageCurrent)}
                  className={currentPage === pageCurrent ? 'active' : ''}
                >
                  {pageCurrent}
                </PageButton>
              ))}

              <PageButton
                onClick={() => clickPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </PageButton>
              <PageButton
                onClick={() => clickPage(totalPages ?? 1)}
                disabled={currentPage === totalPages}
              >
                &gt;&gt;
              </PageButton>
            </TablePageCell>
          </TablePage>
        </tfoot>
      )}
    </TableContainer>
  )
}

export default Table
