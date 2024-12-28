import React from "react";
import Head from "next/head";

export async function getServerSideProps() {
  const seoData = {
    title: "InstiX - Cookie Policy",
    description: "InstiX Global Cookie Policy",
    ogImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
    twitterImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
  };

  return {
    props: {
      seoData,
    },
  };
}

const cookiepolicy = ({ seoData }) => {
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
      <div className="max-w-7xl  mx-auto  px-4 lg:pt-[8rem] pt-[6.75rem]">
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
                <b>instiX Global Cookie Policy</b>
              </font>
            </font>
          </p>
          <p style={{ lineHeight: "108%", marginBottom: "0.11in" }}></p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Effective Date: 1</b>
            </font>
            <sup>
              <font face="Poppins, sans-serif">
                <b>st</b>
              </font>
            </sup>
            <font face="Poppins, sans-serif">
              <b>November 2024</b>
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
              Welcome to the Cookie Policy of instiX Global. Our policy provides
              an extensive explanation of how and why we use cookies and
              tracking technologies on our digital platforms, including our
              website and mobile applications. Cookies enable us to offer
              personalized, secure, and seamless experiences for our users. By
              understanding and utilizing cookies effectively, we aim to
              continuously improve the user journey on our platform, meeting
              both functional and regulatory standards.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Our commitment to privacy and transparency in data collection,
              usage, and processing ensures we comply with global regulations
              like the{" "}
            </font>
            <font face="Poppins, sans-serif">
              <b>General Data Protection Regulation (GDPR)</b>
            </font>
            <font face="Poppins, sans-serif">and </font>
            <font face="Poppins, sans-serif">
              <b>ePrivacy Directive</b>
            </font>
            <font face="Poppins, sans-serif">
              . This document outlines the types of cookies used, their
              purposes, and your rights regarding data stored in cookies.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              We encourage you to read this policy in detail. Each section
              addresses essential aspects, ranging from understanding cookie
              types to managing your preferences and learning about updates to
              the policy.
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
              <b>2. Understanding Cookies and Tracking Technologies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Cookies</b>
            </font>
            <font face="Poppins, sans-serif">
              are small data files stored on your device by websites or
              applications to remember user activity and preferences. They
              consist of text and numbers and serve as identifiers, helping
              websites recognize returning visitors and personalize the
              experience. Common uses of cookies include keeping users logged
              in, remembering language settings, and storing shopping cart
              items.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Other tracking technologies include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Web Beacons</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Also known as pixel tags, these are small graphic images
                  that track user actions, often used in emails and websites.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Tracking Pixels</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Embedded in web pages and emails, pixels measure ad
                  engagement and can be used to assess the success of digital
                  marketing campaigns.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Software Development Kits (SDKs)</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Integrated into mobile applications, SDKs collect
                  information about how users interact with the app, aiding in
                  user behavior analysis.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>API Tokens</b>
                </font>
                <font face="Poppins, sans-serif">
                  : These unique tokens enable secure data exchange between
                  systems, allowing specific actions within applications.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Together, these tracking technologies assist in creating a more
              seamless experience, ensuring users have the necessary information
              and services available to them across devices.
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
              <b>3. Purpose of Cookies on the instiX Global Platform</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Our cookies fulfill multiple purposes, from enhancing user
              convenience to improving our website’s security and functionality.
              Specific purposes include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Security Enhancement</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Cookies help identify unauthorized access, reduce the risk
                  of fraud, and support the protection of user data.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Website and App Performance Optimization</b>
                </font>
                <font face="Poppins, sans-serif">
                  : By analyzing user behavior, we identify potential issues,
                  such as slow-loading pages, and implement changes to improve
                  platform speed and responsiveness.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Personalization and User Experience</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Cookies allow us to remember user preferences, like language
                  settings or recently viewed items, enhancing ease of use.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Targeted Advertising and Retargeting</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Advertising cookies show users relevant content based on
                  browsing history and interests, making ads more aligned with
                  personal preferences.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Analytical Insights</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Collecting data on user activity allows us to monitor site
                  engagement, assess content performance, and make data-driven
                  improvements.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{
              lineHeight: "150%",
              marginLeft: "0.5in",
              marginBottom: "0.11in",
            }}
          >
            <br />
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4. Types of Cookies Used and Their Functions</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global uses different categories of cookies for various
              purposes. Below is an in-depth overview of each type:
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>A. Essential Cookies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Essential cookies are crucial for the platform to function
              correctly. These cookies enable basic functions such as
              navigation, secure logins, and account management. Users cannot
              disable these cookies as they are necessary for site and
              application functionality.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Examples include session cookies that temporarily store user
              activity until the browser is closed, enabling smooth navigation
              without requiring repeated logins. Other essential cookies monitor
              potential security threats, protecting users from fraud or
              malicious activity.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Examples of Essential Cookies</b>
            </font>
            <font face="Poppins, sans-serif">:</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Session management cookies
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Security tracking for unauthorized access prevention
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Authentication verification for secure logins
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>B. Performance Cookies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Performance cookies collect anonymous data that helps us
              understand how users interact with our website. By gathering
              insights on pages visited, time spent on each page, and navigation
              paths, we can pinpoint areas of improvement.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              These cookies allow us to perform A/B testing to find the best
              design or layout for the site. Performance data also helps us
              resolve technical issues swiftly, ensuring the platform maintains
              high usability.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Examples of Performance Cookies</b>
            </font>
            <font face="Poppins, sans-serif">:</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Heatmap analytics tools (to see where users click most)
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Error tracking for technical diagnostics
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Visitor journey analysis to improve website flow
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>C. Functional Cookies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Functional cookies help enhance the user experience by remembering
              choices like preferred language, currency selection, and login
              state. These cookies provide customized features based on user
              interactions, creating a more personalized experience.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Functional cookies allow our website and application to adapt to
              user preferences, ensuring ease of use and convenience. Blocking
              these cookies may impact the personalization of your experience.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Examples of Functional Cookies</b>
            </font>
            <font face="Poppins, sans-serif">:</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Language and currency preference
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Recent item history (e.g., previously viewed products)
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  User interface customization options
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>D. Advertising and Targeting Cookies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Advertising and targeting cookies allow us to deliver personalized
              advertisements on instiX Global and across partner sites. These
              cookies track user activity and preferences, helping us show ads
              that align with user interests.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By enabling tracking across platforms, these cookies help display
              content that resonates with individual users. This category may
              include cookies set by third-party advertisers or platforms.
              Opting out will not reduce the number of ads seen but may result
              in less relevant advertising.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Examples of Advertising Cookies</b>
            </font>
            <font face="Poppins, sans-serif">:</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Google Ads cookies for retargeting ads
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Meta (Facebook) for ad relevance
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Partnered networks for multi-platform ad tracking
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>E. Analytical Cookies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Analytical cookies provide data-driven insights into user
              engagement and behavior patterns. They help us monitor visitor
              numbers, usage patterns, and the popularity of specific site
              sections.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              These cookies aid in making informed decisions on website
              improvements, ensuring features align with user needs. Analytical
              cookies often use aggregated data, making user identification
              impossible, and help us identify trends in site usage.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Examples of Analytical Cookies</b>
            </font>
            <font face="Poppins, sans-serif">:</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Hotjar for user engagement tracking
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Google Analytics for traffic measurement
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Survey data for performance improvements
                </font>
              </p>
            </li>
          </ul>
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
              <b>6. Cookie Duration, Expiration, and Management</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">instiX Global uses both </font>
            <font face="Poppins, sans-serif">
              <b>session-based</b>
            </font>
            <font face="Poppins, sans-serif">and </font>
            <font face="Poppins, sans-serif">
              <b>persistent cookies</b>
            </font>
            <font face="Poppins, sans-serif">.</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Session Cookies</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Expire when you close your browser. These are temporary
                  cookies used for specific activities, such as maintaining a
                  login state or remembering preferences during a single
                  session.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Persistent Cookies</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Remain on your device for longer, predetermined periods,
                  typically ranging from a few days to several months.
                  Persistent cookies are used for repeated user identification,
                  enabling the website to remember user preferences across
                  sessions.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                7. Third-Party Cookies and Associated Privacy Considerations
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Third-party cookies come from external service providers and
              support features such as analytics, advertising, and security.
              Examples include Google Analytics for performance insights and
              Meta for cross-platform ad tracking. These third parties may set
              and manage cookies according to their privacy practices, which can
              differ from instiX Global’s policies.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              While we ensure our partners comply with data protection
              standards, their privacy policies govern data use independently.
              For detailed information on third-party cookies, visit their
              privacy pages, typically linked within the cookie banner on our
              site.
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
              <b>8. Personal Data and Cookies: GDPR Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Some cookies collect data qualifying as personal information,
              particularly
            </font>
            <font face="Poppins, sans-serif">
              <b>IP addresses</b>
            </font>
            <font face="Poppins, sans-serif">and </font>
            <font face="Poppins, sans-serif">
              <b>unique identifiers</b>
            </font>
            <font face="Poppins, sans-serif">
              . instiX Global ensures all personal data collected through
              cookies complies with GDPR, CCPA, and other data protection
              regulations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Under GDPR, the lawful basis for processing cookie data varies:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Essential Cookies</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Processed under the legal basis of legitimate interest, as
                  they are necessary for service provision.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Non-Essential Cookies</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Processed based on user consent, which can be granted or
                  withdrawn via our cookie banner and settings.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Data Protection Rights</b>
            </font>
            <font face="Poppins, sans-serif">
              : Users have the right to request access, deletion, correction, or
              restriction of personal data collected through cookies.
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
              <b>9. Managing Your Cookie Preferences</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              You can manage cookie preferences using the following methods:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Cookie Banner</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Use the banner on your first visit to select cookie
                  preferences.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Browser Settings</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Most browsers allow blocking, deleting, or disabling cookies
                  under “Settings.”
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>instiX Global Account Settings</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Logged-in users can update cookie settings within their
                  accounts under the privacy tab.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              For browser-specific instructions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">Chrome</font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font color="#0563c1">
                  <u>
                    {/* <a
              href="https://support.apple.com/guide/safari/sfri11471/mac"
              target="_new"
            >
              <font face="Poppins, sans-serif">Safari</font>
            </a> */}
                  </u>
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font color="#0563c1">
                  <u>
                    {/* <a
              href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies"
              target="_new"
            >
              <font face="Poppins, sans-serif">Firefox</font>
            </a> */}
                  </u>
                </font>
              </p>
            </li>
          </ul>
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
              <b>10. Opting Out of Cookies and Functionality Limitations</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Disabling cookies may impact your experience on our website.
              Essential cookies cannot be turned off, as they are required for
              core functionality. Non-essential cookies are optional, but
              blocking them may reduce the relevance of content and ads
              displayed.
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
              <b>
                11. instiX Global’s Commitment to Cookie Compliance and Security
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global takes all necessary steps to maintain cookie
              compliance. Our internal policies ensure transparency, user
              control, and security in cookie handling. Regular audits and
              updates ensure compliance with evolving regulations.
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
              <b>12. Security, Confidentiality, and Storage of Cookie Data</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Cookie data security is crucial. We use encryption, secure
              storage, and access control measures to protect your cookie data,
              following stringent data privacy practices.
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
              <b>13. User Rights Concerning Personal Data in Cookies</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Under GDPR, you have rights to access, rectify, erase, and
              restrict the processing of personal data. Contact{" "}
            </font>
            <font face="Poppins, sans-serif">
              <b>privacy@instixglobal.com</b>
            </font>
            <font face="Poppins, sans-serif">to exercise these rights.</font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>14. Data Transfers and International Processing Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              We partner with third-party providers globally. All data transfers
              comply with GDPR, including implementing{" "}
            </font>
            <font face="Poppins, sans-serif">
              <b>Standard Contractual Clauses (SCCs)</b>
            </font>
            <font face="Poppins, sans-serif">
              for data transfers outside the EU/EEA.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>15. Periodic Updates to the Cookie Policy</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              We update this policy as necessary, reflecting changes in data
              practices or regulatory requirements. Revisions are posted on our
              website.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>16. Contact Information and Privacy Inquiries</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">For questions, reach out to </font>
            <font face="Poppins, sans-serif">
              <b>privacy@instixglobal.com</b>
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
            <br />
            <br />
          </p>
        </>
      </div>
    </>
  );
};

export default cookiepolicy;
