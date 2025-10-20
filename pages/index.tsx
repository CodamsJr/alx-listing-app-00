import Layout from "../components/layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Listing Page</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
            >
              <img
                src={`https://picsum.photos/400/200?random=${item}`}
                alt="listing"
                className="rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Item {item}</h2>
              <p className="text-gray-600">Beautiful responsive design.</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
