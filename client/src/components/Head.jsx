import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function InitialStage() {
  const [isLoading, setIsLoading] = useState(false);
  const [conditions, setConditions] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  function handleSubmit() {
    setShow(true);
    setShowFeedback(true);
  }

  useEffect(() => {
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `https://api.nhs.uk/conditions/${selectedCondition}`;
    const fetchConditions = async () => {
      if (selectedCondition !== "") {
        setIsLoading(true);
        try {
          const response = await fetch(corsProxyUrl + apiUrl, {
            headers: {
              "subscription-key": "b6a8d37dfb6d442a9e3e293708d42735",
            },
          });
          if (!response.ok) {
            throw new Error("Request failed with status :" + response.status);
          }
          const data = await response.json();
          setConditions(data);
        } catch (error) {
          console.error("Error fetching condition", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchConditions();
  }, [selectedCondition]);

  return (
    <>
      <Box mt="100px" ml="40px" h="50vh">
        <Text fontWeight="semibold" mb="40px">
          Seems like you have head related problem
        </Text>
        <FormControl>
          <FormLabel>Tell us what are u facing</FormLabel>
          <Select
            maxWidth="220px"
            defaultValue="Headache"
            fontSize="16px"
            className="option-container"
            onChange={(e) => setSelectedCondition(e.target.value)}
          >
            <option>Select A Option</option>
            <option>Headache</option>
            <option>Sunburn</option>
            <option>Tetanus</option>
            <option>Acne</option>
            <option>Epilepsy</option>
          </Select>
          <Button
            cursor="pointer"
            position="absolute"
            left="0px"
            mt="20px"
            colorScheme="purple"
            border="none"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </FormControl>
        {showFeedback ? (
          <a href="/feedback">
            <h1 className="feedback">Feedback</h1>
          </a>
        ) : null}
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
  );
}

function Head() {
  const [firstShow, setFirstShow] = useState(true);

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
                {firstShow ? <InitialStage /> : null}
              </Box>
            </Box>
          </div>
        </Box>
      </motion.div>
    </ChakraProvider>
  );
}

export default Head;
