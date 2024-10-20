My first React project using typescript + vite, tailwind

Creating a simple landing website for my mothers products

//daugumos dalyku nemoku, bet gebu surinkti informacija kurios man reikia internetu ir ja iterpti tinkamai. Sugeba skaityti koda
// pradejau kurti savo sablona, bet paskui suvokiau, kad tai uzims per daug laiko vien headerio componentui, viska buvau irases, visus kintamuosius ir t.t, gaudamas draugo patarima, kad geriau ne paciam bandyti konstruoti, o imti is interneto ir analizuoti, suprasti kaip viskas vyksta , daug geresnis mokymosi/darbo procesas. Pasiemes tailwind headerio sablona ,viska perrasiau html pavidalu, paskui pridejau ir tailwind klasses, ziuredamas kaip kiekviena klase pritaikytam kiekvienam html elementui viska pakeicia. Viskas pavyko. Pagalvojau, kad reikia sukurti kazka panasaus i routes, kad paspaudus ant kiekvieno linko numesti i kazkoki tai puslapi, ir man nereiketu duplikuoti kodo, tai su chatgpt pagalba kuria labiausiai ir naudojausi, suzinojau kaip parasyti ir susieti su routes.tsx, man tai pavyko. Sugalvojau pakeisti kaip atrodo collapse meniu(dialog siuo atveju) ant mazesniu rezoliuciju nei SM (tailwind formoje), padariau, kad butu sucentruota, ir pridejau borderius po apacia, kad butu pazymetas(UX/UI puseje). Headeris kaip ir done, bet manau dar pridesiu kokia transitiona,animacija, kuri pagrazintu isejima is sono/atgal i ji. sugalvojau panaudoti useLocation funkcija kuri leistu man suzinoti esama vieta ir prilyginti esamai vietai su path.link is objekto/array ir jeigu tai atitinka (panasiai kaip active funkcija) - butu pakeista spalva. (gan basic, bet uztruko siek tiek laiko issiaiskint,bet nebuvo pernelyg sunku.)

//pradejus kurti footeri, pagalvojau, kaip apeit duplikacijos problema su const kintamaisiasi (objektais), kad nereiktu naudoti tu paciu tiek headerio/footerio tsx., tai juos ikeliau i app.tsx ir naudodamas props funkcija imeciau tiek i headeri tiek i footeri. kolkas footeris atrodo kaip headeris, kol dar neturiu ideju kaip padaryt. Bet svarbiausia kad linkai kiekviename kai yra aktyvi pasizymi tiek headeryje tiek footeryje. Toliau is eigos pakeisiu footeri. 

// footeris sutvarkytas, pereinu prie turinio home page ir kituose.














# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
