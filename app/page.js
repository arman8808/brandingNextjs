"use client";
import Image from "next/image";
import "@/styles/globals.css";
import { Suspense, useEffect, useRef, useState } from "react";
import HomeBannerImg from "../public/Assets/Home/HomeBannerImg.jpeg";
import HomeHelpBgImg from "../public/Assets/Home/HomeHelpBgImg.jpeg";
import HomeClientsBgImg from "../public/Assets/Home/HomeClientsBgImg.jpeg";
import HomeOurClientsBgImg from "../public/Assets/Home/HomeOurClientsBgImg.webp";
import HomeInfoCardsImg1 from "../public/Assets/Home/HomeInfoCardsImg1.webp";
import HomeInfoCardsImg2 from "../public/Assets/Home/HomeInfoCardsImg2.webp";
import HomeInfoCardsImg3 from "../public/Assets/Home/HomeInfoCardsImg3.webp";
import HomeInfoCardsImg4 from "../public/Assets/Home/HomeInfoCardsImg4.webp";
import HomeInfoCardsImg5 from "../public/Assets/Home/HomeInfoCardsImg5.webp";
import HomeInfoCardsImg6 from "../public/Assets/Home/HomeInfoCardsImg6.webp";
import HomeCertificateImg1 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg2 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg3 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg4 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg5 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg6 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg7 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg8 from "../public/Assets/Home/HomeCertificateImg1.jpeg";
import HomeBannerCardsImg1 from "../public/Assets/Home/HomeBannerCardsImg1.jpeg";
import HomeBannerCardsImg2 from "../public/Assets/Home/HomeBannerCardsImg2.jpeg";
import HomeBannerCardsImg3 from "../public/Assets/Home/HomeBannerCardsImg3.jpeg";
import HomeAboutUsBotFrameImg from "../public/Assets/Home/HomeAboutUsBotFrameImg.webp";
import HomeInfoContImg from "../public/Assets/Home/HomeInfoContImg.webp";
import HomeAboutUsNewInfoMainImg from "../public/Assets/Home/HomeAboutUsNewInfoMainImg.webp";
import HomeAboutUsNewInfoBottomImg from "../public/Assets/Home/HomeAboutUsNewInfoBottomImg.webp";
import HomeClientsDogImg from "../public/Assets/Home/HomeClientsDogImg.webp";
import AboutUsClientsMarqueeImg1 from "../public/Assets/AboutUs/AboutUsClientsMarqueeImg1.png";
import AboutUsClientsMarqueeImg2 from "../public/Assets/AboutUs/AboutUsClientsMarqueeImg2.png";
import AboutUsMonkeyImg from "../public/Assets/AboutUs/AboutUsMonkeyImg.webp";

