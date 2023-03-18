import React from "react"
import styled from "@emotion/styled"
import { Flex, Box } from "@rebass/grid/emotion"
import { ButtonWild } from "@nutrafol/nutrafol-ui-kit/dist/ButtonWild"
import { TextElement } from "@nutrafol/nutrafol-ui-kit/dist/TextElement"
import { queries } from "@nutrafol/nutrafol-ui-kit/styles/mediaqueries"

const BannerWrapper = styled(Flex)``

const BannerImage = styled(Box)`
  ${queries.large`
    > img {
      height: 100%;
      object-fit: cover;
    }
  `}
`
const BannerContent = styled(Box)`
  background-image: linear-gradient(112deg, rgba(222, 221, 214, 0.64) 0%, rgba(212, 220, 208, 0.62) 25%, rgba(202, 218, 208, 0.6) 50%, rgba(193, 210, 214, 0.56) 100%), linear-gradient(113deg, #e8e5c6 0%, #d7e2bf 14.29%, #c2dfb9 28.57%, #b4dabe 42.86%, #afd2c3 57.14%, #a9cac4 71.43%, #9fbcc5 100%);
  ${queries.large`
    > div {
      display: flex;
      flex-wrap: wrap;
      align-self: center;
      height: 100%;
      align-content: center;
      .body--large {
        max-width: 490px
      }
    }
  `}
`
const SVGWrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  ${queries.xLarge`
    margin-bottom: 32px;
  `}
  svg {
    width: 145px;
    height: auto;
    ${queries.medium`
      width: 202px;
    `}
    ${queries.xLarge`
      width: 250px;
    `}
  }
`

const Banner = ({ data }) => {

  const { images, vector, copy, longcopy, btn } = data

  const Vector = vector
  
  return (
    <BannerWrapper flexWrap="wrap" className="wild-container" mx={[0,0,0,"auto"]}>
      <BannerImage 
        width={[1, null, null, 1/2]}
        pr={[0,0,0,"4px"]}
        mb={[8,null,null,0]}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={images[0]}/>
          <source media="(max-width: 1023px)" srcSet={images[1]}/>
          <source media="(min-width: 1024px)" srcSet={images[2]}/>
          <img src={images[2]} className="rounded-lg" alt="" />
        </picture>
      </BannerImage>
      <Box
        width={[1, null, null, 1/2]}
        pl={[0,0,0,"4px"]}
      >
        <Flex flexWrap="wrap" height={[null,null,null,"100%"]}>
          <BannerContent px={[16,null,60,null,96]} py={[22,null,48, 24]} className="rounded-lg" height={[null,null,null,"100%"]} alignItems={[null,null,null,"center"]}>
            <div>
              <SVGWrap>
                <Vector />
              </SVGWrap>
              <TextElement text={copy} element="p" className="title--medium text-master-base-black pb-4" />
              <TextElement text={longcopy} element="p" className="body--large text-master-base-black pb-4 md:pb-6 lg:pb-8"/>
              <Box width={1} my={12}>
                <ButtonWild
                  primary
                  arrowRight
                  label={btn.label}
                  ctaLink={btn.link}
                  trackObject={{
                    name: "Marketing CTA Clicked",
                    destination: btn.link,
                    module_location: "bottom_fold",
                    text: btn.label,
                    type: "button"
                  }}
                />
              </Box>
            </div>
          </BannerContent>
        </Flex>
      </Box>
    </BannerWrapper>
  )
  
}

export default Banner
