import { Box, Button, Flex, FormControl, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg'
import Line1 from '../../../assets/images/Line1.svg'
import Line2 from '../../../assets/images/Line2.svg'
import Google from '../../../assets/images/Google.svg'
import Eye from '../../../assets/images/eye.svg'
import "@fontsource/poppins"

const Login = () => {

    //Hooks
    const navigate = useNavigate();

    //initialValue
    const initialValue = {
        email: '',
        password: ''
    };

    // setting states
    const [userData, setUserData] = useState(initialValue);
    const [userInfo, setUserInfo] = useState({});
    const [show, setShow] = useState(false);
    const [formValid, setFormValid] = useState(false);

    //useEffect for validation
    useEffect(() => {
        if (
            userData.email.length > 6 &&
            userData.password.length > 6
        ) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [
        userData.email,
        userData.password
    ])

    // handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //validating for userDetails in session storage
        userInfo?.email === userData.email &&
            userInfo?.password === userData.password
            ? [sessionStorage.setItem(userInfo.fullname, userData.email), alert('sucess!'), navigate('/')]
            : alert('Incorrect details');
    };
    // useEffect
    useEffect(() => {
        const registerData = sessionStorage.getItem('user');
        const userInfoparser = JSON.parse(registerData);
        setUserInfo(userInfoparser);
    }, [])

    return (
        <Box
            background={'#FEFEFE'}
            height={{
                base: '812px',
                sm: '1024px'
            }}
            width={{
                base: '375px',
                sm: '1440px'
            }}
            left={{
                base: '8007px',
                sm: '-1511px'
            }}
            top={'208px'}
            border-radius={'0px'}
        >
            {/* logo */}
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
            <Box
                display={'flex'}
                width={{
                    base: '330px',
                    sm: '834px'
                }}
                height={{
                    base: '561px',
                    sm: '678px'
                }}
                bgColor={'#FEFEFE'}
                border={{
                    base: 'none',
                    sm: '1px solid #440376'
                }}
                borderRadius={'20px'}
                position={'absolute'}
                left={{
                    base: '21px',
                    sm: '303px'
                }}
                top={{
                    base: '190px',
                    sm: '187px'
                }}
                boxSizing={'border-box'}
                as={'form'}
                onSubmit={handleSubmit}
            >

                {/* Heading */}
                <FormControl>
                    <Text
                        position={'absolute'}
                        left={{
                            base: '23px',
                            sm: '338px'
                        }}
                        top={{
                            base: '0px',
                            sm: '66px'
                        }}
                        width={{
                            base: '287px',
                            sm: '153px'
                        }}
                        height={{
                            base: '34px',
                            sm: '48px'
                        }}
                        fontFamily={'poppins'}
                        fontStyle={'normal'}
                        fontWeight={'500'}
                        fontSize={{
                            base: '20px',
                            sm: '32px'
                        }}
                        lineHeight={{
                            base: '30px',
                            sm: '48px'
                        }}
                        textAlign={'center'}
                        fontColor={'#212020'}
                    >
                        Welcome
                    </Text>
                </FormControl>

                {/* inputs */}
                <Flex
                    flexDirection={'column'}
                    position={'absolute'}
                    padding={'0px'}
                    alignItems={'center'}
                    width={{
                        base: '327px',
                        sm: '481px'
                    }}
                    height={{
                        base: '228px',
                        sm: '178px'
                    }}
                    top={{
                        base: '61px',
                        sm: '143px'
                    }}
                    left={{
                        base: '3px',
                        sm: '176px'
                    }}
                >

                    <Flex
                        flex={'none'}
                        margin={'-8px 0px'}
                        width={{
                            base: '327px',
                            sm: '481px'
                        }}
                        height={{
                            base: '56px',
                            sm: '93px'
                        }}
                        top={'85px'}
                        order={'0'}
                        flexGrow={'0'}>
                        {/* Email */}
                        <FormControl width={'50%'}>
                            <Input
                                position={'absolute'}
                                alignItems={'center'}
                                gap={'8px'}
                                left={{
                                    base: '0.91%',
                                    sm: '0%'
                                }}
                                right={'0%'}
                                top={{
                                    base: '42px',
                                    sm: '13.98%'
                                }}
                                bottom={{
                                    base: '63.64%',
                                    sm: '25.81%'
                                }}
                                width={{
                                    base: '327px',
                                    sm: '481px'
                                }}
                                height={'56px'}
                                type={'email'}
                                name={'email'} required
                                placeholder={'Email Address'}
                                value={userData.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Flex>

                    <Flex
                        flex={'none'}
                        width={{
                            base: '327px',
                            sm: '481px'
                        }}
                        height={{
                            base: '56px',
                            sm: '93px'
                        }}
                        order={'1'}
                        flexGrow={'0'}>

                        {/* Password */}
                        <FormControl>
                            <Input
                                alignItems={'center'}
                                padding={'16px 90px 16px 16px'}
                                gap={'20px'}
                                position={'absolute'}
                                left={{
                                    base: '3px',
                                    sm: '0%'
                                }}
                                right={'0%'}
                                top={{
                                    base: '66px',
                                    sm: '13.98%'
                                }}
                                bottom={'25.81%'}
                                width={{
                                    base: '327px',
                                    sm: '481px'
                                }}
                                height={'56px'}
                                type={show ? 'text' : 'password'}
                                name={'password'} required placeholder={'Password'}
                                value={userData.password}
                                onChange={handleChange}
                            />
                            <Image
                                src={Eye}
                                alt='eye'
                                width={{
                                    base: '17px',
                                    sm: '28.23px'
                                }}
                                height={{
                                    base: '17px',
                                    sm: '24px'
                                }}
                                position={'absolute'}
                                left={{
                                    base: '288px',
                                    sm: '434.77px'
                                }}
                                top={{
                                    base: '86px',
                                    sm: '32px'
                                }}
                                onClick={() => setShow((prev) => !prev)}
                            />
                        </FormControl>
                    </Flex>

                </Flex>

                {/* forgot password */}
                <Box
                    position={'absolute'}>
                    <FormControl>
                        <NavLink to={'/signup'}  >
                            <Text
                                position={'absolute'}
                                fontFamily={'poppins'}
                                fontWeight={'400'}
                                textAlign={'center'}
                                fontSize={{
                                    base: '14px',
                                    sm: '16px'
                                }}
                                lineHeight={{
                                    base: '21px',
                                    sm: '24px'
                                }}
                                width={{
                                    base: '239px',
                                    sm: '141px'
                                }}
                                height={{
                                    base: '21px',
                                    sm: '24px'
                                }}
                                top={{
                                    base: '235px',
                                    sm: '307.5px'
                                }}
                                left={{
                                    base: '-50px',
                                    sm: '176px'
                                }}
                                fontColor={'#303030'}

                            > Forgot Password?</Text>
                        </NavLink>
                    </FormControl>
                </Box>

                {/* submit */}
                <Box
                    flexDirection={'row'}
                    position={'absolute'}
                    padding={'0px'}
                    alignItems={'center'}
                    width={{
                        base: '327px',
                        sm: '486px'
                    }}
                    height={{
                        base: '55px',
                        sm: '222px'
                    }}
                    top={{
                        base: '285px',
                        sm: '375.5px'
                    }}
                    left={{
                        base: '1px',
                        sm: '174px'
                    }}
                    gap={{
                        base: '50px',
                        sm: '26px'
                    }}
                >
                    {/* Submit button */}
                    <FormControl>
                        <Button
                            width={{
                                base: '327px',
                                sm: '486px'
                            }}
                            height={{
                                base: '55px',
                                sm: '67px'
                            }}
                            borderRadius={'10px'}
                            padding={{
                                base: '16px 120px',
                                sm: '20px 200px'
                            }}
                            color={'#F8F8F8'}
                            fontFamily={'poppins'}
                            fontStyle={'normal'}
                            fontWeight={'500'}
                            fontSize={{
                                base: '16px',
                                sm: '24px'
                            }}
                            lineHeight={'36px'}
                            bgColor={formValid ? '#440376' : 'rgba(68, 3, 118, 0.8)'}
                            type={'submit'} >
                            Login
                        </Button>
                    </FormControl>
                </Box>

                {/* Don't have an account */}
                <Box
                    position={'absolute'}>
                    <FormControl>
                        <NavLink to={'/signup'}  >
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
                                    base: '242px',
                                    sm: '336px'
                                }}
                                height={{
                                    base: '21px',
                                    sm: '30px'
                                }}
                                top={{
                                    base: '357px',
                                    sm: '468.5px'
                                }}
                                left={{
                                    base: '54px',
                                    sm: '249px'
                                }}
                            >
                                Don't have an account? Sign up </Text>
                        </NavLink>
                    </FormControl>
                </Box>

                {/* google */}
                <Flex
                    position={'absolute'}
                    left={{
                        base: '16px',
                        sm: '176px'
                    }}
                    top={{
                        base: '401px',
                        sm: '524.5px'
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
                        Login with Google
                    </Text>

                </Flex>

            </Box >
        </Box>
    )
}

export default Login