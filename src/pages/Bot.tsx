import {
  BodyText,
  ExternalLink,
  Header,
  Link,
  Subheader,
} from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { getAudience, getBot } from 'helpers/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import AudienceCheckResult from 'models/AudienceCheckResult'
import BotModel from 'models/Bot'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

export default function Bot() {
  const username = useParams().username?.replace('@', '').trim()
  const [bot, setBot] = useState<BotModel | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [noAudienceInfoBotBase, setNoAudienceInfoBotBase] = useState(false)
  const [noAudienceInfoTrueWeb, setNoAudienceInfoTrueWeb] = useState(false)
  const [botAudienceInfo, setBotAudienceInfo] = useState<
    AudienceCheckResult | undefined
  >(undefined)
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
    const fetchBotAudience = async () => {
      if (username === undefined) {
        return
      }
      if (botAudienceInfo) {
        return
      }
      try {
        const data = await getAudience(username)
        if (data.botsBaseResult && !data.botsBaseResult.users) {
          data.botsBaseResult = undefined
        }
        setBotAudienceInfo(data)
        if (!data.botsBaseResult) {
          setNoAudienceInfoBotBase(true)
        }
        if (!data.trueWebResult) {
          setNoAudienceInfoTrueWeb(true)
        }
      } catch {
        setNoAudienceInfoBotBase(true)
        setNoAudienceInfoTrueWeb(true)
      }
    }
    void fetchBot()
    void fetchBotAudience()
  }, [username, navigate, botAudienceInfo])

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
      <Subheader>TrueCheckerBot info</Subheader>
      {!noAudienceInfoTrueWeb && !botAudienceInfo?.trueWebResult && (
        <BodyText>
          🤔 Loading{' '}
          <ExternalLink to="https://t.me/TrueCheckerBot">
            @TrueCheckerBot
          </ExternalLink>{' '}
          info...
        </BodyText>
      )}
      {noAudienceInfoTrueWeb && (
        <BodyText>
          There is no information on this bot in{' '}
          <ExternalLink to="https://t.me/TrueCheckerBot">
            @TrueCheckerBot
          </ExternalLink>
          . If you're the owner of this bot, use{' '}
          <ExternalLink to="https://t.me/TrueCheckerBot">
            @TrueCheckerBot
          </ExternalLink>{' '}
          to calculate your audience.
        </BodyText>
      )}
      {!!botAudienceInfo?.trueWebResult && (
        <>
          <BodyText>
            Last checked:{' '}
            {dayjs(botAudienceInfo.trueWebResult.updated).fromNow()}
          </BodyText>
          <BodyText>
            Active: {botAudienceInfo.trueWebResult.users.active}
          </BodyText>
          <BodyText>
            Stopped: {botAudienceInfo.trueWebResult.users.stopped}
          </BodyText>
          <BodyText>
            Deleted: {botAudienceInfo.trueWebResult.users.deleted}
          </BodyText>
          <BodyText>
            Not found: {botAudienceInfo.trueWebResult.users.not_found}
          </BodyText>
        </>
      )}
      <Subheader>BotsPulse info</Subheader>
      {!noAudienceInfoBotBase && !botAudienceInfo?.botsBaseResult && (
        <BodyText>
          🤔 Loading{' '}
          <ExternalLink to="https://t.me/botspulsebot">
            @botspulsebot
          </ExternalLink>{' '}
          info...
        </BodyText>
      )}
      {noAudienceInfoBotBase && (
        <BodyText>
          There is no information on this bot in{' '}
          <ExternalLink to="https://t.me/botspulsebot">
            @botspulsebot
          </ExternalLink>
          . If you're the owner of this bot, use{' '}
          <ExternalLink to="https://t.me/botspulsebot">
            @botspulsebot
          </ExternalLink>{' '}
          to calculate your audience.
        </BodyText>
      )}
      {!!botAudienceInfo?.botsBaseResult && (
        <>
          <BodyText>
            Last checked:{' '}
            {dayjs(
              botAudienceInfo.botsBaseResult.updated_at,
              'DD.MM.YY HH:mm:ss'
            ).fromNow()}
          </BodyText>
          <BodyText>
            Active users: {botAudienceInfo.botsBaseResult.users.active}
          </BodyText>
          <BodyText>
            Stopped users: {botAudienceInfo.botsBaseResult.users.stopped}
          </BodyText>
          <BodyText>
            Deleted users: {botAudienceInfo.botsBaseResult.users.deleted}
          </BodyText>
          <BodyText>
            Users not found: {botAudienceInfo.botsBaseResult.users.not_found}
          </BodyText>
          <BodyText>
            Can't converse with users:{' '}
            {botAudienceInfo.botsBaseResult.users.cant_conversation}
          </BodyText>
          <BodyText>
            Female users: {botAudienceInfo.botsBaseResult.users.female}
          </BodyText>
          <BodyText>
            Male users: {botAudienceInfo.botsBaseResult.users.male}
          </BodyText>
          <BodyText>
            Unisex users: {botAudienceInfo.botsBaseResult.users.unisex}
          </BodyText>
          <BodyText>
            Error fetching users: {botAudienceInfo.botsBaseResult.users.error}
          </BodyText>
          <BodyText>
            Available groups: {botAudienceInfo.botsBaseResult.groups.available}
          </BodyText>
          <BodyText>
            Total users in groups:{' '}
            {botAudienceInfo.botsBaseResult.groups.count_all_users}
          </BodyText>
        </>
      )}
      <div className={classnames('mt-8')}>
        <BodyText>
          Discuss here 👉{' '}
          <ExternalLink to="https://t.me/borodutch_support">
            @borodutch_support
          </ExternalLink>
          .
        </BodyText>
      </div>
    </>
  )
}
