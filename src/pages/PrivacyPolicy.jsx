import React from 'react';
import LegalPage from '../components/ui/LegalPage';

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <p>
          Welcome to <strong>Language World Canada</strong>. We design our
          French learning app to be safe, joyful and respectful for every
          student, parent and educator who uses it. This Privacy Policy
          explains what information we collect, how we use it, and the choices
          you have over your data.
        </p>
        <p>
          By using Language World Canada (the “Service”), you agree to the
          collection and use of information in accordance with this policy. If
          you do not agree with our practices, please discontinue use of the
          Service.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: (
      <>
        <p>
          We collect information that helps us deliver a great learning
          experience. We try to keep this to a minimum.
        </p>
        <h3>Account information</h3>
        <ul>
          <li>Name, email address and school or class identifier.</li>
          <li>Age range or grade level (used to recommend lessons).</li>
          <li>Profile picture or avatar, if you choose to add one.</li>
        </ul>
        <h3>Learning activity</h3>
        <ul>
          <li>
            Lesson progress, quiz scores, streaks, vocabulary lists and audio
            practice attempts.
          </li>
          <li>
            Time spent in the app and which modules you opened, so we can
            suggest the next best lesson.
          </li>
        </ul>
        <h3>Device &amp; technical data</h3>
        <ul>
          <li>
            Device model, operating system, app version, language and crash
            reports.
          </li>
          <li>
            Approximate region (derived from IP address) for content licensing
            and analytics — never precise GPS location.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, personalize and improve lessons and curriculum.</li>
          <li>
            Save your progress so you can pick up exactly where you left off
            across devices.
          </li>
          <li>
            Send important Service notifications — such as security alerts,
            new lesson releases and policy updates.
          </li>
          <li>
            Maintain the security, integrity and reliability of the Service,
            including fraud detection and abuse prevention.
          </li>
          <li>
            Comply with legal obligations and respond to lawful requests.
          </li>
        </ul>
        <p>
          We <strong>do not sell</strong> personal information, and we do not
          use student data for behavioural advertising.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children & Student Privacy',
    body: (
      <>
        <p>
          Language World Canada is built for school-aged learners. We design
          with child privacy regulations in mind, including <strong>COPPA</strong>{' '}
          (United States), <strong>PIPEDA</strong> (Canada) and <strong>GDPR-K</strong>{' '}
          (European Union).
        </p>
        <ul>
          <li>
            When the Service is used in a school setting, the school acts as
            the parental authority and consents on behalf of students.
          </li>
          <li>
            We never request more information from a child than is reasonably
            necessary to use the Service.
          </li>
          <li>
            Parents and guardians may review, edit or delete their child's
            information by contacting us at the email below.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies & Similar Technologies',
    body: (
      <>
        <p>
          On our website, we use a small number of cookies and similar
          technologies to keep you signed in, remember preferences and measure
          aggregate site usage. Inside the mobile app, we use device storage
          for the same purposes (e.g. caching lessons for offline practice).
        </p>
        <ul>
          <li>
            <strong>Essential</strong> — required for the Service to function,
            such as authentication.
          </li>
          <li>
            <strong>Preferences</strong> — remember your language, theme and
            classroom selection.
          </li>
          <li>
            <strong>Analytics</strong> — privacy-respecting metrics that help
            us understand which lessons are most loved.
          </li>
        </ul>
        <p>You can disable non-essential cookies in your browser settings.</p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'How We Share Information',
    body: (
      <>
        <p>
          We only share information with carefully selected partners who help
          us run the Service. These include:
        </p>
        <ul>
          <li>
            <strong>Hosting &amp; infrastructure</strong> providers that store
            our databases and serve audio/PDF lesson assets.
          </li>
          <li>
            <strong>Analytics</strong> providers that help us measure usage in
            aggregate.
          </li>
          <li>
            <strong>Customer support</strong> tools that help us reply to your
            messages.
          </li>
          <li>
            <strong>Legal authorities</strong>, when we are required by law,
            court order or to protect the rights, property or safety of
            students and staff.
          </li>
        </ul>
        <p>
          All partners are bound by contractual obligations to protect your
          data and use it only for the purposes we authorize.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Data Security',
    body: (
      <>
        <p>
          We take security seriously. Our safeguards include encrypted
          connections (HTTPS/TLS) for every request, encryption at rest for
          stored data, role-based access controls, and continuous monitoring
          for suspicious activity.
        </p>
        <p>
          No method of transmission over the Internet is 100% secure. We work
          hard to protect your information but cannot guarantee absolute
          security. If a breach occurs that affects you, we will notify you in
          accordance with applicable laws.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data Retention',
    body: (
      <>
        <p>
          We keep personal information only for as long as it is needed to
          provide the Service, comply with legal obligations, resolve disputes
          and enforce our agreements.
        </p>
        <ul>
          <li>
            Account data is retained while your account is active and for a
            reasonable cool-off period after deletion.
          </li>
          <li>
            Anonymized learning analytics may be retained longer to improve our
            curriculum and pedagogy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to:
        </p>
        <ul>
          <li>Access, correct or delete the personal data we hold about you.</li>
          <li>
            Object to or restrict certain processing of your information.
          </li>
          <li>Request a portable copy of your information.</li>
          <li>
            Withdraw consent at any time, where we rely on consent to process
            data.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at{' '}
          <a href="mailto:Info@languageworld.ca">
            Info@languageworld.ca
          </a>{' '}
          and we will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    id: 'international',
    title: 'International Transfers',
    body: (
      <>
        <p>
          Language World Canada operates globally. Your information may be
          processed in countries other than where you live, including Canada
          and India. We rely on appropriate safeguards — such as standard
          contractual clauses — to protect data when it moves across borders.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technology, legal requirements and other
          factors. When we do, we will revise the “Last updated” date at the
          top of this page and, where appropriate, notify you in-app or by
          email.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: (
      <>
        <p>
          If you have any questions, concerns or requests about this Privacy
          Policy or our data practices, please contact us:
        </p>
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

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your privacy, handled with"
      highlight="care."
      description="We built Language World Canada for students, teachers and parents — and we treat your information the way we would want ours to be treated. Here's exactly what we collect and why."
      lastUpdated="May 11, 2026"
      sections={SECTIONS}
    />
  );
}
