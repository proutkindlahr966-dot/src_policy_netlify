import type { LandingStrings } from './types'

export const svLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Transparency Center',
    nav: [
      {
        label: 'Transparency Center',
        type: 'link',
        href: '#',
      },
      {
        label: 'Policyer',
        type: 'menu',
      },
      {
        label: 'Tillämpning',
        type: 'menu',
      },
      {
        label: 'Säkerhet',
        type: 'menu',
      },
      {
        label: 'Drag',
        type: 'menu',
      },
      {
        label: 'Styrning',
        type: 'menu',
      },
      {
        label: 'Forskningsverktyg',
        type: 'menu',
      },
      {
        label: 'Rapporter',
        type: 'menu',
      },
    ],
    loginCta: 'Logga in med Facebook',
    loginAria: 'Logga in med Facebook för att hantera din sida',
    cta: 'Skicka överklagande',
    ctaAria: 'Skicka in en överklagan — begära en översyn av ditt sidabeslut',
  },
  helpCenter: {
    breadcrumb: [
      {
        label: 'Hem',
        href: '#',
      },
      {
        label: 'Policyer',
        href: '#',
      },
      {
        label: 'Communityregler',
      },
    ],
    sidebarTitle: 'Communityregler – ämnen',
    sidebarSection: 'Policyer',
    sidebarLinks: [
      {
        label: 'Samordning av skada och främjande av brottslighet',
      },
      {
        label: 'Farliga organisationer och individer',
      },
      {
        label: 'Bedrägeri, bedrägerier och vilseledande metoder',
      },
      {
        label: 'Begränsade varor och tjänster',
      },
      {
        label: 'Sexuellt utnyttjande och övergrepp av barn',
      },
      {
        label: 'Självmord, självskada och ätstörningar',
      },
      {
        label: 'Vuxen nakenhet och sexuell aktivitet',
      },
      {
        label: 'Våldsamt och grafiskt innehåll',
      },
      {
        label: 'Mobbning och trakasserier',
      },
      {
        label: 'Hattal',
      },
    ],
  },
  hero: {
    title: 'Communityregler',
    lead: 'Communityreglerna beskriver vad som är och inte är tillåtet på Facebook, Instagram, Messenger och Threads.',
    disclaimer: 'Observera att den amerikanska engelska versionen av Communityregler återspeglar den senaste uppsättningen policyer och bör användas som det primära dokumentet.',
    policyStructure: '',
    introduction: {
      title: 'Introduktion',
      paragraphs: [
        'Metas communityregler utvecklas utifrån synpunkter från communityn och experter för att främja en säker, transparent och pålitlig onlinemiljö, samtidigt som de tydligt anger vilket innehåll som är tillåtet respektive inte tillåtet på Facebook, Instagram, Messenger och Threads för att skydda användare och communityn världen över.',
      ],
    },
    eligibility: 'Dessa standarder är baserade på feedback från människor och vägledning från experter inom teknik, allmän säkerhet och mänskliga rättigheter — för att se till att allas röst värderas.',
    creatorPrefix: 'Se hela dokumentet på',
    creatorLink: 'Communityregler | Transparency Center',
    cta: 'Skicka överklagande',
    badgeAlt: 'Meta logotyp',
  },
  notice: {
    title: 'Din sida kan ha brutit mot Communityregler',
    body: 'Efter en nyligen genomförd granskning har en sida som du administrerar identifierats som potentiellt inte överensstämmer med Communityregler. Om du anser att resultatet är felaktigt kan du skicka in en överklagan för att begära en granskning. Detta meddelande gäller endast en sida som du administrerar.',
  },
  policyIndex: {
    title: 'Communityregler – ämnen',
    items: [
      {
        label: 'Samordning av skada och främjande av brottslighet',
      },
      {
        label: 'Farliga organisationer och individer',
      },
      {
        label: 'Bedrägeri, bedrägerier och vilseledande metoder',
      },
      {
        label: 'Begränsade varor och tjänster',
      },
      {
        label: 'Sexuellt utnyttjande och övergrepp av barn',
      },
      {
        label: 'Självmord, självskada och ätstörningar',
      },
      {
        label: 'Vuxen nakenhet och sexuell aktivitet',
      },
      {
        label: 'Våldsamt och grafiskt innehåll',
      },
      {
        label: 'Mobbning och trakasserier',
      },
      {
        label: 'Hattal',
      },
      {
        label: 'Tredjeparts intrång i immateriella rättigheter',
      },
      {
        label: 'Lokalt olagligt innehåll, produkter eller tjänster',
      },
    ],
  },
  benefits: {
    items: [
      {
        title: 'Vårt engagemang för att rösta',
        paragraphs: [
          'Våra Communityregler syftar till att skapa utrymme för uttryck. Meta uppmuntrar öppen diskussion — genom kommentarer, bilder, musik eller andra kreativa format — även när människor inte håller med. I undantagsfall kan [[newsworthy]]-innehåll som tjänar allmänintresset finnas kvar efter att vi vägt informationsvärdet mot skaderisk och hänvisat till internationella människorättsstandarder. När sammanhanget klargör en överträdelse kan vi ta bort tvetydigt eller underförstått innehåll.',
          'Vi prioriterar röst samtidigt som vi inser att internet också kan möjliggöra missbruk. När vi begränsar uttryck gör vi det för att skydda ett eller flera av följande värden:',
        ],
      },
    ],
  },
  valuesGrid: {
    items: [
      {
        id: 'authenticity',
        label: 'Äkthet',
        paragraphs: [
          'Vi vill att innehållet på våra plattformar ska återspegla vad som är äkta. Autenticitet skapar en hälsosammare miljö för delning, så att missvisa identitet eller beteende är inte tillåtet.',
        ],
      },
      {
        id: 'safety',
        label: 'Säkerhet',
        paragraphs: [
          'Facebook, Instagram, Messenger och Threads bör vara säkra miljöer. Vi tar bort innehåll som kan orsaka fysisk skada, hota, utesluta eller tysta andra.',
        ],
      },
      {
        id: 'privacy',
        label: 'Privatliv',
        paragraphs: [
          'Vi är engagerade i att skydda personlig integritet och data. Sekretess hjälper människor att kontrollera hur och när de delar och ansluter på våra tjänster.',
        ],
      },
      {
        id: 'dignity',
        label: 'Värdighet',
        paragraphs: [
          'Vi tror att alla människor har lika värdighet och rättigheter. Vi tillåter inte trakasserier eller förnedrande behandling av andra.',
        ],
      },
    ],
  },
  consequences: {
    title: 'Konsekvenser när en fansida bryter mot communityreglerna',
    description:
      'När innehåll eller aktivitet på en fansida inte följer communityreglerna kan Meta tillämpa åtgärder som är lämpliga för överträdelsens allvar och sammanhang. Konsekvenserna nedan är vanliga i praktiken — de utgör inte en fullständig lista och kan variera från fall till fall.',
    items: [
      {
        title: 'Minskad räckvidd och innehållsdistribution',
        description:
          'Inlägg och uppdateringar från fansidan kan nå färre personer i nyhetsflödet och på Metas plattformar, vilket begränsar organisk synlighet.',
      },
      {
        title: 'Begränsade eller inaktiverade funktioner',
        description:
          'Vissa verktyg — som meddelanden, livevideo eller shoppingfunktioner — kan begränsas eller vara tillfälligt otillgängliga beroende på vilket policyområde som berörs.',
      },
      {
        title: 'Borttaget innehåll eller minskad synlighet',
        description:
          'Enskilda inlägg eller media som bryter mot policyer kan tas bort eller visas för färre personer medan verkställande åtgärder gäller.',
      },
      {
        title: 'Begränsningar för publicering eller annonsering',
        description:
          'Fansidan kan få begränsningar för att publicera nytt innehåll, köra annonser eller marknadsföra inlägg tills efterlevnaden återställs.',
      },
      {
        title: 'Tillfällig låsning eller permanent avaktivering',
        description:
          'Upprepade eller allvarliga överträdelser kan leda till tillfällig avstängning av fansidan; i allvarliga fall kan fansidan permanent avaktiveras efter granskning.',
      },
      {
        title: 'Påverkan på trovärdighet och affärsresultat',
        description:
          'Verkställande åtgärder kan påverka publikens förtroende, engagemangsstatistik och effektiviteten i marknadsföring eller kundkommunikation via fansidan.',
      },
    ],
    infoBox:
      'Att följa communityreglerna hjälper till att upprätthålla en säker miljö för användare och säkerställer att fansidan kan fungera stabilt och nå rätt målgrupp.',
  },
  steps: {
    title: 'Process för att skicka in en överklagan',
    subtitle: 'Varje överklagan granskas enligt communityreglerna som publicerats på Transparency Center. Förbered all nödvändig information innan du skickar in — beräknad tid att fylla i formuläret: 5–10 minuter.',
    items: [
      {
        title: 'Granska tillämplig policy och relaterat innehåll',
        description: 'Gå till Transparency Center och öppna policyavsnittet som gäller det flaggade innehållet. Läs Policy Rationale och de specifika reglerna noggrant och jämför dem direkt med inlägget eller aktiviteten på din sida för att fastställa en giltig grund för överklagan.',
      },
      {
        title: 'Fyll i formuläret och verifiera administratörsåtkomst',
        description: 'Fyll i formuläret fullständigt med korrekta administratörsuppgifter, en giltig kontakt-e-post och telefonnummer samt en kort beskrivning av innehållskontexten (om tillämpligt). Din begäran accepteras endast om Facebook-kontot som skickar formuläret har administratörsåtkomst till sidan och slutför identitetsverifiering enligt Metas process.',
      },
      {
        title: 'Följ granskningsstatus',
        description: 'Granskningsresultat skickas via Facebook-aviseringar (klockikon) — inte via ett separat e-postmeddelande från detta formulär. Bearbetning tar vanligtvis 3–7 arbetsdagar; behåll din begäransreferenskod för att följa framstegen och som supportreferens vid behov.',
      },
    ],
  },
  testimonials: {
    title: 'Referens från Transparency Center',
    prevAria: 'Föregående objekt',
    nextAria: 'Nästa objekt',
    items: [
      {
        quote: 'Dessa standarder är baserade på feedback från människor och vägledning från experter inom teknik, allmän säkerhet och mänskliga rättigheter — för att se till att allas röst värderas.',
        author: 'Meta Transparency Center',
        role: 'Introduktion',
      },
      {
        quote: 'Våra Communityreglerna gäller för alla, världen över, och för alla typer av innehåll, inklusive AI-genererat innehåll.',
        author: 'Meta Transparency Center',
        role: 'Omfattning',
      },
      {
        quote: 'Den amerikanska engelska versionen av Communityregler återspeglar den senaste uppsättningen policyer och bör användas som det primära dokumentet.',
        author: 'Meta Transparency Center',
        role: 'Officiellt dokument',
      },
    ],
  },
  commonViolations: {
    title: 'Vissa överträdelser av communityreglerna',
    description:
      'Communityreglerna gäller allt innehåll och all aktivitet på en fansida. Nedan följer policyområden som ofta identifieras vid granskning:',
    items: [
      {
        title: 'Bedrägeri, scams och vilseledning',
        description:
          'Innehåll eller aktivitet som syftar till att vilseleda människor, erhålla information eller tillgångar på otillbörligt sätt eller skapa förvirring om identitet, produkter eller tjänster.',
      },
      {
        title: 'Begränsade varor och tjänster',
        description:
          'Marknadsföring, försäljning eller underlättande av transaktioner med varor eller tjänster som begränsas enligt Metas policyer eller tillämplig lokal lag.',
      },
      {
        title: 'Utnyttjande, missbruk och trakasserier',
        description:
          'Trakasserier, hot, mobbning eller missbruk riktat mot individer eller grupper, inklusive innehåll som kan orsaka psykisk eller fysisk skada.',
      },
      {
        title: 'Hatpropaganda',
        description:
          'Innehåll som direkt angriper skyddade egenskaper hos människor eller grupper, eller uppmanar till våld eller diskriminering baserat på dessa egenskaper.',
      },
      {
        title: 'Våldsamt och grafiskt innehåll',
        description:
          'Bilder, videor eller beskrivningar av extremt våld, blod eller chockerande material kan begränsas eller tas bort beroende på sammanhang och synlighet.',
      },
      {
        title: 'Farliga individer och organisationer',
        description:
          'Stöd, lovord eller representation av organisationer eller individer som Meta bedömer utgör en allvarlig risk för skada eller våld.',
      },
    ],
  },
  finalCta: {
    title: 'Skicka in en överklagan',
    subtitle: 'Om du efter att ha granskat communityreglerna bedömer att din sida följer policyn, skicka in formuläret med administratörsuppgifter och slutför identitetsverifiering enligt instruktionerna.',
    cta: 'Skicka överklagande',
  },
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        question: 'Gäller en överklagan personliga profiler eller grupper?',
        answer: 'Nej. Meddelandet på denna sida och överklagandeformuläret gäller endast sidor du administrerar. Personliga profiler, grupper eller andra Meta-produkter omfattas inte av denna process.',
      },
      {
        question: 'Kan jag skicka in en ny överklagan efter avslag?',
        answer: 'Ja, när du har ny information eller bevis som inte beaktades vid den tidigare granskningen. Varje ny inlämning måste tydligt ange vad som skiljer sig; dubblettbegäranden utan nytt innehåll kanske inte behandlas igen.',
      },
      {
        question: 'Vad bör jag förbereda innan jag skickar överklagandeformuläret?',
        answer: 'Förbered länkar eller identifierare för berörda inlägg, en kort beskrivning av affärskontext eller innehållets syfte och bekräfta att du är inloggad med ett konto som har administratörsåtkomst till sidan i Meta Business Suite.',
      },
      {
        question: 'Vad är begäransreferenskoden till för?',
        answer: 'Varje formulärinlämning tilldelas en unik referenskod. Behåll den när du följer status på Facebook eller när support behöver hitta ditt ärende — referenskoden ersätter inte officiella aviseringar i appen.',
      },
      {
        question: 'Pausar en överklagan sidbegränsningar?',
        answer: 'Nej. Din sida kan förbli begränsad medan granskningen pågår. Överklaganderesultat meddelas separat och kan leda till att begränsningar hävs om begäran godkänns.',
      },
      {
        question: 'Hur får jag resultatet av överklagan?',
        answer: 'Via Facebook-aviseringar (klockikon), inte via ett separat e-postmeddelande från detta formulär. Aktivera sidrelaterade aviseringar och kontrollera dem regelbundet under flera arbetsdagar efter inlämning.',
      },
      {
        question: 'Hur lagras och används information från formuläret?',
        answer: 'Uppgifterna du lämnar används endast för att behandla din överklagan, verifiera administratörsrättigheter och upprätthålla register enligt Metas interna rutiner, i enlighet med integritetspolicyn och villkoren — inte i reklamsyfte.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta-teknologier',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Policyer',
        links: [
          { label: 'Transparenscenter' },
          { label: 'Communityregler' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Hjälpcenter' },
          { label: 'Meta Business Hjälpcenter' },
        ],
      },
    ],
  },
}
