import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import React from 'react'

const BottomComp = () => {
    return (
        <Flex>

            {/* sensitive material */}
            <Box
                position={'absolute'}
                height={{
                    base: '812px',
                    sm: '108px'
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
                top={'617px'}
                opacity={'40%'}
                borderRadius={'16px'}
                border={'#626060 solid 0.5px'}
            >

            </Box>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '175px'
                }}
                top={{
                    base: '0',
                    sm: '641px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'68px'}
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
            >Sensitive Material
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '533px'
                }}
                top={{
                    base: '0',
                    sm: '674px'
                }}
                height={{
                    base: '20px',
                    sm: '18px'
                }}
                left={'68px'}
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
            >Visitors will see a message about sensitive content before being able to view your profile.
            </Text>
            <Switch
                position={'absolute'}
                size={{
                    base: 'sm',
                    sm: 'lg'
                }}
                left={{
                    base: '45px',
                    sm: '629.5px'
                }}
                top={'656.79px'}
                colorScheme={'pink01'}
            />

            {/* html code insertion */}
            <Box
                position={'absolute'}
                height={{
                    base: '812px',
                    sm: '108px'
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
                top={'741px'}
                opacity={'40%'}
                borderRadius={'16px'}
                border={'#626060 solid 0.5px'}
            >

            </Box>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '204px'
                }}
                top={{
                    base: '0',
                    sm: '765px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'68px'}
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
            >HTML Code Insertion
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '446px'
                }}
                top={{
                    base: '0',
                    sm: '798px'
                }}
                height={{
                    base: '20px',
                    sm: '18px'
                }}
                left={'68px'}
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
            >HTML code is usually used to insert widgets and other services integrations
            </Text>
            <Switch
                position={'absolute'}
                size={{
                    base: 'sm',
                    sm: 'lg'
                }}
                left={{
                    base: '45px',
                    sm: '629.5px'
                }}
                top={'780.79px'}
                colorScheme={'pink01'}
            />

            {/* html code 2 */}
            <Box
                position={'absolute'}
                height={{
                    base: '812px',
                    sm: '108px'
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
                top={'865px'}
                opacity={'40%'}
                borderRadius={'16px'}
                border={'#626060 solid 0.5px'}
            >

            </Box>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '204px'
                }}
                top={{
                    base: '0',
                    sm: '889px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'68px'}
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
            >HTML Code Insertion
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '446px'
                }}
                top={{
                    base: '0',
                    sm: '922px'
                }}
                height={{
                    base: '20px',
                    sm: '18px'
                }}
                left={'68px'}
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
            >HTML code is usually used to insert widgets and other services integrations
            </Text>
            <Switch
                position={'absolute'}
                size={{
                    base: 'sm',
                    sm: 'lg'
                }}
                left={{
                    base: '45px',
                    sm: '629.5px'
                }}
                top={'904.79px'}
                colorScheme={'pink01'}
            />


        </Flex>
    )
}

export default BottomComp