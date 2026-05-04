import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto py-4 px-4 mb-20 md:mb-0" role="contentinfo">
      <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Grocery Helper. For planning purposes only.</p>
        <nav aria-label="Legal links">
          <ul className="flex items-center gap-4" role="list">
            <li>
              <Link
                href="/cookie-policy"
                className="underline underline-offset-4 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
