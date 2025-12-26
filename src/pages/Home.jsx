import React from "react";

const HeroSection = () => (
  <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    {/* Background Decor */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      {/* Beta Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-600 text-xs font-semibold mb-6 border border-indigo-600/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
        </span>
        Now in Public Beta
      </div>

      {/* Hero Title */}
      <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-gray-50 leading-[1.1] mb-6">
        Professional conversations, <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-600 dark:to-indigo-400">
          without the noise.
        </span>
      </h1>

      {/* Hero Description */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Connect with industry leaders in a distraction-free environment designed
        for thoughtful discourse, not engagement farming.
      </p>

      {/* Hero Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-8 py-4 text-base font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-600/25">
          Start a Thread
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50 px-8 py-4 text-base font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          Read the Manifesto
        </button>
      </div>
    </div>

    {/* Hero Visual */}
    <div className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 relative perspective-1000 group">
      <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden transition-transform duration-700 rotate-x-6 hover:rotate-x-0 origin-center">
        {/* Browser Header */}
        <div className="h-10 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900/50 flex items-center px-4 gap-2">
          <div className="size-3 rounded-full bg-red-400/80"></div>
          <div className="size-3 rounded-full bg-amber-400/80"></div>
          <div className="size-3 rounded-full bg-green-400/80"></div>
          <div className="ml-4 h-6 w-64 rounded bg-gray-200 dark:bg-gray-700/50 opacity-50"></div>
        </div>

        {/* Content Simulation */}
        <div className="p-6 md:p-10 grid grid-cols-12 gap-8 bg-white dark:bg-gray-900/50 min-h-[400px]">
          {/* Sidebar */}
          <div className="hidden md:flex col-span-3 flex-col gap-4 border-r border-gray-100 dark:border-gray-800 pr-6">
            <div className="h-8 w-3/4 rounded bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
            <div className="h-4 w-1/2 rounded bg-gray-100 dark:bg-gray-800"></div>
            <div className="mt-4 flex flex-col gap-3">
              <div className="h-10 w-full rounded-lg bg-indigo-600/10 flex items-center px-3 gap-3">
                <div className="size-4 rounded bg-indigo-600/40"></div>
                <div className="h-2 w-1/2 rounded bg-indigo-600/20"></div>
              </div>
              <div className="h-10 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center px-3 gap-3">
                <div className="size-4 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-10 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center px-3 gap-3">
                <div className="size-4 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
            <div className="flex flex-col gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                <div>
                  <div className="h-3 w-32 rounded bg-gray-200 dark:bg-gray-600 mb-1"></div>
                  <div className="h-2 w-20 rounded bg-gray-100 dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="space-y-2 mt-1">
                <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-700"></div>
                <div className="h-3 w-5/6 rounded bg-gray-100 dark:bg-gray-700"></div>
                <div className="h-3 w-4/6 rounded bg-gray-100 dark:bg-gray-700"></div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="h-6 w-16 rounded-full bg-gray-50 dark:bg-gray-700"></div>
                <div className="h-6 w-16 rounded-full bg-gray-50 dark:bg-gray-700"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm opacity-60">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500"></div>
                <div>
                  <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-600 mb-1"></div>
                </div>
              </div>
              <div className="space-y-2 mt-1">
                <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-700"></div>
                <div className="h-3 w-3/4 rounded bg-gray-100 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -right-10 top-20 size-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-10 bottom-0 size-64 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
        Trusted by teams at modern companies
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <span className="material-symbols-outlined">hexagon</span> ACME Corp
        </div>
        <div className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <span className="material-symbols-outlined">change_history</span>{" "}
          Vertex
        </div>
        <div className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <span className="material-symbols-outlined">code_blocks</span> DevFlow
        </div>
        <div className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <span className="material-symbols-outlined">all_inclusive</span>{" "}
          Infinite
        </div>
        <div className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <span className="material-symbols-outlined">bolt</span> FastScale
        </div>
      </div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Designed for Focus
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Built for professionals who value clarity and depth over engagement
          metrics and infinite scrolling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 transition-colors shadow-sm hover:shadow-lg">
          <div className="size-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[28px]">
              format_list_bulleted
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
            Threaded Clarity
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Visualizing nested replies without the clutter. Easily follow
            complex conversations and branch off when needed without losing
            context.
          </p>
        </div>
        <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 transition-colors shadow-sm hover:shadow-lg">
          <div className="size-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[28px]">
              verified
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
            Verified Professionals
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Identity verification system ensuring you're talking to real
            experts. No bots, no spam, just high-signal professional discourse.
          </p>
        </div>
        <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 transition-colors shadow-sm hover:shadow-lg">
          <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[28px]">code</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
            Markdown Support
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Native support for code blocks, LaTeX, and rich text formatting.
            Express complex ideas with the precision they deserve.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LargeFeatureHighlight = () => (
  <section className="py-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
            A Cleaner Reading Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We stripped away the gamification. No like counts, no view counters,
            no algorithmic feed pushing rage-bait. Just you and the content you
            care about, presented in a typographic layout inspired by classic
            editorial design.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-500 mt-0.5">
                check_circle
              </span>
              <div>
                <strong className="block text-gray-900 dark:text-gray-50">
                  Chronological Feed
                </strong>
                <span className="text-gray-500 text-sm">
                  See updates as they happen, not when an AI decides.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-500 mt-0.5">
                check_circle
              </span>
              <div>
                <strong className="block text-gray-900 dark:text-gray-50">
                  Focus Mode
                </strong>
                <span className="text-gray-500 text-sm">
                  Collapse sidebars and notifications for deep reading.
                </span>
              </div>
            </li>
          </ul>
          <button className="mt-4 text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2 group">
            Learn more about our philosophy
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 dark:to-gray-900/50 pointer-events-none"></div>
            <div className="h-full bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4">
              <div className="h-8 w-2/3 bg-gray-800 dark:bg-gray-200 rounded-lg opacity-80 mb-4"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-indigo-500">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-[200px] animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-yellow-500">
                  lightbulb
                </span>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-50">
                  Insight
                </span>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="material-symbols-outlined text-indigo-600 text-5xl mb-6 opacity-30">
        format_quote
      </span>
      <blockquote className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-8">
        "Finally, a place where I can discuss engineering challenges without the
        memes. ThreadSpace brings the signal back to social media."
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        <div
          className="size-12 rounded-full bg-gray-300 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZcUqeQG-BKst6tfIBLNRq59hUEWl2IyQ1Qen3y95BqXGoLzDRW9PdWbCumczVerosELBZ1z2pW6msWMfS-d64yQGynjfdLc2fHJOFUNqP81AfYYDIoGk-EeI0iILhnSosvHptHeMGXk0BfzV0zAUl5y2EjbT0FgsUiSUTCgSNGUl_yK0NUqfA_iwtN23CAXWEhe85x8iHP-8PqHAciFFMNSpPocCFTh-8dUlJMk2YoxsUB5DL6TSpAcnOaEATjo2ZwdtUicPIKjQ')",
          }}
        ></div>
        <div className="text-left">
          <div className="font-bold text-gray-900 dark:text-gray-50">
            Sarah Chen
          </div>
          <div className="text-sm text-gray-500">CTO at TechCorp</div>
        </div>
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-20 bg-indigo-600 rounded-t-[3rem] text-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-black mb-6">
        Ready to join the conversation?
      </h2>
      <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
        Join thousands of professionals already using ThreadSpace to share
        knowledge and build meaningful connections.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-colors">
          Get Early Access
        </button>
      </div>
      <p className="mt-6 text-sm text-indigo-200">
        No credit card required. Cancel anytime.
      </p>
    </div>
  </section>
);

const FooterLinks = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4 text-white">
            <span className="material-symbols-outlined">forum</span>
            <span className="text-lg font-bold">ThreadSpace</span>
          </div>
          <p className="text-sm mb-4">
            Building the future of professional communication.
          </p>
          <div className="flex gap-4">
            <a className="hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">podcasts</span>
            </a>
            <a className="hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">rss_feed</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Manifesto
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Changelog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition-colors" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Guidelines
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p> 2023 ThreadSpace Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> All
            systems operational
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 font-sans overflow-x-hidden antialiased transition-colors duration-300">
      <HeroSection />
      <SocialProof />
      <FeaturesGrid />
      <LargeFeatureHighlight />
      <Testimonial />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
