import { ChevronDownIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Card, CardBody, CardFooter, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { format } from "@formkit/tempo";

export const CardTrabajo = ({ currentJobs, handleToggleExpand, asideVisible, expandedCards }) => {
  return currentJobs && currentJobs.map((e) => (
      <Box key={e.id} mb={8} mt={18}>
         <Card
            key={e.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            style={{
               backgroundImage: `linear-gradient(to left, #0083a3, #00adbf)`,
            }}
            borderRadius='2rem'
            onClick={() => handleToggleExpand(e.id)}
            cursor="pointer"
            w={asideVisible ? 1250 : 1400}
         >
            <Icon
               as={ChevronDownIcon}
               w={12}
               h={12}
               ml={2}
               mt={1}
               position="absolute"
               transform={expandedCards[e.id] ? 'rotate(180deg)' : 'none'}
            />
            <Image
               objectFit='cover'
               maxW={{ base: '50%', sm: '80px' }}
               maxH={{ base: '50%', sm: '80px' }}
               src={e.company_logo}
               alt='Logo de la compañía'
               borderRadius='50%'
               mt={20}
               ml={10}
            />
            <Stack
               w="100%"
               direction={{ base: 'column', sm: 'row' }}
               marginLeft='8rem'
            >
               <CardBody>
                  <Flex>
                     <Heading mt={10} ml={-24} size='md' fontSize='1.8rem' height='5rem'>{e.title}</Heading>
                  </Flex>
                  <Text mt={-25} ml={-24}>
                     <Badge borderRadius='1rem' variant="subtle" backgroundColor="white" mr={4} fontSize='1.3rem' color="grey.300" marginBottom='2rem'>
                        {e.job_type}
                     </Badge>
                     <Badge borderRadius='1rem' variant="subtle" backgroundColor="white" mr={4} fontSize='1.3rem' color="grey.300" marginBottom='2rem'>
                        {e.category}
                     </Badge>
                  </Text>
                  {expandedCards[e.id] && (
                     <Text py='5' ml={-24}>
                        <Badge borderRadius='1rem' variant="subtle" backgroundColor="white" mr={4} fontSize='1.3rem' color="grey.300" marginBottom='3rem'>
                           {e.company_name}
                        </Badge>
                        <Badge
                           borderRadius='1rem'
                           variant="subtle"
                           backgroundColor="white"
                           mr={4}
                           fontSize='1.3rem'
                           color="grey.300"
                           marginBottom='3rem' >
                           {typeof e.tags === Array ? e.tags.length <= 9 ? e.tags.join(', ') : e?.tags.join(', ').slice(50, 100) : e.tags.length >= 9 ? e.tags.slice(0, 11) : e.tags}
                        </Badge>
                     </Text>
                  )}
               </CardBody>
               <CardFooter>
                  <Text marginRight='-8rem' marginTop='1'><p>Remoto 🌍</p></Text>
                  <Flex justifyContent="flex-end" alignItems="center">
                     <Text marginRight='-24rem' marginTop='8'><p>{format(e.publication_date, "short")}</p></Text>
                     <Button borderRadius='2rem' variant='solid' backgroundColor='#1c9ebc' textColor='black' marginRight='13rem' marginTop='-8rem' w="13rem" h='4rem' fontSize='1.5rem'  >
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                           Ver Trabajo
                        </a>
                     </Button>
                  </Flex>
               </CardFooter>
            </Stack>
         </Card>
      </Box >
   ));
}