import type { LandingStrings } from './types'

export const frLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Transparency Center',
    nav: [
      {
        label: 'Centre de transparence',
        type: 'link',
        href: '#',
      },
      {
        label: 'Politiques',
        type: 'menu',
      },
      {
        label: 'Application',
        type: 'menu',
      },
      {
        label: 'Sécurité',
        type: 'menu',
      },
      {
        label: 'Caractéristiques',
        type: 'menu',
      },
      {
        label: 'Gouvernance',
        type: 'menu',
      },
      {
        label: 'Outils de recherche',
        type: 'menu',
      },
      {
        label: 'Rapports',
        type: 'menu',
      },
    ],
    loginCta: 'Connectez-vous avec Facebook',
    loginAria: 'Connectez-vous avec Facebook pour gérer votre page',
    cta: 'Soumettre un appel',
    ctaAria: 'Faire appel  — demander une révision de la décision de votre Page',
  },
  helpCenter: {
    breadcrumb: [
      {
        label: 'Accueil',
        href: '#',
      },
      {
        label: 'Politiques',
        href: '#',
      },
      {
        label: 'Règles de la communauté',
      },
    ],
    sidebarTitle: 'Sujets des règles de la communauté',
    sidebarSection: 'Politiques',
    sidebarLinks: [
      {
        label: 'Coordonner les préjudices et promouvoir la criminalité',
      },
      {
        label: 'Organisations et individus dangereux',
      },
      {
        label: 'Fraude, escroqueries et pratiques trompeuses',
      },
      {
        label: 'Biens et services restreints',
      },
      {
        label: 'Exploitation et abus sexuels sur enfants',
      },
      {
        label: 'Suicide, automutilation et troubles de l\'alimentation',
      },
      {
        label: 'Nudité adulte et activité sexuelle',
      },
      {
        label: 'Contenu violent et graphique',
      },
      {
        label: 'Intimidation et harcèlement',
      },
      {
        label: 'Discours de haine',
      },
    ],
  },
  hero: {
    title: 'Règles de la communauté',
    lead: 'Les règles de la communauté décrivent ce qui est autorisé et ce qui n\'est pas autorisé sur Facebook, Instagram, Messenger et Threads.',
    disclaimer: 'Veuillez noter que la version anglaise américaine des règles de la communauté reflète l\'ensemble de politiques le plus récent et doit être utilisée comme document principal.',
    policyStructure: '',
    introduction: {
      title: 'Introduction',
      paragraphs: [
        'Les Standards de la communauté de Meta sont élaborés à partir des contributions de la communauté et d\'experts afin de favoriser un environnement en ligne sûr, transparent et digne de confiance, tout en définissant clairement les contenus autorisés et interdits sur Facebook, Instagram, Messenger et Threads pour protéger les personnes et les communautés dans le monde entier.',
      ],
    },
    eligibility: 'Ces normes sont basées sur les commentaires des personnes et les conseils d\'experts en technologie, en sécurité publique et en droits de l\'homme — pour s\'assurer que la voix de chacun est valorisée.',
    creatorPrefix: 'Consultez le document complet sur',
    creatorLink: 'Règles de la communauté | Transparency Center',
    cta: 'Soumettre un appel',
    badgeAlt: 'Logo Meta',
  },
  notice: {
    title: 'Votre page a peut-être enfreint les règles de la communauté',
    body: 'Suite à un examen récent, une page que vous administrez a été identifiée comme potentiellement non conforme aux règles de la communauté. Si vous pensez que ce résultat est incorrect, vous pouvez faire appel pour demander une révision. Cet avis s\'applique uniquement à une page que vous administrez.',
  },
  policyIndex: {
    title: 'Sujets des règles de la communauté',
    items: [
      {
        label: 'Coordonner les préjudices et promouvoir la criminalité',
      },
      {
        label: 'Organisations et individus dangereux',
      },
      {
        label: 'Fraude, escroqueries et pratiques trompeuses',
      },
      {
        label: 'Biens et services restreints',
      },
      {
        label: 'Exploitation et abus sexuels sur enfants',
      },
      {
        label: 'Suicide, automutilation et troubles de l\'alimentation',
      },
      {
        label: 'Nudité adulte et activité sexuelle',
      },
      {
        label: 'Contenu violent et graphique',
      },
      {
        label: 'Intimidation et harcèlement',
      },
      {
        label: 'Discours de haine',
      },
      {
        label: 'Violation de la propriété intellectuelle par un tiers',
      },
      {
        label: 'Contenu, produits ou services localement illégaux',
      },
    ],
  },
  benefits: {
    items: [
      {
        title: 'Notre engagement à faire entendre',
        paragraphs: [
          'Nos règles de la communauté sont conçus pour créer un espace d’expression. Meta encourage une discussion ouverte — à travers des commentaires, des images, de la musique et d\'autres formats créatifs — même quand les gens ne sont pas d\'accord. Dans des cas exceptionnels, le contenu [[newsworthy]] qui sert l\'intérêt public peut être conservé après que nous ayons pesé la valeur informationnelle par rapport au risque de préjudice et fait référence aux normes internationales des droits de l\'homme. Lorsque le contexte clarifie une violation, nous pouvons supprimer le contenu ambigu ou implicite.',
          'Nous accordons la priorité à la voix tout en reconnaissant qu’Internet peut également permettre des abus. Lorsque nous limitons l\'expression, nous le faisons pour protéger une ou plusieurs des valeurs suivantes :',
        ],
      },
    ],
  },
  valuesGrid: {
    items: [
      {
        id: 'authenticity',
        label: 'Authenticité',
        paragraphs: [
          'Nous voulons que le contenu de nos plateformes reflète ce qui est authentique. L\'authenticité crée un environnement de partage plus sain, donc toute fausse déclaration d\'identité ou de comportement n\'est pas autorisée.',
        ],
      },
      {
        id: 'safety',
        label: 'Sécurité',
        paragraphs: [
          'Facebook, Instagram, Messenger et Threads doivent être des environnements sûrs. Nous supprimons le contenu susceptible de causer des dommages physiques, de menacer, d\'exclure ou de faire taire autrui.',
        ],
      },
      {
        id: 'privacy',
        label: 'Confidentialité',
        paragraphs: [
          'Nous nous engageons à protéger la vie privée et les données personnelles. La confidentialité aide les gens à contrôler comment et quand ils partagent et se connectent à nos services.',
        ],
      },
      {
        id: 'dignity',
        label: 'Dignité',
        paragraphs: [
          'Nous pensons que tous les gens ont la même dignité et les mêmes droits. Nous n\'autorisons pas le harcèlement ou le traitement dégradant d\'autrui.',
        ],
      },
    ],
  },
  consequences: {
    title: 'Conséquences lorsqu\'une Page fan enfreint les Standards de la communauté',
    description:
      'Lorsque le contenu ou l\'activité sur une Page fan ne respecte pas les Standards de la communauté, Meta peut appliquer des mesures adaptées à la gravité et au contexte de l\'infraction. Les conséquences ci-dessous sont courantes en pratique — elles ne constituent pas une liste exhaustive et peuvent varier selon chaque cas.',
    items: [
      {
        title: 'Portée et distribution du contenu réduites',
        description:
          'Les publications et mises à jour de la Page fan peuvent atteindre moins de personnes dans le fil d\'actualité et sur les plateformes Meta, limitant la visibilité organique.',
      },
      {
        title: 'Fonctionnalités restreintes ou désactivées',
        description:
          'Certains outils — comme la messagerie, la vidéo en direct ou les fonctionnalités d\'achat — peuvent être limités ou temporairement indisponibles selon le domaine de politique concerné.',
      },
      {
        title: 'Suppression de contenu ou visibilité réduite',
        description:
          'Les publications ou médias en infraction peuvent être supprimés ou montrés à moins de personnes pendant la durée des mesures d\'application.',
      },
      {
        title: 'Limites sur la publication ou la publicité',
        description:
          'La Page fan peut faire l\'objet de restrictions pour publier du nouveau contenu, diffuser des publicités ou promouvoir des publications jusqu\'au rétablissement de la conformité.',
      },
      {
        title: 'Verrouillage temporaire ou désactivation permanente',
        description:
          'Des infractions répétées ou graves peuvent entraîner une suspension temporaire de la Page fan ; dans les cas les plus graves, la Page peut être désactivée définitivement après examen.',
      },
      {
        title: 'Impact sur la crédibilité et les résultats commerciaux',
        description:
          'Les mesures d\'application peuvent affecter la confiance du public, les indicateurs d\'engagement et l\'efficacité du marketing ou de la communication client via la Page fan.',
      },
    ],
    infoBox:
      'Le respect des Standards de la communauté contribue à maintenir un environnement sûr pour les utilisateurs et permet à la Page fan de fonctionner de manière stable en atteignant le bon public.',
  },
  steps: {
    title: 'Processus de soumission d\'un appel',
    subtitle: 'Chaque appel est examiné conformément aux règles de la communauté publiées sur le Transparency Center. Veuillez préparer toutes les informations requises avant de soumettre — durée estimée de remplissage du formulaire : 5 à 10 minutes.',
    items: [
      {
        title: 'Examiner la politique applicable et le contenu concerné',
        description: 'Accédez au Transparency Center et ouvrez la section de politique correspondant au contenu signalé. Lisez attentivement la Policy Rationale et les règles spécifiques, puis comparez-les directement avec la publication ou l\'activité sur votre page pour déterminer un fondement d\'appel valable.',
      },
      {
        title: 'Compléter le formulaire et vérifier les droits d\'administration',
        description: 'Remplissez intégralement le formulaire avec des informations d\'administrateur exactes, une adresse e-mail et un numéro de téléphone de contact valides, ainsi qu\'une brève description du contexte du contenu (le cas échéant). La demande n\'est acceptée que si le compte Facebook utilisé dispose des droits d\'administration de la page et termine la vérification d\'identité selon le processus Meta.',
      },
      {
        title: 'Suivre l\'état de l\'examen',
        description: 'Les résultats de l\'examen sont communiqués via les notifications Facebook (icône en forme de cloche) — et non par un e-mail distinct de ce formulaire. Le traitement prend généralement 3 à 7 jours ouvrables ; veuillez conserver votre code de référence pour suivre l\'avancement et faciliter l\'assistance si nécessaire.',
      },
    ],
  },
  testimonials: {
    title: 'Référence de Transparency Center',
    prevAria: 'Article précédent',
    nextAria: 'Article suivant',
    items: [
      {
        quote: 'Ces normes sont basées sur les commentaires des personnes et les conseils d\'experts en technologie, en sécurité publique et en droits de l\'homme — pour s\'assurer que la voix de chacun est valorisée.',
        author: 'Meta Transparency Center',
        role: 'Introduction',
      },
      {
        quote: 'Nos règles de la communauté s\'appliquent à tous, dans le monde entier, et à tous les types de contenu, y compris le contenu généré par l\'IA.',
        author: 'Meta Transparency Center',
        role: 'Portée',
      },
      {
        quote: 'La version anglaise américaine des règles de la communauté reflète l\'ensemble de politiques le plus récent et doit être utilisée comme document principal.',
        author: 'Meta Transparency Center',
        role: 'Document officiel',
      },
    ],
  },
  commonViolations: {
    title: 'Quelques infractions aux Standards de la communauté',
    description:
      'Les Standards de la communauté s\'appliquent à l\'ensemble du contenu et de l\'activité sur une Page fan. Voici des domaines de politique fréquemment identifiés lors des examens:',
    items: [
      {
        title: 'Fraude, escroqueries et tromperie',
        description:
          'Contenu ou activité visant à induire les personnes en erreur, obtenir indûment des informations ou des biens, ou créer de la confusion sur l\'identité, les produits ou les services.',
      },
      {
        title: 'Biens et services restreints',
        description:
          'Promotion, vente ou facilitation de transactions portant sur des articles ou services restreints selon les politiques de Meta ou la législation locale applicable.',
      },
      {
        title: 'Exploitation, abus et harcèlement',
        description:
          'Harcèlement, menaces, intimidation ou abus à l\'encontre de personnes ou de groupes, y compris un contenu susceptible de causer un préjudice psychologique ou physique.',
      },
      {
        title: 'Discours haineux',
        description:
          'Contenu attaquant directement des caractéristiques protégées de personnes ou de groupes, ou incitant à la violence ou à la discrimination fondée sur ces caractéristiques.',
      },
      {
        title: 'Contenu violent et choquant',
        description:
          'Images, vidéos ou descriptions de violence extrême, de gore ou de contenu choquant pouvant être restreints ou supprimés selon le contexte et la visibilité.',
      },
      {
        title: 'Personnes et organisations dangereuses',
        description:
          'Soutien, glorification ou représentation d\'organisations ou de personnes que Meta estime présenter un risque grave de préjudice ou de violence.',
      },
    ],
  },
  finalCta: {
    title: 'Faire appel',
    subtitle: 'Si, après examen des règles de la communauté, vous estimez que votre page est conforme à la politique, veuillez soumettre le formulaire avec les informations d\'administrateur et terminer la vérification d\'identité conformément aux instructions.',
    cta: 'Soumettre un appel',
  },
  faq: {
    title: 'Questions fréquemment posées',
    items: [
      {
        question: 'Un appel s\'applique-t-il aux profils personnels ou aux groupes ?',
        answer: 'Non. L\'avis sur cette page et le formulaire d\'appel s\'appliquent uniquement aux pages que vous administrez. Les profils personnels, les groupes ou d\'autres produits Meta ne relèvent pas de ce processus.',
      },
      {
        question: 'Puis-je soumettre un autre appel après un rejet ?',
        answer: 'Oui, lorsque vous disposez de nouvelles informations ou preuves non prises en compte lors de l\'examen précédent. Chaque nouvelle soumission doit préciser clairement ce qui diffère ; les demandes en double sans contenu nouveau peuvent ne pas être retraitées.',
      },
      {
        question: 'Que faut-il préparer avant de soumettre le formulaire d\'appel ?',
        answer: 'Préparez les liens ou identifiants des publications concernées, une brève description du contexte commercial ou de l\'objectif du contenu, et confirmez que vous êtes connecté avec un compte disposant d\'un accès administrateur de page dans Meta Business Suite.',
      },
      {
        question: 'À quoi sert le code de référence de la demande ?',
        answer: 'Chaque soumission de formulaire reçoit un code de référence unique. Veuillez le conserver pour suivre l\'état sur Facebook ou lorsque l\'assistance doit localiser votre dossier — le code ne remplace pas les notifications officielles dans l\'application.',
      },
      {
        question: 'La soumission d\'un appel suspend-elle les restrictions de la page ?',
        answer: 'Non. Votre page peut rester restreinte pendant l\'examen. Les résultats de l\'appel sont communiqués séparément et peuvent conduire à la levée des restrictions si la demande est approuvée.',
      },
      {
        question: 'Comment recevrai-je le résultat de l\'appel ?',
        answer: 'Via les notifications Facebook (icône en forme de cloche), et non par un e-mail distinct de ce formulaire. Veuillez activer les notifications liées à la page et vérifier régulièrement pendant plusieurs jours ouvrables après la soumission.',
      },
      {
        question: 'Comment les informations du formulaire sont-elles stockées et utilisées ?',
        answer: 'Les données que vous fournissez servent uniquement à traiter votre appel, vérifier les droits d\'administrateur et conserver des enregistrements selon les procédures internes de Meta, conformément à la Politique de confidentialité et aux Conditions — et non à des fins publicitaires.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Technologies Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Politiques',
        links: [
          { label: 'Centre de transparence' },
          { label: 'Règles de la communauté' },
        ],
      },
      {
        title: 'Assistance',
        links: [
          { label: 'Centre d\'aide' },
          { label: 'Centre d\'aide Meta pour les entreprises' },
        ],
      },
    ],
  },
}
