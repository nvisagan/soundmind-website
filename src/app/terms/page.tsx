import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal-page-layout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Soundmind voice analysis platform. Understanding your rights and responsibilities.',
};

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'description', title: 'Service Description' },
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'user-accounts', title: 'User Accounts' },
  { id: 'acceptable-use', title: 'Acceptable Use' },
  { id: 'voice-data-terms', title: 'Voice Data Terms' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'limitation-liability', title: 'Limitation of Liability' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact-information', title: 'Contact Information' },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 15, 2024"
      sections={sections}
    >
      <div className="space-y-12">
        <div>
          <p className="text-xl leading-relaxed mb-6" style={{ color: '#666666' }}>
            These Terms of Service govern your use of Soundmind&apos;s voice analysis platform. 
            By using our services, you agree to be bound by these terms.
          </p>
        </div>

        <section id="acceptance">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            1. Acceptance of Terms
          </h2>
          
          <p className="mb-4">
            By accessing or using Soundmind (&quot;the Service&quot;), you agree to be bound by these Terms of Service 
            and our Privacy Policy. If you do not agree to these terms, please do not use our Service.
          </p>

          <p className="mb-6">
            We may modify these terms at any time. Continued use of the Service after changes are posted 
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section id="description">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            2. Service Description
          </h2>
          
          <p className="mb-4">
            Soundmind provides AI-powered voice analysis technology that helps users understand emotional 
            patterns and mental wellness insights through voice data processing.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Our Services Include:
          </h3>
          <ul className="mb-6 space-y-2">
            <li>Voice pattern analysis and emotional insights</li>
            <li>Mood tracking and wellness monitoring</li>
            <li>Personalized recommendations and feedback</li>
            <li>Data visualization and progress tracking</li>
            <li>Educational content about mental wellness</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 border-l-4" style={{ borderColor: '#9DB5A1' }}>
            <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>Important Medical Disclaimer</h4>
            <p>Soundmind is not a medical device or diagnostic tool. Our insights are for informational purposes only and should not replace professional medical advice, diagnosis, or treatment.</p>
          </div>
        </section>

        <section id="eligibility">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            3. Eligibility
          </h2>
          
          <p className="mb-4">You must meet the following requirements to use Soundmind:</p>
          <ul className="mb-6 space-y-2">
            <li>Be at least 13 years of age (or the minimum age in your jurisdiction)</li>
            <li>Have the legal capacity to enter into binding agreements</li>
            <li>Provide accurate and complete registration information</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <p className="mb-6">
            If you are under 18, you must have parental or guardian consent to use our services.
          </p>
        </section>

        <section id="user-accounts">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            4. User Accounts
          </h2>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Account Registration
          </h3>
          <p className="mb-4">
            You may need to create an account to access certain features. You are responsible for:
          </p>
          <ul className="mb-6 space-y-2">
            <li>Providing accurate and current information</li>
            <li>Maintaining the security of your account credentials</li>
            <li>Notifying us immediately of any unauthorized access</li>
            <li>All activities that occur under your account</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Account Security
          </h3>
          <p className="mb-6">
            We recommend using strong, unique passwords and enabling two-factor authentication 
            where available. You are solely responsible for maintaining account security.
          </p>
        </section>

        <section id="acceptable-use">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            5. Acceptable Use
          </h2>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Permitted Uses
          </h3>
          <p className="mb-4">You may use Soundmind for:</p>
          <ul className="mb-6 space-y-2">
            <li>Personal mental wellness monitoring and insights</li>
            <li>Educational purposes about emotional patterns</li>
            <li>Research in compliance with applicable laws</li>
            <li>Any other lawful purpose consistent with our service design</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Prohibited Uses
          </h3>
          <p className="mb-4">You may not use Soundmind to:</p>
          <ul className="mb-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Upload malicious content or attempt to harm our systems</li>
            <li>Use the service for unauthorized commercial purposes</li>
            <li>Reverse engineer or attempt to extract our algorithms</li>
            <li>Submit false or misleading information</li>
            <li>Interfere with other users&apos; access to the service</li>
          </ul>
        </section>

        <section id="voice-data-terms">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            6. Voice Data Terms
          </h2>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Your Voice Data Rights
          </h3>
          <p className="mb-4">
            You retain all rights to your voice recordings and data. By using our service, you grant us 
            a limited license to process your voice data solely for providing our services.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Consent and Control
          </h3>
          <ul className="mb-6 space-y-2">
            <li>Voice analysis requires your explicit consent for each session</li>
            <li>You can delete your voice data at any time through account settings</li>
            <li>You control whether insights are saved or discarded</li>
            <li>Local processing means most data never leaves your device</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Data Processing Limitations
          </h3>
          <p className="mb-6">
            We use your voice data exclusively for providing emotional insights and improving our AI models. 
            We do not use voice data for advertising, identity verification, or any purposes beyond our stated services.
          </p>
        </section>

        <section id="intellectual-property">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            7. Intellectual Property
          </h2>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Our Property
          </h3>
          <p className="mb-4">
            Soundmind and its technology, including but not limited to algorithms, software, designs, 
            and content, are protected by intellectual property laws. You may not:
          </p>
          <ul className="mb-6 space-y-2">
            <li>Copy, modify, or distribute our software or algorithms</li>
            <li>Create derivative works based on our technology</li>
            <li>Use our trademarks without permission</li>
            <li>Attempt to reverse engineer our services</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Your Content
          </h3>
          <p className="mb-6">
            You retain ownership of any content you provide to us, including voice recordings. 
            You grant us only the rights necessary to provide our services as described in our Privacy Policy.
          </p>
        </section>

        <section id="disclaimers">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            8. Disclaimers
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg mb-6 border-l-4" style={{ borderColor: '#D4A5A5' }}>
            <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>Medical and Health Disclaimers</h4>
            <ul className="space-y-2">
              <li>• Soundmind is not a medical device and does not provide medical advice</li>
              <li>• Our insights are for informational and educational purposes only</li>
              <li>• Always consult qualified healthcare professionals for medical concerns</li>
              <li>• Do not use our service for emergency situations or crisis intervention</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Service Disclaimers
          </h3>
          <p className="mb-4">Our service is provided &quot;as is&quot; without warranties of any kind. We disclaim:</p>
          <ul className="mb-6 space-y-2">
            <li>Guarantees of accuracy, reliability, or completeness</li>
            <li>Warranties of merchantability or fitness for a particular purpose</li>
            <li>Promises of uninterrupted or error-free service</li>
            <li>Liability for third-party content or services</li>
          </ul>
        </section>

        <section id="limitation-liability">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            9. Limitation of Liability
          </h2>
          
          <p className="mb-4">
            To the maximum extent permitted by law, Soundmind shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including but not limited to:
          </p>
          <ul className="mb-6 space-y-2">
            <li>Loss of profits, data, or business opportunities</li>
            <li>Personal injury or property damage</li>
            <li>Third-party claims or actions</li>
            <li>Service interruptions or technical failures</li>
          </ul>

          <p className="mb-6">
            Our total liability for any claims related to our service shall not exceed the amount 
            you paid us in the twelve months preceding the claim, or $100, whichever is greater.
          </p>
        </section>

        <section id="termination">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            10. Termination
          </h2>
          
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Your Right to Terminate
          </h3>
          <p className="mb-4">
            You may terminate your account at any time by contacting us or using account deletion 
            features in our application.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Our Right to Terminate
          </h3>
          <p className="mb-4">We may suspend or terminate your access if:</p>
          <ul className="mb-6 space-y-2">
            <li>You violate these Terms of Service</li>
            <li>Your use poses security or legal risks</li>
            <li>You engage in fraudulent or harmful activities</li>
            <li>We discontinue the service (with reasonable notice)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Effect of Termination
          </h3>
          <p className="mb-6">
            Upon termination, your access will cease, and we will delete your personal data 
            in accordance with our Privacy Policy. Some provisions of these terms will survive termination.
          </p>
        </section>

        <section id="governing-law">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            11. Governing Law
          </h2>
          
          <p className="mb-4">
            These Terms of Service are governed by the laws of the State of California, United States, 
            without regard to conflict of law principles.
          </p>

          <p className="mb-6">
            Any disputes arising from these terms or your use of our service shall be resolved through 
            binding arbitration in San Francisco, California, except for claims that may be brought in small claims court.
          </p>
        </section>

        <section id="contact-information">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            12. Contact Information
          </h2>
          
          <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>legal@getsoundmind.com</a></p>
            <p className="mb-2"><strong>Support:</strong> <a href="mailto:support@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>support@getsoundmind.com</a></p>
            <p className="mb-2"><strong>Address:</strong> Soundmind, Inc., 123 Innovation Drive, San Francisco, CA 94102</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}