import React, { useLayoutEffect}  from "react"
import styled from "@emotion/styled"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollToPlugin } from "gsap/all"
import { queries } from "@nutrafol/nutrafol-ui-kit/styles/mediaqueries"
import { TextElement } from "@nutrafol/nutrafol-ui-kit/dist/TextElement"
import { ButtonWild } from "@nutrafol/nutrafol-ui-kit/dist/ButtonWild"

import DownArrow from "-!svg-react-loader!./caret-down-icon.svg"
import { segmentEvent } from "@nutrafol/nutrafol-ui-kit/utils/segmentfunctions"

const HeroScrollWrap = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  @supports (-webkit-touch-callout: none) {
    /* The hack for Safari */
    height: -webkit-fill-available;
  }
`
const AnimatedSection = styled.section`
  //border: 1px red dotted;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 295px;
  //height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  //opacity: 0;
  transition: all 0.25s linear;
  &.active {
    opacity: 1;
  }
  .section-content {
    flex-grow: 1;
    @media (max-width: 767px) {
      h4.title--medium {
        font-size: 24px !important;
        line-height: 28px !important;
      }
      h4.title--large {
        font-size: 28px !important;
        line-height: 34px !important;
      }
    }
  }
  ${queries.medium`
    width: 445px;
  `}
  ${queries.large`
    &.wide {
      width: 670px;
    }
    h4.body--xlarge {
      font-size: 24px !important;
      line-height: 34px !important;
    }
  `}
`
const LearnMoreButton = styled.button`
  opacity: 0;
  position: absolute;
  padding: 24px;
  width: 150px;
  left: calc(50% - 75px);
  bottom: 0;
  @media (min-width: 821px) {
    display: none;
  }
`
const SVGWrap = styled.div`
  svg {
    margin: 8px auto 0;
  }
`
const VectorWrap = styled.div`
  &.svg-0 {
    opacity: 0;
    svg {
      width: 276px;
      margin: 32px auto 0;
      ${queries.medium`
        margin: 56px auto 0;
      `}
      ${queries.large`
        width: 370px;
        margin: 56px auto 0;
      `}
    }
  }
  &.svg-2 {
    svg {
      width: 202px;
      margin: 16px 0;
      ${queries.large`
        margin: 24px 0;
        width: 320px;
      `}
    }
  }
`

gsap.registerPlugin(ScrollTrigger)

const HeroScroll = ({ scrollSlides, idx=0 }) => {

  useLayoutEffect(() => {

    // fade in first slide parts seperately
  
    gsap.to(".scroll-section.scroll-section-0 .learn-more", {
      autoAlpha: 1,
      duration: .5,
      delay: 1.75
    })
    
    gsap.to(".scroll-section.scroll-section-0 .svg-0", {
      autoAlpha: 1,
      duration: .5,
      delay: 1.25
    })

  }, [scrollSlides])

  const learnMoreClick = () => {
    segmentEvent("Marketing CTA Clicked", {
      destination: "/shedthesilence/",
      module_location: "mid_fold",
      text: "Learn More",
      type: "link",
    })
    window.fullpage_api.moveTo(4)
    //document.querySelector(".fb-community").scrollIntoView(true)
  }

  return (
    <HeroScrollWrap>
      {[scrollSlides[idx]].map((section) => {
        let Vector = section.vector ? section.vector : null
        return (
          <AnimatedSection className={`scroll-section scroll-section-${idx} ${idx === 2 ? "wide" : ""}`} key={`scroll-section-${idx}`}>
            <div className="section-content">
              {Vector ? (
                <VectorWrap className={`svg-${idx}`}>
                  {/*<Vector />*/}
                </VectorWrap>
              ) : null}
              {section.copy ? (
                <TextElement text={section.copy} element="h4" className={section.copyClasses} />
              ) : null}
              {section.subCopy ? (
                <TextElement text={section.subCopy} element="h4" className={section.subCopyClasses} />
              ) : null}
              {section.button ? (
                <ButtonWild
                  primary
                  arrowRight
                  label={section.button.label}
                  title={section.button.title}
                  ctaLink={section.button.link}
                  className="mt-10"
                  trackObject={{
                    name: "Outbound Link Clicked",
                    destination: section.button.link,
                    module_location: "hero",
                    text: section.button.label,
                    type: "button"
                  }}
                />
              ) : null}
            </div>
            {/*<a onClick={() => learnMoreClick()}>learnMoreClick</a>*/}
            {section.showLearnMore ? (
              <LearnMoreButton className="learn-more" onClick={() => learnMoreClick()}>
                <TextElement text="Learn More" element="h5" className="text-master-base-black body--large text-center" />
              </LearnMoreButton>
            ) : null}
          </AnimatedSection>
        )}
      )}
    </HeroScrollWrap>
  )

}

export default HeroScroll