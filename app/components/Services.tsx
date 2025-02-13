import { TruckIcon, GlobeAltIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Transporte Regional',
    description:
      'Serviço especializado em transportes de cargas fracionadas na região Sudeste do Brasil, abrangendo os estados de São Paulo, Espírito Santo, Rio de Janeiro e Minas Gerais. Nosso objetivo é proporcionar a melhor solução logística para os nossos clientes, garantindo eficiência e segurança em cada etapa do processo.',
    href: '#',
    icon: TruckIcon,
  },
  {
    name: 'Transporte Dedicado Nacional',
    description:
      'Trabalhamos com Cargas Fechadas nível nacional, disponibilizamos veículo destinado exclusivamente para sua mercadoria. Neste processo garantimos agilidade na retirada e rapidez na entrega, tranquilidade no que se refere à segurança de sua carga.',
    href: '#',
    icon: GlobeAltIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-24" id="servicos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2 className="text-base/7 font-semibold text-red-600">Nossos Serviços</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Soluções completas em transporte
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Oferecemos serviços especializados de transporte para atender todas as suas necessidades logísticas,
            com foco em eficiência, segurança e qualidade.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="flex flex-col"
                data-aos={"fade-in"}
              >
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-red-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
