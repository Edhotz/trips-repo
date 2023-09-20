import HomeTemplate from 'templates/Pages/Home'

import { MapProps } from 'components/Map'
import { client } from 'graphql/client'
import { GET_PLACES } from 'graphql/querys'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const result = await client.request(GET_PLACES)

  const { places } = result
  console.log(places)
  return {
    props: {
      places
    }
  }
}
