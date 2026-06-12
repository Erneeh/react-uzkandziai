import { Link } from 'react-router-dom'
import { services } from '../data/services'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Services = () => {
  return (
    <div className="bg-headerColor py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl italic sm:text-5xl text-headerFooterText">Paslaugos</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-headerFooterText group-hover:text-buttonColor transition">
                  {service.navTitle}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-headerFooterText">{service.cardText}</p>
                <span className="mt-4 inline-block font-semibold text-headerFooterText underline underline-offset-4 decoration-buttonColor">
                  Plačiau
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
