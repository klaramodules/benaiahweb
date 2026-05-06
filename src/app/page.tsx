import Header from "../components/Header";
import Footer from "../components/Footer";
import content from "../dictionaries/en.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pb-24">

      <Header />

      {/* HERO */}
      <section className="px-6 pt-24 pb-12 max-w-xl mx-auto">
        <div className="h-[1px] w-12 bg-[#C47A2C] mb-6"></div>

        <h1 className="text-4xl font-semibold leading-tight mb-6 tracking-tight">
          {content.hero.title}
        </h1>

        <p className="text-[#A1A1A1]">
          {content.hero.subtitle}
        </p>
      </section>

      {/* PRODUCT */}
      <section className="px-6 pb-16 max-w-xl mx-auto">

        <div className="w-full mb-8">
          <img
            src="/pouch_1.jpg"
            alt="Benaiah pouch"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-lg font-medium">{content.product.name}</p>
          <p className="text-lg">{content.product.price}</p>
        </div>

        <button className="w-full bg-[#C47A2C] text-black py-4 rounded-full font-medium">
          {content.product.cta}
        </button>

      </section>

      {/* BULLETS */}
      <section className="px-6 pb-16 max-w-xl mx-auto">
        <div className="space-y-4">
          {content.bullets.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-[#A1A1A1]">
              <div className="w-1.5 h-1.5 bg-[#C47A2C] rounded-full mt-2"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KIT */}
      <section className="px-6 pb-16 max-w-xl mx-auto">
        <div className="border-t border-[#1A1A1A] pt-12">

          <h2 className="text-lg mb-6">{content.kit.title}</h2>

          <div className="flex items-center justify-between mb-4">
            <p className="text-[#A1A1A1]">{content.kit.item}</p>
            <p>{content.kit.price}</p>
          </div>

          <button className="w-full border border-[#1A1A1A] py-3 rounded-full text-[#A1A1A1] hover:border-[#C47A2C] hover:text-white transition">
            {content.kit.cta}
          </button>

        </div>
      </section>

      {/* TRUST */}
      <section className="px-6 pb-24 max-w-xl mx-auto">
        <div className="border-t border-[#1A1A1A] pt-12 space-y-3 text-sm text-[#A1A1A1]">
          {content.trust.map((item, index) => (
            <p key={index}>{item}</p>
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