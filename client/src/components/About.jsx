import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  StackDivider,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import "./About.css"
import { motion } from "framer-motion"

function About() {
  return (
    <div>
      <ChakraProvider theme={theme} resetCSS={false}>
        <Box className="about-container" mt="280px" ml="120px">
          <Text fontFamily="Poppins" fontSize="27px" fontWeight="500">
            About Us
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            maxW="500px"
            fontWeight="500"
          >
            We are enthusiastic coders , currently pursuing B.tech in panimalar
            engineering college and looking for opportunities at the same time.
            This project is show the symptom of a indivisual so that they can
            information before hand.
          </Text>
        </Box>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card
            className="cardbody-container"
            position="absolute"
            top="250px"
            right="800px"
            maxW="290px"
            bg="whiteAlpha.1100"
            borderRadius="10px"
            border="1px solid black"
          >
            <CardHeader>
              <Heading color="black">Prasoon</Heading>
            </CardHeader>
            <Divider />
            <CardBody color="black">
              <Text>
                Im a MERN Stack Developer, Im looking forward to do data
                structure and algorithms in C++
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="orange" border="0">
                <Link
                  className="anchor"
                  to="https://prasoonportfolio.netlify.app"
                >
                  Portfolio
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card
            className="cardbody-container"
            position="absolute"
            top="250px"
            right="350px"
            maxW="290px"
            bg="whiteAlpha.1100"
            borderRadius="10px"
            border="1px solid black"
          >
            <CardHeader>
              <Heading color="black">Soma Akash</Heading>
            </CardHeader>
            <Divider />
            <CardBody color="black">
              <Text>
                Im a newbie and i feel like im good in web development and
                exploring the world of coding and im looking for opportunites
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" border="0">
                <Link
                  className="anchor"
                  to="https://www.linkedin.com/in/soma-akash-perni-2432a7185/"
                >
                  LinkedIn
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </ChakraProvider>
    </div>
  )
}

export default About
