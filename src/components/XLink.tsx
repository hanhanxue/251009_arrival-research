import Link from "next/link"
import styles from "./XLink.module.scss"

interface IXLinkProps {
  children: React.ReactNode
  href: string
  style?: string
  isActive?: boolean
  rel?: string
  target?: string

  onClick?: () => void
}

export default function XLink({
  children,
  href,
  style = "primary",
  isActive,
  rel,
  target,
  onClick,
}: IXLinkProps) {
  const classStyle = () => {
    switch (style) {
      case "primary":
        return `${styles.primary}`
      case "secondary":
        return `${styles.secondary}`
      default:
        return `${styles.debug}`
    }
  }

  const cls = ` ${classStyle()} ${isActive ? styles.isActive : ""}`

  return (
    <Link
      href={href}
      className={cls}
      rel={rel}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
