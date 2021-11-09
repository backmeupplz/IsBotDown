import { Header } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Button'
import getUsernameFromText from 'helpers/getUsernameFromText'

const container = classnames(
  'flex',
  'flex-col',
  'sm:flex-row',
  'space-y-2',
  'sm:space-y-0',
  'sm:space-x-2'
)
const textField = classnames(
  'px-2',
  'py-2',
  'bg-transparent',
  'border',
  'border-indigo-200',
  'transition-colors',
  'rounded-2xl',
  'text-indigo-900',
  'focus:border-indigo-900',
  'focus:outline-none'
)

export default function FindBot() {
  const [username, setUsername] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(false)
  const navigate = useNavigate()
  const onSubmit = (username: string) => {
    navigate(`/${username}`)
  }
  useEffect(() => {
    setIsUsernameValid(!!getUsernameFromText(username))
  }, [username])
  return (
    <>
      <Header>Find a bot:</Header>
      <div className={container}>
        <input
          className={textField}
          placeholder="@username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          onKeyDown={(event) =>
            event.code === 'Enter' ? onSubmit(username) : undefined
          }
        />
        <Button
          title="Find!"
          disabled={!isUsernameValid}
          onClick={() => (isUsernameValid ? onSubmit(username) : undefined)}
        />
      </div>
    </>
  )
}
