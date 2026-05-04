export default function CookiePolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8" id="main-content">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-serif">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: May 4, 2026</p>
      </header>

      <section aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="text-xl font-semibold text-foreground mb-3">What Are Cookies?</h2>
        <p className="text-foreground leading-relaxed">
          Cookies are small data files placed on your device when you visit a website. Grocery Helper uses
          browser storage (a technology similar to cookies) to save your preferences and grocery list data
          locally on your device. No data is transmitted to any external server.
        </p>
      </section>

      <section aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-semibold text-foreground mb-3">How We Use Browser Storage</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Grocery Helper uses <strong>localStorage</strong>, a form of browser-based storage, solely to keep
          the app functional across page refreshes. We do not use third-party tracking cookies, advertising
          cookies, or analytics cookies.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm" role="table">
            <caption className="sr-only">Storage items used by Grocery Helper</caption>
            <thead className="bg-secondary">
              <tr>
                <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">Storage Key</th>
                <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">Purpose</th>
                <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-mono text-xs text-foreground">grocery-helper-storage</td>
                <td className="px-4 py-3 text-foreground">Stores your budget, grocery list, and trip history</td>
                <td className="px-4 py-3 text-foreground">Functional (Essential)</td>
              </tr>
              <tr className="border-t border-border bg-secondary/30">
                <td className="px-4 py-3 font-mono text-xs text-foreground">cookie-consent</td>
                <td className="px-4 py-3 text-foreground">Records that you have acknowledged this cookie policy</td>
                <td className="px-4 py-3 text-foreground">Functional (Essential)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="essential-heading">
        <h2 id="essential-heading" className="text-xl font-semibold text-foreground mb-3">Essential Storage Only</h2>
        <p className="text-foreground leading-relaxed">
          All storage used by Grocery Helper is strictly necessary to provide the service. Because we use
          only essential functional storage and collect no personal data, we are not required to obtain
          opt-in consent under most privacy regulations. However, we inform you of this usage in the
          interest of transparency.
        </p>
      </section>

      <section aria-labelledby="manage-heading">
        <h2 id="manage-heading" className="text-xl font-semibold text-foreground mb-3">Managing Your Storage</h2>
        <p className="text-foreground leading-relaxed mb-3">
          You can clear all locally stored data at any time by clearing your browser's site data for this
          application. Instructions vary by browser:
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground" role="list">
          <li><strong>Chrome / Edge:</strong> Settings &rarr; Privacy and security &rarr; Clear browsing data</li>
          <li><strong>Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data &rarr; Clear Data</li>
          <li><strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-3">
          Clearing site data will remove your grocery list, budget settings, and trip history from this device.
        </p>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-semibold text-foreground mb-3">Contact</h2>
        <p className="text-foreground leading-relaxed">
          If you have questions about this Cookie Policy, please refer to our{" "}
          <a href="/privacy" className="text-primary underline underline-offset-4 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Privacy Policy
          </a>{" "}
          or contact us through the app's Info page.
        </p>
      </section>
    </main>
  );
}
