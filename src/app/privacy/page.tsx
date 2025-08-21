import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal-page-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Soundmind protects your privacy and handles your personal data. Our commitment to transparency and data security.',
};

const sections = [
  { id: 'information-collection', title: 'Information We Collect' },
  { id: 'use-of-information', title: 'How We Use Your Information' },
  { id: 'voice-data', title: 'Voice Data Processing' },
  { id: 'data-sharing', title: 'Information Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'user-rights', title: 'Your Rights' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'international-transfers', title: 'International Data Transfers' },
  { id: 'children-privacy', title: 'Children\'s Privacy' },
  { id: 'policy-changes', title: 'Changes to This Policy' },
  { id: 'contact-us', title: 'Contact Us' },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 15, 2024"
      sections={sections}
    >
      <div className="space-y-12">
        <div>
          <p className="text-xl leading-relaxed mb-6" style={{ color: '#666666' }}>
            At Soundmind, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our voice analysis platform.
          </p>
        </div>

        <section id="information-collection">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            1. Information We Collect
          </h2>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Personal Information
          </h3>
          <p className="mb-4">When you use Soundmind, we may collect:</p>
          <ul className="mb-6 space-y-2">
            <li>Email address for account creation and communication</li>
            <li>Name and profile information you choose to provide</li>
            <li>Account preferences and settings</li>
            <li>Communication history with our support team</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Voice Data
          </h3>
          <p className="mb-4">
            Our core service involves analyzing voice patterns to provide emotional insights. 
            We collect and process voice recordings that you voluntarily submit for analysis.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Usage Information
          </h3>
          <ul className="mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>Usage patterns and feature interactions</li>
            <li>Log data including IP addresses and timestamps</li>
            <li>Analytics data to improve our services</li>
          </ul>
        </section>

        <section id="use-of-information">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            2. How We Use Your Information
          </h2>
          
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Provide our services:</strong> Process voice data to deliver emotional insights and mood tracking</li>
            <li><strong>Improve our platform:</strong> Enhance accuracy and develop new features</li>
            <li><strong>Communicate with you:</strong> Send important updates, notifications, and support responses</li>
            <li><strong>Ensure security:</strong> Protect against fraud and unauthorized access</li>
            <li><strong>Comply with legal obligations:</strong> Meet regulatory requirements and legal requests</li>
          </ul>
        </section>

        <section id="voice-data">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            3. Voice Data Processing
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-6 border-l-4" style={{ borderColor: '#E6A85C' }}>
            <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>Important: Your Voice Data Privacy</h4>
            <p>Your voice recordings are processed locally on your device whenever possible. When cloud processing is necessary, data is encrypted in transit and at rest.</p>
          </div>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Local Processing
          </h3>
          <p className="mb-4">
            Most voice analysis occurs directly on your device using advanced AI models. 
            This means your voice data typically never leaves your device.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Cloud Processing
          </h3>
          <p className="mb-4">
            When cloud processing is required for advanced features:
          </p>
          <ul className="mb-6 space-y-2">
            <li>Voice data is encrypted using AES-256 encryption</li>
            <li>Data is processed immediately and not stored long-term</li>
            <li>All processing occurs in secure, HIPAA-compliant environments</li>
            <li>Voice files are automatically deleted after analysis completion</li>
          </ul>
        </section>

        <section id="data-sharing">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            4. Information Sharing
          </h2>
          
          <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Service Providers
          </h3>
          <p className="mb-4">
            We work with trusted third-party providers who help us operate our platform. 
            These partners are contractually bound to protect your data and use it only for specified purposes.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Legal Requirements
          </h3>
          <p className="mb-4">
            We may disclose information when required by law, court order, or to protect our rights and safety.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Business Transfers
          </h3>
          <p className="mb-6">
            In the event of a merger, acquisition, or asset sale, user information may be transferred. 
            We will provide notice before your data becomes subject to a different privacy policy.
          </p>
        </section>

        <section id="data-security">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            5. Data Security
          </h2>
          
          <p className="mb-4">We implement industry-standard security measures:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
            <li><strong>Access Controls:</strong> Strict authentication and authorization protocols</li>
            <li><strong>Regular Audits:</strong> Ongoing security assessments and penetration testing</li>
            <li><strong>Employee Training:</strong> Comprehensive privacy and security training for all staff</li>
            <li><strong>Incident Response:</strong> Rapid response procedures for any security events</li>
          </ul>
        </section>

        <section id="user-rights">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            6. Your Rights
          </h2>
          
          <p className="mb-4">You have the following rights regarding your personal data:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Objection:</strong> Object to certain types of processing</li>
            <li><strong>Restriction:</strong> Request limitation of processing activities</li>
          </ul>
          
          <p className="mb-6">
            To exercise these rights, please contact us at <a href="mailto:privacy@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>privacy@getsoundmind.com</a>.
          </p>
        </section>

        <section id="data-retention">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            7. Data Retention
          </h2>
          
          <p className="mb-4">We retain personal data only as long as necessary:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Account Data:</strong> Retained while your account is active</li>
            <li><strong>Voice Data:</strong> Processed immediately and deleted unless you choose to save insights</li>
            <li><strong>Usage Data:</strong> Retained for up to 2 years for analytics purposes</li>
            <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
          </ul>
        </section>

        <section id="international-transfers">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            8. International Data Transfers
          </h2>
          
          <p className="mb-6">
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your data, including Standard Contractual Clauses 
            and adequacy decisions where applicable.
          </p>
        </section>

        <section id="children-privacy">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            9. Children&apos;s Privacy
          </h2>
          
          <p className="mb-6">
            Soundmind is not intended for children under 13 years of age. We do not knowingly collect 
            personal information from children under 13. If you believe we have collected information 
            from a child under 13, please contact us immediately.
          </p>
        </section>

        <section id="policy-changes">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            10. Changes to This Policy
          </h2>
          
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material 
            changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. 
            Continued use of our services after changes become effective constitutes acceptance of the updated policy.
          </p>
        </section>

        <section id="contact-us">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            11. Contact Us
          </h2>
          
          <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>privacy@getsoundmind.com</a></p>
            <p className="mb-2"><strong>Legal Team:</strong> <a href="mailto:legal@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>legal@getsoundmind.com</a></p>
            <p className="mb-2"><strong>Address:</strong> Soundmind, Inc., 123 Innovation Drive, San Francisco, CA 94102</p>
            <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>dpo@getsoundmind.com</a></p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}