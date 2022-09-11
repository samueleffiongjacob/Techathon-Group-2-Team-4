import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "@fontsource/poppins"
import LogoBox from './LogoBox'
import FormBox from './FormBox';

const Signup = () => {
    //Hooks
    const navigate = useNavigate();

    // setting states
    const [userData, setUserData] = useState({});
    const [formValid, setFormValid] = useState(false);
    const inputRef = useRef({});

    console.log(userData);

    //initialValue
    const handleChange = () => {
        const values = {
            fullname: inputRef.current['fullname'].value,
            email: inputRef.current['email'].value,
            password: inputRef.current['password'].value,
            tick1: inputRef.current['tick1'].checked,
            tick2: inputRef.current['tick2'].checked
        };
        setUserData(values);
    };

    //useEffect for focus
    useEffect(() => {
        inputRef.current['fullname'].focus()
    }, []);
    //useEffect for validation
    useEffect(() => {
        if (
            !userData.fullname &&
            !userData.email &&
            !userData.password
        ) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [
        userData.fullname,
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        //session storage
        const user = JSON.stringify(userData);
        sessionStorage.getItem('user') === null
            ? sessionStorage.setItem('user', user)
            : (sessionStorage.removeItem('user'))
            , sessionStorage.setItem('user', user);



        //navigate

        formValid
            ? [alert('details ok!'), navigate('/login')]
            : alert('success');
    };



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
                base: '7573',
                sm: '-1511px'
            }}
            top={'208px'}
            borderRadius={'0px'}
        >
            {/* logo */}
            <LogoBox />

            <FormBox
                handleChange={handleChange}
                formValid={formValid}
                handleSubmit={handleSubmit}
                inputRef={inputRef}
            />
        </Box>
    )
}

export default Signup;