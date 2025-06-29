import { TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    name: "Page Views",
    value: "12,450",
    change: "+5.8%",
    changeType: "increase",
    icon: "👁️",
  },
  {
    name: "Total Revenue",
    value: "$363.95",
    change: "+4.0%",
    changeType: "increase",
    icon: "💰",
  },
  {
    name: "Bounce Rate",
    value: "86.5%",
    change: "+2.2%",
    changeType: "decrease",
    icon: "📊",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className="text-2xl">{stat.icon}</div>
          </div>
          <div className="flex items-center mt-4">
            {stat.changeType === "increase" ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${stat.changeType === "increase" ? "text-green-600" : "text-red-600"}`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
