import Foto1 from '../assets/foto1.jpeg'
import CallCta from '../components/CallCta'

const Heading = () => {
  return (
    <>
    <div className="overflow-hidden bg-headerColor py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-12 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Užkandžių padėklai Pasvalyje – ir <span className='text-buttonColor'>gražu</span>, ir <span className='text-buttonColor'>skanu</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-headerFooterText font-medium">
              Ruošiame užkandžių padėklus, duonos tortus ir vaišių stalus gimtadieniams, vestuvėms,
              krikštynoms ir kitoms šventėms. Pasakykite progą ir svečių skaičių – visa kita padarysime mes.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <CallCta trustLine="Tikslią kainą sužinosite vienu skambučiu" />
            </div>
          </div>
          <img
            alt="Užkandžių padėklas su mini sumuštinukais, vyniotiniais ir užkandžių vėrinukais"
            src={Foto1}
            width={1024}
            height={678}
            className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Heading
