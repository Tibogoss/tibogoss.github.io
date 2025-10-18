import {
  Link,
  Container,
  Heading,
  Box,
  List,
  ListItem,
  Button,
  Text,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub, IoSchool } from 'react-icons/io5'
// Add your own project thumbnails here
// import thumbProject1 from '../public/images/[your-project-image]'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Looking for a Research Engineer position to help saving lives one day!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Thibaud Southiratn
          </Heading>
          <Text color="teal.500" fontWeight="semibold">
            MSc. & MEng. (AI / Computer Science / Chem+Bio)
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/thibaud.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Freshly graduated engineer <Text as="span" color="blue.400" fontWeight="semibold">based in Paris</Text> with an interest in leveraging AI for health-related problems.
          I am driven by the potential of technology to make a positive impact on people&apos;s lives.
          
          Working on better ways to identify target/property agnostic - and synthesizable -
          small molecules.
        </Paragraph>
        <Paragraph>
          <>Right now, I am a <Text as="span" color="purple.400" fontWeight="semibold">cheminformatics intern </Text> at NovAliX</>, working with the Drug Discovery team. 
          I am integrating AI-powered tools for ADME prediction and DEL Analysis to streamline the internal R&D pipeline.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021 - 2025</BioYear>
          Graduating from a dual-degree program with Seoul National University (MSc. at <Link href="https://bhi-kimlab.github.io/" target="_blank"><Text as="span" color="orange.300" fontWeight="semibold">BHI Lab</Text></Link>) and Télécom SudParis (MEng. &quot;Diplôme d&apos;Ingénieur&quot;) in Computer Science.
          Focused on AI for Biomedicine and Cheminformatics.
          My thesis work was published in <Text as="span" color="red.500" fontWeight="semibold">ICML&apos;25</Text>.
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          Prepared for the French &quot;Grandes Écoles&quot; entrance exams.
          Got strong foundations in <Text as="span" color="green.400" fontWeight="semibold">Mathematics, Physics, and Chemistry</Text>.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from high-school with highest honors (Scientific track).
        </BioSection>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Bourg-la-Reine, France.
          
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
        <Box mb={4}>
          <Flex justify="space-between" align="flex-start" mb={2}>
            <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
              CombiMOTS: Combinatorial Multi-Objective Tree Search for Dual-Target Molecule Generation
            </Text>
            <Flex align="center" gap={2}>
              <Text fontSize="sm" color="red.500" fontWeight="semibold">ICML&apos;25</Text>
              <Link href="https://github.com/Tibogoss/CombiMOTS" target="_blank">
                <IoLogoGithub size="16" color="#333" />
              </Link>
            </Flex>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            <Text as="span" fontWeight="semibold">Thibaud Southiratn</Text>, Bonil Koo, Yijingxiu Lu, Sun Kim
          </Text>
        </Box>
        <Box mb={4}>
          <Flex justify="space-between" align="flex-start" mb={2}>
            <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
              Web-based Exploratory Data Mining System for Analyzing the Gene-level Relationship between Intratumoral Heterogeneity of Promoter DNA Methylation and Drug Response
            </Text>
            <Flex align="center" gap={2}>
              <Text fontSize="sm" color="red.500" fontWeight="semibold">2024 KCC</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            Tae Hoon Kweon, Bonil Koo, Sungjoon Park, <Text as="span" fontWeight="semibold">Thibaud Southiratn</Text>, Sun Kim
          </Text>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          News &amp; Awards
        </Heading>
        <Box mb={3}>
          <Text fontSize="sm" lineHeight="tall">
            🏆 <Text as="span" color="red.500" fontWeight="semibold">[10/2025]</Text> I ranked 1st in Owkin&apos;s <Link href="https://www.linkedin.com/posts/owkin_day-3-of-the-decoding-biology-hackathon-activity-7379172918863511552-dO9w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf_NSwBq3Ds5IQY48Vp2WMmj70bJAGAu04" target="_blank" color="blue.400">Decoding Biology Hackathon</Link>!
          </Text>
        </Box>
        <Box mb={3}>
          <Text fontSize="sm" lineHeight="tall">
            📰 <Text as="span" color="red.500" fontWeight="semibold">[08/2025]</Text> Graduated from SNU :( See you 서울!
          </Text>
        </Box>
        <Box mb={3}>
          <Text fontSize="sm" lineHeight="tall">
            📰 <Text as="span" color="red.500" fontWeight="semibold">[05/2025]</Text> Yaaay!! My first paper got accepted to ICML&apos;25! {'>'} Vancouver gogo 🇨🇦!
          </Text>
        </Box>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Box mb={4}>
          <Flex justify="space-between" align="flex-start" mb={2}>
            <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
              Selective CDK7 Inhibitor Generation
            </Text>
            <Link href="https://github.com/Tibogoss/KinSel" target="_blank">
              <IoLogoGithub size="16" color="#333" />
            </Link>
          </Flex>
          <Text fontSize="sm" color="blue.500" fontWeight="semibold" mb={2}>
            PARETO OPTIMIZATION • MONTE-CARLO TREE SEARCH • PROPERTY PREDICTION
          </Text>
          <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
            • Adapted CombiMOTS to attempt unveiling molecules biochemically active to CDK7 & inactive to CDK1-2-5-9-12-13.
          </Text>
          <Text fontSize="sm" textAlign="justify" lineHeight="tall">
            • Identified potent candidates with motifs/warheads (acrylamide, chloroacetamide) found in relevant literature.
          </Text>
        </Box>
        <Box mb={4}>
          <Flex justify="space-between" align="flex-start" mb={2}>
            <Text fontWeight="semibold" flex="1" pr={4} lineHeight="tall">
              Efficient Molecule Captioning
            </Text>
            <Link href="https://github.com/Tibogoss/FasText-ChemT5" target="_blank">
              <IoLogoGithub size="16" color="#333" />
            </Link>
          </Flex>
          <Text fontSize="sm" color="blue.500" fontWeight="semibold" mb={2}>
            TRANSFORMERS • CHEMICAL LANGUAGE MODELS
          </Text>
          <Text fontSize="sm" mb={1} textAlign="justify" lineHeight="tall">
            • Fine-tuned a Chemical LM (Text+ChemT5) to improve performance (up to +5.4%) on the &quot;mol2text&quot; task.
          </Text>
          <Text fontSize="sm" textAlign="justify" lineHeight="tall">
            • Adapted an implementation of Speculative Decoding to infer captions faster (+36.5%) without changing output distribution.
          </Text>
        </Box>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          How I spend my time
        </Heading>
        <Paragraph>
        Photography for creativity (yes it&apos;s cliché), gaming to remain competitive and working out to stay in shape!
        </Paragraph>
      </Section>

      <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Tibogoss" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Tibogoss
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/thibaud-southiratn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://scholar.google.com/citations?hl=fr&user=mXtBHFAAAAAJ" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoSchool />}
              >
                Google Scholar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:southiratn.thibaud@gmail.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* Add your own projects here
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="[your-project-url]"
            title="[Your Project Title]"
            thumbnail={[your-thumbnail]}
          >
            [Your project description]
          </GridItem>
        </SimpleGrid>
        */}

        {/* Newsletter section - update with your own newsletter/blog
        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          [Your newsletter description]
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="[your-newsletter-url]"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            [Your CTA text]
          </Button>
        </Box>
        */}
      </Section>
    </Container>
  </Layout>
)

export default Home
