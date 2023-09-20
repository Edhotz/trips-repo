import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from '../../components/LinkWrapper'
import React from 'react'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PagesTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PagesTemplate
