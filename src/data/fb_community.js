import logoSts from "./logo-sts.svg"
import youAreNotAlone from "./you-are-not-alone.svg"

const FB_URL = `https://www.facebook.com/groups/shedthesilence`

export const data = {
  seo: {
    title: "Shed the Silence",
    description: "Join Nutrafol in shedding the silence that surrounds female hair thinning in a place dedicated to support those struggling with the emotional and social impact of hair struggles."
  },
  heroAnimated: {
    animatedSections: [
      {
        copy: "<span class='default font-grilliBook'>“I feel like a</span> <span class='animated-text text-master-base-default font-grilliItalic inline-block'>stranger</span> <span class='font-grilliBook default text-master-base-black'>when I look in the mirror.”</span>",
        copyClasses: "title--large text-master-base-black pr-4 sm:pr-2 md:pr-8",
        animated: [
          {
            x: 0,
            y: -200
          },
          {
            x: -120,
            y: -200
          },
          {
            x: -220,
            y: -200
          },
        ],
      },
      {
        copy: "<span class='default font-grilliBook'>“Thinning hair makes me feel so</span> <span class='animated-text text-master-base-default font-grilliItalic inline-block'>self-conscious</span><span class='font-grilliBook default text-master-base-black'>.”</span>",
        copyClasses: "title--large text-master-base-black",
        animated: [
          {
            x: 90,
            y: -150
          },
          {
            x: 210,
            y: -180
          },
          {
            x: 300,
            y: -220
          },
        ],
      },
      {
        copy: "<span class='default font-grilliBook'>“Experiencing thinning hair is incredibly</span> <span class='animated-text text-master-base-default font-grilliItalic inline-block'>isolating</span><span class='font-grilliBook default text-master-base-black'>.”</span>",
        copyClasses: "title--large text-master-base-black",
        animated: [
          {
            x: -130,
            y: 70
          },
          {
            x: -240,
            y: 90
          },
          {
            x: -340,
            y: 90
          },
        ],
      },
      {
        copy: "<span class='default font-grilliBook'>“Seeing clumps of hair in my brush is so</span> <span class='animated-text text-master-base-default font-grilliItalic inline-block'>stressful</span><span class='font-grilliBook default text-master-base-black'>.”</span>",
        subCopy: "",
        copyClasses: "title--large text-master-base-black sm:pr-4 md:pr-16",
        subCopyClasses: "",
        animated: [
          {
            x: 95,
            y: 130
          },
          {
            x: 250,
            y: 130
          },
          {
            x: 350,
            y: 130
          },
        ],
      }
    ],
    scrollSlides: [
      {
        showFeaturedWords: true,
        vector: youAreNotAlone,
        copyClasses: "title--xlarge text-master-base-black",
        showLearnMore: true,
      },
      {
        copy: "More than half of women will experience thinning hair in their lifetime.",
        subCopy: "And we don't talk about it enough.",
        copyClasses: "title--medium text-master-base-black mb-8",
        subCopyClasses: "title--large-i text-master-primary-default"
      },
      {
        vector: logoSts,
        copy: "Shed the Silence is a social forum where you can connect with other women, share stories, and support those experiencing the emotional and social impact of hair changes.",
        copyClasses: "body--xlarge text-master-base-black block mt-4 mb-10",
        button: {
          title: "Join the Community.",
          label: "Join the Community",
          link: FB_URL
        }
      }
    ]
  },
  editorialish: {
    images: [
      "https://images.prismic.io/nutrafolheadless/3ad75d24-8fa2-4421-bfb3-f6bf7b7b1b5a_sts-editorialish-mobile.jpg?auto=compress,format",
      "https://images.prismic.io/nutrafolheadless/a200dfe0-9a9c-4e1c-9254-494b1d18dd1d_sts-editorialish-tablet.jpg?auto=compress,format",
      "https://images.prismic.io/nutrafolheadless/82fba31b-f65d-41d3-b333-ccb9afaba59f_sts-editorial-desktop.jpg?auto=compress,format"
    ],
    title: "If you’re one of them,<span class='block hide-md-up'></span> you’re one of us.",
    copy: [
      "Thinning hair affects millions of women, and <span class='font-dinamoBold'>we know firsthand how stressful and scary it can be</span>. Our founders felt alone in their experiences—and were determined to not let others feel the same. ",
      "Now we’re breaking the stigma around thinning hair by <span class='font-dinamoBold'>opening up the conversation</span>, furthering hair wellness research, developing solutions for women, and <span class='font-dinamoBold'>fostering a community</span> where women can get the support they need."
    ]
  },
  join: {
    heading: "Join us as we navigate this <br/>emotional journey—<span class='font-grilliItalic'>together</span>.",
    button: {
      label: "Shed the Silence",
      title: "Shed the Silence",
      link: FB_URL
    }
  },
  references: {
    items: [
      "DISCLAIMER: This forum is not intended to treat, diagnose, or otherwise support medical issues such as (but not limited to) hair loss, alopecia, etc. It is intended to facilitate emotional support and conversation amongst those experiencing the mental and emotional impacts of cosmetic related hair concerns. *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any diseases. We do not recommend Nutrafol to anyone under the age of 18. Do not take if you're pregnant. If you have a medical condition or are taking medications (especially anticoagulant and blood-thinning drugs), please consult with your physician before taking Nutrafol. Individual results may vary."
    ]
  }
}