import HomeInfoCards from "@/componets/HomeInfoCards/HomeInfoCards";
import InfoContainer from "@/componets/InfoContainer/InfoContainer";
import Link from "next/link";
import NewHelpSection from "@/componets/NewHelpSection/NewHelpSection";
import CreativeWorksSection from "@/componets/CreativeWorksSection/CreativeWorksSection";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Marquee from "react-fast-marquee";
export default function Home() {
  const homeBannerStyle = {
    backgroundImage: `url("/Assets/Home/HomeBannerImg.jpeg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeHelpStyle = {
    backgroundImage: `url("${HomeHelpBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeClientsStyle = {
    backgroundImage: `url("/Assets/Home/HomeClientsBgImg.jpeg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeClientsShowcaseStyle = {
    backgroundImage: `url("${HomeOurClientsBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeInfoCardsData = [
    {
      image: HomeInfoCardsImg1,
      heading: "Web development & Design",
      text: "As a reliable web development agency in Lucknow, our focus is on building a digital hub customized to your business needs. This not only attracts new customers but also solidifies your reputation as a trustworthy industry resource.",
      pageLink: "/services/web-development",
    },
    {
      image: HomeInfoCardsImg2,
      heading: "Branding",
      text: "Our meticulous branding agency in Lucknow, India oversees every aspect of your brand, from conceptualizing creative ideas to executing brand activation. Whether we're crafting innovative designs, promoting your brand online, or orchestrating strategic social media campaigns, our Marketing Agency in India is dedicated to ensuring that your brand authentically reflects your essence and consistently exceeds set goals.",
      pageLink: "/services/branding",
    },
    {
      image: HomeInfoCardsImg3,
      heading: "Creative Designing",
      text: "The significance of creative design is crucial in guiding any brand's journey, acting as a unique and subtle ambassador that encapsulates its essence. As a graphic design company in India, we specialize in crafting customized and meaningful designs. Whether creating entirely new designs or revitalizing existing ones, our goal is to ensure that your vision materializes into reality.",
      pageLink: "/services/creative-design",
    },
    {
      image: HomeInfoCardsImg4,
      heading: "Social Media Management",
      text: "As a reputable marketing company in India, we prioritize elevating business awareness by capturing and engaging audiences on impactful social platforms relevant to your business. This approach ultimately leads to the creation of enhanced business opportunities.",
      pageLink: "/services/social-media-management",
    },
    {
      image: HomeInfoCardsImg5,
      heading: "Search Engine Optimization",
      text: "We enhance the potential for sales by crafting a powerful optimization strategy, ensuring that your website takes the lead when customers search for the products or services your company provides.",
      pageLink: "/services/seo",
    },
    {
      image: HomeInfoCardsImg6,
      heading: "Performance Marketing",
      text: "Through a careful analysis of your previous marketing strategy, we evaluate the growth possibilities of your campaigns, delving into their performance intricacies to identify pertinent audiences. This process assists in scaling sales through the implementation of online performance marketing.",
      pageLink: "/services/performance-marketing",
    },
  ];

  const renderedHomeInfoCards = homeInfoCardsData.map((data, index) => (
    <HomeInfoCards
      key={index}
      image={data.image}
      pageLink={data.pageLink}
      heading={data.heading}
      text={data.text}
    />
  ));

  const clientTestimonials = [
    {
      name: "Hawqr, Dubai!",
      text: "Within a short period at Branding 360 Neo Pvt. LTD, I've observed remarkable outcomes – a notable increase in website traffic and unprecedented engagement on social media. The team's expertise, creativity, and steadfast commitment have significantly fueled the growth of my business.",
    },
    {
      name: "Innisfree, India!",
      text: "Branding 360 Neo Pvt. LTD has played a pivotal role in shaping our comprehensive branding and marketing strategy, propelling our business forward. Their proficiency in SEO, social media marketing, and content development has been invaluable, resulting in a substantial surge in both leads and conversions.",
    },
    {
      name: "Caspian Healthcare, India!",
      text: "The team at Branding 360 Neo Pvt. LTD demonstrates an exceptional level of responsiveness, consistently collaborating with us to achieve our objectives. Their continual monitoring and refinement of our campaigns ensure optimal ROI. I wholeheartedly recommend them to anyone seeking a top-tier digital marketing agency.",
    },
    {
      name: "Oleena Shade, Dubai!",
      text: "Among the branding and marketing agencies I've engaged with, Branding 360 Neo Pvt. LTD stands out for delivering exceptional service and results. They invest time in comprehending our business and objectives, crafting customized strategies that yield tangible benefits.",
    },
    {
      name: "Daddy’s Bites, Dubai!",
      text: "Working with Branding 360 Neo Pvt. LTD has been an exceedingly positive experience. Their team is knowledgeable, professional, and always ready to assist us in achieving our marketing goals. Since joining forces with them, we've seen a significant uptick in conversions and sales, and we anticipate continuing this successful collaboration.",
    },
    {
      name: "Unfold Concetto, India!",
      text: "Our association with Branding 360 Neo Pvt. LTD has spanned several months, and we are highly content with the results. Their role in establishing a robust brand identity and reaching new audiences through creative branding and marketing initiatives has been instrumental. I wholeheartedly recommend them to anyone seeking to enhance their business.",
    },
    {
      name: "Rocket Advisory, Dubai!",
      text: "In my interactions with various branding and marketing agencies, none have matched the exceptional service and results consistently delivered by Branding 360 Neo Pvt. LTD. They take the time to comprehend our business and objectives, formulating personalized strategies that yield concrete and meaningful benefits.",
    },
    {
      name: "Inidi Villas, Sri Lanka!",
      text: "Collaborating with Branding 360 Neo Pvt. LTD has genuinely transformed our business. Their assistance in establishing a robust online presence and connecting with new audiences through targeted advertising and content marketing has yielded remarkable results. The outcomes are evident, and we value their expertise and unwavering dedication.",
    },
  ];

  const homeClientTestimonialsCarousalData = clientTestimonials.map(
    (data, index) => (
      <div key={index} className="home-clients-card-main">
        <svg
          fill="#6C5719"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 198 198"
          // xml:space="preserve"
          transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
          className="home-clients-svg-left"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
            </g>{" "}
          </g>
        </svg>

        <p>{data.text}</p>
        <h4>{data.name}</h4>
        <svg
          fill="#6C5719"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 198 198"
          // xml:space="preserve"
          className="home-clients-svg-right"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    )
  );

  const carousel = useRef(null);

  const certificates = [
    HomeCertificateImg1,
    HomeCertificateImg2,
    HomeCertificateImg3,
    HomeCertificateImg4,
    HomeCertificateImg5,
    HomeCertificateImg6,
    HomeCertificateImg7,
    HomeCertificateImg8,
  ];

  const headings = [
    "WE CREATE EXPERIENCES",
    "DISTINCT | INTERACTIVE | INNOVATIVE",
    "We are Branding 360 Neo PVT. LTD",
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      const currentHeading = document.querySelector(
        ".home-banner-text-animation h2:nth-child(" +
          (currentHeadingIndex + 1) +
          ")"
      );
      currentHeading.classList.add("slideOut");

      setTimeout(() => {
        currentHeading.classList.remove("slideOut");
        currentHeading.classList.add("slideIn");

        setCurrentHeadingIndex(
          (prevIndex) => (prevIndex + 1) % headings.length
        );
      }, 500);
    }, 3000);

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentHeadingIndex]);

  const handleCallButtonClick = () => {
    window.location.href = `tel:${companyData.companyPhone}`;
  };

  const servicesRef = useRef();

  const scrollToServices = () => {
    if (servicesRef.current) {
      window.scrollTo({
        top: servicesRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="home-section app-sections">
      <Suspense fallback={<p>Loading...</p>}>
        <div className="home-banner-main" style={homeBannerStyle}>
          <div className="home-banner-text-section">
            <h2>Hello There,</h2>

            <div className="home-banner-text-animation">
              {headings.map((heading, index) => (
                <h2
                  key={index}
                  className={
                    index === currentHeadingIndex
                      ? "slideIn"
                      : index === (currentHeadingIndex + 1) % headings.length
                      ? "slideOut"
                      : ""
                  }
                  style={{
                    animationDelay:
                      index === currentHeadingIndex ? "0s" : "0.5s", // Adjust this delay
                  }}
                >
                  {heading}
                </h2>
              ))}
            </div>
            <h2>
              Propelling Business Growth with an Advanced Brand Marketing
              Strategy!
            </h2>

            <button onClick={scrollToServices} className="app-yellow-buttons">
              DISCOVER MORE
            </button>
          </div>

          <div className="home-banner-cards-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="143"
              viewBox="0 0 136 143"
              fill="none"
              className="home-banner-svg-left"
            >
              <circle cx="46.0616" cy="52.9703" r="89.8194" fill="#FFBB00" />
            </svg>
            <div className="home-banner-card">
              <Image width={0} height={0} src={HomeBannerCardsImg1} />
              <div>
                <h4>Molding Your Business Triumph</h4>
                <span>Turning Concepts into Powerful Success Narratives!</span>
              </div>
            </div>
            <div className="home-banner-card">
              <Image width={0} height={0} src={HomeBannerCardsImg2} />
              <div>
                <h4>Embarking on the Digital Odyssey</h4>
                <span>
                  Commencing Your Presence and the Evolution of Brand Marketing.
                </span>
              </div>
            </div>
            <div className="home-banner-card">
              <Image width={0} height={0} src={HomeBannerCardsImg3} />
              <div>
                <h4>The Convergence of Success and Marketing Strategy</h4>
                <span>Transforming Businesses into Enduring Brands!</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="148"
              height="134"
              viewBox="0 0 148 134"
              fill="none"
              className="home-banner-svg-right"
            >
              <circle cx="89.9444" cy="90.492" r="89.8194" fill="#6EB3EC" />
            </svg>
          </div>
        </div>
      </Suspense>

      <InfoContainer
        image={HomeInfoContImg}
        subheading="// DISCOVER OUR COMPANY"
        heading="Leading the Way in Branding Excellence: Recognized Branding Agency in India!"
        text="Our marketing agency employs a strategy-first approach, formulating outcome-driven plans that align seamlessly with your business objectives. This involves conducting a comprehensive online audit to outline the necessary messaging, services, and content, propelling clients toward their growth targets."
        text2="Embracing the synergy of creativity, technology, and intelligence, our branding agency in Lucknow assembles a team of creative minds, developers, SEO specialists, and social media experts to craft distinctive solutions. As one of the best marketing agencies in India, Branding 360 Neo LLC excels in tailoring strategies to meet your specific business needs."
        cardText={[
          "Positioned at the forefront of branding and marketing companies in India, we specialize in creating outcome-driven campaigns and strategies that uniquely capture the essence and merits of brands.",
          "As a prominent marketing agency in India, we emphasize collaboration and iteration, ensuring unwavering support throughout the entire branding process.",
          "Whether it involves web design, establishing a social media presence, or performance marketing, our marketing agency places a premium on creating impactful and targeted interactions.",
        ]}
        readMore="true"
      />
      <br />

      <div className="home-sbout-us-heading">
        <h2>Staff Augmentation Solutions</h2>
        <div className="home-about-us-heading-right">
          <h4>Innovate.</h4>
          <h4>Engage.</h4>
          <h4>Succeed.</h4>
        </div>
      </div>

      <div className="home-staff-heading-mobile">
        <h2>Staff Augmentation Solutions</h2>
      </div>

      <div className="home-about-us-info-top-new-section">
        <div className="home-about-us-info-top-new-sub-section">
          <div className="home-about-us-top-new-left">
            <h2 className="home-about-new-heading">
              Unleash the potential of skilled professionals and enhance your
              brand's capabilities through Branding 360 Neo&nbsp;
              <span className="app-yellow-text">Staff Augmentation</span>{" "}
              Services
            </h2>
            <span>
              By leveraging Branding 360's staff augmentation solutions, you can
              effortlessly enhance your team's skills without the challenges
              associated with hiring and training processes.
            </span>
            <div className="home-about-new-buttons-section">
              <Link href={"/contact"}>
                <button className="app-yellow-buttons">
                  Contact Us &nbsp;{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_893_4047)">
                      <path
                        d="M5.5 13.5002L18 6.50023M16.25 24.0002H16.5C17.4938 16.3819 19.6891 8.96921 23.004 2.03823L23.26 1.50023L23 1.24023L22.462 1.49623C15.531 4.81121 8.11838 7.00645 0.5 8.00023V8.25023L5.5 13.2502V21.0002H5.75L7.524 19.3102C8.22291 18.645 8.99952 18.0665 9.837 17.5872L16.25 24.0002Z"
                        stroke="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_893_4047">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Link>

              <Link href={"/about"}>
                <button className="app-yellow-buttons">
                  Know More &nbsp;{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_893_4047)">
                      <path
                        d="M5.5 13.5002L18 6.50023M16.25 24.0002H16.5C17.4938 16.3819 19.6891 8.96921 23.004 2.03823L23.26 1.50023L23 1.24023L22.462 1.49623C15.531 4.81121 8.11838 7.00645 0.5 8.00023V8.25023L5.5 13.2502V21.0002H5.75L7.524 19.3102C8.22291 18.645 8.99952 18.0665 9.837 17.5872L16.25 24.0002Z"
                        stroke="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_893_4047">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="home-about-us-top-new-right">
            <Image
              width={0}
              height={0}
              src={HomeAboutUsNewInfoMainImg}
              alt="About Us Main"
            />
          </div>
        </div>
        <div className="home-about-us-new-bottom">
          <Image
            width={0}
            height={0}
            src={HomeAboutUsNewInfoBottomImg}
            alt="About US"
          />
        </div>
      </div>

      <NewHelpSection />
      <div className="home-about-us-info-section" ref={servicesRef}>
        <div className="home-about-us-background-layer">
          <Image width={0} height={0} src={HomeAboutUsBotFrameImg} />
          <h2>SERVICES</h2>
        </div>
        <div className="home-about-us-info-top">
          <h3>Our Offerings!</h3>
          <span>
            As one of the respected branding companies in India, we leverage our
            deep understanding of business needs and behaviors. Our commitment
            is to provide guidance on the most suitable solutions and craft
            personalized brand marketing strategies exclusively tailored for
            your brand.
          </span>
          <div className="home-about-us-info-top-cards-section">
            {renderedHomeInfoCards}
          </div>
        </div>
      </div>

      <CreativeWorksSection />

      <div className="home-our-clients-section " style={homeClientsStyle}>
        <div className="home-our-clients-top-text">
          <h2 className="app-yellow-text">
            Our Clients Love us and We Love Them
          </h2>
          <span>
            We've assisted outstanding brands in reaching new heights.
          </span>
        </div>

        <div className="home-clients-card1">
          <button onClick={(e) => carousel?.current?.slidePrev(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
            >
              <path
                d="M25.5208 13.3384L26.9629 14.8835L19.3402 22.6092L26.9629 30.3349L25.5208 31.88L16.2499 22.6092L25.5208 13.3384Z"
                fill="black"
              />
            </svg>
          </button>
          <AliceCarousel
            items={homeClientTestimonialsCarousalData}
            mouseTracking
            autoPlay
            autoPlayInterval={2000}
            autoPlayStrategy={"all"}
            infinite
            ref={carousel}
            disableDotsControls
            disableButtonsControls
          />
          <button onClick={(e) => carousel?.current?.slideNext(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M18.8249 13.3384L17.3828 14.8835L25.0055 22.6092L17.3828 30.3349L18.8249 31.88L28.0958 22.6092L18.8249 13.3384Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="home-our-clients-showcase-section">
        <Image width={0} height={0} src={HomeClientsDogImg} alt="Dog" />
        <div
          className="home-our-clients-showcase"
          style={homeClientsShowcaseStyle}
        >
          <div className="home-clinets-showcase-left">
            <h3>CLIENTS</h3>
            <h2 className="app-yellow-text">
              Clients We've Collaborated With!
            </h2>
            <h4>
              We've assisted exceptional brands in soaring to new heights.
            </h4>
          </div>
          <div className="about-us-clients-marquee-section">
            <Marquee direction="left">
              <Image
                width={0}
                height={0}
                src={AboutUsClientsMarqueeImg1}
                alt="Our Clients"
              />
            </Marquee>
            <br />
            <Marquee direction="right">
              <Image
                width={0}
                height={0}
                src={AboutUsClientsMarqueeImg2}
                alt="Our Clients"
              />
            </Marquee>
            <br />
          </div>
        </div>
      </div>

      <div className="page-bottom-monkey">
        <Image
          width={0}
          height={0}
          src={AboutUsMonkeyImg}
          alt="Clever Monkey"
        />
      </div>
    </div>
  );
}
