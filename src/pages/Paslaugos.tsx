import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CallCta from '../components/CallCta'
import { services } from '../data/services'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

function Paslaugos() {
  return (
    <>
      <Helmet>
        <title>Paslaugos – Užkandžių Padėklai, Duonos Tortai ir Vaišių Stalo Paruošimas | Sumuštinukai.lt</title>
        <meta
          name="description"
          content="Visos mūsų paslaugos šventėms Pasvalyje: užkandžių padėklai, duonos tortai, vaišių stalo paruošimas, užkandžiai gimtadieniams, vestuvėms ir krikštynoms."
        />
      </Helmet>

      <div className="bg-headerColor text-headerFooterText py-12 sm:py-16 min-h-screen">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Paslaugos jūsų šventei Pasvalyje ir aplink
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto">
            Užkandžių padėklai, duonos tortai ir vaišių stalo paruošimas – pasirinkite, ko reikia jūsų progai,
            arba paskambinkite ir patarsime.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                onClick={scrollTop}
                className="group bg-backgroundColor rounded-3xl border border-black/10 shadow overflow-hidden hover:scale-105 transition duration-500"
              >
                <img
                  src={service.heroImage}
                  alt={service.heroAlt}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-buttonColor transition">
                    {service.navTitle}
                  </h2>
                  <p className="mt-2 text-lg leading-relaxed">{service.cardText}</p>
                  <span className="mt-4 inline-block font-semibold underline underline-offset-4 decoration-buttonColor">
                    Plačiau
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <CallCta trustLine="Nežinote, ko reikia jūsų šventei? Paskambinkite – patarsime." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Paslaugos
