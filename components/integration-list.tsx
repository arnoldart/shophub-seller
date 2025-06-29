const integrations = [
  {
    name: "Stripe",
    type: "Finance",
    rate: "40%",
    profit: "$650.00",
    color: "bg-blue-500",
    icon: "💳",
  },
  {
    name: "Zapier",
    type: "CRM",
    rate: "60%",
    profit: "$720.50",
    color: "bg-orange-500",
    icon: "⚡",
  },
  {
    name: "Shopify",
    type: "Marketplace",
    rate: "30%",
    profit: "$432.25",
    color: "bg-green-500",
    icon: "🛍️",
  },
]

export function IntegrationList() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">List of Integration</h3>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">See All</button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider pb-2 border-b border-gray-200">
          <div>Application</div>
          <div>Type</div>
          <div>Rate</div>
          <div>Profit</div>
        </div>

        {integrations.map((integration) => (
          <div key={integration.name} className="grid grid-cols-4 gap-4 items-center py-3">
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 ${integration.color} rounded-lg flex items-center justify-center text-white text-sm`}
              >
                {integration.icon}
              </div>
              <span className="font-medium text-gray-900">{integration.name}</span>
            </div>
            <div className="text-sm text-gray-600">{integration.type}</div>
            <div className="flex items-center">
              <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: integration.rate }}></div>
              </div>
              <span className="text-sm text-gray-600">{integration.rate}</span>
            </div>
            <div className="font-semibold text-gray-900">{integration.profit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
