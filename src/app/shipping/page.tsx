import content from "../../dictionaries/en.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Shipping() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0A0A0A] text-white pb-32">

      <Header />

      <section className="flex-1 px-6 pt-24 pb-12 max-w-xl mx-auto w-full">

        <div className="h-[1px] w-12 bg-[#C47A2C] mb-6"></div>

        <h1 className="text-2xl mb-6">
          {content.shipping.title}
        </h1>

        <div className="space-y-4 text-[#A1A1A1]">
          {content.shipping.text.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

      </section>

      <Footer />

      {/* STICKY BUY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0A0A0A] border-t border-[#1A1A1A] p-4 flex items-center justify-between">

        <div>
          <p className="text-sm">{content.product.name}</p>
          <p className="text-sm text-[#A1A1A1]">{content.product.price}</p>
        </div>

        <button className="bg-[#C47A2C] text-black px-6 py-3 rounded-full font-medium">
          {content.sticky.cta}
        </button>

      </div>

    </main>
  );
}