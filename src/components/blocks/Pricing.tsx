import { BlockData, FieldData } from '@gocontento/client'
import Link from 'next/link'

export default function Pricing({ block }: { block: BlockData }) {
  return (
    <div className="space-y-16 py-9 md:py-16">
      <div className="prose mx-auto">
        <h2 className="text-3xl font-semibold md:text-center md:text-5xl">
          {block.fields.title.text}
        </h2>
        {block.fields.text.text && (
          <p className="text-lg md:text-center">{block.fields.text.text}</p>
        )}
      </div>
      <div className="grid max-w-none space-y-4 md:grid-cols-3 md:space-x-6 md:space-y-0">
        {block.fields.pricing_blocks.blocks.map((price_block: BlockData) => (
          <div
            key={price_block.fields.subtitle.text}
            className="flex flex-col space-y-5 bg-zinc-100 px-6 py-9"
          >
            <h3 className="text-center text-lg font-semibold">
              {price_block.fields.subtitle.text}
            </h3>
            <div className="text-center text-6xl font-semibold">
              {price_block.fields.price_annually.text}
            </div>
            <p className="text-md text-center">
              {price_block.fields.text.text}
            </p>
            <div className="space-y-3 py-9">
              {price_block.fields.list.list.map((block: FieldData) => (
                <div className="flex items-center gap-x-3" key={block.text}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 70 70"
                    fill="currentColor"
                    role="img"
                    className="h-5 w-5 flex-shrink-0"
                    aria-labelledby="title"
                  >
                    <title>Tick Icon</title>
                    <path d="M27.6597 45.2569L53.5452 19.3715C54.0334 18.8854 54.6132 18.6423 55.2846 18.6423C55.956 18.6423 56.5347 18.8862 57.0208 19.3741C57.5069 19.8619 57.75 20.4411 57.75 21.1119C57.75 21.7826 57.5069 22.361 57.0208 22.8471L29.3611 50.5069C28.875 50.993 28.3079 51.2361 27.6597 51.2361C27.0116 51.2361 26.4444 50.993 25.9583 50.5069L12.9305 37.4791C12.4444 36.9908 12.2135 36.411 12.2378 35.7396C12.2621 35.0682 12.5182 34.4895 13.006 34.0034C13.4938 33.5173 14.0731 33.2742 14.7438 33.2742C15.4146 33.2742 15.9931 33.5173 16.4792 34.0034L27.6597 45.2569Z" />
                  </svg>
                  <div>{block.text}</div>
                </div>
              ))}
            </div>
            <Link
              href={price_block.fields.button.blocks[0].fields.button_url.text}
              className="not-prose my-5 inline-block bg-zinc-700 px-6 py-3 text-center text-white hover:opacity-80"
              target={
                price_block.fields.button.blocks[0].fields.open_in_new_tab.is_on
                  ? '_blank'
                  : ''
              }
            >
              {price_block.fields.button.blocks[0].fields.button_text.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
