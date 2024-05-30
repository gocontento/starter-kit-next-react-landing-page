import { BlockData } from '@gocontento/client'

export default function ContactForm({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="flex flex-col items-center justify-center gap-y-6 md:space-y-12">
        <div className="prose">
          <h2 className="text-3xl font-semibold leading-snug md:text-center md:text-5xl">
            {block.fields.title.text}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="text-lg md:text-center"
          />
          {/* FORM EXAMPLE - REPLACE WITH YOUR OWN FORM HANDLER */}
          <form className="mx-auto my-10 flex flex-col justify-center gap-x-9 gap-y-3">
            <div className="flex flex-col gap-x-9 gap-x-9 gap-y-3 md:flex-row">
              <div className="w-full">
                <label className="mb-1 block font-semibold" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  className="w-full border-2 border-gray-200 bg-gray-200 px-4 py-2"
                  id="full-name"
                  type="text"
                />
              </div>
              <div className="w-full">
                <label className="mb-1 block font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border-2 border-gray-200 bg-gray-200 px-4 py-2"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="mb-1 block font-semibold" htmlFor="email">
                Message
              </label>
              <textarea
                className="min-h-[200px] w-full border-2 border-gray-200 bg-gray-200 px-4 py-2"
                id="message"
              />
            </div>
            <div className="mt-4 flex flex-shrink-0 md:mt-8">
              <button
                className="bg-zinc-700 px-6 py-3 text-white hover:opacity-80"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
