import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { Image, Button } from '@chakra-ui/react'

import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Flex pos='absolute' top={0} w='100%' justifyContent={{base:"end", md:'space-between'}} pt={{base:'18px',md:'32px'}} px={{base:'4',md:'100px'}}>
        <Image src={Logo} w={107} h={83} display={{base:'none', md:'block'}}/>
        <Button color='white' variant='outline' w={{base:'87px', md:'122px'}} h={{base:'31px', md:'42px'}} fontSize={{base:'11px', md:'16px'}} rounded={21} py={3} px={26} >
          Get In Touch
        </Button>
    </Flex>
  )
}

export default NavBar