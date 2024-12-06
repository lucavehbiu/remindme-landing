import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Never Forget Important Web Content
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Remind Me is your intelligent companion for setting contextual reminders while browsing.
          Save anything interesting you find online and get reminded when it matters.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://chrome.google.com/webstore/detail/your-extension-id"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Chrome
          </a>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Key Features
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "One-Click Reminders",
              description: "Right-click any text or element on a webpage to set a reminder instantly.",
              icon: "🎯",
            },
            {
              title: "Smart Context",
              description: "We save not just the reminder, but the full context including the webpage URL.",
              icon: "🧠",
            },
            {
              title: "Flexible Scheduling",
              description: "Choose when you want to be reminded - later today, tomorrow, next week, or custom date.",
              icon: "📅",
            },
            {
              title: "Beautiful Interface",
              description: "Modern, clean design with intuitive controls and smooth animations.",
              icon: "✨",
            },
            {
              title: "Email Notifications",
              description: "Optional email reminders ensure you never miss important information.",
              icon: "📧",
            },
            {
              title: "Privacy First",
              description: "Your data stays in your browser. We respect your privacy.",
              icon: "🔒",
            },
          ].map((feature) => (
            <div key={feature.title} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
