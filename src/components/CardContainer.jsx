import { Provider, Carousel, LeftButton, RightButton } from "chakra-ui-carousel"
import CardComponent from "./CardComponent"
import { Stack, Flex, HStack } from '@chakra-ui/react';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'

let cards = [
    {
        heading: "Heading 1",
        src: card1
    },
    {
        heading: "Heading 2",
        src: card2
    },
    {
        heading: "Heading 3",
        src: card3
    },
    {
        heading: "Heading 4",
        src: card4
    },
    {
        heading: "Heading 5",
        src: card5
    },
    {
        heading: "Heading 6",
        src: card6
    }
]


const CardContainer = () => {
    return (
        <Provider>
            <Stack>
                <Carousel gap={25}>
                    {cards.map((card) => {
                        return (
                            <CardComponent heading={card.heading} src={card.src} />
                        )
                    })}
                    {/* <CardComponent heading={heading} src={cards}/> */}
                    {/* <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent /> */}

                </Carousel>
                <HStack justifyContent='center'>
                    <LeftButton h={10} w={10}>1</LeftButton>

                    <RightButton h={10} w={10}>2</RightButton>
                </HStack>
            </Stack>
        </Provider>
    )
}

export default CardContainer