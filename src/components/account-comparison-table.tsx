'use client'

export function AccountComparisonTableComponent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-pink-500">Real Accounts</span> vs Fake Accounts
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Compare the key differences below to see why Akountify's verified profiles are the superior choice.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-4 py-2 text-left">Feature</th>
                <th className="px-4 py-2 text-left text-pink-500">Akountify</th>
                <th className="px-4 py-2 text-left">Fake Accounts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">ID Verified</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">Ban Risk</td>
                <td className="px-4 py-2">Low</td>
                <td className="px-4 py-2">High</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">Ban Recovery</td>
                <td className="px-4 py-2">Can be recovered</td>
                <td className="px-4 py-2">Permanently banned</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">Cost</td>
                <td className="px-4 py-2">Affordable</td>
                <td className="px-4 py-2">Expensive</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Legality</td>
                <td className="px-4 py-2">Ethical, just like hiring an employee</td>
                <td className="px-4 py-2">Unethical, identity fraud</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}