import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import DnaAnimation from '../dna-animation'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Thibaud's homepage" />
        <meta name="author" content="Thibaud Southiratn" />
        <meta name="author" content="tibogoss" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Thibaud Southiratn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tibogoss" />
        <meta name="twitter:creator" content="@tibogoss" />
        <meta name="twitter:image" content="/dna_thumbnail.png" />
        <meta property="og:site_name" content="Thibaud Southiratn" />
        <meta name="og:title" content="Thibaud Southiratn" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/dna_thumbnail.png" />
        <title>Thibaud Southiratn - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <DnaAnimation />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
