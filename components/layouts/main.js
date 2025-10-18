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
        <meta name="description" content="AI Research Engineer specializing in Cheminformatics, Drug Discovery, and Biomedicine. MSc from Seoul National University, MEng from Télécom SudParis." />
        <meta name="keywords" content="Thibaud Southiratn, AI, Cheminformatics, Drug Discovery, Machine Learning, Deep Learning, Seoul National University, Télécom SudParis" />
        <meta name="author" content="Thibaud Southiratn" />
        <link rel="canonical" href="https://tibogoss.github.io/" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Thibaud Southiratn | Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tibogoss" />
        <meta name="twitter:creator" content="@tibogoss" />
        <meta name="twitter:description" content="ML Research Engineer specializing in Cheminformatics, Drug Discovery, and Biomedicine. MSc from Seoul National University, MEng from Télécom SudParis." />
        <meta name="twitter:image" content="https://tibogoss.github.io/dna_thumbnail.png" />
        <meta property="og:site_name" content="Thibaud Southiratn" />
        <meta property="og:title" content="Thibaud Southiratn - ML Research Engineer | Portfolio" />
        <meta property="og:description" content="ML Research Engineer specializing in Cheminformatics, Drug Discovery, and Biomedicine. MSc from Seoul National University, MEng from Télécom SudParis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tibogoss.github.io/" />
        <meta property="og:image" content="https://tibogoss.github.io/dna_thumbnail.png" />
        <title>Thibaud Southiratn - ML Research Engineer | Portfolio</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Thibaud Southiratn',
              url: 'https://tibogoss.github.io/',
              image: 'https://tibogoss.github.io/images/thibaud.jpeg',
              jobTitle: 'AI Research Engineer',
              description: 'AI Research Engineer specializing in Cheminformatics, Drug Discovery, and Biomedicine',
              alumniOf: [
                {
                  '@type': 'Organization',
                  name: 'Seoul National University',
                  sameAs: 'https://en.wikipedia.org/wiki/Seoul_National_University'
                },
                {
                  '@type': 'Organization',
                  name: 'Télécom SudParis',
                  sameAs: 'https://en.wikipedia.org/wiki/T%C3%A9l%C3%A9com_SudParis'
                }
              ],
              sameAs: [
                'https://github.com/Tibogoss',
                'https://linkedin.com/in/thibaud-southiratn',
                'https://scholar.google.com/citations?hl=fr&user=mXtBHFAAAAAJ'
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Cheminformatics',
                'Drug Discovery',
                'Biomedicine',
                'Deep Learning'
              ]
            })
          }}
        />
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
