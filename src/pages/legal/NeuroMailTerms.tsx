import LegalLayout, { Highlight } from './LegalLayout'
import type { LegalSection } from './LegalLayout'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>By downloading, installing, or using NeuroMail ("the Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not install or use the Software.</p>
        <p>These Terms constitute a legal agreement between you ("User") and UBE Labs ("we", "us", "our"), the developer of NeuroMail.</p>
      </>
    ),
  },
  {
    id: 'description',
    title: 'Description of Service',
    content: (
      <>
        <p>NeuroMail is a desktop email productivity application that provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>AI-powered email label suggestions</li>
          <li>Automated reply draft generation using a local language model</li>
          <li>Follow-up detection and reminders</li>
          <li>Contact extraction from email signatures</li>
          <li>Bulk email sending capabilities</li>
          <li>Email training and pattern learning</li>
        </ul>
        <p>The Software runs locally on your computer and connects to Gmail and Microsoft Outlook via their official APIs.</p>
      </>
    ),
  },
  {
    id: 'license',
    title: 'License Grant',
    content: (
      <>
        <p>Subject to these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use NeuroMail on a single computer for personal or business use.</p>
        <Highlight>
          <p><strong className="text-text-primary">Machine Binding:</strong> Each license key is bound to a single machine upon first activation. You may deactivate and transfer your license to a different machine through the application settings.</p>
        </Highlight>
      </>
    ),
  },
  {
    id: 'tiers',
    title: 'Subscription Tiers & Features',
    content: (
      <>
        <p>NeuroMail offers the following tiers:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Free Trial (7 days)</strong> — Label suggestions, follow-up detection, template-only drafts, 90-day training scope, contact extraction. No bulk email.</li>
          <li><strong className="text-text-primary">Pro</strong> — All Free features plus AI-powered draft generation (local LLM), 365-day training scope, up to 1,000 bulk emails per day, SendGrid integration.</li>
          <li><strong className="text-text-primary">ProMax</strong> — All Pro features plus up to 50,000 bulk emails per day.</li>
        </ul>
        <p>Feature availability is enforced by the Software. Attempting to bypass feature restrictions is a violation of these Terms.</p>
      </>
    ),
  },
  {
    id: 'payment',
    title: 'Payment & Refunds',
    content: (
      <>
        <p>License keys are purchased through our authorized payment channels. All prices are listed on our website and are subject to change with notice.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Payments are processed securely through Stripe.</li>
          <li>License keys are delivered electronically after payment confirmation.</li>
          <li>Refund requests may be submitted within 14 days of purchase if the Software does not function as described. Refunds are issued at our discretion.</li>
          <li>Lifetime licenses are a one-time purchase with no recurring charges.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reverse engineer, decompile, or disassemble the Software</li>
          <li>Share, redistribute, or sublicense your license key</li>
          <li>Use the bulk email feature for unsolicited spam or in violation of anti-spam laws (CAN-SPAM, GDPR, etc.)</li>
          <li>Attempt to circumvent license validation, feature restrictions, or machine binding</li>
          <li>Use the Software for any illegal activity</li>
          <li>Modify, adapt, or create derivative works based on the Software</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    content: (
      <>
        <p>The Software, including its code, design, AI models, documentation, and branding, is the intellectual property of UBE Labs. These Terms do not transfer any ownership rights to you.</p>
        <p>You retain full ownership of your email data, contacts, drafts, and any content processed by the Software. We claim no rights over your data.</p>
      </>
    ),
  },
  {
    id: 'email-provider',
    title: 'Third-Party Email Providers',
    content: (
      <>
        <p>NeuroMail integrates with Gmail (Google) and Microsoft Outlook via their official APIs. Your use of these services is subject to their respective terms:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Terms of Service</a></li>
          <li><a href="https://www.microsoft.com/en-us/servicesagreement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Services Agreement</a></li>
        </ul>
        <p>We are not responsible for changes to third-party APIs that may affect the Software's functionality.</p>
      </>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    content: (
      <>
        <p>The Software is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        <p>We do not warrant that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The Software will be error-free or uninterrupted</li>
          <li>AI-generated drafts, label suggestions, or follow-up recommendations will be accurate</li>
          <li>The Software will be compatible with all hardware or operating system configurations</li>
        </ul>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: (
      <p>To the maximum extent permitted by applicable law, UBE Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or business opportunities arising from your use of the Software. Our total liability for any claim shall not exceed the amount you paid for the license in the 12 months preceding the claim.</p>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    content: (
      <>
        <p>We may terminate or suspend your license if you violate these Terms. Upon termination:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your license key will be deactivated</li>
          <li>You must uninstall the Software</li>
          <li>All locally stored data remains on your device — we cannot remotely delete it</li>
        </ul>
        <p>You may terminate at any time by uninstalling the Software and deactivating your license key.</p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: <p>We may update these Terms from time to time. Updated Terms will be posted on this page with a new effective date. Continued use of the Software after changes constitutes acceptance of the updated Terms.</p>,
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these Terms shall be resolved through good-faith negotiation, and if necessary, through the courts of Karachi, Pakistan.</p>,
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <>
        <p>For questions about these Terms, contact us:</p>
        <ul className="list-disc pl-5">
          <li><strong className="text-text-primary">Email</strong>: <a href="mailto:ejazusamabin@gmail.com" className="text-accent hover:underline">ejazusamabin@gmail.com</a></li>
        </ul>
      </>
    ),
  },
]

export default function NeuroMailTerms() {
  return (
    <LegalLayout
      product="NeuroMail"
      productColor="text-accent"
      pageTitle="Terms of Service"
      subtitle="Please read these terms carefully before using NeuroMail. By installing the Software, you agree to these terms."
      effectiveDate="April 10, 2026"
      sections={sections}
    />
  )
}
