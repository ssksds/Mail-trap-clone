import { EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import Logo from "../Components/Logo";
import { MdReceipt, MdSettings } from "react-icons/md";

import ManualClose from "../Components/Account";
import Tabmenu from "../Components/TabMenu";

function MainPage() {
  return (
    <>
      <Flex flexDirection="row">
        <Box
          h="680px"
          w="350px"
          bg="#1a2e44"
          fontSize="xl"
          color="white"
          fontWeight="600"
        >
          <Logo />
          <Flex flexDirection="column" gap={12}>
            <Box display="block" w="80%">
              <i class="bi bi-envelope"></i>
              <EmailIcon color="white" w={"40px"} />
              EmailApp {">"}
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              Sandbox
            </Box>

            <Box ml="30px" bg="#38445e">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-inbox"
                viewBox="0 0 16 16"
              >
                <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
              </svg>
              Inboxes
            </Box>

            <Box>
              <Icon as={MdReceipt} w={"40px"} color="white" h={10} />
              Billing
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
              </svg>
              Usermangement
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-key-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              Api
            </Box>
            <Box>
              <Icon as={MdReceipt} w={"40px"} color="white" h={10} />
              Account Settings
            </Box>
          </Flex>
        </Box>
        <Box h="35px" borderBottom="1px solid teal" w="">
          <Flex w="1200px" gap={1000}>
            <GridItem>
              <Flex>
                <Text color="blue">Inboxes{">"}</Text>
                <Text>MyInbox</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <ManualClose />
            </GridItem>
          </Flex>
          <Tabmenu />
        </Box>
      </Flex>
      <Flex justifyContent="flex:center"></Flex>
    </>
  );
}
export default MainPage;
