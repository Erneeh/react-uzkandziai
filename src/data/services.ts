import foto1 from '../assets/foto1.jpeg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo5 from '../assets/photo5.jpg'
import photo7 from '../assets/photo7.jpg'
import photo11 from '../assets/photo11.jpg'
import photo13 from '../assets/photo13.jpg'
import photo14 from '../assets/photo14.jpg'
import photo17 from '../assets/photo17.jpg'
import photo18 from '../assets/photo18.jpeg'
import photo19 from '../assets/photo19.jpeg'

export const PHONE_DISPLAY = '+370 626 99956'
export const PHONE_HREF = 'tel:+37062699956'

export interface Service {
  slug: string
  navTitle: string
  metaTitle: string
  metaDescription: string
  cardText: string
  h1: string
  intro: string
  heroImage: string
  heroAlt: string
  benefits: { title: string; text: string }[]
  steps?: { title: string; text: string }[]
  pricing: string
  faq: { q: string; a: string }[]
  related: { slug: string; text: string }[]
  galleryPhotos: { src: string; alt: string }[]
}

export const services: Service[] = [
  {
    slug: 'uzkandziu-padeklai',
    navTitle: 'Užkandžių padėklai',
    metaTitle: 'Užkandžių Padėklai Pasvalyje – Užsakykite Savo Šventei | Sumuštinukai.lt',
    metaDescription:
      'Užkandžių padėklai Pasvalyje ir aplinkiniuose rajonuose – švieži, ranka gaminti užkandžiai gimtadieniams, vestuvėms, krikštynoms ir kitoms progoms. Skambinkite ir užsisakykite.',
    cardText: 'Švieži, ranka gaminti užkandžių padėklai bet kokiai progai – nuo šeimos šventės iki didelio pobūvio.',
    h1: 'Užkandžių padėklai Pasvalyje – pilnas vaišių stalas be rūpesčių',
    intro:
      'Ruošiame užkandžių padėklus gimtadieniams, vestuvėms, krikštynoms ir kitoms progoms Pasvalyje bei aplinkiniuose rajonuose. Pasakykite svečių skaičių ir progą – visa kita padarysime mes, o padėklą atsiimsite paruoštą jūsų pasirinktą dieną.',
    heroImage: foto1,
    heroAlt: 'Užkandžių padėklas su mini sumuštinukais, vyniotiniais ir daržovėmis šventei',
    benefits: [
      {
        title: 'Šviežia jūsų šventės dienai',
        text: 'Užkandžiai gaminami užsakymo dienai, todėl ant stalo viskas patiekiama šviežia ir skanu.',
      },
      {
        title: 'Gražu ir skanu',
        text: 'Kiekvienas padėklas išdėliojamas taip, kad atrodytų kaip šventės puošmena – ne tik maistas, bet ir stalo akcentas.',
      },
      {
        title: 'Pritaikome jūsų progai',
        text: 'Suderiname sudėtį pagal svečių skaičių, skonį ir biudžetą – nuo jaukios šeimos šventės iki didelio pobūvio.',
      },
    ],
    pricing:
      'Kaina priklauso nuo padėklo dydžio ir sudėties. Pasakykite svečių skaičių telefonu – tikslią kainą sužinosite per vieną skambutį.',
    faq: [
      {
        q: 'Prieš kiek laiko reikia užsisakyti?',
        a: 'Rekomenduojame skambinti bent prieš kelias dienas, kad suderintume sudėtį ir spėtume paruošti šviežius produktus jūsų datai. Dėl skubių užsakymų visada verta paskambinti – dažnai randame išeitį.',
      },
      {
        q: 'Kokiam svečių skaičiui ruošiate padėklus?',
        a: 'Ruošiame tiek mažoms šeimos šventėms, tiek dideliems pobūviams – padėklų kiekį ir dydį pritaikome pagal jūsų svečių skaičių.',
      },
      {
        q: 'Ar galima pasirinkti, kas bus ant padėklo?',
        a: 'Taip – sudėtį deriname kartu: mini sumuštinukai, vyniotiniai, krepšeliai, mėsos užkandžiai ir kita. Atsižvelgiame ir į svečių pageidavimus ar alergijas.',
      },
    ],
    related: [
      {
        slug: 'duonos-tortai',
        text: 'Norite išskirtinio stalo akcento? Užsakykite ir duonos tortą.',
      },
      {
        slug: 'vaisiu-stalo-paruosimas',
        text: 'Nenorite patys dengti stalo? Atvyksime ir serviruosime už jus.',
      },
    ],
    galleryPhotos: [
      { src: photo2, alt: 'Užkandžių padėklas su ikrų krepšeliais ir kumpio rožytėmis' },
      { src: photo3, alt: 'Mėsos užkandžių padėklas su dekoracijomis' },
      { src: photo7, alt: 'Didelis užkandžių padėklas su mini burgeriais ir krepšeliais' },
      { src: photo11, alt: 'Šventinis užkandžių padėklas su mini sumuštinukais ir vištienos užkandžiais' },
    ],
  },
  {
    slug: 'duonos-tortai',
    navTitle: 'Duonos tortai',
    metaTitle: 'Duonos Tortai Šventėms Pasvalyje – Užsakykite Stalo Akcentą | Sumuštinukai.lt',
    metaDescription:
      'Duonos tortai šventėms Pasvalyje – ranka gaminamas, gausiai dekoruotas užkandžių tortas, kuris taps jūsų šventės stalo akcentu. Skambinkite ir užsisakykite savo progai.',
    cardText: 'Gausiai dekoruotas sūrus užkandžių tortas – vaišės ir stalo puošmena viename.',
    h1: 'Duonos tortai šventėms – akį traukiantis stalo akcentas',
    intro:
      'Gaminame duonos tortus gimtadieniams, jubiliejams ir kitoms šventėms Pasvalyje ir aplink. Tai sūrus užkandžių tortas, kuris atstoja ir vaišes, ir puošmeną – svečiai pirmiausia fotografuoja, o tada suvalgo.',
    heroImage: photo19,
    heroAlt: 'Dekoruotas duonos tortas su kumpio rožytėmis, pomidorais ir žalumynais',
    benefits: [
      {
        title: 'Vaišės ir puošmena viename',
        text: 'Duonos tortas pakeičia kelis užkandžių padėklus ir tampa pagrindiniu stalo akcentu, apie kurį kalbės svečiai.',
      },
      {
        title: 'Ranka dekoruotas',
        text: 'Kiekvienas tortas puošiamas rankomis – mėsos rožytėmis, daržovėmis ir žalumynais pagal jūsų progą.',
      },
      {
        title: 'Skonis pagal jus',
        text: 'Įdarus ir sudėtį suderiname pagal jūsų pageidavimus – nuo klasikos iki išskirtinių derinių.',
      },
    ],
    pricing:
      'Kaina priklauso nuo torto dydžio ir įdarų. Pasakykite svečių skaičių ir progą telefonu – tikslią kainą sužinosite iš karto.',
    faq: [
      {
        q: 'Kiek žmonių pasotina duonos tortas?',
        a: 'Priklauso nuo dydžio – tortą pagaminame tiek mažai šeimos šventei, tiek dideliam pobūviui. Skambindami pasakykite svečių skaičių ir parinksime tinkamą dydį.',
      },
      {
        q: 'Ar duonos tortas tinka vietoj užkandžių padėklų?',
        a: 'Taip – jis puikiai atstoja užkandžius, tačiau dažniausiai užsakomas kartu su padėklais, kad stalas būtų ir sotus, ir įspūdingas.',
      },
    ],
    related: [
      {
        slug: 'uzkandziu-padeklai',
        text: 'Prie torto puikiai dera mūsų užkandžių padėklai.',
      },
      {
        slug: 'uzkandziai-gimtadieniui',
        text: 'Ruošiatės gimtadieniui? Žiūrėkite užkandžius gimtadieniui.',
      },
    ],
    galleryPhotos: [
      { src: photo19, alt: 'Duonos tortas su šventine dekoracija' },
      { src: photo18, alt: 'Skaičiaus formos užkandžių tortas gimtadieniui' },
      { src: photo3, alt: 'Mėsos užkandžių padėklas šventiniam stalui' },
      { src: photo14, alt: 'Šventinių bandelių ir užkandžių padėklas' },
    ],
  },
  {
    slug: 'vaisiu-stalo-paruosimas',
    navTitle: 'Vaišių stalo paruošimas',
    metaTitle: 'Vaišių Stalo Paruošimas Šventėms Pasvalyje – Atvykstame ir Serviruojame | Sumuštinukai.lt',
    metaDescription:
      'Vaišių stalo paruošimas ir serviravimas jūsų šventės vietoje Pasvalyje ir aplink – atvykstame, gražiai padengiame ir paruošiame stalą iš jūsų produktų. Valandinis įkainis arba kaina pagal svečių skaičių.',
    cardText: 'Atvykstame į jūsų šventės vietą ir serviruojame stalą iš jūsų produktų – mokate tik už darbą.',
    h1: 'Vaišių stalo paruošimas šventėms – atvykstame ir serviruojame už jus',
    intro:
      'Atvykstame į jūsų šventės vietą ir gražiai padengiame bei serviruojame vaišių stalą iš jūsų turimų produktų – jums lieka tik sutikti svečius. Mokate tik už darbą: pagal valandinį įkainį arba pagal svečių skaičių.',
    heroImage: photo5,
    heroAlt: 'Serviruotas šventinis vaišių stalas su užkandžiais',
    benefits: [
      {
        title: 'Jūsų produktai – mūsų darbas',
        text: 'Nieko nepirksime už jus ir neantkainiuosime – dirbame su jūsų nupirktais produktais, todėl mokate tik už paruošimą.',
      },
      {
        title: 'Aiški kaina',
        text: 'Atsiskaitote pagal valandinį įkainį arba sutartą sumą už svečią – kainą sutariame iš anksto, be staigmenų.',
      },
      {
        title: 'Šventė be streso',
        text: 'Kol mes dengiame ir puošiame stalą, jūs ruošiatės šventei – atvykstame sutartu laiku ir viską paliekame paruošta.',
      },
    ],
    steps: [
      { title: 'Paskambinate', text: 'Pasakote šventės vietą, datą ir svečių skaičių.' },
      { title: 'Suderiname', text: 'Patariame, kiek ir kokių produktų nupirkti, ir sutariame kainą.' },
      { title: 'Atvykstame ir paruošiame', text: 'Sutartu laiku padengiame ir paliekame stalą paruoštą svečiams.' },
    ],
    pricing:
      'Mokate tik už darbą – pagal valandinį įkainį arba pagal svečių skaičių. Pasakykite šventės vietą, datą ir svečių skaičių, o kainą suderinsime vienu skambučiu.',
    faq: [
      {
        q: 'Ar perkate produktus už mane?',
        a: 'Ne – produktais pasirūpinate jūs, o mes patariame, kiek ir ko reikės pagal svečių skaičių. Taip jūs kontroliuojate biudžetą, o mes pasirūpiname paruošimu ir pateikimu.',
      },
      {
        q: 'Kaip skaičiuojama kaina?',
        a: 'Dviem būdais – pagal darbo valandas arba pagal svečių skaičių. Pasiūlysime tą variantą, kuris jūsų šventei palankesnis.',
      },
      {
        q: 'Kur atvykstate?',
        a: 'Dirbame Pasvalyje ir aplinkiniuose rajonuose – namuose, sodybose, pobūvių salėse ar darbovietėse.',
      },
    ],
    related: [
      {
        slug: 'uzkandziu-padeklai',
        text: 'Norite, kad ir užkandžius paruoštume mes? Užsakykite užkandžių padėklus.',
      },
      {
        slug: 'uzkandziai-vestuvems',
        text: 'Ruošiate vestuves? Žiūrėkite užkandžius vestuvėms.',
      },
    ],
    galleryPhotos: [
      { src: photo5, alt: 'Šventinis stalas su užkandžių asorti' },
      { src: photo11, alt: 'Užkandžių padėklas ant šventinio stalo' },
      { src: photo7, alt: 'Gausus užkandžių padėklas pobūviui' },
      { src: photo13, alt: 'Šventinių kepinių padėklas' },
    ],
  },
  {
    slug: 'uzkandziai-gimtadieniui',
    navTitle: 'Užkandžiai gimtadieniui',
    metaTitle: 'Užkandžiai Gimtadieniui Pasvalyje – Paruošime Jūsų Šventei | Sumuštinukai.lt',
    metaDescription:
      'Užkandžiai gimtadieniui Pasvalyje – užkandžių padėklai, skaičių formos tortai ir duonos tortai jūsų gimtadienio stalui. Skambinkite ir užsisakykite savo datai.',
    cardText: 'Padėklai, skaičių formos tortai ir duonos tortai jūsų gimtadienio stalui.',
    h1: 'Užkandžiai gimtadieniui – paruošime stalą, kol jūs švęsite',
    intro:
      'Ruošiame užkandžius gimtadieniams Pasvalyje ir aplink: užkandžių padėklus, skaičių formos užkandžių tortus ir duonos tortus. Pasakykite datą ir svečių skaičių – gimtadienio stalą paruošime už jus.',
    heroImage: photo18,
    heroAlt: 'Skaičiaus 22 formos užkandžių tortas gimtadieniui su lašiša ir kumpio rožytėmis',
    benefits: [
      {
        title: 'Skaičių formos tortai',
        text: 'Gimtadienio metai – ant stalo! Užkandžių tortas jubiliato skaičiaus forma tampa šventės įžymybe ir nuotraukų akcentu.',
      },
      {
        title: 'Visas stalas iš vienų rankų',
        text: 'Padėklai, tortas ir užkandžiai deriniami tarpusavyje, kad gimtadienio stalas atrodytų vientisai ir gausiai.',
      },
      {
        title: 'Jokio gaminimo namuose',
        text: 'Atsiimate paruošta arba suderinime pristatymą – gimtadienio rytą praleidžiate ruošdamiesi šventei, o ne virtuvėje.',
      },
    ],
    pricing:
      'Kaina priklauso nuo svečių skaičiaus ir užsakymo sudėties. Paskambinkite, pasakykite datą ir svečių kiekį – kainą sužinosite iš karto.',
    faq: [
      {
        q: 'Ar galite pagaminti tortą su gimtadienio skaičiumi?',
        a: 'Taip – gaminame užkandžių tortus norimo skaičiaus forma, dekoruotus lašiša, kumpio rožytėmis ir žalumynais.',
      },
      {
        q: 'Kiek užkandžių užsakyti vienam svečiui?',
        a: 'Priklauso nuo to, ar užkandžiai bus pagrindinis maistas, ar priedas. Paskambinkite – pagal svečių skaičių patarsime tikslų kiekį, kad nei pritrūktų, nei liktų per daug.',
      },
    ],
    related: [
      {
        slug: 'duonos-tortai',
        text: 'Jubiliejui puikiai tinka ir mūsų duonos tortai.',
      },
      {
        slug: 'vaisiu-stalo-paruosimas',
        text: 'Norite, kad stalą padengtume jūsų namuose? Užsakykite vaišių stalo paruošimą.',
      },
    ],
    galleryPhotos: [
      { src: photo18, alt: 'Skaičiaus formos gimtadienio užkandžių tortas' },
      { src: photo19, alt: 'Duonos tortas gimtadienio stalui' },
      { src: foto1, alt: 'Užkandžių padėklas gimtadienio svečiams' },
      { src: photo14, alt: 'Bandelių ir užkandžių padėklas gimtadieniui' },
    ],
  },
  {
    slug: 'uzkandziai-vestuvems',
    navTitle: 'Užkandžiai vestuvėms',
    metaTitle: 'Užkandžiai Vestuvėms Pasvalyje – Elegantiški Padėklai | Sumuštinukai.lt',
    metaDescription:
      'Užkandžiai vestuvėms Pasvalyje ir aplink – elegantiški užkandžių padėklai sutiktuvėms, šampano staliukui ir vakaro vaišėms. Skambinkite ir suderinkite savo vestuvių datą.',
    cardText: 'Elegantiški padėklai sutiktuvėms, šampano staliukui ir vakaro vaišėms.',
    h1: 'Užkandžiai vestuvėms – elegantiškas stalas jūsų didžiajai dienai',
    intro:
      'Ruošiame užkandžius vestuvėms Pasvalyje ir aplinkiniuose rajonuose – nuo svečių sutiktuvių ir šampano staliuko iki gausių vakaro padėklų. Suderinkite datą iš anksto, o vestuvių dieną stalas bus paruoštas be jūsų rūpesčių.',
    heroImage: photo2,
    heroAlt: 'Elegantiškas vestuvių užkandžių padėklas su ikrų krepšeliais ir kumpio rožytėmis',
    benefits: [
      {
        title: 'Šventei tinkanti estetika',
        text: 'Vestuvėms užkandžiai dekoruojami ypač kruopščiai – rožytės, krepšeliai ir vėrinukai atrodo taip pat gerai, kaip ir skanauja.',
      },
      {
        title: 'Nuo sutiktuvių iki vakaro',
        text: 'Paruošiame užkandžius visoms vestuvių dalims: sutiktuvėms, šampano staliukui ir nakties užkandžiams.',
      },
      {
        title: 'Suderinta iš anksto',
        text: 'Sudėtį, kiekius ir atsiėmimo laiką suplanuojame iš anksto, kad didžiąją dieną viskas vyktų sklandžiai.',
      },
    ],
    pricing:
      'Kaina priklauso nuo svečių skaičiaus ir pasirinktų užkandžių. Paskambinkite, aptarsime jūsų vestuvių planą ir suderinsime tikslią kainą.',
    faq: [
      {
        q: 'Prieš kiek laiko rezervuoti vestuvių datą?',
        a: 'Vestuvėms rekomenduojame kreiptis kuo anksčiau – ypač vasaros savaitgaliams. Paskambinkite ir pasitikslinkite, ar jūsų data dar laisva.',
      },
      {
        q: 'Ar galite paruošti stalą šventės vietoje?',
        a: 'Taip – be padėklų paruošimo, galime atvykti ir serviruoti vaišių stalą jūsų šventės vietoje. Ši paslauga užsakoma atskirai.',
      },
    ],
    related: [
      {
        slug: 'vaisiu-stalo-paruosimas',
        text: 'Užsakykite ir vaišių stalo paruošimą šventės vietoje.',
      },
      {
        slug: 'uzkandziu-padeklai',
        text: 'Peržiūrėkite visus mūsų užkandžių padėklus.',
      },
    ],
    galleryPhotos: [
      { src: photo2, alt: 'Vestuvių užkandžių padėklas su ikrais' },
      { src: photo17, alt: 'Krepšelis su lašiša ir avokado kremu' },
      { src: foto1, alt: 'Gausus užkandžių padėklas vestuvių svečiams' },
      { src: photo5, alt: 'Užkandžių stalas vestuvių pobūviui' },
    ],
  },
  {
    slug: 'uzkandziai-krikstynoms',
    navTitle: 'Užkandžiai krikštynoms',
    metaTitle: 'Užkandžiai Krikštynoms Pasvalyje – Jaukios Vaišės Šeimai | Sumuštinukai.lt',
    metaDescription:
      'Užkandžiai krikštynoms Pasvalyje – užkandžių padėklai ir kepiniai jaukiai šeimos šventei. Paruošime jūsų pasirinktai dienai, skambinkite ir užsisakykite.',
    cardText: 'Jaukios vaišės šeimos šventei – užkandžiai, kurie patiks ir vaikams, ir senjorams.',
    h1: 'Užkandžiai krikštynoms – jaukios vaišės šeimos šventei',
    intro:
      'Ruošiame užkandžius krikštynoms Pasvalyje ir aplink – padėklus, kepinius ir užkandžių tortus, pritaikytus jaukiai šeimos šventei. Pasakykite svečių skaičių, o vaišėmis pasirūpinsime mes.',
    heroImage: photo13,
    heroAlt: 'Šventinių kepinių ir užkandžių padėklas krikštynoms',
    benefits: [
      {
        title: 'Tinka visai šeimai',
        text: 'Parenkame užkandžius, kurie patiks ir vaikams, ir senjorams – nuo švelnių krepšelių iki naminių kepinių.',
      },
      {
        title: 'Jaukiai šventei – tinkamas kiekis',
        text: 'Krikštynos dažniausiai būna artimame rate, todėl padėsime apskaičiuoti kiekį, kad stalas būtų gausus be švaistymo.',
      },
      {
        title: 'Paruošta jūsų dienai',
        text: 'Užkandžius atsiimate šviežius sutartą valandą – šventės dieną jums lieka tik gražiai padengti stalą.',
      },
    ],
    pricing:
      'Kaina priklauso nuo svečių skaičiaus ir užkandžių pasirinkimo. Paskambinkite ir per kelias minutes suderinsime sudėtį bei kainą.',
    faq: [
      {
        q: 'Ar turite švelnesnių užkandžių vaikams?',
        a: 'Taip – galime įtraukti vaikams tinkamus užkandžius be aštrių ar sūdytų produktų. Pasakykite pageidavimus skambučio metu.',
      },
      {
        q: 'Ar galite padengti stalą mūsų namuose?',
        a: 'Taip – be užkandžių paruošimo, siūlome ir vaišių stalo paruošimą jūsų šventės vietoje už valandinį įkainį arba kainą pagal svečių skaičių.',
      },
    ],
    related: [
      {
        slug: 'vaisiu-stalo-paruosimas',
        text: 'Norite, kad stalą padengtume už jus? Užsakykite vaišių stalo paruošimą.',
      },
      {
        slug: 'duonos-tortai',
        text: 'Krikštynų stalui puikiai tinka ir duonos tortas.',
      },
    ],
    galleryPhotos: [
      { src: photo13, alt: 'Kepinių padėklas krikštynų vaišėms' },
      { src: photo14, alt: 'Bandelių ir užkandžių padėklas šeimos šventei' },
      { src: foto1, alt: 'Užkandžių padėklas krikštynų svečiams' },
      { src: photo11, alt: 'Šventinis užkandžių padėklas' },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
