// A Tudástár tartalma: érdekességek, kutyanyelv, biztonsági tippek.

import { Accessibility, Baby, Bone, Ear, Eye, Fingerprint, Footprints, Moon, Rocket, Search, Thermometer, TreePine } from 'lucide-react'

export const FACTS = [
  { Icon: Fingerprint, title: 'Egyedi orrlenyomat', text: 'Minden kutya orrlenyomata egyedi, ahogyan az emberek ujjlenyomata is.' },
  { Icon: Search, title: 'Bajnok szaglás', text: 'A kutyák szaglása több tízezerszer érzékenyebb a miénknél. Még azt is kiszagolják, ki járt arra tegnap.' },
  { Icon: Footprints, title: 'Izzadó mancsok', text: 'A kutya a talppárnáin keresztül izzad, de főleg lihegéssel hűti magát.' },
  {
    Icon: Eye,
    title: 'Kék és sárga',
    text: 'A kutyák a kéket és a sárgát jól látják, a pirosat és a zöldet viszont alig tudják megkülönböztetni. A fűben egy kék labdát könnyebben megtalálnak, mint egy pirosat.',
  },
  { Icon: Baby, title: 'Vak kölykök', text: 'A kölykök csukott szemmel és füllel születnek, és csak körülbelül 2 hetes korukban kezdenek látni és hallani.' },
  { Icon: Bone, title: '42 fog', text: 'A felnőtt kutyának 42 foga van, a kölyöknek 28 tejfoga.' },
  { Icon: TreePine, title: 'A farkas rokona', text: 'A kutya a farkastól származik. Az ember legalább 15 ezer éve él együtt kutyákkal.' },
  { Icon: Rocket, title: 'Kutya az űrben', text: 'Az első élőlény, aki Föld körüli pályára jutott, egy Lajka nevű kutya volt, 1957-ben.' },
  { Icon: Ear, title: 'Éles hallás', text: 'A kutyák sokkal magasabb hangokat is meghallanak, mint mi. Ezért működik a kutyasíp, amit mi nem is hallunk.' },
  { Icon: Moon, title: 'Sokat alszanak', text: 'Egy felnőtt kutya naponta 12–14 órát is alszik, a kölykök és az idős kutyák még többet.' },
  { Icon: Thermometer, title: 'Melegebb test', text: 'A kutya testhőmérséklete magasabb a miénknél: nagyjából 38–39 °C.' },
  {
    Icon: Accessibility,
    title: 'Dolgozó segítők',
    text: 'A segítőkutyák (például a vakvezetők) munka közben a gazdájukra figyelnek. Ilyenkor nem szabad megsimogatni vagy magunkhoz hívni őket.',
  },
]

// level: 'ok' | 'calm' | 'warn' | 'stop'. A jelzés erősségét színnel és szöveggel is jelöljük.
export const BODY_SIGNALS = [
  { sign: 'Laza test, csóváló farok, nyitott, „mosolygó” száj', meaning: 'Jól érzi magát, barátságos.', level: 'ok' },
  { sign: 'Előrehajol, a feneke a magasban, a farka csóválódik', meaning: 'Játszani hív.', level: 'ok' },
  { sign: 'Ásít, a száját nyalogatja, elfordítja a fejét', meaning: 'Feszült, kellemetlenül érzi magát. Adj neki teret!', level: 'calm' },
  { sign: 'Behúzott farok, lelapított fül, összehúzza magát', meaning: 'Fél. Hagyd békén, ne menj közelebb!', level: 'warn' },
  { sign: 'Felálló szőr a hátán, merev, magasra tartott farok', meaning: 'Izgatott vagy feszült. Ne zavard!', level: 'warn' },
  { sign: 'Merev test, morgás, kivillanó fogak', meaning: 'Figyelmeztet: lassan, nyugodtan menj távolabb!', level: 'stop' },
]

export const SIGNAL_LEVELS = {
  ok: 'Nyugodt',
  calm: 'Feszült',
  warn: 'Fél / izgatott',
  stop: 'Figyelmeztet',
}

export const GREETING_STEPS = [
  { title: 'Kérdezz!', text: 'Mindig kérdezd meg a gazdát, megsimogathatod-e a kutyát.' },
  { title: 'Várj!', text: 'Ne rohanj oda. Hagyd, hogy a kutya jöjjön oda hozzád.' },
  { title: 'Szimat', text: 'Engedd, hogy megszagolja az ökölbe zárt kezedet, oldalról, ne a feje fölött.' },
  { title: 'Simogatás', text: 'Oldalt, a mellkasán vagy a vállán simogasd meg, ne a feje búbján.' },
  { title: 'Elég', text: 'Ne öleld meg, ne puszild meg, és ne hajolj fölé. Ha elmegy, hagyd elmenni.' },
]

export const TREE_STEPS = [
  { title: 'Állj meg!', text: 'Ne fuss el, és ne kiabálj.' },
  { title: 'Légy fa!', text: 'A kezedet kulcsold össze magad előtt.' },
  { title: 'Nézz le!', text: 'Nézd a lábadat, ne nézz a kutya szemébe.' },
  { title: 'Várj!', text: 'Maradj nyugodtan, amíg a kutya elmegy, vagy egy felnőtt odaér.' },
]

export const TOXIC_FOODS = [
  'Csokoládé',
  'Szőlő és mazsola',
  'Hagyma és fokhagyma',
  'Cukormentes rágó (xilit)',
  'Avokádó',
  'Makadámdió',
  'Kávé, kóla',
  'Emberi gyógyszerek',
]
