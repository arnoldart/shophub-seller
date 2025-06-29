import { Save, Shield, Bell, Globe, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <nav className="space-y-2">
            <a
              href="#general"
              className="flex items-center px-3 py-2 text-sm font-medium text-purple-700 bg-purple-50 rounded-lg"
            >
              <Globe className="mr-3 h-4 w-4" />
              General
            </a>
            <a
              href="#security"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Shield className="mr-3 h-4 w-4" />
              Security
            </a>
            <a
              href="#notifications"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Bell className="mr-3 h-4 w-4" />
              Notifications
            </a>
            <a
              href="#danger"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Trash2 className="mr-3 h-4 w-4" />
              Danger Zone
            </a>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
                <input
                  type="text"
                  defaultValue="Nexus Store"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Description</label>
                <textarea
                  rows={3}
                  defaultValue="Premium electronics and gadgets store"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>English</option>
                    <option>Indonesian</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>UTC+7 (Jakarta)</option>
                    <option>UTC+0 (London)</option>
                    <option>UTC-5 (New York)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Push Notifications</h4>
                  <p className="text-sm text-gray-500">Receive push notifications in browser</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Order Updates</h4>
                  <p className="text-sm text-gray-500">Get notified about new orders</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
            <div className="space-y-4">
              <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                <h4 className="font-medium text-red-900 mb-2">Delete Store</h4>
                <p className="text-sm text-red-700 mb-4">
                  Once you delete your store, there is no going back. Please be certain.
                </p>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Store
                </Button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
