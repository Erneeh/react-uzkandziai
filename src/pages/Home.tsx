
import { Helmet } from 'react-helmet-async';
import About from '../containers/About';
import HPHeading from '../containers/HPHeading';
import Photos from '../containers/PhotosDiv';

function Home()  {
  return <>
  <Helmet>
      <title>Užkandžių Padėklai, Duonos Tortai ir Kiti Patiekalai Šventėms | Pasvalys</title>
      <meta name="description" content="Užkandžių padėklai Pasvalyje ir aplinkui – užkandžių padėklai, duonos tortai ir kiti patiekalai šventėms, gimtadieniams ir kitoms progoms. Užsisakykite gardų maistą dabar!" />
      <meta name="keywords" content="užkandžių padėklai, duonos tortai, šviežias maistas, šventės, gimtadieniai, maistas progoms, Pasvalys, užsakymai, maistas Pasvalyje, švieži produktai, padėklai" />
    </Helmet>
  <div className="bg-backgroundColor text-headerFooterText py-24 sm:py-2 ">
    <HPHeading></HPHeading>
    <About></About>
    <Photos></Photos>
  </div>
  </>
};

export default Home;