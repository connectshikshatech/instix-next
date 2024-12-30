import React from "react";
import Head from "next/head";

export async function getStaticProps() {
  const seoData = {
    title: "InstiX - Terms and Conditions",
    description: "Learn more about us.",
  };

  return {
    props: {
      seoData,
    },
  };
}

const termsAndCondition = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Head>
      <div className="max-w-7xl mx-auto px-4 lg:pt-[8rem] py-[2.75rem]">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t@page { size: 8.27in 11.69in; margin: 0.33in }\n\t\tp { line-height: 115%; text-align: left; orphans: 2; widows: 2; margin-bottom: 0.1in; direction: ltr; background: transparent }\n\t\tstrong { font-weight: bold }\n\t",
          }}
        />
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            textAlign: "center",
            marginBottom: "0.11in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={5} style={{ fontSize: "18pt" }}>
              <b>instiX Global Platform Terms and Conditions</b>
            </font>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>Effective Date:</b>
          </font>
          <font face="Poppins, sans-serif"> 02.11.2024</font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>Welcome to instiX Global !</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            instiX Global provides over-the-counter (OTC) trading services for
            virtual assets, operated under strict compliance with applicable
            legal and regulatory standards as an authorized Virtual Asset
            Service Provider (VASP) in Poland. These Terms and Conditions
            ("Agreement") constitute a binding legal contract between you, the
            Client ("you" or "Client"), and Instix Global , a company registered
            and licensed in Poland with a principal business address at ul.
            Bartycka 22B, suite 21A, Warsaw, 00-716, Poland ("instiX Global ,"
            "we," "us," or "our"). By creating an account, accessing, or using
            the instiX Global website, mobile applications, or any other
            interfaces (collectively, the "Platform"), you acknowledge that you
            have read, understood, and agree to comply with the terms of this
            Agreement.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1. Introduction</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.1 Structure and Scope of the Agreement</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            This Agreement establishes the terms and conditions that govern your
            use of the Instix Global Platform, including OTC trading services,
            digital wallets, and related functionalities (collectively, the
            "Services"). The Agreement is divided into sections that outline the
            general terms, conditions, and applicable policies, each of which
            forms part of the legally binding relationship between you and
            Instix Global.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">This Agreement consists of:</font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(i) </font>
              <font face="Poppins, sans-serif">
                <b>General Terms and Conditions</b>
              </font>
              <font face="Poppins, sans-serif">
                : Governing your access to the Platform, registration, account
                management, and the use of the Services.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(ii) </font>
              <font face="Poppins, sans-serif">
                <b>Service-Specific Schedules</b>
              </font>
              <font face="Poppins, sans-serif">
                : Detailing any additional conditions that apply to specified
                Services (e.g., OTC trading).
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(iii) </font>
              <font face="Poppins, sans-serif">
                <b>instiX Global </b>
              </font>
              <font face="Poppins, sans-serif">
                <span lang="en-US">
                  <b></b>
                </span>
              </font>
              <font face="Poppins, sans-serif">
                <b>Policies</b>
              </font>
              <font face="Poppins, sans-serif">: Including our </font>
              <font face="Poppins, sans-serif">
                <b>Privacy Policy</b>
              </font>
              <font face="Poppins, sans-serif">, </font>
              <font face="Poppins, sans-serif">
                <b>AML &amp; Compliance Policy</b>
              </font>
              <font face="Poppins, sans-serif">, and </font>
              <font face="Poppins, sans-serif">
                <b>OTC Trading FAQs</b>
              </font>
              <font face="Poppins, sans-serif">.</font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(iv) </font>
              <font face="Poppins, sans-serif">
                <b>Additional Documentation</b>
              </font>
              <font face="Poppins, sans-serif">
                : Incorporated by reference, including relevant disclosures, fee
                schedules, and compliance statements.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "115%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.2 Contracting Entity</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">instiX Global </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US"></span>
          </font>
          <font face="Poppins, sans-serif">
            operates as an authorized Virtual Asset Service Provider in Poland,
            under registration with the relevant regulatory authorities. For
            Clients residing or incorporated in Poland or any jurisdiction where
            Instix Global holds authorization, this Agreement is entered
            directly with Instix Global, headquartered in Warsaw, Poland.
            Clients in other jurisdictions are subject to additional terms as
            outlined in relevant regulatory guidelines.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.3 Acceptance of Agreement</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            By signing up for an account, accessing, or using the Services
            provided by Instix Global, you acknowledge and agree that:
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (a) You have read, understood, and accept all terms in this
                Agreement, including all referenced policies and applicable
                schedules.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) You are legally capable of entering into this Agreement
                under the laws of your jurisdiction.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (c) You will be bound by and comply with these terms, as well as
                any updates or modifications made by Instix Global.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>Important:</b>
          </font>
          <font face="Poppins, sans-serif">
            If you do not agree with any part of this Agreement, you must
            discontinue your use of the Platform and Services immediately.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.4 Changes and Updates to the Agreement</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            instiX Global reserves the right to modify, update, or amend any
            part of this Agreement, including the General Terms,
            Service-Specific Schedules, and Policies, at its discretion. Changes
            will become effective upon posting to the Platform or on the
            Effective Date specified. Instix Global will provide notice of any
            material changes, but it remains your responsibility to review the
            Agreement periodically. By continuing to use the Platform following
            any changes, you agree to the amended terms.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.5 Governing Services and Scope of Use</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">This Agreement applies to:</font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(i) Your use of the </font>
              <font face="Poppins, sans-serif">
                <b>OTC Trading Service</b>
              </font>
              <font face="Poppins, sans-serif">
                provided on the Platform, including price quotes, order
                submissions, and transactions involving virtual assets.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (ii) Your access to and use of
              </font>
              <font face="Poppins, sans-serif">
                <b>Digital Wallet Services</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                for supported assets on the Platform.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (iii) Any additional services, products, or functionalities
                Instix Global may offer from time to time through the Platform.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">The</font>
          <font face="Poppins, sans-serif">
            <b>OTC Agreement</b>
          </font>
          <font face="Poppins, sans-serif">and </font>
          <font face="Poppins, sans-serif">
            <b>Client Agreement</b>
          </font>
          <font face="Poppins, sans-serif">
            specifically govern the OTC Desk provided by instiX Global . These
            agreements become effective upon your registration for an account
            and your continued use of the OTC Trading Service. The Platform
            offers continuous services, which remain in effect until terminated
            by either party under the conditions outlined in this Agreement.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.6 Priority and Conflicting Terms</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            In the event of a conflict or inconsistency between different
            sections of this Agreement, the following order of precedence shall
            apply:
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (a) General Terms, followed by the Service-Specific Schedules;
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Instix Global C Policies, including the Privacy Policy,
                Cookie Policy and Risk Disclosure Statement;
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (c) Any additional terms explicitly agreed upon between the
                Client and Instix Global .
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.7 Use of Instant Messaging Applications</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            Instix Global shall facilitate order communication exclusively
            through designated on-platform communication channels, including
            official chatbots and chat boxes integrated within the Instix Global
            platform ("Platform Communication"). For escalations or issues
            requiring further resolution, communication will proceed via the
            official email method post-platform chat interaction.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            By utilizing these Platform Communication channels, you agree to:
          </font>
        </p>
        <ol>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Verified Account Requirement</b>
              </font>
              <font face="Poppins, sans-serif">
                : Orders may only be conducted through accounts verified
                according to Instix Global's standards. Instix Global mandates
                email authentication and other necessary user verification
                information before accepting orders through any messaging
                service, including Telegram.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Third-Party Communication Risk Disclaimer</b>
              </font>
              <font face="Poppins, sans-serif">
                : Instix Global acknowledges the potential use of third-party
                applications, such as Telegram, but strongly emphasizes that
                these platforms inherently carry security and operational risks,
                including but not limited to delays, errors, or vulnerabilities.
                As such, Instix Global disclaims liability for any incidents
                related to these platforms.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Exclusive Platform Communication Commitment</b>
              </font>
              <font face="Poppins, sans-serif">
                : Instix Global will exclusively support communication through
                on-platform chat features. If additional communication methods,
                such as third-party applications, are introduced or updated,
                users will receive advance notice via the platform interface or
                a formal press release.
              </font>
            </p>
          </li>
        </ol>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            By using these communication channels, you agree to:
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (i) Provide and maintain accurate, verified contact information
                for messaging purposes.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (ii) Follow the specified security protocols, including
                two-factor authentication (2FA), for accessing the OTC Desk.
              </font>
            </p>
          </li>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    (iii) Please be advised that if you choose to communicate
                    with Instix Global via an agent or any third-party
                    application, such communication may not be considered
                    official. instiX Global endorses and conducts official
                    communications exclusively through its on-platform chatbot
                    and email channels.
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    (iv) Engaging through third-party applications or agents is
                    at your own risk and discretion. instiX Global disclaims any
                    responsibility for issues arising from unofficial channels,
                    including potential delays, inaccuracies, or security risks.
                    We strongly recommend utilizing only our verified
                    on-platform chatbot and email for secure and reliable
                    communication.
                  </font>
                </font>
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>1.8 Service Availability and Limitations</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            Instix Global operates its Services in multiple jurisdictions;
            however, access may be restricted in certain regions or based on
            legal and regulatory requirements. The availability of specific
            services, features, or functionalities may vary based on geographic
            location and applicable legal constraints.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            THIS IS AN IMPORTANT DOCUMENT. PLEASE READ IT CAREFULLY AND KEEP IT
            FOR FUTURE REFERENCE.{" "}
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            This document contains important information which applies to your
            dealing with us in relation to over-the-counter (OTC) trading
            conducted via the OTC System Portal. You should read this document
            carefully and keep it for future reference. In addition to general
            risks about digital assets, there are certain additional risks that
            apply to OTC trading. Those additional risks are described in Risk
            Clause of this document. Please ensure you read and understand all
            the risks disclosed in this document, including the specific risks
            described in Terms and Conditions and Risk Disclosure. You must
            consider these risks carefully, as well as all other applicable
            risks, and decide if the risks are acceptable to you. You should
            consider seeking professional advice before conducting any OTC
            trading. This document and other terms that apply to your activities
            may change from time to time. You should check our website for the
            latest terms and additional information before you enter into any
            new transaction.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2. Definitions</b>
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            In this Agreement, unless expressly stated otherwise, the following
            terms shall have the meanings assigned below. Capitalized terms used
            herein but not defined shall have the meanings set forth in any
            referenced policies or schedules.
          </font>
        </p>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.1 Account</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Account</b>
              </font>
              <font face="Poppins, sans-serif">
                means the registered profile created by the Client on the Instix
                Global Platform, providing access to Services such as OTC
                trading, Virtual Asset storage, and other Platform features.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) The Account must be maintained in good standing, and Clients
                are required to comply with all security and verification
                procedures as specified by Instix Global.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.2 Affiliate</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Affiliate</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to any entity that directly or indirectly controls, is
                controlled by, or is under common control with Instix Global,
                including subsidiaries, parent companies, and other related
                entities.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.3 Agreed Communication Method</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Agreed Communication Method</b>
              </font>
              <font face="Poppins, sans-serif">
                includes any method approved by Instix Global for secure Client
                communication, including but not limited to in-platform
                messaging, email, and secure instant messaging applications such
                as Telegram.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.4 AML/CTF Compliance</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>AML/CTF Compliance</b>
              </font>
              <font face="Poppins, sans-serif">
                denotes measures and policies enacted by Instix Global to
                prevent money laundering and terrorism financing, adhering to
                all applicable legal and regulatory standards.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.5 Applicable Fees</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Applicable Fees</b>
              </font>
              <font face="Poppins, sans-serif">
                include all fees, charges, and commissions associated with the
                use of Services on the Platform, as detailed in the OTC Trading
                FAQs or otherwise communicated by Instix Global. Fees may vary
                and are subject to periodic adjustments.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.6 Applicable Law</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Applicable Law</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to any laws, regulations, statutes, or guidelines
                applicable to the Client, Instix Global, or the Services
                provided on the Platform, including those issued by regulatory
                authorities with jurisdiction over the Services.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.7 Available Assets</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Available Assets</b>
              </font>
              <font face="Poppins, sans-serif">
                means the amount of Supported Virtual Assets that are maintained
                in the Client’s Virtual Wallet and are available for use in
                transactions on the Platform.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.8 Available Asset Requirement</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Available Asset Requirement</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to the minimum balance of Supported Virtual Assets that
                the Client is required to maintain in their Virtual Wallet to
                meet eligibility conditions for certain transactions.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.9 Client Code of Conduct</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Client Code of Conduct</b>
              </font>
              <font face="Poppins, sans-serif">
                encompasses behavioral and ethical standards established by
                Instix Global, which Clients must adhere to while interacting on
                the Platform or engaging in transactions, as detailed in
                Schedule 1 of this Agreement.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.10 Client Agreement</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Client Agreement</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                is the binding contract between Instix Global and the Client,
                which, together with the OTC Agreement, governs the Client’s use
                of the Services.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) The Client Agreement becomes effective upon Client
                registration and the Client's acceptance of these Terms.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.11 Confidential Information</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Confidential Information</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                includes any non-public information disclosed by one Party to
                the other under this Agreement, including but not limited to
                trade secrets, business strategies, pricing models, and other
                proprietary data.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Confidential Information shall not include information that
                is publicly available or independently developed without
                reference to such disclosed information.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.12 Virtual Assets</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Virtual Assets</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                refers to any blockchain-based or cryptographic asset, including
                cryptocurrencies, tokens, and other digital representations of
                value, that may be transacted on the instiX Global Platform
                under the OTC Trading Service.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Virtual Assets are subject to market risks, and their value
                may fluctuate based on market conditions.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.13 Virtual Wallet</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Virtual Wallet</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                is a secure digital storage feature provided by Instix Global
                where Supported Virtual Assets may be held for transactions,
                deposits, and withdrawals.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) The Client is responsible for maintaining the security of
                their Virtual Wallet, including compliance with two-factor
                authentication and other security measures.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.14 Fiat Currency</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Fiat Currency</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                means government-issued currency recognized as legal tender and
                supported by Instix Global for transactions or deposits on the
                Platform.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Transactions involving Fiat Currency may be subject to
                additional requirements, as detailed in the OTC Trading FAQs.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.15 Force Majeure Event</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Force Majeure Event</b>
              </font>
              <font face="Poppins, sans-serif">
                includes any unforeseen event that impacts Instix Global’s
                ability to deliver Services, such as natural disasters,
                regulatory actions, cyber-attacks, telecommunications failures,
                or other uncontrollable disruptions.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) During a Force Majeure Event, Instix Global may suspend or
                modify Services as necessary.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.16 instiX Global OTC Trading Desk (OTC Desk)</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>instiX Global OTC Trading Desk (OTC Desk)</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to the over-the-counter (OTC) service provided by Instix
                Global, allowing Clients to trade Virtual Assets directly with
                instiX Global rather than through a public exchange.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) OTC Desk transactions are governed by the terms specified in
                the OTC Agreement and OTC Trading FAQs.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.17 KYC (Know Your Customer)</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>KYC (Know Your Customer)</b>
              </font>
              <font face="Poppins, sans-serif">
                represents the verification process undertaken by instiX Global
                to authenticate Client identities, prevent fraud, and ensure
                regulatory compliance.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Clients are required to complete the KYC process and update
                their information as necessary to continue using the Services.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.18 Minimum Trading Limit</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Minimum Trading Limit</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                means the smallest allowable transaction amount per{" "}
              </font>
              <font face="Poppins, sans-serif">
                <span lang="en-US">Request for </span>
              </font>
              <font face="Poppins, sans-serif">Quote </font>
              <font face="Poppins, sans-serif">
                <span lang="en-US">(RFQ) and Request for Stream (RFS) </span>
              </font>
              <font face="Poppins, sans-serif">
                under the OTC Trading Service.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Minimum limits are defined in the OTC Trading FAQs and may
                be adjusted by instiX Global as market conditions change.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.19 Non-Cooperative Jurisdiction</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Non-Cooperative Jurisdiction</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to any country or territory identified by international
                bodies, such as the Financial Action Task Force (FATF), as
                non-compliant with anti-money laundering and counter-terrorism
                financing standards.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.20 Order</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Order</b>
              </font>
              <font face="Poppins, sans-serif">
                is any request submitted by the Client to initiate a transaction
                on the OTC Trading Desk, including Quote Requests, purchase
                orders, and similar instructions.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Orders are executed based on real-time Quotes and are
                subject to verification by instiX Global .
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.21 Order Confirmation</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Order Confirmation</b>
              </font>
              <font face="Poppins, sans-serif">
                is a written or electronic notification provided to the Client,
                confirming the details of an executed transaction, including
                date, time, and Virtual Asset type.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.22 OTC (Over-the-Counter)</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>OTC (Over-the-Counter)</b>
              </font>
              <font face="Poppins, sans-serif">
                describes a type of trading where transactions in Virtual Assets
                are conducted directly between the Client and Instix Global,
                rather than through a centralized public exchange.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) OTC transactions offer enhanced privacy but may carry unique
                risks as outlined in the Risk Disclosure Statement.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.23 OTC Agreement</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>OTC Agreement</b>
              </font>
              <font face="Poppins, sans-serif">
                is the specific agreement governing the terms of the OTC Trading
                Desk provided by Instix Global. Together with the Client
                Agreement, it forms the comprehensive contract for accessing the
                OTC Trading Service.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.24 OTC Trading FAQs</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>OTC Trading FAQs</b>
              </font>
              <font face="Poppins, sans-serif">
                is a document that provides specific rules, transaction limits,
                fees, and additional terms associated with the OTC Trading
                Service.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.25 OTC Trading Order</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>OTC Trading Order</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to a transaction instruction placed by the Client to buy
                or sell a specified Virtual Asset via the OTC Trading Service.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.26 Platform</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Platform</b>
              </font>
              <font face="Poppins, sans-serif">
                means the Instix Global website, mobile applications, and all
                associated digital interfaces used to provide OTC Trading
                Services, Virtual Wallet access, and other functionalities.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.27 Privacy Policy</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Privacy Policy</b>
              </font>
              <font face="Poppins, sans-serif">
                describes Instix Global’s practices regarding the collection,
                use, storage, and sharing of Client personal data in compliance
                with applicable privacy regulations.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.28 Product Documentation</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Product Documentation</b>
              </font>
              <font face="Poppins, sans-serif">
                includes additional technical specifications, usage guidelines,
                and operational requirements for each product or service offered
                on the Platform.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.29 Quote</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Quote</b>
              </font>
              <font face="Poppins, sans-serif">
                is a price offer provided by instiX Global for a specific
                Virtual Asset transaction. Quotes are valid for a limited time
                and may fluctuate with market conditions.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.30 Request</b>
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">
              <b>for </b>
            </span>
          </font>
          <font face="Poppins, sans-serif">
            <b>Quote</b>
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">
              <b>(RFQ) and Request for Stream (RFS)</b>
            </span>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Request</b>
              </font>
              <font face="Poppins, sans-serif">
                <span lang="en-US">
                  <b>for </b>
                </span>
              </font>
              <font face="Poppins, sans-serif">
                <b>Quote</b>
              </font>
              <font face="Poppins, sans-serif">
                <span lang="en-US">
                  <b>(RFQ) and Request for Stream (RFS)</b>
                </span>
              </font>
              <font face="Poppins, sans-serif">
                is a Client-initiated request to receive a Quote for the
                purchase or sale of a Virtual Asset through the OTC Trading
                Service.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.31 Risk Disclosure Statement</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Risk Disclosure Statement</b>
              </font>
              <font face="Poppins, sans-serif">
                is a notice provided by Instix Global, informing Clients of the
                risks involved in OTC trading, including market volatility and
                potential non-transferability of certain Virtual Assets.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.32 Service-Specific Schedules</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Service-Specific Schedules</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to any additional schedules within this Agreement that
                outline the specific terms, conditions, and limitations
                applicable to individual Services offered by instiX Global .
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.33 Settlement</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">(a) </font>
              <font face="Poppins, sans-serif">
                <b>Settlement</b>
              </font>
              <font face="Poppins, sans-serif">
                denotes the process by which a transaction is completed,
                including the transfer of assets and transaction confirmation as
                outlined in the OTC Trading FAQs.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                (b) Settlement terms may vary depending on the type of Virtual
                Asset and market conditions.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.34 Supported Virtual Assets</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Supported Virtual Assets</b>
              </font>
              <font face="Poppins, sans-serif">
                are Virtual Assets approved by instiX Global for use within the
                Virtual Wallet and accessible for transactions under the OTC
                Trading Service.(
              </font>
              <font face="Poppins, sans-serif">
                <span lang="en-US">
                  List of approved virtual assets is provided under FAQ
                  section.)
                </span>
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.35 Transaction</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.11in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Transaction</b>
              </font>
              <font face="Poppins, sans-serif">
                includes any buying or selling activity involving Virtual Assets
                that is executed under the OTC Trading Service following a
                Client-initiated Order on the Platform.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{ lineHeight: "150%", marginBottom: "0.11in" }}
        >
          <font face="Poppins, sans-serif">
            <b>2.36 Two-Factor Authentication (2 FA)</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0.19in",
              }}
            >
              <font face="Poppins, sans-serif">
                (2FA) is a security process that requires Clients to verify
                their identity by providing two different authentication
                factors, such as a password and a one-time code, to access their
                Account or confirm transactions.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>2.37 Virtual Asset Service Provider (VASP)</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0.19in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>Virtual Asset Service Provider (VASP)</b>
              </font>
              <font face="Poppins, sans-serif">
                refers to Instix Global’s designation as an authorized provider
                of services involving the transfer, custody, and management of
                Virtual Assets, in compliance with regulatory standards.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>Clause 3: Risk Disclosure</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            This Risk Disclosure is an essential component of instiX Global
            Terms and Conditions. It details substantial risks associated with
            virtual asset transactions and outlines client responsibilities. By
            accessing and using instiX Global{" "}
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US"></span>
          </font>
          <font face="Poppins, sans-serif">
            ’s platform, you acknowledge and accept these risks, including those
            related to market volatility, technological challenges, legal and
            regulatory obligations, cybersecurity, forfeiture scenarios, and
            third-party custodial services.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.1 Virtual Asset Transfers and Volatility</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.1.1 </font>
          <font face="Poppins, sans-serif">
            <b>Technical Knowledge Requirement</b>
          </font>
          <font face="Poppins, sans-serif">
            : Engaging with virtual assets necessitates an advanced
            understanding of digital technology, applied cryptography, and
            blockchain protocols. Virtual assets often involve highly technical
            descriptions and functionalities that require specialized knowledge
            to comprehend fully. instiX Global ’s listing of a virtual asset
            does not imply endorsement, guarantee, or verification of the
            asset’s underlying technology or reliability. Clients are
            responsible for independently understanding the risks and
            complexities specific to each asset. instiX Global assumes no
            fiduciary responsibility regarding the suitability or technological
            soundness of virtual assets listed on our platform.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.1.2 </font>
          <font face="Poppins, sans-serif">
            <b>High-Risk and Volatile Nature of Virtual Assets</b>
          </font>
          <font face="Poppins, sans-serif">
            : The value of virtual assets can fluctuate sharply due to factors
            beyond instiX Global ’s control, such as global regulatory
            announcements, market sentiment, technological failures, and
            speculative trading. Virtual assets are inherently speculative,
            lacking traditional valuation metrics, making them prone to rapid
            price changes over short timeframes. Clients with limited trading
            experience or low risk tolerance are advised against engaging in
            active trading on this platform. Clients should only trade with
            funds they are prepared to lose, as market volatility may result in
            sudden and complete loss of asset value.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.1.3 </font>
          <font face="Poppins, sans-serif">
            <b>Irreversibility of Transactions</b>
          </font>
          <font face="Poppins, sans-serif">
            : Blockchain-based transactions are generally final and cannot be
            reversed. Clients are solely responsible for ensuring the accuracy
            of all transaction details, including destination wallet addresses
            and transfer amounts. Any inaccuracies, such as incorrect addresses
            or erroneous amounts, can result in permanent asset loss, as Instix
            Global cannot retrieve or cancel confirmed blockchain transactions.
            The inherent immutability of blockchain technology underscores the
            importance of caution and precision when engaging in virtual asset
            transactions.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.2 No Advice and No Reliance on instiX Global </b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.2.1 </font>
          <font face="Poppins, sans-serif">
            <b>Non-Advisory Relationship</b>
          </font>
          <font face="Poppins, sans-serif">
            : Instix Global does not operate as a financial advisor, broker,
            intermediary, or fiduciary. We do not provide guidance or
            recommendations regarding specific assets, investment strategies, or
            transaction timing, nor do we assess the suitability of virtual
            assets for individual clients. Instix Global ’s role is limited to
            providing a platform for client-initiated transactions, without
            offering financial, legal, or tax advice or directing clients toward
            particular assets or strategies.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.2.2 </font>
          <font face="Poppins, sans-serif">
            <b>Independent Responsibility for Transactions</b>
          </font>
          <font face="Poppins, sans-serif">
            : All trading decisions are made solely at the client’s discretion.
            Clients are expected to perform independent evaluations of the risks
            associated with virtual assets and seek external professional advice
            as necessary. Instix Global’s platform should not be used as a
            substitute for due diligence, and clients agree not to rely on any
            communication or representation from instiX Global as a basis for
            trading decisions.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.3 Supply and Value of Virtual Assets</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.3.1 </font>
          <font face="Poppins, sans-serif">
            <b>Market-Dependent Value</b>
          </font>
          <font face="Poppins, sans-serif">
            : The value of virtual assets is largely contingent upon ongoing
            demand within the market. Without a centralized entity to stabilize
            or support prices, virtual asset markets can be volatile, and loss
            of investor interest or market shifts may lead to devaluation or
            total loss of an asset’s worth. Clients should be aware of the
            speculative nature of virtual assets and the real possibility of
            losing the entire value of their investment. Market-driven forces,
            rather than inherent economic value, typically influence asset
            prices in this space.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.3.2 </font>
          <font face="Poppins, sans-serif">
            <b>Jurisdictional Availability</b>
          </font>
          <font face="Poppins, sans-serif">
            : Virtual assets and instiX Global ’s services may be subject to
            jurisdictional restrictions or regulatory limitations. Access to
            certain virtual assets may be restricted based on location, and
            local laws may impact the legality of transacting in virtual assets.
            Clients are responsible for ensuring compliance with all applicable
            local, national, and international laws and regulations governing
            virtual assets.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.4 Operational and Technological Risks</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.4.1 </font>
          <font face="Poppins, sans-serif">
            <b>Third-Party Protocols and Software Dependencies</b>
          </font>
          <font face="Poppins, sans-serif">
            : Virtual assets operate on decentralized protocols often maintained
            by third parties or open-source communities. Consequently, instiX
            Global does not have control over the operational integrity,
            development, or future changes of these protocols. Modifications to
            a protocol or technological failures within the underlying software
            may affect the functionality, accessibility, and value of virtual
            assets held by clients. Clients must be aware that such changes can
            occur without notice and may lead to unforeseen disruptions or
            losses.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.4.2 </font>
          <font face="Poppins, sans-serif">
            <b>Service Disruptions</b>
          </font>
          <font face="Poppins, sans-serif">
            : Instix Global’s platform, while designed for reliability, is not
            immune to interruptions caused by external threats such as
            sophisticated cyberattacks, unexpected increases in user activity,
            and other operational or technical challenges. Such disruptions may
            delay or impede the execution of transactions and access to assets.
            Instix Global is not liable for losses arising from temporary or
            prolonged service outages.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.4.3 </font>
          <font face="Poppins, sans-serif">
            <b>Infrastructure Dependencies</b>
          </font>
          <font face="Poppins, sans-serif">
            : The functionality and access to virtual assets depend on essential
            infrastructure such as electricity, internet connectivity, and
            secure hardware. Interruptions in any of these areas can directly
            impact a client’s ability to manage or access their virtual assets.
            Clients must ensure their hardware and software are secure and
            operational to maintain consistent access to their assets.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.5 Cybersecurity and Privacy Risks</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.5.1 </font>
          <font face="Poppins, sans-serif">
            <b>Cybersecurity Threats</b>
          </font>
          <font face="Poppins, sans-serif">
            : The decentralized and digital nature of virtual assets makes them
            attractive targets for cybercriminals. Clients may face risks from
            malware, phishing, ransomware, and other cyberattacks. It is
            essential to implement personal security measures, including secure
            storage of private keys, two-factor authentication, and caution with
            online interactions. instiX Global encourages clients to utilize
            robust cybersecurity practices to protect against unauthorized
            access to their accounts and assets.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.5.2 </font>
          <font face="Poppins, sans-serif">
            <b>Privacy Risks</b>
          </font>
          <font face="Poppins, sans-serif">
            : Although blockchain transactions are pseudonymous, they are public
            and traceable. Clients should be aware that their transaction
            histories may be accessible to third parties and, through certain
            analytical techniques, could potentially be linked to personal
            identities. External entities, such as exchanges and regulators, may
            request or require personal information, potentially impacting the
            privacy of clients.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.5.3 </font>
          <font face="Poppins, sans-serif">
            <b>Responsibility for Private Key Security</b>
          </font>
          <font face="Poppins, sans-serif">
            : Control of a virtual asset relies on possession of the
            corresponding private key. Clients are solely responsible for
            securing their private keys. Loss or exposure of a private key may
            result in irreversible asset loss, as there are no means to recover
            compromised keys. instiX Global does not have access to or control
            over private keys and cannot assist in their recovery.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.5.4 </font>
          <font face="Poppins, sans-serif">
            <b>Third-Party Custodial Risks</b>
          </font>
          <font face="Poppins, sans-serif">
            : Clients who use third-party custodial services for their virtual
            assets may face additional security and operational risks, as
            custodians may encounter technical, regulatory, or financial
            difficulties. instiX Global is not responsible for losses resulting
            from third-party custodial failures and recommends that clients
            carefully select reputable service providers.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.6 Blacklisted Addresses and Forfeited Assets</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.6.1 </font>
          <font face="Poppins, sans-serif">
            <b>Blacklist and Freezing of Assets</b>
          </font>
          <font face="Poppins, sans-serif">
            : Instix Global reserves the right to "blacklist" addresses
            associated with illegal or prohibited activities, as determined at
            our discretion. Assets connected to blacklisted addresses may be
            frozen temporarily or permanently, and accounts associated with
            these addresses may be terminated. This measure aims to protect our
            platform and ensure compliance with regulatory standards.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">3.6.2 </font>
          <font face="Poppins, sans-serif">
            <b>Reporting and Compliance with Law Enforcement</b>
          </font>
          <font face="Poppins, sans-serif">
            : instiX Global may report suspected illegal activities to law
            enforcement or relevant regulatory bodies. In such cases, clients
            may forfeit any rights to their assets, including redemption or
            exchange privileges. If directed by legal or regulatory authorities,
            instiX Global may freeze assets held in an account pending
            investigation or legal proceedings.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.7 No Deposit Protection</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            Funds and virtual assets held in instiX Global accounts, including
            assets associated with futures contracts, fiat currencies, or
            E-Money, are not eligible for public or private deposit insurance.
            In the event of platform failure or asset devaluation, clients bear
            the full risk of loss, as instiX Global does not provide guarantees
            for asset protection or recovery.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>3.8 Acknowledgment and Acceptance of Risks</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            By using instiX Global ’s platform, clients acknowledge and confirm
            their acceptance of the following terms:
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>Risk Awareness</b>
              </font>
              <font face="Poppins, sans-serif">
                : Clients affirm that they have thoroughly read, understood, and
                accepted the risks involved in virtual asset transactions.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Independent Decision-Making</b>
              </font>
              <font face="Poppins, sans-serif">
                : Clients agree that all trading decisions are based solely on
                their judgment and that instiX Global provides no advisory or
                fiduciary support.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Jurisdictional Compliance</b>
              </font>
              <font face="Poppins, sans-serif">
                : Clients are responsible for ensuring compliance with relevant
                laws and accept any consequences arising from non-compliance,
                including tax obligations or regulatory requirements.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            This Risk Disclosure Clause serves to inform clients of the
            substantial and unique risks inherent in virtual asset transactions
            facilitated through instiX Global . We strongly encourage clients to
            carefully consider their risk tolerance and consult professional
            advisors as needed before engaging in virtual asset trading.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>Clause 4: Qualification and Classification</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.1 </font>
          <font face="Poppins, sans-serif">
            <b>Eligibility Requirements for Account and Services Access</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            To open an account and access instiX Global ’s services, including
            but not limited to our OTC Desk, all clients (referred to as “you”
            or “the Client”) must meet specific qualification and classification
            criteria. This includes eligibility standards defined by instiX
            Global , as well as compliance with applicable laws. By using our
            services, you represent and warrant that you fulfill the following
            requirements and will continue to meet them during your use of our
            platform and services. instiX Global reserves the right to alter or
            update these criteria at its discretion.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.1.1 </font>
          <font face="Poppins, sans-serif">
            <b>General Eligibility Criteria</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>Individuals</b>
              </font>
              <font face="Poppins, sans-serif">
                : If you are an individual, you must be at least 18 years old or
                the legal age of majority in your jurisdiction (whichever is
                higher). Additionally, you must have the legal capacity to enter
                into these Terms and assume responsibility for compliance with
                them.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Entities</b>
              </font>
              <font face="Poppins, sans-serif">
                : If you are acting on behalf of a legal entity, you must be
                duly authorized to do so. The entity must be properly organized,
                validly existing, and compliant with the laws of its
                jurisdiction. You must not have been previously suspended or
                restricted from accessing services similar to those offered by
                instiX Global .
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.1.2 </font>
          <font face="Poppins, sans-serif">
            <b>Residence and Sanctions</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                You are not located in, under the control of, or resident in a
                restricted or sanctioned jurisdiction, which includes but is not
                limited to: Crimea, Cuba, Donetsk, Iran, Luhansk, North Korea,
                Russia, Belarus, Syria, or any other jurisdiction where instiX
                Global services may be limited or restricted by law.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                Neither you (if an individual) nor any beneficial owner of the
                entity (if applicable) are on the Office of Foreign Assets
                Control of the U.S. Department of Treasury’s Specially
                Designated Nationals and Blocked Persons List (“SDN List”), the
                U.S. Department of Commerce’s Denied Persons List, or any other
                relevant government watchlist.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.1.3 </font>
          <font face="Poppins, sans-serif">
            <b>Information Requirements and Accuracy</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                You must provide a valid and current email address, mobile phone
                number, and physical address during account registration.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0in" }}
            >
              <font face="Poppins, sans-serif">
                You agree to maintain accurate, complete, and updated
                information in all your dealings with instiX Global , including
                information provided for identity verification, transaction
                purposes, and other updates as required.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                If there are any changes to your information, it is your
                responsibility to update instiX Global promptly.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.1.4 </font>
          <font face="Poppins, sans-serif">
            <b>Compliance with Laws</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                You confirm that your use of our platform and services is
                compliant with all applicable laws and regulations, including
                but not limited to Anti-Money Laundering (AML),
                Counter-Terrorist Financing (CTF), economic sanctions, and
                anti-corruption laws.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                You warrant that you are not involved in, and will not use our
                services for, any illegal activity or restricted transactions as
                outlined in applicable laws and instiX Global policies.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.2 </font>
          <font face="Poppins, sans-serif">
            <b>Additional Requirements for Access to the OTC Desk</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Access to instiX Global ’s OTC Desk is governed by the Client’s
            Classification and Eligibility, as determined by instiX Global .
            This classification includes periodic verification procedures,
            trading history, and compliance with internal risk management
            policies. Access to the OTC Desk may also depend on risk tolerance
            levels and trading limits that instiX Global may impose or update at
            any time.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.2.1 </font>
          <font face="Poppins, sans-serif">
            <b>Verification and Risk Management</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                instiX Global reserves the right to apply risk controls and
                verification measures specific to each Client. This may involve
                background checks, transaction limits, and monitoring tools
                designed to prevent fraud or suspicious activity.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0in" }}
            >
              <font face="Poppins, sans-serif">
                Risk controls may also dictate the minimum trade amounts and
                maximum allowable transaction volumes for any virtual assets
                transacted through the OTC Desk.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                Failure to meet the eligibility criteria may result in instiX
                Global discontinuing or restricting your access to the OTC Desk.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.2.2 </font>
          <font face="Poppins, sans-serif">
            <b>Client Responsibility for Authorized Users</b>
          </font>
          <font face="Poppins, sans-serif">(For Entity Clients)</font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                If you are an entity client, you are responsible for ensuring
                that only authorized personnel (hereafter referred to as
                "Authorized Users") access and utilize the OTC Desk. You agree
                to furnish the necessary identity and authorization details for
                each Authorized User upon request by instiX Global .
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0in" }}
            >
              <font face="Poppins, sans-serif">
                You guarantee that your Authorized Users possess adequate
                training, skills, experience, and knowledge to operate the OTC
                Desk in compliance with this agreement and applicable laws.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0in" }}
            >
              <font face="Poppins, sans-serif">
                You are required to implement policies and procedures to
                supervise and monitor your Authorized Users’ actions and usage
                of the OTC Desk.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                You are responsible for all actions, omissions, and transactions
                carried out by your Authorized Users and agree to indemnify
                instiX Global for any losses or liabilities arising from
                unauthorized or inappropriate use by Authorized Users.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.3 </font>
          <font face="Poppins, sans-serif">
            <b>Account Registration and Verification Process</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            To access the full range of services offered by instiX Global ,
            including the ability to make deposits, withdrawals, or trades, you
            must complete the account registration process. You will be required
            to provide personal details for identity verification and comply
            with the following terms:
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.3.1 </font>
          <font face="Poppins, sans-serif">
            <b>Identity Verification</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                instiX Global may require additional information to verify your
                identity and to ensure compliance with applicable AML/CTF laws.
                This may include a copy of government-issued identification,
                proof of residence, and other documentation deemed necessary by
                instiX Global .
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                We may engage third-party service providers to assist in
                verifying your information and to detect any financial crime
                risks. By agreeing to these terms, you authorize instiX Global
                to disclose necessary personal data to credit reference, fraud
                prevention, or financial crime agencies.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.3.2 </font>
          <font face="Poppins, sans-serif">
            <b>Ongoing Due Diligence and Enhanced Verification</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                instiX Global reserves the right to conduct ongoing or enhanced
                due diligence on your account, especially in cases where
                suspicious activity is detected, or higher transaction volumes
                are involved.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                You acknowledge and agree that such verification processes may
                lead to temporary suspensions or additional documentation
                requirements to access or continue using our services.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.3.3 </font>
          <font face="Poppins, sans-serif">
            <b>Failure to Comply with Verification Requirements</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                instiX Global reserves the right to suspend or close accounts
                for any client who fails to meet our verification standards or
                if the information provided is deemed inaccurate, outdated, or
                misleading.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                If at any time you fail to meet any of the eligibility or
                verification criteria, you agree to cease using your account and
                notify instiX Global immediately.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.4 </font>
          <font face="Poppins, sans-serif">
            <b>Account Security and Client Responsibilities</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>Confidentiality of Access Credentials</b>
              </font>
              <font face="Poppins, sans-serif">
                : Clients are responsible for safeguarding their account
                credentials and ensuring that no third parties access their
                accounts. You are solely liable for all activities conducted
                through your account, including unauthorized access, if such
                access was due to your failure to secure your login credentials.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Account Monitoring</b>
              </font>
              <font face="Poppins, sans-serif">
                : Clients are advised to regularly monitor account activity and
                report any unauthorized access or irregular transactions to
                instiX Global immediately.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                <b>Equipment and Data Security</b>
              </font>
              <font face="Poppins, sans-serif">
                : Clients are responsible for securing their equipment and
                internet connection used to access our platform. instiX Global
                is not liable for losses arising from inadequate security
                measures on clients' devices, including exposure to viruses,
                phishing attacks, or malware.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.5 </font>
          <font face="Poppins, sans-serif">
            <b>Conditions for Continuing Service Access</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right to restrict or terminate services
            if you fail to meet ongoing qualification and classification
            standards.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.5.1 </font>
          <font face="Poppins, sans-serif">
            <b>Reevaluation and Ongoing Compliance</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                instiX Global periodically reassesses Clients’ compliance with
                our standards and applicable regulations. Any discrepancies or
                instances of non-compliance may result in service restrictions
                or account termination.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                Clients agree that failure to maintain the qualifications
                outlined herein or failure to comply with updated criteria, when
                applicable, will constitute grounds for instiX Global to suspend
                or close your account.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">4.5.2 </font>
          <font face="Poppins, sans-serif">
            <b>Indemnification for Non-Compliance</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              align="justify"
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                In the event that you continue to use instiX Global ’s services
                despite failing to meet qualification criteria, you agree to
                indemnify and hold instiX Global harmless from any claims,
                penalties, or administrative actions resulting from your
                unauthorized use.
              </font>
            </p>
          </li>
          <li>
            <p
              align="justify"
              style={{ lineHeight: "150%", marginBottom: "0.19in" }}
            >
              <font face="Poppins, sans-serif">
                This indemnification extends to cover losses, third-party
                claims, regulatory penalties, and associated costs arising from
                your non-compliance with applicable jurisdictional laws or
                failure to meet eligibility standards.
              </font>
            </p>
          </li>
        </ul>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>5. Price Quotes and Order Processing</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>5.1 Quote and Pricing Mechanism</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.1.1</font>
          <font face="Poppins, sans-serif">
            <b>Provision of Quote</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global OTC Desk shall provide a{" "}
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">request for </span>
          </font>
          <font face="Poppins, sans-serif">quote (“Quote”)</font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">and request for stream (“Stream”) </span>
          </font>
          <font face="Poppins, sans-serif">
            for the potential purchase or sale of Digital Assets or Fiat
            Currency upon receiving a request from the Client. This Quote
            represents a reasonable estimation of the final transaction price.
            It incorporates instiX Global ’s internal calculations, operational
            costs, and a margin, all determined at instiX Global ’s discretion.
            The Quotes provided are proprietary information exclusively intended
            for transaction completion on instiX Global ’s platform and should
            not be distributed or used for purposes outside the Client’s
            internal trading activities on the OTC Desk.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.1.2 </font>
          <font face="Poppins, sans-serif">
            <b>Quote-to-Order Conversion</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Upon confirming that the Client’s account is pre-funded with the
            necessary amount to fulfill the transaction, the provided Quote will
            transition into a pending Order. This transition is conditional upon
            the Client having sufficient funds in their instiX Global account
            and acceptance by instiX Global .
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>5.1.3 Acceptance and Order Confirmation</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the sole right to accept or reject an Order
            and to issue an Accepted Order Confirmation (“Order Confirmation”).
            Until an Order Confirmation is issued, instiX Global and the Client
            bear no obligations to proceed with the transaction. An Order
            without a corresponding Order Confirmation on the same date of
            submission shall be deemed rejected. instiX Global will return any
            debited funds for such rejected Orders to the Client’s account
            without any obligation for interest.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>5.2 Settlement of Orders</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.2.1 </font>
          <font face="Poppins, sans-serif">
            <b>Digital Asset Settlements</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            On the agreed Settlement Date, instiX Global shall transfer the
            specified Digital Assets, along with all associated rights, title,
            and interest, to the Client’s designated wallet or account, provided
            payment has been received in full. This transfer signifies the
            Client’s acquisition of ownership rights to the Digital Assets as
            per the terms and conditions set forth.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.2.2 </font>
          <font face="Poppins, sans-serif">
            <b>Fiat Currency Settlements</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Fiat Currency settlements shall occur at the exchange rate quoted
            within 24 hours of the quoted price, depending on the availability
            of third-party financial services. instiX Global does not assume
            liability for any delay caused by external financial institutions or
            market interruptions affecting Fiat Currency processing.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.3 </font>
          <font face="Poppins, sans-serif">
            <b>Transfer and Delivery Mechanism</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global , or its authorized designee, shall initiate the
            transfer of the purchased Digital Asset or Fiat Currency to the
            Client’s designated wallet or financial account on the Settlement
            Date. Clients must provide accurate delivery instructions in line
            with instiX Global ’s requirements and ensure compliance with all
            procedural requirements within their trading group.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>5.4 Payment Obligations for Aggregate Purchase Price</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.4.1 </font>
          <font face="Poppins, sans-serif">
            <b>Pre-Funding Requirement</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Prior to receiving an Order Confirmation, the Client shall verify
            that their instiX Global account holds the total Aggregate Purchase
            Price. Funding must be completed through an approved bank transfer
            or by maintaining adequate funds within the account.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">5.4.2 </font>
          <font face="Poppins, sans-serif">
            <b>Insufficient Funds and Additional Funding</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If the Client’s account lacks adequate funds to cover the Aggregate
            Purchase Price, they are responsible for promptly funding their
            account
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">
              until which the order would not get confirmed and client would
              face a rejection orders.
            </span>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>6. Pricing and Quotation Validity</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>6.1 Price Determination and Sole Discretion</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global holds exclusive authority to set and adjust prices for
            Digital Assets and Fiat Currencies at its discretion. Prices reflect
            prevailing market rates, internal transaction costs, and the
            platform’s operational requirements. Clients acknowledge that prices
            may vary based on market conditions and understand that any fees
            associated with these transactions are explicitly communicated via
            authorized communication channels.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>6.2 Quote Validity and Market Sensitivity</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Quotes provided by instiX Global are valid for a maximum of 10
            seconds, though rapid market fluctuations may invalidate them
            sooner. instiX Global reserves the right to reject any Order
            submitted on the basis of an expired Quote due to these inherent
            risks. Clients are responsible for ensuring that Quotes are still
            valid at the time of Order submission and accept the inherent risks
            of engaging in transactions in highly volatile markets.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>6.3 Internal Use of Quoted Prices</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Quotes, Order prices, and related pricing information are intended
            solely for the Client’s personal use within instiX Global ’s OTC
            Desk. External reliance, redistribution, or alternative applications
            of these prices are strictly prohibited.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>7. Negotiation, Execution, and Order Confirmation</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>7.1 Approved Communication Channels</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global OTC Desk transactions are conducted through approved
            channels, including but not limited to instant messaging. These
            channels enable Quote requests, Order confirmations, and transaction
            updates. Clients agree to exclusively use these channels for OTC
            Desk-related communications and agree that all transactions and
            instructions are confined to these secure methods
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">w</span>
          </font>
          <font face="Poppins, sans-serif">.</font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>7.2 Order Confirmation as Binding Commitment</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Once the Client confirms a valid Quote by using terms such as
            “confirmed,” “agreed,” “done,” “I buy,” “bought,” “I sell,” or
            “sold,” they form a binding commitment to execute the transaction.
            This confirmation authorizes instiX Global to deduct the specified
            funds from the Client’s account. Clients must verify the accuracy of
            all transaction details before providing this binding confirmation,
            as instiX Global is under no obligation to correct errors
            post-confirmation.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">7.3 </font>
          <font face="Poppins, sans-serif">
            <b>Secondary Verification Requirements</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            To uphold transaction security, instiX Global may, at its
            discretion, require additional authentication measures. Such
            measures may include electronic, verbal, or other confirmation
            protocols. The Client is required to comply promptly with these
            security verifications to enable safe and reliable transaction
            processing.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>7.4 Cancellation of Price Quotes</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right to cancel any Quote prior to
            confirmation by the Client. Circumstances that may necessitate
            cancellation include, but are not limited to, extreme market
            volatility, liquidity constraints, security concerns, or technical
            failures. instiX Global is not liable for any losses or damages
            resulting from such cancellations.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>8. Client Responsibilities and Usage Constraints</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>8.1 Confidentiality and Exclusive Use of Information</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            All Quotes, Order confirmations, and pricing data provided by instiX
            Global are confidential and intended solely for the Client’s
            engagement with the OTC Desk. Clients are strictly prohibited from
            sharing, distributing, or utilizing this data for external purposes,
            thereby safeguarding the proprietary nature of instiX Global ’s
            services.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">8.2 </font>
          <font face="Poppins, sans-serif">
            <b>Pre-Funding Obligation for Transactions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients are required to ensure pre-funding for each Order. If the
            Client lacks sufficient funds, the transaction is invalid. No
            withdrawal or transfer is allowed if funds are insufficient to meet
            the full amount of the Order. Any Order submitted without
            pre-funding will be automatically voided.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">8.3 </font>
          <font face="Poppins, sans-serif">
            <b>Communication Protocols and Client Compliance</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients are responsible for monitoring all communication channels
            associated with their instiX Global account and promptly responding
            to transaction-related inquiries. Failure to adhere to these
            protocols may result in transaction delays, which instiX Global
            shall not be held responsible for.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">8.</font>
          <font face="Poppins, sans-serif">
            <b>4 Irreversibility of Orders</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Upon confirmation, Orders become final and irreversible. Clients are
            encouraged to thoroughly review all transaction details prior to
            confirmation, as instiX Global will not modify or cancel executed
            Orders unless due to a verifiable system error.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>9. Settlement and Transaction Delivery</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>9.1 Digital Asset and Fiat Currency Delivery</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            On the Settlement Date, instiX Global shall deliver the specified
            Digital Assets or Fiat Currency to the Client’s wallet or bank
            account. The Client assumes full responsibility for the accuracy of
            these delivery details. instiX Global bears no liability for delays
            or losses arising from incorrect information provided by the Client.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>9.2 Withdrawal Process for Incomplete Orders</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            If an Order cannot be completed due to factors beyond Instix
            Global’s control, such as market liquidity constraints, the Client
            is required to initiate a withdrawal request for the return of any
            remaining funds. Instix Global will process the withdrawal request
            within five (5) business days, ensuring that the Client’s funds are
            returned using the original method of funding. Please note that
            there is no "refund" process in the crypto industry; all returns are
            managed through withdrawal requests initiated by the Client.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">9.3 </font>
          <font face="Poppins, sans-serif">
            <b>Account Access and Security Compliance</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The Client is responsible for safeguarding their Instix Global
            account credentials. Instix Global disclaims any liability for
            unauthorized transactions stemming from a failure on the Client’s
            part to secure their account credentials.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>9.4 Transaction Records and Reporting</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Instix Global shall maintain a detailed record of all completed
            Orders and settlements, accessible to the Client upon request and in
            accordance with relevant regulatory requirements. Clients agree to
            routinely review their transaction history and promptly report any
            discrepancies to Instix Global for investigation.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>10. Unauthorized and Incorrect Transactions</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>10.1 Review and Reporting</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients are obligated to review their account balance and
            transaction history regularly. Any unauthorized or erroneous
            transactions should be reported to Instix Global immediately to
            initiate an investigation and potentially mitigate further losses.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">10.2 </font>
          <font face="Poppins, sans-serif">
            <b>Liability and Suspension</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global holds no responsibility for unauthorized transactions
            unless it is conclusively shown that instiX Global is at fault.
            During any ongoing investigation, instiX Global reserves the right
            to suspend the Client’s account to prevent further unauthorized
            access or loss.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>11. Disclaimer and Limitation of Liability</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>11.1 Market Risks and Client Assumption of Risk</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global emphasizes that digital asset transactions are
            inherently volatile. Clients engage at their own risk, and instiX
            Global does not assume liability for market-driven fluctuations or
            third-party disruptions impacting trading outcomes.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">11.2 </font>
          <font face="Poppins, sans-serif">
            <b>Liability for Losses</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global is not liable for any direct, indirect, or
            consequential losses arising from reliance on market data, technical
            issues, or unauthorized transactions.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12. Fees, Payments, and Financial Obligations</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.1 General Overview of Fees</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.1.1 </font>
          <font face="Poppins, sans-serif">
            <b>Trading Fees</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Instix Global’s current revenue model is based primarily on markups
            applied to transactions on the platform, without the application of
            additional transaction fees at this time. However, Instix Global’s
            management reserves the right to implement or adjust transaction
            fees in response to evolving business needs or market conditions.
            Any changes to the fee structure, if introduced, will be
            transparently communicated to Clients in advance, with applicable
            rates clearly displayed at the time of transaction confirmation to
            ensure full transparency.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.1.2 </font>
          <font face="Poppins, sans-serif">
            <b>Banking Fees</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global imposes Banking Fees on all fiat currency transactions
            involving deposits and withdrawals to and from bank accounts. These
            fees cover the cost of processing transactions through financial
            institutions, including intermediary bank charges, wire transfer
            fees, and foreign exchange conversion where applicable. Deposits and
            withdrawals processed through third-party payment providers may also
            incur additional charges, which the Client is responsible for.
            Banking Fees are deducted from the transaction amount upon
            completion, and any discrepancies between the transferred and
            received amounts due to third-party fees are borne solely by the
            Client.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.1.3 </font>
          <font face="Poppins, sans-serif">
            <b>Digital Asset Network Fees (Gas Fees)</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            When transferring digital assets to an external wallet or performing
            on-chain transactions, the Client will be subject to blockchain
            network fees, commonly referred to as gas fees. These fees are
            dynamic and fluctuate based on the network congestion and demand for
            computational resources on the blockchain. instiX Global will
            calculate gas fees based on real-time network conditions at the time
            of transaction processing. These fees will be communicated to the
            Client for approval before finalizing the transaction. Gas fees are
            either added to the transfer cost or deducted from the transaction
            amount, depending on the transaction type. instiX Global does not
            control these network fees and assumes no responsibility for delays
            or increased costs associated with blockchain congestion or fee
            volatility.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.2 Currency Options and Payment Mechanisms</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.2.1 </font>
          <font face="Poppins, sans-serif">
            <b>Supported Fiat Currencies</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global accepts major global currencies, including but not
            limited to USD, EUR, CAD, GBP, and AED, for account funding,
            payments, and withdrawals. The availability of specific currencies
            for certain transactions may be subject to change based on market
            conditions, local regulations, or financial service provider
            availability. Clients are advised to confirm their currency options
            with their account manager prior to initiating a transaction, as
            instiX Global reserves the right to suspend or modify currency
            offerings without prior notice.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.2.2 </font>
          <font face="Poppins, sans-serif">
            <b>Currency Conversion and Exchange Rates</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            For transactions involving currency conversions, instiX Global
            applies exchange rates that are reflective of current market
            conditions. These conversion rates may include a nominal markup to
            account for foreign exchange risk and administrative costs.
            Conversion rates will be disclosed at the time of transaction
            confirmation, allowing Clients to review the total cost in their
            preferred currency before proceeding. instiX Global does not
            guarantee the exact exchange rate at any given time and is not
            liable for losses incurred due to fluctuations in currency values.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.3 Account Maintenance Fees and Inactivity Charges</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.3.1 </font>
          <font face="Poppins, sans-serif">
            <b>Inactive Account Fees</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            To account for the administrative and operational costs of
            maintaining inactive accounts, instiX Global charges a monthly fee
            for accounts with non-zero balances that have had no trading or
            transactional activity for a continuous period of twelve (12) months
            or more. The Inactive Account Fee is set at two U.S. dollars (USD
            $2.00) or an equivalent amount in the currency held in the Client’s
            account. This fee is deducted automatically until the account
            balance is depleted or reactivated through trading activity. Should
            this policy be subject to change, instiX Global will notify affected
            Clients at least 30 days in advance.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.4 Custodial Fees and Special Account Services</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.4.1 </font>
          <font face="Poppins, sans-serif">
            <b>Custody Services for Digital Assets</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            For Clients who choose to store digital assets with instiX Global ,
            custodial fees may apply. These fees vary based on the volume and
            nature of assets under custody, as well as the specific security and
            storage measures required for each asset class. Custodial fees are
            detailed in the Custody Fee Schedule, which can be obtained from the
            Client’s account manager. These fees are automatically deducted from
            the Client’s account balance on a monthly or quarterly basis, as
            stipulated in the Custodial Services Agreement.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.4.2 </font>
          <font face="Poppins, sans-serif">
            <b>Modifications to Custody Fee Structure</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right to periodically review and adjust
            custody fees based on changes in market conditions, asset security
            requirements, and regulatory considerations. Adjusted custody fees
            will be communicated to the Client through official channels, with
            the new fees taking effect at least 30 days after notification.
            Clients who disagree with the revised fee structure have the option
            to withdraw their assets or terminate their custodial services
            without penalty.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.5 Client Responsibility for Tax Compliance and Reporting</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.5.1 </font>
          <font face="Poppins, sans-serif">
            <b>Obligation to Comply with Tax Regulations</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The Client bears full responsibility for understanding and
            fulfilling their tax obligations as they pertain to transactions and
            gains made through instiX Global . This includes but is not limited
            to reporting gains or losses, remitting applicable taxes, and filing
            any required documents with the relevant tax authorities. instiX
            Global is not responsible for determining the Client’s tax
            liabilities and will not provide tax-related guidance unless
            required by law in certain jurisdictions.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.5.2 </font>
          <font face="Poppins, sans-serif">
            <b>Filing and Reporting Requirements</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients are solely responsible for filing any necessary tax returns
            or reports in connection with their digital asset transactions.
            instiX Global will provide account statements upon request but does
            not assume responsibility for any penalties, interest, or additional
            costs resulting from the Client's failure to comply with tax
            regulations. In cases where local laws mandate tax collection or
            reporting, instiX Global may be required to report transaction
            details to tax authorities or withhold certain amounts to satisfy
            tax obligations.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.6 Payment Methods, Security, and Fraud Prevention</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.6.1 </font>
          <font face="Poppins, sans-serif">
            <b>Accepted Payment Options</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global supports various payment options, including bank wire
            transfers, credit/debit cards, and third-party payment processors.
            The availability of payment methods may vary based on the Client's
            region, account type, and applicable regulations. Clients are
            responsible for selecting a payment method that aligns with their
            financial requirements and security preferences. instiX Global is
            not liable for service interruptions or delays associated with
            third-party payment providers.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.6.2 </font>
          <font face="Poppins, sans-serif">
            <b>Bank and Wire Transfer Requirements</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients using bank transfers must ensure that the transfer
            originates from an account in the Client's name, as recorded in the
            instiX Global KYC records. Any discrepancies between the Client’s
            registered details and the sender’s bank account may result in a
            rejected transaction. Clients are responsible for any intermediary
            bank fees, currency conversion charges, or other transaction-related
            costs.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.6.3 </font>
          <font face="Poppins, sans-serif">
            <b>Credit and Debit Card Security</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            For payments made via credit or debit cards, Clients must ensure the
            security of their card information and assume responsibility for
            unauthorized use. instiX Global is not liable for losses arising
            from unauthorized transactions or fraudulent activities conducted by
            third parties, even if the card was reported lost or stolen.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.6.4 </font>
          <font face="Poppins, sans-serif">
            <b>Automatic Fee Deduction</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global automatically deducts applicable fees, such as Trading
            Fees, Banking Fees, and Custody Fees, directly from the Client’s
            account balance. Should the account balance be insufficient to cover
            these fees, instiX Global reserves the right to restrict account
            activity until the outstanding balance is settled. Clients are
            advised to monitor their account balances to ensure all fees are met
            promptly.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.7 Penalties, Fines, and Interest on Late Payments</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.7.1 </font>
          <font face="Poppins, sans-serif">
            <b>Client Liability for Fines and Penalties</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Any fines, penalties, or other charges imposed as a result of the
            Client's use of instiX Global services are the Client's sole
            responsibility. Such fines represent a debt payable by the Client
            upon issuance of a written notice by instiX Global , with payment
            due within ten (10) business days. Failure to pay fines within the
            specified period may result in daily accruing interest charges until
            the debt is fully settled. instiX Global reserves the right to
            pursue legal action to recover unpaid fines.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.7.2 </font>
          <font face="Poppins, sans-serif">
            <b>Accrual of Interest on Outstanding Amounts</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Interest will accrue on unpaid balances, fines, or penalties from
            the date they are imposed, and the Client is responsible for any
            additional costs incurred during the collection process. instiX
            Global calculates interest on a daily basis, and any outstanding
            balances must be settled promptly to avoid further action.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.8 Taxes, VAT, and Compliance with Tax Requirements</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.8.1 </font>
          <font face="Poppins, sans-serif">
            <b>VAT and Sales Tax</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Fees are exclusive of VAT, sales tax, or similar duties unless
            otherwise stated. When applicable, these taxes will be itemized
            separately, and the Client agrees to pay all such amounts promptly.
            instiX Global is not responsible for calculating or remitting the
            Client's tax liabilities unless explicitly required by law.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.8.2 </font>
          <font face="Poppins, sans-serif">
            <b>Client Obligation to Report and Remit Taxes</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients are responsible for accurately reporting any gains or
            earnings derived from transactions and ensuring they meet their tax
            obligations. instiX Global provides transaction records to assist in
            this process but disclaims any responsibility for calculating or
            remitting taxes on the Client’s behalf.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.9 Fee Revisions and Client Notification Protocol</b>
          </font>
        </p>
        <p style={{ lineHeight: "150%", marginBottom: "0.11in" }}>
          <font face="Poppins, sans-serif">12.9.1</font>
          <font face="Poppins, sans-serif">
            <b>Periodic Adjustments and Notifications</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global may revise its fee structure to reflect operational
            costs, regulatory changes, or market conditions. Clients will be
            informed of these changes via email or account notifications.
            Continued use of instiX Global services constitutes acceptance of
            the revised fees, which will take effect as specified in{" "}
          </font>
          the notice. Clients may terminate their account without penalty if
          they disagree with any adjustments.
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.9.2 </font>
          <font face="Poppins, sans-serif">
            <b>Client Consent to Adjusted Fees</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            By continuing to use instiX Global ’s services, Clients agree to the
            revised fees. Those who disagree with any changes may withdraw their
            assets or close their accounts without penalty within the specified
            period.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.10 Deduction Rights and Recovery of Unpaid Amounts</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.10.1 </font>
          <font face="Poppins, sans-serif">
            <b>Automatic Deductions for Outstanding Amounts</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global retains the right to deduct unpaid fees, penalties, or
            other liabilities directly from the Client’s account balance. In
            cases where the account balance is insufficient, the Client agrees
            to promptly remit additional funds to clear the outstanding balance.
            instiX Global may suspend account services until full payment is
            received.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">12.10.2 </font>
          <font face="Poppins, sans-serif">
            <b>Collection of Overdue Payments and Legal Recourse</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            For overdue payments, instiX Global may employ legal measures to
            recover amounts owed. Clients are responsible for covering all costs
            associated with debt recovery, including legal fees and accrued
            interest.
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>12.11 Dispute Resolution for Fee-Related Matters</b>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            instiX Global encourages Clients to address any disputes concerning
            fees or deductions directly with customer support. All inquiries
            regarding fees, charges, and payments should be initiated within
            thirty (30) days of the transaction date. Failure to report
            discrepancies within this period may result in forfeiture of the
            right to dispute.
          </font>
          <font face="Poppins, sans-serif">
            <span style={{ display: "none" }}>Top of Form</span>
          </font>
        </p>
        <p
          align="justify"
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13. FIAT SERVICES</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.1 Loading of Fiat Funds into Fiat Wallet</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.1.1 Clients may load funds into their Fiat Wallet via bank
            transfer or other payment methods offered by instiX Global for their
            location. Once instiX Global has received and processed these funds,
            they will be displayed in the Client's Fiat Wallet balance. Clients
            can manually initiate this loading or set up recurring transactions
            through their instiX Global account settings.{" "}
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            13.1.2 Clients are required to load only their own funds,
            originating from accounts in their name. instiX Global does not
            accept third-party, joint, or pooled accounts. Fiat balances in the
            Wallet do not accrue interest.{" "}
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            13.1.3 Supported fiat currencies may vary by location, and multiple
            currencies can be held simultaneously. instiX Global will display
            the balance for each currency as applicable.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.2 Purchase or Sale of Digital Assets Using Fiat Funds</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.2.1 Clients may use the funds held in their Fiat Wallet to
            purchase Supported Digital Assets. The Client authorizes instiX
            Global to debit funds from their Fiat Wallet upon confirmation of a
            purchase order for Supported Digital Assets.{" "}
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            13.2.2 Purchased Digital Assets will generally be credited to the
            Client's Digital Asset Wallet promptly, though timing may vary based
            on transaction and processing factors. 1
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            3.2.3 Clients may also sell Digital Assets in exchange for fiat
            currency. Upon completion of the sale, fiat funds will be credited
            to the Client’s Fiat Wallet and will only be used for additional
            purchases or withdrawals within the instiX Global platform.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.3 Instruction Timing and Transaction Processing</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.3.1 Orders for Digital Asset transactions received after 4:30
            p.m. (GMT) or on a non-business day will be processed on the next
            available business day.{" "}
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            13.3.2 Once the Client submits instructions for a Digital Asset
            transaction using fiat funds, the Client cannot withdraw consent
            unless the transaction is scheduled as a Future Transaction. In such
            cases, cancellation is permitted up to the end of the business day
            prior to the scheduled date.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.4 Failed Transactions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.4.1 In the event of a failed transaction to load funds into the
            Fiat Wallet, instiX Global reserves the right to cancel any
            associated Digital Asset orders. Clients are responsible for
            ensuring an adequate balance in their funding accounts to cover such
            transactions.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.5 Fiat Wallet Balance and Transaction History</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.5.1 Clients can access their Fiat Wallet balance and detailed
            transaction history, which will include information on Digital Asset
            purchases, fiat transfers, any applicable fees, exchange rates, and
            transaction dates.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.6 Withdrawal of Fiat Funds</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.6.1 Clients may withdraw fiat funds from their Fiat Wallet to
            their registered bank account at any time, subject to compliance
            checks.{" "}
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            13.6.2 instiX Global may conduct checks to verify the legitimacy of
            transactions, prevent fraudulent activities, and comply with
            applicable regulations, which may lead to withdrawal delays.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.7 Unauthorized or Incorrect Transactions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.7.1 Clients should promptly notify instiX Global if they identify
            an unauthorized or incorrect transaction. Claims related to
            unauthorized or incorrect transactions must be submitted within 13
            months from the transaction date.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>13.8 Safeguarding of Fiat Funds and Third-Party Custody</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            13.8.1 Fiat funds are held in designated accounts at licensed
            financial institutions and are kept separate from instiX Global ’s
            corporate funds. Clients may claim these funds if instiX Global
            becomes insolvent. Any interest earned from such accounts accrues to
            instiX Global .
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14. ACCOUNT SUSPENSION, TERMINATION, AND CANCELLATION</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.1 Rights to Suspend, Terminate, or Cancel</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right, at its sole and absolute
            discretion, and without liability to the Client or any third party,
            to:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                14.1.1 Refuse to allow the Client to open an account, suspend
                the Client’s account, or terminate the Client’s account;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                14.1.2 Decline to process any instruction or order submitted by
                the Client; and/or
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                14.1.3 Limit, suspend, or terminate the Client’s use of one or
                more of instiX Global ’s services, or any part thereof.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.2 Continuation of Obligations</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Any action taken by instiX Global under Section 14.1 does not
            relieve the Client from obligations incurred pursuant to these
            Terms.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.3 Grounds for Suspension, Termination, or Cancellation</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global may take action under Section 14.1 due to factors
            including, but not limited to:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                14.3.1 Account inactivity, failure to respond to customer
                support inquiries, or inability to positively identify the
                Client;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                14.3.2 Court order, violation of applicable laws, or violation
                of these Terms; or
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                14.3.3 Transactions that appear suspicious, involve potential
                fraud, money laundering, terrorist financing, or other
                misconduct.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.4 Disagreement with Actions Taken</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If the Client disagrees with any action taken under Section 14.1,
            the Client’s sole and exclusive remedy is to discontinue use of
            instiX Global ’s services and close their account. instiX Global and
            any indemnified parties bear no liability for losses suffered as a
            result of actions taken under Section 14.1.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.5 Temporary Suspension for Technical Issues</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global may temporarily suspend access to the Client’s account
            in the event of technical issues, system outages, or errors until
            such issues are resolved.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.6 Notification Requirements</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            When required by applicable law, instiX Global will promptly notify
            the Client if account processing is suspended, explain the reasons
            for the suspension, and outline steps needed to rectify the
            situation.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.7 Voluntary Account Closure by Client</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The Client may request account closure or terminate their access to
            instiX Global ’s services at any time by contacting customer
            support. Account closure requests will be reviewed, and instiX
            Global reserves the right to deny closure requests if deemed an
            attempt to evade regulatory or legal investigations or to avoid
            paying amounts owed to instiX Global .
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.8 Withdrawal of Funds Upon Closure</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Clients are encouraged to withdraw any remaining balance before
            requesting account closure. instiX Global reserves the right to
            limit or deny withdrawals if:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                14.8.1 The account has been suspended or closed under these
                Terms;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                14.8.2 Applicable laws or court orders prohibit withdrawals; or
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                14.8.3 Assets in the account were obtained fraudulently.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.9 Cancellation of Pending Transactions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Upon closure or suspension of an account, the Client authorizes
            instiX Global to cancel or suspend any pending transactions.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>14.10 Continuing Liability</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Notwithstanding account closure or suspension by either the Client
            or instiX Global , or termination of access to any services, the
            Client remains liable for any activity conducted through their
            account while it was active and for all amounts owed to instiX
            Global in connection with such activity.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>15. RESTRICTED ACTIVITIES</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>15.1 Prohibited Uses of Services</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            In connection with the use of instiX Global ’s services, the Client
            agrees not to engage in activities that:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                15.1.1 Violate applicable laws, regulations, or rules of
                self-regulatory organizations relevant to the Client;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.2 Provide inaccurate, outdated, or misleading information
                to instiX Global ;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.3 Infringe on instiX Global 's or any third-party’s
                intellectual property rights;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.4 Involve illegal activities, such as money laundering,
                gambling, blackmail, fraud, or terrorism financing;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.5 Distribute unauthorized promotional content, spam, or
                chain letters;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.6 Use web crawlers or similar techniques to extract data
                without authorization;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.7 Reverse engineer or disassemble instiX Global ’s systems
                or services;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.8 Conduct unauthorized vulnerability or penetration tests
                on instiX Global ’s systems;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.9 Place an unreasonable load on instiX Global ’s
                infrastructure or interfere with systems, data, or information;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.10 Upload malware, viruses, or other harmful code to instiX
                Global ’s platform;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.11 Attempt unauthorized access to instiX Global ’s
                services, networks, or other accounts;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.12 Transfer rights granted under these Terms except as
                permitted;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                15.1.13 Engage in market abuse or misconduct, including
                fictitious transactions, wash trading, or front-running; or
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                15.1.14 Engage in any behavior deemed unacceptable by instiX
                Global in its sole discretion.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>15.2 Facilitation of Prohibited Activities</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The Client agrees not to assist, facilitate, or encourage any third
            party to engage in any activity that is prohibited by these Terms.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16. LIABILITY AND INDEMNITY</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.1 Indemnification</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            (a) The Client agrees to indemnify and hold instiX Global , its
            affiliates, and each of their respective officers, directors,
            agents, employees, and representatives harmless from any and all
            claims, losses, liabilities, damages, costs, or expenses (including
            legal fees) arising out of or in connection with:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (i) Any breach by the Client of these Terms or any other
                agreement with instiX Global ;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (ii) Any violation of applicable law, regulation, or the rights
                of any third party by the Client;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (iii) Any inaccurate, incomplete, or misleading information
                provided by the Client;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (iv) Any action or inaction by a person authorized by the Client
                to access their account or use the services of instiX Global ;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (v) Any unauthorized access or transaction that occurs as a
                result of the Client’s failure to safeguard account credentials,
                including negligence in managing passwords, two-factor
                authentication, or account security settings.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            (b) The Client’s liability under this clause shall be proportionally
            reduced to the extent that instiX Global has caused or contributed
            to the relevant claim or loss or failed to take reasonable steps to
            mitigate the loss.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.2 Limitation of Liability</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            (a) To the maximum extent permitted by law, instiX Global , its
            affiliates, and its service providers are not liable for:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (i) Consequential, indirect, incidental, special, punitive, or
                exemplary damages, including but not limited to loss of profits,
                goodwill, reputation, data, business opportunities, or any
                anticipated savings or lost trading opportunities, whether
                arising under contract, tort (including negligence), or
                otherwise;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (ii) Loss or damage resulting from disruptions, delays, errors,
                failures, or other interruptions in instiX Global ’s services,
                caused by issues within or outside of instiX Global ’s control,
                including any blockchain network or cryptocurrency-specific
                disruptions;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (iii) Damages arising from inaccuracies, defects, glitches,
                bugs, viruses, or other errors in the platform, software, or any
                linked services or external websites;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (iv) Delays, restrictions, or suspensions imposed on account
                access or transactions as deemed necessary by instiX Global for
                security, compliance, or legal reasons;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (v) Any harm or loss related to unauthorized transactions, or to
                actions or inactions of third parties;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (vi) Costs incurred by the Client for any changes they need to
                make to business practices, content, or behavior, or any loss of
                potential revenue resulting from changes to these Terms.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            (b) instiX Global is not responsible for the accuracy or
            completeness of instructions provided by the Client. The Client
            agrees that instiX Global is not liable for any losses, damages, or
            claims resulting from instiX Global ’s actions or inactions based on
            inaccurate, incomplete, or unclear instructions received from the
            Client.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            (c) instiX Global ’s liability shall be reduced to the extent that
            any loss or damage was caused or contributed to by the Client’s
            actions or inactions, including any failure to comply with these
            Terms.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.3 Total Limitation of Loss</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global ’s total aggregate liability to the Client for any
            claim, or series of related claims, shall be limited to:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (i) The total combined value of the Client’s fiat and digital
                assets held in their instiX Global account at the time of the
                claim; or
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (ii) The value of the specific transaction in question,
                whichever is lesser. The Client expressly acknowledges and
                agrees that this total limitation applies regardless of the type
                of damage claimed.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.4 Exclusion of Liability for Certain Types of Damages</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Under no circumstances shall instiX Global , its affiliates, or
            service providers be liable for:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (a) Loss of anticipated trading profits, revenue, or expected
                gains, even if instiX Global was aware or should have been aware
                of the potential for such losses;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (b) Loss of goodwill, reputation, or business opportunities, or
                any business interruption or indirect damage to the Client’s
                commercial prospects;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (c) Corruption of data, or loss of data, which may occur through
                the Client’s interaction with the platform, due to software
                errors, cyber-attacks, or other causes beyond instiX Global ’s
                control;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (d) Losses arising from inaccuracy, delay, or omission of
                digital asset price data, or errors in market or transaction
                data provided by instiX Global or third-party providers;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (e) Any errors, defects, viruses, malware, or harmful programs
                that may impact the Client’s interaction with the platform or
                services;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (f) Liability for suspensions, terminations, or actions taken to
                secure, limit, or terminate access to Client accounts for
                reasons deemed necessary by instiX Global .
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.5 Disclaimer of Warranties</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The instiX Global platform and its services are provided on an
            “as-is” and “as-available” basis, with no representations or
            warranties of any kind, either express or implied. instiX Global
            expressly disclaims all warranties, including but not limited to
            implied warranties of merchantability, fitness for a particular
            purpose, non-infringement, and any warranty arising from course of
            dealing, usage, or trade practice.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            instiX Global does not guarantee:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (i) Continuous, uninterrupted, secure, or error-free access to
                its platform or services;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (ii) That transactions will be completed, confirmed, or remain
                open at any given time;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (iii) The accuracy, reliability, or availability of any data,
                information, or material provided on its platform or through its
                services.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            The Client acknowledges that digital asset transactions are
            inherently volatile and subject to high levels of risk. instiX
            Global makes no warranties regarding the expected outcome of any
            transaction or investment decision made by the Client based on
            information provided through instiX Global ’s platform or services.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.6 No Liability for External Circumstances</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global shall not be liable for any delay, failure in
            performance, or breach of these Terms caused by circumstances beyond
            its control. This includes but is not limited to situations
            involving force majeure, compliance with legal or regulatory orders,
            third-party system failures, or other abnormal and unforeseeable
            circumstances.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.7 Representations and Warranties by the Client</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Upon entry into this Agreement, the Client represents and warrants
            that:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (a) They have the full power, authority, and legal capacity to
                enter into and comply with these Terms;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (b) If acting as a private individual, they are at least 18
                years old and capable of understanding the risks involved;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (c) They have reviewed and understand the risks associated with
                digital asset transactions, as well as the potential for high
                volatility and loss of value;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (d) If representing a corporation or organization, they are duly
                organized, validly existing under the applicable jurisdiction,
                and in compliance with all relevant regulatory requirements;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (e) They are acting independently in making investment
                decisions, and have made their own assessment as to the
                appropriateness of transactions conducted through instiX Global
                ’s platform;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (f) They understand and are capable of assessing the terms,
                conditions, and risks involved in using the platform, and assume
                all related risks;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (g) They are responsible for all activity conducted with their
                account and confirm that all information supplied to instiX
                Global is accurate and up-to-date.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>16.8 General Disclaimer and Liability Waiver</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global will make reasonable efforts to process transactions
            in a timely manner, subject to factors outside of its control.
            However, instiX Global disclaims all liability for any losses,
            damages, or claims arising from:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (i) The failure, delay, or error in processing any transaction,
                instruction, or digital asset transfer;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (ii) The conduct of third parties, including other users of
                instiX Global ’s services or linked services;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (iii) Any disputes between the Client and third parties,
                including other users or merchants involved in transactions
                facilitated by instiX Global .
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>
              17. APPLICABLE LAWS, AML/CTF PROCEDURES, AND SANCTIONS COMPLIANCE
            </b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>
              17.1 Anti-Money Laundering and Counter-Terrorist Financing
              (AML/CTF) Procedures
            </b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global adheres to strict anti-money laundering (“AML”) and
            counter-terrorist financing (“CTF”) procedures to ensure that the
            platform is not used for illicit activities, including money
            laundering or terrorism financing. In compliance with all relevant
            AML and CTF regulations, instiX Global actively monitors
            transactions, reports suspicious activities, and takes proactive
            steps to prevent, identify, and address fraudulent activities or
            financial crimes. By using instiX Global ’s services, the Client
            agrees to comply with AML/CTF laws and acknowledges that instiX
            Global may take necessary measures to ensure compliance with
            applicable legal standards.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>17.2 Compliance with Applicable Laws</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            17.2.1 The Client agrees that by opening an account with instiX
            Global and utilizing its services, they will comply with all
            applicable laws and regulations, including but not limited to tax,
            AML, CTF, and any other relevant regulations. Any failure to comply
            with such laws may result in suspension or termination of the
            Client's access to instiX Global ’s services.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            17.2.2 Access to and use of instiX Global services is conditioned
            upon the Client's ongoing compliance with all applicable laws,
            including adhering to the directives and guidelines issued by
            relevant regulatory authorities.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>17.3 International Controls and Sanctions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            17.3.1 instiX Global ’s services are subject to export control
            restrictions and economic sanctions. By using instiX Global , the
            Client confirms that they will not engage in activities that violate
            these restrictions. Specifically, the Client may not use instiX
            Global ’s services if:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (a) The Client is located in, a national or resident of, or
                transacting with a country subject to international sanctions (a
                "Sanctioned Country") such as Cuba, Iran, North Korea, Syria, or
                any other country designated by relevant authorities.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (b) The Client is a restricted person or entity, including those
                identified on lists maintained by authorities such as the Office
                of Foreign Assets Control (OFAC), the European Union, or other
                applicable regulatory bodies.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (c) The Client intends to transact with or on behalf of any
                individual or entity located in a Sanctioned Country or any
                person or entity designated as a restricted person.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginLeft: "0.25in",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            17.3.2 instiX Global may implement technical or administrative
            measures to restrict access to services in restricted locations or
            by restricted persons. If instiX Global determines that the Client
            is accessing or using services from a restricted location or as a
            restricted person, it reserves the right to suspend or terminate
            access to the platform immediately.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>17.4 Eligibility and Qualification</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            17.4.1 To use instiX Global services, the Client must meet the
            following requirements:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                (a) The Client’s principal place of business or residence is not
                located in the United States, China, Russia or any other
                restricted location.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (b) The Client is not a restricted person, nor are they using
                the services on behalf of any restricted entity.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                (c) If the Client is an individual, they must be at least 18
                years old, or the legal age of majority in their jurisdiction,
                whichever is higher, and have the capacity to enter into binding
                agreements.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                (d) If the Client is acting on behalf of a legal entity, they
                must be duly authorized to act on behalf of that entity, which
                must be validly organized and legally operating within its
                jurisdiction of formation.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginLeft: "0.25in",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            17.4.2 The Client affirms that they will not use instiX Global ’s
            services for illegal activities or restricted activities outlined by
            instiX Global , including but not limited to violating economic
            sanctions, engaging in financial crimes, or other prohibited uses.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>17.5 Sanctions and Restricted Use</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If instiX Global determines that the Client does not meet the
            criteria outlined above, instiX Global reserves the right to
            immediately suspend or terminate the Client’s access to its
            services. The Client agrees to assume all liabilities arising from
            any misuse or violation of applicable laws, including indemnifying
            instiX Global for any resulting losses, third-party claims,
            penalties, or legal costs.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>17.6 Termination for Non-Compliance</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global retains the right to restrict, suspend, or terminate
            the Client’s account and access to services if the Client fails to
            comply with applicable AML/CTF standards, export controls,
            sanctions, or other relevant laws. Any detected violation or attempt
            to circumvent applicable laws will be grounds for immediate account
            termination.
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0.19in",
              }}
            >
              <font face="Poppins, sans-serif">
                By agreeing to these Terms, the Client confirms compliance with
                all applicable laws, sanctions, and export control restrictions
                and accepts full responsibility for any liabilities resulting
                from non-compliance.
              </font>
              <font face="Poppins, sans-serif">
                <span style={{ display: "none" }}>Top of Form</span>
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18. VIRTUAL ASSET CUSTODY AND TITLE
                </font>
              </strong>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.1 General.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global acts solely as an intermediary OTC exchange layer,
                facilitating virtual asset transactions between clients and
                regulated Liquidity Providers (“LPs”). instiX Global does not
                retain custody over virtual assets on behalf of its clients,
                except for a limited transactional period to facilitate
                transfers. instiX Global partners with world-class, regulated
                LPs, ensuring that assets are directly and instantly settled
                between clients and LPs upon completion of each transaction.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.2 Limited Custody Window.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                For the brief period necessary to execute the transfer of assets
                to or from an LP, instiX Global may hold temporary custody over
                the relevant virtual assets. This custody is limited strictly to
                the time required for secure processing of the transaction.
                During this minimum time window, instiX Global ’s control over
                virtual assets is restricted to efficiently managing the
                transfer and ensuring seamless settlement between the client and
                the LP.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.3 Control and Transaction Execution.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                Clients retain ownership and control over their assets at all
                times, and instiX Global does not acquire any proprietary
                interest in these assets. Upon receiving the client’s
                transaction instructions, instiX Global facilitates the transfer
                by debiting the client’s account solely for the purpose of
                transferring assets to the designated LP or receiving assets
                from the LP as directed. instiX Global does not hold electronic
                private keys associated with clients' accounts beyond the
                operational needs of facilitating transactions within the
                temporary custody window.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.4 Shared Blockchain Addresses and Record Maintenance.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global may use shared blockchain addresses, managed by
                instiX Global , to coordinate the transfer of assets during the
                transaction process. instiX Global maintains internal ledgers to
                record and reflect each client’s transaction details accurately,
                but does not segregate blockchain addresses for individual
                users, as assets are directly and securely routed between
                clients and LPs.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.5 No Interest on Virtual Assets.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                Assets temporarily held by instiX Global for the purpose of
                transaction settlement are not eligible for interest or any
                other earnings. Clients acknowledge that instiX Global ’s
                temporary custody does not generate any interest or yield on
                their assets during the transfer window.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.6 Balance and Transaction Transparency.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                Clients can view their virtual asset balances and transaction
                history via the instiX Global Platform, including the type and
                amount of each transaction, as well as its completion date. This
                ensures that clients retain full visibility into their holdings
                and transaction details.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.7 Payment Services Partners.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global may partner with third-party payment processors to
                facilitate fiat fund transactions, such as deposits and
                withdrawals. By engaging with these third-party services,
                clients agree to be bound by the respective terms of service or
                user agreements of these external processors. instiX Global
                takes no custody over fiat assets beyond the scope of the
                transaction settlement process.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <strong>
                <font size={2} style={{ fontSize: "11pt" }}>
                  18.8 Disclaimer of Custodial Role.
                </font>
              </strong>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global disclaims any custodial role outside of its role
                as an intermediary OTC platform and facilitator of client-LP
                transactions. instiX Global ’s involvement is limited to
                transaction facilitation between parties, with all assets
                directly settled between clients and regulated LPs, preserving
                client ownership at all times.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19. DATA PROTECTION AND SECURITY</b>
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.1 Personal Data Processing and Privacy Compliance.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global places the highest importance on the privacy of
                personal data and complies with all relevant data protection and
                privacy laws, including the General Data Protection Regulation
                (GDPR) and applicable UAE data privacy laws. By using instiX
                Global ’s services, you agree that your personal data may be
                collected, stored, and processed in accordance with our Privacy
                Policy. As part of our commitment to transparency, you are
                entitled to know how we handle personal data, and we ensure that
                any information disclosed to us is processed legally and
                securely. By disclosing any personal data to instiX Global , you
                warrant that:
              </font>
            </font>
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(a)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    You have lawfully obtained and disclosed any personal data
                    provided to us and that it has been disclosed in compliance
                    with applicable data protection laws, ensuring the accuracy,
                    relevance, and currency of the data.
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(b)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    Before providing any personal data, you have reviewed and
                    understood our Privacy Policy and, in the case of
                    third-party personal data, provided those individuals with a
                    copy or directed them to the policy.
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(c)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    Should the Privacy Policy be updated, you will ensure that
                    affected individuals receive the updated policy.
                  </font>
                </font>
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.2 Data Collection and Usage.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global may collect and use personal data, including
                identifying details, contact information, and transaction data,
                to provide services, meet regulatory requirements, and ensure
                transaction security. Our use of personal data is strictly
                aligned with the purpose for which it was provided. In addition
                to meeting regulatory and compliance obligations, instiX Global
                may use personal data to improve customer service, conduct
                internal training, and enhance platform security.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.3 Data Security Standards.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global has implemented stringent security protocols to
                protect personal data against unauthorized access, alteration,
                and loss. Our data security practices include but are not
                limited to encryption, access control, two-factor authentication
                (2FA), and secure data storage. Regular security assessments,
                audits, and penetration tests are conducted to ensure the
                highest standards are upheld. However, you are also responsible
                for the secure management of your own account credentials and
                devices.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.4 Security Breach Notification.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                If you suspect any compromise to your account or detect
                unauthorized access or fraudulent activity, it is imperative to
                contact instiX Global Support immediately at [instiX Global
                Support Contact]. You must keep us informed throughout the
                resolution of any security breach and may be required to take
                certain actions as directed by instiX Global to manage or
                contain the situation. Please note that timely reporting does
                not guarantee reimbursement for any losses resulting from the
                breach.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.5 Cybersecurity and Virus Protection.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global is not liable for damage caused by viruses,
                malware, phishing, or other malicious software that may
                compromise your devices. We advise all users to employ reputable
                antivirus programs, remain cautious of phishing emails, and
                verify the authenticity of any communication purporting to be
                from instiX Global . Always access your account directly through
                the official platform to avoid security risks.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.6 Password and Device Security.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                To access instiX Global ’s services, you will create unique
                credentials, including a username and password. You are
                responsible for safeguarding these credentials and any devices
                used to access instiX Global ’s platform. Loss or compromise of
                these credentials may lead to unauthorized access and potential
                loss of funds or personal data. instiX Global will never request
                your password, two-factor authentication codes, or any form of
                remote access. It is advised to regularly update your password
                and avoid sharing your account information with anyone.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>
                  19.7 Two-Factor Authentication (2FA) and Security Controls.
                </b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global offers two-factor authentication for an added
                layer of security, allowing you to use SMS or Time-based One
                Time Passwords (TOTP) to protect your account. Enabling and
                maintaining the security of 2FA devices is your responsibility.
                Loss of these devices or exposure of codes may lead to
                unauthorized access, for which instiX Global will not be liable.
                You are also encouraged to keep your registered mobile number
                up-to-date for authentication and alert purposes.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.8 GDPR Compliance and Data Rights.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global complies with the GDPR and offers data subjects
                certain rights over their personal data, including the right to
                access, rectify, erase, restrict, and port their data. You may
                exercise these rights at any time by contacting [instiX Global
                Data Protection Contact]. instiX Global ’s Privacy Policy
                outlines these rights in full and describes how personal data is
                handled and protected. Additionally, data subjects may withdraw
                their consent at any time, although this may affect the
                availability of certain services.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>
                  19.9 Cross-Border Data Transfers and Sharing with Third
                  Parties.
                </b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global may transfer personal data to its affiliates,
                regulatory bodies, or third-party service providers (including
                cloud service providers) for legitimate processing purposes,
                such as complying with legal obligations, facilitating platform
                operations, and engaging in regulatory reporting. Personal data
                may be transferred to jurisdictions with different data
                protection laws, where it will be managed in compliance with
                applicable regulatory and privacy standards. All third-party
                data processing is governed by contractual agreements that
                uphold instiX Global ’s security and confidentiality standards.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.10 Confidentiality of Client Information.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global treats all account information and transactional
                data as confidential and will only disclose this information
                when:
              </font>
            </font>
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(a)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    Authorized by you or your legal representative;
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(b)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    Required to comply with applicable laws or regulations,
                    including data protection and anti-money laundering
                    regulations;
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(c)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    Required by court order or legal investigation; or
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(d)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    Necessary to comply with requests from regulatory
                    authorities such as VARA or other national or international
                    regulators.
                  </font>
                </font>
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.11 Monitoring and Logging of Communications.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                To ensure security, maintain quality standards, and fulfill
                regulatory obligations, instiX Global reserves the right to
                monitor and log communications, including email, chat, and
                telephone interactions, as permitted by law. This monitoring may
                also be used for internal training and quality control.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.12 Account Security and Incident Reporting.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                If you detect any suspicious activity or unauthorized access to
                your account, you are required to immediately report the issue
                to instiX Global Support at [instiX Global Support Contact].
                instiX Global will work with you to resolve the incident and
                prevent further unauthorized access. However, you are
                responsible for any unauthorized transactions resulting from
                your failure to protect your account credentials or promptly
                report security incidents.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.13 Data Retention and Record Keeping.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global retains personal and transactional data for as
                long as necessary to fulfill the purpose for which it was
                collected or as required by applicable laws, including
                anti-money laundering (AML) and counter-terrorist financing
                (CTF) regulations. Transactional and account data may be
                retained for regulatory, compliance, and audit purposes and is
                securely stored to prevent unauthorized access.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.14 Use of Third-Party Service Providers.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global may utilize reputable third-party providers for
                payment processing, identity verification, and other operational
                needs. When using these services, you agree to be bound by the
                respective provider’s terms and conditions. While instiX Global
                requires its third-party providers to adhere to stringent
                security and confidentiality standards, the responsibility for
                understanding and complying with these providers’ terms rests
                with you.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>19.15 Limitation of Liability in Security Incidents.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                instiX Global is not liable for any losses resulting from
                unauthorized access, phishing, malware, or security breaches
                beyond its control. While instiX Global takes comprehensive
                measures to prevent unauthorized access, users are responsible
                for securing their credentials and account devices. instiX
                Global ’s liability is limited in cases of user negligence,
                including sharing login credentials, failure to report security
                incidents promptly, or disregarding best practices for account
                security.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>20. OFFSETTING BALANCES AND DEBIT ACCOUNT MANAGEMENT</b>
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>
                  20.1 Offsetting Balances upon Account Suspension or
                  Termination.
                </b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                <br />
                In the event of Account suspension, termination, or cancellation
                ( detailed clause follows), you acknowledge and agree that
                instiX Global reserves the right to offset any negative balances
                in your Account by buying or selling your Virtual Assets as
                necessary to cover outstanding amounts owed to instiX Global .
                This includes any debts or fees owed to instiX Global as
                stipulated in this Agreement.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>20.2 Recovery of Erroneous Deposits.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                <br />
                You agree that instiX Global has the authority to withdraw any
                amount in Fiat Currency or Virtual Assets that you may receive
                in error. This provision ensures that mistaken transactions can
                be corrected, and any erroneously credited funds may be
                reclaimed by instiX Global without prior notice.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>20.3 Debit Account Balance Responsibility.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                <br />
                If your Account reflects a debit balance at any time, you are
                required to pay instiX Global :
              </font>
            </font>
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(a)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    any applicable fees listed in the Fee Schedule;
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(b)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    the total debit balance due; and
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(c)</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    any other amounts specified in this Agreement.
                  </font>
                </font>
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                Failure to settle these outstanding amounts may result in the
                suspension or closure of your Account.
              </font>
            </font>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <font size={3} style={{ fontSize: "12pt" }}>
              <font size={2} style={{ fontSize: "11pt" }}>
                <b>20.4 Authorization to Debit Account and Recover Funds.</b>
              </font>
              <font size={2} style={{ fontSize: "11pt" }}>
                <br />
                If, after a demand from instiX Global , you fail to pay the
                outstanding debit balance by the specified deadline, instiX
                Global reserves the right to take the following actions to
                recover the debt:
              </font>
            </font>
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(a) Asset Liquidation</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    : You authorize instiX Global to sell any Virtual Assets or
                    redeem any Fiat Currency held in your Account to cover the
                    outstanding debit balance. instiX Global may take these
                    actions at its sole discretion without prior notification.
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(b) Indemnification</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    : You agree to indemnify instiX Global and any other
                    indemnified parties against any losses or expenses incurred
                    due to your failure to pay the outstanding debit balance.
                    This indemnification includes, but is not limited to,
                    transaction fees, loss of asset value, and administrative
                    costs incurred during the recovery process.
                  </font>
                </font>
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <font size={3} style={{ fontSize: "12pt" }}>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    <b>(c) Third-Party Recovery Costs</b>
                  </font>
                  <font size={2} style={{ fontSize: "11pt" }}>
                    : If instiX Global engages a collection agency, legal firm,
                    or any other third-party entity to recover the outstanding
                    debit balance, you are liable for all associated costs. This
                    includes fees and expenses related to third-party assistance
                    or advice in the recovery process.
                  </font>
                </font>
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21. INTELLECTUAL PROPERTY</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.1 Ownership of Content.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            All content made available through instiX Global ’s Platform,
            including but not limited to text, graphics, logos, button icons,
            images, audio clips, data compilations, software, and any other
            materials (collectively, the “Content”), is the exclusive property
            of instiX Global or its licensors. This Content is protected by
            copyright, trademark, and other intellectual property laws. instiX
            Global retains all rights, title, and interest in the Content, and
            you are granted only a limited, non-exclusive, non-transferable,
            revocable license to access and use the Content solely for purposes
            approved by instiX Global , in accordance with this Agreement.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.2 Limited License to Users.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Subject to your compliance with these Terms, instiX Global grants
            you a limited, non-exclusive, non-transferable, non-sublicensable
            license to access and use the Platform and the Content solely for
            the purpose of engaging with instiX Global ’s services. Any other
            use of the Platform or the Content is expressly prohibited. This
            license does not permit you to copy, distribute, sell, license,
            reverse engineer, modify, create derivative works from, or exploit
            the Content in any way, in whole or in part, without instiX Global
            ’s prior written consent.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.3 Trademarks and Branding.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            “instiX Global ” and all related logos, service names, graphics,
            button icons, and other branding elements displayed on the Platform
            are trademarks or trade dress of instiX Global or its licensors. You
            may not use, imitate, or copy them without prior written consent
            from instiX Global . Unauthorized use of any instiX Global branding
            elements, including trademarks, logos, and service marks, is
            strictly prohibited and may violate applicable intellectual property
            laws.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.4 User-Generated Content.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If you submit or post any content, such as text, images, or other
            media (“User Content”) to the Platform, you represent and warrant
            that you own or have the necessary rights to share the User Content
            and that it does not violate any third-party rights or applicable
            laws. By posting User Content, you grant instiX Global a worldwide,
            non-exclusive, royalty-free, perpetual, irrevocable, sublicensable,
            and transferable license to use, reproduce, distribute, prepare
            derivative works of, display, and perform the User Content in
            connection with instiX Global ’s business, including for marketing,
            advertising, and promotional purposes.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.5 Compliance with Intellectual Property Laws.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            You agree to use the Platform and Content in compliance with all
            applicable intellectual property laws. instiX Global reserves the
            right to remove any User Content that infringes on the intellectual
            property rights of others or violates this Agreement. instiX Global
            may, at its discretion, restrict or terminate your access to the
            Platform if it determines that your actions infringe upon the
            intellectual property rights of others.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.6 Prohibition on Reverse Engineering.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            You agree not to, nor to allow any third party to, copy, reverse
            engineer, decompile, disassemble, or otherwise attempt to derive the
            source code of any software used to provide the Platform, except to
            the extent expressly permitted by applicable law. Any unauthorized
            access to or use of instiX Global ’s software or proprietary
            algorithms is prohibited.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>21.7 Intellectual Property Violations and Reporting.</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If you believe that any Content on the Platform infringes your
            intellectual property rights, please contact instiX Global at
            support@instiXglobal.io with details of the alleged infringement.
            instiX Global will review and, if necessary, take appropriate action
            to remove or disable access to infringing Content, consistent with
            applicable intellectual property laws and policies.
          </font>
          <font face="Arial, serif">
            <span style={{ display: "none" }}>Bottom of Form</span>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22. SUSPENSION, TERMINATION, AND CANCELLATION</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.1 Client-Initiated Termination</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            You may terminate this Agreement by providing instiX Global with at
            least 10 Business Days' written notice via email at
            support@instiXglobal.io. Your notice must include specific details
            of any account or other withdrawal destination to which any
            remaining Virtual Assets in your Account should be returned, after
            the deduction of any applicable Fees or other sums owed to instiX
            Global . Please note that terminating the Agreement does not absolve
            you from any outstanding obligations under these Terms.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.2 instiX Global 's Right to Terminate Immediately</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global may terminate this Agreement or suspend, restrict, or
            deactivate your access to all or part of the Services, with
            immediate effect, under any of the following conditions:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>(a)</b>
              </font>
              <font face="Poppins, sans-serif">
                If any information you provided is found to be materially false
                or misleading;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(b)</b>
              </font>
              <font face="Poppins, sans-serif">
                If required by Applicable Law, regulations, or as directed by
                any court or competent authority in a jurisdiction to which
                instiX Global is subject;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(c)</b>
              </font>
              <font face="Poppins, sans-serif">
                If you are in material breach of any term of this Agreement, and
                if such breach is remediable, you fail to remedy it within
                fourteen (14) calendar days of notification;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(d)</b>
              </font>
              <font face="Poppins, sans-serif">
                If you become subject to significant legal, regulatory, or
                criminal proceedings, including but not limited to bankruptcy or
                insolvency, that present actual or potential risk to instiX
                Global ;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(e)</b>
              </font>
              <font face="Poppins, sans-serif">
                If instiX Global reasonably suspects you of engaging in illegal
                activities, including financial crime, money laundering, or
                unauthorized transactions;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(f)</b>
              </font>
              <font face="Poppins, sans-serif">
                If any change in Applicable Law restricts instiX Global ’s
                ability to provide Services, making it illegal or impractical to
                do so;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(g)</b>
              </font>
              <font face="Poppins, sans-serif">
                If required by a competent court, regulatory authority, or
                financial services regulator to terminate the Agreement;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(h)</b>
              </font>
              <font face="Poppins, sans-serif">
                In the event of your death, if you are an individual;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(i)</b>
              </font>
              <font face="Poppins, sans-serif">
                If instiX Global employees are subjected to abusive or
                threatening behavior;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(j)</b>
              </font>
              <font face="Poppins, sans-serif">
                If you become bankrupt or subject to any analogous insolvency
                procedure;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>(k)</b>
              </font>
              <font face="Poppins, sans-serif">
                If a Force Majeure Event prevents instiX Global from delivering
                the Services;
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <b>(l)</b>
              </font>
              <font face="Poppins, sans-serif">
                If instiX Global has reason to believe you have seriously or
                persistently breached these Terms or that you have used or
                intend to use the Platform for unlawful purposes.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.3 Effect of Termination by instiX Global </b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If instiX Global terminates your Account, all rights to access the
            Services, including the OTC Desk, will be revoked. instiX Global
            will securely store your account and transactional information as
            required by Applicable Law. Any Virtual Assets or funds held in the
            Account may be transferred to governmental authorities if required
            for investigations related to fraud, legal violations, or breaches
            of these Terms.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.4 Consequences of Termination</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Termination of the Agreement, whether by you or instiX Global , does
            not absolve you from liability for any activity conducted with your
            Account before termination, nor for any amounts due under this
            Agreement. If your Account has a negative balance or outstanding
            fees at the time of termination, instiX Global reserves the right to
            offset any owed amounts by liquidating Virtual Assets or applying
            any Fiat balances remaining in your Account.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.5 Offset and Recovery</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            In the event of termination, instiX Global may take reasonable
            measures to recover any amounts owed, including the right to offset
            balances by buying or selling Virtual Assets in your Account, as
            necessary. You authorize instiX Global to use funds from any
            available Fiat or Virtual Assets to satisfy any outstanding
            balances. instiX Global may also engage third-party collection
            agencies or legal representatives, and you agree to indemnify instiX
            Global for any expenses incurred in such recovery efforts.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.6 Suspension for Technical Issues</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right to temporarily suspend Account
            access if technical issues or system errors arise, preventing normal
            Account or Platform functionality, until such issues are resolved.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.7 No Disclosure Requirement</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            You acknowledge and agree that instiX Global ’s decision to suspend,
            limit, or terminate your Account access may be based on confidential
            risk management and security protocols. instiX Global is under no
            obligation to disclose these criteria to you.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.8 Withdrawal and Access Limitations</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            During suspension or termination, your ability to withdraw assets
            may be restricted for legal, regulatory, or compliance reasons.
            Withdrawals will be permitted only upon satisfactory completion of
            “Know Your Customer” requirements as applicable. You agree that in
            the event of termination, instiX Global may cancel or suspend any
            pending transactions without notice.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>22.9 Right to Change or Discontinue Services</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right to discontinue or alter any
            product, service, or feature at its sole discretion, with prior
            notice of material changes to the extent applicable.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23. GOVERNING LAW AND DISPUTE RESOLUTION</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.1 Governing Law</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            These Terms and any Dispute arising out of or relating to these
            Terms, your Account, or your access to or use of the instiX Global
            Platform and Services, shall be governed by, and construed in
            accordance with, the laws of Poland, without regard to its conflict
            of laws principles.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.2 Mandatory Arbitration</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            You agree that any and all Disputes, claims, controversies, or
            actions arising out of or in connection with these Terms, including
            but not limited to matters regarding their existence,
            interpretation, enforcement, performance, breach, termination, or
            validity, or any other matters related to your use of the Platform,
            Services, or any other interaction with instiX Global (collectively,
            "Disputes"), shall be resolved exclusively and finally through
            binding arbitration administered by the Singapore International
            Arbitration Centre (SIAC) in accordance with the SIAC Arbitration
            Rules, as described below:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>23.2.1 Informal Resolution Attempts:</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                Prior to initiating formal arbitration, the Parties agree to
                make a good faith effort to resolve the Dispute informally. This
                process shall involve a 30-day negotiation period, beginning
                from the date one Party provides the other Party with written
                notice of the Dispute.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <b>23.2.2 Initiation of Arbitration:</b>
              </font>
              <font face="Poppins, sans-serif">
                If the Dispute is not resolved within the 30-day informal
                negotiation period, either Party may initiate arbitration. The
                arbitration shall be the exclusive means of resolving any
                Dispute that is not resolved through informal negotiations.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.3 Arbitration Proceedings</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The arbitration shall be conducted in accordance with the SIAC
            Arbitration Rules, with the following provisions applying:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>23.3.1 Composition of the Tribunal:</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                Unless the Parties mutually agree to a single arbitrator, the
                tribunal shall consist of three arbitrators. Each Party shall
                appoint one arbitrator, and the two appointed arbitrators shall
                select a third, who shall serve as the presiding arbitrator. The
                arbitrators shall be neutral and acceptable to both Parties.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>23.3.2 Venue and Language:</b>
              </font>
              <font face="Poppins, sans-serif">
                The seat of arbitration shall be Singapore International
                Arbitration Centre (SIAC), Singapore, with the legal place of
                arbitration being Singapore. The arbitration proceedings shall
                be conducted in English.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>23.3.3 Confidentiality:</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                The arbitration and all related proceedings, including all
                submissions, documents, and testimony, shall remain strictly
                confidential. Disclosure of information relating to the
                arbitration is prohibited, except as necessary to comply with
                regulatory requirements, court orders, or to enforce the
                arbitration award.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>23.3.4 Authority of Arbitrators:</b>
              </font>
              <font face="Poppins, sans-serif">
                The arbitrators shall have exclusive authority to resolve any
                Dispute relating to the interpretation, applicability,
                enforceability, or formation of these Terms, including any claim
                that all or part of these Terms are void or voidable.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <b>23.3.5 Finality and Enforceability:</b>
              </font>
              <font face="Poppins, sans-serif">
                The arbitrators' decision shall be final, binding, and
                enforceable. No appeal or review of the decision shall be
                permitted, except as provided under the applicable arbitration
                laws. Any judgment on the arbitration award may be entered in
                any court having competent jurisdiction over the Parties.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.4 Costs and Fees</b>
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>23.4.1 Shared Costs:</b>
              </font>
              <font face="Poppins, sans-serif">
                The costs of the arbitration, excluding legal fees, shall be
                shared equally by the Parties. Each Party shall bear its own
                legal fees, unless the arbitrator decides to award legal costs
                to the prevailing Party as part of the award.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <b>23.4.2 Attorney Fees:</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                The prevailing Party may seek an award for reasonable attorney
                fees and related costs in addition to any other relief granted.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.5 Waiver of Class Action</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            To the fullest extent permitted by law, the Parties agree to bring
            claims solely in their individual capacity and not as plaintiffs or
            members in any purported class, collective, representative, or mass
            action. The arbitrator shall not consolidate claims of more than one
            Party, nor preside over any form of class or representative
            proceeding. Relief awarded in any arbitration may apply only to the
            Party initiating the claim.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.6 Jurisdiction and Venue for Arbitration Enforcement</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            The Parties irrevocably consent to the exclusive jurisdiction and
            venue of the courts of{" "}
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">Singapore</span>
          </font>
          <font face="Poppins, sans-serif">
            , solely for the purpose of enforcing an arbitration award. The
            Parties waive any objections to the jurisdiction and venue of{" "}
          </font>
          <font face="Poppins, sans-serif">
            <span lang="en-US">Singapore</span>
          </font>
          <font face="Poppins, sans-serif">
            courts, including objections based on doctrines such as forum non
            conveniens.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.7 Exceptions to Arbitration Requirement</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Notwithstanding the above, instiX Global reserves the right to seek
            injunctive or equitable relief in any competent court to protect its
            intellectual property rights, proprietary information, or
            confidential information, and the Parties agree that such actions
            are exempt from the arbitration provisions of this clause.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>23.8 Severability of Dispute Resolution Provisions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If any portion of this dispute resolution section is found to be
            invalid or unenforceable by a court of competent jurisdiction, that
            portion shall be severed, and the remaining provisions shall remain
            in full force and effect.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>GENERAL PROVISIONS</b>
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.1 Entire Agreement</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            This Agreement, together with any policies incorporated by
            reference, constitutes the entire understanding between you and
            instiX Global regarding the use of our Services. It supersedes all
            prior agreements, discussions, and understandings, whether oral or
            written, concerning the subject matter herein. Section headings in
            this Agreement are provided for convenience only and do not govern
            the interpretation of any provision. If there is any conflict
            between this Agreement and any other document, the terms of this
            Agreement shall prevail.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.2 Assignment</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global reserves the right to assign or transfer its rights
            and obligations under this Agreement to any affiliate, successor, or
            third party, including in the event of a merger, acquisition, or
            sale of all or substantially all assets. You may not assign or
            transfer this Agreement or any rights or obligations hereunder
            without instiX Global ’s prior written consent. Any attempted
            assignment in violation of this clause shall be null and void. This
            Agreement will bind and benefit the respective successors and
            permitted assigns of the parties.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.3 Severability</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            If any provision of this Agreement is deemed invalid or
            unenforceable by a court or arbitrator of competent jurisdiction,
            the invalid or unenforceable portion shall be interpreted to fulfill
            its intended purpose to the maximum extent permitted by law. The
            remaining provisions of this Agreement will remain in full force and
            effect.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.4 Non-Waiver</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global ’s failure to enforce any right or provision of this
            Agreement shall not constitute a waiver of that right or provision.
            Any waiver of any provision of this Agreement will be effective only
            if in writing and signed by an authorized representative of instiX
            Global .
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.5 Relationship of Parties</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            Nothing in this Agreement is intended to create or shall be
            construed as creating any agency, partnership, or joint venture
            relationship between you and instiX Global . Each party shall act
            solely as an independent contractor and shall not represent itself
            as an agent or authorized representative of the other for any
            purpose whatsoever.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.6 Notice</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            You are responsible for maintaining an up-to-date email address and
            contact information in your Account. Any notices, disclosures, or
            communications required or permitted by this Agreement will be sent
            to the email address associated with your Account. By providing your
            email, you agree that all notices provided electronically satisfy
            any legal requirement for written notice.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.7 Taxes</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            It is your sole responsibility to determine, calculate, and fulfill
            any and all tax obligations that may arise from your use of instiX
            Global ’s Services, including any profits, gains, or other taxable
            events arising from the trading, transfer, holding, or sale of
            digital assets or any other transactions conducted on or through the
            Platform. instiX Global does not offer tax advice, guidance, or
            services and will not be held responsible for any tax liabilities,
            penalties, or obligations you may incur under the tax laws of your
            jurisdiction or any other applicable tax authority.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            instiX Global may be required under certain applicable laws and
            regulations to report your transaction history, holdings, or other
            financial information to relevant tax authorities, including but not
            limited to capital gains, income tax, or other applicable tax
            liabilities, if mandated by the laws of your jurisdiction or any
            other jurisdiction in which instiX Global operates or interacts.
            instiX Global reserves the right to withhold taxes on certain
            transactions, if required by law, and remit them to the appropriate
            tax authorities.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            To facilitate compliance, instiX Global may periodically request
            relevant tax documentation, such as your tax identification number
            (TIN), residency status, or any other information necessary to meet
            reporting obligations. Failure to comply with such requests within a
            specified timeframe may result in a temporary suspension of
            Services, withholding of transactions, or additional reporting to
            tax authorities as mandated by law.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            We strongly recommend consulting a qualified tax professional to
            understand your tax obligations in your jurisdiction, including
            potential obligations under foreign asset reporting, capital gains
            tax, income tax, and any reporting requirements under your local
            laws. You are encouraged to maintain thorough records of your
            transactions on the Platform to facilitate accurate reporting and
            compliance with tax obligations.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            By using instiX Global ’s Services, you acknowledge and agree that
            instiX Global assumes no responsibility for your individual tax
            compliance or reporting requirements, and any failure on your part
            to meet such obligations shall not be attributed to instiX Global .
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.8 Unclaimed Property</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            In compliance with applicable laws, if instiX Global holds funds on
            your behalf and there is no record of activity for a prolonged
            period, instiX Global may be required to remit these funds to a
            governmental authority as unclaimed property. instiX Global reserves
            the right to deduct fees, if permitted, before remitting any
            unclaimed property to the relevant authority.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.9 Force Majeure</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global shall not be liable for any delay or failure in
            performing its obligations under this Agreement if such delay or
            failure results from a Force Majeure Event. For purposes of this
            Agreement, a “Force Majeure Event” shall include, but is not limited
            to, significant market volatility, acts of God, natural disasters,
            acts of terrorism, cyber-attacks, interruptions in Internet
            services, telecommunications or network provider failures, failure
            of equipment or software, pandemics, civil disturbances, war,
            strikes, regulatory changes, embargoes, government actions, or any
            other circumstances beyond the reasonable control of instiX Global .
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            During a Force Majeure Event, instiX Global reserves the right to
            suspend, delay, or modify its Services to protect its interests and
            maintain operational stability. In such cases, instiX Global will
            take commercially reasonable measures to resume normal operations as
            soon as practicable, though it shall have no liability to you or any
            third party for any resulting delay, restriction, or modification in
            Services. instiX Global ’s obligations under this Agreement shall be
            suspended for the duration of the Force Majeure Event, and no
            penalties or damages shall apply to instiX Global for its inability
            to fulfill its obligations during this time.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            Where possible, instiX Global will notify affected users of any
            anticipated delays or changes resulting from a Force Majeure Event
            and advise on appropriate steps. instiX Global shall not be liable
            for any damages or losses incurred due to such interruptions or
            suspensions arising from Force Majeure Events.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.10 Third-Party Services</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            instiX Global relies on various third-party service providers
            (collectively, “Third Parties”), including Liquidity Providers
            (LPs), banks, payment processors, cloud services, data centers, and
            other technology or infrastructure providers, to support its
            operations. By using instiX Global ’s Services, you acknowledge and
            agree to the following provisions regarding third-party involvement:
          </font>
        </p>
        <ul>
          <li>
            <p
              style={{
                lineHeight: "150%",
                marginTop: "0.19in",
                marginBottom: "0in",
              }}
            >
              <font face="Poppins, sans-serif">
                <b>Reliance on Third-Party Providers:</b>
              </font>
              <font face="Poppins, sans-serif">
                {" "}
                Certain aspects of the Services depend on the performance and
                availability of services provided by Third Parties. instiX
                Global disclaims all liability for any errors, delays, security
                breaches, data loss, or other interruptions caused by Third
                Parties, and any disruption arising from Third Parties shall not
                constitute a breach of instiX Global ’s obligations under this
                Agreement.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>Limited Liability for Third-Party Failures:</b>
              </font>
              <font face="Poppins, sans-serif">
                Each Third Party is solely responsible for meeting its own legal
                and regulatory obligations and ensuring the performance,
                security, and reliability of its services. instiX Global assumes
                no responsibility for any acts, omissions, or breaches by Third
                Parties and disclaims liability for losses, damages, or
                interruptions attributable to Third Party failures, outages, or
                non-compliance with applicable laws.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>Data Privacy and Compliance:</b>
              </font>
              <font face="Poppins, sans-serif">
                instiX Global may engage Third Parties to perform activities
                related to data processing, transaction facilitation, and
                compliance (e.g., anti-money laundering, sanctions screening,
                “Know Your Customer” checks). These Third Parties are
                contractually bound to comply with data protection and privacy
                regulations, but instiX Global disclaims liability for any data
                breaches or non-compliance by Third Parties.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>User Responsibility for Authorized Third-Party Access:</b>
              </font>
              <font face="Poppins, sans-serif">
                If you authorize any Third Party to access your Account, you
                assume full responsibility for all actions taken by such Third
                Party on your behalf. instiX Global shall not be liable for any
                actions, omissions, or damages arising from the use of
                authorized Third-Party applications or services, nor does instiX
                Global endorse or guarantee the quality or suitability of such
                services.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0in" }}>
              <font face="Poppins, sans-serif">
                <b>Change of Third-Party Providers:</b>
              </font>
              <font face="Poppins, sans-serif">
                instiX Global reserves the right to change, substitute, or
                discontinue the services of any Third Party provider as it deems
                necessary, with minimal disruption to Services. instiX Global
                will make commercially reasonable efforts to provide continuity
                of services but is not obligated to notify users in advance of
                such changes, provided they do not adversely impact users.
              </font>
            </p>
          </li>
          <li>
            <p style={{ lineHeight: "150%", marginBottom: "0.19in" }}>
              <font face="Poppins, sans-serif">
                <b>Liability of Third Parties:</b>
              </font>
              <font face="Poppins, sans-serif">
                instiX Global is indemnified and held harmless from any claims,
                demands, or liabilities resulting from the acts, errors, or
                omissions of Third Parties, including claims for losses,
                damages, or breaches arising from failures in the services
                provided by LPs, banking institutions, payment processors,
                networks, or cloud storage providers.
              </font>
            </p>
          </li>
        </ul>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            These General Provisions establish a comprehensive framework for the
            relationship between instiX Global and its users, outlining rights,
            obligations, and expectations with regard to account use, external
            service reliance, and terms of service modification. These
            provisions also clarify instiX Global 's stance on force majeure,
            liability concerning third-party services, and users’
            responsibilities concerning data protection and security measures.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            <b>24.19 Final Provisions</b>
          </font>
          <font face="Poppins, sans-serif">
            <br />
            This Agreement is legally binding upon execution by you, either
            through account creation or by using the Platform’s Services. You
            agree to comply with all applicable laws and regulations related to
            your use of the Services. Any violation of this Agreement, in whole
            or in part, may result in the termination of your access to the
            Services, along with any other legal remedies instiX Global may
            pursue.
          </font>
        </p>
        <p
          style={{
            lineHeight: "150%",
            marginTop: "0.19in",
            marginBottom: "0.19in",
          }}
        >
          <font face="Poppins, sans-serif">
            By accepting this Agreement, you acknowledge that you have read,
            understood, and agreed to the terms, including all responsibilities,
            limitations, and obligations outlined herein.
          </font>
        </p>
      </div>
    </>
  );
};

export default termsAndCondition;
