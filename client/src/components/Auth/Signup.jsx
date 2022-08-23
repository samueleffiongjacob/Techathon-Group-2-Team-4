import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
    return (
        <Flex
            justify={'center'}
            width={'100%'}
            align={'center'} pt={'100px'} gap={5}
            flexDirection={'column'} as={'form'}

        // onSubmit={handleSubmit}
        >

            {/* Heading */}
            <FormControl width={'50%'}>
                <Text
                    fontFamily={'poppins'}
                    fontWeight={'500'}
                    fontSize={'24px'}
                    lineHeight={'48px'}
                >
                    Get started for free today
                </Text>
            </FormControl>

            {/* Full Name */}
            <FormControl width={'50%'}>
                <Input
                    type={'text'} name={'fullname'}
                    required placeholder={'Full Name'}
                // value={userData.fullname}
                // onChange={handleChange} 
                />
            </FormControl>

            {/* Email */}
            <FormControl width={'50%'}>
                <Input type={'email'}
                    name={'email'} required placeholder={'Email Address'}
                // value={userData.email} onChange={handleChange}
                />
            </FormControl>

            {/* Password */}
            <FormControl width={'50%'}>
                <Input
                    // type={show ? 'text' : 'password'}
                    type={'password'}
                    name={'password'} required placeholder={'Password'}
                // value={userData.password} onChange={handleChange} 
                />
            </FormControl>

            {/* Tick for terms and conditions */}
            <FormControl width={'50%'}>
                <Checkbox type={'checkbox'}
                    name={'tick'} required
                //  checked={userData.tick}
                // onChange={handleChange} 
                >
                    <FormLabel>I agree to Teetree Terms and Conditions.</FormLabel>
                </Checkbox>
            </FormControl>

            {/* Tick for news letter */}
            <FormControl width={'50%'}>
                <Checkbox type={'checkbox'}
                    name={'tick'} required
                // checked={userData.tick}
                // onChange={handleChange} 
                >
                    <FormLabel>I agree to recieve Teetree news and updates.</FormLabel>
                </Checkbox>
            </FormControl>

            {/* Submit */}
            <FormControl width={'50%'}>
                <Button
                    width={'486px'}
                    height={'67px'}
                    borderRadius={'10px'}
                    padding={'20px 200px'}
                    bgColor={'#440376'}
                    color={'#F8F8F8'}
                    fontFamily={'poppins'}
                    fontStyle={'normal'}
                    fontWeight={'500'}
                    fontSize={'24px'}
                    lineHeight={'36px'}
                    // colorScheme={formValid ? 'facebook' : 'gray'}
                    type={'submit'} >
                    Get Started
                </Button>
            </FormControl>
            <FormControl width={'50%'}>
                {/* <NavLink to={'/login'}  > */}
                <Text fontFamily={'cursive'} > Have an account already ? Sign in </Text>
                {/* </NavLink> */}
            </FormControl>

        </Flex>
    )
}

export default Signup