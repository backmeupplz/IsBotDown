import { ExternalLink, Header, Link } from 'components/Text'
import { useParams } from 'react-router'

export default function Bot() {
  const { username } = useParams()

  return (
    <>
      <Link to="/">back to main</Link>
      <Header>
        <ExternalLink to={`https://t.me/${username}`}>@{username}</ExternalLink>
      </Header>
    </>
  )
}
