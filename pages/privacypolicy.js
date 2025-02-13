import React from "react";
import Head from "next/head";

export async function getStaticProps() {
  const seoData = {
    title: "InstiX - Privacy Policy",
    description: "Learn more about our privacy policy.",
    ogImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
    twitterImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
  };

  return {
    props: {
      seoData,
    },
  };
}

const privacypolicy = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.twitterImage} />
      </Head>
      <div className="max-w-7xl  mx-auto px-4 lg:pt-[8rem] pt-[6.75rem]">
        <>
          <p
            style={{
              lineHeight: "108%",
              marginBottom: "0.11in",
              textAlign: "center",
            }}
          >
            <font face="Poppins, sans-serif">
              <font size={5} style={{ fontSize: "18pt" }}>
                <b>instiX Global Privacy Policy</b>
              </font>
            </font>
          </p>
          <p style={{ lineHeight: "108%", marginBottom: "0.11in" }}></p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <font face="Poppins, sans-serif">
              <b>Effective Date:</b>
            </font>
            <font face="Poppins, sans-serif"> 1</font>
            <sup>
              <font face="Poppins, sans-serif">st</font>
            </sup>
            <font face="Poppins, sans-serif">November 2024</font>
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <font face="Poppins, sans-serif">
              <b>1. Introduction</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              At instiX Global, privacy and data protection are core to our
              mission of providing a secure and compliant OTC (Over The Counter)
              institutional exchange platform. We recognize that privacy is
              paramount, especially for our clientele, which includes High Net
              Worth Individuals (HNIs), family offices, corporations,
              institutions, brokers, other crypto exchanges, and financial
              professionals, who trust us to handle their sensitive personal and
              financial data.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Our Privacy Policy sets out a comprehensive approach to data
              protection, detailing the types of data we collect, how it is
              processed, the measures we take to protect it, and the rights you
              have regarding your information. We adhere to stringent data
              protection practices and comply with the General Data Protection
              Regulation (GDPR) and all other applicable data privacy laws to
              provide a secure environment for our clients.
            </font>
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <font face="Poppins, sans-serif">
              <b>2. Definitions</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The following definitions are provided to clarify the terms used
              in this Policy:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Personal Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Refers to any information relating to an identified or
                  identifiable natural person. Examples include names,
                  addresses, and account information.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Processing:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Any operation performed on personal data, such as collecting,
                  storing, accessing, altering, retrieving, and erasing data.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Controller:</b>
                </font>
                <font face="Poppins, sans-serif">
                  The entity (instiX Global) responsible for determining the
                  purposes and means of processing personal data.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Processor:</b>
                </font>
                <font face="Poppins, sans-serif">
                  An entity that processes personal data on behalf of instiX
                  Global, such as IT service providers and compliance partners.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Data Subject:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Any individual whose personal data is being processed by
                  instiX Global.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Third Party:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Any entity outside instiX Global with whom personal data may
                  be shared under specific conditions, including regulatory
                  authorities and service providers.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>GDPR (General Data Protection Regulation):</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  A regulation under EU law on data protection and privacy that
                  outlines the lawful processing of personal data.
                </font>
              </p>
            </li>
          </ul>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <font face="Poppins, sans-serif">
              <b>3. Scope of This Policy</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This Privacy Policy applies to all personal data collected,
              processed, and stored by instiX Global in connection with the
              services we provide to HNIs, institutional clients, asset
              managers, family offices, broker-dealers, liquidity providers,
              banks, fund managers, and other financial entities who interact
              with our OTC institutional exchange platform.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The Policy governs all data activities, including those carried
              out through our website, mobile applications, or interactions with
              authorized personnel, contractors, and third-party partners. By
              engaging with instiX Global or using our services, you agree to
              the practices outlined in this Privacy Policy, which is designed
              to meet the highest standards of data protection and
              confidentiality.
            </font>
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <font face="Poppins, sans-serif">
              <b>4. Data Controller and Contact Information</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global acts as the Data Controller, which means we are
              responsible for deciding how and why your personal data is
              processed. Our Data Protection Officer (DPO) oversees compliance
              with this Privacy Policy and GDPR requirements, ensuring the
              privacy and security of all client data. For any inquiries or
              requests regarding your personal data, please contact our DPO :
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Email:</b>
            </font>
            <font face="Poppins, sans-serif">
              privacy@instix.io
              <br />
            </font>
            <font face="Poppins, sans-serif">
              <b>Mail:</b>
            </font>
            <font face="Poppins, sans-serif">
              instiX Global DPO, Warsaw (00-716), at ul. Bartycka 22B suite 21A,
              Poland
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The DPO is dedicated to addressing all questions, concerns, or
              complaints regarding our data practices. In cases where further
              documentation is required for verification (e.g., to access,
              modify, or delete data), we may request additional identification
              to ensure your data is protected.
            </font>
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <font face="Poppins, sans-serif">
              <b>5. Types of Personal Data Collected</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global collects various categories of personal data to
              provide services and meet regulatory obligations. Below, we expand
              on each category of data collected, illustrating their purpose and
              necessity in our operations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.1 Account Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Account data refers to information provided by clients during
              registration and throughout their interactions with our platform.
              This includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Basic Identifiers:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Such as your full name, residential and email address, and
                  telephone number.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Account Credentials:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Secure log-in details, which are encrypted and safeguarded
                  using industry-standard security measures.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Settings and Preferences:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Information on your preferred language, currency settings, and
                  notification preferences.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Account data is essential for verifying client identities,
              managing accounts, and providing a seamless experience on our
              platform. This data helps personalize services, improve security
              measures, and ensure compliance with data protection regulations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.2 Verification and Compliance Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              To meet KYC and AML requirements, we collect various types of
              compliance-related data:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Identity Verification Documents:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Passport, national ID, or other government-issued documents.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Proof of Address:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Such as utility bills, bank statements, or other documents
                  that verify your address.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>PEP Status and Sanctions Screenings:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Checks against politically exposed person lists, sanctions
                  databases, and adverse media sources.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Biometric Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  In cases where identity verification involves biometric
                  elements, such as facial recognition for video identification.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              These measures are crucial for protecting our platform from
              fraudulent activity, ensuring regulatory compliance, and
              maintaining the integrity of our financial services. Enhanced due
              diligence may be conducted for higher-risk clients or those
              involved in large transactions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.3 Financial Information</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Financial data is gathered to facilitate transactions and provide
              services. This includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Bank Account Details:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Such as IBAN or SWIFT codes for processing transfers and
                  withdrawals.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction History:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Records of deposits, withdrawals, and other account
                  activities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Trade Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Specific details of trades executed on our platform, including
                  timestamps, assets traded, and transaction amounts.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              We handle financial data with strict access controls and
              encryption protocols, ensuring that sensitive financial
              information is accessible only to authorized personnel as needed
              for operational purposes.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.4 Technical and Usage Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Technical and usage data provide insights into how clients
              interact with our platform. This includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>IP Addresses and Device Identifiers:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  To identify your device and location for security monitoring.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Browser and Operating System Information:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  For compatibility and performance optimization.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Session Information:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Including login times, pages visited, session duration, and
                  any actions taken within the platform.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Collecting technical data allows us to monitor platform usage,
              identify trends, and detect potentially fraudulent activities. We
              also use this data to improve the platform’s usability and
              efficiency.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.5 Institutional Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Institutional clients, such as corporate accounts, require a
              different level of data collection to comply with financial
              regulations. This data includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Company Registration Information:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Official business registration documents and corporate
                  address.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Authorized Representatives:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Names, positions, and contact information of individuals
                  authorized to act on behalf of the institution.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Ultimate Beneficial Ownership (UBO):</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Information on individuals who own or control a corporate
                  entity, as required by financial regulations.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Institutional data ensures that instiX Global engages only with
              verified and compliant business entities, safeguarding our
              platform from misuse and adhering to legal obligations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.6 Additional Data for Enhanced Due Diligence</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              In certain situations, additional data may be required for
              high-risk accounts or transactions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Source of Funds Documentation:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  To verify the origin of funds in cases where substantial sums
                  or high-risk transactions are involved.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction Purpose Statements:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Descriptions provided by clients regarding the intended
                  purpose of specific high-value transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Supporting Documentation for PEPs:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Documents that further substantiate the legitimacy of
                  transactions for politically exposed individuals.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Enhanced due diligence is conducted in compliance with financial
              regulations to mitigate risks associated with large transactions,
              high-value clients, or politically sensitive individuals.
            </font>
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6. Purpose of Processing and Legal Basis</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global processes personal data in strict adherence to GDPR
              and other applicable data protection laws. Below, we provide a
              more detailed breakdown of the legal bases and purposes for
              processing personal data.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                6.1 For the Performance of Contractual Obligations (Art. 6(1)(b)
                GDPR)
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              To provide our services effectively, processing your personal data
              is necessary for:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Account Management:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Creating and maintaining client accounts, including account
                  verification, log-in functionalities, and user preference
                  settings.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction Processing:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Handling trades, deposits, withdrawals, and other financial
                  transactions as part of our services.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Customer Support:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Providing support for account-related inquiries,
                  troubleshooting, and assistance with using our platform.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Platform Maintenance and Optimization:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Ensuring the availability, functionality, and security of our
                  platform through routine maintenance and technical support.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Processing based on contractual obligations ensures a high
              standard of service, timely transaction handling, and continuous
              access to our platform’s core functions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                6.2 For Compliance with Legal Obligations (Art. 6(1)(c) GDPR)
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global operates under stringent regulatory requirements,
              including KYC, AML, and tax reporting obligations. Data processing
              activities conducted to meet legal obligations include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Client Identity Verification:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Required under financial regulations to confirm clients’
                  identities and assess any associated risks.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Monitoring Transactions for Fraud and AML:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Ensuring transactions comply with financial regulations and
                  detecting unusual patterns indicative of money laundering or
                  fraud.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Reporting to Regulatory Authorities:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Providing reports to financial regulators, tax authorities, or
                  law enforcement in line with statutory requirements.
                </font>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Record Retention:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Maintaining records of all transactions, identity
                  verifications, and compliance measures as legally mandated.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Complying with legal obligations is essential for maintaining the
              integrity of our services and ensuring that instiX Global adheres
              to global financial standards and regulatory frameworks.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6.3 To Protect Legitimate Interests (Art. 6(1)(f) GDPR)</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Processing of personal data is sometimes necessary beyond
              contractual and legal obligations to protect instiX Global’s
              legitimate interests. Examples include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Fraud Prevention:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Regularly monitoring accounts, login activities, and
                  transaction records to identify and prevent unauthorized
                  access, identity theft, and other fraudulent activities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Risk Management:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Analyzing data to evaluate financial, operational, and
                  cybersecurity risks and implementing measures to mitigate such
                  risks.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Customer Experience Enhancement:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Collecting feedback and usage patterns to tailor services,
                  improve user interfaces, and introduce new features to better
                  meet client needs.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Internal Administrative Purposes:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Utilizing data to streamline operations, improve service
                  delivery, and conduct necessary internal audits and quality
                  checks.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Legitimate interests are pursued only when they do not infringe on
              clients’ rights or freedoms and are subject to rigorous internal
              assessments.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6.4 Based on Consent (Art. 6(1)(a) GDPR)</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              For certain activities, we may seek your explicit consent before
              processing your personal data. Consent is specifically sought in
              cases where data processing is not required for the performance of
              a contract or to comply with a legal obligation, including:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Marketing Communications:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Sending newsletters, updates, and promotional materials with
                  your express permission.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Customer Satisfaction Surveys:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Conducting surveys to gather feedback on service quality and
                  platform experience.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Third-Party Data Sharing:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Sharing information with partners when consent is provided,
                  particularly for optional or value-added services.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Consent can be withdrawn at any time without affecting the
              lawfulness of processing activities based on prior consent.
              Clients retain full control over their personal data when consent
              is the lawful basis for processing.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7. Data Collection Sources</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global gathers personal data from a variety of sources to
              provide a secure, compliant, and user-friendly experience on our
              platform. The data collected is integral to maintaining high
              service standards and meeting regulatory obligations, especially
              in areas like KYC (Know Your Customer) and AML (Anti-Money
              Laundering) compliance. We are committed to ensuring that all data
              collected is accurate, relevant, and strictly limited to what is
              necessary for each specific purpose. Below, we outline the
              different data collection sources used by instiX Global:
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.1 Direct Interactions</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Direct interactions form the foundation of the data we collect
              from clients. This information is typically provided during
              account registration, through ongoing communication with customer
              service, or via updates to client profiles. Data collected from
              direct interactions includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Account Registration Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  When clients initially register with instiX Global, they
                  provide essential information, such as full name, date of
                  birth, contact details (email, phone number), and preferred
                  communication language. This data allows us to create a
                  secure, personalized account profile and enables identity
                  verification.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Identity Verification Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  For regulatory compliance, clients may be required to submit
                  government-issued identification, such as a passport or
                  national ID, along with proof of residence (e.g., utility bill
                  or bank statement). This verification data is essential for
                  KYC processes, helping us to confirm identities and mitigate
                  risks associated with fraudulent activities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction-Related Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  During account usage, clients provide details related to
                  transactions, including the transfer of funds, trades, and
                  withdrawals. This data is collected to facilitate secure
                  transaction processing, track trading activity, and provide
                  accurate account statements.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Customer Service Interactions:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Data is collected whenever clients contact our support team
                  for help with account-related inquiries, troubleshooting, or
                  feedback. These interactions may include information provided
                  through emails, calls, live chats, or forms submitted on our
                  platform. Customer service data allows us to address specific
                  client needs and improve service quality.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Direct interactions are the most transparent form of data
              collection, as clients actively provide information. At each step,
              we inform clients about the purpose of collecting specific data
              and obtain consent where necessary. The information gathered
              directly from clients is foundational, ensuring we can tailor our
              services, maintain accurate client records, and uphold a high
              level of security and compliance.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.2 Automated Technologies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              To enhance the functionality and security of our platform, we use
              automated technologies that collect data as clients navigate and
              interact with our website, mobile application, and other digital
              platforms. Automated data collection includes, but is not limited
              to, the following:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Cookies:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Cookies are small data files stored on a client’s device when
                  they visit our website. They help us remember client
                  preferences, session details, and enhance site functionality.
                  Cookies fall into several categories:
                </font>
              </p>
              <ul>
                <li>
                  <p
                    align="justify"
                    style={{ lineHeight: "150%", marginBottom: "0.11in" }}
                  >
                    <font face="Poppins, sans-serif">
                      <b>Essential Cookies:</b>
                    </font>
                    <font face="Poppins, sans-serif">
                      Necessary for the platform's operation, enabling basic
                      functions such as navigation and access to secure areas.
                    </font>
                  </p>
                </li>
                <li>
                  <p
                    align="justify"
                    style={{ lineHeight: "150%", marginBottom: "0.11in" }}
                  >
                    <font face="Poppins, sans-serif">
                      <b>Analytical/Performance Cookies:</b>
                    </font>
                    <font face="Poppins, sans-serif">
                      {" "}
                      Collect anonymous data about site usage, enabling us to
                      analyze and improve the platform's performance.
                    </font>
                  </p>
                </li>
                <li>
                  <p
                    align="justify"
                    style={{ lineHeight: "150%", marginBottom: "0.11in" }}
                  >
                    <font face="Poppins, sans-serif">
                      <b>Functional Cookies:</b>
                    </font>
                    <font face="Poppins, sans-serif">
                      Store client preferences to enhance personalized
                      experiences, such as language and region settings.
                    </font>
                  </p>
                </li>
                <li>
                  <p
                    align="justify"
                    style={{ lineHeight: "150%", marginBottom: "0.11in" }}
                  >
                    <font face="Poppins, sans-serif">
                      <b>Marketing Cookies:</b>
                    </font>
                    <font face="Poppins, sans-serif">
                      Used with client consent to deliver tailored
                      advertisements based on browsing history and interests.
                    </font>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients can manage their cookie preferences through browser
              settings or by adjusting cookie consent options on our website.
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Web Beacons and Pixel Tags:</b>
                </font>
                <font face="Poppins, sans-serif">
                  These are small graphic images or pieces of code placed on our
                  website or in our emails. They work with cookies to monitor
                  client interactions, providing data on how users navigate our
                  site, which content they engage with, and how they respond to
                  promotional emails. This information allows us to assess the
                  effectiveness of marketing efforts, customize client
                  experiences, and improve content relevance.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Device Information:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Automated systems collect technical details about the devices
                  used to access our platform, such as IP addresses, operating
                  systems, device models, and browser types. Collecting device
                  information helps us optimize the user experience across
                  devices, maintain compatibility, and detect potential security
                  threats. For example, recognizing the type of device used
                  allows us to tailor content for mobile versus desktop users.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Session Activity and Navigation Patterns:</b>
                </font>
                <font face="Poppins, sans-serif">
                  As clients move through our platform, we track interactions
                  such as pages visited, time spent on each page, and features
                  used. This data provides insights into platform performance,
                  client preferences, and areas for improvement. For example,
                  tracking session activity enables us to identify high-traffic
                  areas of our website, assess the usability of certain
                  features, and detect anomalies in user behavior that could
                  indicate suspicious activities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Error Tracking and Crash Reports:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Our automated systems detect and log errors or crashes that
                  clients may experience while using the platform. Error
                  tracking helps our technical team address any issues promptly,
                  ensuring a smooth and reliable experience for our clients.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The automated data collected is essential for enhancing service
              quality, streamlining operations, and fortifying platform
              security. We prioritize transparency in our use of automated
              technologies by providing a detailed{" "}
            </font>
            <font face="Poppins, sans-serif">
              Cookie Policy{/* Hyperlink the Cookie Policy */}
            </font>
            <font face="Poppins, sans-serif">
              , allowing clients to understand the purpose of each technology
              and manage their preferences accordingly.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.3 Third-Party Sources</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              In addition to data collected through direct interactions and
              automated technologies, instiX Global may collect personal data
              from reputable third-party sources. This practice ensures
              compliance with legal obligations, facilitates thorough due
              diligence, and enhances data accuracy. Third-party sources
              include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>
                    KYC (Know Your Customer) and AML (Anti-Money Laundering)
                    Providers:
                  </b>
                </font>
                <font face="Poppins, sans-serif">
                  To verify client identities and assess potential risks, we
                  partner with external KYC and AML service providers. These
                  providers conduct background checks, including database
                  searches for PEP (Politically Exposed Person) status,
                  sanctions, and adverse media mentions. Using these trusted
                  providers helps us comply with regulatory requirements,
                  preventing money laundering and financial crime.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Credit Reporting Agencies:</b>
                </font>
                <font face="Poppins, sans-serif">
                  In some cases, we may request credit reports from credit
                  reporting agencies to assess the financial stability of
                  institutional clients, such as HNIs, family offices, and
                  corporate clients. This data provides a clearer picture of
                  financial backgrounds and potential risks associated with
                  extending services or initiating large transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Databases and Public Records:</b>
                </font>
                <font face="Poppins, sans-serif">
                  instiX Global accesses publicly available data sources, such
                  as government registers, business directories, and sanctions
                  lists, to validate client information and ensure compliance
                  with regulations. These sources provide verification for
                  business account details, beneficial ownership data, and, if
                  necessary, the legitimacy of high-value transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Financial Information Services:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  For institutional clients, we may access financial information
                  services that provide business intelligence, risk assessment
                  reports, and financial records. This data supplements our due
                  diligence processes, enabling us to assess financial health,
                  evaluate investment risks, and make informed decisions when
                  engaging with corporate or institutional clients.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Partnership Data:</b>
                </font>
                <font face="Poppins, sans-serif">
                  instiX Global collaborates with a network of institutional
                  partners, such as brokers, asset managers, and other financial
                  service providers, who may share limited client data with us
                  (based on explicit consent or contractual obligation) for
                  purposes such as joint marketing, enhanced service offerings,
                  or verification procedures. Such data sharing is strictly
                  governed by our contractual agreements and complies with all
                  data protection regulations.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Sanctions Screening Providers:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  To comply with international sanctions laws, we use data from
                  sanctions screening providers that offer up-to-date listings
                  of sanctioned individuals, entities, and countries. This data
                  allows us to block or restrict access to our services where
                  required by law, minimizing our exposure to regulatory and
                  financial risks.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By integrating third-party data sources, instiX Global strengthens
              its compliance and risk management framework, ensuring that client
              data is accurate, verifiable, and aligned with industry standards.
              Our approach to third-party data collection emphasizes
              reliability, security, and regulatory compliance, with strict
              protocols to manage and safeguard any information acquired from
              external sources.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.4 Ensuring Data Accuracy and Relevance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Regardless of the source, instiX Global is committed to
              maintaining the accuracy, relevance, and appropriateness of the
              data we collect. We employ the following practices to uphold data
              quality:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regular Data Audits:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Periodic audits of collected data help identify and rectify
                  inaccuracies, ensuring that our records remain current and
                  aligned with clients’ needs. Audits also verify that only
                  necessary data is retained.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Client Verification and Updates:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Clients are encouraged to verify and update their information
                  regularly. Account settings allow clients to modify personal
                  information or notify customer support of any changes, such as
                  a new address or contact details.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Automated Error-Checking Systems:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Our platform incorporates error-checking mechanisms to flag
                  inconsistent or incomplete data entries during registration
                  and throughout the account lifecycle.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Third-Party Verification Services:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  By utilizing third-party verification services, we ensure that
                  data from external sources meets our accuracy and reliability
                  standards. These services conduct independent checks and
                  provide reports on data quality, enhancing the accuracy of
                  client information.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Feedback Loop with Clients:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Through customer support and direct feedback channels, clients
                  can inform us of discrepancies in their data, allowing us to
                  make corrections promptly. This practice is particularly
                  important for maintaining accurate transactional and contact
                  information.
                </font>
              </p>
            </li>
          </ul>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8. Sharing and Transfer of Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global shares and transfers personal data only when
              necessary and always in compliance with applicable regulations,
              ensuring the security and confidentiality of the information. This
              section outlines the circumstances under which personal data may
              be shared within instiX Global, with service providers, and with
              regulatory bodies.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8.1 Internal Data Sharing</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global operates as part of a global network of entities,
              and data may be shared within our organization to facilitate
              services and improve operational efficiency. Internal sharing is
              conducted on a strict need-to-know basis, and all personnel who
              have access to personal data are bound by confidentiality
              agreements and undergo regular data protection training. Data
              sharing within the organization is aimed at:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Enhanced Client Support:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Internal teams can access relevant data to address client
                  inquiries and provide comprehensive support.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Compliance and Risk Management:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Sharing data across departments allows for coordinated
                  compliance checks and enhanced security measures.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Operational Efficiency:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Data is shared among business units to streamline
                  administrative tasks, manage accounts, and ensure consistent
                  service quality.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8.2 Service Providers and Processors</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              To deliver a high standard of service, instiX Global works with
              third-party service providers and processors who perform specific
              functions on our behalf. These providers are carefully selected
              for their reliability and adherence to data protection
              regulations. Service providers are bound by strict data processing
              agreements and are only permitted to use the data for the purposes
              defined by instiX Global. Examples of third-party services
              include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Identity Verification Services:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Third-party KYC (Know Your Customer) providers assist in
                  verifying client identities to meet regulatory standards.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Payment Processors:</b>
                </font>
                <font face="Poppins, sans-serif">
                  To facilitate secure transactions, payment providers handle
                  sensitive financial data and execute payment instructions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Cloud Storage and IT Services:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Trusted providers offer secure storage solutions and maintain
                  the platform infrastructure to ensure continuity of services.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Analytics and Marketing Support:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Service providers may collect and analyze data to help instiX
                  Global optimize services and personalize user experiences,
                  subject to applicable consent requirements.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8.3 Regulatory and Legal Obligations</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global is subject to a range of legal and regulatory
              requirements, and personal data may be disclosed to regulatory
              bodies, law enforcement agencies, and other authorities when
              required by law or in response to lawful requests. Situations that
              may necessitate data disclosure include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Reporting:</b>
                </font>
                <font face="Poppins, sans-serif">
                  As a financial services provider, we may be obligated to
                  report client data to financial authorities or tax agencies in
                  compliance with local and international regulations.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>
                    Anti-Money Laundering (AML) and Counter-Terrorism Financing
                    (CTF) Compliance:
                  </b>
                </font>
                <font face="Poppins, sans-serif">
                  instiX Global collaborates with regulatory bodies to prevent
                  financial crime and may share data for KYC and AML/CTF checks.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Legal Proceedings and Court Orders:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Personal data may be disclosed in connection with litigation,
                  legal proceedings, or other enforcement actions as required by
                  a court or competent authority.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global assesses each request for data disclosure to ensure
              that it meets all legal requirements and is in compliance with
              data protection regulations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8.4 Cross-Border Data Transfers</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global operates in multiple jurisdictions, which may
              involve transferring personal data across borders to countries
              outside the European Economic Area (EEA). When transferring data
              internationally, we adhere to the highest data protection
              standards by implementing appropriate safeguards, such as:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Standard Contractual Clauses (SCCs):</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Approved by the European Commission, SCCs establish data
                  protection commitments with entities in non-EEA countries.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Adequacy Decisions:</b>
                </font>
                <font face="Poppins, sans-serif">
                  For countries that the European Commission has deemed to
                  provide an adequate level of data protection, data transfers
                  can occur seamlessly.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Binding Corporate Rules (BCRs):</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  For internal data transfers, BCRs ensure data protection
                  consistency within instiX Global across different
                  jurisdictions.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              We evaluate the data protection environment in the recipient
              country and take all necessary steps to protect personal data
              during and after transfer.
            </font>
          </p>
          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>9. Retention of Personal Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global retains personal data only as long as necessary for
              the purposes outlined in this Privacy Policy and in compliance
              with legal, regulatory, and operational requirements. Our
              retention periods are determined by several factors:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Contractual and Legal Obligations:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Personal data is retained as long as clients maintain active
                  accounts with instiX Global and for the duration required by
                  applicable laws (e.g., AML regulations may require data
                  retention for a minimum of five years).
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Compliance Requirements:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Records required for regulatory reporting, financial audits,
                  or tax obligations are retained per the legally mandated
                  timeframes, generally between 5 to 10 years.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Client Requests for Deletion:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Upon request, personal data will be deleted or anonymized,
                  provided that it is no longer required for regulatory, legal,
                  or legitimate business purposes.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Once the retention period has expired, instiX Global will securely
              delete or anonymize personal data to prevent unauthorized access
              or use.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>10. Data Security Measures</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global is committed to maintaining the security of personal
              data through comprehensive administrative, technical, and physical
              safeguards. We implement stringent data protection practices to
              safeguard data against unauthorized access, disclosure,
              alteration, or destruction:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Encryption:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Personal data is encrypted both in transit and at rest to
                  protect against interception and unauthorized access.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Access Controls:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Data access is limited to authorized personnel based on their
                  role and responsibilities. Access controls include two-factor
                  authentication (2FA) and unique user identifiers.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regular Security Audits:</b>
                </font>
                <font face="Poppins, sans-serif">
                  instiX Global conducts regular audits and vulnerability
                  assessments to detect and address potential security threats.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Data Minimization and Anonymization:</b>
                </font>
                <font face="Poppins, sans-serif">
                  {" "}
                  Where feasible, personal data is minimized and anonymized to
                  reduce risks associated with data processing.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Incident Response:</b>
                </font>
                <font face="Poppins, sans-serif">
                  A dedicated incident response team is available to address any
                  security breaches, and all incidents are managed per our Data
                  Breach Response Plan.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Through these measures, instiX Global ensures the confidentiality,
              integrity, and availability of all personal data under our care.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11. Data Subject Rights</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global respects the rights of data subjects under GDPR and
              other relevant data protection regulations. Clients have the
              following rights concerning their personal data:
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.1 Right of Access</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              You have the right to request access to the personal data we hold
              about you, including details on the purpose of processing and any
              recipients with whom the data is shared. Requests can be submitted
              through our designated channels, and we will respond within the
              legally required timeframes.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.2 Right to Rectification</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              If you believe the personal data we hold about you is inaccurate
              or incomplete, you have the right to request rectification. instiX
              Global will promptly correct any inaccuracies in your personal
              data upon verification.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.3 Right to Erasure</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              You may request the deletion of your personal data if it is no
              longer necessary for the purposes for which it was collected or if
              you withdraw consent. We will comply with erasure requests unless
              there is an overriding legal or regulatory requirement to retain
              the data.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.4 Right to Restriction of Processing</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Under certain circumstances, you may request that we restrict the
              processing of your personal data. For example, this right may be
              exercised if you contest the accuracy of the data or if the
              processing is unlawful, but you prefer restriction over deletion.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.5 Right to Data Portability</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              You have the right to receive the personal data you provided to us
              in a structured, commonly used, and machine-readable format. Where
              feasible, you may also request that we transfer this data to
              another controller, subject to technical limitations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.6 Right to Object</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              You have the right to object to the processing of your personal
              data where processing is based on legitimate interests or used for
              direct marketing purposes. instiX Global will respect your
              objection unless there are compelling legitimate grounds to
              continue processing.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>11.7 Right to Withdraw Consent</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Where processing is based on consent, you have the right to
              withdraw that consent at any time. Withdrawal of consent does not
              affect the lawfulness of prior processing but may limit the
              services we can offer.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              To exercise any of these rights, please contact our Data
              Protection Officer (DPO) at{" "}
            </font>
            <font face="Poppins, sans-serif">
              <b>privacy@instiX.io</b>
            </font>
            <font face="Poppins, sans-serif">.</font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>12. Automated Decision-Making and Profiling</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global does not engage in automated decision-making or
              profiling that produces legal or similarly significant effects on
              data subjects. Should automated decision-making be introduced in
              the future, we will notify affected individuals and ensure that
              the process complies with GDPR standards.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>13. Cookies and Tracking Technologies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              We use cookies and similar technologies to enhance the
              functionality of our website, understand usage patterns, and
              deliver personalized content. Our Cookie Policy outlines the types
              of cookies we use, including:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Essential Cookies:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Required for website functionality and cannot be disabled.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Performance Cookies:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Used to analyze site usage and improve platform performance.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Functional Cookies:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Enable customized experiences by storing user preferences.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Marketing Cookies:</b>
                </font>
                <font face="Poppins, sans-serif">
                  Used to display relevant advertisements to consenting users.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients can manage their cookie preferences through browser
              settings or our Cookie Consent Manager.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>14. Social Media and Online Presence</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global maintains a presence on social media platforms for
              informational and engagement purposes. When interacting with our
              social media pages, please note that personal data may be
              processed by the platform in accordance with its privacy policies.
              instiX Global is not responsible for data processing by social
              media platforms, but we will protect any information you share
              directly with us via social media.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>15. Policy for Minors</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global’s services are intended for clients who are of legal
              age (18 years or older). We do not knowingly collect personal data
              from minors, and if we become aware of any such data being
              processed, we will take steps to delete it immediately.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>16. International Data Transfers and Compliance Standards</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              When transferring data outside the EEA, instiX Global ensures
              compliance with GDPR by implementing safeguards, such as Standard
              Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), and
              adequacy decisions. These measures are designed to maintain the
              integrity of data transferred to countries with varying data
              protection regulations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>17. Policy Updates</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global reserves the right to update this Privacy Policy
              periodically to reflect changes in our practices or regulatory
              requirements. Significant changes will be communicated to clients
              through notifications on our platform or via email. We encourage
              clients to review this Policy regularly to stay informed about
              data protection at instiX Global.
            </font>
          </p>

          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>18. How to Contact Us</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              For questions, concerns, or requests related to this Privacy
              Policy, please contact our Data Protection Officer (DPO) at:
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Email:</b>
            </font>
            <font face="Poppins, sans-serif">
              privacy@instix.io
              <br />
            </font>
            <font face="Poppins, sans-serif">
              <b>Mail:</b>
            </font>
            <font face="Poppins, sans-serif">
              instiX Global DPO, Warsaw (00-716), at ul. Bartycka 22B suite 21A,
              Poland
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The DPO is responsible for overseeing our compliance with data
              protection laws and ensuring the privacy rights of our clients.
            </font>
          </p>

          <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
            <br />
            <br />
          </p>
        </>
      </div>
    </>
  );
};

export default privacypolicy;
