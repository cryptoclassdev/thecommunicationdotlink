import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | thecommunication.link",
  description:
    "Privacy Policy for thecommunication.link - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
        <p className="mb-12 text-sm text-gray-600">Last Updated: 26 November 2025</p>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains how <strong>thecommunication.link</strong> ("we," "our," "us") collects, uses,
            and protects personal information through our website, <strong>https://thecommunication.link</strong>{" "}
            ("Website").
          </p>

          <p className="text-gray-700 leading-relaxed">
            By accessing or using this Website, you agree to the practices described below. If you do not agree, please
            discontinue use of the Website.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This Policy should be read together with our Terms of Use. Where there is any inconsistency, the Terms of
            Use prevail.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">1. Information We Collect</h2>

          <p className="text-gray-700 leading-relaxed">We may collect two types of information:</p>

          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Information you knowingly provide</strong>
            </li>
            <li>
              <strong>Information collected automatically</strong>
            </li>
          </ol>

          <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-900">1.1 Information You Provide Directly</h3>

          <p className="text-gray-700 leading-relaxed">
            When you contact us, request a consultation, or subscribe to updates, we may collect:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Project details</li>
            <li>Any additional information you choose to provide</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            We do <strong>not</strong> request sensitive data such as passwords, wallet keys, or financial information.
          </p>

          <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-900">1.2 Information We Collect Automatically</h3>

          <p className="text-gray-700 leading-relaxed">
            We may automatically collect technical and analytical data, such as:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Pages viewed</li>
            <li>Referral source</li>
            <li>Usage duration</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            This information helps us improve our Website, monitor performance, and enhance user experience.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>

          <p className="text-gray-700 leading-relaxed">We may use collected information to:</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Respond to inquiries</li>
            <li>Provide consulting services</li>
            <li>Improve Website functionality and content</li>
            <li>Conduct analytics and research</li>
            <li>Send updates or newsletters (only if you opt-in)</li>
            <li>Communicate important information</li>
            <li>Comply with legal or security requirements</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            We <strong>do not</strong> sell or rent personal information.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">3. Cookies and Tracking Technologies</h2>

          <p className="text-gray-700 leading-relaxed">Our Website may use cookies to:</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Improve functionality</li>
            <li>Analyze usage</li>
            <li>Recognize returning visitors</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Cookies do not personally identify you unless you voluntarily provide identifying information.
          </p>

          <p className="text-gray-700 leading-relaxed">
            You may disable cookies through your browser settings, though some features may not function correctly.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">4. Third-Party Access to Information</h2>

          <p className="text-gray-700 leading-relaxed">We may work with trusted third-party providers for:</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Hosting</li>
            <li>Analytics</li>
            <li>Email and communication tools</li>
            <li>Customer support</li>
            <li>Content management</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            These providers are permitted to access personal data <strong>only as needed</strong> and must keep it
            confidential.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Visitor information is never sold. If our business is acquired or transferred, relevant data may be included
            as part of the business assets.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">5. External Links</h2>

          <p className="text-gray-700 leading-relaxed">
            Our Website may contain links to third-party websites. We are not responsible for their:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Content</li>
            <li>Security</li>
            <li>Privacy practices</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            We encourage you to review external privacy policies when visiting other sites.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">6. Opt-In / Opt-Out Options</h2>

          <p className="text-gray-700 leading-relaxed">
            You may opt-in to receive emails or updates. You may opt-out at any time by:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Clicking "unsubscribe" in an email</li>
            <li>
              Contacting us directly at <strong>hello@thecommunication.link</strong>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Upon request, we will delete or anonymize your personal information, subject to legal or operational
            limitations.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">7. Your Consent</h2>

          <p className="text-gray-700 leading-relaxed">
            By providing information, you consent to its collection and use as described in this Policy.
          </p>

          <p className="text-gray-700 leading-relaxed">
            You may withdraw consent anytime, subject to legal or contractual restrictions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We may collect or disclose information without consent only where required by law.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">8. GDPR Rights (If Applicable)</h2>

          <p className="text-gray-700 leading-relaxed">If you are located in the EEA, you may have the right to:</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Access your personal data</li>
            <li>Correct or update data</li>
            <li>Request deletion</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent</li>
            <li>File a complaint with a Data Protection Authority</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            To exercise these rights, contact us at <strong>hello@thecommunication.link</strong>.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">9. Changes to This Privacy Policy</h2>

          <p className="text-gray-700 leading-relaxed">
            We may update this Policy occasionally. Updates take effect immediately when posted on this page.
          </p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold text-gray-900">10. Contact Us</h2>

          <p className="text-gray-700 leading-relaxed">For questions about this Privacy Policy:</p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Email:</strong> hello@thecommunication.link
            <br />
            <strong>Website:</strong> https://thecommunication.link
          </p>
        </div>
      </div>
    </div>
  )
}
