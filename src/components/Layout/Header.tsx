import {
  Button,
  ColorMode,
  Divider,
  Flex,
  ToggleButton,
  ToggleButtonGroup,
  VisuallyHidden,
  View,
} from "@aws-amplify/ui-react";
import * as React from "react";
import NextLink from "next/link";
import LinkButton from "./LinkButton";
import { useRouter } from "next/router";
import { Logo } from "../Logo";
// import { SecondaryNav } from "./Secondary";
import {
  MdClose,
  MdMenu,
  MdOpenInNew,
  MdWbSunny,
  MdTonality,
  MdBedtime,
} from "react-icons/md";
import { FrameworkChooser } from "./FrameworkChoose";

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
        Guides
      </NavLink>
      <Divider orientation="vertical"></Divider>
      <NavLink {...props} href="/">
        Amplify docs <MdOpenInNew></MdOpenInNew>
      </NavLink>
    </Flex>
  );
};

const Settings = ({ platform, colorMode, setColorMode }) => {
  return (
    <Flex
      className="docs-setting"
      justifyContent={"center"}
      alignItems="center"
    >
      <FrameworkChooser platform={platform}></FrameworkChooser>
      <ColorModeSwitcher
        colorMode={colorMode}
        setColorMode={setColorMode}
      ></ColorModeSwitcher>
    </Flex>
  );
};

const ColorModeSwitcher = ({ colorMode, setColorMode }) => {
  return (
    <ToggleButtonGroup
      value={"dark"}
      size="small"
      onChange={(value: ColorMode) => {
        console.log("change theme ", value);
        setColorMode(value);
      }}
      isExclusive
      isSelectionRequired
      className="color-switcher"
    >
      <ToggleButton value="light">
        <VisuallyHidden>Light mode</VisuallyHidden>
        <MdWbSunny></MdWbSunny>
      </ToggleButton>
      <ToggleButton value="dark">
        <VisuallyHidden>Dark mode</VisuallyHidden>
        <MdBedtime></MdBedtime>
      </ToggleButton>
      <ToggleButton value="system">
        <VisuallyHidden>System preference</VisuallyHidden>
        <MdTonality></MdTonality>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const Header = ({ platform, colorMode, setColorMode }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <header className={`docs-header ${expanded ? "expanded" : ""}`}>
        <Button
          className="docs-header-menu-button"
          onClick={() => setExpanded(!expanded)}
          ariaLabel="Docs header menu button"
        >
          {expanded ? (
            <MdClose style={{ width: "1.5rem", height: "1.5rem" }} />
          ) : (
            <MdMenu style={{ width: "1.5rem", height: "1.5rem" }} />
          )}
        </Button>

        <NavLink href="/">
          <span className="docs-logo-link">
            <VisuallyHidden>Amplify UI Home</VisuallyHidden>
            <Logo></Logo>
          </span>
        </NavLink>

        <Nav />

        <Settings
          platform={platform}
          colorMode={colorMode}
          setColorMode={setColorMode}
        ></Settings>
      </header>
      {expanded ? (
        <View className="docs-header-mobile-nav">
          <Flex
            className="color-switcher__wrapper"
            justifyContent="center"
            alignItems="center"
          >
            <ColorModeSwitcher
              setColorMode={setColorMode}
              colorMode={colorMode}
            />
          </Flex>

          <Nav onClick={() => setExpanded(false)} />
          <nav className="docs-sidebar-nav">
            {/* <SecondaryNav onClick={() => setExpanded(false)} /> */}
          </nav>
        </View>
      ) : null}
    </>
  );
};

export default Header;
