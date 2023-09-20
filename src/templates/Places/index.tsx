/* eslint-disable @next/next/no-img-element */
import LinkWrapper from 'components/LinkWrapper'
import React from 'react'
import { CloseOutline } from 'styled-icons/evaicons-outline'
import Image from 'next/image'

import * as S from './styles'

export type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`image-${index}`}
                src={image.url}
                alt={place.name}
                width={800}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
