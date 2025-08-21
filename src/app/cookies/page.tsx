import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal-page-layout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Soundmind uses cookies and similar technologies to improve your experience and protect your privacy.',
};

const sections = [
  { id: 'what-are-cookies', title: 'What Are Cookies' },
  { id: 'how-we-use-cookies', title: 'How We Use Cookies' },
  { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
  { id: 'third-party-cookies', title: 'Third-Party Cookies' },
  { id: 'managing-cookies', title: 'Managing Your Cookie Preferences' },
  { id: 'cookie-consent', title: 'Cookie Consent' },
  { id: 'updates-to-policy', title: 'Updates to This Policy' },
  { id: 'contact-us', title: 'Contact Us' },
];

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="January 15, 2024"
      sections={sections}
    >
      <div className="space-y-12">
        <div>
          <p className="text-xl leading-relaxed mb-6" style={{ color: '#666666' }}>
            This Cookie Policy explains how Soundmind uses cookies and similar technologies 
            to recognize you when you visit our website and use our services.
          </p>
        </div>

        <section id="what-are-cookies">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            1. What Are Cookies
          </h2>
          
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
            They are widely used by website owners to make their websites work more efficiently and to provide reporting information.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Types of Data Storage Technologies
          </h3>
          <ul className="mb-6 space-y-2">
            <li><strong>Cookies:</strong> Small text files stored by your browser</li>
            <li><strong>Local Storage:</strong> Larger amounts of data stored locally in your browser</li>
            <li><strong>Session Storage:</strong> Temporary data storage that expires when you close your browser</li>
            <li><strong>Web Beacons:</strong> Small graphic images used to track user behavior</li>
          </ul>
        </section>

        <section id="how-we-use-cookies">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            2. How We Use Cookies
          </h2>
          
          <p className="mb-4">We use cookies for several important purposes:</p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Essential Website Functionality
          </h3>
          <ul className="mb-6 space-y-2">
            <li>Maintaining your login session</li>
            <li>Remembering your preferences and settings</li>
            <li>Ensuring website security and preventing fraud</li>
            <li>Enabling core website features to function properly</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Performance and Analytics
          </h3>
          <ul className="mb-6 space-y-2">
            <li>Understanding how you use our website</li>
            <li>Analyzing website performance and identifying issues</li>
            <li>Measuring the effectiveness of our features</li>
            <li>Improving user experience based on usage patterns</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Personalization
          </h3>
          <ul className="mb-6 space-y-2">
            <li>Customizing content based on your preferences</li>
            <li>Providing personalized recommendations</li>
            <li>Remembering your accessibility settings</li>
            <li>Tailoring the interface to your needs</li>
          </ul>
        </section>

        <section id="types-of-cookies">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            3. Types of Cookies We Use
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4" style={{ borderColor: '#9DB5A1' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2D2D2D' }}>
                🔒 Strictly Necessary Cookies
              </h4>
              <p className="text-sm mb-3">These cookies are essential for our website to function properly.</p>
              <ul className="text-sm space-y-1">
                <li>• Authentication tokens</li>
                <li>• Security measures</li>
                <li>• Basic website functionality</li>
                <li>• Load balancing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4" style={{ borderColor: '#E6A85C' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2D2D2D' }}>
                📊 Performance Cookies
              </h4>
              <p className="text-sm mb-3">These help us understand how visitors interact with our website.</p>
              <ul className="text-sm space-y-1">
                <li>• Page load times</li>
                <li>• Popular content</li>
                <li>• Error tracking</li>
                <li>• Usage analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border-l-4" style={{ borderColor: '#D4A5A5' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2D2D2D' }}>
                🎯 Functional Cookies
              </h4>
              <p className="text-sm mb-3">These enable enhanced functionality and personalization.</p>
              <ul className="text-sm space-y-1">
                <li>• User preferences</li>
                <li>• Language settings</li>
                <li>• Theme choices</li>
                <li>• Accessibility options</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-l-4" style={{ borderColor: '#C4755B' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#2D2D2D' }}>
                📈 Analytics Cookies
              </h4>
              <p className="text-sm mb-3">These help us improve our services based on user behavior.</p>
              <ul className="text-sm space-y-1">
                <li>• Google Analytics</li>
                <li>• User journey mapping</li>
                <li>• Feature usage tracking</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="third-party-cookies">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            4. Third-Party Cookies
          </h2>
          
          <p className="mb-4">
            We work with trusted third-party services that may place cookies on your device. 
            These partners help us provide better services and understand our users' needs.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Our Third-Party Partners
          </h3>
          
          <div className="space-y-4 mb-6">
            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>Google Analytics</h4>
              <p className="text-sm mb-2" style={{ color: '#666666' }}>
                Helps us understand website usage and improve user experience.
              </p>
              <p className="text-xs">
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#C4755B' }}>
                  Google Privacy Policy
                </a>
              </p>
            </div>

            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>Vercel Analytics</h4>
              <p className="text-sm mb-2" style={{ color: '#666666' }}>
                Provides website performance monitoring and optimization insights.
              </p>
              <p className="text-xs">
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#C4755B' }}>
                  Vercel Privacy Policy
                </a>
              </p>
            </div>

            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>ConvertKit</h4>
              <p className="text-sm mb-2" style={{ color: '#666666' }}>
                Manages our email newsletter and communication preferences.
              </p>
              <p className="text-xs">
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://convertkit.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#C4755B' }}>
                  ConvertKit Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="managing-cookies">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            5. Managing Your Cookie Preferences
          </h2>
          
          <p className="mb-4">
            You have several options for managing cookies and controlling your privacy:
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Browser Settings
          </h3>
          <p className="mb-4">Most browsers allow you to:</p>
          <ul className="mb-6 space-y-2">
            <li>View and delete existing cookies</li>
            <li>Block all cookies or cookies from specific websites</li>
            <li>Set preferences for cookie acceptance</li>
            <li>Be notified when cookies are being set</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Browser-Specific Instructions
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2">Google Chrome</h4>
              <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
            </div>
            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
              <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
            </div>
            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2">Safari</h4>
              <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
            </div>
            <div className="border rounded-lg p-4" style={{ borderColor: 'rgba(196, 117, 91, 0.2)' }}>
              <h4 className="font-semibold mb-2">Microsoft Edge</h4>
              <p className="text-sm">Settings → Cookies and site permissions → Manage cookies</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-6 border-l-4" style={{ borderColor: '#E6A85C' }}>
            <h4 className="font-semibold mb-2" style={{ color: '#2D2D2D' }}>Important Note</h4>
            <p>Disabling certain cookies may affect website functionality. Essential cookies cannot be disabled as they are necessary for the website to function properly.</p>
          </div>
        </section>

        <section id="cookie-consent">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            6. Cookie Consent
          </h2>
          
          <p className="mb-4">
            When you first visit our website, we'll ask for your consent to use non-essential cookies. 
            You can change your preferences at any time using our cookie consent manager.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#C4755B' }}>
            Your Consent Options
          </h3>
          <ul className="mb-6 space-y-2">
            <li><strong>Accept All:</strong> Allow all cookies for the best experience</li>
            <li><strong>Manage Preferences:</strong> Choose which types of cookies to allow</li>
            <li><strong>Reject Non-Essential:</strong> Only allow necessary cookies</li>
          </ul>

          <p className="mb-6">
            You can update your cookie preferences at any time by clicking the "Cookie Settings" 
            link in our website footer or contacting us directly.
          </p>
        </section>

        <section id="updates-to-policy">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            7. Updates to This Policy
          </h2>
          
          <p className="mb-6">
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons. When we make changes, we will 
            update the "Last updated" date at the top of this policy.
          </p>
        </section>

        <section id="contact-us">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            8. Contact Us
          </h2>
          
          <p className="mb-4">If you have questions about our use of cookies, please contact us:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>privacy@getsoundmind.com</a></p>
            <p className="mb-2"><strong>Privacy Team:</strong> <a href="mailto:legal@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>legal@getsoundmind.com</a></p>
            <p className="mb-2"><strong>Address:</strong> Soundmind, Inc., 123 Innovation Drive, San Francisco, CA 94102</p>
            <p><strong>Support:</strong> <a href="mailto:support@getsoundmind.com" className="underline" style={{ color: '#C4755B' }}>support@getsoundmind.com</a></p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}