import React, { useEffect } from "react";
import { Navbar, Footer, MobileTitle } from "../Components";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const divStyle = `flex flex-col text-justify text-white text-[16px] gap-8 my-12 about-font`;
    const boldFontStyle = `font-bold text-[20px] uppercase text-left`;
    const subHeadingStyle = `text-[18px] underline`;
    const listHead = `font-bold`;
    const listStyle = `list-decimal list-inside px-4 flex flex-col gap-2`;
    return (
        <div className="back about-font">
            <Navbar />
            <div className="sm:px-12 px-4 ">
                <MobileTitle title="Privacy Policy" />
                <div className={divStyle}>
                    <h1>
                        This Privacy Policy describes how gramieno.com (the
                        “Site” or “we”) collects, uses, and discloses your
                        Personal Information when you visit or make a purchase
                        from the Site.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Colleting Personal Information
                    </h1>
                    <h1>
                        When you visit the Site, we collect certain information
                        about your device, your interaction with the Site, and
                        information necessary to process your purchases. We may
                        also collect additional information if you contact us
                        for customer support. In this Privacy Policy, we refer
                        to any information that can uniquely identify an
                        individual (including the information below) as
                        “Personal Information”. See the list below for more
                        information about what Personal Information we collect
                        and why.
                    </h1>
                    <h1 className={subHeadingStyle}>Device Information</h1>
                    <ol className={listStyle}>
                        <li>
                            <span className={listHead}>
                                Examples of Personal Information collected:
                            </span>{" "}
                            Version of web browser, IP address, time zone,
                            cookie information, what sites or products you view,
                            search terms, and how you interact with the Site.
                        </li>
                        <li>
                            <span className={listHead}>
                                Purpose of collection:
                            </span>{" "}
                            To load the Site accurately for you, and to perform
                            analytics on Site usage to optimize our Site.
                        </li>
                        <li>
                            <span className={listHead}>
                                Source of collection:
                            </span>{" "}
                            Collected automatically when you access our Site
                            using cookies, log files, web beacons, tags, or
                            pixels.
                        </li>
                        <li>
                            <span className={listHead}>
                                Disclosure for a business purpose:
                            </span>{" "}
                            Shared with our processor Shopify.
                        </li>
                    </ol>
                    <br />
                    <h1 className={subHeadingStyle}>Order Information</h1>
                    <ol className={listStyle}>
                        <li>
                            <span className={listHead}>
                                Examples of Personal Information collected:
                            </span>{" "}
                            Name, billing address, shipping address, payment
                            information (including credit card numbers), email
                            address, and phone number.
                        </li>
                        <li>
                            <span className={listHead}>
                                Purpose of collection:
                            </span>{" "}
                            To provide products or services to you to fulfill
                            our contract, to process your payment information,
                            arrange for shipping, and provide you with invoices
                            and/or order confirmations, communicate with you,
                            screen our orders for potential risk or fraud, and
                            when in line with the preferences you have shared
                            with us, provide you with information or advertising
                            relating to our products or services.
                        </li>
                        <li>
                            <span className={listHead}>
                                Source of collection:
                            </span>{" "}
                            Collected from you.
                        </li>
                        <li>
                            <span className={listHead}>
                                Disclosure for a business purpose:
                            </span>{" "}
                            Shared with our processor Shopify.
                        </li>
                    </ol>
                    <br />
                    <h1 className={subHeadingStyle}>
                        Customer Support Information
                    </h1>
                    <ol className={listStyle}>
                        <li>
                            <span className={listHead}>
                                Purpose of collection:
                            </span>{" "}
                            To provide customer support
                        </li>
                        <li>
                            <span className={listHead}>
                                Source of collection:
                            </span>{" "}
                            Collected from you.
                        </li>
                    </ol>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Sharing Personal Information{" "}
                    </h1>
                    <h1>
                        We share your Personal Information with service
                        providers to help us provide our services and fulfill
                        our contracts with you, as described above. For example:
                    </h1>
                    <ol className={listStyle}>
                        <li>
                            We use Shopify to power our online store. You can
                            read more about how Shopify uses your Personal
                            Information here:
                            <h1
                                href="https://www.shopify.com/legal/privacy"
                                target="_blank"
                            >
                                {" "}
                                https://www.shopify.com/legal/privacy.
                            </h1>
                        </li>
                        <li>
                            We may share your Personal Information to comply
                            with applicable laws and regulations, to respond to
                            a subpoena, search warrant or other lawful request
                            for information we receive, or to otherwise protect
                            our rights.
                        </li>
                    </ol>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Behavioural Advertising </h1>
                    <h1>
                        As described above, we use your Personal Information to
                        provide you with targeted advertisements or marketing
                        communications we believe may be of interest to you. For
                        example:
                    </h1>
                    <ol className={listStyle}>
                        <li>
                            We use Google Analytics to help us understand how
                            our customers use the Site. You can read more about
                            how Google uses your Personal Information here:
                            <h1
                                href="https://policies.google.com/privacy?hl=en"
                                target="_blank"
                            >
                                {" "}
                                https://policies.google.com/privacy?hl=en.
                            </h1>
                            You can also opt-out of Google Analytics here:
                            <h1
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                            >
                                {" "}
                                https://tools.google.com/dlpage/gaoptout.
                            </h1>
                        </li>
                        <li>
                            We share information about your use of the Site,
                            your purchases, and your interaction with our ads on
                            other websites with our advertising partners. We
                            collect and share some of this information directly
                            with our advertising partners, and in some cases
                            through the use of cookies or other similar
                            technologies (which you may consent to, depending on
                            your location).
                        </li>
                        <li>
                            For more information about how targeted advertising
                            works, you can visit the Network Advertising
                            Initiative’s (“NAI”) educational page at:
                            <h1
                                href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                                target="_blank"
                            >
                                {" "}
                                NAI
                            </h1>{" "}
                        </li>
                        <li>
                            You can also opt-out of Google Analytics here:
                            <a
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                            >
                                {" "}
                                https://tools.google.com/dlpage/gaoptout.
                            </a>
                        </li>
                    </ol>
                    <h1>You can opt out of targeted advertising by:</h1>
                    <h1 className="italic">COMMON LINKS INCLUDE:</h1>
                    <ol className={listStyle}>
                        <li
                            href="https://www.facebook.com/settings/?tab=ads"
                            target="_blank"
                        >
                            Facebook
                        </li>
                        <li
                            href="https://www.google.com/settings/ads/anonymous"
                            target="_blank"
                        >
                            Google
                        </li>
                    </ol>
                    <h1>
                        Additionally, you can opt out of some of these services
                        by visiting the Digital Advertising Alliance’s opt-out
                        portal at:{" "}
                        <h1 href="http://optout.aboutads.info/" target="_blank">
                            http://optout.aboutads.info/
                        </h1>
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Using Personal Information
                    </h1>
                    <h1>
                        We use your personal Information to provide our services
                        to you, which includes: offering products for sale,
                        processing payments, shipping and fulfillment of your
                        order, and keeping you up to date on new products,
                        services, and offers.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Lawful Basis</h1>
                    <h1>
                        Pursuant to the General Data Protection Regulation
                        (“GDPR”), if you are a resident of the European Economic
                        Area (“EEA”), we process your personal information under
                        the following lawful bases:
                    </h1>
                    <ol className={listStyle}>
                        <li>Your Consent.</li>
                        <li>
                            The performance of the contract between you and the
                            Site.
                        </li>
                        <li>Compliance with our legal obligations.</li>
                        <li>To protect your vital interests.</li>
                        <li>
                            To perform a task carried out in the public
                            interest.
                        </li>
                        <li>
                            For our legitimate interests, which do not override
                            your fundamental rights and freedoms
                        </li>
                    </ol>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Retention</h1>
                    <h1>
                        When you place an order through the Site, we will retain
                        your Personal Information for our records unless and
                        until you ask us to erase this information. For more
                        information on your right of erasure, please see the
                        ‘Your rights’ section below.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Automatic Decision - Making
                    </h1>
                    <h1>
                        If you are a resident of the EEA, you have the right to
                        object to processing based solely on automated
                        decision-making (which includes profiling), when that
                        decision-making has a legal effect on you or otherwise
                        significantly affects you.
                    </h1>
                    <h1>
                        We [DO/DO NOT] engage in fully automated decision-making
                        that has a legal or otherwise significant effect using
                        customer data.
                    </h1>
                    <h1>
                        Our processor Shopify uses limited automated
                        decision-making to prevent fraud that does not have a
                        legal or otherwise significant effect on you.
                    </h1>
                    <h1>
                        Services that include elements of automated
                        decision-making include:
                    </h1>
                    <ol className={listStyle}>
                        <li>
                            Temporary denylist of IP addresses associated with
                            repeated failed transactions. This denylist persists
                            for a small number of hours.
                        </li>
                        <li>
                            Temporary denylist of credit cards associated with
                            denylisted IP addresses. This denylist persists for
                            a small number of days.
                        </li>
                    </ol>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Your Rights</h1>
                    <br />
                    <h1 className={boldFontStyle}>GDPR</h1>
                    <h1>
                        If you are a resident of the EEA, you have the right to
                        access the Personal Information we hold about you, to
                        port it to a new service, and to ask that your Personal
                        Information be corrected, updated, or erased. If you
                        would like to exercise these rights, please contact us
                        through the contact information below.
                    </h1>
                    <h1>
                        Your Personal Information will be initially processed in
                        Ireland and then will be transferred outside of Europe
                        for storage and further processing, including to Canada
                        and the United States. For more information on how data
                        transfers comply with the GDPR, see Shopify’s GDPR{" "}
                    </h1>

                    <br />
                    <h1 className={boldFontStyle}>CCPA</h1>
                    <h1>
                        If you are a resident of California, you have the right
                        to access the Personal Information we hold about you
                        (also known as the ‘Right to Know’), to port it to a new
                        service, and to ask that your Personal Information be
                        corrected, updated, or erased. If you would like to
                        exercise these rights, please contact us through the
                        contact information below.
                    </h1>
                    <h1>
                        If you would like to designate an authorized agent to
                        submit these requests on your behalf, please contact us
                        at the address below.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Cookies</h1>
                    <h1>
                        A cookie is a small amount of information that’s
                        downloaded to your computer or device when you visit our
                        Site. We use a number of different cookies, including
                        functional, performance, advertising, and social media
                        or content cookies. Cookies make your browsing
                        experience better by allowing the website to remember
                        your actions and preferences (such as login and region
                        selection). This means you don’t have to re-enter this
                        information each time you return to the site or browse
                        from one page to another. Cookies also provide
                        information on how people use the website, for instance
                        whether it’s their first time visiting or if they are a
                        frequent visitor.
                    </h1>
                    <h1>
                        We use the following cookies to optimize your experience
                        on our Site and to provide our services.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Cookies Necessary for the Functioning of the Store
                    </h1>
                    <h1 className="italic">
                        <span className="font-bold">NameFunction_</span>abUsed
                        in connection with access to
                        admin._secure_session_idUsed in connection with
                        navigation through a storefront.cartUsed in connection
                        with shopping cart.cart_sigUsed in connection with
                        checkout.cart_tsUsed in connection with
                        checkout.checkout_tokenUsed in connection with
                        checkout.secretUsed in connection with
                        checkout.secure_customer_sigUsed in connection with
                        customer login.storefront_digestUsed in connection with
                        customer login._shopify_uUsed to facilitate updating
                        customer account information.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Reporting and Analytics</h1>
                    <h1 className="italic">
                        <span className="font-bold">NameFunction_</span>
                        tracking_consentTracking preferences._landing_pageTrack
                        landing pages_orig_referrerTrack landing pages_sShopify
                        analytics._shopify_fsShopify analytics._shopify_sShopify
                        analytics._shopify_sa_pShopify analytics relating to
                        marketing & referrals._shopify_sa_tShopify analytics
                        relating to marketing & referrals._shopify_yShopify
                        analytics._yShopify analytics.
                    </h1>
                    <h1>
                        The length of time that a cookie remains on your
                        computer or mobile device depends on whether it is a
                        “persistent” or “session” cookie. Session cookies last
                        until you stop browsing and persistent cookies last
                        until they expire or are deleted. Most of the cookies we
                        use are persistent and will expire between 30 minutes
                        and two years from the date they are downloaded to your
                        device.
                    </h1>
                    <h1>
                        You can control and manage cookies in various ways.
                        Please keep in mind that removing or blocking cookies
                        can negatively impact your user experience and parts of
                        our website may no longer be fully accessible.
                    </h1>
                    <h1>
                        Most browsers automatically accept cookies, but you can
                        choose whether or not to accept cookies through your
                        browser controls, often found in your browser’s “Tools”
                        or “Preferences” menu. For more information on how to
                        modify your browser settings or how to block, manage or
                        filter cookies can be found in your browser’s help file
                        or through such sites
                    </h1>
                    <h1>
                        Additionally, please note that blocking cookies may not
                        completely prevent how we share information with third
                        parties such as our advertising partners. To exercise
                        your rights or opt-out of certain uses of your
                        information by these parties, please follow the
                        instructions in the “Behavioural Advertising” section
                        above.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Do Not Track</h1>
                    <h1>
                        Please note that because there is no consistent industry
                        understanding of how to respond to “Do Not Track”
                        signals, we do not alter our data collection and usage
                        practices when we detect such a signal from your
                        browser.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Changes</h1>
                    <h1>
                        We may update this Privacy Policy from time to time in
                        order to reflect, for example, changes to our practices
                        or for other operational, legal, or regulatory reasons.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Contact</h1>
                    <h1>
                        For more information about our privacy practices, if you
                        have questions, or if you would like to make a
                        complaint, please contact us by e-mail at
                        [connect@gramieno.com] or by mail using the details
                        provided below:
                    </h1>
                    <h1>
                        A-64, Krishnapuram Colony, near Birla Mandir, 281003
                        Mathura UP, India
                    </h1>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
