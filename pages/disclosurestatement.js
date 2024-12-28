import React from "react";
import Head from "next/head";

export async function getServerSideProps() {
  const seoData = {
    title: "InstiX - Your Trading Partner",
    description: "Discover the best trading features and services with InstiX.",
    ogImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
    twitterImage: "https://instix-next.vercel.app/assets/logo-CMhAAnCN.png",
  };

  return {
    props: {
      seoData,
    },
  };
}

const disclosurestatement = ({ seoData }) => {
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
            align="justify"
            style={{
              lineHeight: "150%",
              marginBottom: "0.11in",
              textAlign: "center",
            }}
          >
            <font face="Poppins, sans-serif">
              <font size={4} style={{ fontSize: "16pt" }}>
                <b>instiX Global Risk Disclosure &amp; Disclaimer Statement</b>
              </font>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <br />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>1. Introduction and Purpose of Statement</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This Risk Disclosure Statement (hereafter referred to as the
              “Statement”) has been prepared by instiX Global. (“instiX Global,”
              “we,” “us,” or “our”) to inform and educate prospective and
              current clients about the inherent risks associated with engaging
              in virtual asset transactions through our services. This Statement
              is intended to provide a clear understanding of the numerous risk
              factors linked to virtual assets and blockchain-based services,
              which require careful consideration and due diligence on the part
              of each client.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global LLC is a Virtual Currency Service Provider ( VASP)
              registered in Poland and regulated by the General Inspector of
              Financial Information (“GIF”), under authorization number
              2401-CKRDST.4225.848.2024 and reference number RDWW-1434.
              Operating under this regulatory framework, we are committed to
              maintaining the highest standards of compliance with local and
              international financial laws, especially in Anti-Money Laundering
              (AML) and Counter Financing of Terrorism (CFT) measures. However,
              it is important for clients to understand that regulatory
              oversight alone does not eliminate the significant risks that
              exist in the virtual asset market.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Purpose of the Statement</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The primary purpose of this Statement is to outline and explain
              the potential risks associated with virtual assets and blockchain
              technology. Clients should carefully review this document to
              understand the scope and nature of these risks, as they may
              substantially impact the value, security, and accessibility of
              their virtual assets. This Statement is not exhaustive but is
              designed to cover the general and specific risks that instiX
              Global has identified based on industry standards, regulatory
              guidance, and experience in the virtual asset market.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By using instiX Global’s services, clients confirm their
              understanding of and acceptance of these risks.{" "}
            </font>
            <font face="Poppins, sans-serif">
              <b>
                instiX Global does not provide financial advice, investment
                recommendations, or solicitations for any specific transactions
                or investment strategies.
              </b>
            </font>
            <font face="Poppins, sans-serif">
              {" "}
              All decisions to engage in virtual asset transactions on our
              platform are made solely at the discretion of the client, who
              assumes full responsibility for their actions. This Statement aims
              to clarify the limitations of our role as a facilitator of
              client-initiated transactions and the responsibilities clients
              must undertake in understanding the risks of virtual asset
              investments.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Who Should Read This Statement</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This Statement is intended for all users of instiX Global’s
              services, including current clients and prospective clients.
              Virtual asset transactions can be complex and volatile, and they
              are not suitable for all individuals. Anyone considering
              transacting in virtual assets should be fully informed of the
              associated risks, particularly those risks detailed within this
              Statement. Clients are encouraged to consult independent legal,
              financial, or tax advisors to help them make well-informed
              decisions regarding their virtual asset activities on our
              platform.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Key Responsibilities of instiX Global and the Client</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global provides a platform for the trading and exchange of
              virtual assets and facilitates these activities based on client
              instructions.
            </font>
            <font face="Poppins, sans-serif">
              <b>
                We emphasize that our role is strictly limited to enabling
                access to virtual asset markets; we do not guide, direct, or
                influence client decisions
              </b>
            </font>
            <font face="Poppins, sans-serif">
              . Each transaction is conducted solely at the client’s initiative,
              and our services are designed to facilitate these transactions
              without intervening in the decision-making process.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">Clients must be aware that:</font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  instiX Global’s services are client-initiated, meaning that
                  clients are responsible for all aspects of their transactions,
                  including placing orders, choosing asset types, and
                  determining the timing of trades.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  We do not offer advice on the suitability, timing, or specific
                  nature of transactions and assume no liability for the
                  outcomes of client decisions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Clients are responsible for ensuring they understand the full
                  range of risks associated with virtual assets and are solely
                  accountable for all decisions made on our platform.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global’s relationship with its clients is based on
              transparency and the understanding that each client is responsible
              for their individual investment decisions. While we implement
              various security and compliance measures, these efforts do not
              eliminate the inherent risks associated with virtual assets, which
              remain the responsibility of each client to assess and manage.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                Acknowledgment of Client Responsibilities in Light of Regulatory
                Compliance
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Operating under GIF’s regulatory framework, instiX Global complies
              with strict AML and CFT protocols to ensure a secure and legally
              compliant environment for virtual asset transactions.
              Nevertheless, clients must recognize that regulatory requirements
              vary significantly across jurisdictions, and the global virtual
              asset market is subject to ongoing regulatory developments.
              Clients are therefore responsible for understanding and complying
              with any applicable laws and regulations within their own
              jurisdictions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By initiating transactions on our platform, clients:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Acknowledge that they have reviewed and understood this
                  Statement and are aware of the specific risks that virtual
                  asset transactions entail.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Confirm that they are legally permitted to engage in virtual
                  asset transactions within their jurisdiction and accept all
                  responsibility for legal compliance.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Understand that instiX Global will not bear any liability for
                  losses, penalties, or other consequences arising from a
                  client’s failure to comply with their local laws.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Scope of Risks Covered in This Statement</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The risks outlined in this Statement cover a wide array of
              factors, including but not limited to:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Market risks, such as high volatility and liquidity
                  fluctuations, which may lead to significant financial losses.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Security risks, including vulnerabilities in blockchain
                  technology, cyberattacks, and the risk of irreversible
                  transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Operational risks, which stem from the complex and
                  decentralized nature of virtual asset networks and platforms.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Compliance risks, particularly the risk of non-compliance with
                  local or international regulations that may affect the
                  legality and accessibility of virtual asset transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Custodial risks related to the storage and management of
                  virtual assets, including the potential for loss due to
                  third-party provider issues or security breaches.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This Statement does not cover every potential risk and is not
              intended to replace comprehensive financial advice. Each client
              must conduct their own due diligence and consider their risk
              tolerance, financial circumstances, and regulatory obligations
              before participating in any virtual asset transaction.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>Legal Limitations and Disclaimers</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">Clients must be aware that </font>
            <font face="Poppins, sans-serif">
              <b>
                instiX Global does not provide any guarantees, warranties, or
                assurances regarding the performance or stability of virtual
                assets
              </b>
            </font>
            <font face="Poppins, sans-serif">
              . The Company’s role is limited to facilitating client-initiated
              transactions, and we do not control, influence, or endorse any
              specific outcomes. By using our services, clients acknowledge that
              they:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Accept full responsibility for any gains or losses arising
                  from their transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Understand that virtual asset markets are inherently risky,
                  and there are no guarantees of profit or stability.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Agree to hold instiX Global harmless from any claims, losses,
                  or liabilities related to market movements, technological
                  issues, or any other risks disclosed herein.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The risks discussed in this Statement reflect the current
              understanding and status of virtual asset markets but are not
              exhaustive. Clients should recognize that as the virtual asset
              market evolves, new risks may emerge, and existing risks may
              intensify. instiX Global reserves the right to update or amend
              this Statement in response to regulatory changes, market
              developments, or other relevant factors.
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
              <b>2. Regulatory Overview and Compliance Obligations</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global LLC (“instiX Global,” “Company,” “we,” “our,” or
              “us”) operates as a licensed Virtual Currency Service Provider
              (VCSP) within the Republic of Poland. We are regulated by the
              General Inspector of Financial Information (“GIF”), the Polish
              authority responsible for implementing and overseeing compliance
              with financial regulations, including Anti-Money Laundering (AML)
              and Countering the Financing of Terrorism (CFT). As a licensed
              entity, instiX Global is authorized under authorization number
              2401-CKRDST.4225.848.2024 with reference number RDWW-1434, and our
              registered address is ul. Bartycka 22B suite 21A, Warsaw, Poland
              (00-716).
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This section outlines our regulatory obligations, the compliance
              measures we employ, and the associated responsibilities that
              clients must uphold to use instiX Global’s services. As an
              international platform, instiX Global must balance adherence to
              Polish regulations with global standards and clients’
              responsibilities for complying with local laws, thereby fostering
              a compliant, transparent, and secure environment for virtual asset
              transactions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>2.1 Overview of Polish and EU Regulatory Framework</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global operates within a robust regulatory framework
              established by Polish law and aligned with the broader directives
              and standards of the European Union (EU). Our operations are
              designed to comply with the EU’s legal obligations for Virtual
              Asset Service Providers (VASPs) under regulations such as:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Directive (EU) 2015/849</b>
                </font>
                <font face="Poppins, sans-serif">(AMLD4) and </font>
                <font face="Poppins, sans-serif">
                  <b>Directive (EU) 2018/843</b>
                </font>
                <font face="Poppins, sans-serif">
                  (AMLD5), known as the 4th and 5th Anti-Money Laundering
                  Directives, which require virtual currency platforms to adopt
                  stringent AML/CFT procedures.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulation (EU) 2016/679</b>
                </font>
                <font face="Poppins, sans-serif">
                  (General Data Protection Regulation or GDPR), which mandates
                  the protection and privacy of personal data for individuals
                  within the EU.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              In addition to EU directives, instiX Global adheres to Polish
              legislation, specifically the{" "}
            </font>
            <font face="Poppins, sans-serif">
              <b>
                Act on Counteracting Money Laundering and Terrorist Financing
              </b>
            </font>
            <font face="Poppins, sans-serif">
              of 2018, which incorporates the EU’s AML/CFT standards. These laws
              are intended to enhance transparency, prevent illicit activities,
              and protect the interests of clients and financial markets alike.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>2.2 Compliance with AML and CFT Obligations</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              As a regulated entity, instiX Global has implemented rigorous AML
              and CFT procedures to meet both national and international
              regulatory requirements. The following compliance measures are
              employed to prevent the misuse of our platform for illicit
              activities:
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>a. Know Your Customer (KYC) Protocols</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global requires all clients to complete a comprehensive KYC
              verification process before accessing our services. This process
              includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Identity Verification</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients must provide valid identification documents, such as
                  a passport or national ID, along with any additional
                  documentation required by GIF standards.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Proof of Address</b>
                </font>
                <font face="Poppins, sans-serif">
                  : We request recent utility bills, bank statements, or
                  government-issued correspondence as proof of residence to
                  verify each client’s location.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Enhanced Due Diligence (EDD)</b>
                </font>
                <font face="Poppins, sans-serif">
                  : For clients from high-risk jurisdictions or those engaging
                  in large-volume transactions, enhanced due diligence
                  procedures may apply. This may include additional
                  documentation, financial statements, or source of funds
                  information.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The KYC protocols help us establish the identities of our clients
              and ensure that we remain compliant with regulatory requirements.
              Failure to complete KYC may result in restricted access to
              services.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>b. Monitoring of Transactions</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global conducts ongoing monitoring of all transactions to
              detect suspicious activity and identify patterns associated with
              money laundering or terrorist financing. This includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Real-Time Transaction Analysis</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Our systems monitor transaction volume, frequency, and
                  velocity in real-time to identify unusual patterns.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Suspicious Activity Reports (SARs)</b>
                </font>
                <font face="Poppins, sans-serif">
                  : If we detect potentially suspicious activity, we are legally
                  obligated to submit a SAR to GIF, detailing the nature of the
                  suspicious activity and any relevant information.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By actively monitoring transactions, instiX Global aims to prevent
              the misuse of its platform for illegal purposes while ensuring the
              safety and security of legitimate clients.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>c. Record-Keeping and Reporting</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              In compliance with AML/CFT obligations, instiX Global maintains
              accurate records of client information, transaction history, and
              any reports filed with GIF. These records are retained for a
              minimum of five years from the date of transaction or account
              closure, as required by law. Record-keeping ensures that we can
              provide evidence of compliance to regulators and support law
              enforcement investigations if necessary.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAACCAYAAACAGXJZAAAAJ0lEQVRYhe3OAQkAMAwDsH3+RdTpbuJwGImCnCRTAAA8178DAABbXTzSAuMKrc/IAAAAAElFTkSuQmCC"
              name="Shape1"
              alt="Shape1"
              align="bottom"
              width={602}
              height={2}
            />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>2.3 Data Privacy and Security Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global takes data privacy and security seriously and
              adheres to GDPR, the EU’s comprehensive data protection
              regulation, to safeguard client information. GDPR compliance
              involves:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Data Collection and Usage</b>
                </font>
                <font face="Poppins, sans-serif">
                  : We collect only the data necessary for compliance with
                  AML/CFT laws and operational purposes. Client data is
                  processed fairly, transparently, and solely for the purposes
                  outlined in our Privacy Policy.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Data Retention and Deletion</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Client data is securely stored and retained only as long as
                  required by AML/CFT laws and business purposes. Upon
                  completion of the retention period, data is deleted or
                  anonymized.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Client Rights</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Under GDPR, clients have the right to access their data,
                  request corrections, or request deletion in certain
                  circumstances. Clients may also object to data processing and
                  lodge complaints with regulatory authorities if they believe
                  their data rights have been violated.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global implements advanced encryption, access controls, and
              security protocols to protect client data from unauthorized
              access, ensuring compliance with GDPR requirements and protecting
              client privacy.
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
                2.4 International Regulatory Compliance and Client
                Responsibilities
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              While instiX Global is licensed and regulated under Polish law, we
              recognize the global nature of virtual asset markets. Clients
              accessing our platform from other jurisdictions may be subject to
              additional or different regulatory requirements. Clients are
              responsible for understanding and complying with their local laws,
              as outlined below:
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>a. Jurisdictional Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients must confirm that they are legally permitted to engage in
              virtual asset transactions under the laws of their country of
              residence or citizenship. Regulatory restrictions vary across
              jurisdictions; in certain countries, trading or holding virtual
              assets may be restricted or prohibited. instiX Global cannot
              advise clients on the legal status of virtual assets within their
              specific jurisdiction, so clients should consult with a legal
              professional if necessary.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>b. Consequences of Non-Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Failure to comply with local laws may expose clients to penalties,
              fines, or other regulatory consequences. instiX Global is not
              liable for any legal issues arising from a client’s failure to
              meet jurisdictional requirements, and reserves the right to limit
              or suspend services if we believe a client is engaging in
              transactions that contravene local laws.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>c. Independent Legal and Financial Advice</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients are encouraged to seek independent legal, financial, and
              tax advice before initiating virtual asset transactions,
              particularly if there are uncertainties about the legality of such
              activities in their jurisdiction. By initiating transactions,
              clients confirm they are acting within the bounds of their legal
              and regulatory environment.
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
              <b>2.5 instiX Global’s Role and Limitations in Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global is dedicated to maintaining regulatory compliance
              through the implementation of AML/CFT protocols, transaction
              monitoring, and secure data practices. However, our role is
              limited to providing clients with a secure platform for virtual
              asset transactions, and we do not act as a financial advisor or
              legal representative for our clients.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>a. Non-Advisory Role</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global does not provide personalized legal or financial
              advice. Our services are strictly limited to facilitating
              client-initiated transactions in virtual assets. The
              responsibility for understanding regulatory obligations, risks,
              and compliance requirements lies entirely with the client.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>b. Client Autonomy in Decision-Making</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Each client is solely responsible for the initiation and execution
              of transactions on our platform. instiX Global does not solicit,
              influence, or recommend specific transactions. Clients must make
              informed decisions independently, recognizing that virtual asset
              markets carry inherent risks that they accept by engaging with our
              services.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>c. Enforcement and Reporting Obligations</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global is legally required to report certain activities,
              such as suspicious transactions, to GIF. We fully cooperate with
              regulatory authorities to prevent the misuse of our platform and
              maintain the integrity of the virtual asset ecosystem. If we
              detect non-compliance with AML/CFT laws, we may take appropriate
              action, including freezing assets, suspending accounts, or
              terminating client access to our platform.
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
              <b>2.6 Changes to Regulatory Landscape and Compliance Updates</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The regulatory environment for virtual assets is rapidly evolving,
              with new laws and guidelines emerging regularly. instiX Global is
              committed to adapting its policies and procedures to align with
              any new regulations issued by Polish, EU, or international
              authorities. This dynamic regulatory landscape may result in:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Periodic Updates to AML/CFT Procedures</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global may implement changes to its AML/CFT processes
                  as new requirements arise, potentially requiring additional
                  documentation or verification from clients.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Policy Adjustments</b>
                </font>
                <font face="Poppins, sans-serif">
                  : In response to evolving legal standards, we may amend our
                  Privacy Policy, terms of service, or client obligations to
                  ensure ongoing compliance.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Service Restrictions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Regulatory developments may affect the types of services we
                  offer or restrict access to certain virtual assets. instiX
                  Global reserves the right to modify or discontinue services as
                  necessary to remain compliant.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global will communicate relevant compliance changes to
              clients as they arise, but clients should remain informed about
              regulatory developments that may impact their virtual asset
              activities.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3. General Risks of Virtual Assets</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Virtual assets, while innovative and increasingly popular, involve
              significant risks that clients must fully understand and accept
              before engaging in transactions. Unlike traditional financial
              assets, virtual assets operate on decentralized blockchain
              technology, and their value is often subject to extreme
              volatility, limited liquidity, and unique regulatory challenges.
              Clients are urged to carefully consider these risks, as virtual
              asset markets are highly speculative and may not be suitable for
              all investors.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The following subsections provide a comprehensive overview of the
              general risks associated with virtual assets. By participating in
              virtual asset transactions through instiX Global’s platform,
              clients acknowledge their awareness and acceptance of these risks.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.1 Lack of Government Support and Legal Tender Status</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Virtual assets, unlike traditional currencies or securities, are
              not issued, guaranteed, or backed by any central government,
              financial institution, or regulatory body. This lack of support
              means:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Virtual assets are not recognized as legal tender in most
                  jurisdictions, and there is no guarantee that businesses,
                  financial institutions, or individuals will continue to accept
                  them as a form of payment in the future.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  Without government backing, virtual assets are subject to high
                  levels of market-driven volatility. Their value may fluctuate
                  widely based on demand, public perception, and market
                  sentiment rather than intrinsic economic fundamentals.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This lack of governmental support creates an environment where
              virtual assets can lose value rapidly, without any recourse for
              clients to recover losses through government intervention or
              insurance protections that may apply to traditional assets.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.2 High Price Volatility and Market Dynamics</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The virtual asset market is highly volatile, with prices often
              experiencing sharp fluctuations within short periods. This
              volatility can be influenced by various factors, including but not
              limited to:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Market Sentiment</b>
                </font>
                <font face="Poppins, sans-serif">
                  : News, social media, and public statements can create sudden
                  shifts in demand. Speculative trading, driven by both retail
                  and institutional investors, can result in extreme price
                  swings.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Announcements</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Changes in government policies, regulatory bans, or
                  restrictions on virtual assets can cause substantial market
                  reactions, either positively or negatively impacting asset
                  values.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Technological Developments</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Innovations or vulnerabilities in blockchain technology,
                  such as the launch of new platforms or reports of security
                  breaches, can lead to significant fluctuations in asset
                  prices.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients must be prepared for the possibility of sudden and
              substantial losses and should only invest funds they can afford to
              lose entirely. Due to the speculative nature of virtual assets, it
              is difficult to predict long-term price trends accurately.
              Investing in virtual assets should be done with caution, as high
              volatility could lead to the total loss of capital.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.3 Liquidity Risk</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Liquidity risk in virtual asset markets refers to the possibility
              that certain assets may be difficult to buy or sell quickly
              without significantly affecting the market price. Factors that
              contribute to liquidity risk include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Thinly Traded Markets</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Certain virtual assets may have limited trading volume,
                  making it challenging to execute large transactions without
                  significantly impacting the price.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Market Fragmentation</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Unlike traditional financial assets that are typically
                  traded on centralized exchanges, virtual assets are often
                  traded across multiple platforms and jurisdictions, which can
                  limit liquidity.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Restrictions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Sudden regulatory changes can impact market liquidity by
                  reducing the number of available trading platforms or limiting
                  investor access to certain assets.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Liquidity risks may result in delays in transaction settlement,
              unfavorable pricing, or, in extreme cases, the inability to exit a
              position. Clients must be aware that market conditions may prevent
              them from buying or selling assets promptly or at their desired
              price.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.4 Security and Technological Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Virtual assets rely on blockchain technology, which, while
              innovative, presents its own set of unique security risks:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Cybersecurity Vulnerabilities</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Blockchain networks, wallets, and exchanges are potential
                  targets for hackers, who may attempt to steal virtual assets
                  through methods such as phishing, hacking, and malware
                  attacks. Although blockchain technology is generally secure,
                  specific platforms or service providers may still be
                  vulnerable.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Private Key Management</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset ownership is typically secured through
                  cryptographic private keys. Losing access to private keys,
                  either through misplacement, theft, or technical failure,
                  results in a permanent loss of the associated assets. Private
                  keys cannot be recovered once lost, underscoring the need for
                  clients to secure their own access credentials carefully.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Technological Failures and Forks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Blockchains are susceptible to technological failures, bugs,
                  or unplanned forks (splits in the blockchain). Forks can
                  create duplicate versions of virtual assets, leading to
                  confusion and possible devaluation.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients are responsible for safeguarding their own devices,
              passwords, and private keys. Failure to secure this information
              can result in significant losses, as transactions on the
              blockchain are irreversible and may not be recoverable in cases of
              theft or mismanagement.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.5 Lack of Regulatory Protections</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Unlike traditional financial markets, the virtual asset market
              operates with limited regulatory oversight, which creates
              additional risks for clients. The following factors contribute to
              this regulatory risk:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Lack of Standardization</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset markets lack uniform regulations, which can
                  lead to disparities in asset classification, reporting
                  requirements, and transaction standards across jurisdictions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Risk of Regulatory Crackdown</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual assets operate in a dynamic regulatory environment,
                  where governments and regulatory bodies may impose new
                  restrictions or bans, impacting asset value and accessibility.
                  For instance, certain countries have banned or severely
                  restricted the use of virtual assets, impacting liquidity and
                  market confidence.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Absence of Legal Recourse</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Without the regulatory protections commonly associated with
                  traditional financial products, clients may not have access to
                  dispute resolution or recovery mechanisms. Clients bear all
                  risks of loss without recourse to regulatory bodies in many
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
              The evolving regulatory landscape for virtual assets creates
              uncertainty, and clients should remain informed of relevant
              regulatory changes that could impact their assets. instiX Global
              cannot guarantee immunity from regulatory interventions that may
              affect client holdings.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.6 Risk of Market Manipulation and Fraud</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Virtual asset markets are susceptible to various forms of
              manipulation and fraudulent activities. Some examples include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Pump-and-Dump Schemes</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Certain groups or individuals may artificially inflate an
                  asset’s price through coordinated buying and hype (the “pump”)
                  and then sell off the asset at a profit (the “dump”), leaving
                  uninformed investors with significant losses.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Wash Trading</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Some exchanges or market participants may engage in wash
                  trading, where buy and sell orders are placed simultaneously
                  to create a misleading impression of high trading activity,
                  which can distort the asset’s value.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Ponzi and Pyramid Schemes</b>
                </font>
                <font face="Poppins, sans-serif">
                  : In certain cases, virtual assets have been used to operate
                  Ponzi or pyramid schemes, where returns to earlier investors
                  are funded through investments by newer participants, rather
                  than from profit or legitimate business activities.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients must be vigilant and skeptical of price trends that appear
              unusual or are accompanied by unverified claims. instiX Global
              implements measures to monitor for suspicious trading activity,
              but clients must ultimately exercise caution and conduct
              independent research.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.7 Irreversible Transactions and Risk of Loss</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Blockchain transactions are typically irreversible, meaning that
              once a transaction has been confirmed, it cannot be canceled or
              undone. This presents several risks:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Fraud and Scams</b>
                </font>
                <font face="Poppins, sans-serif">
                  : If clients fall victim to scams or fraud, any transferred
                  virtual assets may be permanently lost. Common fraud methods
                  include phishing attacks, impersonation scams, and social
                  engineering.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Accidental Transactions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Errors in transaction details, such as entering an incorrect
                  wallet address, result in irreversible losses. Blockchain
                  technology does not allow for reversals, so clients must
                  double-check transaction details before initiating transfers.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Custodial Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients who store their assets with third-party custodians
                  should understand that custodial platforms may face their own
                  security risks, insolvency risks, or operational failures.
                  instiX Global encourages clients to use only reputable
                  custodial services and consider non-custodial storage options
                  if appropriate.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.8 Legal and Taxation Uncertainty</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The legal and tax status of virtual assets remains uncertain in
              many jurisdictions, which can lead to complications for clients:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Tax Obligations</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients are responsible for determining and fulfilling their
                  tax obligations based on applicable laws in their
                  jurisdiction. Tax treatment of virtual assets varies
                  significantly across countries, and changes in legislation may
                  result in unanticipated tax liabilities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Legal Classification of Assets</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual assets may be classified differently under various
                  legal systems, impacting their regulatory status, tax
                  treatment, and legal protections. Changes in classification,
                  such as the re-categorization of a virtual asset as a
                  security, could affect its marketability and impose new legal
                  obligations on holders.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Cross-Border Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients engaging in cross-border transactions may face
                  additional tax obligations or legal complexities due to
                  jurisdictional differences in virtual asset regulations.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global does not provide tax advice, and clients should
              consult with qualified tax professionals to understand and comply
              with all relevant tax obligations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>3.9 Unanticipated and Emerging Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              As virtual asset markets and blockchain technology continue to
              develop, new risks may emerge that cannot be fully anticipated.
              Examples of these evolving risks include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Technological Advances</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Improvements in quantum computing, for instance, could
                  potentially compromise existing cryptographic protections for
                  virtual assets. While this risk remains theoretical, clients
                  should be aware of the possibility of future technological
                  threats.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Innovation</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Governments around the world are developing new regulatory
                  approaches for virtual assets. These developments may impose
                  additional compliance requirements or restrict access to
                  certain types of assets or services.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Changing Consumer Behavior</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Trends in consumer behavior or changes in public perception
                  about virtual assets could impact demand, liquidity, and
                  pricing dynamics.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should understand that virtual asset markets are in a
              constant state of flux and be prepared for potential changes that
              could impact their holdings.
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
              <b>4. Market-Specific Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The virtual asset market operates distinctly from traditional
              financial markets and presents a unique set of risks that clients
              must consider. Market-specific risks in virtual assets relate to
              the structural, operational, and regulatory conditions unique to
              this digital economy. Due to factors such as limited market
              liquidity, increased price volatility, and the potential for
              market manipulation, clients may face challenges that are not
              typically encountered with conventional assets. instiX Global.
              (“instiX Global”) outlines these market-specific risks to ensure
              clients are fully informed of the potential pitfalls associated
              with virtual asset transactions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4.1 Liquidity Risk</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Liquidity refers to the ability to buy or sell an asset in a
              timely manner without significantly affecting its price. In
              virtual asset markets, liquidity risk is prominent and can lead to
              substantial losses or delays in executing trades. Factors
              contributing to liquidity risk include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Limited Market Depth</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Certain virtual assets may have low trading volumes or
                  limited market depth, which means there are fewer buyers and
                  sellers available at any given time. As a result, placing
                  large orders may cause significant price fluctuations or may
                  not be executed at all.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Exchange Fragmentation</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual assets are often traded across multiple
                  decentralized exchanges or platforms that operate
                  independently, leading to a fragmented market structure. This
                  fragmentation can create disparities in asset prices,
                  resulting in arbitrage opportunities but also limiting
                  liquidity, especially in smaller or less popular exchanges.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory and Geopolitical Events</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Regulatory announcements, bans, or restrictions on virtual
                  assets in certain countries can suddenly limit access to major
                  trading platforms, thereby reducing liquidity and making it
                  difficult for clients to enter or exit positions.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should be aware that limited liquidity can exacerbate
              volatility and prevent timely exit strategies, particularly during
              periods of market stress. It may be challenging to liquidate
              assets quickly or at a desirable price, resulting in potential
              losses.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4.2 High Volatility and Price Fluctuations</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Virtual asset markets are known for their extreme price
              volatility, driven by factors unique to the digital economy. This
              high volatility may lead to rapid and unpredictable price changes,
              which can significantly impact the value of clients’ holdings.
              Some of the key drivers of volatility include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Speculative Trading</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset markets attract a significant number of
                  speculative traders, leading to rapid buy-sell cycles and
                  considerable price swings. Speculators often react to
                  short-term news, social media trends, or even the actions of
                  influential individuals, which can fuel volatility.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>24/7 Trading</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Unlike traditional financial markets, virtual asset
                  exchanges operate around the clock, allowing for continuous
                  trading. This 24/7 structure amplifies market movements, as
                  price changes can occur at any time, influenced by global
                  events and regional trading patterns.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Lack of Standard Valuation Models</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual assets lack standardized valuation metrics, as they
                  do not produce cash flows, dividends, or traditional
                  indicators of intrinsic value. Consequently, prices are
                  influenced largely by market sentiment, making them prone to
                  sudden and significant fluctuations.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients must recognize that volatility is an inherent feature of
              virtual asset markets and should be prepared for the possibility
              of rapid changes in asset value. High volatility can lead to swift
              and substantial losses, particularly if clients are unable to
              monitor the market continuously.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4.3 Market Manipulation and Fraud Risk</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Due to the relatively unregulated nature of virtual asset markets,
              they are vulnerable to manipulation and fraudulent activities that
              may distort pricing and affect trading conditions. Common forms of
              market manipulation include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Pump-and-Dump Schemes</b>
                </font>
                <font face="Poppins, sans-serif">
                  : In a pump-and-dump scheme, groups of investors artificially
                  inflate the price of a virtual asset through coordinated
                  buying and promotion. Once the price has been raised, these
                  investors sell their holdings at a profit, causing the asset’s
                  value to drop sharply and leaving other investors with losses.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Wash Trading</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Wash trading involves simultaneously buying and selling the
                  same asset to create artificial trading volume and influence
                  perceived demand. By making it appear that an asset has
                  significant trading interest, manipulators can attract
                  uninformed investors, driving up the price without any real
                  market activity.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Spoofing and Layering</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Spoofing and layering involve placing large buy or sell
                  orders with the intention of canceling them before execution,
                  creating false impressions of supply and demand. This can
                  influence asset prices and induce other investors to act based
                  on misleading information.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Due to the decentralized and global nature of virtual asset
              markets, identifying and preventing market manipulation can be
              challenging. Clients should remain vigilant and cautious when
              observing price trends and be wary of unusually high trading
              volumes or sharp price movements that may indicate manipulative
              activity.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4.4 Risk of Exchange Platform Failures and Hacks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Many virtual asset transactions occur on exchanges or trading
              platforms, which are themselves susceptible to a range of risks,
              including operational failures, security breaches, and regulatory
              intervention. Clients who use these platforms may be exposed to:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Exchange Security Breaches</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset exchanges have been frequent targets of
                  cyberattacks, with some resulting in the theft of large
                  amounts of client funds. These breaches can compromise user
                  accounts, leading to substantial losses. Unlike regulated
                  financial institutions, virtual asset exchanges may not offer
                  the same level of security or have insurance protections in
                  place for their clients.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Platform Failures and Outages</b>
                </font>
                <font face="Poppins, sans-serif">
                  : During periods of high market activity or technical issues,
                  exchanges may experience outages or disruptions. This can
                  prevent clients from accessing their accounts, executing
                  trades, or withdrawing funds, which may impact their ability
                  to respond to market events in real-time.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Operational and Custodial Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Some exchanges also act as custodians, holding clients’
                  assets on their behalf. In cases where exchanges lack robust
                  security or operational safeguards, there is an elevated risk
                  of loss or theft. Clients relying on third-party platforms for
                  custody should be aware of these operational risks.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global encourages clients to use only reputable exchanges
              and to consider using secure, independent wallets when possible to
              mitigate the risk of exchange failures and unauthorized access.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4.5 Regulatory Risk and Legal Uncertainty</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Virtual asset markets operate within an evolving and often
              uncertain regulatory environment, which can lead to sudden changes
              in market access, legal obligations, and asset valuations.
              Regulatory risk arises from factors such as:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Unclear Regulatory Status</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual assets are classified differently in various
                  jurisdictions—some as commodities, others as securities, and
                  still others with no defined legal status. This lack of
                  consistency can create legal uncertainty for clients and
                  impact the tradability or liquidity of certain assets.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Potential for Regulatory Crackdowns</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Government authorities worldwide continue to assess the
                  regulatory implications of virtual assets. In some cases,
                  authorities may impose restrictions, bans, or new compliance
                  requirements on virtual asset trading or ownership. Such
                  regulatory actions can cause market disruptions, leading to
                  price drops and reduced liquidity.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Jurisdictional Differences</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Different countries impose varying rules on virtual asset
                  exchanges, wallets, and custodians. Clients who engage in
                  cross-border transactions may face additional regulatory
                  complexities, including taxation, reporting requirements, and
                  restricted access to trading platforms.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should be mindful of the regulatory status of virtual
              assets within their own jurisdiction and stay informed of
              developments that may impact their ability to trade or hold
              assets. instiX Global cannot predict or influence regulatory
              changes, and clients must bear the risk of legal and regulatory
              compliance on their own.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>4.6 Concentration Risk and Market Dependency</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The virtual asset market often sees concentration in terms of
              asset ownership and trading activity, which can lead to heightened
              risk if large holders, known as “whales,” decide to buy or sell
              significant amounts. This concentration risk includes:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Influence of Large Holders</b>
                </font>
                <font face="Poppins, sans-serif">
                  : A small number of large holders can significantly impact the
                  price of a virtual asset through concentrated buying or
                  selling. If such holders decide to liquidate their assets, it
                  may trigger substantial price declines, leaving smaller
                  investors vulnerable.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Dependency on Key Market Players</b>
                </font>
                <font face="Poppins, sans-serif">
                  : The market often relies on influential exchanges,
                  custodians, or liquidity providers. If these entities
                  experience operational issues, regulatory scrutiny, or
                  financial instability, their exit could disrupt the market.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should be aware that price movements may not always
              reflect broader market conditions but may be influenced by the
              actions of a few major stakeholders.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5. Transactional and Operational Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Engaging in virtual asset transactions involves unique
              transactional and operational risks that clients must carefully
              consider. These risks are inherent to the decentralized and
              technological nature of blockchain networks and the platforms that
              facilitate virtual asset transactions. instiX Global. (“instiX
              Global”) outlines these risks to ensure clients are fully aware of
              the potential challenges they may encounter when executing
              transactions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.1 Irreversible Transactions</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Blockchain transactions are generally irreversible once confirmed
              on the network, a feature designed to ensure security but which
              poses significant risks for clients. Unlike traditional financial
              transactions, blockchain technology does not allow for refunds,
              chargebacks, or reversals in the event of errors or fraudulent
              transactions. As a result:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Mistaken Transactions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : If clients enter incorrect information, such as wallet
                  addresses or transaction amounts, the funds may be
                  irreversibly transferred to an unintended recipient. In such
                  cases, there is no recourse to recover the funds.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Fraud and Scams</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients who fall victim to fraudulent schemes or phishing
                  attacks may lose their assets permanently. Scammers often
                  employ deceptive tactics to acquire private keys or
                  impersonate reputable entities, leading to unauthorized
                  transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction Confirmation Delays</b>
                </font>
                <font face="Poppins, sans-serif">
                  : While blockchain transactions are often processed quickly,
                  certain networks experience delays during periods of high
                  activity. Delayed confirmations can prevent clients from
                  completing time-sensitive transactions, potentially resulting
                  in losses.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients are strongly encouraged to double-check all transaction
              details before proceeding, as instiX Global cannot intervene or
              assist in recovering funds once transactions are confirmed on the
              blockchain.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.2 Custodial Risks and Asset Security</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients who store virtual assets with third-party custodians or
              within wallets provided by virtual asset exchanges face additional
              risks related to the security and management of these assets:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Custodial Service Reliability</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Custodial providers may face technical issues, security
                  breaches, or operational failures that can compromise clients’
                  holdings. Clients are advised to select only reputable
                  custodians with robust security practices.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Private Key Management</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients who use non-custodial wallets bear the
                  responsibility of managing their private keys. Losing or
                  mismanaging a private key can lead to permanent loss of access
                  to the associated assets. instiX Global strongly recommends
                  clients use secure methods for storing and protecting private
                  keys.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Dependence on Third-Party Security</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Custodial services and exchanges may be targeted by hackers,
                  who exploit vulnerabilities to gain unauthorized access to
                  funds. In the absence of insurance protections, clients may be
                  unable to recover assets in the event of a security breach at
                  the custodian.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global encourages clients to consider alternative storage
              solutions, such as hardware wallets or multi-signature wallets, to
              mitigate custodial and security risks.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.3 Network Congestion and Operational Delays</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Blockchain networks operate independently, and their performance
              can vary based on network activity and operational capacity:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Network Congestion</b>
                </font>
                <font face="Poppins, sans-serif">
                  : During periods of high transaction volume, networks may
                  become congested, leading to slower processing times and
                  increased transaction fees. Clients who rely on timely
                  transactions, such as those involving trading activities, may
                  experience delays that impact their ability to respond to
                  market movements.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Higher Transaction Fees</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Network congestion can result in higher fees for faster
                  transaction confirmation. Clients may need to pay premium fees
                  for urgent transactions or accept longer delays for lower-fee
                  transactions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Operational Failures</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Unexpected operational disruptions on the part of exchanges,
                  custodial platforms, or blockchain networks themselves can
                  lead to temporary unavailability of services. Such disruptions
                  may impact clients’ ability to access or transfer their
                  assets.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should factor in potential delays and fluctuating
              transaction fees when planning their activities and should
              consider alternative networks if they require rapid transaction
              confirmations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.4 Risk of Software Errors and Protocol Vulnerabilities</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Blockchain technology is still evolving, and the software used to
              support virtual assets may be prone to errors, bugs, or other
              vulnerabilities:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Smart Contract Vulnerabilities</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Certain virtual assets are governed by smart
                  contracts—self-executing code stored on a blockchain. Smart
                  contracts can be vulnerable to errors or exploits that, if not
                  identified, may lead to loss of assets or unintended execution
                  of functions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Protocol Failures and Forks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Blockchain networks may experience protocol failures or
                  forks, where the network splits into separate chains. Forks
                  can create duplicate assets, affect transaction histories, and
                  introduce security risks.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Software Compatibility Issues</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Updates to blockchain protocols may render certain
                  applications, wallets, or smart contracts incompatible with
                  previous versions, potentially leading to technical issues and
                  asset accessibility problems.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should be aware of the technological risks associated with
              the virtual asset platforms they use and stay informed of any
              protocol updates or changes that may impact their holdings.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.5 Risk of Cyberattacks and Security Breaches</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Cybersecurity remains a critical issue for virtual asset platforms
              and users alike, given the decentralized and digital nature of
              these assets:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Phishing and Social Engineering Attacks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Hackers may use phishing emails, fake websites, or social
                  engineering tactics to deceive clients and obtain sensitive
                  information such as passwords or private keys. Clients should
                  be vigilant and verify all communications from service
                  providers.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Ransomware and Malware</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Devices used for virtual asset transactions may be
                  vulnerable to ransomware or malware attacks. Once installed,
                  such software can lock or steal sensitive information, leading
                  to significant losses.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Distributed Denial-of-Service (DDoS) Attacks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : DDoS attacks can disrupt virtual asset exchanges and
                  custodial services, making it difficult for clients to access
                  their accounts or complete transactions.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global encourages clients to implement best practices for
              online security, including using two-factor authentication,
              regularly updating software, and avoiding public Wi-Fi networks
              for transactions.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>5.6 Reliance on Third-Party Service Providers</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The virtual asset ecosystem relies on a network of third-party
              service providers, including exchanges, custodians, wallet
              providers, and blockchain infrastructure services. Clients face
              potential risks if these third-party providers encounter financial
              instability, technical failures, or compliance issues:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Exchange and Wallet Service Outages</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset platforms may experience service outages due
                  to system maintenance, regulatory intervention, or financial
                  issues. Such outages can prevent clients from accessing or
                  transferring their assets when needed.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Provider Bankruptcy or Insolvency</b>
                </font>
                <font face="Poppins, sans-serif">
                  : If an exchange or custodian becomes insolvent, clients may
                  face difficulty retrieving their assets, particularly if they
                  are held in a shared custodial account without individual
                  insurance coverage.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Intervention</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Regulatory bodies may impose sanctions, freeze accounts, or
                  restrict access to certain service providers, potentially
                  impacting clients’ ability to use specific platforms.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should diversify their asset storage and avoid relying
              exclusively on a single third-party provider for critical
              services.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAACCAYAAACAGXJZAAAAJ0lEQVRYhe3OAQkAMAwDsH3+RdTpbuJwGImCnCRTAAA8178DAABbXTzSAuMKrc/IAAAAAElFTkSuQmCC"
              name="Shape2"
              alt="Shape2"
              align="bottom"
              width={602}
              height={2}
            />
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6. Jurisdictional Compliance and Client Responsibilities</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients of instiX Global must be fully aware of and responsible
              for understanding the regulatory requirements within their
              jurisdiction before engaging in virtual asset transactions. This
              section outlines the client’s responsibilities concerning
              jurisdictional compliance and the potential consequences of
              failing to meet local regulatory obligations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6.1 Client Obligation to Verify Local Laws</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients are solely responsible for determining the legality of
              virtual asset transactions within their country of residence or
              citizenship. Regulatory approaches to virtual assets vary widely
              across jurisdictions, with some countries imposing strict
              regulations, limitations, or outright bans. Clients must:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Understand Applicable Laws</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients should verify whether virtual asset activities are
                  permitted in their jurisdiction and comply with any licensing
                  or reporting requirements that may apply.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Be Aware of Tax Implications</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual assets are subject to various tax treatments
                  depending on the country, and clients may be required to
                  report gains, losses, or holdings to tax authorities. Failure
                  to do so may result in fines or penalties.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Seek Professional Advice</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Given the complex and evolving nature of virtual asset
                  regulations, clients are encouraged to consult with legal and
                  tax advisors to understand their responsibilities fully.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global cannot advise on jurisdictional compliance and
              assumes no liability for clients’ failure to adhere to local
              regulations.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6.2 Legal Consequences of Non-Compliance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              If clients engage in virtual asset transactions that are not
              permitted within their jurisdiction, they may face serious
              consequences:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Penalties</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Non-compliance with virtual asset regulations may result in
                  fines, account freezes, or other penalties imposed by local
                  authorities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Loss of Access to Funds</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Regulatory bodies may restrict or prevent clients from
                  accessing their virtual asset holdings if found in violation
                  of local laws.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Tax Penalties and Audits</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients who fail to meet their tax reporting obligations may
                  be subject to audits, penalties, or legal action, potentially
                  affecting their financial standing and access to funds.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global reserves the right to limit or suspend services if
              it becomes aware of any regulatory non-compliance issues that may
              affect the client’s ability to lawfully transact.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6.3 Independent Decision-Making and Risk Awareness</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global does not provide investment or legal advice, and
              clients are responsible for independently assessing the risks of
              participating in virtual asset transactions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Self-Directed Trading</b>
                </font>
                <font face="Poppins, sans-serif">
                  : All transactions on the platform are client-initiated.
                  instiX Global does not solicit, recommend, or influence
                  clients’ trading decisions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Understanding of Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients acknowledge that they have read and understood the
                  risk disclosures provided by instiX Global and are prepared to
                  assume the risks associated with virtual asset activities.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Compliance with Foreign Regulations</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients residing or traveling outside their primary
                  jurisdiction should be mindful of additional regulatory
                  restrictions that may apply to cross-border transactions and
                  ensure they comply with all applicable laws.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>6.4 Jurisdictional Restrictions and Platform Access</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              impose restrictions on platform access based on jurisdictional
              regulations, either to comply with local laws or as a result of
              international sanctions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Prohibited Jurisdictions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global reserves the right to restrict access to
                  certain regions where virtual asset transactions are banned or
                  heavily regulated.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regulatory Updates</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global continually monitors global regulatory changes
                  and may adjust platform access accordingly. Clients should
                  remain informed about restrictions that could affect their
                  ability to use instiX Global’s services.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Client Notification</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Where possible, instiX Global will notify clients of any
                  changes affecting platform access due to regulatory updates;
                  however, it is ultimately the client’s responsibility to
                  verify any restrictions that may apply.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              ></p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                7. Non-Solicitation, Independent Decision-Making, and Order
                Execution
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global. (“instiX Global”) operates as a neutral platform
              for facilitating client-initiated transactions in virtual assets.
              We emphasize that our role is strictly limited to enabling access
              to the virtual asset market without providing guidance,
              solicitation, or recommendations regarding any specific assets,
              trading strategies, or market timing. This section outlines instiX
              Global’s non-solicitation policy and reinforces the client’s
              responsibility for independent decision-making and order
              execution.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.1 Non-Solicitation and No Investment Advice</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global does not engage in the solicitation or
              recommendation of any virtual asset transactions. We refrain from
              advising clients on which assets to buy, sell, hold, or trade, and
              we do not provide personalized investment advice regarding the
              suitability of particular virtual asset transactions. The
              following points highlight our non-solicitation commitment:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>No Recommendations</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global does not provide recommendations, insights, or
                  suggestions regarding specific virtual assets or investment
                  strategies.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>No Endorsement of Asset Value or Performance</b>
                </font>
                <font face="Poppins, sans-serif">
                  : We do not endorse or verify the value, performance, or
                  future potential of any virtual asset traded on our platform.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Absence of Financial Guidance</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global does not offer financial, tax, or legal
                  guidance on the consequences of virtual asset transactions,
                  and we recommend clients seek independent professional advice
                  before participating in the virtual asset market.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By maintaining a non-solicitation approach, instiX Global provides
              clients with a platform that respects their autonomy and promotes
              informed, independent decision-making.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.2 Independent Decision-Making</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients are fully responsible for their investment decisions,
              including the choice of virtual assets, trading strategies, and
              timing of transactions. instiX Global’s platform is designed to
              support client-initiated trading activities without intervention
              or influence. Clients must recognize that:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Investment Choices Are Client-Led</b>
                </font>
                <font face="Poppins, sans-serif">
                  : All decisions regarding virtual asset transactions are made
                  independently by the client. instiX Global does not prompt or
                  direct clients toward specific assets or strategies.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Assumption of Risk</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients acknowledge that virtual asset transactions are
                  speculative and may result in losses. By engaging in
                  transactions on instiX Global’s platform, clients accept the
                  risks involved and agree that they have conducted their own
                  research or consulted with a professional advisor.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Awareness of Market Volatility</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients should be aware that virtual asset markets can be
                  highly volatile, and price fluctuations may result in
                  substantial gains or losses. The responsibility for
                  understanding and managing these risks lies solely with the
                  client.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global encourages clients to take full control of their
              trading activities and make decisions based on careful
              consideration of their personal financial goals, risk tolerance,
              and market understanding.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.3 Order Execution and Trade Processing</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global’s platform facilitates the execution of orders based
              on client instructions, with a commitment to providing a seamless
              and transparent process for each transaction. Our role in order
              execution is strictly administrative, ensuring that trades are
              processed according to the client’s instructions. Key aspects of
              our order execution process include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Execution Based on Client Instruction</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global only executes orders as directed by the
                  client. We do not alter, modify, or intervene in trade
                  parameters once they have been set by the client.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Order Matching and Processing</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Our platform matches buy and sell orders between clients,
                  using automated systems to ensure efficient and timely
                  transaction processing. instiX Global cannot guarantee that
                  every order will be filled immediately, as this depends on
                  factors such as market liquidity and pricing conditions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction Confirmation and Finality</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Once an order is executed, the transaction is considered
                  final. Clients cannot request modifications, reversals, or
                  cancellations after order execution, as blockchain
                  transactions are generally irreversible. Clients are
                  encouraged to double-check all order details before submitting
                  trades.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>7.4 Limitations on Liability for Transaction Execution</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global’s responsibility in the transaction process is
              limited to ensuring that client orders are processed accurately
              and promptly based on the information provided by the client.
              However, certain factors beyond our control may impact the timing
              and execution of transactions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Market Conditions and Liquidity</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset markets are subject to fluctuations in
                  liquidity, which may affect order execution speed and prices.
                  instiX Global cannot be held liable for delays or price
                  changes resulting from market conditions.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Network Congestion and Transaction Fees</b>
                </font>
                <font face="Poppins, sans-serif">
                  : High transaction volumes or network congestion on certain
                  blockchains can delay order confirmation and result in higher
                  fees. Clients are responsible for any fees associated with
                  their transactions, which are automatically deducted at the
                  time of order processing.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>System and Platform Outages</b>
                </font>
                <font face="Poppins, sans-serif">
                  : While instiX Global strives to provide continuous access to
                  its platform, unforeseen technical issues or maintenance
                  requirements may cause temporary outages. instiX Global is not
                  liable for losses incurred due to service interruptions but
                  will endeavor to resolve any technical issues promptly.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should understand the limitations of instiX Global’s
              liability in the transaction process and be prepared for potential
              delays or disruptions that may impact order execution.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                7.5 Confirmation of Client Responsibility for Order Accuracy
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global strongly advises clients to review all order
              details, including asset type, quantity, and wallet addresses,
              before submitting trades. To minimize errors and ensure successful
              transactions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Verify Information</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients must ensure the accuracy of all transaction details
                  before confirming orders. Errors in wallet addresses or asset
                  selection may result in irreversible losses.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Avoid Unauthorized Transactions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients are responsible for safeguarding their account
                  credentials and must notify instiX Global immediately if they
                  suspect unauthorized access. Unauthorized transactions may
                  lead to permanent loss of assets, as blockchain transactions
                  cannot be reversed.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By accepting full responsibility for the accuracy and security of
              their transactions, clients help maintain the integrity of their
              virtual asset holdings.
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
              <b>8. Conflicts of Interest and Transparency</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global. is committed to maintaining transparency in all
              client interactions, including our policies, services, and
              potential conflicts of interest. We recognize that conflicts of
              interest may arise within financial transactions and take
              proactive measures to disclose and manage them to protect our
              clients’ interests.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>
                8.1 Identification and Disclosure of Potential Conflicts of
                Interest
              </b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Conflicts of interest may arise when the interests of instiX
              Global diverge from those of our clients. Our policies are
              structured to identify, disclose, and manage these situations
              effectively. Examples of potential conflicts include:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transactional Compensation</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global may receive fees from transaction processing,
                  but these fees are transparently disclosed to clients before
                  executing trades. We do not receive additional compensation
                  based on transaction volume or profit.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Third-Party Partnerships</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global may collaborate with external service
                  providers, such as custodial services or wallet providers.
                  Clients are informed of such partnerships, and we strive to
                  ensure that these relationships do not influence our services
                  or compromise client interests.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By identifying and openly disclosing potential conflicts, instiX
              Global aims to maintain client trust and ensure all transactions
              are conducted with transparency.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8.2 Measures to Mitigate Conflicts of Interest</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global has implemented measures to mitigate conflicts of
              interest, ensuring that our business practices align with the
              interests of our clients:
            </font>
          </p>
          <p
            align="justify"
            style={{
              lineHeight: "150%",
              marginLeft: "0.5in",
              marginBottom: "0.11in",
            }}
          >
            <font face="Poppins, sans-serif">
              <b>Objective Service Provision</b>
            </font>
            <font face="Poppins, sans-serif">
              : instiX Global does not promote or endorse specific virtual
              assets, maintaining a neutral stance to prevent any undue
              influence on client decision-making.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>8.3 Client Awareness and Transparency in Communication</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global is dedicated to transparent communication, providing
              clients with clear, accurate information regarding our services,
              policies, and any changes that may affect their accounts or
              transactions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Clear Fee Structure</b>
                </font>
                <font face="Poppins, sans-serif">
                  : We disclose all applicable fees, including transaction fees,
                  withdrawal fees, and any other charges, prior to the execution
                  of trades. Clients can access a complete fee schedule on our
                  website.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Regular Policy Updates</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global regularly reviews its policies to ensure
                  compliance with evolving regulations and best practices.
                  Clients are notified of any policy changes, and we provide
                  updated documents to facilitate informed decision-making.
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
              <b>9. Public Ledger, Privacy, and Security Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global. (“instiX Global”) prioritizes client security and
              transparency by providing insights into the public, decentralized
              nature of blockchain technology and the associated privacy and
              security risks. Given that virtual asset transactions are recorded
              on publicly accessible ledgers, users must understand how this
              impacts data privacy, confidentiality, and security, particularly
              in the context of their digital identities and transaction
              histories.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">9</font>
            <font face="Poppins, sans-serif">
              <b>.1 Public Nature of Blockchain Ledgers</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Blockchain technology operates on decentralized, public ledgers
              where transaction data is recorded permanently and is accessible
              to anyone with the appropriate tools. Unlike traditional financial
              records, blockchain transactions are viewable by the public and
              provide a high degree of transparency. However, this transparency
              has its own inherent risks:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Permanent Record of Transactions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Each transaction is permanently recorded on the blockchain,
                  rendering it immutable and publicly accessible. Once a
                  transaction is added to the blockchain, it cannot be modified,
                  reversed, or deleted.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Traceability of Transactions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : While blockchain transactions are pseudonymous, meaning they
                  don’t directly display personal identifiers, sophisticated
                  analysis tools can trace wallet addresses and transaction
                  histories. This could potentially expose the transaction
                  history of a specific wallet to public scrutiny, which may
                  reveal patterns or identifiable information.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients should be aware that despite the pseudonymous nature of
              blockchain, they may still face risks related to the traceability
              of their transactions and the permanence of data on public
              ledgers.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>9.2 Privacy Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              In addition to the public nature of transaction data, clients
              should also consider privacy-related risks inherent to digital
              transactions and blockchain:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Limited Anonymity</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Blockchain transactions may be pseudonymous, but they are
                  not entirely anonymous. With access to specific data points,
                  such as wallet addresses, transaction volumes, or patterns,
                  external entities may be able to infer personal information,
                  potentially impacting the client’s privacy.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Data Exposure to Third-Party Platforms</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients may rely on third-party platforms, such as exchanges
                  or wallet providers, that collect personal and financial
                  information for regulatory purposes. These platforms may share
                  information with regulators or other entities, introducing
                  additional risks to client privacy.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Compliance with Regulatory Requirements</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients in specific jurisdictions may be required to report
                  virtual asset transactions for tax or regulatory compliance
                  purposes. Compliance with these regulations could lead to
                  further exposure of personal information.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global advises clients to consider privacy implications
              carefully, understanding that certain elements of their
              transactional activities may be accessible to third parties and
              possibly identifiable through advanced analysis tools.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>9.3 Security Risks in Blockchain Transactions</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The security of virtual asset transactions depends on the
              robustness of both the underlying blockchain and the safeguards
              implemented by the user. Security risks include both technological
              vulnerabilities and user-specific practices that may affect the
              safety of assets:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Private Key Security</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Blockchain transactions are secured by private keys, which
                  are unique cryptographic codes used to authorize transactions.
                  If a private key is lost, stolen, or exposed, it may result in
                  a permanent loss of assets, as there is no way to retrieve a
                  compromised private key. Clients are responsible for
                  safeguarding their private keys and ensuring secure storage.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Susceptibility to Cyberattacks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset platforms, wallets, and exchanges are common
                  targets of cyberattacks. Threats include hacking, phishing
                  schemes, malware, and ransomware, which may compromise
                  clients’ assets. Clients should exercise caution and follow
                  best practices to mitigate these risks.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Lack of Recourse in Case of Theft or Loss</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Due to the decentralized and often anonymous nature of
                  virtual assets, there is generally no legal recourse if assets
                  are stolen or lost. Clients are encouraged to adopt advanced
                  security measures, including multi-factor authentication,
                  encrypted storage, and secure wallet choices.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global recommends that clients take proactive steps to
              protect their private keys, use reputable platforms for
              transactions, and implement strong personal security practices to
              reduce the risk of cyber-related losses.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>9.4 Use of Third-Party Custodial Services</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients may choose to use third-party custodial services, which
              can introduce additional privacy and security risks:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Reliance on Third-Party Security</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Third-party custodians may manage private keys on behalf of
                  clients, which can simplify access but introduces risks
                  associated with platform reliability and security.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Custodial Account Vulnerabilities</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Using custodial accounts means entrusting virtual assets to
                  an external provider, which could be vulnerable to hacking,
                  regulatory actions, or operational failures.
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
              <b>10. Detailed Disclaimers and Client Acknowledgment of Risks</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              The following section outlines critical disclaimers and a
              comprehensive acknowledgment of the risks associated with using
              instiX Global’s platform. By engaging in virtual asset
              transactions through instiX Global, clients confirm their
              understanding and acceptance of these risks, including all factors
              related to market volatility, technological vulnerabilities, and
              jurisdictional compliance.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>10.1 General Disclaimers</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              instiX Global discloses that participation in virtual asset
              transactions carries inherent risks, and clients must fully
              understand these risks prior to engaging in any transactions:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>No Guarantees of Profit</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Virtual asset trading is speculative and highly volatile,
                  and clients are advised that there is no guarantee of profit.
                  The value of assets may fluctuate unpredictably, and clients
                  could incur significant losses.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>No Financial Advice</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global does not provide financial, investment, legal,
                  or tax advice. Clients should seek independent professional
                  advice to understand how virtual asset transactions may impact
                  their financial position, tax obligations, and legal standing.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Platform Availability</b>
                </font>
                <font face="Poppins, sans-serif">
                  : While instiX Global aims to provide continuous access to its
                  platform, there may be instances where maintenance, technical
                  issues, or regulatory actions could disrupt services. instiX
                  Global is not liable for any losses incurred as a result of
                  platform outages or delays in transaction processing.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Changes in Regulatory Environment</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global operates under current legal and regulatory
                  frameworks, but these may change. Regulatory updates may
                  impact clients’ access to services, trading rights, or
                  obligations. Clients must remain informed of relevant
                  regulations that may affect their transactions.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              These disclaimers serve as a clear notification to clients of the
              scope of risks involved in virtual asset trading, and clients are
              urged to exercise caution in light of these disclosures.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>10.2 Risk Acknowledgment by Client</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By using instiX Global’s platform, clients explicitly acknowledge
              the risks outlined in this statement and accept full
              responsibility for their actions and decisions. Clients confirm
              the following:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Understanding of Market Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients recognize that virtual assets are highly
                  speculative, volatile, and may result in total loss of funds.
                  They have read and understood the risks associated with market
                  fluctuations, liquidity issues, and potential for complete
                  devaluation of virtual assets.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Acceptance of Technological Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients acknowledge the technological risks associated with
                  blockchain, including risks of cyberattacks, system failures,
                  and irreversible transactions. They accept responsibility for
                  safeguarding their assets, using secure wallets, and
                  implementing strong personal security practices.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Jurisdictional and Regulatory Compliance</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients confirm they are aware of their responsibility to
                  comply with local laws, including tax obligations, and
                  understand that instiX Global cannot offer legal or tax
                  advice. Clients further acknowledge that instiX Global may be
                  required to share information with regulatory bodies, and they
                  accept any consequences arising from non-compliance with local
                  regulations.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Sole Responsibility for Trading Decisions</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Clients affirm that all trading activities are based on
                  their own research, judgment, and professional advice where
                  applicable. instiX Global neither encourages nor directs
                  specific transactions, and clients assume all risks associated
                  with their choices.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>10.3 Agreement to Indemnify and Hold Harmless</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              Clients agree to indemnify and hold instiX Global harmless from
              any claims, losses, or damages arising from their use of the
              platform, including but not limited to:
            </font>
          </p>
          <ul>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Transaction Losses</b>
                </font>
                <font face="Poppins, sans-serif">
                  : Losses resulting from market volatility, transaction delays,
                  incorrect order details, or failed trades are solely the
                  client’s responsibility.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Breach of Compliance</b>
                </font>
                <font face="Poppins, sans-serif">
                  : If clients fail to meet jurisdictional or regulatory
                  obligations, they bear responsibility for any legal or
                  financial consequences.
                </font>
              </p>
            </li>
            <li>
              <p
                align="justify"
                style={{ lineHeight: "150%", marginBottom: "0.11in" }}
              >
                <font face="Poppins, sans-serif">
                  <b>Third-Party Risks</b>
                </font>
                <font face="Poppins, sans-serif">
                  : instiX Global is not liable for risks associated with
                  third-party custodians, exchanges, or service providers, and
                  clients accept these risks independently.
                </font>
              </p>
            </li>
          </ul>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              This acknowledgment reinforces the client’s understanding that
              they are solely responsible for all aspects of their trading
              activities, including financial, technological, and regulatory
              risks.
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              <b>10.4 Binding Acknowledgment of Risk Acceptance</b>
            </font>
          </p>
          <p
            align="justify"
            style={{ lineHeight: "150%", marginBottom: "0.11in" }}
          >
            <font face="Poppins, sans-serif">
              By engaging with instiX Global’s platform, clients bind themselves
              to the acceptance of the terms outlined in this Risk Disclosure
              Statement. Clients confirm that they have read, understood, and
              agree to each section’s terms, recognizing that instiX Global’s
              role is limited to facilitating transactions without
              responsibility for individual financial outcomes.
            </font>
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

export default disclosurestatement;
