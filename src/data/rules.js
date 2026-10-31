// A kutyafuttató házirendje. A webes oldal és a nyomtatható PDF is ebből készül.

import { Ban, CigaretteOff, Dog, Eye, HeartPulse, PawPrint, Syringe, Trash2, Users } from 'lucide-react'

export const LAST_UPDATED = '2026. október 31.'

// A dohányzási tilalom szövege: a házirend, a főoldal és a plakát is ezt használja
export const SMOKING_BAN =
  'A kutyafuttató területén dohányozni, valamint e-cigarettát, hevített dohányterméket és más, dohányzást imitáló terméket használni szigorúan tilos.'

export const RULE_GROUPS = [
  {
    id: 'altalanos',
    title: 'Általános tudnivalók',
    items: [
      { text: 'A kutyafuttató üzemeltetője a Törökbálinti Városgondnokság.' },
      { text: 'A kutyafuttatót mindenki használhatja, aki a házirendet betartja. A területre lépéssel a látogató a házirendet elfogadja.' },
      {
        text: 'A futtató kizárólag a kutyával való játékra szolgál, más célra nem használható. A területen kerékpározni, rollerezni és labdajátékot játszani tilos, más állatot bevinni nem szabad.',
        important: true,
      },
      { text: 'A futtató használata során a mindenkori törökbálinti együttélési szabályokat kötelező betartani.', important: true },
      {
        text: 'A futtatót mindenki saját felelősségére használja. A kutya által okozott kárért (sérülés, állatorvosi költség, rongálás) a kutyát felügyelő személy felel.',
        important: true,
      },
      { text: 'Gépjárművel, motorkerékpárral és kerékpárral a területre behajtani tilos.' },
    ],
  },
  {
    id: 'belepes-feltetelei',
    title: 'Ki és milyen kutyával léphet be?',
    items: [
      {
        text: 'Csak egészséges, érvényes veszettség elleni oltással és mikrochippel rendelkező kutya vihető be. Az oltási könyvet vagy annak fényképét a gazdának magánál kell tartania.',
        important: true,
      },
      { text: 'A kutya rendszeres féreghajtása, valamint bolha és kullancs elleni védelme javasolt.' },
      { text: 'Tüzelő szukát, beteg vagy fertőző betegségre gyanús kutyát bevinni tilos.', important: true },
      { text: 'Hatóság által veszélyesnek minősített kutyát bevinni tilos. A támadó, agresszív kutyát a gazdája köteles azonnal elvinni a területről.' },
      { text: 'Egy felnőtt egyszerre legfeljebb két kutyát felügyelhet, és csak olyan kutyát vihet be, amelyet meg tud fogni és vissza tud hívni.' },
      {
        text: '14 év alatti gyermek csak felnőtt felügyeletével tartózkodhat a futtatón, és kutyát is csak felnőtt kíséretében vihet be.',
        important: true,
      },
      { text: 'Ittas vagy bódult állapotban lévő személy nem tartózkodhat a területen.' },
    ],
  },
  {
    id: 'belepes-tavozas',
    title: 'Érkezés és távozás',
    items: [
      { text: 'Belépés előtt célszerű megkérdezni a bent tartózkodó gazdákat, hogy csatlakozhat-e a kutya. Ha valaki ezt nem szeretné, azt tiszteletben kell tartani.' },
      { text: 'Belépéskor és távozáskor ügyelni kell arra, hogy egyetlen kutya se jusson ki a futtató területéről.', important: true },
      { text: 'A pórázt belépés után lehet lecsatolni, és távozás előtt még a futtató területén vissza kell csatolni.' },
      { text: 'A futtatón belül javasolt a nyakörv és a hám levétele, mert beakadhat valamibe vagy egy másik kutya fogába.' },
    ],
  },
  {
    id: 'futtaton-belul',
    title: 'A futtatón belül',
    items: [
      { text: 'A kutyát végig felügyelni kell. Ha egy másik kutyát vagy embert zaklat, a gazdának vissza kell hívnia.', important: true },
      { text: 'Az agresszíven viselkedő kutyát azonnal pórázra kell venni, és ki kell vinni a területről.' },
      { text: 'Más kutyáját csak a gazdája engedélyével szabad megsimogatni vagy megetetni.' },
      { text: 'Ha a kutyák féltékenyen őrzik a labdát vagy más játékot, a játékot el kell tenni.' },
      { text: 'A kutya által kiásott gödröket távozás előtt vissza kell temetni, mert balesetveszélyesek.' },
      { text: SMOKING_BAN, important: true },
      { text: 'Üveget, éles vagy törékeny tárgyat bevinni tilos. A területen alkoholt fogyasztani tilos.' },
      { text: 'A környéken lakók nyugalma érdekében kerülni kell a hangoskodást, különösen este. A folyamatosan ugató kutyát meg kell nyugtatni, vagy el kell vinni sétálni.' },
    ],
  },
  {
    id: 'tisztasag',
    title: 'Tisztaság',
    items: [
      { text: 'A kutya ürülékét a gazda köteles azonnal összeszedni és hulladékgyűjtőbe dobni, a futtatón belül és kívül egyaránt.', important: true },
      { text: 'A gazdánál mindig legyen elegendő zacskó.' },
      { text: 'Szemetelni tilos. A hulladékot hulladékgyűjtőbe kell dobni vagy el kell vinni. A cigarettacsikk is hulladék, és mérgező a kutyákra.', important: true },
      { text: 'A futtató területét és a világítást kímélni kell, a területet rendezett állapotban kell elhagyni.' },
      { text: 'Rongálást vagy hibát, például nem működő lámpát, az üzemeltetőnél, a Törökbálinti Városgondnokságnál lehet bejelenteni.' },
    ],
  },
  {
    id: 'futtaton-kivul',
    title: 'A futtatón kívül',
    items: [
      { text: 'A futtató területén kívül a kutyát mindig pórázon kell vezetni. Belterületen, közterületen ezt jogszabály írja elő.', important: true },
      {
        text: 'A kutya ürülékét az utcán, a járdán és a környező zöldterületeken is össze kell szedni. Aki ezt elmulasztja, köztisztasági szabálysértést követ el, és bírsággal sújtható.',
      },
      { text: 'Parkolni csak szabályosan, a kapubejárók elzárása nélkül szabad.' },
    ],
  },
  {
    id: 'baleset',
    title: 'Baleset vagy vita esetén',
    items: [
      { text: 'Ha egy kutya megsebesít egy másik kutyát vagy egy embert, a gazdája köteles a helyszínen maradni, segítséget nyújtani és az elérhetőségét megadni.' },
      { text: 'Kutya sérülése esetén állatorvoshoz kell fordulni. Ha ember sérül meg, a 112-es segélyhívó számot kell hívni.' },
      { text: 'A vitákat higgadtan, egymást tiszteletben tartva kell rendezni.' },
    ],
  },
]

