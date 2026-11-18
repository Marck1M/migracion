import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { productos } from '../data'

function Products() {
  return (
    <>
      <Header />
      <section id="productos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Catálogo Oficial</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Nuestros Productos
            </h2>
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              Calidad comprobada, materiales duraderos y diseño funcional para tu trabajo o tiempo libre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              productos.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Products