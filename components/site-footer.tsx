import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--rt-border)] bg-[var(--rt-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm leading-relaxed text-[var(--rt-text-muted)]">
          {site.name} is an independent tool and is{" "}
          <strong className="font-semibold text-[var(--rt-primary)]">
            not affiliated with IRCTC or Indian Railways
          </strong>
          . We do not guarantee ticket availability or booking success.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy-policy" className="text-[var(--rt-primary)] hover:underline">
            Privacy Policy
          </Link>
          <a
            href={site.bmcUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--rt-primary)] hover:underline"
          >
            Buy Me a Coffee
          </a>
          <Link href="/thank-you" className="text-[var(--rt-primary)] hover:underline">
            After install
          </Link>
        </div>
        <p className="mt-6 text-xs text-[var(--rt-text-muted)]">
          © {new Date().getFullYear()} MRITools
        </p>
      </div>
    </footer>
  );
}
