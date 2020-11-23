import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Avatar } from '.'

describe('Avatar', () => {
  test('should render component', () => {
    expect(render(<Avatar />)).toBeTruthy()
  })

  test('renders component with default icon if no parameter passed', () => {
    render(<Avatar />)
    expect(screen.getByTestId('avatar-icon')).toBeTruthy()
    expect(screen.queryByTestId('avatar-image')).toBeFalsy()
    expect(screen.queryByTestId('avatar-initials')).toBeFalsy()
    expect(screen.queryByTestId('avatar-text')).toBeFalsy()
  })

  test('renders component with initials if only initials parameter passed', () => {
    render(<Avatar initials='ST' />)
    expect(screen.getByTestId('avatar-initials')).toBeTruthy()
    expect(screen.getByTestId('avatar-initials')).toHaveTextContent('ST')
    expect(screen.queryByTestId('avatar-image')).toBeFalsy()
    expect(screen.queryByTestId('avatar-icon')).toBeFalsy()
    expect(screen.queryByTestId('avatar-text')).toBeFalsy()
  })

  test('renders component with image only if only src parameter passed', () => {
    render(<Avatar src='xyz.jpg' />)
    expect(screen.getByTestId('avatar-image')).toBeTruthy()
    expect(screen.getByTestId('avatar-image')).toHaveAttribute('src', 'xyz.jpg')
    expect(screen.queryByTestId('avatar-initials')).toBeFalsy()
    expect(screen.queryByTestId('avatar-icon')).toBeFalsy()
    expect(screen.queryByTestId('avatar-text')).toBeFalsy()
  })

  test('renders component with image and text if only src and name parameter passed', () => {
    render(<Avatar src='xyz.jpg' name='Sachin Tendulkar' />)
    expect(screen.getByTestId('avatar-image')).toBeTruthy()
    expect(screen.getByTestId('avatar-image')).toHaveAttribute('src', 'xyz.jpg')
    expect(screen.getByTestId('avatar-text')).toBeTruthy()
    expect(screen.getByTestId('avatar-text')).toHaveTextContent(
      'Sachin Tendulkar'
    )
    expect(screen.getByTestId('avatar-container')).toHaveAttribute(
      'style',
      'display: flex; flex-direction: row;'
    )
    expect(screen.queryByTestId('avatar-initials')).toBeFalsy()
    expect(screen.queryByTestId('avatar-icon')).toBeFalsy()
  })

  test('renders component with image and text on rigth if src, position and name parameter passed', () => {
    render(<Avatar src='xyz.jpg' name='Sachin Tendulkar' position='right' />)
    expect(screen.getByTestId('avatar-image')).toBeTruthy()
    expect(screen.getByTestId('avatar-image')).toHaveAttribute('src', 'xyz.jpg')
    expect(screen.getByTestId('avatar-container')).toHaveAttribute(
      'style',
      'display: flex; flex-direction: row-reverse;'
    )
    expect(screen.getByTestId('avatar-text')).toBeTruthy()
    expect(screen.getByTestId('avatar-text')).toHaveTextContent(
      'Sachin Tendulkar'
    )
    expect(screen.queryByTestId('avatar-initials')).toBeFalsy()
    expect(screen.queryByTestId('avatar-icon')).toBeFalsy()
  })
})
