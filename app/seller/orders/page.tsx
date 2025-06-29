import { Search, Filter, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const orders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    product: "Wireless Headphones",
    status: "Processing",
    date: "2024-01-15",
    total: "$129.99",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    product: "Smart Watch",
    status: "Shipped",
    date: "2024-01-14",
    total: "$299.99",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    product: "Bluetooth Speaker",
    status: "Delivered",
    date: "2024-01-13",
    total: "$79.99",
  },
  {
    id: "#ORD-004",
    customer: "Sarah Wilson",
    product: "Wireless Headphones",
    status: "Pending",
    date: "2024-01-12",
    total: "$129.99",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800"
    case "Processing":
      return "bg-blue-100 text-blue-800"
    case "Shipped":
      return "bg-purple-100 text-purple-800"
    case "Delivered":
      return "bg-green-100 text-green-800"
    case "Cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>All Status</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
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
