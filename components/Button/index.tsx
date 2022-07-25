import classNames from "classnames"
import type { HTMLProps, MouseEventHandler } from "react"
import { forwardRef } from "react"

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"

export type ButtonSize = "large" | "small"

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, "size"> & {
  children?: React.ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: any
}

const buttonVariant = {
  primary: "bg-pink-1000 hover:bg-pink-500 text-white",
  secondary: "border border-pink-1000 hover:border-pink-400 hover:text-pink-400 text-pink-1000",
  tertiary: "text-white"
}

const buttonSize = {
  large: "px-8 py-2",
  small: "px-4 py-2"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button (
    {
      children,
      className,
      onClick,
      variant = "primary",
      size = "small",
      icon
    }: ButtonProps,
    ref
  ) {
    const cn = classNames(className, {
      [buttonVariant.primary]: variant === "primary",
      [buttonVariant.secondary]: variant === "secondary",
      [buttonVariant.tertiary]: variant === "tertiary",
      [buttonSize.large]: size === "large",
      [buttonSize.small]: size === "small"
    })

    return (
      <button
        className={cn}
        onClick={onClick}
        type="button"
        ref={ref}
      >
        {icon && icon}
        {children}
      </button>
    )
  }
)
