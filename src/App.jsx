import React from "react"

import "./../dist/styles/reset.css"
import "./../dist/style.css"

// import { Box } from "../dist/tenka.es"
// import "./styles/index.css"

import { Box } from "./../dist/tenka.es"
// import * as styles from "./scoped.module.css"

const Homepage = () => {
  return (
    <Box display="grid" gap="xxl" padding="xl">
      <Box
        as="section"
        borderRadius="field"
        padding={{ phone: "ml", desktop: "xl" }}
        display={{ phone: "block", desktop: "flex" }}
        alignItems="center"
        justifyContent="center"
        background={{
          phone: "primary-brand",
          tablet: "primary-inverse",
          desktop: "primary",
        }}
        color={{ phone: "primary-inverse", desktop: "primary" }}
        boxShadow="shallow-below"
        fontWeight="medium"
      >
        Versatile Box Component
      </Box>
      <Box
        as="section"
        borderRadius="m"
        padding={{ phone: "ml", desktop: "xl" }}
        display={{ phone: "block", desktop: "flex" }}
        alignItems="center"
        justifyContent="center"
        background={{
          phone: "primary-brand",
          tablet: "primary-inverse",
          desktop: "primary",
        }}
        color={{ phone: "primary-inverse", desktop: "primary" }}
        boxShadow="medium-below"
        fontWeight="medium"
      >
        Versatile Box Component
      </Box>
    </Box>
  )
}

export default Homepage
