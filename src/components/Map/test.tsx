import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('Should render without any marker', () => {
    render(<Map />)

    screen.logTestingPlaygroundURL()

    expect(screen.getByAltText('Imagem de um mapa')).toBeInTheDocument()
  })
  it('Shoud render with marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Maranhão',
      slug: 'maranhao',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/Maranhão/i)).toBeInTheDocument()
  })
})
