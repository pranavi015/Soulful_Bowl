// app/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-green-50 text-gray-700 py-10 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-green-700">Soulful Bowl</h2>
            <p className="text-sm mt-2 max-w-sm">
              Nourishing plant-based recipes and resources to help you live a calm, vibrant, and uncomplicated life.
            </p>
          </div>
  
          <div className="flex space-x-6">
            <a href="/recipes" className="hover:text-green-600">Recipes</a>
            <a href="/articles" className="hover:text-green-600">Articles</a>
            <a href="/about" className="hover:text-green-600">About</a>
          </div>
        </div>
  
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Soulful Bowl. All rights reserved.
        </div>
      </footer>
    );
  }
  