import { FormControl, Text } from '@chakra-ui/react'
import React from 'react'
import { memo } from 'react';

const HeadingSection = memo(() => {
    console.log("render : headingSection");
    return (
        <FormControl>
            <Text
                position={'absolute'}
                left={{
                    base: '23px',
                    sm: '265px'
                }}
                top={{
                    base: '0px',
                    sm: '27px'
                }}
                width={{
                    base: '287px',
                    sm: '305px'
                }}
                height={{
                    base: '34px',
                    sm: '48px'
                }}
                fontFamily={'poppins'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'30px'}
                textAlign={'center'}
                color={'#2C2B2B'}
            >
                Get started for free today
            </Text>
        </FormControl>
    )
}
)
export default HeadingSection