"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "See how you rank with Applicant Insights",
    answer:
      "See how your skills compare to other candidates applying to the same job. Use this information to apply to jobs strategically.",
  },
  {
    question: "Access Interview Prep tools",
    answer:
      "Gain practical interview tips with access to practice questions and guides from hiring managers and talent experts.  ",
  },
  {
    question: "Display your Premium badge",
    answer:
      "Signal that you’re serious about making new connections or job searching by displaying your Premium badge.",
  },
  {
    question: "Create a strong resume",
    answer:
      "Improve your resume with keywords commonly used by recruiters based on your desired role and past experiences.",
  },
  {
    question: "Are all courses included in a Personal Plan subscription?",
    answer:
      "While not all Skillconnect courses are included in a subscription, there are thousands of courses available in hundreds of course topics! ",
  },
  {
    question: "Will I have full lifetime access to subscription content?",
    answer:
      "You will have unlimited access to subscription content as long as you have an active subscription.  If you cancel your subscription, you will have access to the subscription content until the final date of your billing period, which is posted on your Subscriptions page.",
  },
  // More questions...
]

export default function Faq1() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">exclusive Premium features</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
