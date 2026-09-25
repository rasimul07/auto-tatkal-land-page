import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  const storeReady = site.chromeStoreUrl !== "#";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rt-border)] bg-[var(--rt-surface)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold text-[var(--rt-primary)]">
          <Image
            src="/icons/icon48.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="hidden sm:inline">{site.shortName}</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-[var(--rt-text-muted)]">
          <Link href="/" className="hover:text-[var(--rt-primary)]">
            Home
          </Link>
          <Link href="/privacy-policy" className="hover:text-[var(--rt-primary)]">
            Privacy
          </Link>
          <a
            href={site.chromeStoreUrl}
            className="rounded-full bg-[var(--rt-accent)] px-4 py-2 text-white hover:opacity-90"
            {...(storeReady ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {storeReady ? "Get extension" : "Coming soon"}
          </a>
        </nav>
      </div>
    </header>
  );
}
