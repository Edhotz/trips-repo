import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  pages(first:$first) {
    createdAt
    heading
    id
    publishedAt
    slug
    updatedAt
    body {
      html
    }
  }
`
export const GET_PAGE_BY_SLUG = gql`
   page(where:{slug:$slug}) {
    id,
    slug
    heading
    body{
      html
    }
  }
`
export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        longitude
        latitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
