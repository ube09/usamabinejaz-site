import LegalLayout, { Highlight, ScopeTable } from './LegalLayout'
import type { LegalSection } from './LegalLayout'

const sections: LegalSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <>
        <p>NeuroMail is a desktop email productivity application that uses on-device artificial intelligence to help you manage your inbox. The application runs entirely on your local computer.</p>
        <Highlight variant="success">
          <p><strong className="text-text-primary">Core Privacy Guarantee:</strong> NeuroMail processes all email data locally on your device. Your emails, contacts, drafts, and AI-generated content are never transmitted to, stored on, or accessible by any external server, cloud service, or third party — including us.</p>
        </Highlight>
      </>
    ),
  },
  {
    id: 'data-collected',
    title: 'Data We Access',
    content: (
      <>
        <p>When you connect your email account, NeuroMail accesses the following data through official APIs provided by Google and Microsoft:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Email messages</strong> — subject lines, sender/recipient addresses, body content, timestamps, and thread structure</li>
          <li><strong className="text-text-primary">Email labels and folders</strong> — your existing organizational structure</li>
          <li><strong className="text-text-primary">Contact information</strong> — names, email addresses, and phone numbers extracted from email signatures using on-device NLP</li>
          <li><strong className="text-text-primary">Draft emails</strong> — for reading and creating draft responses</li>
        </ul>
        <p>All accessed data is processed and stored exclusively on your local machine. No email content is ever transmitted externally.</p>
      </>
    ),
  },
  {
    id: 'google-scopes',
    title: 'Google API Scopes',
    content: (
      <>
        <p>NeuroMail requests the following Google OAuth 2.0 scopes to provide its features. Each scope is used for a specific, limited purpose:</p>
        <ScopeTable rows={[
          { scope: 'gmail.readonly', purpose: 'Read your emails to analyze content, suggest labels, detect follow-ups requiring attention, and extract contact information from signatures — all processed locally on your device.' },
          { scope: 'gmail.send', purpose: 'Send emails on your behalf only when you explicitly approve a draft reply, follow-up message, or bulk email campaign from within the application.' },
          { scope: 'gmail.modify', purpose: 'Apply label changes to your emails when you approve AI-suggested labels, and manage draft states within your mailbox.' },
        ]} />
        <Highlight>
          <p><strong className="text-text-primary">Limited Use Disclosure:</strong> NeuroMail's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
        </Highlight>
      </>
    ),
  },
  {
    id: 'outlook',
    title: 'Microsoft Outlook Data',
    content: (
      <>
        <p>For Microsoft Outlook accounts, NeuroMail accesses your email data through the Microsoft Graph API using the following permissions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Mail.ReadWrite</strong> — Read emails for analysis and create/modify drafts</li>
          <li><strong className="text-text-primary">Mail.Send</strong> — Send approved replies and bulk emails</li>
          <li><strong className="text-text-primary">User.Read</strong> — Retrieve your account profile information for display</li>
        </ul>
        <p>The same local-only processing guarantee applies to all Outlook data.</p>
      </>
    ),
  },
  {
    id: 'local-processing',
    title: 'Local-Only Processing',
    content: (
      <>
        <p>NeuroMail is architecturally designed to keep all data processing on your device:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">AI models run locally</strong> — The language model (Phi-3.5 Mini) runs entirely on your CPU or GPU. No cloud AI services (OpenAI, Google AI, etc.) are used.</li>
          <li><strong className="text-text-primary">NLP processing is local</strong> — Contact extraction, email classification, and reply analysis use on-device libraries (spaCy, sentence-transformers).</li>
          <li><strong className="text-text-primary">No telemetry</strong> — NeuroMail does not collect usage analytics, crash reports, or behavioral data.</li>
          <li><strong className="text-text-primary">No external API calls for email processing</strong> — The only network requests are: (1) authenticating with Gmail/Outlook via official OAuth, (2) fetching and sending emails through official APIs, and (3) license validation with our license server.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'storage',
    title: 'Data Storage & Encryption',
    content: (
      <>
        <p>All application data is stored locally on your computer:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Database</strong> — SQLite databases stored in the application's local data directory, one per email account</li>
          <li><strong className="text-text-primary">Authentication tokens</strong> — OAuth refresh tokens stored locally, encrypted with AES-256-GCM</li>
          <li><strong className="text-text-primary">AI model files</strong> — Stored locally in the application directory (~2.4 GB)</li>
          <li><strong className="text-text-primary">License data</strong> — License key and activation status stored locally using encrypted storage</li>
        </ul>
        <p>No data is stored on any remote server controlled by NeuroMail, with the sole exception of license activation records (see Section 9).</p>
      </>
    ),
  },
  {
    id: 'no-sharing',
    title: 'No Data Sharing',
    content: (
      <>
        <Highlight variant="success">
          <p><strong className="text-text-primary">We do not sell, share, transfer, or disclose your email data, contacts, drafts, or any AI-processed content to any third party — ever.</strong> This includes advertising networks, data brokers, analytics providers, and affiliated companies.</p>
        </Highlight>
        <p>The only data that leaves your device is:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Emails you explicitly choose to send (via Gmail/Outlook's official send APIs)</li>
          <li>Label changes you explicitly approve (via Gmail/Outlook's official modify APIs)</li>
          <li>A license key validation request containing only your license key and a machine identifier (no email content)</li>
        </ol>
      </>
    ),
  },
  {
    id: 'ai-processing',
    title: 'AI & Machine Learning',
    content: (
      <>
        <p>NeuroMail uses artificial intelligence for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">Label suggestions</strong> — Analyzing email content to recommend organizational labels</li>
          <li><strong className="text-text-primary">Draft generation</strong> — Creating reply drafts that match your writing tone and style</li>
          <li><strong className="text-text-primary">Follow-up detection</strong> — Identifying sent emails that haven't received a response</li>
          <li><strong className="text-text-primary">Contact extraction</strong> — Parsing email signatures for names, emails, and phone numbers</li>
          <li><strong className="text-text-primary">Reply decision</strong> — Determining which emails warrant a response</li>
        </ul>
        <p>All AI models are open-source, run locally on your hardware, and are never fine-tuned on or transmit your data to external services. The training feature in NeuroMail adapts the model's behavior using your local feedback — this training data stays on your machine.</p>
      </>
    ),
  },
  {
    id: 'license',
    title: 'Licensing System',
    content: (
      <>
        <p>NeuroMail uses an online license activation system. The following minimal data is exchanged with our license server:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">License key</strong> — Your purchased license key</li>
          <li><strong className="text-text-primary">Machine identifier</strong> — A hardware-derived ID used to bind the license to your device</li>
          <li><strong className="text-text-primary">Activation status</strong> — Whether the license is active, expired, or in trial</li>
        </ul>
        <p>The license server does <strong className="text-text-primary">not</strong> receive or have access to any email content, contacts, drafts, AI-generated text, or any other application data. License validation occurs once every 24 hours, with a 7-day offline grace period.</p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Data Deletion',
    content: (
      <>
        <p>Because all data is stored locally on your device, you have full control:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-text-primary">View your data</strong> — All data is in SQLite databases accessible on your machine</li>
          <li><strong className="text-text-primary">Delete your data</strong> — Uninstalling NeuroMail removes all application data, databases, AI models, and cached tokens from your device</li>
          <li><strong className="text-text-primary">Revoke access</strong> — You can revoke NeuroMail's access to your Gmail account at any time via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Account Permissions</a>, or revoke Outlook access via <a href="https://account.microsoft.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Privacy Dashboard</a></li>
          <li><strong className="text-text-primary">Disconnect accounts</strong> — Remove any connected email account from within NeuroMail's settings</li>
          <li><strong className="text-text-primary">Deactivate license</strong> — Deactivate your license key to transfer it to a different machine</li>
        </ul>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: <p>NeuroMail is not intended for use by individuals under the age of 16. We do not knowingly process data from children.</p>,
  },
  {
    id: 'changes',
    title: 'Policy Changes',
    content: <p>We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of NeuroMail after changes constitutes acceptance of the updated policy.</p>,
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have questions about this privacy policy or NeuroMail's data practices, please contact us:</p>
        <ul className="list-disc pl-5">
          <li><strong className="text-text-primary">Email</strong>: <a href="mailto:ejazusamabin@gmail.com" className="text-accent hover:underline">ejazusamabin@gmail.com</a></li>
        </ul>
      </>
    ),
  },
]

export default function NeuroMailPrivacy() {
  return (
    <LegalLayout
      product="NeuroMail"
      productColor="text-accent"
      pageTitle="Privacy Policy"
      subtitle="NeuroMail is built on a simple principle: your email data never leaves your computer. Here's exactly how we handle your information."
      effectiveDate="April 2, 2026"
      sections={sections}
    />
  )
}
