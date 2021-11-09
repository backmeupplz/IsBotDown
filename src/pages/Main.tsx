import { BodyText, ExternalLink, Header } from 'components/Text'
import BotList from 'components/BotList'
import FindBot from 'components/FindBot'

export default function Main() {
  return (
    <>
      <Header>Is Bot Down</Header>
      <BodyText>Check if your favorite bot is down or not!</BodyText>
      <BodyText>
        This is a website representation of the data from{' '}
        <ExternalLink to="https://t.me/IsBotDownBot">
          @IsBotDownBot
        </ExternalLink>
        .
      </BodyText>
      <BodyText>
        This website is{' '}
        <ExternalLink to="https://github.com/backmeupplz/IsBotDown">
          open-source
        </ExternalLink>
        . The bot is{' '}
        <ExternalLink to="https://github.com/backmeupplz/IsBotDownBot">
          too
        </ExternalLink>{' '}
        (and it has a public API).
      </BodyText>
      <FindBot />
      <BotList />
    </>
  )
}
