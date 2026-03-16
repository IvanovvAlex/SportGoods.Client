import { useEffect, useState } from "react";
import { ArrowRightIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";

interface Category {
  id: string;
  name: string;
  imageURI?: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  mainImageUrl: string;
  regularPrice: number;
  quantity: number;
  categoryId: string;
  rating?: number;
  discountPercentage?: number;
  discountedPrice?: number;
}

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [categoriesResponse, bestSellersResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/Categories`),
          fetch(`${import.meta.env.VITE_API_URL}/Products/best-sellers?numOfBestSellers=3`),
        ]);

        if (categoriesResponse.ok) {
          const categoriesData = (await categoriesResponse.json()) as Category[];
          setCategories(categoriesData);
        }

        if (bestSellersResponse.ok) {
          const bestSellersData = (await bestSellersResponse.json()) as Product[];
          setBestSellers(bestSellersData);
        }
      } catch (error) {
        console.error("Home data fetch failed:", error);
      }
    };

    void fetchHomeData();
  }, []);

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.18),_transparent_32%),linear-gradient(115deg,#081123_0%,#172554_48%,#1f3a8a_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary-100">
              Modern sports commerce
            </span>
            <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Gear Up for <span className="text-primary-300">Excellence</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Explore curated sporting goods, structured product flows, secure checkout, and a store
              experience upgraded from the presentation prototype without changing its core layout.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/store"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_rgba(59,130,246,0.75)] transition hover:bg-primary-400"
              >
                Shop now
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Why choose SportGoods
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Categories", value: `${categories.length || 4}+` },
                { label: "Secure checkout", value: "2" },
                { label: "Order statuses", value: "7" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/12 bg-white/6 p-5 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-8 h-36 w-36 rounded-full bg-primary-400/20 blur-3xl" />
            <div className="absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_35px_100px_-45px_rgba(15,23,42,1)]">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                alt="Sports shoes"
                className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Secure and structured",
              description: "HTTPS-first flows, account auth, and a checkout sequence aligned with the project diagrams.",
            },
            {
              icon: BoltIcon,
              title: "Faster browsing",
              description: "Cleaner hierarchy, improved spacing, and filter-first navigation for the store experience.",
            },
            {
              icon: ChartBarIcon,
              title: "Admin visibility",
              description: "A management workspace with metrics, low-stock visibility, and order monitoring.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
              <item.icon className="h-10 w-10 rounded-2xl bg-primary-50 p-2.5 text-primary-600" />
              <h2 className="mt-5 font-display text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-600">Browse by category</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950">Prototype structure, cleaner presentation</h2>
          </div>
          <Link to="/store" className="hidden text-sm font-semibold text-slate-700 transition hover:text-primary-600 sm:inline-flex">
            View all products
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.slice(0, 3).map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${encodeURIComponent(category.id)}`}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.45)]"
            >
              <div className="aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src={category.imageURI ?? "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-display text-xl font-semibold text-slate-950">{category.name}</p>
                  <p className="mt-1 text-sm text-slate-500">Explore products and stock availability</p>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-slate-400 transition group-hover:text-primary-600" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-600">Best sellers</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950">Featured products for the main shopping flow</h2>
            </div>
            <Link to="/products" className="hidden text-sm font-semibold text-slate-700 transition hover:text-primary-600 sm:inline-flex">
              Open store
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
