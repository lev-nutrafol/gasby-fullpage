import React, { useState, useEffect, useLayoutEffect } from "react"

import styled from "@emotion/styled"
import gsap from "gsap"
import ReactFullpage from '@fullpage/react-fullpage'
import { TextElement } from "@nutrafol/nutrafol-ui-kit/dist/TextElement"
import { queries } from "@nutrafol/nutrafol-ui-kit/styles/mediaqueries"

import HeroScroll from "./heroscroll"
import Fbbody from "./fb_body"

//const DEVMODE = process.env.GATSBY_DEVMODE==='1'

/*
 * NOTE: if using fullpage extensions/plugins put them here and pass it as props https://github.com/alvarotrigo/react-fullpage
 * const pluginWrapper = () => {
 *   require('../../../../../static/gatsby-assets/js/fullpage.dragAndMove.min')
 * }
 */

const BannerContainer = styled.div`
  -webkit-overflow-scrolling: touch;
  /***
    Fullpage overrides
   */
  .section {
      &:not(.section-last) {
        ${queries.medium`
       margin-top: 0 !important;
    `}
    }
  }
  /***
  Fullpage overrides end
 */
  width: 100%;
 // background-image: linear-gradient(112deg, rgba(222, 221, 214, 0.64) 0%, rgba(212, 220, 208, 0.62) 25%, rgba(202, 218, 208, 0.6) 50%, rgba(193, 210, 214, 0.56) 100%), linear-gradient(113deg, #e8e5c6 0%, #d7e2bf 14.29%, #c2dfb9 28.57%, #b4dabe 42.86%, #afd2c3 57.14%, #a9cac4 71.43%, #9fbcc5 100%);

  &.first-animation-complete {
    .shed-story {
      &:before {
        animation: fadeOutOpacity 1.5s linear forwards;
      }
    }
    &.scroll {
      background-image: linear-gradient(112deg, rgba(222, 221, 214, 0.64) 0%, rgba(212, 220, 208, 0.62) 25%, rgba(202, 218, 208, 0.6) 50%, rgba(193, 210, 214, 0.56) 100%), linear-gradient(113deg, #e8e5c6 0%, #d7e2bf 14.29%, #c2dfb9 28.57%, #b4dabe 42.86%, #afd2c3 57.14%, #a9cac4 71.43%, #9fbcc5 100%);
      &.show-featured-words {
        h4 {
          .animated-text {
            color: rgba(255,255,255,.4);
          }
        }
      }
      &:not(.show-featured-words) {
        .animated-text {
          display: none;
        }
      }
    }
  }
`
const HeroAnimatedWrap = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  @supports (-webkit-touch-callout: none) {
    /* The hack for Safari */
    height: -webkit-fill-available;
  }
  &.below-fold {
    background-image: linear-gradient(112deg, rgba(222, 221, 214, 0.64) 0%, rgba(212, 220, 208, 0.62) 25%, rgba(202, 218, 208, 0.6) 50%, rgba(193, 210, 214, 0.56) 100%), linear-gradient(113deg, #e8e5c6 0%, #d7e2bf 14.29%, #c2dfb9 28.57%, #b4dabe 42.86%, #afd2c3 57.14%, #a9cac4 71.43%, #9fbcc5 100%);
  }
  &.shed-story {
    &::before {
      content: "";
      position: absolute;
      opacity: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(73.41% 40.55% at 0% 97.75%, rgba(208, 232, 229, 0.9) 0%, rgba(116, 169, 165, 0) 100%),radial-gradient(144.93% 60.12% at 6.12% 5.91%, rgba(21, 86, 89, 0.7) 6.77%, rgba(255, 255, 255, 0.021) 100%),radial-gradient(74.41% 67.69% at 100% 97.49%, rgba(30, 135, 123, 0.5) 0%, rgba(209, 248, 243, 0) 100%),radial-gradient(59.97% 59.97% at 90% 5.27%, rgba(119, 188, 182, 0.5) 0%, rgba(94, 145, 140, 0.15) 100%),#6BABA5;
    }
  }
`
const AnimatedSection = styled.section`
  position: absolute;
  top: calc(50% + 23px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 265px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${queries.medium`
    width: 300px;
    top: calc(50% + 40px);
  `}
  ${queries.large`
    width: 460px;
  `}
  .section-content {
    // hidden to remove flash on first load
    opacity: 0;
    display: block;
    width: 100%;
    @media (max-width: 767px) {
      h4.title--large {
        font-size: 28px !important;
        line-height: 34px !important;
      }
    }
  }
  &.animated {
    span.default {
      animation: fadeOutOpacity .5s;
      -moz-animation: fadeOutOpacity .5s;
      -webkit-animation: fadeOutOpacity .5s;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
  }
  /* to prevent flickering */
  &.was-animated {
    .default {
      visibility: hidden;
      opacity: 0 !important;
    }
  }
`

const HeroAnimated = ({ animatedSections, scrollSlides }) => {

  const [breakpoint, setBreakpoint] = useState(0)
  const [scrollHero, setScrollHero] = useState(false)
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false)
  const [showFeaturedWords] = useState(true)

  // force scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // set no scroll for 1st animation
  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (scrollHero) {
        document.body.classList.remove("no-scroll")
      } else {
        const topVal  = window.pageYOffset || document.documentElement.scrollTop
        if (topVal !== 0 ) {
          window.scrollTo(0, 0)
        } else if (topVal === 0) {
          document.body.classList.add("no-scroll")
        }
      }
    }
  }, [scrollHero])
  // end set no scroll for 1st animation

  useLayoutEffect(() => {

    // unhide to remove flash on first load
    gsap.to(".section-content", { autoAlpha: 1 })

    let sections = gsap.utils.toArray(".animated-section")

    const firstTimelineComplete = () => {
      setTimeout(() => {
        gsap.to(".animated-text", {
          color: "rgba(255,255,255,.4)",
          //color: "#008078",
          duration: 2
        })
        //need to kick state
        setScrollHero(true)
        setScrollHero(false)
        console.log("setScrollHero false")
        setFirstAnimationComplete(true)
        console.log("setFirstAnimationComplete")
        console.log("AllowScrolling again")
        window.fullpage_api && window.fullpage_api.setAllowScrolling(true)
      }, 200)
      setTimeout(() => {
        setScrollHero(true)
        console.log("setScrollHero true")
      }, 250)
    }

    const mainTimeline = gsap.timeline({
      delay: .5,
      invalidateOnRefresh: true,
      onComplete: () => firstTimelineComplete()
    })

    if (typeof window !== `undefined`) {
      let width = window.innerWidth
      if (width < 768) {
        setBreakpoint(0)
      } else if (width < 1024) {
        setBreakpoint(1)
      } else {
        setBreakpoint(2)
      }
      console.log('setBreakpoint', breakpoint)
    }

    const onChildComplete = (isLast, idx, el) => {
      if (el) {
        const element = document.querySelector(el)
        if (element) {
          element.classList.add("animated")
          setTimeout(() => {
            element.classList.add("was-animated")
          }, 500)
        }
      }
    }

    const CADENCE = .4
    const CADENCEMODIFIER = .3 /* CADENCE x CADENCEMODIFIER */
    const STARTDIFF = 75

    sections.forEach((section, idx) => {

      let atl = gsap.timeline()
      let el = `.animated-section.section-${idx}`
      let endX = animatedSections[idx]?.animated?.[breakpoint]["x"]
      let endY = animatedSections[idx]?.animated?.[breakpoint]["y"]
      let isFirst = idx === 0
      let isLast = sections.length - 1 === idx

      atl.from(el, {
        y: isFirst ? 0 : STARTDIFF,
        opacity: 0,
        duration: isFirst ? CADENCE : CADENCE * CADENCEMODIFIER
      }).to(el, {
        y: 0,
        opacity: 1,
        duration: CADENCE,
        onComplete: onChildComplete,
        onCompleteParams: [isLast, idx, el]
      }).to(el, {
        y: endY,
        x: endX,
        duration: CADENCE * CADENCEMODIFIER,
      }, "+=.5")

      mainTimeline.add(atl).add(() => atl.kill())

    })

  }, [animatedSections, breakpoint, setBreakpoint])

  const renderAnimatedSections = animatedSections.map((section, i) => {
    return (
      <AnimatedSection className={`animated-section section-${i}`} key={`section-${i}`}>
        <div className="section-content">
          {section.copy ? (
            <TextElement text={section.copy} element="h4" className={section.copyClasses} />
          ) : null}
        </div>
      </AnimatedSection>
    )
  })

  return (
    <BannerContainer className={`hero-scroll ${firstAnimationComplete ? "first-animation-complete" : ""} ${scrollHero ? "scroll" : ""} ${showFeaturedWords ? "show-featured-words" : ""}`}>

      <ReactFullpage
        debug
        // do this?

        // pluginWrapper = {pluginWrapper}
        licenseKey = {`JLL4J-016K9-IO036-2N65I-RORUQ`}

        //  our key
        dragAndMoveKey = {`NFNiblYwY21GbWIyd3VZMjl0VTlfbjFBWkhKaFowRnVaRTF2ZG1VPUN4NA==`}
        dragAndMove = {true}
        //dragAndMove = {`fingersonly`}
        scrollingSpeed = {750}
        credits = {{enabled: false}}
        // css3 = {true}
        scrollOverflow = {true}
        // slidesNavigation = {true}
        afterSlideLoad={(origin, destination, direction) => {
          console.log('afterSlideLoad', origin, destination, direction)
        }}
        afterResize = {(width, height)=>{
          console.log('afterResize', width, height)
        }}
        afterResponsive = {(isResponsive)=>{
          console.log('afterResponsive', isResponsive)
        }}
        afterLoad={(origin, destination, direction) => {
          console.log('afterLoad', origin, destination, direction)
        }}
        beforeLeave={(origin, destination, direction) => {
          console.log('beforeLeave', origin, destination, direction)
        }}
        onSlideLeave={(section, destination, direction) => {
          console.log('onSlideLeave', section, destination, direction)
        }}
        onScrollOverflow={(section, slide, position) => {
          console.log('onScrollOverflow', section, slide, position)
        }}
        afterRender={() => {
          console.log("afterRender")
          if((typeof window!== 'undefined') && window.fullpage_api) {
            console.log("AllowScrolling locked")
            window.fullpage_api.setAllowScrolling(false)
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <HeroAnimatedWrap className={`section shed-story`}>
                {renderAnimatedSections}
                {scrollHero ? (
                  <HeroScroll
                    scrollSlides={scrollSlides}
                    idx={0}
                  />
                ) : null}
              </HeroAnimatedWrap>
              <HeroAnimatedWrap  className="section below-fold">
                <HeroScroll
                  idx={1}
                  scrollSlides={scrollSlides}
                />
              </HeroAnimatedWrap>
              <HeroAnimatedWrap className="section below-fold">
                <HeroScroll
                  idx={2}
                  scrollSlides={scrollSlides}
                />
              </HeroAnimatedWrap>
              <Fbbody/>
            </ReactFullpage.Wrapper>
          )
        }}
      />

    </BannerContainer>
  )
}

export default HeroAnimated