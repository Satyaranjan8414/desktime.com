import { ReactNode } from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillSkype,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";
import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Logo = (props: any) => {
  return (
    <>
      <Image src="https://logotyp.us/files/desktime.svg" alt="log" />
      <Box display="flex" >
        <NavLink to="">
          <AiFillFacebook size={35} />
        </NavLink>
        <NavLink to="">
          <AiFillTwitterSquare size={35} />
        </NavLink>
        <NavLink to="">
          <AiFillYoutube size={35} />
        </NavLink>
        <NavLink to="">
          <AiFillLinkedin size={35} />
        </NavLink>
        <NavLink to="">
          <AiFillSkype size={35} />
        </NavLink>
        <NavLink to="">
          <AiOutlineWhatsApp size={35} />
        </NavLink>
      </Box>
    </>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text  fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box
     
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <Text fontSize={"sm"}>
                © 2022 DeskTime WebSite. All rights reserved
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link to="">Home</Link>
              <Link to="">Terms</Link>
              <Link to="">Privacy</Link>
              <Link to="">Pricing</Link>
              <Link to="">Cookies</Link>
              <Link to="">Affiliate Terms</Link>
              <Link to="">Download App</Link>
              <Link to="">DeskTime Languages</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Learn More</ListHeader>
              <Link to="">All Resources</Link>
              <Link to="">About</Link>
              <Link to="">Case Studies</Link>
              <Link to="">Demo</Link>
              <Link to="">DeskTime for Business</Link>
              <Link to="">DeskTime for Freelancer</Link>
              <Link to="">DeskTime for Freelancer</Link>
              <Link to="">FAQ</Link>
              <Link to="">Webinars</Link>
              <Link to="">Blog</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Features</ListHeader>
              <Link to="">All Features</Link>
              <Link to="">BaseCamp</Link>
              <Link to="">Mobile App</Link>
              <Link to="">ScreenShots</Link>
              <Link to="">Shift Schedule</Link>
              <Link to="">Offline Time Tracking</Link>
              <Link to="">Feature Request</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Help-Center</ListHeader>
              <Link to="">Contact Us</Link>
              <Link to="">Schedule a Call</Link>
              <Link to="">Send a Email</Link>
              <Link to="">Open Chats</Link>
              <Link to="">Legal</Link>
              <Link to="">Privacy Policy</Link>
              <ListHeader>Phone Support</ListHeader>
              <Link to="">USA: +1(315)6465789</Link>
              <Link to="">EU: +371 6465789</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        backgroundColor="darkgrey"
        alignContent="center"
        alignItems="center"
      >
        <Box>@2011-2022 DeskTime</Box>
        <Box>
          <FcCustomerSupport size={35} />
          <Image
            src="https://www.svgrepo.com/show/303146/ethereum-logo.svg"
            alt="comapany"
            width="100px"
          />
        </Box>
      </Box>
    </>
  );
}
