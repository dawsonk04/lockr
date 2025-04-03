import React from 'react';
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 border border-emerald-100">
          <h1 className="text-3xl font-bold text-emerald-700 mb-6">Welcome to Your Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h2 className="text-xl font-semibold text-emerald-700 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Total Passwords</p>
                  <p className="text-2xl font-bold text-emerald-600">0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Updated</p>
                  <p className="text-2xl font-bold text-emerald-600">Never</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h2 className="text-xl font-semibold text-emerald-700 mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                  Add New Password
                </button>
                <button className="w-full py-2 px-4 bg-white text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
                  Generate Password
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h2 className="text-xl font-semibold text-emerald-700 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <p className="text-gray-600">No recent activity</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="mt-8">
            <div className="bg-white border border-emerald-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-emerald-700 mb-4">Your Password Vault</h2>
              <div className="text-center py-8">
                <p className="text-gray-600">Your password vault is empty. Add your first password to get started!</p>
                <button className="mt-4 py-2 px-6 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                  Add Your First Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 