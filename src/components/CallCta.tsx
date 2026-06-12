import { FiPhone } from 'react-icons/fi'
import { PHONE_HREF } from '../data/services'

interface CallCtaProps {
  label?: string
  trustLine?: string
}

// Single, repeated call to action: one clear next step (a phone call).
const CallCta = ({ label = 'Užsisakykite', trustLine }: CallCtaProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={PHONE_HREF}
        className="inline-flex items-center justify-center gap-3 bg-buttonColor text-textColor font-semibold text-xl sm:text-2xl px-8 py-4 rounded-full shadow-lg border border-footerColor
        hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-textColor"
      >
        <FiPhone className="h-6 w-6" />
        <span>{label}</span>
      </a>
      {trustLine && <p className="text-base sm:text-lg text-headerFooterText/80 italic">{trustLine}</p>}
    </div>
  )
}

export default CallCta
