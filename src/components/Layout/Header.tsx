import { Flex } from "@aws-amplify/ui-react";
import * as React from "react";
import NextLink from "next/link";
import LinkButton from "./LinkButton";
import { useRouter } from "next/router";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactElement;
}) => {
  const { pathname, query } = useRouter();
  const isCurrent = pathname.startsWith(href) && href !== "/";
  const className = `docs-nav-link ${isCurrent ? "current" : ""}`;

  return (
    <NextLink href={{ pathname: href, query }} passHref>
      <LinkButton classNames={className} href={href}>
        {children}
      </LinkButton>
    </NextLink>
  );
};

const Nav = (props) => {
  return (
    <Flex
      as={"nav"}
      className={"docs-nav"}
      alignItems="center"
      gap={0}
      grow={1}
    >
      <NavLink {...props} href="/">
        Getting started
      </NavLink>
      <NavLink {...props} href="/">
        Components
      </NavLink>
      <NavLink {...props} href="/">
        Theming
      </NavLink>
      <NavLink {...props} href="/">
        Amplify docs
      </NavLink>
    </Flex>
  );
};

const Header = () => {
  return (
    <>
      <header className="docs-header">
        <Nav />
      </header>
    </>
  );
};

export default Header;
