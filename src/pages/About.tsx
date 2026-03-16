import { BuildingStorefrontIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#1d4ed8_0%,#1e3a8a_55%,#0f172a_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary-100">About SportGoods</p>
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white">The prototype baseline, upgraded for production polish</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SportGoods combines a structured store experience with admin-oriented order and inventory
            management. The result stays close to the original presentation flows while improving clarity,
            responsiveness, and interface quality.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">Our story</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Built around the shopping lifecycle in the project diagrams</h2>
          <p className="text-base leading-7 text-slate-600">
            The experience follows the presentation sequence closely: browse the catalog, inspect product
            details, verify availability, place an order, and track status changes through a clear customer
            and admin flow.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Behind the storefront sits an admin workspace focused on products, categories, users, order
            statuses, and low-stock monitoring. The visual system has been upgraded to feel more like a modern
            analytics dashboard without expanding the functional scope beyond the project requirements.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
            alt="Basketball court"
            className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          {
            icon: BuildingStorefrontIcon,
            title: "Catalog-first UX",
            description: "Category browsing, filter support, product detail views, and cart/checkout flows remain the core shopping path.",
          },
          {
            icon: TruckIcon,
            title: "Operations visibility",
            description: "Admins can follow order progress, inventory movement, and low-stock signals from one structured workspace.",
          },
          {
            icon: ShieldCheckIcon,
            title: "Privacy and security",
            description: "Password recovery, HTTPS redirection, GDPR export and account deletion entry points are available from the current implementation.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.5)]">
            <item.icon className="h-11 w-11 rounded-2xl bg-primary-50 p-2.5 text-primary-600" />
            <h3 className="mt-6 font-display text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default About;
