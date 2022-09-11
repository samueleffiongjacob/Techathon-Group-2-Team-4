import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import Avatar from '../../assets/images/avatar.svg'


const TopComp = () => {
    return (
        <Flex>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '164px'
                }}
                top={{
                    base: '0',
                    sm: '59px'
                }}
                height={{
                    base: '20px',
                    sm: '60px'
                }}
                left={'43px'}
                fontFamily={'poppins'}
                fontWeight={'500'}
                color={'#212020'}
                fontSize={{
                    base: '13px',
                    sm: '40px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '60px'
                }}
            >Settings
            </Text>
            <Text
                position={'absolute'}
                width={{
                    base: '296px',
                    sm: '337px'
                }}
                top={{
                    base: '0',
                    sm: '120px'
                }}
                height={{
                    base: '20px',
                    sm: '24px'
                }}
                left={'37px'}
                fontFamily={'poppins'}
                fontWeight={'400'}
                color={'#2C2B2B'}
                fontSize={{
                    base: '13px',
                    sm: '14px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '19.5px',
                    sm: '24px'
                }}
            >Manage integrations, analytics and embedding.
            </Text>
            <Image src={Avatar} alt='logo'
                width={{
                    base: '142px',
                    sm: '61px'
                }}
                height={{
                    base: '57.47px',
                    sm: '60.99px'
                }}
                position={'absolute'}
                left={{
                    base: '116px',
                    sm: '901px'
                }}
                top={{
                    base: '74px',
                    sm: '59px'
                }}
            />
        </Flex>
    )
}

export default TopComp