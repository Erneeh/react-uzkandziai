import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BsCheckCircle } from 'react-icons/bs'
import CallCta from '../components/CallCta'
import type { Service } from '../data/services'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

function Paslauga({ service }: { service: Service }) {
  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      <div className="bg-backgroundColor text-headerFooterText">
        {/* Above the fold: H1 with keyword + benefit, answer, one CTA, one image */}
        <section className="overflow-hidden bg-headerColor py-10 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 grid grid-cols-1 gap-y-10 gap-x-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
                {service.h1}
              </h1>
              <p className="mt-6 text-xl sm:text-2xl leading-relaxed">{service.intro}</p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <CallCta trustLine="Tikslią kainą sužinosite vienu skambučiu" />
              </div>
            </div>
            <img
              src={service.heroImage}
              alt={service.heroAlt}
              width={1024}
              height={683}
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
            />
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-footerColor py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-backgroundColor rounded-3xl p-8 shadow border border-black/10">
                  <BsCheckCircle className="h-8 w-8 text-buttonColor" aria-hidden="true" />
                  <h2 className="mt-4 text-xl sm:text-2xl font-semibold">{benefit.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works + pricing */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold">Kaip vyksta užsakymas?</h2>
            <ol className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {(service.steps ?? [
                { title: 'Paskambinate', text: 'Pasakote progą, datą ir svečių skaičių.' },
                { title: 'Suderiname', text: 'Kartu parenkame sudėtį ir sutariame kainą.' },
                { title: 'Atsiimate paruošta', text: 'Sutartą valandą viskas paruošta jūsų šventei.' },
              ]).map((step, index) => (
                <li key={step.title} className="bg-headerColor rounded-3xl p-6 border border-black/10 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-buttonColor text-textColor font-bold text-xl">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-lg">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xl leading-relaxed">{service.pricing}</p>
            <div className="mt-8">
              <CallCta />
            </div>
          </div>
        </section>

        {/* Photos near the CTA act as visual proof of work */}
        <section className="bg-headerColor py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold">Mūsų darbai</h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {service.galleryPhotos.map((photo) => (
                <img
                  key={photo.src + photo.alt}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-40 sm:h-56 object-cover rounded-3xl shadow hover:scale-105 transition duration-500"
                />
              ))}
            </div>
            <Link
              to="/galerija"
              onClick={scrollTop}
              className="mt-8 inline-block text-xl font-semibold underline underline-offset-8 decoration-buttonColor hover:text-buttonColor transition"
            >
              Žiūrėti visą galeriją
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-center">Dažniausi klausimai</h2>
            <dl className="mt-8 space-y-6">
              {service.faq.map((item) => (
                <div key={item.q} className="bg-headerColor rounded-3xl p-6 border border-black/10">
                  <dt className="text-xl font-semibold">{item.q}</dt>
                  <dd className="mt-2 text-lg leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contextual internal links: the next logical step, not generic nav */}
        <section className="bg-footerColor py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center text-headerFooterText">
            <h2 className="text-2xl sm:text-3xl font-bold">Taip pat gali praversti</h2>
            <ul className="mt-6 space-y-4">
              {service.related.map((rel) => (
                <li key={rel.slug} className="text-xl">
                  <Link
                    to={`/${rel.slug}`}
                    onClick={scrollTop}
                    className="underline underline-offset-4 decoration-buttonColor hover:text-buttonColor transition"
                  >
                    {rel.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CallCta />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Paslauga
