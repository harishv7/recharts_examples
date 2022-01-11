import React, { useState } from "react";
import { Box, Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import CSVReader from "react-csv-reader";
import Nav from "./Nav";

export default function CallToActionWithIllustration() {
  const [data, setData] = useState([]);
  return (
    <>
      <Nav />

      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          >
            My Charts
          </Heading>
          <Text color={"gray.500"} fontSize={"3xl"} maxW={"3xl"}>
            This is a collection of all my charts made with Recharts.
          </Text>
          <Box>
            <CSVReader onFileLoaded={(data) => setData(data)} />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
