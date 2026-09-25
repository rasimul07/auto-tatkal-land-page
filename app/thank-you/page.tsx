import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you — Get started",
};

const onboardingSteps = [
  {
    title: "Pin the extension",
    description:
      "Open Chrome’s extensions menu (puzzle icon) and pin IRCTC Tatkal Auto Booking. Click the icon anytime to open the popup.",
    link: {
      href: "chrome://extensions",
      label: "Open chrome://extensions",
    },
  },
  {
    title: "Link your BMC email",
    description:
      "In the popup, go to the Access tab and enter the email you used on Buy Me a Coffee. This activates your trial or membership.",
    link: {
      href: site.bmcUrl,
      label: "Buy Me a Coffee page",
      external: true,
    },
  },
  {
    title: "Save details & start booking",
    description:
      "Fill Login, Journey, and Passengers tabs. When ready, click Start Auto-Booking to open IRCTC and run the flow. Complete CAPTCHA, OTP, and payment yourself.",
    link: null,
  },
];

export default function ThankYouPage() {
  const storeReady = site.chromeStoreUrl !== "#";

  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--rt-surface-muted)]">
          <Image
            src="/icons/icon96.png"
            alt=""
            width={56}
            height={56}
            className="rounded-lg"
          />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-[var(--rt-primary)]">
          Extension installed — nice!
        </h1>
        <p className="mt-2 text-[var(--rt-text-muted)]">
          Follow these steps to get your first booking ready.
        </p>
      </div>

      <ol className="mt-12 space-y-8">
        {onboardingSteps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-xl border border-[var(--rt-border)] bg-[var(--rt-surface)] p-6"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--rt-primary)] text-sm font-bold text-white"
              aria-hidden
            >
              {index + 1}
            </span>
            <div>
              <h2 className="font-semibold text-[var(--rt-primary)]">{step.title}</h2>
              <p className="mt-2 text-sm text-[var(--rt-text-muted)]">{step.description}</p>
              {step.link && (
                <p className="mt-3">
                  <a
                    href={step.link.href}
                    className="text-sm font-medium text-[var(--rt-accent)] hover:underline"
                    {...(step.link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {step.link.label} →
                  </a>
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {storeReady && (
          <a
            href={site.chromeStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--rt-accent)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Open in Chrome Web Store
          </a>
        )}
        <Link
          href="/"
          className="rounded-full border border-[var(--rt-primary)] px-6 py-3 text-sm font-semibold text-[var(--rt-primary)] hover:bg-[var(--rt-surface-muted)]"
        >
          Back to home
        </Link>
      </div>

      <p className="mt-8 text-center text-xs text-[var(--rt-text-muted)]">
        Note: <code className="rounded bg-[var(--rt-surface-muted)] px-1">chrome://extensions</code>{" "}
        links only work when typed or pasted in Chrome&apos;s address bar.
      </p>
    </main>
  );
}
