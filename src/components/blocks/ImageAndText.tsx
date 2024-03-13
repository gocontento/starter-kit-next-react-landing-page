import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Button from './Button'

export default function ImageAndText({ block }: { block: BlockData }) {
  if (
    block.fields.image_side.selected_option.value === 'left' ||
    block.fields.image_side.selected_option.value === 'right'
  ) {
    return <HorizontalImageAndText block={block} />
  }
  if (block.fields.image_side.selected_option.value === 'bottom') {
    return <VerticalImageAndText block={block} />
  }
}

function HorizontalImageAndText({ block }: { block: BlockData }) {
  const image = (
    <div>
      <Image
        src={block.fields.image.assets[0].asset.url}
        alt={block.fields.image.assets[0].asset.description}
        className="h-full w-full object-cover"
        width={176}
        height={176}
      />
    </div>
  )
  return (
    <div className="py-9 md:py-16">
      <div className="grid items-center space-y-6 md:grid-cols-2 md:space-x-12">
        {block.fields.image_side.selected_option.value === 'left' && (
          <>{image}</>
        )}
        <div className="prose">
          <h2 className="text-3xl font-semibold">{block.fields.title.text}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="text-lg"
          />
          <div className="flex items-center gap-x-5">
            {block.fields.buttons.blocks.length > 0 &&
              block.fields.buttons.blocks.map((button: BlockData) => {
                return (
                  <Button
                    key={button.fields.button_text.text}
                    button={button}
                  />
                )
              })}
          </div>
        </div>
        {block.fields.image_side.selected_option.value === 'right' && (
          <>{image}</>
        )}
      </div>
    </div>
  )
}

function VerticalImageAndText({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-12">
        <div className="prose">
          <h2 className="text-3xl font-semibold leading-tight md:text-center md:text-5xl">
            {block.fields.title.text}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="text-lg md:text-center"
          />
          <div className="flex items-center gap-x-5 md:justify-center">
            {block.fields.buttons.blocks.length > 0 &&
              block.fields.buttons.blocks.map((button: BlockData) => {
                return (
                  <Button
                    key={button.fields.button_text.text}
                    button={button}
                  />
                )
              })}
          </div>
        </div>
        <div>
          <Image
            src={block.fields.image.assets[0].asset.url}
            alt={block.fields.image.assets[0].asset.description}
            className="object-cover"
            width={1000}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}
