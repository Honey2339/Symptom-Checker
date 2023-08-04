import React, { useState, useEffect } from "react"
import {
  Box,
  ChakraProvider,
  theme,
  Text,
  Center,
  FormControl,
  FormLabel,
  Spacer,
  Input,
  Select,
  Button,
  FormHelperText,
  FormErrorMessage,
  Divider,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react"
import { SmallAddIcon, ArrowDownIcon } from "@chakra-ui/icons"
import "./Checker.css"
import { motion } from "framer-motion"

delete theme.styles.global

function InitialForm({ onSubmit }) {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [nameError, setNameError] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
    setNameError("")
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError("")
  }

  const handleSubmit = () => {
    if (name.trim() === "") {
      setNameError("Name Is Required")
    } else if (password.trim() === "") {
      setPasswordError("Password Is Required")
    } else {
      onSubmit()
    }
  }

  return (
    <FormControl ml="50px" mt="80px" isRequired onSubmit={onSubmit}>
      <FormLabel>Name</FormLabel>
      <Input
        maxWidth="140px"
        type="text"
        mb="20px"
        onChange={handleName}
        isInvalid={!!nameError}
        value={name}
      />

      <FormLabel>Password</FormLabel>
      <Input
        maxWidth="140px"
        type="password"
        mb="20px"
        onChange={handlePassword}
        value={password}
        isInvalid={!!passwordError}
      />

      <FormLabel>Gender</FormLabel>
      <Select maxWidth="170px" defaultValue="Male" fontSize="16px">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </Select>

      <Button
        colorScheme="purple"
        border="none"
        cursor="pointer"
        mt="70px"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </FormControl>
  )
}

function AfterSubmissionContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCondition, setSelectedCondition] = useState("")
  const [conditions, setConditions] = useState(null)

  const [show, setShow] = useState(false)

  const [age, setAge] = useState("")
  const [errorAge, setErrorAge] = useState("")

  const handleAge = (e) => {
    setAge(e.target.value)
    setErrorAge("")
  }
  const handleSecondSubmit = () => {
    if (age.includes() < 0) {
      setErrorAge("This Field is required")
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/"
    const apiUrl = `https://api.nhs.uk/conditions/${selectedCondition}`
    const fetchConditions = async () => {
      if (selectedCondition !== "") {
        setIsLoading(true)
        try {
          const response = await fetch(corsProxyUrl + apiUrl, {
            headers: {
              "subscription-key": "b6a8d37dfb6d442a9e3e293708d42735",
            },
          })
          if (!response.ok) {
            throw new Error("Request failed with status :" + response.status)
          }
          const data = await response.json()
          setConditions(data)
        } catch (error) {
          console.error("Error fetching condition", error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchConditions()
  }, [selectedCondition])

  return (
    <>
      <Box mt="100px" ml="40px" height="50vh">
        <FormControl isRequired>
          <FormLabel>Tell us what are u facing</FormLabel>
          <Select
            maxWidth="220px"
            defaultValue="Headache"
            fontSize="16px"
            className="option-container"
            onChange={(e) => setSelectedCondition(e.target.value)}
          >
            <option>Headache</option>
            <option>Sunburn</option>
            <option>Hiccups</option>
            <option>Tetanus</option>
            <option>Acne</option>
            <option>Rabies</option>
            <option>Epilepsy</option>
          </Select>
          <Text mt="40px">You've had it for long time?</Text>
          <Stack spacing={5} direction="row">
            <RadioGroup defaultValue="No">
              <Radio
                colorScheme="green"
                borderColor="black"
                value="Yes"
                mr="20px"
              >
                Yes
              </Radio>
              <Radio colorScheme="red" borderColor="black" value="No">
                No
              </Radio>
            </RadioGroup>
          </Stack>
          <FormLabel mt="40px">Age</FormLabel>
          <NumberInput isInvalid={!!errorAge}>
            <NumberInputField
              maxWidth="140px"
              type="text"
              mb="20px"
              onChange={handleAge}
            ></NumberInputField>
          </NumberInput>
          <Button
            cursor="pointer"
            position="absolute"
            left="0px"
            bottom="-10"
            colorScheme="purple"
            border="none"
            onClick={handleSecondSubmit}
            value={age}
            leftIcon={<ArrowDownIcon />}
          >
            Next
          </Button>
        </FormControl>
      </Box>

      {isLoading && show ? (
        <Center>
          <h1>Loading...</h1>
        </Center>
      ) : (
        <div>
          {conditions && show ? (
            <Box
              h="100vh"
              bgColor="black"
              mt="155px"
              position="absolute"
              left="0"
              right="0"
            >
              <Center>
                <Text fontSize="30px" color="white">
                  {conditions.about.name}
                </Text>
              </Center>
              <Center>
                <Text color="white">{conditions.description}</Text>
              </Center>
              <Divider color="whiteAlpha.900" />
              <Text color="white" fontSize="20px">
                • {conditions.hasPart[1].headline}
              </Text>
              <Text color="white">{conditions.hasPart[1].description}</Text>
              <div
                className="text-area"
                dangerouslySetInnerHTML={{
                  __html: conditions.hasPart[1].hasPart[0].text,
                }}
              ></div>
              <Divider color="whiteAlpha.400" />
              <Text color="white">
                {conditions.hasPart[1].hasPart[0].headline}
              </Text>
              <div
                className="text-area"
                dangerouslySetInnerHTML={{
                  __html: conditions.hasPart[2].hasPart[0].text,
                }}
              ></div>
            </Box>
          ) : null}
        </div>
      )}
    </>
  )
}

function Checker() {
  const [firstShow, setFirstShow] = useState(true)

  const handleSubmit = () => {
    setFirstShow(false)
  }

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          mt="50px"
          className="checker--box"
        >
          <div className="checker--container">
            <Box
              shadow="2xl"
              height="80vh"
              width="800px"
              borderRadius="10px"
              border="1px solid black"
            >
              <Box>
                <Center>
                  <Text
                    className="top-text"
                    fontWeight="semibold"
                    fontSize="30px"
                  >
                    Symptom Checker
                  </Text>
                </Center>
                <Divider />
                {firstShow ? (
                  <InitialForm onSubmit={handleSubmit} />
                ) : (
                  <AfterSubmissionContent />
                )}
              </Box>
            </Box>
          </div>
        </Box>
      </motion.div>
    </ChakraProvider>
  )
}

export default Checker
