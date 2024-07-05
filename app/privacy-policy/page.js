import React from "react";
import "@/styles/globals.css";
import Link from "next/link";
const page = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="privacy-policy">
        <div className="privacy-policy-head">
          <h1>Privacy Policy</h1>
        </div>
        <div className="privacy-policy-main-content">
          <p>
            Welcome to Branding 360 Neo Pvt. LTD, where we are dedicated to
            ensuring the privacy and security of our clients' personal
            information. Our Privacy Policy is crafted to clarify the
            collection, disclosure, usage, and protection of personal
            information shared by clients during interactions on the website or
            when availing services or products. By using the website{" "}
            <Link href="www.branding360.in">www.branding360.in</Link> and its
            services, you implicitly agree to adhere to the policies outlined
            below in the Privacy Policy.
          </p>
        </div>
        <div className="privacy-policy-main-content">
          <h2>Information Gathering:</h2>
          <p>
            Branding 360 Neo Pvt. LTD collects and processes various forms of
            personal information, including:
            <ul>
              <li>
                Contact Information: Such as phone number, email ID, name, and
                postal address, gathered for communication purposes with
                clients.
              </li>
              <li>
                Usage Information: Details about how clients interact with the
                website and services, encompassing device information, IP
                address, visited pages, and browser type. This information aids
                in service improvement and customization of user experiences.
              </li>{" "}
              <li>
                Account Information: Collected from clients registering and
                creating accounts, including username, password, and
                preferences, stored for further use.
              </li>{" "}
            </ul>
          </p>
        </div>{" "}
        <div className="privacy-policy-main-content">
          <h2>Use of Collected Information:</h2>
          <p>
            The personal information collected serves various purposes:
            <ul>
              <li>
                Providing Services: Utilized to deliver requested products and
                services, process orders, and offer customer support.
              </li>
              <li>
                Enhancing Service Quality: Analysis of usage data to improve
                service quality, website interface, customize web content, and
                integrate new features for enhanced user experiences.
              </li>{" "}
              <li>
                Communication: Contact details are used to send updates,
                newsletters, promotional offers, and crucial announcements, with
                the option for clients to opt-out at any time.
              </li>{" "}
              <li>
                Legal Compliance: Branding 360 Neo Pvt. LTD reserves the right
                to process collected data to fulfill legal obligations and
                respond to legitimate requests from government authorities.
              </li>
            </ul>
          </p>
        </div>{" "}
        <div className="privacy-policy-main-content">
          <h2>Data Security:</h2>
          <p>
            Branding 360 Neo Pvt. LTD is committed to protecting the personal
            information of visitors and clients using industry-standard security
            measures to prevent unauthorized access, alteration, disclosure, and
            destruction.
            <p>
              However, it is important to note that complete safety and security
              of information transmitted over the internet cannot be guaranteed.
            </p>
          </p>
        </div>{" "}
        <div className="privacy-policy-main-content">
          <h2>Deletion of Personal Data:</h2>
          <p>
            <ul>
              <li>
                The data controller at Branding 360 Neo Pvt. LTD deletes
                customer and client data 60 days after receiving the Contract
                Form, and if there is no communication or interaction in 30
                days, the data is automatically deleted. Deletion also occurs
                upon client withdrawal of consent or upon client request, within
                15 days.
              </li>
            </ul>
          </p>
        </div>{" "}
        <div className="privacy-policy-main-content">
          <h2>Sharing of Information:</h2>
          <p>
            Personal information is not shared, sold, or disclosed to third
            parties without client consent. However, information may be shared
            with trusted third-party service providers assisting in website
            operations and services, or when legally required to safeguard
            privacy, rights, or property.
          </p>
        </div>{" "}
        <div className="privacy-policy-main-content">
          <h2>Change of Privacy Policy:</h2>
          <p>
            Branding 360 Neo Pvt. LTD reserves the right to amend the Privacy
            Policy periodically to reflect changes in practices or for legal
            reasons. Visitors and clients are advised to review the policies
            periodically or before using Branding 360 Neo services.
          </p>
        </div>{" "}
        <div className="privacy-policy-main-content">
          <h2>Contact Us:</h2>
          <p>
            For any inquiries, requests, or concerns regarding personal
            information or policies, feel free to contact us at&nbsp;
            <Link href="mailto:info@branding360.in">info@branding360.in</Link>.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default page;
