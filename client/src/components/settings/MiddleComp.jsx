import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const MiddleComp = () => {
    return (
        <Flex>

            {/* Payment integrations */}
            <Box
                position={'absolute'}
                height={{
                    base: '812px',
                    sm: '203px'
                }}
                filter={'drop-shadow(20px 20px 20px rgba(122, 68, 149, 0.15))'}
                width={{
                    base: '375px',
                    sm: '677px'
                }}
                left={{
                    base: '7573',
                    sm: '37px'
                }}
                top={'179px'}
                opacity={'40%'}
                borderRadius={'16px'}
                border={'#626060 solid 0.5px'}
            >
            </Box>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '218px'
                }}
                top={{
                    base: '0',
                    sm: '213px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'81px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#22023B'}
                fontSize={{
                    base: '13px',
                    sm: '20px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >Payment integrations
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '275px'
                }}
                top={{
                    base: '0',
                    sm: '246px'
                }}
                height={{
                    base: '20px',
                    sm: '54px'
                }}
                left={'81px'}
                fontFamily={'poppins'}
                fontWeight={'400'}
                color={'#2C2B2B'}
                fontSize={{
                    base: '13px',
                    sm: '12px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '18px'
                }}
            >Connect your profile to a payment provider to
                unlock payment links.
            </Text>
            <Button
                width={{
                    base: '327px',
                    sm: '183px'
                }}
                height={{
                    base: '55px',
                    sm: '54px'
                }}
                borderRadius={'10px'}
                padding={'20px 100px'}
                color={'#F8F8F8'}
                bgColor={'#440376'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                position={'absolute'}
                fontWeight={'500'}
                fontSize={{
                    base: '16px',
                    sm: '14px'
                }}
                left={{
                    base: '16px',
                    sm: '68px'
                }}
                top={{
                    base: '16px',
                    sm: '295px'
                }}
                lineHeight={'36px'}
            // type={'submit'} 
            >
                Add integrations
            </Button>

            {/* seo tracking */}
            <Box
                position={'absolute'}
                height={{
                    base: '812px',
                    sm: '203px'
                }}
                filter={'drop-shadow(20px 20px 20px rgba(122, 68, 149, 0.15))'}
                width={{
                    base: '375px',
                    sm: '677px'
                }}
                left={{
                    base: '7573',
                    sm: '37px'
                }}
                top={'398px'}
                opacity={'40%'}
                borderRadius={'16px'}
                border={'#626060 solid 0.5px'}
            >
            </Box>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '218px'
                }}
                top={{
                    base: '0',
                    sm: '441px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'81px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#22023B'}
                fontSize={{
                    base: '13px',
                    sm: '20px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >SEO / Tracking
            </Text>
            <Button
                width={{
                    base: '327px',
                    sm: '183px'
                }}
                height={{
                    base: '55px',
                    sm: '54px'
                }}
                borderRadius={'10px'}
                padding={'20px 100px'}
                color={'#F8F8F8'}
                bgColor={'#440376'}
                fontFamily={'poppins'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={{
                    base: '16px',
                    sm: '14px'
                }}
                left={{
                    base: '16px',
                    sm: '68px'
                }}
                position={'absolute'}
                top={{
                    base: '16px',
                    sm: '501px'
                }}
                lineHeight={'36px'}
            // type={'submit'} 
            >
                See Treshold
            </Button>
        </Flex>

    )
}

export default MiddleComp