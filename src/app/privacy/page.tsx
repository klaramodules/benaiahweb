import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white px-6 py-24 max-w-xl mx-auto">

      <Header />

      <h1 className="text-2xl mb-6">Privacy</h1>

      <div className="space-y-4 text-[#A1A1A1]">

        <p>
          We respect your privacy and only collect information necessary to process your order.
        </p>

        <p>
          Your data will never be sold or shared with third parties for marketing purposes.
        </p>

        <p>
          We use secure payment providers to ensure your information is protected.
        </p>

        <p>
          By using this site, you agree to our data practices.
        </p>

      </div>

      <Footer />

    </main>
  );
}