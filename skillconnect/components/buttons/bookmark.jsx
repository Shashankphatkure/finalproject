import { CheckIcon, HeartIcon, EyeIcon } from '@heroicons/react/20/solid'

export default function Bookmark({ text }) {
  return (
    <span className="flex justify-center">
      <button
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <CheckIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        {text}
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <HeartIcon className="-ml-0.5 h-5 w-5 text-pink-400" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <EyeIcon className="-ml-0.5 h-5 w-5 text-blue-400" aria-hidden="true" />
      </button>
    </span>
  )
}
