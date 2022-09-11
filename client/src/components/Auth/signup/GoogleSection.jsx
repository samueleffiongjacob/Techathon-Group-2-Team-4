import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import Google from '../../../assets/images/Google.svg'
import Line1 from '../../../assets/images/Line1.svg'
import Line2 from '../../../assets/images/Line2.svg'
import { memo } from 'react'

const GoogleSection = memo(() => {
    console.log("render : google");
    return (
        <Flex
            position={'absolute'}
            left={{
                base: '16px',
                sm: '176px'
            }}
            top={{
                base: '495px',
                sm: '646.5px'
            }}
            width={{
                base: '300px',
                sm: '482px'
            }}
            height={{
                base: '66px',
                sm: '73px'
            }}
            gap={'19px'}
            alignItems={'center'}
        >

            <Image
                src={Line1}
                alt='line1'
                width={{
                    base: '131.33px',
                    sm: '211px'
                }}
                height={'2px'}
                position={'absolute'}
                left={'0px'}
                top={'12px'}
            />

            <Text
                position={'absolute'}
                width={'23px'}
                height={'24px'}
                top={'0px'}
                left={{
                    base: '139px',
                    sm: '230px'
                }}
                fontFamily={'satoshi'}
                textColor={'#848484'}
                fontWeight={'400'}
                textAlign={'center'}
                fontSize={'16px'}
                fontStyle={'normal'}
                lineHeight={'24px'}
            >
                OR
            </Text>

            <Image
                src={Line2}
                alt='line2'
                width={{
                    base: '131.33px',
                    sm: '211px'
                }}
                height={'2px'}
                position={'absolute'}
                left={{
                    base: '168.67px',
                    sm: '271px'
                }}
                top={'12px'}
            />

            <Image
                src={Google}
                alt='google'
                width={{
                    base: '21.87px',
                    sm: '22px'
                }}
                height={'22px'}
                position={'absolute'}
                left={{
                    base: '59px',
                    sm: '119.5px'
                }}
                top={{
                    base: '32px',
                    sm: '44px'
                }}
            />
            <Text
                position={'absolute'}
                width={{
                    base: '144px',
                    sm: '205px'
                }}
                height={{
                    base: '21px',
                    sm: '30px'
                }}
                top={{
                    base: '31px',
                    sm: '43px'
                }}
                left={{
                    base: '97px',
                    sm: '157px'
                }}
                fontFamily={'poppins'}
                textColor={'#303030'}
                fontWeight={'400'}
                fontSize={{
                    base: '14px',
                    sm: '20px'
                }}
                fontStyle={'normal'}
                lineHeight={{
                    base: '21px',
                    sm: '30px'
                }}
            >
                Register with Google
            </Text>

        </Flex>
    )
}
)
export default GoogleSection