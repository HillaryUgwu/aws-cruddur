import './PrivacyFeed.css';

export default function PrivacyFeed() {
  let content;
  content = <div className='privacy_feed_primer'>
    <span>Welcome to the CRUDDUR Privacy Statement. This is where we describe how we handle your “Personal Data”, which is information that is directly linked or can be linked to you. It applies to the Personal Data that CRUDDUR inc., processes as the “Data Controller” when you interact with websites, applications, and services that display this Statement (collectively, “Services”). This Statement does not apply to services or products that do not display this Statement, such as Previews, where relevant.</span>
    <ul>
      <li>
        <strong>Introduction: </strong>
        This Privacy Policy describes how CRUDDUR inc. collects, uses, and protects your personal information when you use CRUDDUR.
      </li>
      <li>
        <strong>Information We Collect: </strong>
        We collect personal information that you provide to us, such as your name, email address, and messages. We also collect information automatically, such as your IP address and browser type.
      </li>
      <li>
        <strong>Use of Information: </strong>
        We use your personal information to provide and improve our services, for security purposes, and to personalize your experience. We may also use your information to communicate with you about our services and updates.
      </li>
      <li>
        <strong>Data Storage and Protection: </strong>
        We store your personal information on secure servers and implement measures to protect it from unauthorized access, alteration, disclosure, or destruction.
      </li>
      <li>
        <strong>Cookies and Tracking: </strong>
        We use cookies and similar technologies to collect and store information about your use of CRUDDUR, including your IP address, browser type, and usage patterns. You can control the use of cookies at the individual browser level.
      </li>
      <li>
        <strong>Third-Party Services: </strong>
        We may share your personal information with third-party service providers for the purpose of providing our services, improving our website, or conducting market research.
      </li>
      <li>
        <strong>Your Rights: </strong>
        You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection practices.
      </li>
      <li>
        <strong>Changes to This Privacy Policy: </strong>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </li>
    </ul>
  </div>


  return (<div>
    {content}
  </div>
  );
}