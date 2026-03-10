import { MovieCardFeatured } from "./MovieCard"

export function FeaturedMovies(){
    return (
        <section className="mt-16 px-4 md:px-8 lg:px-16">
            <h2 className="text-white text-3xl font-semibold">Filmes em Destaque</h2>

            <div className="mt-8">
                <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">

                    <MovieCardFeatured src="https://cdn.cineart.com.br/vibezz_726218094.jpg" href="#" />
                    <MovieCardFeatured src="https://ingresso-a.akamaihd.net/prd/img/movie/vitoria/19da6c0c-5916-4c2d-a5ea-a757958a721f.webp" href="#" />
                    <MovieCardFeatured src="https://salvadorshopping.com.br/storage/cinema/4e37e5ca-5b88-4eee-8bee-07842a605e2f.webp" href="#" />
                    <MovieCardFeatured src="https://ingresso-a.akamaihd.net/prd/img/movie/a-forja-o-poder-da-transformacao/af623e40-b2c6-459e-ab40-db71808757ea.webp" href="#" />
                    <MovieCardFeatured src="https://images.squarespace-cdn.com/content/v1/540e5d44e4b03111c0805763/be850342-a3eb-4600-aee2-99c64a187bfb/Poster-Final---O-Agente-Secreto-%2864x94cm%29.jpg" href="#" />
                    <MovieCardFeatured src="https://revistarecorte.com.br/wp-content/uploads/2025/01/2_anora_guskondo_cartazes-favoritos-1000x1481.jpg" href="#" />
                    <MovieCardFeatured src="https://dm0fzqdup5a0q.cloudfront.net/wp-content/uploads/2023/08/28181130/unnamed.png" href="#" />
                    <MovieCardFeatured src="https://images.squarespace-cdn.com/content/v1/540e5d44e4b03111c0805763/be850342-a3eb-4600-aee2-99c64a187bfb/Poster-Final---O-Agente-Secreto-%2864x94cm%29.jpg" href="#" />


                </ul>
            </div>
        </section>
    )
}
