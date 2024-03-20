import { render, screen, fireEvent } from '@testing-library/react'
import Selectbox from './Selectbox'

const options = ['Option 1', 'Option 2', 'Option 3']

test('renders Selectbox component with options', () => {
  const onSelectMock = jest.fn()
  render(<Selectbox value="" options={options} onSelect={onSelectMock} />)

  const selectElement = screen.getByRole('combobox')
  const defaultOption = screen.getByText('Selecione uma opção')

  expect(selectElement).toBeTruthy()
  expect(defaultOption).toBeTruthy()

  options.forEach((option) => {
    expect(screen.getByText(option)).toBeTruthy()
  })
})

test('handles selection change', () => {
  const onSelectMock = jest.fn()
  render(<Selectbox value="" options={options} onSelect={onSelectMock} />)

  const selectElement = screen.getByRole('combobox')

  fireEvent.change(selectElement, { target: { value: options[1] } })

  expect(onSelectMock).toHaveBeenCalledWith(options[1])
})