// A legfontosabb szabályok (főoldal és a PDF első oldala). A „tilos” jellegűek pirosak.
export const KEY_RULES = [
  { Icon: Trash2, title: 'Kutyapiszok összeszedése', text: 'A kutya ürülékét össze kell szedni, a futtatón belül és kívül is.' },
  { Icon: Ban, title: 'Szemetelni tilos', text: 'A hulladékot hulladékgyűjtőbe kell dobni. A cigarettacsikk is hulladék.', red: true },
  { Icon: CigaretteOff, title: 'Dohányozni szigorúan tilos', text: 'Az e-cigaretta, a hevített dohánytermék és más, dohányzást imitáló termék használata is.', red: true },
  { Icon: Dog, title: 'Póráz a futtatón kívül', text: 'A futtató területén kívül a kutyát pórázon kell vezetni.' },
  { Icon: PawPrint, title: 'Csak kutyával való játékra', text: 'A futtató más célra nem használható.', red: true },
  { Icon: Syringe, title: 'Oltás és mikrochip', text: 'Csak érvényes veszettség elleni oltással és mikrochippel rendelkező kutya vihető be.' },
  { Icon: HeartPulse, title: 'Csak egészséges kutya', text: 'Tüzelő szukát, beteg vagy fertőzésre gyanús kutyát bevinni tilos.', red: true },
  { Icon: Eye, title: 'Folyamatos felügyelet', text: 'A kutyát végig felügyelni kell, és vissza kell hívni, ha másokat zavar.' },
  { Icon: Users, title: 'Gyermekek felnőttel', text: '14 év alatti gyermek csak felnőtt felügyeletével tartózkodhat a területen.' },
]

export const LEGAL_NOTES = [
  'Belterület közterületén, az ebek futtatására kijelölt terület kivételével, kutyát csak pórázon lehet vezetni (a kedvtelésből tartott állatokról szóló 41/2010. (II. 26.) Korm. rendelet).',
  'A 4 hónapos kort betöltött kutyát mikrochippel kell megjelölni (41/2010. (II. 26.) Korm. rendelet).',
  'A 3 hónaposnál idősebb kutyát veszettség ellen be kell oltani, és az oltást évente ismételni kell (164/2008. (XII. 20.) FVM rendelet).',
  'A kutya ürülékét a gazdának közterületről mindig el kell távolítania. Ennek elmulasztása köztisztasági szabálysértés.',
]

// A letölthető, kifüggeszthető változat
export const POSTER_PDFS = [
  { size: 'A4', href: '/letoltes/kutyafuttato-hazirend-A4.pdf' },
  { size: 'A3', href: '/letoltes/kutyafuttato-hazirend-A3.pdf' },
]
