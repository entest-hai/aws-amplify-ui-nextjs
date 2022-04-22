import {
  Button,
  Card,
  Flex,
  Text,
  useTheme,
  Image,
} from '@aws-amplify/ui-react';
import { HomeLogo } from './../components/HomeLogo';
import { Copy } from '../components/Copy';
import * as React from 'react';

const MyHomePage = () => {
  const { tokens } = useTheme();
  const installScripts = {
    react: `npm i @aws-amplfy/ui-react-aws-amplify`,
  };
  const frameworkInstallScript = installScripts['react'];

  return (
    <div>
      <h1 className="docs-home-logo">
        <HomeLogo></HomeLogo>
      </h1>
      <Flex
        direction={{ base: 'column', medium: 'row' }}
        padding={tokens.space.large}
      >
        <Card variation="outlined" flex={1}>
          <Text
            fontSize={{
              base: tokens.fontSizes.large,
              small: tokens.fontSizes.xl,
            }}
          >
            Amplify UI is an open source design system with cloud-connected
            components and primitives that simplify building accessible,
            performant, and beautiful application in React, Angular, Vue and
            Flutter (more comming soon).
          </Text>
          <Flex
            direction={{ base: 'column-reverse', medium: 'row' }}
            padding={`${tokens.space.medium} 0 0 0`}
          >
            <Button size="large" variation="primary" as="a">
              Getting started
            </Button>
            <code className="install-code__container">
              <p className="install-code__content">{frameworkInstallScript}</p>
              <Copy
                className={'install-code__button'}
                size=""
                variation={'link'}
                text={frameworkInstallScript}
              ></Copy>
            </code>
          </Flex>
        </Card>
        <Flex
          alignSelf={'center'}
          textAlign={'center'}
          flex="1"
          display={{ base: 'none', large: 'initial' }}
        >
          <Image
            alt=""
            className="docs-home-react"
            src="/svg/integrations/vue.svg"
          ></Image>
          <Image
            alt=""
            className="docs-home-react"
            src="/svg/integrations/react.svg"
          ></Image>
          <Image
            alt=""
            className="docs-home-react"
            src="/svg/integrations/angular.svg"
          ></Image>
          <Image
            alt=""
            className="docs-home-react"
            src="/svg/integrations/flutter.svg"
          ></Image>
        </Flex>
      </Flex>
    </div>
  );
};

export default MyHomePage;
