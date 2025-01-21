import { LightbulbIcon, MessageCircleIcon } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Our Video Introductions</h2>
              <p className="text-blue-100">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 rounded-full p-4">
                  <LightbulbIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore ideas together</h3>
                  <p className="text-blue-100">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 rounded-full p-4">
                  <MessageCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bring those ideas to life</h3>
                  <p className="text-blue-100">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative h-full">
            <div className="aspect-video rounded-lg overflow-hidden h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UdG1AA2gWQs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
