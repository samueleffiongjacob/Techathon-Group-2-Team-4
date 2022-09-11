import React from 'react'
import Logo from '../../../assets/images/logo.svg'
import { Box, Image } from '@chakra-ui/react'
import { memo } from 'react'

const LogoBox = memo(() => {
    console.log("render : logo");
    return (
        <Box
        >
            <Image src={Logo} alt='logo'
                width={{
                    base: '142px',
                    sm: '186px'
                }}
                height={{
                    base: '57.47px',
                    sm: '75.27px'
                }}
                position={'absolute'}
                left={{
                    base: '116px',
                    sm: '627px'
                }}
                top={{
                    base: '74px',
                    sm: '67px'
                }}
            />
        </Box>
    )
}
)
export default LogoBox