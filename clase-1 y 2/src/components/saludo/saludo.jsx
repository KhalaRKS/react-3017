import { Subtitle, Title } from './styles'
export const Saludo = ({text}) => {
  return (
      <>
        <Title bgColor={'blue'}>{text}</Title>
        <Title bgColor={'red'}>{text}</Title>
        <Title>{text}</Title>
        <Subtitle bgColor={'yellow'}>{text}</Subtitle>
      </>
  )
}
