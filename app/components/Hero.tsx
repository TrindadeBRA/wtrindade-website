'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Sobre Nós', href: '#sobre-nos' },
  { name: 'Nossos Serviços', href: '#servicos' },
  { name: 'Contato', href: '#contato' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white relative">

      {/* Menu */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8">
            <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Sua Empresa</span>
                <Image
                  alt="WTrindade Transportes"
                  title="WTrindade Transportes"
                  src="/assets/images/logo.png"
                  className="h-24 w-auto"
                  width={350}
                  height={350}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Abrir menu principal</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent hover:text-red-600 hover:border-b-2 hover:border-red-600">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Sua Empresa</span>
                <Image
                  alt=""
                  src="/assets/images/logo.png"
                  className="h-12 w-12"
                  width={100}
                  height={100}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative min-h-screen">
        <div className="mx-auto max-w-7xl h-full">
          <div className="relative z-10 h-full lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 min-h-screen flex items-center sm:py-40 lg:px-8 lg:py-0 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-red-500/5 transition duration-300 ease-in-out" data-aos="fade-right">
                    Obtenha seu orçamento de frete agora mesmo!{' '}
                    <a 
                      href="https://web.whatsapp.com/send?phone=5511985148306&text=Olá, gostaria de mais informações sobre seus serviços" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold whitespace-nowrap text-red-600 ml-2"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      Solicitar orçamento <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900" data-aos="fade-right">
                  WTrindade Transportes
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8" data-aos="fade-right">
                  Uma empresa dedicada a oferecer soluções logísticas completas, garantindo segurança e eficiência no transporte de cargas.
                </p>
                <div className="mt-10 flex items-center gap-x-6" data-aos="fade-right">
                  <a
                    href="https://web.whatsapp.com/send?phone=5511985148306&text=Olá, gostaria de mais informações sobre seus serviços"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Entrar em contato!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-[100px] sm:mt-0 bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" data-aos="zoom-out-left">
          <Image
            width={1920}
            height={1080}
            alt=""
            src="/assets/images/hero.webp"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            priority
          />
        </div>
      </div>
    </div>
  )
}
