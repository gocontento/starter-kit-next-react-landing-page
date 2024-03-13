import { ContentLinks } from '@/types/types'
import { classNames } from '@/utils/ClassNames'
import { BlockData } from '@gocontento/client'
import { useState } from 'react'

export default function FAQs({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="prose mx-auto">
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          {block.fields.title.text}
        </h2>
        <p className="text-center">{block.fields.text?.text}</p>
      </div>
      <div className="mx-auto my-9 max-w-[1000px]">
        {block.fields.faqs.content_links[0] &&
          block.fields.faqs.content_links.map((item: ContentLinks) => {
            return (
              <FAQ item={item} key={item.content_link.fields.question.text} />
            )
          })}
      </div>
    </div>
  )
}

function FAQ({ item }: { item: ContentLinks }) {
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState(false)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setRotate((prevState) => !prevState)
  }
  return (
    <div className="w-full border-b border-b-black">
      <div
        className="flex cursor-pointer items-center justify-between gap-x-10 py-8"
        onClick={toggleAccordion}
      >
        <h3 className="text-2xl font-semibold lg:text-3xl">
          {item.content_link.fields.question.text}
        </h3>
        <span
          className={classNames(
            'text-3xl',
            rotate ? 'rotate-45 transform' : '',
          )}
        >
          +
        </span>
      </div>
      <div
        className={classNames(
          'max-w-none pb-9 text-lg',
          active ? 'block' : 'hidden',
        )}
        dangerouslySetInnerHTML={{
          __html: item.content_link.fields.answer.text,
        }}
      />
    </div>
  )
}
