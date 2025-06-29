"use client"

import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const data = [
  { day: "Sun", value: 2000 },
  { day: "Mon", value: 2500 },
  { day: "Tue", value: 3000 },
  { day: "Wed", value: 2800 },
  { day: "Thu", value: 3200 },
  { day: "Fri", value: 3800 },
  { day: "Sat", value: 3600 },
]

export function TotalSubscribers() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Total Subscriber</h3>
        <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Daily</option>
        </select>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900">24,473</div>
        <div className="flex items-center text-green-600 text-sm">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="font-medium">+3.2%</span>
          <span className="text-gray-500 ml-2">+718 increased</span>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
            <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
