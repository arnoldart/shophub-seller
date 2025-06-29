"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  CreditCard,
  Users,
  MessageSquare,
  Package,
  FileText,
  BarChart3,
  Zap,
  Settings,
  Shield,
  HelpCircle,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/seller/dashboard", icon: LayoutDashboard },
  { name: "Payment", href: "/seller/payments", icon: CreditCard },
  { name: "Customers", href: "/seller/customers", icon: Users },
  { name: "Message", href: "/seller/messages", icon: MessageSquare, badge: 8 },
  { name: "Product", href: "/seller/products", icon: Package },
  { name: "Invoice", href: "/seller/orders", icon: FileText },
  { name: "Analytics", href: "/seller/analytics", icon: BarChart3 },
  { name: "Automation", href: "/seller/automation", icon: Zap, badge: "BETA" },
]

const support = [
  { name: "Settings", href: "/seller/settings", icon: Settings },
  { name: "Security", href: "/seller/security", icon: Shield },
  { name: "Help", href: "/seller/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Shophub Seller</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                    {item.badge && (
                      <span
                        className={cn(
                          "ml-auto text-xs px-2 py-1 rounded-full",
                          typeof item.badge === "number" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600",
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="pt-6">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Support</p>
              <div className="mt-2 space-y-1">
                {support.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        isActive
                          ? "bg-purple-50 text-purple-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </nav>

          {/* Upgrade Plan */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">UP</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Marketing</p>
                  <p className="text-xs opacity-90">Upgrade Plan</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">© 2023 Shophub Seller Inc.</p>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
