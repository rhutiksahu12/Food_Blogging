import { Flex, Heading, Image, VStack, Text, Link, Icon, HStack, Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'


import Logo from "../assets/logo.png"
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { LiaCopyright } from 'react-icons/lia'

const Footer = () => {
    return (
        <Flex align='center' h={{ base: 'auto', md: '40vh' }} >

            <Flex px={25} spacing={15} mt={8} direction={{base:'column', md:'row'}} w='100%' justify='space-evenly' align={{base:'center', md:'start'}}>
                <Box flex={1}>
                    <Image src={Logo} w={161} h={125}></Image>
                </Box>
                <Box flex={1}>

                    <VStack align='start' justify='space-between'>
                        <Heading fontSize={19}>Contact Us</Heading>
                        <Text fontSize={14}> Lorem Ipsum Pvt Ltd. 5/1, magalton Road, Phartosh gate near YTM Market, XYZ-343434</Text>
                        <Text fontSize={14}>example2023@abc.com</Text>
                        <Text fontSize={14}>1234567890</Text>
                    </VStack>
                </Box>
                <Box flex={1} >

                    <VStack align='start' h='100%' justify='space-between'>
                        <Heading fontSize={19}>More</Heading>
                        <Link fontSize={14}>About Us</Link>
                        <Link fontSize={14}>Products</Link>
                        <Link fontSize={14}>Career</Link>
                        <Link fontSize={14}>Contact Us</Link>
                    </VStack>
                </Box>
                {/* <Box flex={1} h='auto'> */}

                <VStack flex={1}  justify='space-between' h='100%'>
                    <Box>
                        <Heading fontSize={19}>Social Links</Heading>
                        <HStack spacing={8} mt={4}>
                            <Link><Icon as={BsInstagram} boxSize='21px' /></Link>
                            <Link><Icon as={BsTwitter}></Icon></Link>
                            <Link><Icon as={BsFacebook}></Icon></Link>
                        </HStack>
                    </Box>
                    <Box>

                        <Text noWrap fontSize={14}><Icon as={LiaCopyright}></Icon> 2022 Food Truck Example</Text>
                    </Box>
                </VStack>
                {/* </Box> */}
            </Flex>
        </Flex>

    )
}

export default Footer