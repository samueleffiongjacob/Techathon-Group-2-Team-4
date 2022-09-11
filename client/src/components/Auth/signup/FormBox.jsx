import { Box } from '@chakra-ui/react'
import React from 'react'
import GoogleSection from './GoogleSection'
import HaveAccount from './HaveAccount'
import HeadingSection from './HeadingSection'
import InputFields from './InputFields'
import SubmitSection from './SubmitSection'
import TickBoxes from './TickBoxes'

const FormBox = ({ inputRef, handleChange, handleSubmit, formValid }) => {
    return (
        <Box
            display={'flex'}
            width={{
                base: '330px',
                sm: '834px'
            }}
            height={{
                base: '561px',
                sm: '776px'
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
                base: '165px',
                sm: '187px'
            }}
            boxSizing={'border-box'}
            as={'form'}
            onSubmit={handleSubmit}
        >

            {/* Heading */}
            <HeadingSection />

            {/* inputs */}
            <InputFields
                inputRef={inputRef}
            />

            {/* tickBoxes */}
            <TickBoxes
                inputRef={inputRef}
                handleChange={handleChange}
            />

            {/* submit */}
            <SubmitSection
                formValid={formValid}
            />

            {/* have an account already */}
            <HaveAccount />

            {/* google */}
            <GoogleSection />

        </Box >
    )
}

export default FormBox