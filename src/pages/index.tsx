import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

export default function Index() {
  return (
    <Box maxW='3xl' py={20} mb='30px' mx='auto'>
      <Flex pb={3} justify='center'>
        <Image w={400} filter='brightness(125%)' src="/img/logo-mini.png" />
      </Flex>
      <Text fontSize='4xl' fontWeight={800} textAlign='center'>
        Voice of the Lord
      </Text>
      <Text textColor='white.50' textAlign='center' mt={3}>
        Discord bot with multipurpose features for server moderation, management, ticketing and much more!
      </Text>
      <Flex mt={10} justify='center'>
        <Link
          href={"https://discord.com/oauth2/authorize?client_id=916830010290085978&permissions=8&scope=applications.commands+bot"}
          px={6}
          py={4}
          rounded='xl'
          boxShadow='0 10px 15px -3px rgba(103, 117, 138, 0.2)'
          bgGradient='linear(to-bl, blue.700, blue.500)'
          transitionProperty='opacity'
          transitionDuration='300ms'
          _hover={{
            opacity: 0.8
          }}
        >
          Invite VOTL Bot
        </Link>
      </Flex>
    </Box>
  );
}
