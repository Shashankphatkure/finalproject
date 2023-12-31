import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function BuyButton() {
    return (
        <>
            <div className="flex justify-center">
                <button
                    type="button"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <CheckCircleIcon className="-ml-0.5 h-8 w-10" aria-hidden="true" />
                    Buy this course
                </button>
            </div>
        </>
    )
}
