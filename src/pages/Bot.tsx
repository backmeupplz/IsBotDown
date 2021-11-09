import { BodyText, ExternalLink, Header, Link } from 'components/Text'
import { getBot } from 'helpers/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import BotModel from 'models/Bot'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function Bot() {
  const { username } = useParams()
  const [bot, setBot] = useState<BotModel | null>(null)
  const [notFound, setNotFound] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBot = async () => {
      if (username === undefined) {
        return
      }
      if (!username?.trim()) {
        navigate('/')
      }
      try {
        setBot(await getBot(username))
      } catch {
        setNotFound(true)
      }
    }

    void fetchBot()
  }, [username, navigate])

  return (
    <>
      <Link to="/">back to main</Link>
      <Header>
        <ExternalLink to={`https://t.me/${username}`}>@{username}</ExternalLink>
      </Header>
      {!bot && !notFound && <BodyText>🤔 loading...</BodyText>}
      {notFound && (
        <BodyText>
          This bot is not in the system! However, you can add it in{' '}
          <ExternalLink to="https://t.me/IsBotDownBot">
            @IsBotDownBot
          </ExternalLink>
          .
        </BodyText>
      )}
      {bot && (
        <>
          <BodyText>Telegram ID: {bot.telegramId}</BodyText>
          <BodyText>
            {bot.isDown
              ? `❌ Bot is down since ${dayjs(bot.downSince).fromNow()}`
              : '✅ Bot is up'}
          </BodyText>
        </>
      )}
      <BodyText>
        Discuss here 👉{' '}
        <ExternalLink to="https://t.me/borodutch_support">
          @borodutch_support
        </ExternalLink>
        .
      </BodyText>
    </>
  )
}
