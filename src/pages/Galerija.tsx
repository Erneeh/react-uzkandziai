import { Helmet } from "react-helmet-async";
import PhotoGridDiv, { darbai } from "../containers/PhotoGridDiv";
import CallCta from "../components/CallCta";

function Galerija() {
  return <>
  <Helmet>
      <title>Galerija – Mūsų Paruošti Užkandžių Padėklai ir Tortai | Sumuštinukai.lt</title>
      <meta name="description" content="Pažiūrėkite, kaip atrodo mūsų paruošti užkandžių padėklai, duonos tortai ir šventiniai stalai. Patiko? Skambinkite ir užsisakykite savo šventei." />
  </Helmet>
  <div className="overflow-hidden bg-headerColor py-10 sm:py-16">
        <div className="mx-auto justify-center items-center flex flex-col text-headerFooterText w-screen text-center font-poppins'">
          <div className="max-w-3xl px-6">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">Mūsų darbų galerija</h1>
            <p className="mt-4 text-xl sm:text-2xl">
              Taip atrodo mūsų paruošti užkandžių padėklai, duonos tortai ir šventiniai stalai.
            </p>
          </div>
          <div className="mx-auto grid w-screen px-6 md:px-16 grid-cols-4 gap-x-4 gap-y-4 md:gap-y-8 md:gap-x-8 sm:gap-y-6 sm:gap-x-6 lg:mx-0 lg:max-w-none md:grid-cols-8 lg:grid-cols-10 pt-10">
            <PhotoGridDiv limit={darbai.length} />
        </div>
        <div className="pt-12">
          <CallCta trustLine="Patiko? Tokį patį paruošime ir jūsų šventei." />
        </div>
      </div>
    </div>
  </>
};

export default Galerija;
