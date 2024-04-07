import './TermsOfServiceFeed.css';

export default function TermsOfServiceFeed() {
  let content;
  content = <div className='terms_feed_primer'>
    <span>Thank you for using CRUDDUR! We're happy you're here. Please read this Terms of Service agreement carefully before accessing or using CRUDDUR. Because it is such an important contract between us and our users, we have tried to make it as clear as possible.</span>
    <section>
      <h4>Introduction</h4>
      <p>This document outlines the terms and conditions for using CRUDDUR, a cloud-based web messaging application. By using our services, you agree to abide by these terms.</p>
    </section>
    <section>
      <h4>Acceptance of Terms</h4>
      <p>By using CRUDDUR, you acknowledge that you have read, understood, and agreed to be bound by these terms.</p>
    </section>
    <section>
      <h4>User Conduct</h4>
      <p>Users are expected to use CRUDDUR in a manner that complies with all applicable laws and regulations, as well as these terms. Unauthorized use, including but not limited to, spamming, hacking, or distributing malicious software, is strictly prohibited.</p>
    </section>
    <section>
      <h4>Intellectual Property Rights</h4>
      <p>All content, including but not limited to, text, images, and videos, on CRUDDUR is the property of CRUDDUR inc. or its content creators and is protected by copyright laws. Unauthorized use of such content is prohibited.</p>
    </section>
    <section>
      <h4>User Accounts</h4>
      <p>Users are responsible for maintaining the security of their accounts. CRUDDUR inc. is not liable for any unauthorized access to or use of user accounts.</p>
    </section>
    <section>
      <h4>Changes to Terms</h4>
      <p>CRUDDUR inc. reserves the right to modify these terms at any time. Users will be notified of any changes, and continued use of CRUDDUR following the posting of any changes will constitute acceptance of those changes.</p>
    </section>
    <section>
      <h4>Dispute Resolution</h4>
      <p>Any disputes arising from the use of CRUDDUR will be governed by the laws applicable in the jurisdiction where the dispute arises. Users agree to submit to the exclusive jurisdiction of the courts located in the jurisdiction where the dispute arises for the resolution of any disputes.</p>
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