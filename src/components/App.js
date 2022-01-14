import React, { useState, useCallback } from "react";
import { Box, Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import Nav from "../Nav";
import LineChartContainer from "./LineChart";

export default function CallToActionWithIllustration() {
  const [data, setData] = useState([]);

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log(results.data);
        setData(results.data);
      },
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length) {
      parseFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
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
          <Box
            backgroundColor={"orange"}
            p={10}
            borderRadius={10}
            color={"white"}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <Text>
                  Drag 'n' drop some files here, or click to select files
                </Text>
              )}
            </div>
          </Box>
        </Stack>
      </Container>
      <Container
        minHeight={"3xl"}
        minWidth={"8xl"}
        width={"3xl"}
        height={"3xl"}
      >
        <LineChartContainer data={data} />
      </Container>
    </>
  );
}
