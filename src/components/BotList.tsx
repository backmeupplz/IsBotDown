import { BodyText, Header, Link } from 'components/Text'
import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { getBots } from 'helpers/api'
import Bot from 'models/Bot'
import InfiniteScroll from 'react-infinite-scroll-component'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import usePagination from 'helpers/usePagination'

dayjs.extend(relativeTime)

const itemContainer = classnames('mt-2')
const BotItem: FC<{ bot: Bot }> = ({ bot }) => {
  return (
    <div className={itemContainer}>
      {bot.isDown ? '❌' : '✅'}{' '}
      <Link to={`/${bot.username}`}>@{bot.username}</Link>
      {!!bot.downSince && ` since ${dayjs(bot.downSince).fromNow()}`}
    </div>
  )
}

const messageContainer = classnames('my-4')
const Message: FC = ({ children }) => {
  return (
    <div className={messageContainer}>
      <BodyText>{children}</BodyText>
    </div>
  )
}

const container = classnames('mt-4')
export default function BotList() {
  const { items, fetchMoreItemsIfNeeded, moreItemsAvailable } = usePagination(
    (skip, limit) => getBots(skip, limit)
  )
  return (
    <>
      <Header>Bots in the system:</Header>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreItemsIfNeeded}
        hasMore={moreItemsAvailable}
        loader={<Message>🤔 Loading...</Message>}
        endMessage={<Message>🚀 That's all!</Message>}
        className={container}
      >
        {items.map((item) => (
          <BotItem key={item.telegramId} bot={item} />
        ))}
      </InfiniteScroll>
    </>
  )
}
