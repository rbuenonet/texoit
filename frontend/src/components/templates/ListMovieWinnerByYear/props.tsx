export type ListContent = {
  id: number
  year: number
  title: string
  studios?: Array<string>
  producers?: Array<string>
  winner?: boolean
}

export interface ListMovieWinnerByYearProps {
  selectYear: (year: string) => void
  content: Array<ListContent>
}
