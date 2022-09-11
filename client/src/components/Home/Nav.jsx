import React from 'react'
import { Box, HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../../assets/images/logo.svg'


const Nav = () => {
    return (
        <HStack

            box-sizing={'border-box'}
            position={'absolute'}
            width={'1440px'}
            height={'120px'}
            left={'0px'}
            top={'0px'}
            background={'#F9F0FF'}
            border-bottom={'0.5px solid #FAFAFA'}
        >
            <Box
            >
                <Image
                    src={Logo}
                    alt='logo'
                    width={'131px'}
                    height={'53.02px'}
                    position={'absolute'}
                    left={'129px'}
                    top={'29px'}
                />
            </Box>
            <HStack
                width={'494'}
                height={'30px'}
                top={'46px'}
                left38
            >
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </HStack>
        </HStack >
    )
}

export default Nav