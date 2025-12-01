import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | thecommunication.link",
  description: "Terms of Use for thecommunication.link",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Use — thecommunication.link</h1>
          <p className="text-slate-600 mb-8">
            <em>Last Updated: 26 November 2025</em>
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Welcome to <strong>thecommunication.link</strong> ("we," "our," "us").
            <br />
            By accessing or using our website at <strong>https://thecommunication.link</strong> ("Website"), you agree
            to these Terms of Use ("Terms"). If you do not agree, discontinue use immediately.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            These Terms govern your use of the Website only.
            <br />
            Any separate consulting agreement governs paid services.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Use of the Website</h2>
          <p className="text-slate-700 leading-relaxed mb-4">You may use the Website for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Learning about our services</li>
            <li>Contacting us</li>
            <li>Requesting consultations</li>
            <li>Viewing content and resources</li>
          </ul>

          <p className="text-slate-700 leading-relaxed mb-4">
            You agree <strong>not</strong> to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Engage in unlawful or harmful activity</li>
            <li>Interfere with website functionality</li>
            <li>Upload malicious code or automated tools</li>
            <li>Scrape or copy content without permission</li>
            <li>Misrepresent yourself or submit false information</li>
          </ul>

          <p className="text-slate-700 leading-relaxed mb-8">We may restrict access at our discretion.</p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. No Professional Advice</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Website content is for <strong>general informational purposes only</strong>.<br />
            Nothing on the Website constitutes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Legal advice</li>
            <li>Financial advice</li>
            <li>Tax advice</li>
            <li>Investment advice</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Consulting deliverables, if provided, are governed by individual agreements.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All Website content—including text, design, graphics, and layout—is owned by or licensed to{" "}
            <strong>thecommunication.link</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">You may not:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Copy, distribute, or modify Website content</li>
            <li>Use branding without permission</li>
            <li>Claim authorship or ownership of our material</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            You may publicly link to the Website in a fair, non-misleading way.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. User Submissions</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you contact us or submit information, you agree that:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Information provided is accurate</li>
            <li>You are not submitting sensitive or confidential data unless requested</li>
            <li>Communications may be retained for operational purposes</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Personal information is handled according to our Privacy Policy.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Third-Party Links</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our Website may link to external sites.
            <br />
            We do not control those sites and are not responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Their content</li>
            <li>Their privacy practices</li>
            <li>Loss or damage resulting from their use</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">Use external links at your own risk.</p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Website is provided <strong>"as is" and "as available."</strong>
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">We make no guarantees regarding:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Accuracy or completeness of content</li>
            <li>Error-free or uninterrupted functionality</li>
            <li>Absence of viruses or harmful components</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">Use the Website at your own risk.</p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            To the fullest extent permitted by law, thecommunication.link is <strong>not liable</strong> for any damages
            arising from:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Use or inability to use the Website</li>
            <li>Inaccurate or outdated content</li>
            <li>Loss of data</li>
            <li>Third-party actions</li>
            <li>Technical issues</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            This includes direct, indirect, incidental, consequential, and punitive damages.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Indemnification</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            You agree to indemnify thecommunication.link against claims, losses, damages, liabilities, or expenses
            resulting from:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
            <li>Your use of the Website</li>
            <li>Violation of these Terms</li>
            <li>Violation of applicable law</li>
            <li>Content or information you submit</li>
          </ul>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Changes to the Terms</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We may update these Terms at any time.
            <br />
            Updates take effect immediately when posted.
            <br />
            Continued use of the Website constitutes acceptance of revised Terms.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Governing Law</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These Terms are governed by the laws of <strong>[Insert Jurisdiction]</strong>, without regard to
            conflict-of-law rules.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Any disputes arising from these Terms shall be resolved in the courts of{" "}
            <strong>[Insert Jurisdiction]</strong>.
          </p>

          <hr className="my-8 border-slate-200" />

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Contact Us</h2>
          <p className="text-slate-700 leading-relaxed mb-4">For questions about these Terms:</p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Email:</strong> hello@thecommunication.link
            <br />
            <strong>Website:</strong> https://thecommunication.link
          </p>
        </div>
      </div>
    </div>
  )
}
