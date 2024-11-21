import { ContentLinks } from '@/types/types'
import { BlockData } from '@gocontento/client'
import Image from 'next/image'

export default function Testimonials({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="flex flex-col items-center justify-center">
        <div className="prose">
          <h2 className="text-3xl font-semibold leading-snug tracking-tight md:text-center md:text-5xl">
            {block.fields.title.text}
          </h2>
          {block.fields.text.text && (
            <p className="text-lg md:text-center">{block.fields.text.text}</p>
          )}
        </div>
        <div className="mx-auto my-9 grid max-w-[1000px] gap-x-10 gap-y-6 py-9 lg:grid-cols-3">
          {block.fields.testimonials.content_links.length &&
            block.fields.testimonials.content_links.map(
              (item: ContentLinks) => {
                return (
                  <Testimonial
                    item={item}
                    key={item.content_link.fields.author.text}
                  />
                )
              },
            )}
        </div>
      </div>
    </div>
  )
}

function Testimonial({ item }: { item: ContentLinks }) {
  return (
    <div className="space-y-6 bg-zinc-100 p-6">
      <div className="flex items-center gap-x-3">
        <Image
          src={item.content_link.fields.image.assets[0].asset.url}
          alt={item.content_link.fields.image.assets[0].asset.description}
          className="h-14 w-14 rounded-full object-cover"
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">
            {item.content_link.fields.author.text}
          </h3>
          <p className="text-sm">{item.content_link.fields.role.text}</p>
        </div>
      </div>
      <h2 className="text-lg">{item.content_link.fields.quote.text}</h2>
    </div>
  )
}
