import React from "react"
import styled from "@emotion/styled"
import { Box } from "@rebass/grid/emotion"


import HeroAnimated from "../components/wild/master/fbcommunity/heroanimated"


import { data } from "../data/fb_community"
import Helmet from "react-helmet"

const Wrapper = styled(Box)`
`

const Shedthesilence = () => {
  
  const { seo, heroAnimated } = data

  return (
    <Wrapper>

      <Helmet>
        <script src={`/gatsby-assets/js/fullpage.dragAndMove.min.js`}></script>
      </Helmet>
      <HeroAnimated {...heroAnimated} />
    </Wrapper>
  )

}

export default Shedthesilence
