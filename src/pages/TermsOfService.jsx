import React from 'react';
import LegalPage from '../components/ui/LegalPage';

const SECTIONS = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: (
      <>
        <p>
          Welcome to <strong>Language World Canada</strong>. These Terms of
          Service (“Terms”) govern your access to and use of our website,
          mobile applications and related services (collectively, the
          “Service”). By creating an account or using the Service, you agree
          to be bound by these Terms.
        </p>
        <p>
          If you are using the Service on behalf of a school, district or
          other organization, you represent that you have authority to bind
          that organization to these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility & Accounts',
    body: (
      <>
        <p>
          You may use the Service if you can form a legally binding contract
          in your jurisdiction. If you are under the age of majority, you may
          only use the Service with the involvement of a parent, legal
          guardian or authorized school.
        </p>
        <h3>Your account</h3>
        <ul>
          <li>
            Provide accurate, current and complete information when creating
            an account.
          </li>
          <li>
            Keep your password confidential and notify us immediately of any
            unauthorized access.
          </li>
          <li>
            You are responsible for all activity that happens under your
            account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'license',
    title: 'License to Use the Service',
    body: (
      <>
        <p>
          Subject to your compliance with these Terms, we grant you a limited,
          non-exclusive, non-transferable and revocable license to access and
          use the Service for your personal, educational and non-commercial
          learning needs.
        </p>
        <p>
          This license does not include the right to resell, redistribute or
          create derivative works from the Service, except as expressly
          permitted by us in writing.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    body: (
      <>
        <p>You agree <strong>not</strong> to:</p>
        <ul>
          <li>
            Use the Service in any way that violates applicable laws or
            regulations.
          </li>
          <li>
            Upload or share content that is unlawful, harmful, harassing,
            defamatory or otherwise objectionable.
          </li>
          <li>
            Attempt to gain unauthorized access to the Service, related
            systems, or other users' accounts.
          </li>
          <li>
            Reverse-engineer, decompile, scrape or otherwise extract source
            code or lesson content.
          </li>
          <li>
            Interfere with the Service's performance, such as launching
            denial-of-service attacks or bypassing rate limits.
          </li>
          <li>
            Use the Service to develop competing products or train machine
            learning models without our prior written consent.
          </li>
        </ul>
        <p>
          We may suspend or terminate accounts that violate these rules,
          without notice when the violation puts other users at risk.
        </p>
      </>
    ),
  },
  {
    id: 'content',
    title: 'Content & Intellectual Property',
    body: (
      <>
        <p>
          The Service — including lessons, audio, illustrations, exercises,
          PDFs, software, logos and branding — is owned by Language World
          Canada or its licensors and is protected by copyright, trademark and
          other laws. All rights not expressly granted are reserved.
        </p>
        <h3>Your content</h3>
        <p>
          You retain ownership of any content you submit, post or display on
          or through the Service (such as profile information or feedback). By
          submitting content, you grant us a worldwide, non-exclusive,
          royalty-free license to host, store, reproduce, modify, and display
          that content solely to operate and improve the Service.
        </p>
      </>
    ),
  },
  {
    id: 'school-licenses',
    title: 'School & Bulk Licenses',
    body: (
      <>
        <p>
          Schools, districts and education partners may receive a separate
          written agreement that supplements these Terms (a “School
          Agreement”). To the extent of any conflict, the School Agreement
          will control for that school's authorized users.
        </p>
        <ul>
          <li>
            Bulk licenses are for the named institution and its enrolled
            learners only.
          </li>
          <li>
            Sharing credentials outside the licensed group is not permitted.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'payments',
    title: 'Payments, Trials & Refunds',
    body: (
      <>
        <p>
          Some features of the Service are offered for a fee. By purchasing a
          subscription or one-time pass, you authorize us (and our payment
          processors) to charge your chosen payment method.
        </p>
        <ul>
          <li>
            <strong>Trials.</strong> If you start a free trial, your
            subscription will automatically convert to paid at the end of the
            trial unless cancelled.
          </li>
          <li>
            <strong>Renewals.</strong> Subscriptions renew automatically until
            cancelled. You can cancel at any time from your account settings.
          </li>
          <li>
            <strong>Refunds.</strong> Refunds are handled in accordance with
            applicable consumer protection laws and the policies of the app
            store (Apple App Store, Google Play) where the purchase was made.
          </li>
          <li>
            <strong>Taxes.</strong> Prices may not include taxes. You are
            responsible for any taxes due in your jurisdiction.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    body: (
      <>
        <p>
          The Service may contain links to third-party websites or services
          that are not owned or controlled by Language World Canada. We are
          not responsible for the content, policies or practices of any
          third-party services. We encourage you to read the terms and
          privacy policies of any third-party services you visit.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: (
      <>
        <p>
          The Service is provided on an <strong>“as is”</strong> and{' '}
          <strong>“as available”</strong> basis. To the maximum extent
          permitted by law, Language World Canada disclaims all warranties,
          express or implied, including merchantability, fitness for a
          particular purpose, non-infringement, and any warranty arising out
          of course of dealing or usage of trade.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted,
          error-free, secure, or that defects will be corrected. Learning
          outcomes vary and are not guaranteed.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: (
      <>
        <p>
          To the maximum extent permitted by law, Language World Canada and
          its affiliates, officers, employees and partners shall not be
          liable for any indirect, incidental, special, consequential or
          punitive damages, or any loss of profits, revenue, data or goodwill,
          arising from your use of the Service.
        </p>
        <p>
          Our total cumulative liability for any claim related to the Service
          shall not exceed the greater of (a) the amount you paid us in the
          twelve months before the event giving rise to the claim, or (b) one
          hundred Canadian dollars (CAD 100).
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: (
      <>
        <p>
          You agree to defend, indemnify and hold harmless Language World
          Canada from and against any claims, damages, liabilities, losses
          and expenses (including reasonable legal fees) arising out of or in
          any way connected with your use of the Service or your violation of
          these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    body: (
      <>
        <p>
          You may stop using the Service at any time and delete your account
          from your settings. We may suspend or terminate your access if you
          breach these Terms, create risk for other users, or if we are
          required to do so by law.
        </p>
        <p>
          Upon termination, the rights and licenses granted to you will end,
          but sections of these Terms that by their nature should survive
          will remain in effect — including intellectual property,
          disclaimers, limitation of liability and governing law.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Disputes',
    body: (
      <>
        <p>
          These Terms are governed by the laws of the Province of Ontario,
          Canada, without regard to its conflict of laws principles. The
          parties agree to the exclusive jurisdiction of the courts located in
          Ontario for any dispute that is not subject to arbitration under
          applicable law.
        </p>
        <p>
          Nothing in this section limits any mandatory consumer protection
          rights you may have in your country of residence.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: (
      <>
        <p>
          We may revise these Terms from time to time. The most current
          version will always be on this page. If a revision is material, we
          will notify you in-app or by email. By continuing to use the
          Service after revisions take effect, you agree to the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: (
      <>
        <p>Questions about these Terms? We're happy to help.</p>
        <ul>
          <li>
            <strong>Email</strong> ·{' '}
            <a href="mailto:Info@languageworld.ca">
              Info@languageworld.ca
            </a>
          </li>
          <li>
            <strong>Office</strong> · BHIVE Workspace, AKR Tech Park, B Block,
            7th Mile Hosur Rd, Kudlu Gate, Bengaluru, Karnataka 560068, India.
          </li>
        </ul>
      </>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Clear, fair terms for"
      highlight="every classroom."
      description="These terms describe how Language World Canada works for students, parents and schools. We've kept the language straightforward so you always know what to expect."
      lastUpdated="May 11, 2026"
      sections={SECTIONS}
    />
  );
}
