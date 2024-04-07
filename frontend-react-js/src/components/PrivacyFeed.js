import './PrivacyFeed.css';

export default function PrivacyFeed() {
  let content;
  content = <div className='privacy_feed_primer'>
    <span>Welcome to the CRUDDUR Privacy Statement. This is where we describe how we handle your “Personal Data”, which is information that is directly linked or can be linked to you. It applies to the Personal Data that CRUDDUR inc., processes as the “Data Controller” when you interact with websites, applications, and services that display this Statement (collectively, “Services”). This Statement does not apply to services or products that do not display this Statement, such as Previews, where relevant.</span>
    <section>
      <h4>Introduction</h4>
      <p>This Privacy Policy describes how CRUDDUR inc. collects, uses, and protects your personal information when you use CRUDDUR.</p>
    </section>
    <section>
      <h4>Information We Collect</h4>
      <p>We collect personal information that you provide to us, such as your name, email address, and messages. We also collect information automatically, such as your IP address and browser type.</p>
    </section>
    <section>
      <h4>Use of Information</h4>
      <p>We use your personal information to provide and improve our services, for security purposes, and to personalize your experience. We may also use your information to communicate with you about our services and updates.</p>
    </section>
    <section>
      <h4>Data Storage and Protection</h4>
      <p>We store your personal information on secure servers and implement measures to protect it from unauthorized access, alteration, disclosure, or destruction.</p>
    </section>
    <section>
      <h4>Cookies and Tracking</h4>
      <p>We use cookies and similar technologies to collect and store information about your use of CRUDDUR, including your IP address, browser type, and usage patterns. You can control the use of cookies at the individual browser level.</p>
    </section>
    <section>
      <h4>Third-Party Services</h4>
      <p>We may share your personal information with third-party service providers for the purpose of providing our services, improving our website, or conducting market research.</p>
    </section>
    <section>
      <h4>Your Rights</h4>
      <p>You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection practices.</p>
    </section>
    <section>
      <h4>Changes to This Privacy Policy</h4>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    </section>
    <section>
      <h4>Contact Information</h4>
      <p>For any inquiries or to learn more about CRUDDUR, please visit our Contact Us page or email us at ohary37@gmail.com. We look forward to connecting with you and helping you communicate more effectively.</p>
    </section>
  </div>

  return (<div>
    {content}
  </div>
  );
}