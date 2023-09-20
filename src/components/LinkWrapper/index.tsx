import Link from 'next/link'
import * as S from './styles'

export type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrappper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)
export default LinkWrappper
