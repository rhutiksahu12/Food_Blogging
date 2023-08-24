import { Box, VStack, Image, Card, Stack, Heading, CardBody, Text, Button } from '@chakra-ui/react'
import React from 'react'

import Card1 from '../assets/card1.png'

const CardComponent = ({heading, src}) => {
    return (
        // <Box>
        //     <VStack>
        //         <Image src={Card1} h={257} w={326} alt='' />
        //     </VStack>
        // </Box>
        <Card maxW='381' borderRadius={21}>
            <CardBody>
                <Image
                    src={src}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3' px='4'>
                    <Heading size='md' color='#0E2368'>{heading}</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Button variant='outline' w={132} h={42} color='#424961' _hover={{ backgroundColor: '#424961', color:'white' }} fontSize={16} fontWeight={600} px={26} py={3} borderRadius={21}>
                        Read More
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardComponent