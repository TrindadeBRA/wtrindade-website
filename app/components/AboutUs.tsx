import Image from "next/image";

export default function AboutUs() {
    return (
      <div className="overflow-hidden bg-white py-16" id="sobre-nos">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl">
            <p className="text-base/7 font-semibold text-red-600">Sobre nós</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Sua melhor solução em serviços de transportes
            </h1>
            <p className="mt-6 text-xl/8 text-balance text-gray-700">
              Fundada em 2003, nossa meta está muito além de oferecer simplesmente o transporte. Nosso compromisso é oferecer uma logística completa, incluindo acompanhamento de sua carga desde a origem até o destino.
            </p>
          </div>
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">Nossa missão</h2>
              <p className="mt-3 text-base/7 text-gray-600">
                Oferecer excelentes serviços com qualidade e segurança aos nossos clientes, tendo como objetivo lhes fornecer informações precisas e confiáveis.
              </p>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-pretty text-gray-900">Nossa visão</h2>
              <p className="mt-3 text-base/7 text-gray-600">
                Ser encarada como uma parceira de negócios de seus clientes, destacando-se pela qualidade, responsabilidade e eficácia na prestação dos serviços de transporte & logística.
              </p>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-pretty text-gray-900">Nossa atuação</h2>
              <p className="mt-3 text-base/7 text-gray-600">
                Serviço especializado em transportes de cargas fracionadas na região Sudeste do Brasil, abrangendo os estados de São Paulo, Espírito Santo, Rio de Janeiro e Minas Gerais. Nosso objetivo é proporcionar a melhor solução logística para os nossos clientes, garantindo eficiência e segurança em cada etapa do processo.
              </p>
              <p className="mt-8 text-base/7 text-gray-600">
                Transportes dedicado nacional - Trabalhamos com Cargas Fechadas nível nacional, disponibilizamos veículo destinado exclusivamente para sua mercadoria, garantindo agilidade na retirada e rapidez na entrega.
              </p>
            </div>
            
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                    width={560}
                    height={560}
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                    width={560}
                    height={560}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                    width={560}
                    height={560}
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                    width={560}
                    height={560}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  