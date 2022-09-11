import React from 'react'
import { Box, FormControl, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const HaveAccount = memo(() => {
    console.log("render : have account");

    return (
        <Box
            position={'absolute'}>
            <FormControl>
                <NavLink to={'/login'}  >
                    <Text
                        position={'absolute'}
                        fontFamily={'poppins'}
                        fontWeight={'400'}
                        fontSize={{
                            base: '14px',
                            sm: '19px'
                        }}
                        lineHeight={{
                            base: '21px',
                            sm: '30px'
                        }}
                        textAlign={'center'}
                        width={{
                            base: '239px',
                            sm: '336px'
                        }}
                        height={{
                            base: '21px',
                            sm: '30px'
                        }}
                        top={{
                            base: '451px',
                            sm: '590.5px'
                        }}
                        left={{
                            base: '54px',
                            sm: '249px'
                        }}

                    > Have an account already ? Sign in
                    </Text>
                </NavLink>
            </FormControl>
        </Box>
    )
}
)
export default HaveAccount