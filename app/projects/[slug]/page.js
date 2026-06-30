import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Testimonials from "@/app/components/Testimonials";

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="relative aspect-square md:aspect-[2.3/1]">
          <Image src="/images/project-details.webp" width={1920} height={833} alt="Project thumbnail" className="absolute inset-0 size-full object-cover" />
        </div>
      </section>
      <section className="my-100 text-center">
        <div className="container">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:gap-32">
            <div className="flex flex-col md:gap-10 not-md:py-20 not-md:border-b border-disable-200 last:border-none">
              <h2 className="text-32 font-medium">Industry</h2>
              <h3>Beauty & Skincare Retail</h3>
            </div>
            <div className="flex flex-col md:gap-10 not-md:py-20 not-md:border-b border-disable-200 last:border-none">
              <h2 className="text-32 font-medium">Platfrom</h2>
              <h3>Shopify</h3>
            </div>
            <div className="flex flex-col md:gap-10 not-md:py-20 not-md:border-b border-disable-200 last:border-none">
              <h2 className="text-32 font-medium">Business Model</h2>
              <h3>Direct-to-Consumer(D2C)</h3>
            </div>
            <div className="flex flex-col md:gap-10 not-md:py-20 not-md:border-b border-disable-200 last:border-none">
              <h2 className="text-32 font-medium">Year</h2>
              <h3>2025</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="my-100 text-text-body not-md:text-center">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-16 xl:gap-32">
            <div className="flex flex-col gap-10 border border-disable-200 rounded-3xl p-20 xl:p-40">
              <h2 className="text-72 font-nimbus text-primary">35%</h2>
              <h3>Conversion Rate Increase</h3>
            </div>
            <div className="flex flex-col gap-10 border border-disable-200 rounded-3xl p-20 xl:p-40">
              <h2 className="text-72 font-nimbus text-primary">25%</h2>
              <h3>Bounce Rate Reduction</h3>
            </div>
            <div className="flex flex-col gap-10 border border-disable-200 rounded-3xl p-20 xl:p-40">
              <h2 className="text-72 font-nimbus text-primary">40%</h2>
              <h3>Revenue Growth</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-20 gap-x-80">
            <div>
              <h2 className="text-primary-2 text-32 font-medium">
                What We Did
              </h2>
            </div>
            <div className="flex flex-col gap-40">
              <div>
                <h3 className="text-primary-2 text-28 xl:text-32 font-medium mb-24">
                  Our Approach to Elevating the Digital Beauty Experience
                </h3>
                <p>
                  We partnered with the skincare brand to design and develop a high-performance e-commerce platform focused on clarity, trust, and conversion. The goal was to create a seamless shopping journey that reflects the brand’s premium positioning while simplifying product discovery for users.
                </p>
              </div>
              <p>
                Performance optimization, SEO structuring, and responsive design were prioritized to ensure consistent experience across devices. The result was a scalable online store engineered to support growth, increase conversions, and strengthen brand identity in the competitive beauty market.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-20 gap-x-80">
            <div>
              <h2 className="text-primary-2 text-32 font-medium">
                Problem & Solution
              </h2>
            </div>
            <div className="flex flex-col gap-40">
              <div>
                <h3 className="text-primary-2 text-28 xl:text-32 font-medium mb-24">
                  Problem
                </h3>
                <p>
                  The brand struggled to communicate its premium positioning online. Product information lacked clarity, mobile performance was inconsistent, and the checkout flow created friction, resulting in lower conversions and higher cart abandonment.
                </p>
              </div>
              <div>
                <h3 className="text-primary-2 text-28 xl:text-32 font-medium mb-24">
                  Solution
                </h3>
                <p>
                  We designed the experience with a mobile-first, conversion-focused approach. By improving product storytelling, simplifying checkout, and optimizing performance, we created a seamless, scalable e-commerce platform that drives measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-100">
        <div className="container">
          <div className="flex gap-5 md:gap-10 lg:gap-20 flex-col">
            <div className="flex gap-5 md:gap-10 lg:gap-20 justify-center items-end">
              <div>
                <Image src="/images/gallery-img-1.webp" width={443} height={226} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
              <div>
                <Image src="/images/gallery-img-2.webp" width={280} height={523} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
              <div>
                <Image src="/images/gallery-img-3.webp" width={280} height={376} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
              <div>
                <Image src="/images/gallery-img-4.webp" width={280} height={467} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
              <div>
                <Image src="/images/gallery-img-5.webp" width={280} height={263} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
            </div>
            <div className="flex gap-5 md:gap-10 lg:gap-20 justify-center">
              <div>
                <Image src="/images/gallery-img-6.webp" width={359} height={397} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
              <div className="flex gap-5 md:gap-10 lg:gap-20 flex-col">
                <div>
                  <Image src="/images/gallery-img-7.webp" width={358} height={268} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
                </div>
                <div>
                  <Image src="/images/gallery-img-8.webp" width={272} height={268} alt="Gallery image 1" className="rounded-lg md:rounded-[20px] max-w-9/12" />
                </div>
              </div>
              <div>
                <Image src="/images/gallery-img-9.webp" width={748} height={426} alt="Gallery image 1" className="rounded-lg md:rounded-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-20 gap-x-80">
            <h2 className="text-32 font-medium text-primary-2">
              Key Features
            </h2>
            <ul className="list_badge flex flex-col gap-8 lg:gap-36">
              <li>Ingredient transparency section</li>
              <li>Subscription-based purchase option</li>
              <li>Smart product filtering</li>
              <li>Optimized checkout system</li>
              <li>SEO-structured product pages</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="relative aspect-square md:aspect-[1.92/1]">
          <Image src="/images/project-details2.webp" width={1920} height={833} alt="Project thumbnail" className="absolute inset-0 size-full object-cover" />
        </div>
      </section>
      <section className="py-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-y-20 gap-x-80">
            <div>
              <h2 className="text-primary-2 text-32 font-medium">
                Style Guide
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-24 mb-36">
                <div>
                  <h3 className="text-primary-2 text-28 xl:text-32 font-medium mb-24">
                    Typeface
                  </h3>
                  <p>
                    Poppins
                  </p>
                </div>
                <div>
                  <h3 className="text-primary-2 text-28 xl:text-32 font-medium mb-24">
                    Colors
                  </h3>
                  <div className="flex gap-8 sm:gap-32 flex-wrap">
                    <div className="bg-[#F6967F] size-56 sm:size-64 border border-black/12"></div>
                    <div className="bg-[#0E0E0E] size-56 sm:size-64 border border-black/12"></div>
                    <div className="bg-white size-56 sm:size-64 border border-black/12"></div>
                  </div>
                </div>
              </div>
              <p>
                We designed the experience with a mobile-first, conversion-focused approach. By improving product storytelling, simplifying checkout, and optimizing performance, we created a seamless, scalable e-commerce platform that drives measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-100">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="aspect-[1.05/1] bg-red-700 relative">
              <Image src="/images/project-details3.webp" width={840} height={800} alt="Project image 3" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="aspect-[1.05/1] bg-yellow-700 relative">
              <Image src="/images/project-details4.webp" width={840} height={800} alt="Project image 4" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="aspect-[2.1/1] bg-green-700 col-span-2 relative">
              <Image src="/images/project-details5.webp" width={1680} height={800} alt="Project image 5" className="absolute inset-0 size-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Testimonials props={{ bgClass: "bg-brand-100" }} />
    </>
  );
}