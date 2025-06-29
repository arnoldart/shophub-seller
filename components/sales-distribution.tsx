"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Website", value: 374.82, color: "#8b5cf6" },
  { name: "Mobile App", value: 241.6, color: "#06b6d4" },
  { name: "Other", value: 213.42, color: "#10b981" },
]

export function SalesDistribution() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Sales Distribution</h3>
        <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
