import { Button, Card, Flex, Text, useTheme } from '@aws-amplify/ui-react';
import { HomeLogo } from './HomeLogo';
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
      <Flex>
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
      </Flex>
    </div>
  );
};

export default MyHomePage;
