export default function Store1() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex-1">
          <img src="/assets/images/mobile.png" alt="Mobile" className="w-full max-w-xs" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-4xl font-bold mb-4">Manage Your Services by your Mobile Phone</h2>
          <p className="mb-8 text-blue-100">
            Download our app to manage and track your services. Our app enables you to stay in touch with our experts
            and aids you in tracking your progress.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center sm:justify-start">
            <a href="#" className="inline-block">
              <div className="bg-white text-black border border-gray-300 rounded-lg p-2 flex items-center gap-2 w-40">
                <img src="/assets/images/apple.png" alt="Apple Icon" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm">Get it on</div>
                  <span className="font-bold">App Store</span>
                </div>
              </div>
            </a>
            <a href="#" className="inline-block">
              <div className="bg-white text-black border border-gray-300 rounded-lg p-2 flex items-center gap-2 w-40">
                <img src="/assets/images/android.png" alt="Play Store Icon" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm">Get it on</div>
                  <span className="font-bold">Google Play</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
