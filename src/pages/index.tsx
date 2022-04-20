import {
    AmplifyProvider,
    Button,
    Flex,
    Heading
} from '@aws-amplify/ui-react';
import * as React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { theme } from '../theme';

const MyHomePage = () => {
    return (
        <AmplifyProvider theme={theme} colorMode={'system'}>
            <Flex
                justifyContent={'center'}
                direction={'column'}
            >
                <Heading>Amplify UI Theme</Heading>
                <Button
                    onClick={() => {
                        console.log('theme toggle');
                    }}
                >Togle Theme</Button>
            </Flex>
        </AmplifyProvider>
    );
}

export default MyHomePage; 