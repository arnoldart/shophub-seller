"use client"

import { Search, Calendar, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-80"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">⌘ F</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            Calendar
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">Young Alaska</p>
              <p className="text-gray-500">Business</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
