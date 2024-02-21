import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Hiring since year', stat: '2020', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'opportunities posted', stat: '170', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'candidates hired', stat: '18', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Datadisplay1() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6 text-center">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-center justify-center md:block lg:flex"> {/* Modified items-baseline to items-center and justify-between to justify-center */}
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
