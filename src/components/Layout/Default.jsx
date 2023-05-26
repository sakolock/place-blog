import Footer from "./Footer"
import Header from "./Header"

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <div className="container md:w-9/12 my-10 mx-auto items-center min-h-[700px]">
        {children}
      </div>
      <Footer />
    </div>
  )
}
