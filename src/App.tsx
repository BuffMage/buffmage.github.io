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
          <Box>Below you will find the first trailer for the game, enjoy!</Box>
          <Box>Join the official Discord channel <b><Link href='https://discord.gg/6CMfXWaJTJ' isExternal>here</Link></b> to stay up to date and contribute to the game!</Box>
          <Box>Wishlist the game on Steam <b><Link href='https://store.steampowered.com/app/3059660/Banana_Simulator/' isExternal>here!</Link></b></Box>
          <Box paddingTop={5} fontSize={"x-large"}><b>Banana Simulator Trailer 1</b></Box>
        
        <div className="video-container">
        <iframe className='trailer' width="560" height="315" src="https://www.youtube.com/embed/R9wWrffgVp4?si=9Kz8Vq-966bZyHfr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
            <Image w={"12.5%"} src='./spinning_banana.gif' alt='A gif of a spinning wireframe banana.' alignItems={"center"} justifyContent={"center"}></Image>
            <Box paddingTop={5} fontSize={"xx-large"}>Simulating Bananas...<span className="banana-text">10%</span></Box>
            <div className="loading-bar">
                <div className="progress"></div>
            </div>
            <Box fontSize={"small"}><i>This is a loading bar that's pretty much just a countdown till release, which is around late October, please don't wait for the website to load it :)</i></Box>
        </Stack>
        </DarkMode>
      </Box>
    </ChakraProvider>
  );
}

export default App;
