
import { Helmet } from 'react-helmet-async';
import About from '../containers/About';
import HPHeading from '../containers/HPHeading';
import Services from '../containers/Services';
import Photos from '../containers/PhotosDiv';
import CallCta from '../components/CallCta';

function Home()  {
  return <>
  <Helmet>
      <title>Užkandžių Padėklai Pasvalyje – Duonos Tortai ir Vaišės Šventėms | Sumuštinukai.lt</title>
      <meta name="description" content="Užkandžių padėklai Pasvalyje ir aplink – švieži užkandžiai, duonos tortai ir vaišių stalo paruošimas gimtadieniams, vestuvėms, krikštynoms ir kitoms progoms. Skambinkite ir užsisakykite." />
    </Helmet>
  <div className="bg-backgroundColor text-headerFooterText">
    <HPHeading></HPHeading>
    <About></About>
    <Services></Services>
    <Photos></Photos>
    <div className="bg-headerColor pb-12 sm:pb-16 text-center">
      <CallCta trustLine="Atsiliepsime ir patarsime – kaina paaiškės per vieną skambutį" />
    </div>
  </div>
  </>
};

export default Home;
