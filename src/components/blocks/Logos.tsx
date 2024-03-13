import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Logos({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      {block.fields.subtitle.text && (
        <h3 className="text-lg md:text-center">{block.fields.subtitle.text}</h3>
      )}
      <div className="mx-auto my-9 grid max-w-[1000px] grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 md:gap-x-12 md:gap-y-6 lg:grid-cols-6">
        {block.fields.logos.blocks.map((block: BlockData) => (
          <Link href={block.fields.url.text}>
            <Image
              src={block.fields.logo.assets[0].asset.url}
              alt={block.fields.logo.assets[0].asset.description}
              className="h-full w-full object-cover"
              width={120}
              height={50}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
