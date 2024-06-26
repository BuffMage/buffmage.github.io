import './App.css';
import { Box, ChakraProvider, DarkMode, Flex, Image, Link, Stack, extendTheme, useColorMode } from '@chakra-ui/react';
import Simple from './Navbar';
import {theme} from "./theme"

/* const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    backgroundColor: "gray.100"
  }
}) */

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  if (colorMode === "light") toggleColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Simple />
        {/* <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>   */}
        <DarkMode>
        <Stack alignItems={"center"}>
          <Box>This is the website for the upcoming game <b>Banana Simulator</b> that is currently in development! This website is also still under construction.</Box>
          <Box>Below you will find the first trailer for the game, enjoy! Join our official Discord channel <b><Link href='https://discord.gg/6CMfXWaJTJ' isExternal>here</Link></b> to stay up to date and contribute to the game!</Box>
          <Box paddingTop={5} fontSize={"x-large"}><b>Banana Simulator Trailer 1</b></Box>
        <iframe title="Banana Simulator Trailer 1" src="https://drive.google.com/file/d/1S3Vtft759zC3db0_a0wo9i6Kk6A_kh_9/preview" width="960px" height="540px" allow="autoplay"></iframe>
            <Image w={"12.5%"} src='./spinning_banana.gif' alt='A gif of a spinning wireframe banana.' alignItems={"center"} justifyContent={"center"}></Image>
            <Box paddingTop={5} fontSize={"xx-large"}>Simulating Bananas...<span className="banana-text">10%</span></Box>
            <div className="loading-bar">
                <div className="progress"></div>
            </div>
            <Box fontSize={"small"}><i>This is a loading bar for approximately how much of the game I have complete, please don't wait for the website to load it :)</i></Box>
        </Stack>
        </DarkMode>
      </Box>
    </ChakraProvider>
  );
}

export default App;
