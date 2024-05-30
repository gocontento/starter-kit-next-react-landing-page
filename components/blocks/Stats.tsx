import { BlockData } from '@gocontento/client'

export default function Stats({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      {block.fields.title.text && (
        <h2 className="text-lg md:text-center">{block.fields.title.text}</h2>
      )}
      <div className="mx-auto my-9 grid max-w-[1000px] gap-y-12 bg-zinc-100 py-9 md:grid-cols-3">
        {block.fields.stat_blocks.blocks.map(
          (block: BlockData, index: number) => (
            <div
              className="flex flex-col items-center gap-y-3"
              key={`stat-block-${index}`}
            >
              <p>{block.fields.subtitle.text}</p>
              <h3 className="text-5xl font-semibold">
                {block.fields.stat.text}
              </h3>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
