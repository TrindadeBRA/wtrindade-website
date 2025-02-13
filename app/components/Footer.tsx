import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
                <div className="mt-16 flex justify-center">
                    <Image
                        alt="WTrindade Transportes"
                        src="/assets/images/logo.png"
                        className="h-32 w-auto animate-spin-slow hover:duration-[1000ms]"
                        width={250}
                        height={250}
                    />
                </div>
                <p className="mt-10 text-center text-sm/6 text-gray-600">
                    &copy; 2024 WTrindade Transportes LTDA. CNPJ: 27.654.523/0001-08
                </p>
                <p className="mt-2 text-center text-sm/6 text-gray-600">
                    <Link href="https://maps.app.goo.gl/t3cnATi3wwnKMSyY7" className="">Rua Joaquim Faustino, 154 - Vila Maria, São Paulo – SP, CEP: 02168-010</Link>
                </p>
                <p className="mt-2 text-center text-sm/6 text-gray-600">
                    <span className="pr-2">Telefones:</span>
                    <Link href="tel:+551126362804" className="font-bold text-red-700 hover:text-red-600">(11) 2636-2804</Link>
                    <span className="mx-2">|</span>
                    <Link href="tel:+5511985148306" className="font-bold text-red-700 hover:text-red-600">(11) 98514-8306</Link>
                </p>
            </div>
            <div className="container mx-auto">
                <div className="mt-16 border-t border-gray-900/10 py-8 flex justify-between">
                    <p className="text-sm/6 text-gray-600">&copy; {new Date().getFullYear()}
                        <span className="font-semibold pl-1">WTrindade Transportes</span>.
                        Todos os direitos reservados.</p>
                    <p className="text-sm/6 text-gray-600">Desenvolvido por
                        <a href="https://thetrinityweb.com.br" className="ml-1 text-red-700 hover:text-red-600 font-semibold">Trinity Web</a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}
