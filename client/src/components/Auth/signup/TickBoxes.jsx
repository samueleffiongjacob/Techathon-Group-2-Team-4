import React from 'react'
import { Checkbox, HStack, Text } from '@chakra-ui/react'
import { memo } from 'react'

const TickBoxes = memo(({ userData, handleChange, inputRef }) => {
    console.log("render : TickBoxes");
    return (
        <>
            {/* Tick for terms and conditions */}
            <HStack
                position={'absolute'}
                left={{
                    base: '0px',
                    sm: '176px'
                }}
                width={{
                    base: '287px',
                    sm: '449px'
                }}
                height={{
                    base: '20px',
                    sm: '30px'
                }}
                top={{
                    base: '304px',
                    sm: '371px'
                }}
            >
                <Checkbox
                    size={'lg'}
                    position={'absolute'}
                    width={{
                        base: '17px',
                        sm: '28px'
                    }}
                    height={{
                        base: '17px',
                        sm: '28px'
                    }}
                    borderRadius={'4px'}
                    type={'checkbox'}
                    required
                    ref={el => inputRef.current['tick1'] = el}
                    onChange={handleChange}
                >
                </Checkbox>
                <Text
                    position={'absolute'}
                    width={{
                        base: '264px',
                        sm: '405px'
                    }}
                    height={{
                        base: '20px',
                        sm: '30px'
                    }}
                    left={'23px'}
                    fontFamily={'poppins'}
                    fontWeight={'400'}
                    fontSize={{
                        base: '13px',
                        sm: '20px'
                    }}
                    fontStyle={'normal'}
                    lineHeight={{
                        base: '19.5px',
                        sm: '30px'
                    }}
                >I agree to Teetree Terms and Conditions.
                </Text>
            </HStack>

            {/* Tick for news letter */}
            <HStack
                position={'absolute'}
                left={{
                    base: '0px',
                    sm: '176px'
                }}
                width={{
                    base: '287px',
                    sm: '449px'
                }}
                height={{
                    base: '20px',
                    sm: '30px'
                }}
                top={{
                    base: '335px',
                    sm: '417px'
                }}
            >
                <Checkbox
                    size={'lg'}
                    position={'absolute'}
                    width={{
                        base: '17px',
                        sm: '28px'
                    }}
                    height={{
                        base: '17px',
                        sm: '28px'
                    }}
                    borderRadius={'4px'}
                    type={'checkbox'}
                    ref={el => inputRef.current['tick2'] = el}
                >
                </Checkbox>
                <Text
                    position={'absolute'}
                    width={{
                        base: '296px',
                        sm: '455px'
                    }}
                    height={{
                        base: '20px',
                        sm: '30px'
                    }}
                    left={'23px'}
                    fontFamily={'poppins'}
                    fontWeight={'400'}
                    fontSize={{
                        base: '13px',
                        sm: '20px'
                    }}
                    fontStyle={'normal'}
                    lineHeight={{
                        base: '19.5px',
                        sm: '30px'
                    }}
                >I agree to receive Teetree news and updates.
                </Text>
            </HStack>
        </>
    )
}
)
export default TickBoxes