import Link, { LinkProps } from "next/link"

export function Navbar() {
  return (
    <header className="flex h-64 items-center gap-16 px-16">
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/">Test</NavbarLink>
    </header>
  )
}

function NavbarLink(props: LinkProps<string>) {
  const { children, href, ...rest } = props

  return (
    <Link
      className={`
        text-14 text-primary-11 transition-colors
        hover:text-primary-12 hover:underline
      `}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
