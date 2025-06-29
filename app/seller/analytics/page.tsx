"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Eye } from "lucide-react"

const salesData = [
  { month: "Jan", sales: 4000, visitors: 2400 },
  { month: "Feb", sales: 3000, visitors: 1398 },
  { month: "Mar", sales: 2000, visitors: 9800 },
  { month: "Apr", sales: 2780, visitors: 3908 },
  { month: "May", sales: 1890, visitors: 4800 },
  { month: "Jun", sales: 2390, visitors: 3800 },
]

const topProducts = [
  { name: "Wireless Headphones", sales: 234, revenue: "$30,420" },
  { name: "Smart Watch", sales: 156, revenue: "$46,844" },
  { name: "Bluetooth Speaker", sales: 89, revenue: "$7,119" },
  { name: "Phone Case", sales: 67, revenue: "$2,010" },
]

const trafficSources = [
  { name: "Direct", value: 35, color: "#8b5cf6" },
  { name: "Social Media", value: 25, color: "#06b6d4" },
  { name: "Search Engine", value: 20, color: "#10b981" },
  { name: "Email", value: 15, color: "#f59e0b" },
  { name: "Others", value: 5, color: "#ef4444" },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Visitors</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">24,567</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">+12.5%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1,234</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">+8.2%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$86,420</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">+15.3%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5.2%</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-sm font-medium text-red-600">-2.1%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales & Visitors Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Line type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="visitors" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {trafficSources.map((source) => (
              <div key={source.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: source.color }}></div>
                <span className="text-sm text-gray-600">{source.name}</span>
                <span className="text-sm font-medium text-gray-900 ml-auto">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <tr key={product.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.sales}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.revenue}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${Math.max(20, 100 - index * 20)}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
