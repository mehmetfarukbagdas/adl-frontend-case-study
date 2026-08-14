import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Breadcrumb />
      <main className="w-full">
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;