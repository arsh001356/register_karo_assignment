
export default function Store2() {
    const stats = [
      { number: "1M+", label: "CUSTOMERS" },
      { number: "12+", label: "YEARS OF EXCELLENCE" },
      { number: "41+", label: "R&D ENGINEERS" },
      { number: "78+", label: "COUNTRIES" },
      { number: "3287+", label: "PARTNERS" },
      { number: "41+", label: "AWARDS RECEIVED" },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-medium">WHY REGISTER KARO</span>
            <h2 className="text-3xl font-bold mt-2">Some Numbers are important</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  