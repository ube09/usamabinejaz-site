import LegalLayout, { Highlight, ScopeTable } from './LegalLayout'
import type { LegalSection } from './LegalLayout'

const sections: LegalSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <>
        <p>Nexus is a team collaboration platform available as a web application (with mobile apps planned). It provides real-time messaging, task management, file sharing, calendar integration, and email connectivity for teams.</p>
        <Highlight>
          <p><strong className="text-text-primary">Nexus is a server-based application.</strong> Unlike NeuroMail (which is fully local), Nexus stores data on our servers to enable real-time collaboration across team members and devices. This policy explains exactly what data we collect, how we use it, and your rights.</p>
        </Highlight>
      </>
    ),
  },
  {
    id: 'data-collected',
    title: 'Data We Collect',
    content: (
      <>
        <p>When you use Nexus, we collect and store the following data on our servers:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Account information</strong> — Name, email address, profile photo, and authentication credentials</li>
          <li><strong className="text-text-primary">Messages</strong> — Text messages, attachments, and media sent in channels and direct messages</li>
          <li><strong className="text-text-primary">Tasks</strong> — Task titles, descriptions, assignments, due dates, and status</li>
          <li><strong className="text-text-primary">Files</strong> — Documents and files shared within the platform</li>
          <li><strong className="text-text-primary">Calendar events</strong> — Events synced from connected Microsoft Outlook calendars</li>
          <li><strong className="text-text-primary">Email metadata</strong> — Subject lines and sender information from connected email accounts (for inbox integration)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'microsoft-scopes',
    title: 'Microsoft Graph API Permissions',
    content: (
      <>
        <p>When you connect your Microsoft Outlook account to Nexus, we request the following permissions:</p>
        <ScopeTable rows={[
          { scope: 'User.Read', purpose: 'Read your profile information (name, email) for account display.' },
          { scope: 'Mail.Read', purpose: 'Read your email inbox to display messages within the Nexus email integration.' },
          { scope: 'Calendars.ReadWrite', purpose: 'Read and sync your calendar events for the Nexus calendar view. Write access enables creating events from within Nexus.' },
          { scope: 'offline_access', purpose: 'Maintain your connection without requiring re-authentication on every session.' },
        ]} />
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Data',
    content: (
      <>
        <p>We use your data exclusively to provide and improve the Nexus platform:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Deliver core features</strong> — Messaging, task management, file sharing, calendar sync</li>
          <li><strong className="text-text-primary">Real-time collaboration</strong> — WebSocket connections for instant message delivery and presence indicators</li>
          <li><strong className="text-text-primary">Notifications</strong> — In-app and push notifications for messages, task assignments, and calendar events</li>
          <li><strong className="text-text-primary">Authentication</strong> — Verify your identity and manage session security</li>
        </ul>
        <Highlight variant="success">
          <p><strong className="text-text-primary">We do not use your data for advertising, profiling, or selling to third parties.</strong></p>
        </Highlight>
      </>
    ),
  },
  {
    id: 'storage',
    title: 'Data Storage & Security',
    content: (
      <>
        <p>Your data is stored securely on our servers:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Database</strong> — PostgreSQL with encrypted connections</li>
          <li><strong className="text-text-primary">Authentication tokens</strong> — OAuth refresh tokens stored encrypted in the database</li>
          <li><strong className="text-text-primary">File storage</strong> — Uploaded files stored with access controls</li>
          <li><strong className="text-text-primary">Transport security</strong> — All connections use HTTPS/TLS encryption</li>
          <li><strong className="text-text-primary">Passwords</strong> — Hashed using industry-standard algorithms (never stored in plain text)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Data Sharing',
    content: (
      <>
        <p>We share your data only in these limited circumstances:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">With your team</strong> — Messages, tasks, and files are visible to members of your workspace according to channel and permission settings</li>
          <li><strong className="text-text-primary">Service providers</strong> — We use hosting providers (Railway) and email services to operate the platform. These providers process data on our behalf under strict confidentiality agreements</li>
          <li><strong className="text-text-primary">Legal requirements</strong> — We may disclose data if required by law or to protect our legal rights</li>
        </ul>
        <Highlight variant="success">
          <p><strong className="text-text-primary">We never sell your data to advertisers, data brokers, or any third party.</strong></p>
        </Highlight>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: (
      <>
        <p>You have the following rights regarding your data:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Access</strong> — Request a copy of your personal data</li>
          <li><strong className="text-text-primary">Correction</strong> — Update or correct inaccurate information</li>
          <li><strong className="text-text-primary">Deletion</strong> — Request deletion of your account and associated data</li>
          <li><strong className="text-text-primary">Export</strong> — Export your data in a portable format</li>
          <li><strong className="text-text-primary">Revoke access</strong> — Disconnect Microsoft Outlook at any time via <a href="https://account.microsoft.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Privacy Dashboard</a></li>
        </ul>
        <p>To exercise these rights, contact us at the email below.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies & Session Data',
    content: (
      <>
        <p>Nexus uses essential cookies and session storage for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Authentication session management</li>
          <li>CSRF protection</li>
          <li>User preference storage (theme, notification settings)</li>
        </ul>
        <p>We do not use tracking cookies, analytics cookies, or advertising cookies.</p>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: <p>Nexus is not intended for use by individuals under the age of 16. We do not knowingly collect data from children.</p>,
  },
  {
    id: 'changes',
    title: 'Policy Changes',
    content: <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. We will notify active users of material changes via email or in-app notification.</p>,
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: (
      <>
        <p>For questions about this privacy policy or your data, contact us:</p>
        <ul className="list-disc pl-5">
          <li><strong className="text-text-primary">Email</strong>: <a href="mailto:ejazusamabin@gmail.com" className="text-accent hover:underline">ejazusamabin@gmail.com</a></li>
        </ul>
      </>
    ),
  },
]

export default function NexusPrivacy() {
  return (
    <LegalLayout
      product="Nexus Web And Mobile App"
      productColor="text-coral"
      pageTitle="Privacy Policy"
      subtitle="Nexus stores your team data on our servers to enable real-time collaboration. Here's exactly what we collect and how we protect it."
      effectiveDate="April 10, 2026"
      sections={sections}
    />
  )
}
