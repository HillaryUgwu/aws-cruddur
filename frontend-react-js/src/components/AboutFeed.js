import './AboutFeed.css';

export default function AboutFeed() {
  let content;
  content = <div className='about_feed_primer'>
    <span>Welcome to CRUDDUR, your go-to destination for seamless, secure, and efficient cloud-based web messaging. Our mission is to revolutionize the way people communicate online by providing a platform that is not only user-friendly but also robust, scalable, and secure.</span>
    <section>
      <h4>Our Story</h4>
      <p>CRUDDUR was founded with the vision of making online communication more accessible and efficient. We recognized the need for a platform that could handle the demands of today's digital world, where speed, security, and reliability are paramount. Our team of dedicated professionals has worked tirelessly to develop a solution that meets these needs and more.</p>
    </section>
    <section>
      <h4>What We Do</h4>
      <p>At CRUDDUR, we offer a comprehensive suite of messaging services designed to cater to a wide range of communication needs. From personal messaging to business collaborations, our platform is equipped to handle it all. We leverage cutting-edge technology to ensure that our users can send messages, share files, and collaborate in real-time, all while maintaining the highest standards of security and privacy.</p>
    </section>
    <section>
      <h4>Our Commitment</h4>
      <p>We are committed to providing an exceptional user experience. Our team is dedicated to listening to our users and continuously improving our services to better meet their needs. We believe in the power of community and strive to foster a supportive environment where users can connect, share, and grow together.</p>
    </section>
    <section>
      <h4>Join Us</h4>
      <p>We invite you to join us on this exciting journey. Whether you're an individual looking for a reliable messaging solution or a business seeking to enhance your communication capabilities, CRUDDUR is here to support you. Sign up today and experience the difference.</p>
    </section>
    <section>
      <h4>Contact Us</h4>
      <p>For any inquiries or to learn more about CRUDDUR, please visit our Contact Us page or email us at ohary37@gmail.com. We look forward to connecting with you and helping you communicate more effectively.</p>
    </section>
    {/* <p>Orchestrated the development of a robust, scalable, and highly efficient cloud-based web messaging application using ReactJS for the frontend and Python Flask for the backend, implementing a comprehensive CRUD (Create, Read, Update, Delete) functionality.</p>
    <p>Leveraged Docker containerization to segregate frontend and backend services, enhancing the modularity, scalability and maintainability of the application.</p>
    <p>Utilized AWS XRay and OpenTelemetry Flask instrumentation for distributed tracing, providing a holistic view of the application's performance and identifying bottlenecks effectively.</p>
    <p>Integrated decentralized authentication using AWS Amplify and AWS Cognito, enhancing the security and user experience of the application.</p>
    <p>Designed and implemented a database solution using Postgres and RDS for user data storage, and DynamoDB and DynamoDB Stream for real-time messaging and conversation updates.</p>
    <p>Employed AWS ECS Fargate for container deployment and monitoring, providing reliable and scalable infrastructure to host the application.</p>
    <p>Handled Cross-Origin Resource Sharing (CORS) issues through AWS Application Load Balancer and custom domain hosting in Route53, ensuring seamless interaction between different parts of the application.</p>
    <p>Implemented serverless image processing using AWS CDK, Lambda, and API Gateway to preprocess images before storage in S3, reducing latency and improving user experience.</p>
    <p>Set up a CI/CD pipeline using CodePipeline, CodeBuild, and CodeDeploy, automating the build and deployment process upon code changes in the parent GitHub repository.</p>
    <p>Transitioned the entire application architecture and infrastructure to Infrastructure as Code (IaC) using AWS CloudFormation simplifying the management and replication of the application, maximizing its potential and scalability.</p> */}
  </div>

  return (<div>
    {content}
  </div>
  );

}