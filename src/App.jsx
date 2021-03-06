import React from 'react'

import { Box, Text, Stack, Inline } from 'tenka'
import 'tenka/style.css'
import 'tenka/tenka.css'
import 'tenka/reset.css'

const DecoratedBox = ({
  label = 'Hello, there! General kenobi. This one honestly is masbul and this is a freaking great font!',
  ...restProps
}) => {
  return (
    <Box
      style={{ backgroundColor: 'rebeccapurple', color: 'white' }}
      px="sm"
      {...restProps}
    >
      <Text
        as="p"
        color="light"
        variant={{
          sphone: 'caption-1',
          phone: 'small',
          tablet: 'heading-3',
          desktop: 'heading-1',
          wide: 'display-1',
        }}
      >
        {label}
      </Text>
    </Box>
  )
}

const Homepage = () => {
  return (
    <div>
      <Stack
        style={{ backgroundColor: 'salmon' }}
        space={{
          sphone: 's',
          phone: 'm',
          tablet: 'xl',
          desktop: 'xxxl',
          wide: 'huge',
        }}
      >
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
      </Stack>
    </div>
  )
}

export default Homepage
