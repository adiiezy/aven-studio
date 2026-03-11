import Image from "next/image"

type Props = {
    heading: string
    ctaText: string
    ctaLink: string
    image: string
}

export default function CTASection({ heading, ctaText, ctaLink, image }: Props) {
    return (
        <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">

            <Image
                src={image}
                alt="CTA background"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative text-center px-6 max-w-3xl">
                <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-10">
                    {heading}
                </h2>

                <a
                    href={ctaLink}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition"
                >
                    {ctaText}
                    <span>›</span>
                </a>
            </div>
        </section>
    )
}
