import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const features = [
  {
    name: 'Telefones',
    description:
      '(11) 2636-2804 / (11) 98514-8306',
    icon: PhoneIcon,
  },
  {
    name: 'E-mail',
    description: 'contato@wtrindadetransportes.com.br',
    icon: EnvelopeIcon,
  },
]

export default function Location() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="contato">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg" data-aos="fade-right">
              <h2 className="text-base/7 font-semibold text-red-600">Contato</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                Entre em contato conosco
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Escolha a melhor forma para você nos contatar, seja por telefone, e-mail ou whatsapp.
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-red-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0" data-aos="fade-left">
            <div className="relative">
              {!isMapLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-tl-xl" />
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3705810099073!2d-46.58120752393279!3d-23.51917017882885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f29e8cd2745%3A0xb12463c0f7c8a26d!2sWTrindade%20Transportes!5e0!3m2!1spt-BR!2sbr!4v1739409276075!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`-mb-12 !w-full max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 ${
                  !isMapLoaded ? 'invisible' : ''
                }`}
                width={1920}
                height={350}
                onLoad={() => setIsMapLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
