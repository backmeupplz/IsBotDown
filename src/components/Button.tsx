import { ButtonHTMLAttributes, FC } from 'react'
import { classnames } from 'classnames/tailwind'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  disabled?: boolean
}

const button = (disabled?: boolean) =>
  classnames(
    'transition-colors',
    'focus:outline-none',
    'px-8',
    'py-2',
    'rounded-2xl',
    disabled ? 'bg-indigo-300' : 'bg-indigo-700',
    disabled ? undefined : 'hover:bg-indigo-900',
    'text-indigo-100',
    disabled ? 'cursor-not-allowed' : undefined
  )
const Button: FC<ButtonProps> = ({ title, disabled, ...props }) => (
  <button className={button(disabled)} {...props}>
    {title}
  </button>
)

export default Button
