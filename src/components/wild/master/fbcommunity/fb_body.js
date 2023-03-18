import React from "react"
import styled from "@emotion/styled"
import {Flex, Box} from "@rebass/grid/emotion"

//import References from "../../../../components/wild/master/references"

import {TextElement} from "@nutrafol/nutrafol-ui-kit/dist/TextElement"
import {ButtonWild} from "@nutrafol/nutrafol-ui-kit/dist/ButtonWild"

import {data} from "../../../../data/fb_community"

const Wrapper = styled(Box)`
  background: #fff;
`

const Fbbody = () => {

  const {editorialish, join, references} = data

  return (
    <Wrapper className={`section section-last`}>
      <div className="fb-container ">
        <Flex flexWrap="wrap" className="fb-community wild-container " pt={[88, 88, 88, 192]}
          pb={[88, 88, 88, 140]}
          mx={[0, 0, 0, -2, "auto"]} maxWidth="1256px">
          <Box width={[1, 1, 1, 1 / 2]} mb={[16, 16, 24, 0]} px={[0, 0, 0, 2, "10px"]} alignSelf="center">
            <picture>
              <source media="(max-width: 767px)" srcSet={editorialish.images[0]}/>
              <source media="(max-width: 1023px)" srcSet={editorialish.images[1]}/>
              <source media="(min-width: 1024px)" srcSet={editorialish.images[2]}/>
              <img src={editorialish.images[2]} className="rounded-lg" alt=""/>
            </picture>
          </Box>
          <Box width={[1, 1, 1, 1 / 2]} pl={[0, 0, 0, 2, 4]} pr={[0, 0, 0, 2, 0]} alignSelf="center">
            <TextElement text={editorialish.title} element="h4"
              className="title--large text-master-base-black text-center mb-4 sm:mb-6 editorialish-heading"/>
            {editorialish.copy.map((item, i) =>
              <TextElement text={item} element="p"
                className={`body--large text-master-base-black text-center editorialish-copy ${editorialish.copy.length - 1 !== i ? "mb-2 lg:mb-6" : ""}`}
                key={item}/>
            )}
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mb={[88, 88, 64, 128]} className={`wild-container `}>
          <Box width={1} className="bg-master-base-secondary rounded-lg" px={[16, 48, 96]}
            py={[40, 40, 40, 96]}>
            <TextElement text={join.heading} element="h4"
              className="title--large text-master-base-black text-center mb-4 lg:mb-6"/>
            <ButtonWild
              arrowRight
              primary
              title={join.button.title}
              label={join.button.label}
              ctaLink={join.button.link}
              className="mx-auto block"
              trackObject={{
                name: "Outbound Link Clicked",
                destination: join.button.link,
                module_location: "bottom_fold",
                text: join.button.label,
                type: "button"
              }}
            />
          </Box>
        </Flex>
        {/*<References data={references}/>*/}
        {/*<Box mb={[0, 0, 0]}>*/}
        {/*  <FooterReallySimpleWild/>*/}
        {/*</Box>*/}
      </div>
    </Wrapper>
  )

}

export default Fbbody
