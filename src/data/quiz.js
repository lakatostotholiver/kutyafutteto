// Kvízkérdések a felelős kutyatartásról. Az első helyes válasz az `answer`,
// a játék a válaszlehetőségeket minden körben összekeveri.

export const QUIZ = [
  {
    topic: 'Tisztaság',
    question: 'Séta közben a kutyád elvégzi a dolgát a járdán. Mit teszel?',
    answer: 'Zacskóval felszedem, és a kukába dobom.',
    wrong: ['Otthagyom, majd elmossa az eső.', 'Odébb rúgom a fűbe.', 'Megkérem a szomszédot, hogy szedje fel.'],
    explain:
      'A kutyapiszok felszedése mindenhol a gazdi dolga: a járdán, a fűben és a futtatón is. Az otthagyott piszok betegségeket terjeszthet, és bírságot is kaphat érte a gazda.',
  },
  {
    topic: 'Szabályok',
    question: 'Hol szaladgálhat póráz nélkül a kutya a városban?',
    answer: 'A bekerített, kijelölt kutyafuttatón.',
    wrong: ['A játszótéren.', 'Bárhol, ha jó kutya.', 'A buszmegállóban.'],
    explain:
      'A településen, közterületen a kutyát pórázon kell vezetni. Póráz nélkül csak a kijelölt kutyafuttatón lehet.',
  },
  {
    topic: 'Egészség',
    question: 'Milyen gyakran kell a kutyát veszettség elleni oltásra vinni?',
    answer: 'Évente egyszer.',
    wrong: ['Soha, csak ha beteg.', 'Csak kölyökkorában egyszer.', 'Tízévente.'],
    explain:
      'A veszettség elleni oltás 3 hónapos kortól kötelező, és minden évben meg kell ismételni. Az állatorvos beírja az oltási könyvbe.',
  },
  {
    topic: 'Szabályok',
    question: 'Mire jó a kutya bőre alá ültetett mikrochip?',
    answer: 'Ha a kutya elveszik, a chip alapján megtalálják a gazdáját.',
    wrong: [
      'Megmutatja, merre jár a kutya, mint egy GPS.',
      'Energiával tölti fel a kutyát.',
      'Lefordítja az ugatást emberi nyelvre.',
    ],
    explain:
      'A rizsszem méretű chipet az állatorvos ülteti be. Nem GPS, de egy leolvasóval kiderül belőle, ki a kutya gazdája. Magyarországon 4 hónapos kortól kötelező.',
  },
  {
    topic: 'Egészség',
    question: 'Melyik étel mérgező a kutyáknak?',
    answer: 'A csokoládé.',
    wrong: ['A főtt sárgarépa.', 'A kutyatáp.', 'A friss víz.'],
    explain:
      'A csokoládé, a szőlő, a mazsola és a hagyma is veszélyes lehet a kutyákra. Csak kutyának való falatot adj nekik!',
  },
  {
    topic: 'Biztonság',
    question: 'Egy aranyos kutyát látsz az utcán. Mit teszel, mielőtt megsimogatnád?',
    answer: 'Megkérdezem a gazdáját, hogy szabad-e.',
    wrong: ['Azonnal megölelem.', 'Hátulról odaszaladok hozzá.', 'Megkínálom a szendvicsemmel.'],
    explain:
      'Nem minden kutya szereti, ha idegenek simogatják. Mindig kérdezd meg a gazdát, és hagyd, hogy a kutya jöjjön oda hozzád.',
  },
  {
    topic: 'Gondoskodás',
    question: 'Nyári melegben szabad a kutyát „csak öt percre” az autóban hagyni?',
    answer: 'Nem, mert a napon álló autóban percek alatt életveszélyes hőség lesz.',
    wrong: ['Igen, ha résnyire nyitva van az ablak.', 'Igen, ha kap egy tál vizet.', 'Igen, ha éppen alszik.'],
    explain:
      'A napon álló autó belseje nagyon gyorsan felforrósodik, és a résnyire nyitott ablak sem segít. A kutya hőgutát kaphat.',
  },
  {
    topic: 'Kutyanyelv',
    question: 'Egy kutya ásítozik, a száját nyalogatja és elfordítja a fejét. Mit jelezhet ezzel?',
    answer: 'Feszült, kellemetlenül érzi magát.',
    wrong: ['Nagyon éhes.', 'Mindjárt elalszik a boldogságtól.', 'Játszani hív.'],
    explain:
      'Ezek a kutya nyugtató jelzései: azt üzenik, hogy most sok neki a helyzet. Ilyenkor hagyd őt békén.',
  },
  {
    topic: 'Biztonság',
    question: 'Egy ismeretlen kutya rohan feléd. Mit érdemes tenned?',
    answer: 'Megállok, mint egy fa: összekulcsolom a kezem, és a lábamat nézem.',
    wrong: ['Elfutok, amilyen gyorsan csak tudok.', 'Kiabálok és integetek.', 'Mélyen a szemébe nézek.'],
    explain:
      'A futás üldözésre csábítja a kutyát. Ha mozdulatlan maradsz, mint egy fa, hamar elveszti az érdeklődését.',
  },
  {
    topic: 'Gondoskodás',
    question: 'Szabad a kutyát egész nap láncon tartani?',
    answer: 'Nem, Magyarországon tilos a kutyát tartósan kikötve tartani.',
    wrong: ['Igen, ha jó hosszú a lánc.', 'Igen, ha nincs kerítés.', 'Igen, de csak télen.'],
    explain:
      'A kutyának mozgásra van szüksége. Tartósan láncon tartani tilos, megfelelő, bekerített helyet kell neki biztosítani.',
  },
  {
    topic: 'Szabályok',
    question: 'Ki felel a kutyáért a kutyafuttatón?',
    answer: 'A gazdája, aki elhozta.',
    wrong: ['A futtatót építő munkások.', 'A többi kutya.', 'Senki.'],
    explain:
      'A futtatón mindenki a saját kutyájáért felel. Figyelnie kell rá, és ha a kutya kárt okoz, azt neki kell rendeznie.',
  },
  {
    topic: 'Szabályok',
    question: 'Mikor nem szabad a kutyát a kutyafuttatóba vinni?',
    answer: 'Ha beteg, vagy ha tüzelő szuka.',
    wrong: ['Ha szombat van.', 'Ha nagyon vidám.', 'Ha nemrég fürdött.'],
    explain:
      'A beteg kutya megfertőzheti a többieket, a tüzelő szuka miatt pedig a kan kutyák összeverekedhetnek.',
  },
  {
    topic: 'Biztonság',
    question: 'Egy kutya éppen eszik vagy alszik. Mit teszel?',
    answer: 'Békén hagyom, nem zavarom.',
    wrong: ['Megsimogatom, hátha örül.', 'Elveszem a tálját, hogy játsszon velem.', 'Hangosan felébresztem.'],
    explain:
      'Az evő vagy alvó kutya megijedhet, és ijedtében akár meg is kaphat. Várd meg, amíg ő jön oda hozzád.',
  },
  {
    topic: 'Gondoskodás',
    question: 'Mire van szüksége a kutyának minden nap?',
    answer: 'Friss vízre, neki való ételre, mozgásra és figyelemre.',
    wrong: ['Csak egy szép nyakörvre.', 'Sok süteményre.', 'Egy saját telefonra.'],
    explain:
      'A kutya családtag: friss víz, neki való étel, napi séta, játék és törődés kell neki, és évente egyszer állatorvosi vizsgálat.',
  },
  {
    topic: 'Biztonság',
    question: 'Munka közben látsz egy mellényes vakvezető kutyát. Mit teszel?',
    answer: 'Nem simogatom meg és nem hívom magamhoz, mert dolgozik.',
    wrong: ['Odahívom, hogy játsszon velem.', 'Megetetem a tízóraimmal.', 'Megsimogatom, amíg fotózom.'],
    explain:
      'A segítőkutyának a gazdájára kell figyelnie. Ha elvonod a figyelmét, a gazdája veszélybe kerülhet.',
  },
  {
    topic: 'Érdekesség',
    question: 'Hány foga van egy felnőtt kutyának?',
    answer: '42',
    wrong: ['20', '32', '100'],
    explain:
      'A felnőtt kutyának 42 foga van, 10-zel több, mint egy felnőtt embernek. A kölyköknek 28 tejfoguk van.',
  },
  {
    topic: 'Biztonság',
    question: 'Egy gazdáját kereső, elkóborolt kutyát látsz. Mi a teendő?',
    answer: 'Szólok egy felnőttnek, aki segít megkeresni a gazdáját.',
    wrong: ['Titokban hazaviszem.', 'Elkergetem.', 'Nem törődöm vele.'],
    explain:
      'Az elkóborolt kutya ijedt lehet, ezért ne közelíts hozzá egyedül. Egy felnőtt segíthet: az állatorvos a chip alapján megtalálhatja a gazdát.',
  },
  {
    topic: 'Érdekesség',
    question: 'Melyik érzékszervével ismeri meg a kutya a legjobban a világot?',
    answer: 'A szaglásával.',
    wrong: ['A látásával.', 'Az ízlelésével.', 'A tapintásával.'],
    explain:
      'A kutya szaglása több tízezerszer érzékenyebb a miénknél. Egy szimatolós séta neki olyan, mint nekünk egy izgalmas könyv.',
  },
]
