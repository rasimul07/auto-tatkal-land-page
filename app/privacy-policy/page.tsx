import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <article className="prose prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-[var(--rt-primary)]">
          Privacy Policy — IRCTC Tatkal Auto Booking
        </h1>
        <p className="text-sm text-[var(--rt-text-muted)]">
          <strong>Last updated:</strong> September 2026
        </p>
        <p>
          <strong>Publisher:</strong> MRITools (independent developer; not affiliated with IRCTC
          or Indian Railways)
        </p>
        <p>
          <strong>Contact:</strong> Use the support link on the{" "}
          <a
            href={site.bmcUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--rt-primary)] hover:underline"
          >
            Buy Me a Coffee page
          </a>
          {site.supportEmail ? (
            <>
              {" "}
              or{" "}
              <a href={`mailto:${site.supportEmail}`} className="text-[var(--rt-primary)] hover:underline">
                {site.supportEmail}
              </a>
            </>
          ) : (
            " or your published support email"
          )}
          .
        </p>

        <hr className="my-8 border-[var(--rt-border)]" />

        <h2 className="text-xl font-semibold text-[var(--rt-primary)]">Summary</h2>
        <p className="text-[var(--rt-text-muted)]">
          This Chrome extension helps you fill IRCTC train booking forms using settings you save
          in the extension. We do not sell your data. IRCTC login and booking happen on
          irctc.co.in under IRCTC&apos;s own terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">
          Data stored on your device
        </h2>
        <p className="text-[var(--rt-text-muted)]">
          The extension uses Chrome <strong>local storage</strong> (
          <code className="rounded bg-[var(--rt-surface-muted)] px-1">chrome.storage.local</code>)
          on your computer for:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--rt-text-muted)]">
          <li>IRCTC username and password (if you enter them in the extension popup)</li>
          <li>Journey details (stations, date, train, class, quota)</li>
          <li>Passenger names and preferences</li>
          <li>
            Payment method preferences and optional saved card fields (name, number, expiry, CVV)
          </li>
          <li>Booking automation state and device identifier (UUID)</li>
          <li>Buy Me a Coffee email (if you link subscription access)</li>
        </ul>
        <p className="text-[var(--rt-text-muted)]">
          This data stays on your device unless you clear extension storage or uninstall the
          extension.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">
          Data sent to our servers
        </h2>
        <p className="text-[var(--rt-text-muted)]">
          If you use subscription features, the extension contacts:
        </p>
        <p>
          <code className="rounded bg-[var(--rt-surface-muted)] px-2 py-1 text-sm">
            https://api.railticket.tool.mridev.in
          </code>
        </p>
        <p className="text-[var(--rt-text-muted)]">We may send:</p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--rt-text-muted)]">
          <li>Anonymous <strong>device ID</strong> (UUID generated in the extension)</li>
          <li>
            <strong>Email address</strong> you enter on the Access tab (to link your Buy Me a
            Coffee purchase)
          </li>
          <li>
            <strong>Usage keys</strong> when a booking session reaches the IRCTC payment page
            (for token-based plans)
          </li>
        </ul>
        <p className="text-[var(--rt-text-muted)]">
          We <strong>do not</strong> send your IRCTC password, passenger list, or saved card CVV
          to this API.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">
          Third-party services
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--rt-text-muted)]">
          <li>
            <strong>IRCTC</strong> (<code>www.irctc.co.in</code>) — you log in and book directly
            on their website.
          </li>
          <li>
            <strong>Payment gateways</strong> (e.g. IRCTC iPay, PhonePe) — when you pay, those
            sites handle payment under their policies.
          </li>
          <li>
            <strong>Buy Me a Coffee</strong> — if you purchase access, payment and membership are
            handled by Buy Me a Coffee.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">Data retention</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--rt-text-muted)]">
          <li>
            <strong>Local storage:</strong> until you remove it or uninstall the extension.
          </li>
          <li>
            <strong>Access API:</strong> device registration and license records are kept while
            your subscription is active and as needed for support and fraud prevention. Contact
            us to request deletion of your email/license record.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">Security</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--rt-text-muted)]">
          <li>Use a strong IRCTC password and do not share your device.</li>
          <li>
            Card details saved in the extension are stored locally in your browser profile; we
            recommend using IRCTC&apos;s own saved payment options when possible.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">Children</h2>
        <p className="text-[var(--rt-text-muted)]">
          This extension is not directed at children under 13.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">Changes</h2>
        <p className="text-[var(--rt-text-muted)]">
          We may update this policy. The &quot;Last updated&quot; date will change. Continued use
          after updates means you accept the revised policy.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--rt-primary)]">Your choices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--rt-text-muted)]">
          <li>
            Do not enter credentials or card data in the extension if you prefer manual entry on
            IRCTC only.
          </li>
          <li>Uninstall the extension to remove local data.</li>
          <li>Contact us to request deletion of server-side access records tied to your email.</li>
        </ul>

        <p className="mt-10">
          <Link href="/" className="text-[var(--rt-primary)] hover:underline">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
