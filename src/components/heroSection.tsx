import { PrimaryButton } from "./PrimaryButton"

export function Hero() {
    return (
        <section>
            <div className=" mt-8 max-w-7xl px-4 py-8 sm:px-6 lg:px-16">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                  
                    <div className="flex flex-col gap-4">
                        <div className="max-w-prose md:max-w-none">
                            <h2 className="text-2xl font-semibold text-primary sm:text-5xl">
                                Descubra, avalie e organize seus filmes
                            </h2>

                            <p className="mt-4 text-pretty text-gray-200">
                                O ScreenScore é seu catálogo pessoal de filmes. Explore títulos, registre avaliações e acompanhe tudo que você já assistiu.
                            </p>
                        </div>
                        <PrimaryButton text="Acessar Catálogo" link="/movies" />
                    </div>

                </div>
            </div>
        </section>
    )
}

