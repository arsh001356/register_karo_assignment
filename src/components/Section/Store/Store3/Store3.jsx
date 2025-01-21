export default function Store3() {
    return (
      <section className="bg-gradient-to-r from-orange-400 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium">1% OF THE INDUSTRY</span>
          <h2 className="text-4xl font-bold my-4">Welcome to your new digital reality. Now.</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Submit
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Instant results</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>User-friendly interface</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Personalized customization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
