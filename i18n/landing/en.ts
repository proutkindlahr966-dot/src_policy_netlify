import type { LandingStrings } from './types'

export const enLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Transparency Center',
    nav: [
      { label: 'Transparency Center', type: 'link', href: '#' },
      { label: 'Policies', type: 'menu' },
      { label: 'Enforcement', type: 'menu' },
      { label: 'Security', type: 'menu' },
      { label: 'Features', type: 'menu' },
      { label: 'Governance', type: 'menu' },
      { label: 'Research tools', type: 'menu' },
      { label: 'Reports', type: 'menu' },
    ],
    loginCta: 'Log in with Facebook',
    loginAria: 'Log in with Facebook to manage your Fanpage',
    cta: 'Submit appeal',
    ctaAria: 'Submit an appeal — request a review of your Fanpage decision',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Community Standards topics',
    sidebarSection: 'Policies',
    sidebarLinks: [
      { label: 'Coordinating Harm and Promoting Crime' },
      { label: 'Dangerous Organizations and Individuals' },
      { label: 'Fraud, Scams, and Deceptive Practices' },
      { label: 'Restricted Goods and Services' },
      { label: 'Child Sexual Exploitation, Abuse, and Nudity' },
      { label: 'Suicide, Self-Injury, and Eating Disorders' },
      { label: 'Adult Nudity and Sexual Activity' },
      { label: 'Violent and Graphic Content' },
      { label: 'Bullying and Harassment' },
      { label: 'Hate Speech' },
    ],
  },
  hero: {
    title: 'Community Standards',
    lead:
      'The Community Standards outline what is and isn\'t allowed on Facebook, Instagram, Messenger and Threads.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure: '',
    introduction: {
      title: 'Introduction',
      paragraphs: [
        'Meta\'s Community Standards are developed based on input from our community and experts to foster a safe, transparent and trustworthy online environment, while clearly defining what content is and isn\'t allowed on Facebook, Instagram, Messenger and Threads to protect people and communities worldwide.',
      ],
    },
    eligibility:
      'These standards are based on feedback from people and the advice of experts in technology, public safety and human rights — to ensure everyone\'s voice is valued.',
    creatorPrefix: 'View the full document at',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Submit an appeal request',
    badgeAlt: 'Meta logo',
  },
  notice: {
    title: 'Your Fanpage may have violated Community Standards',
    body:
      'Following a recent review, a Fanpage you administer has been identified as potentially not complying with Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review. This notice applies only to a Fanpage you administer.',
  },
  policyIndex: {
    title: 'Community Standards topics',
    items: [
      { label: 'Coordinating Harm and Promoting Crime' },
      { label: 'Dangerous Organizations and Individuals' },
      { label: 'Fraud, Scams, and Deceptive Practices' },
      { label: 'Restricted Goods and Services' },
      { label: 'Child Sexual Exploitation, Abuse, and Nudity' },
      { label: 'Suicide, Self-Injury, and Eating Disorders' },
      { label: 'Adult Nudity and Sexual Activity' },
      { label: 'Violent and Graphic Content' },
      { label: 'Bullying and Harassment' },
      { label: 'Hate Speech' },
      { label: 'Third-Party Intellectual Property Infringement' },
      { label: 'Locally Illegal Content, Products, or Services' },
    ],
  },
  benefits: {
    items: [
      {
        title: 'Our commitment to voice',
        paragraphs: [
          'Our Community Standards aim to create space for expression. We encourage open discussion — through comments, images, music or other creative formats — even when others disagree. In exceptional cases, [[newsworthy]] content that serves the public interest may remain after we balance informational value against harm and reference international human rights standards. When context clarifies a violation, we may remove ambiguous or implied content.',
          'We prioritize voice while recognizing that the internet also enables abuse. When we limit expression, we do so to protect one or more of the following values:',
        ],
      },
    ],
  },
  valuesGrid: {
    items: [
      {
        id: 'authenticity',
        label: 'Authenticity',
        paragraphs: [
          'We expect content on our platforms to reflect what is genuine. Authenticity supports healthier sharing; misrepresenting identity or conduct is not permitted.',
        ],
      },
      {
        id: 'safety',
        label: 'Safety',
        paragraphs: [
          'Facebook, Instagram, Messenger and Threads should be safe environments. We remove content that may cause physical harm, threaten, exclude or silence others.',
        ],
      },
      {
        id: 'privacy',
        label: 'Privacy',
        paragraphs: [
          'We protect personal privacy and data. Privacy helps people control how and when they share and connect on our services.',
        ],
      },
      {
        id: 'dignity',
        label: 'Dignity',
        paragraphs: [
          'Everyone has equal dignity and rights. Harassment or degrading others is not permitted.',
        ],
      },
    ],
  },
  consequences: {
    title: 'Consequences when a Fanpage violates Community Standards',
    description:
      'When content or activity on a Fanpage does not comply with Community Standards, Meta may apply measures appropriate to the severity and context of the violation. The outcomes below are commonly applied — they are not an exhaustive list and may vary by case.',
    items: [
      {
        title: 'Reduced reach and content distribution',
        description:
          'Posts and updates from the Fanpage may reach fewer people in News Feed and across Meta platforms, limiting organic visibility.',
      },
      {
        title: 'Restricted or disabled features',
        description:
          'Some tools — such as messaging, live video, or shopping features — may be limited or temporarily unavailable depending on the policy area involved.',
      },
      {
        title: 'Content removal or reduced visibility',
        description:
          'Individual posts or media that violate policies may be removed or shown to fewer people while enforcement is in effect.',
      },
      {
        title: 'Limits on posting or advertising',
        description:
          'The Fanpage may face restrictions on publishing new content, running ads, or promoting posts until compliance is restored.',
      },
      {
        title: 'Temporary lock or permanent deactivation',
        description:
          'Repeated or serious violations may lead to a temporary hold on the Fanpage or, in severe cases, permanent removal after review.',
      },
      {
        title: 'Impact on credibility and business outcomes',
        description:
          'Enforcement actions can affect audience trust, engagement metrics, and the effectiveness of marketing or customer communication on the Fanpage.',
      },
    ],
    infoBox:
      'Following Community Standards helps maintain a safe environment for people and supports stable Fanpage operations with reach to the right audience.',
  },
  steps: {
    title: 'Appeal submission process',
    subtitle:
      'Each appeal is reviewed under the Community Standards published on the Transparency Center. Please prepare all required information before submitting — estimated form completion time: 5–10 minutes.',
    items: [
      {
        title: 'Review applicable policy and related content',
        description:
          'Go to the Transparency Center and open the policy section that applies to the flagged content. Read the Policy Rationale and specific rules carefully, then compare them directly with the post or activity on your Fanpage to determine a valid basis for appeal.',
      },
      {
        title: 'Complete the form and verify admin access',
        description:
          'Fill out the form completely with accurate administrator details, a valid contact email and phone number, and a brief description of content context (if applicable). Your request will only be accepted if the Facebook account submitting the form has Fanpage admin access and completes identity verification under Meta\'s process.',
      },
      {
        title: 'Track review status',
        description:
          'Review outcomes are sent via Facebook Notifications (bell icon) — not via a separate email from this form. Processing typically takes 3–7 business days; please keep your request reference code to track progress and for support reference if needed.',
      },
    ],
  },
  testimonials: {
    title: 'Reference from the Transparency Center',
    prevAria: 'Previous item',
    nextAria: 'Next item',
    items: [
      {
        quote:
          'These standards are based on feedback from people and the advice of experts in fields like technology, public safety and human rights — to ensure everyone\'s voice is valued.',
        author: 'Meta Transparency Center',
        role: 'Introduction',
      },
      {
        quote:
          'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content.',
        author: 'Meta Transparency Center',
        role: 'Scope',
      },
      {
        quote:
          'The US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
        author: 'Meta Transparency Center',
        role: 'Official document',
      },
    ],
  },
  commonViolations: {
    title: 'Some Community Standards violations',
    description:
      'Community Standards apply to all content and activity on a Fanpage. Below are policy areas commonly identified during review:',
    items: [
      {
        title: 'Fraud, scams and deception',
        description:
          'Content or activity intended to mislead people, obtain information or assets improperly, or create confusion about identity, products or services.',
      },
      {
        title: 'Restricted goods and services',
        description:
          'Promoting, selling or facilitating transactions for items or services restricted under Meta policies or applicable local law.',
      },
      {
        title: 'Exploitation, abuse and harassment',
        description:
          'Harassment, threats, bullying or abuse directed at individuals or groups, including content that may cause psychological or physical harm.',
      },
      {
        title: 'Hate speech',
        description:
          'Content that directly attacks protected characteristics of people or groups, or incites violence or discrimination based on those characteristics.',
      },
      {
        title: 'Violent and graphic content',
        description:
          'Images, videos or descriptions of extreme violence, gore or shocking material may be restricted or removed depending on context and visibility.',
      },
      {
        title: 'Dangerous individuals and organizations',
        description:
          'Supporting, praising or representing organizations or individuals Meta determines pose a serious risk of harm or violence.',
      },
    ],
  },
  finalCta: {
    title: 'Submit an appeal',
    subtitle:
      'If, after reviewing the Community Standards, you determine your Fanpage complies with policy, please submit the form with administrator details and complete identity verification as instructed.',
    cta: 'Submit an appeal request',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Does an appeal apply to personal profiles or Groups?',
        answer:
          'No. The notice on this page and the appeal form apply only to Fanpages you administer. Personal profiles, Groups, or other Meta products are outside the scope of this process.',
      },
      {
        question: 'Can I submit another appeal after one is rejected?',
        answer:
          'Yes, when you have new information or evidence that was not considered in the previous review. Each resubmission must clearly state what is different; duplicate requests without new content may not be processed again.',
      },
      {
        question: 'What should I prepare before submitting the appeal form?',
        answer:
          'Prepare links or identifiers for affected posts, a brief description of business context or content purpose, and confirm you are signed in with an account that has Fanpage admin access in Meta Business Suite.',
      },
      {
        question: 'What is the request reference code for?',
        answer:
          'Each form submission is assigned a unique reference code. Please keep it when tracking status on Facebook or when support needs to locate your case — the reference code does not replace official in-app notifications.',
      },
      {
        question: 'Does submitting an appeal pause Fanpage restrictions?',
        answer:
          'No. Your Fanpage may remain restricted while review is pending. Appeal outcomes are communicated separately and may lead to restrictions being lifted if the request is approved.',
      },
      {
        question: 'How will I receive the appeal outcome?',
        answer:
          'Via Facebook Notifications (bell icon), not via a separate email from this form. Please enable Page-related notifications and check regularly for several business days after submitting.',
      },
      {
        question: 'How is information from the form stored and used?',
        answer:
          'Data you provide is used only to process your appeal, verify admin rights, and maintain records under Meta\'s internal procedures, in line with the Privacy Policy and Terms — not for advertising purposes.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta technologies',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Policies',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
