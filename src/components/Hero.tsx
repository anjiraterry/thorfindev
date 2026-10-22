import IsoStack from "./IsoStack";

export default function Hero() {
  return (
    <section className="grid gap-10 px-6 py-12 lg:grid-cols-12 lg:gap-0 lg:px-10">
      <pre className="order-3 self-start overflow-x-auto border border-line bg-black/40 p-4 font-mono text-[11px] leading-5 text-muted lg:order-1 lg:col-span-4" aria-label="Example API call">
{`// create a checkout session
const thorfin = new Thorfin({ key });

const session = await thorfin
  .checkout.create({
    amount: 25000,
    currency: "NGN",
  });

// webhooks, ledger and
// reconciliation included`}
      </pre>

      <div className="order-2 lg:col-span-8 lg:-ml-8">
        <IsoStack />
      </div>

      <div className="order-1 lg:order-3 lg:col-span-7 lg:col-start-6 lg:-mt-24">
        <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          Reliable software for commerce and money.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-snug text-muted">
          Thorfin Dev designs and builds ecommerce platforms, payment systems and fintech products for teams that can&apos;t afford downtime.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="bg-fg px-5 py-3 text-sm font-medium text-ink hover:bg-white">Start a project</a>
          <a href="#projects" className="border border-fg/70 px-5 py-3 text-sm font-medium hover:bg-fg/5">See our work</a>
        </div>
      </div>
    </section>
  );
}
