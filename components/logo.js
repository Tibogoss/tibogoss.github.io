import Link from 'next/link'
import { Text, useColorModeValue, Icon } from '@chakra-ui/react'
import { TbAtomOff } from "react-icons/tb"
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 22px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  line-height: 20px;
  padding: 10px;

`

const Logo = () => {
  // Define colors for light/dark mode
  const iconColor = useColorModeValue('teal.500', 'teal.300');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  
  // Get current color mode for animation key
  const colorMode = useColorModeValue('light', 'dark');

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <motion.div
          whileHover="hover"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={colorMode}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              variants={{
                hover: { rotate: 180 }
              }}
              transition={{ 
                duration: 0.4, 
                ease: "easeInOut",
                opacity: { duration: 0.2 },
                hover: { duration: 0.2 }
              }}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Icon as={TbAtomOff} color={iconColor} />
            </motion.div>
          </AnimatePresence>
          
          <Text
            color={textColor}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Tibogoss
          </Text>
        </motion.div>
      </LogoBox>
    </Link>
  );
}

export default Logo;