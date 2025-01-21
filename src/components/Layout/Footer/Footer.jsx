export default function Footer() {
    const links = {
      "START A BUSINESS": ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
      "GOVERNMENT REGISTRATION": ["Partners", "Community", "Developers", "App", "Blog"],
      "COMPLIANCE & TAX": ["Channels", "Scale", "Watch the Demo", "Our Competition"],
      "BIS & CDSCO": ["About Us", "News", "Leadership", "Media Kit"],
    }
  
    return (
      <footer className="bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <p className="max-w-xs text-gray-400">
                Design outstanding interfaces with advanced Figma features in a matter of minutes.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.274c-.398.8-1.15 1.373-1.95 1.724-.4.176-1.025.4-2.073.576-1.048.176-2.073.2-3.448.2-1.374 0-2.4-.024-3.447-.2-1.048-.175-1.673-.4-2.073-.576-.8-.35-1.55-.924-1.95-1.724C2.625 14.475 2.4 13.85 2.225 12.8 2.05 11.75 2.025 10.725 2.025 9.35c0-1.374.025-2.4.2-3.447.176-1.048.4-1.673.576-2.073.35-.8.924-1.55 1.724-1.95.8-.398 1.425-.624 2.474-.8C8.048 1.025 9.075 1 10.45 1c1.374 0 2.4.025 3.447.2 1.048.176 1.673.4 2.073.576.8.35 1.55.924 1.95 1.724.398.8.624 1.425.8 2.474.175 1.048.2 2.074.2 3.447 0 1.374-.025 2.4-.2 3.447-.176 1.048-.4 1.673-.576 2.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6c-.24.12-.48.24-.72.36-.96.48-1.92.84-2.88 1.08-.96.24-1.92.36-2.88.36-.96 0-1.92-.12-2.88-.36-.96-.24-1.92-.6-2.88-1.08-.24-.12-.48-.24-.72-.36C2.64 17.04 1.2 14.76 1.2 12c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8c0 2.76-1.44 5.04-3.784 6.6z" />
                  </svg>
                </a>
              </div>
            </div>
  
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-orange-500 font-medium mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Registerkaro. All Rights Reserved.</p>
            <button
              className="mt-4 md:mt-0 bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    )
  }
  
  