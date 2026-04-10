import LegalLayout, { Highlight } from './LegalLayout'
import type { LegalSection } from './LegalLayout'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>By creating an account or using Nexus ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Platform.</p>
        <p>These Terms constitute a legal agreement between you ("User") and UBE Labs ("we", "us", "our"), the developer of Nexus.</p>
      </>
    ),
  },
  {
    id: 'description',
    title: 'Description of Service',
    content: (
      <>
        <p>Nexus is a team collaboration platform that provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Real-time messaging with channels and direct messages</li>
          <li>Task management with assignments, due dates, and status tracking</li>
          <li>File sharing and document collaboration</li>
          <li>Calendar integration with Microsoft Outlook</li>
          <li>Email inbox integration</li>
          <li>Role-based access control and team management</li>
        </ul>
        <p>The Platform is accessible via web browser, with mobile applications planned.</p>
      </>
    ),
  },
  {
    id: 'accounts',
    title: 'Account Registration',
    content: (
      <>
        <p>To use Nexus, you must create an account with accurate information. You are responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Maintaining the security of your account credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Notifying us immediately of any unauthorized access</li>
        </ul>
        <p>We reserve the right to suspend or terminate accounts that violate these Terms or that appear to be fraudulent.</p>
      </>
    ),
  },
  {
    id: 'workspace',
    title: 'Workspaces & Team Management',
    content: (
      <>
        <p>Nexus organizes collaboration through workspaces:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Workspace owners</strong> have full administrative control, including member management, channel creation, and workspace settings</li>
          <li><strong className="text-text-primary">Admins</strong> can manage members and channels</li>
          <li><strong className="text-text-primary">Members</strong> can participate in channels, tasks, and file sharing</li>
        </ul>
        <p>Workspace owners are responsible for the activity within their workspace and for ensuring their team members comply with these Terms.</p>
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
          <li>Use the Platform for any illegal activity</li>
          <li>Upload malicious files, malware, or harmful content</li>
          <li>Harass, threaten, or abuse other users</li>
          <li>Attempt to gain unauthorized access to other accounts or workspaces</li>
          <li>Use automated tools to scrape data or overload the Platform</li>
          <li>Share content that infringes on intellectual property rights</li>
          <li>Circumvent any security measures or access controls</li>
        </ul>
      </>
    ),
  },
  {
    id: 'content',
    title: 'User Content',
    content: (
      <>
        <p>You retain ownership of all content you upload to Nexus (messages, files, tasks, etc.).</p>
        <Highlight>
          <p><strong className="text-text-primary">License to us:</strong> By uploading content, you grant UBE Labs a limited license to store, process, and display your content solely for the purpose of providing the Nexus service to you and your team. We do not use your content for advertising, training, or any purpose beyond service delivery.</p>
        </Highlight>
        <p>You are responsible for ensuring you have the right to share any content you upload.</p>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    content: (
      <p>The Platform, including its code, design, features, documentation, and branding, is the intellectual property of UBE Labs. These Terms do not transfer any ownership rights to you. You may not copy, modify, distribute, or create derivative works based on the Platform.</p>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Integrations',
    content: (
      <>
        <p>Nexus integrates with third-party services. Your use of these integrations is subject to their respective terms:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><a href="https://www.microsoft.com/en-us/servicesagreement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Services Agreement</a> (Outlook calendar & email integration)</li>
        </ul>
        <p>We are not responsible for the availability, accuracy, or policies of third-party services.</p>
      </>
    ),
  },
  {
    id: 'availability',
    title: 'Service Availability',
    content: (
      <>
        <p>We strive to maintain high availability but do not guarantee uninterrupted access. The Platform may be temporarily unavailable due to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Scheduled maintenance (we will provide advance notice when possible)</li>
          <li>Infrastructure issues beyond our control</li>
          <li>Security incidents requiring immediate response</li>
        </ul>
      </>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    content: (
      <p>The Platform is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Platform will be error-free, secure, or available at all times.</p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: (
      <p>To the maximum extent permitted by applicable law, UBE Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or business opportunities arising from your use of the Platform. Our total liability for any claim shall not exceed the amount you paid for the service in the 12 months preceding the claim.</p>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    content: (
      <>
        <p>Either party may terminate this agreement:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">You</strong> — Delete your account at any time through account settings</li>
          <li><strong className="text-text-primary">Us</strong> — Suspend or terminate your account for Terms violations, with notice when possible</li>
        </ul>
        <p>Upon account deletion, your personal data will be removed from our servers within 30 days. Shared workspace content (messages, files) may be retained for other workspace members.</p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: <p>We may update these Terms from time to time. Changes will be posted on this page with a new effective date. We will notify active users of material changes. Continued use of the Platform after changes constitutes acceptance.</p>,
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

export default function NexusTerms() {
  return (
    <LegalLayout
      product="Nexus Web And Mobile App"
      productColor="text-coral"
      pageTitle="Terms of Service"
      subtitle="Please read these terms carefully before using Nexus. By creating an account, you agree to these terms."
      effectiveDate="April 10, 2026"
      sections={sections}
    />
  )
}
