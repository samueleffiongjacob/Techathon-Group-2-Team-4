import React from 'react'
import { Box } from '@chakra-ui/react'
import TopComp from './TopComp'
import "@fontsource/poppins"
import MiddleComp from './MiddleComp'
import BottomComp from './BottomComp'


const Settings = () => {
    return (
        <Box
            position={'relative'}
            background={'#FEFEFE'}
            height={{
                base: '812px',
                sm: '1024px'
            }}
            width={{
                base: '375px',
                sm: '1076px'
            }}
            left={{
                base: '7573',
                sm: '364px'
            }}
            top={'100px'}
        >
            <TopComp />
            <MiddleComp />
            <BottomComp />
        </Box>
    )
}

export default Settings