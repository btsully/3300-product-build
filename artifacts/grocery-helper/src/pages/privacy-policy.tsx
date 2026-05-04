export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8" id="main-content">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-serif">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: May 4, 2026</p>
      </header>

      <section aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="text-xl font-semibold text-foreground mb-3">Overview</h2>
        <p className="text-foreground leading-relaxed">
          Grocery Helper is a budget-planning tool designed for Iowa City Hy-Vee shoppers. We are
          committed to protecting your privacy. This policy explains what information the application
          collects, how it is used, and your rights regarding that information.
        </p>
      </section>

      <section aria-labelledby="collect-heading">
        <h2 id="collect-heading" className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
        <p className="text-foreground leading-relaxed mb-3">
          Grocery Helper does <strong>not</strong> collect, transmit, or store any personal information on
          external servers. All data you enter — including your budget, grocery lists, and trip history —
          is stored exclusively in your browser's local storage on your own device.
        </p>
        <p className="text-foreground leading-relaxed">
          We do not collect:
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground mt-2" role="list">
          <li>Names, email addresses, or account credentials</li>
          <li>Payment or financial information</li>
          <li>Location data</li>
          <li>Device identifiers</li>
          <li>Usage analytics or behavioral data</li>
        </ul>
      </section>

      <section aria-labelledby="local-heading">
        <h2 id="local-heading" className="text-xl font-semibold text-foreground mb-3">Locally Stored Data</h2>
        <p className="text-foreground leading-relaxed">
          The following data is saved locally in your browser using localStorage. It never leaves your device:
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground mt-2" role="list">
          <li>Your trip budget amount and tax rate preference</li>
          <li>Your current grocery list (items and quantities)</li>
          <li>Your saved trip history (estimated vs. actual totals)</li>
          <li>Your cookie consent acknowledgement</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-3">
          You can delete all locally stored data at any time by clearing your browser's site data. See our{" "}
          <a href="/cookie-policy" className="text-primary underline underline-offset-4 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Cookie Policy
          </a>{" "}
          for instructions.
        </p>
      </section>

      <section aria-labelledby="third-heading">
        <h2 id="third-heading" className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
        <p className="text-foreground leading-relaxed">
          Grocery Helper does not integrate with any third-party analytics, advertising, or data-sharing
          services. No data is shared with Hy-Vee or any other retailer. The product catalog displayed
          in the app is illustrative and based on publicly available pricing information.
        </p>
      </section>

      <section aria-labelledby="children-heading">
        <h2 id="children-heading" className="text-xl font-semibold text-foreground mb-3">Children's Privacy</h2>
        <p className="text-foreground leading-relaxed">
          Grocery Helper is not directed at children under the age of 13. We do not knowingly collect any
          information from children. Because no personal information is collected by this application at all,
          there is no special risk to children's data.
        </p>
      </section>

      <section aria-labelledby="rights-heading">
        <h2 id="rights-heading" className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
        <p className="text-foreground leading-relaxed">
          Because all data is stored locally on your device and we collect no personal information, you
          have full control at all times. You may:
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground mt-2" role="list">
          <li>View your data by using the app's List and History pages</li>
          <li>Delete individual items or clear your entire trip history within the app</li>
          <li>Remove all data by clearing your browser's local storage for this site</li>
        </ul>
      </section>

      <section aria-labelledby="changes-heading">
        <h2 id="changes-heading" className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
        <p className="text-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be reflected by updating the
          "Last updated" date at the top of this page. Continued use of the application after changes
          constitutes acceptance of the revised policy.
        </p>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-semibold text-foreground mb-3">Contact</h2>
        <p className="text-foreground leading-relaxed">
          For questions about this Privacy Policy, visit the{" "}
          <a href="/info" className="text-primary underline underline-offset-4 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Info page
          </a>{" "}
          in the app.
        </p>
      </section>
    </main>
  );
}
