import { Helmet } from "react-helmet-async";
import PhotoGridDiv, { darbai } from "../containers/PhotoGridDiv";

function Paslaugos() {
  return <>
  <Helmet>
      <title>Galerija - sumuštinukai.lt</title>
      <meta name="description" content="Užkandžių padėklai Pasvalyje ir aplinkui – užkandžių padėklai, duonos tortai ir kiti patiekalai šventėms, gimtadieniams ir kitoms progoms. Užsisakykite gardų maistą dabar!" />
      <meta name="keywords" content="užkandžių padėklai, duonos tortai, šviežias maistas, šventės, gimtadieniai, maistas progoms, Pasvalys, užsakymai, maistas Pasvalyje, švieži produktai, padėklai" />
  </Helmet>
  <div className="overflow-hidden bg-headerColor py-10 sm:py-16">
        <div className="mx-auto justify-center items-center flex flex-col  text-headerFooterText w-screen text-center font-poppins'">
          <div className="mx-auto grid w-screen px-6 md:px-16 grid-cols-4 gap-x-4 gap-y-4 md:gap-y-8 md:gap-x-8 sm:gap-y-6 sm:gap-x-6 lg:mx-0 lg:max-w-none md:grid-cols-8 lg:grid-cols-10 pt-6">
            <PhotoGridDiv limit={darbai.length} />
        </div>
      </div>
    </div>
  </>
};

export default Paslaugos;