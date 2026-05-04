export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8" id="main-content">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-serif">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: May 4, 2026</p>
      </header>

      <section aria-labelledby="acceptance-heading">
        <h2 id="acceptance-heading" className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
        <p className="text-foreground leading-relaxed">
          By accessing or using Grocery Helper, you agree to be bound by these Terms &amp; Conditions. If
          you do not agree with any part of these terms, please discontinue use of the application.
        </p>
      </section>

      <section aria-labelledby="description-heading">
        <h2 id="description-heading" className="text-xl font-semibold text-foreground mb-3">Description of Service</h2>
        <p className="text-foreground leading-relaxed">
          Grocery Helper is a free, browser-based grocery budget planning tool intended to assist shoppers
          at the Iowa City Hy-Vee location. The application allows users to set a trip budget, browse a
          sample product catalog, build a grocery list with estimated costs, and review past trip history.
          All functionality operates locally in your browser with no account or internet connection required
          after the initial page load.
        </p>
      </section>

      <section aria-labelledby="disclaimer-heading">
        <h2 id="disclaimer-heading" className="text-xl font-semibold text-foreground mb-3">Pricing Disclaimer</h2>
        <p className="text-foreground leading-relaxed">
          Product prices shown in Grocery Helper are estimates based on publicly available information and
          are intended for planning purposes only. Actual prices at Hy-Vee may differ due to sales,
          promotions, seasonal changes, or regional pricing. Grocery Helper is not affiliated with,
          endorsed by, or sponsored by Hy-Vee, Inc. Always verify prices at the store before making
          purchasing decisions.
        </p>
      </section>

      <section aria-labelledby="tax-heading">
        <h2 id="tax-heading" className="text-xl font-semibold text-foreground mb-3">Tax Estimation</h2>
        <p className="text-foreground leading-relaxed">
          Tax estimates provided by the application are approximations based on Iowa City general sales
          tax rates and common Iowa grocery tax exemptions. They are provided for budgeting guidance only
          and should not be relied upon as tax advice. Actual tax charged at the point of sale may vary.
        </p>
      </section>

      <section aria-labelledby="use-heading">
        <h2 id="use-heading" className="text-xl font-semibold text-foreground mb-3">Permitted Use</h2>
        <p className="text-foreground leading-relaxed mb-3">You may use Grocery Helper for personal, non-commercial grocery planning. You agree not to:</p>
        <ul className="list-disc list-inside space-y-1 text-foreground" role="list">
          <li>Attempt to reverse-engineer, copy, or redistribute the application</li>
          <li>Use the application for any unlawful purpose</li>
          <li>Attempt to interfere with the application's normal operation</li>
        </ul>
      </section>

      <section aria-labelledby="data-heading">
        <h2 id="data-heading" className="text-xl font-semibold text-foreground mb-3">User Data &amp; Responsibility</h2>
        <p className="text-foreground leading-relaxed">
          All data entered into Grocery Helper is stored solely in your browser's local storage. You are
          responsible for the security of your own device. We are not responsible for data loss resulting
          from clearing browser data, switching devices, or browser updates.
        </p>
      </section>

      <section aria-labelledby="warranty-heading">
        <h2 id="warranty-heading" className="text-xl font-semibold text-foreground mb-3">Disclaimer of Warranties</h2>
        <p className="text-foreground leading-relaxed">
          Grocery Helper is provided "as is" without warranties of any kind, either express or implied,
          including but not limited to warranties of merchantability, fitness for a particular purpose,
          or non-infringement. We do not warrant that the application will be error-free, uninterrupted,
          or that price or tax information will be accurate or complete.
        </p>
      </section>

      <section aria-labelledby="liability-heading">
        <h2 id="liability-heading" className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
        <p className="text-foreground leading-relaxed">
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of Grocery Helper, including but not
          limited to budget overruns, incorrect price estimates, or data loss.
        </p>
      </section>

      <section aria-labelledby="changes-heading">
        <h2 id="changes-heading" className="text-xl font-semibold text-foreground mb-3">Changes to These Terms</h2>
        <p className="text-foreground leading-relaxed">
          We reserve the right to update these Terms &amp; Conditions at any time. Changes are effective
          immediately upon posting and will be reflected by the "Last updated" date above. Continued use
          of the application constitutes acceptance of the revised terms.
        </p>
      </section>

      <section aria-labelledby="governing-heading">
        <h2 id="governing-heading" className="text-xl font-semibold text-foreground mb-3">Governing Law</h2>
        <p className="text-foreground leading-relaxed">
          These Terms &amp; Conditions are governed by and construed in accordance with the laws of the
          State of Iowa, without regard to its conflict of law provisions.
        </p>
      </section>
    </main>
  );
}
