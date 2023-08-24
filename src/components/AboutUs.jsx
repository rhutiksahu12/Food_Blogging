import React from 'react'
import { Box, Flex, Image, HStack, VStack, Heading, Text, Button, background, Stack } from '@chakra-ui/react';


import About from "../assets/aboutUs.png"

const AboutUs = () => {
    return (

        <Stack h={653} align='end'>

            <Box bg="#F0EDEC" width="100%" pos='relative' bottom={0} my='auto'>
                <HStack justifyContent='space-evenly' >
                    <Image src={About} h={468} w={384} alt='' display={{base:'none', md:'block'}} />
                    <VStack h='100%' w={447} align={{base:'center', md:'start'}} spacing={27} my={10} px={{base:'5', md:'0'}} >
                        <Heading as='h1' fontSize={45} color='blue.800'>
                            About Us
                        </Heading>
                        <Text fontSize={15}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos reprehenderit magnam nulla, natus alias dolorum cum veniam facere eaque fuga quisquam perferendis iusto modi itaque repellendus ipsam magni tenetur!
                        </Text>
                        <Button w={132} h={42} bg='#E23744' color='white' _hover={{ backgroundColor: '#f57a7a' }} fontSize={16} fontWeight={600} px={26} py={3} borderRadius={21}>
                            Read More
                        </Button>
                    </VStack>
                </HStack>

            </Box>
        </Stack>
    )
}

export default AboutUs