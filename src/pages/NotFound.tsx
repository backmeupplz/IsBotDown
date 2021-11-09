import { BodyText, Header, Link } from 'components/Text'

export default function NotFound() {
  return (
    <>
      <Header>Not found</Header>
      <BodyText>
        Try a different page or <Link to="/">go back</Link> to the main page.
      </BodyText>
    </>
  )
}
