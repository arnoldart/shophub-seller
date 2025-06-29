import { Search, Send, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const conversations = [
  {
    id: 1,
    customer: "John Doe",
    lastMessage: "Hi, I have a question about my order...",
    time: "2 min ago",
    unread: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    customer: "Jane Smith",
    lastMessage: "Thank you for the quick response!",
    time: "1 hour ago",
    unread: false,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    customer: "Mike Johnson",
    lastMessage: "When will my order be shipped?",
    time: "3 hours ago",
    unread: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const messages = [
  {
    id: 1,
    sender: "customer",
    message: "Hi, I have a question about my order #ORD-001. When will it be shipped?",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "seller",
    message:
      "Hello! Thank you for contacting us. Your order #ORD-001 will be shipped within 24 hours. You will receive a tracking number via email.",
    time: "10:35 AM",
  },
  {
    id: 3,
    sender: "customer",
    message: "Great! Thank you for the quick response.",
    time: "10:36 AM",
  },
]

export default function Messages() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">2 unread messages</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="overflow-y-auto h-full">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  conversation.id === 1 ? "bg-purple-50 border-l-4 border-l-purple-500" : ""
                }`}
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={conversation.avatar || "/placeholder.svg"}
                    alt={conversation.customer}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">{conversation.customer}</p>
                      <p className="text-xs text-gray-500">{conversation.time}</p>
                    </div>
                    <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=40&width=40" alt="John Doe" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "seller" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === "seller" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-1 ${message.sender === "seller" ? "text-purple-200" : "text-gray-500"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
