import ChainSelect from "@/components/chain-select"
import ConsumptionGrid from "@/components/consumption-grid"
import NetworkSelect from "@/components/network-select"

export default function IndexPage() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Current Block Consumption
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Monitor the real-time block space utilization of all Polkadot and Kusama parachains.
          </p>
        </div>
        <div className="mb-4 flex gap-4 justify-center">
          <NetworkSelect />
          <ChainSelect />
        </div>
        <ConsumptionGrid />
      </div>
    </section>
  )
}
