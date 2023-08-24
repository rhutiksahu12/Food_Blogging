import { Box, Heading, Highlight, Stack } from '@chakra-ui/react'
import React from 'react'
import { Image, Flex, Button, VStack, Text } from '@chakra-ui/react'

import LandingImg from "../assets/landingImg.png"
import LandingImgTop from "../assets/landingvector.png"

const landingPage = () => {
  return (
    <Flex direction={{base:'column-reverse', md: 'row'}}>
      <VStack w={{ base: '100%', md: '50%' }} justify='center'>
        <Stack px={{base:'67px', md:'100px'}} my={{base:'67px'}} pr={{base:'67px', md:'200px'}} gap={5}>
          <Heading as='h1' fontSize={{base:'38px', md:'62px'}} color='#0E2368'> <Highlight query='Best' styles={{ color: '#E23744' }}> Discover the Best Food and Drinks</Highlight></Heading>
          <Text fontSize='16px'>Naturally made Healthcare Products for the better care & support of your body.</Text>
          <Button w={132} h={42} bg='#E23744' color='white' alignSelf='flex-start' _hover={{ backgroundColor: '#f57a7a' }} fontSize={16} fontWeight={600} px={26} py={3} borderRadius={21}>
            Explore Now!
          </Button>
        </Stack>
      </VStack>
      <Box>
        <Image src={LandingImg} height={{ base: 'auto', md: 'auto' }} width="auto" ml='auto' pt="5px" />
        <Image src={LandingImgTop} height={{ base: 'auto', md: 'auto' }} width='auto' pos='absolute' right={0} top={0} />
      </Box>

    </Flex>
  )
}

export default landingPage