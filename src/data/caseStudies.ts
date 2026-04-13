export const caseStudies = [
  {
    slug: "canara-hsbc-study",
    tag: "2024",
    title: "UX Revamp for Canara HSBC Life Insurance",
    description:
      "Led an end-to-end UX revamp for a large-scale insurance platform serving diverse user groups including elderly users and field agents.",
    projectBrief: {
      brief: `Canara HSBC Life Insurance serves a wide spectrum of users—from digitally savvy buyers to elderly customers and field agents.

As digital acquisition grew, the existing website struggled to support discovery, comprehension, and conversion.

The company initiated a full UX revamp to align the experience with modern user expectations and business growth goals.`,
      role: "Lead UX Designer",
      team: "UX Director, 2 UX Designers, Product Managers, Tech Lead, Developers",
      timeline: "6 months",
      skills: "Figma, Adobe Experience Manager (AEM)",
      responsibilities: [
        "Audited the existing experience",
        "Defined user problems and success metrics",
        "Redesigned information architecture and key journeys",
        "Shipped wireframes, prototypes, and visual direction",
        "Partnered with business, marketing, SEO, and engineering teams",
        "Validated solutions through testing and iteration",
      ],
    },
    problem: {
      problemBrief:
        "The website wasn’t failing because of content volume —it was failing because users couldn’t make sense of it fast enough.",
      // title: "Left on Read (again)",
      content: `
        <ul">
          <li>75% homepage drop-off for new users</li>
          <li>Overloaded navigation and deep hierarchies</li>
          <li>Marketing traffic landing on pages that felt disconnected from ads</li>
          <li>One-size-fits-all lead forms, regardless of user intent</li>
          <li>Calculators and product pages that increased cognitive load instead of clarity</li>
        </ul>
      `,
      keyInsight: `<p>
          Insurance users don’t want more information. <br>They want confidence, clarity, and guidance — especially when they are only partially aware of the product.
      </p>`,
    },
    userResearch: {
      // intro: `
      //   My goal in user research was to understand how Messenger helps foster
      //   relationships among users. Here are my findings:
      // `,
      insights: [
        {
          // id: 1,
          // text: "Users want to reply to messages at a later convenient time, but sometimes forget to reply when that time comes.",
          quote: `
        Sometimes I accidentally leave people on read or it’s shown that I’m active
        but I don’t respond. I don’t do this intentionally— I'm just busy at the moment.
        But when I'm online again, sometimes I forget that I’ve already opened it.
      `,
        },
        // {
        //   id: 2,
        //   text: `Users want to organize their Messenger chats to suit their preferences (e.g. “Favorites”, or “Priority”).`,
        //   quote: `
        //     When I'm getting a lot of messages, sometimes I don’t see the message that I
        //     already read once I open the app, because the new messages hide the older ones.
        //   `
        // }
      ],
      footer: `How can Messenger maintain its casual messaging concept while holding users accountable for consistently messaging their friends?`,
    },
    impactSection: {
      heading: "Overall Impact of the Website UX Revamp",
      intro: `The comprehensive UX revamp of the Canara HSBC Life website delivered <strong>significant improvements across key performance indicators</strong>, fundamentally transforming the digital experience for all users and directly contributing to critical business objectives. By meticulously addressing issues in information architecture, campaign-to-landing page transitions, and the usability of core sections like calculators and product pages, the project achieved a more engaged, intuitive, and conversion-focused platform.`,

      topItems: [
        {
          title:
            "Making the website behave like an e-commerce journey, not a document repository",
          description: `The existing website presented dense information and layered navigation, requiring users to interpret insurance terminology and determine their own path forward without guided progression.`,
        },
        {
          title: "Aligning experiences to user intent and funnel stage",
          description: `Users entered the website at different levels of awareness and readiness, yet the experience treated exploratory visitors, comparing users, and high-intent users the same.`,
        },
        {
          title:
            "Designing for low digital confidence users without hurting power users",
          description: `The platform needed to serve elderly and low-confidence digital users alongside agents and repeat users, whose expectations around clarity, reassurance, and speed differed significantly.`,
        },
        {
          title: "Prioritizing mobile-first clarity across the system",
          description: `A large share of traffic was mobile, but the information density and interaction patterns were not optimized for small screens or quick decision-making contexts.`,
        },
      ],
    },
    accordionSection: [
      {
        id: 1,
        title:
          "Business and SEO required content-heavy product pages that conflicted with usability goals.",
        content: `
      <p>Instead of cutting content, I restructured it into modular, visually digestible blocks with sticky index navigation and progressive disclosure preserving business depth while reducing perceived complexity.</p>
    `,
      },
      {
        id: 2,
        title:
          "Technical constraints limited component scalability while stakeholders expected highly unique designs.",
        content: `
      <p>I prioritized differentiation in high-impact journeys, standardized the rest through modular patterns, expanded the system to ~70 components where necessary, and deferred non-critical complexity to Phase 2 to protect timeline and scalability.</p>
    `,
      },
      {
        id: 3,
        title:
          "Data confidentiality restricted access to exact conversion and revenue metrics.",
        content: `
      I aligned early on proxy success metrics (drop-offs, engagement depth, task completion) to demonstrate measurable UX impact while maintaining executive trust and data confidentiality.
    `,
      },
    ],
    keyLearningSection: {
      heading: "Overall Impact of the Website UX Revamp",
      intro: `The comprehensive UX revamp of the Canara HSBC Life website delivered <strong>significant improvements across key performance indicators</strong>, fundamentally transforming the digital experience for all users and directly contributing to critical business objectives. By meticulously addressing issues in information architecture, campaign-to-landing page transitions, and the usability of core sections like calculators and product pages, the project achieved a more engaged, intuitive, and conversion-focused platform.`,

      keyItems: [
        {
          title: "The power of phased personalisation ",
          description: `Effective personalization isn’t about uniqueness everywhere, it’s about smart segmentation that aligns with business readiness and scale.`,
        },
        {
          title: "Collaboration is King for complex projects",
          description: `Sustainable UX outcomes require deep collaboration across business, marketing, SEO, and engineering especially when priorities conflict.`,
        },
        {
          title: "Strategic compromise and phased rollouts",
          description: `Shipping within constraints often means prioritizing core impact now while intentionally designing a roadmap for future evolution.`,
        },
        {
          title: "UX is a continuous journey",
          description: `Launching the revamp was a milestone, not a finish line.  Continuous measurement and optimization remain essential.`,
        },
      ],
    },
    footerImpact: {
      impactBrief:
        "The revamp transformed the website into a guided decision-making experience while laying a scalable foundation for future growth.",
      // title: "Left on Read (again)",
      content: `
        <ul">
          <li>Reduced homepage drop-offs by 15% in three months, increasing overall homepage engagement by 25%.</li>
          <li>Increased calculator completion and improved lead quality through funnel-aligned landing experiences.</li>
          <li>Simplified the information architecture to improve discoverability and user progression.</li>
          <li>Built a scalable UX foundation enabling faster experimentation and continuous performance optimization.</li>
        </ul>
      `,
    },

    nextRead: {
      title: "IndusInd Bank • Redesigning CSR",
      description:
        "Designing a system that brings clarity, structure, and depth to complex CSR initiatives. Enabling users to explore and engage with these initiatives through structured journeys.",
      imageUrl: "/IndusIndBankCover.jpeg",
      ctaLink: "/case-study/indusind-bank-study"
    },
    image: "/Coverimage.svg",
    logo: "/CHL_Logo.svg",
    content: `
      <h2>Project Overview 1</h2>
      <p>This is the detailed case study description…</p>

      <h3>Responsibilities</h3>
      <ul>
        <li>Design system creation</li>
        <li>Color + Typography</li>
        <li>Component library</li>
      </ul>
    `,
  },

  // IndusInd Bank Case Study Data
  {
    slug: "indusind-bank-study",
    tag: "2024",
    title: "Redesigning CSR for Discovery and Depth",
    description:
      "Designing a system that brings clarity, structure, and depth to complex CSR initiatives. Enabling users to explore and engage with these initiatives through structured journeys.",
    projectBrief: {
      brief: `IndusInd Bank runs extensive CSR initiatives across multiple domains. However, the existing website failed to reflect the depth, scale, and impact of this work.

The platform lacked content depth, structure, and narrative clarity resulting in a significant gap between actual impact and perceived impact.
`,
      role: "Lead UX Designer",
      team: "UX Director, 2 UX Designers, Product Managers, Tech Lead, Developers",
      timeline: "2 months",
      skills: "FigJam, Figma, Adobe Experience Manager (AEM)",
      responsibilities: [
        "Led the project end-to-end from research to developer handoff",
        "Managed and mentored 2 UX designers",
        "Drove stakeholder alignment with client teams",
        "Owned UX strategy, IA, and design direction",
      ],
    },
    problem: {
      problemBrief:
        "The biggest challenge was the inability to translate complex, deeply branched CSR initiatives into a clear, navigable, and meaningful digital experience",
      // title: "Left on Read (again)",
      content: `
        <ul">
          <li>Website was too shallow for the depth of CSR work</li>
          <li>Information was fragmented and under-structured</li>
          <li>No clear way to explore initiatives across themes, regions, or impact</li>
          <li>Lack of storytelling reduced emotional and informational engagement</li>
        </ul>
      `,
      keyInsight: `<p>
          When impact is complex, clarity becomes the primary design responsibility.
      </p>`,
    },
    userResearch: {
      // intro: `
      //   My goal in user research was to understand how Messenger helps foster
      //   relationships among users. Here are my findings:
      // `,
      insights: [
        {
          // id: 1,
          // text: "Users want to reply to messages at a later convenient time, but sometimes forget to reply when that time comes.",
          quote: `
        Sometimes I accidentally leave people on read or it’s shown that I’m active
        but I don’t respond. I don’t do this intentionally— I'm just busy at the moment.
        But when I'm online again, sometimes I forget that I’ve already opened it.
      `,
        },
        // {
        //   id: 2,
        //   text: `Users want to organize their Messenger chats to suit their preferences (e.g. “Favorites”, or “Priority”).`,
        //   quote: `
        //     When I'm getting a lot of messages, sometimes I don’t see the message that I
        //     already read once I open the app, because the new messages hide the older ones.
        //   `
        // }
      ],
      footer: `How can Messenger maintain its casual messaging concept while holding users accountable for consistently messaging their friends?`,
    },
    impactSection: {
      heading: "Overall Impact of the Website UX Revamp",
      intro: `The comprehensive UX revamp of the Canara HSBC Life website delivered <strong>significant improvements across key performance indicators</strong>, fundamentally transforming the digital experience for all users and directly contributing to critical business objectives. By meticulously addressing issues in information architecture, campaign-to-landing page transitions, and the usability of core sections like calculators and product pages, the project achieved a more engaged, intuitive, and conversion-focused platform.`,

      topItems: [
        {
          title:
            "Organizing CSR work into navigable frameworks instead of static pages",
          description: `The existing website resembled an outdated newsletter, lacking structure and failing to encourage exploration or engagement.`,
        },
        {
          title:
            "Making information progressively explorable, not overwhelming",
          description: `The volume of CSR data was extensive, but the existing website lacked the depth and structure to present it meaningfully.`,
        },
        {
          title: "Designing for both discovery and deep dives",
          description: `The platform needed to support both quick, high-level browsing and in-depth exploration for users with varying intent.`,
        },
        {
          title:
            "Ensuring the website structure follows a clear storytelling narrative to enhance user engagement.",
          description: `Despite extensive on-ground impact, the website lacked narrative and creativity, failing to reflect the scale and significance of the work.`,
        },
      ],
    },
    accordionSection: [
      {
        id: 1,
        title:
          "Lack of clearly defined user personas",
        content: `
      <p>Non-transactional goals made it difficult to identify and empathize with target users.</p>
      
      <p>Therefore we leveraged stakeholder insights to define audience groups and guide design decisions.</p>
    `,
      },
      {
        id: 2,
        title:
          "Balancing storytelling with accuracy",
        content: `
      <p>The volume and fragmentation of CSR content made it challenging to create a cohesive and navigable structure. </p>
      <p>We made structured content into layered, scannable formats to retain completeness while improving readability and navigation.</p>
    `,
      },
      {
        id: 3,
        title:
          "Managing content gaps",
        content: `
      Business and content teams required detailed representation of CSR initiatives, making it difficult to simplify without losing depth and accuracy. Introduced a unified information framework to organize initiatives into clear, explorable categories.
    `,
      },
      {
        id: 4,
        title:
          "Working without immediate metrics",
        content: `
      The absence of performance metrics and conversion goals limited the ability to measure success through traditional KPIs. Impact had to be defined through clarity, scalability, and stakeholder alignment rather than performance data.
    `,
      },
    ],
    keyLearningSection: {
      heading: "Overall Impact of the Website UX Revamp",
      intro: `The comprehensive UX revamp of the Canara HSBC Life website delivered <strong>significant improvements across key performance indicators</strong>, fundamentally transforming the digital experience for all users and directly contributing to critical business objectives. By meticulously addressing issues in information architecture, campaign-to-landing page transitions, and the usability of core sections like calculators and product pages, the project achieved a more engaged, intuitive, and conversion-focused platform.`,

      keyItems: [
        {
          title: "Clarity is critical when designing for complex impact systems. ",
          description: `Effective personalization isn’t about uniqueness everywhere, it’s about smart segmentation that aligns with business readiness and scale.`,
        },
        {
          title: "Strong information architecture is the foundation of storytelling at scale.",
          description: `Sustainable UX outcomes require deep collaboration across business, marketing, SEO, and engineering especially when priorities conflict.`,
        },
        {
          title: "Designing for growth is as important as solving for the present.",
          description: `Shipping within constraints often means prioritizing core impact now while intentionally designing a roadmap for future evolution.`,
        },
        {
          title: "Perception of impact is shaped as much by structure as by content.",
          description: `Launching the revamp was a milestone, not a finish line.  Continuous measurement and optimization remain essential.`,
        },
      ],
    },
    footerImpact: {
      impactBrief:
        "The redesign successfully translated the depth and scale of CSR initiatives into a clear, structured digital experience. Stakeholders responded very positively, as the platform now more accurately reflects the effort and impact of their work, strengthening both internal alignment and external perception.",
      // title: "Left on Read (again)",
      content: `
        <ul">
          <li>The website design now enables users to explore CSR initiatives with clarity,</li>
          <li>Viewers can now understand impact at multiple levels, and engage more meaningfully with the organization’s work </li>
          <li>The design also provides a foundation that can evolve alongside future initiatives.</li>
        </ul>
      `,
    },

    nextRead: {
      title: "Canara HSBC Life • UX Revamp",
      description:
        "Redesigned a high-traffic insurance website to reduce a 75% homepage drop-off and improve lead quality by simplifying information architecture, personalizing campaign journeys, and rethinking complex financial interactions.",
      imageUrl: "/Coverimage.svg",
      ctaLink: "/case-study/canara-hsbc-study"
    },
    image: "/IndusIndBankCover.jpeg",
    logo: "/indusLogo.jpg",
    content: `
      <h2>Project Overview 1</h2>
      <p>This is the detailed case study description…</p>

      <h3>Responsibilities</h3>
      <ul>
        <li>Design system creation</li>
        <li>Color + Typography</li>
        <li>Component library</li>
      </ul>
    `,
  },
];
