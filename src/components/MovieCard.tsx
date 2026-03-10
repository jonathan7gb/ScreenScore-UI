type CardProps = {
    src: string;
    href: string;
}

export function MovieCard({ src, href }: CardProps) {
    return (
        <li>
            <a href={href} className="">
                <img src={src} alt="" className="min-w-full opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-600 max-h-[250px] lg:max-h-[320px] lg:min-h-[320px]  object-cover rounded" />
            </a>
        </li>
    )
}


export function MovieCardFeatured({ src, href }: CardProps) {
    return (
        <li>
            <a href={href} className="">
                <img src={src} alt="" className="min-w-full max-h-[250px] lg:max-h-[320px] lg:min-h-[320px] transition-all duration-500 hover:scale-105  object-cover rounded" />
            </a>
        </li>
    )
}
