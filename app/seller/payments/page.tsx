import { Search, Filter, Download, CreditCard, DollarSign, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const payments = [
  {
    id: "PAY-001",
    customer: "John Doe",
    amount: "$129.99",
    method: "Credit Card",
    status: "Completed",
    date: "2024-01-15",
    orderId: "#ORD-001",
  },
  {
    id: "PAY-002",
    customer: "Jane Smith",
    amount: "$299.99",
    method: "PayPal",
    status: "Completed",
    date: "2024-01-14",
    orderId: "#ORD-002",
  },
  {
    id: "PAY-003",
    customer: "Mike Johnson",
    amount: "$79.99",
    method: "Bank Transfer",
    status: "Pending",
    date: "2024-01-13",
    orderId: "#ORD-003",
  },
  {
    id: "PAY-004",
    customer: "Sarah Wilson",
    amount: "$129.99",
    method: "Credit Card",
    status: "Failed",
    date: "2024-01-12",
    orderId: "#ORD-004",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800"
    case "Pending":
      return "bg-yellow-100 text-yellow-800"
    case "Failed":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function Payments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Payments & Billing</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$86,420</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
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
              <p className="text-sm font-medium text-gray-600">Pending Payments</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$2,340</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm text-gray-500">3 pending transactions</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month Payout</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$78,120</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm text-gray-500">Next payout: Jan 25</span>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search payments..."
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
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payment.status)}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 hover:text-purple-800">
                    {payment.orderId}
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
