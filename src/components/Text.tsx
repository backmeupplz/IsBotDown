import { FC } from 'react'
import { Link as LinkBase } from 'react-router-dom'
import { classnames } from 'classnames/tailwind'

const header = classnames(
  'text-indigo-900',
  'font-bold',
  'text-3xl',
  'md:text-5xl',
  'mt-8',
  'mb-4'
)
export const Header: FC = ({ children }) => {
  return <p className={header}>{children}</p>
}

const body = classnames('text-indigo-800')
export const BodyText: FC = ({ children }) => {
  return <p className={body}>{children}</p>
}

const link = classnames('text-indigo-800', 'underline')
export const Link: FC<{ to: string }> = ({ children, to }) => {
  return (
    <LinkBase to={to} className={link}>
      {children}
    </LinkBase>
  )
}
export const ExternalLink: FC<{ to: string }> = ({ children, to }) => {
  return (
    <a href={to} className={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
