import { StatsCards } from "@/components/stats-cards"
import { SalesOverview } from "@/components/sales-overview"
import { SalesDistribution } from "@/components/sales-distribution"
import { IntegrationList } from "@/components/integration-list"
import { TotalSubscribers } from "@/components/total-subscribers"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Oct 16 - Nov 16</span>
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
          <button className="text-sm text-gray-500 hover:text-gray-700">Filter</button>
          <button className="text-sm text-gray-500 hover:text-gray-700">Export</button>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesOverview />
        </div>
        <div>
          <TotalSubscribers />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesDistribution />
        <IntegrationList />
      </div>
    </div>
  )
}
