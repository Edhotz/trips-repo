import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PlacesTemplate, { PlaceTemplateProps } from '../../templates/Places'
import { client } from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/querys'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request(GET_PLACE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!place) return { notFound: true }

  return {
    revalidate: 60, // once per day
    props: {
      place
    }
  }
}
