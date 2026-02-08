import Link from 'next/link';
import { Check, X } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Why OffshoreMate Outperforms the Competition
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Compare OffshoreMate with Salesforce, HubSpot, and Zoho CRM. 
            See why growing teams choose us for simplicity, value, and results.
          </p>
          <Link 
            href="https://app.offshoremate.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started with OffshoreMate
          </Link>
        </div>
      </header>

      {/* Pricing Comparison */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Transparent Pricing That Scales With You
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          No hidden fees. No per-user costs that spiral out of control.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* OffshoreMate */}
          <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Best Value
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">OffshoreMate</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">$49</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Flat rate, unlimited users</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>All features included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Offshore team management</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Priority support</span>
              </li>
            </ul>
          </div>

          {/* Salesforce */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Salesforce</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">$25-300</span>
              <span className="text-slate-600">/user/mo</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Complex pricing tiers</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Enterprise features</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Very expensive at scale</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Complex setup</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Overkill for SMBs</span>
              </li>
            </ul>
          </div>

          {/* HubSpot */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">HubSpot CRM</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">Free</span>
              <span className="text-slate-600">+</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Free tier, paid upgrades</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Easy setup</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Good free tier</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Limited free features</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Expensive upgrades</span>
              </li>
            </ul>
          </div>

          {/* Zoho */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Zoho CRM</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">$0-65</span>
              <span className="text-slate-600">/user/mo</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Free for 3 users max</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Good value</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Clean UI</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Limited free plan</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span>Storage limits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-slate-50">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Feature Comparison
        </h2>
        
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                <th className="text-center p-4 font-semibold text-blue-600">OffshoreMate</th>
                <th className="text-center p-4 font-semibold text-slate-700">Salesforce</th>
                <th className="text-center p-4 font-semibold text-slate-700">HubSpot CRM</th>
                <th className="text-center p-4 font-semibold text-slate-700">Zoho CRM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-700">Unlimited Users</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="p-4 text-slate-700">Flat Monthly Rate</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-700">Offshore Team Management</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                <td className="p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="p-4 text-slate-700">Contact Management</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-700">Pipeline Management</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="p-4 text-slate-700">Automation & Workflows</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center text-slate-500 text-sm">Paid only</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-700">AI-Powered Insights</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center text-slate-500 text-sm">Paid only</td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="p-4 text-slate-700">Mobile Apps</td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-slate-700">Setup Time</td>
                <td className="p-4 text-center text-green-600 font-semibold">5 minutes</td>
                <td className="p-4 text-center text-slate-500">Days/weeks</td>
                <td className="p-4 text-center text-green-600">15 minutes</td>
                <td className="p-4 text-center text-slate-600">30 minutes</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-700 font-semibold">Best For</td>
                <td className="p-4 text-center text-sm text-slate-700">Growing teams with offshore staff</td>
                <td className="p-4 text-center text-sm text-slate-700">Large enterprises</td>
                <td className="p-4 text-center text-sm text-slate-700">Small teams starting out</td>
                <td className="p-4 text-center text-sm text-slate-700">Budget-conscious SMBs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose OffshoreMate */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Why Teams Choose OffshoreMate
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Predictable Pricing</h3>
            <p className="text-slate-600">
              One flat rate for unlimited users. No surprises as your team grows.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Quick Setup</h3>
            <p className="text-slate-600">
              Get up and running in minutes, not days. No IT team required.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Built for Offshore Teams</h3>
            <p className="text-slate-600">
              Specialized features for managing remote and offshore staff seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Switch?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of teams who've simplified their CRM and saved money with OffshoreMate.
          </p>
          <Link 
            href="https://app.offshoremate.com" 
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
          </Link>
          <p className="text-blue-100 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-600 border-t border-slate-200">
        <p>&copy; 2026 OffshoreMate. All rights reserved.</p>
      </footer>
    </div>
  );
}
