import Header from "@/containers/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  EAZY WAY TO CONTROL YOUR FINANCE
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-900 md:text-xl dark:text-black">
                  Secure • Trusted • Private • Saving
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
