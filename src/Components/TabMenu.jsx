import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  ListItem,
  ListIcon,
  List,
  Button,
  Link
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";

function Tabmenu() {
  return (
    <Box w="60%">
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>
            SMTP Settings
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>
            Email Address
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>
            Auto Forward
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>
            Manual Forward
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>
            Team Members
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading size="lg">SMTP / POP3 Reset Credentials</Heading>
            <Text>
              Use these settings to send messages directly from your email
              client or mail transfer agent.
            </Text>
            <Text size="xl">
              Don't disclose your username or password as this may result in
              your inbox getting filled up with spam.
            </Text>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box>Show Credentials</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <TableContainer>
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>To convert</Th>
                          <Th>into</Th>
                          <Th isNumeric>multiply by</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>inches</Td>
                          <Td>millimetres (mm)</Td>
                          <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                          <Td>feet</Td>
                          <Td>centimetres (cm)</Td>
                          <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                          <Td>yards</Td>
                          <Td>metres (m)</Td>
                          <Td isNumeric>0.91444</Td>
                        </Tr>
                      </Tbody>
                      <Tfoot>
                        <Tr>
                          <Th>To convert</Th>
                          <Th>into</Th>
                          <Th isNumeric>multiply by</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Stack spacing={8} direction="row" bg="gray.200" w="40%">
              <Text>
                `{}
                Content-Type: multipart/alternative; boundary="boundary-string"
                --boundary-string Content-Type: text/plain; charset="utf-8"
                Content-Transfer-Encoding: quoted-printable Content-Disposition:
                inline Congrats for sending test email with Mailtrap! Inspect it
                using the tabs above and learn how this email can be improved.
                Now send your email using our fake SMTP server and integration
                of your choice! Good luck! Hope it works. --boundary-string
                Content-Type: text/html; charset="utf-8"
                Content-Transfer-Encoding: quoted-printable Content-Disposition:
                inline
              </Text>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Heading>Inbox Email Address</Heading>
            <Text>
              Send emails to Mailtrap from your CRM or sending service
              (Sendgrid, Gmail, etc.) without additional integration. Simulate
              sending to multiple recipients with "+" email alias (i.e
              d28016a455-001e2f+1@inbox.mailtrap.io).
            </Text>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  mitate sending to unique recipients.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Route emails from the third-party sending tools to Mailtrap.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Perform email app load testing and inspect behavior of each of
                  your email servers using different testing email addresses and
                  inboxes.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
              <Box>
                <Button>Upgarde</Button>
                <Link> Check how it works</Link>
              </Box>
              <Text>
                This feature is available on Business, Premium, or Enterprise
                plans.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Heading>Auto Forwarding Rules</Heading>
            <Text>
              Emails sent to the allowed addresses and/or domains will be
              forwarded to real recipients.
            </Text>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  mitate sending to unique recipients.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Route emails from the third-party sending tools to Mailtrap.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Perform email app load testing and inspect behavior of each of
                  your email servers using different testing email addresses and
                  inboxes.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
              <Box>
                <Button>Upgarde</Button>
                <Link> Check how it works</Link>
              </Box>
              <Text>
                This feature is available on Business, Premium, or Enterprise
                plans.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Heading>Manual Email Forwarding</Heading>
            <Text>
              Send emails to Mailtrap from your CRM or sending service
              (Sendgrid, Gmail, etc.) without additional integration. Simulate
              sending to multiple recipients with "+" email alias (i.e
              d28016a455-001e2f+1@inbox.mailtrap.io).
            </Text>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  mitate sending to unique recipients.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Route emails from the third-party sending tools to Mailtrap.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Perform email app load testing and inspect behavior of each of
                  your email servers using different testing email addresses and
                  inboxes.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
              <Box>
                <Button>Upgarde</Button>
                <Link> Check how it works</Link>
              </Box>
              <Text>
                This feature is available on Business, Premium, or Enterprise
                plans.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Heading>Inbox Team Members</Heading>
            <Text>
              Send emails to Mailtrap from your CRM or sending service
              (Sendgrid, Gmail, etc.) without additional integration. Simulate
              sending to multiple recipients with "+" email alias (i.e
              d28016a455-001e2f+1@inbox.mailtrap.io).
            </Text>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  mitate sending to unique recipients.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Route emails from the third-party sending tools to Mailtrap.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Perform email app load testing and inspect behavior of each of
                  your email servers using different testing email addresses and
                  inboxes.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
              <Box>
                <Button>Upgarde</Button>
                <Link> Check how it works</Link>
              </Box>
              <Text>
                This feature is available on Business, Premium, or Enterprise
                plans.
              </Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
export default Tabmenu;
