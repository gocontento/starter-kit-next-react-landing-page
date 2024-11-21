import { BlockData } from '@gocontento/client'
import Button from './Button'

export default function CTA({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="mx-auto max-w-[1000px] bg-zinc-100 px-6 py-24 md:px-16">
        <div className="prose mx-auto flex flex-col items-center justify-center">
          <h2 className="mt-5 text-center text-3xl font-semibold leading-snug tracking-tight md:text-5xl">
            {block.fields.title.text}
          </h2>
          <p className="text-center text-lg">{block.fields.text.text}</p>
          {block.fields.button.blocks.length > 0 &&
            block.fields.button.blocks.map((button: BlockData) => {
              return (
                <Button key={button.fields.button_text.text} button={button} />
              )
            })}
        </div>
      </div>
    </div>
  )
}
