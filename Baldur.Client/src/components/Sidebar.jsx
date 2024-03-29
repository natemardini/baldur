import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Wrapper, COLORS } from "../shared/stylistics";

export const Sidebar = () => {
    return (
        <Container>
            Item 1
        </Container>
    )
}

const Container = styled(Wrapper)`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  background-color: ${COLORS.Mauve};
  color: ${COLORS.Silver};
  overflow-x: hidden;
  padding-top: 80px;
  padding-left: 16px;
`

Sidebar.propTypes = {}
