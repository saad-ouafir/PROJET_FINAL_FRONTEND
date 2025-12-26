import React from "react";

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
    <div className="flex items-center gap-6">
      <a href="#" className="text-gray-900 dark:text-gray-50 font-bold text-lg">
        foryou
      </a>
      <a href="#" className="text-gray-500 dark:text-gray-400">
        trending
      </a>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-gray-500 dark:text-gray-400">🔍</button>
      <button className="text-gray-500 dark:text-gray-400">📋</button>
      <button className="text-gray-500 dark:text-gray-400">🌐</button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="py-12 px-4 text-center bg-white dark:bg-gray-900">
    <div className="max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
          <span className="text-white dark:text-black font-bold">BBA</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
        Welcome back.
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Share and discover what's happening now.
      </p>
      <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-medium">
        Start posting
      </button>
    </div>
  </section>
);

const FeatureCard = ({ title, description, icon, position }) => (
  <div
    className={`relative p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-64 h-64 flex flex-col justify-between`}
  >
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
    </div>
    <div
      className={`absolute ${position} w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center`}
    >
      {icon}
    </div>
  </div>
);

const FeaturesGrid = () => (
  <section className="py-12 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        title="Live feed."
        description="See real-time updates from people you follow and topics you care about."
        icon={
          <div className="w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded-sm"></div>
        }
        position="bottom-4 right-4"
      />
      <FeatureCard
        title="Trending now."
        description="Stay updated on trending topics and join popular conversations."
        icon={
          <div className="w-10 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full"></div>
        }
        position="top-4 right-4"
      />
      <FeatureCard
        title="Create posts."
        description="Share your thoughts, ideas, and join conversations instantly."
        icon={
          <div className="w-8 h-8 border-t-2 border-gray-400 dark:border-gray-500 rotate-45"></div>
        }
        position="bottom-4 left-4"
      />
    </div>
  </section>
);

const FeatureList = () => (
  <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { icon: "⚡", title: "Live updates" },
        { icon: "📈", title: "Trending topics" },
        { icon: "🔍", title: "Suggest users" },
        { icon: "💬", title: "Quick reply" },
      ].map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
        >
          <div className="text-2xl mb-2">{feature.icon}</div>
          <p className="text-gray-900 dark:text-gray-50 font-medium">
            {feature.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-12 px-4 text-center bg-white dark:bg-gray-900">
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
        Start posting now
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Join trending conversations and share your thoughts.
      </p>
      <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-medium">
        Create account
      </button>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <FeatureList />
      <CTASection />
    </div>
  );
}
