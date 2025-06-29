"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { Filter, MoreHorizontal, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const data = [
  { month: "Oct", China: 2500, UK: 1800, USA: 2200, Canada: 1500, Other: 1000 },
  { month: "Nov", China: 3200, UK: 2100, USA: 2800, Canada: 1800, Other: 1200 },
  { month: "Dec", China: 4000, UK: 2500, USA: 3500, Canada: 2200, Other: 1500 },
]

export function SalesOverview() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-gray-900">$9,257.51</span>
            <div className="flex items-center ml-3 text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+18.2%</span>
            </div>
            <span className="text-sm text-gray-500 ml-2">$143.50 increased</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="ghost" size="sm">
            Sort
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Legend />
            <Bar dataKey="China" stackId="a" fill="#8b5cf6" radius={[0, 0, 0, 0]} />
            <Bar dataKey="UK" stackId="a" fill="#06b6d4" radius={[0, 0, 0, 0]} />
            <Bar dataKey="USA" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
            <Bar dataKey="Canada" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
            <Bar dataKey="Other" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-gray-600">China</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
          <span className="text-gray-600">UK</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-gray-600">USA</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Canada</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Other</span>
        </div>
      </div>
    </div>
  )
}
