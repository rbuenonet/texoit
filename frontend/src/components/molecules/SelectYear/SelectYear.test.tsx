import { render, screen, fireEvent } from '@testing-library/react'
import SelectYear from './SelectYear'

test('renders SelectYear component with options', () => {
  const onSelectMock = jest.fn()
  render(<SelectYear onSelect={onSelectMock} />)

  const selectElement = screen.getByRole('combobox')
  const defaultOption = screen.getByText('Selecione uma opção')

  expect(selectElement).toBeTruthy()
  expect(defaultOption).toBeTruthy()
})

test('handles selection change', () => {
  const currentYear = new Date().getFullYear().toString()
  const onSelectMock = jest.fn()
  render(<SelectYear onSelect={onSelectMock} />)

  const selectElement = screen.getByRole('combobox')

  fireEvent.change(selectElement, { target: { value: currentYear } })

  expect(onSelectMock).toHaveBeenCalledWith(currentYear)
})
