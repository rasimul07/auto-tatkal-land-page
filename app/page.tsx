import Image from "next/image";
import Link from "next/link";
import { features, plans, site, steps } from "@/lib/site";

export default function HomePage() {
  const storeReady = site.chromeStoreUrl !== "#";

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--rt-border)] bg-[var(--rt-surface)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 text-center sm:px-6 md:flex-row md:py-20 md:text-left">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--rt-accent)]">
              Chrome extension
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--rt-primary)] sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-4 text-lg text-[var(--rt-text-muted)]">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href={site.chromeStoreUrl}
                className="rounded-full bg-[var(--rt-accent)] px-6 py-3 font-semibold text-white hover:opacity-90"
                {...(storeReady ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {storeReady ? "Add to Chrome" : "Chrome Web Store — coming soon"}
              </a>
              <a
                href={site.bmcUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--rt-primary)] px-6 py-3 font-semibold text-[var(--rt-primary)] hover:bg-[var(--rt-surface-muted)]"
              >
                View plans on BMC
              </a>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[var(--rt-surface-muted)] p-8">
            <Image
              src="/icons/icon96.png"
              alt="Auto Tatkal extension icon"
              width={96}
              height={96}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-[var(--rt-primary)]">
          Why use Auto Tatkal?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-[var(--rt-border)] bg-[var(--rt-surface)] p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[var(--rt-primary)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[var(--rt-text-muted)]">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[var(--rt-border)] bg-[var(--rt-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[var(--rt-primary)]">
            How it works
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--rt-primary)] text-sm font-bold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="font-semibold text-[var(--rt-primary)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--rt-text-muted)]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-[var(--rt-primary)]">Plans</h2>
        <p className="mt-2 text-center text-[var(--rt-text-muted)]">
          Subscriptions and tokens are managed via Buy Me a Coffee.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-xl border border-[var(--rt-border)] bg-[var(--rt-surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--rt-primary)]">{plan.name}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--rt-accent)]">{plan.price}</p>
              <p className="mt-3 text-sm text-[var(--rt-text-muted)]">{plan.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center">
          <a
            href={site.bmcUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--rt-primary)] hover:underline"
          >
            Get access on Buy Me a Coffee →
          </a>
        </p>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[var(--rt-border)] bg-[var(--rt-surface-muted)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-center text-sm leading-relaxed text-[var(--rt-text-muted)]">
            <strong className="text-[var(--rt-primary)]">Disclaimer:</strong> This is an
            independent assistant tool. It is not an official IRCTC or Indian Railways product.
            Ticket availability and booking success are not guaranteed. You are responsible for
            completing CAPTCHA, OTP, and payment on IRCTC.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--rt-primary)]">Ready to book faster?</h2>
        <p className="mt-2 text-[var(--rt-text-muted)]">
          Available on the Chrome Web Store. Install the extension and follow the setup steps on
          IRCTC.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={site.chromeStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--rt-accent)] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Add to Chrome
          </a>
        </div>
        <p className="mt-6 text-sm text-[var(--rt-text-muted)]">
          After install?{" "}
          <Link href="/thank-you" className="font-medium text-[var(--rt-primary)] hover:underline">
            See what to do next →
          </Link>
        </p>
      </section>
    </main>
  );
}
