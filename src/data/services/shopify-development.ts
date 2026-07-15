import dev1 from '/images/hero-section/dev1.png'
import dev2 from '/images/hero-section/dev2.png'
import dev3 from '/images/hero-section/dev3.png'
import dev4 from '/images/hero-section/dev4.png'
import dev5 from '/images/hero-section/dev5.png'
import bbva from '/images/hero-section/bbva.svg'
import johnson from '/images/hero-section/johnson.svg'
import adobe from '/images/hero-section/adobe.svg'
import siriusxm from '/images/hero-section/siriusxm.svg'
import motorolla from '/images/hero-section/motorolla.svg'
import industryImage from "/images/services/industry.png"
import aiService from '/images/services/ai-service.png';

const shopifyDevelopment = {
      slug: "shopify-development",

      hero: {
            serviceName: "Shopify Development",
            tagline: "SHOPIFY DEVELOPMENT SERVICES",
            title: "Launch high-performing Shopify stores that attract customers, increase sales, and support long-term business growth.",
            description: "We create fast, conversion-focused Shopify stores tailored to your brand and products. Whether you're starting a new store or improving an existing one, our solutions help deliver seamless shopping experiences that drive measurable results."
      },

      serviceOverview: {
            tag: "SHOPIFY DEVELOPMENT SERVICES",
            title: "Create a Shopify store that looks premium, runs smoothly, and converts better.",
            description: "We build Shopify stores that are fast, clean, mobile-friendly, and easy to manage. Whether you need a new store, custom theme, app integration, or performance improvement, Solvifytech helps you create an eCommerce experience that supports sales and long-term growth.",
            image: aiService,

            services: [
                  {
                        "title": "Custom Shopify Store Development",
                        "description": "We create Shopify stores that are clean, fast, mobile-friendly, and built for better conversions."
                  },
                  {
                        "title": "Shopify Theme Customization",
                        "description": "We customize Shopify themes to match your brand, product structure, and customer journey."
                  },
                  {
                        "title": "Shopify App Integration",
                        "description": "We integrate apps for payments, shipping, reviews, marketing, analytics, and automation."
                  },
                  {
                        "title": "Shopify Plus Development",
                        "description": "We support advanced Shopify Plus requirements for growing and high-volume eCommerce businesses."
                  },
                  {
                        "title": "Product Page Optimization",
                        "description": "We improve product pages with better layout, clear content, trust elements, and conversion-focused design."
                  },
                  {
                        "title": "Checkout Optimization",
                        "description": "We simplify the buying journey to reduce friction and improve completed purchases."
                  },
                  {
                        "title": "Shopify Speed Optimization",
                        "description": "We improve store loading speed, performance, and user experience across devices."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR SHOPIFY EXPERTS",
            title: "Meet the developers building ecommerce giants.",
            description: "Our Shopify development team creates custom themes, private apps, and headless commerce solutions. We optimize for conversion rates, fast load times, and seamless third-party integrations.",
            engineers: [
                  {
                        role: "Shopify Lead Developer",
                        name: "Cameron T.",
                        experience: "10 years of experience",
                        image: dev1,
                        technologies: ["Liquid", "React", "Hydrogen"],
                        company: bbva,
                        certifications: ["Shopify Expert", "Ecommerce Arch"],
                  },
                  {
                        role: "Frontend Theme Dev.",
                        name: "Sophie J.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["CSS", "JavaScript", "Tailwind"],
                        company: johnson,
                        certifications: ["UI Development", "Accessibility"],
                  },
                  {
                        role: "Backend App Developer",
                        name: "Jordan W.",
                        experience: "7 years of experience",
                        image: dev3,
                        technologies: ["Node.js", "Koa", "GraphQL"],
                        company: adobe,
                        certifications: ["API Development", "Database Pro"],
                  },
                  {
                        role: "Integration Specialist",
                        name: "Melissa S.",
                        experience: "8 years of experience",
                        image: dev4,
                        technologies: ["ERP APIs", "Webhooks", "JSON"],
                        company: siriusxm,
                        certifications: ["System Integration", "Data Flow"],
                  },
                  {
                        role: "CRO Analyst",
                        name: "Ian H.",
                        experience: "5 years of experience",
                        image: dev5,
                        technologies: ["A/B Testing", "Analytics", "Hotjar"],
                        company: motorolla,
                        certifications: ["Conversion Optimization", "UX Research"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "SHOPIFY DEVELOPMENT ACROSS INDUSTRIES",
            title: "Build Shopify stores shaped around your products, customers, and sales journey.",
            description: "Every product category needs a different eCommerce experience. Solvifytech builds Shopify stores that support better browsing, faster checkout, and stronger customer trust.",
            industries: [
                  {
                        title: "Fashion & Apparel",
                        description: "We create stylish Shopify stores for clothing, fashion labels, and apparel brands.",
                        image: industryImage,
                        solutions: [
                              "Fashion eCommerce store",
                              "Product variant system",
                              "Size guide section",
                              "Collection-based navigation",
                              "Lookbook pages",
                              "Wishlist integration",
                              "Mobile-first product pages"
                        ]
                  },
                  {
                        title: "Beauty & Personal Care",
                        description: "We build premium Shopify stores for beauty, skincare, cosmetics, and wellness brands.",
                        image: industryImage,
                        solutions: [
                              "Beauty product store",
                              "Product bundle setup",
                              "Subscription purchase flow",
                              "Review integration",
                              "Ingredient information sections",
                              "Routine-based product pages",
                              "Upsell and cross-sell setup"
                        ]
                  },
                  {
                        title: "Food & Beverage",
                        description: "We develop Shopify stores for packaged foods, snacks, beverages, and specialty products.",
                        image: industryImage,
                        solutions: [
                              "Food product catalog",
                              "Bulk order system",
                              "Delivery location setup",
                              "Combo offer sections",
                              "Subscription ordering",
                              "COD/payment integration",
                              "Campaign landing pages"
                        ]
                  },
                  {
                        title: "Home & Lifestyle",
                        description: "We build visual Shopify stores for furniture, d\u00e9cor, and lifestyle products.",
                        image: industryImage,
                        solutions: [
                              "Home d\u00e9cor store",
                              "Room-wise collection pages",
                              "Product gallery sections",
                              "Variant and color selection",
                              "Shipping logic setup",
                              "Premium product pages",
                              "Inquiry-based product flow"
                        ]
                  },
                  {
                        title: "Electronics & Accessories",
                        description: "We create Shopify stores with clear product details, filters, and technical information.",
                        image: industryImage,
                        solutions: [
                              "Electronics product catalog",
                              "Specification tables",
                              "Product comparison sections",
                              "Warranty information blocks",
                              "Technical filters",
                              "Accessory bundles",
                              "Support page integration"
                        ]
                  },
                  {
                        title: "B2B & Wholesale",
                        description: "We build Shopify solutions for bulk buyers, distributors, and wholesale businesses.",
                        image: industryImage,
                        solutions: [
                              "Wholesale Shopify store",
                              "Bulk order form",
                              "Customer group pricing",
                              "B2B catalog setup",
                              "Quote request flow",
                              "Distributor login system",
                              "Minimum order quantity setup"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "SHOPIFY DEVELOPMENT CAPABILITIES",
            title: "We cover the Shopify stack and everything around it.",
            description: "We build Shopify stores that are fast, branded, scalable, and conversion-focused, with the right tools for selling, marketing, and managing products.",
            capabilities: [
                  {
                        "title": "Shopify Store Development",
                        "description": "Build complete Shopify stores with clean structure and premium design.",
                        "tools": [
                              {
                                    "name": "Shopify",
                                    "logo": "/images/tool-tech/shopify.svg"
                              },
                              {
                                    "name": "Shopify Plus",
                                    "logo": "/images/tool-tech/shopify-plus.svg"
                              },
                              {
                                    "name": "Online Store 2.0",
                                    "logo": "/images/tool-tech/online-store-20.svg"
                              }
                        ]
                  },
                  {
                        "title": "Theme Customization",
                        "description": "Customize layouts, sections, product pages, and brand experience.",
                        "tools": [
                              {
                                    "name": "Liquid",
                                    "logo": "/images/tool-tech/liquid.svg"
                              },
                              {
                                    "name": "HTML",
                                    "logo": "/images/tool-tech/html.svg"
                              },
                              {
                                    "name": "CSS",
                                    "logo": "/images/tool-tech/css.svg"
                              },
                              {
                                    "name": "JavaScript",
                                    "logo": "/images/tool-tech/javascript.svg"
                              }
                        ]
                  },
                  {
                        "title": "Shopify App Integration",
                        "description": "Connect apps for reviews, upsells, shipping, analytics, and marketing.",
                        "tools": [
                              {
                                    "name": "Klaviyo",
                                    "logo": "/images/tool-tech/klaviyo.svg"
                              },
                              {
                                    "name": "Judge.me",
                                    "logo": "/images/tool-tech/judgeme.svg"
                              },
                              {
                                    "name": "Recharge",
                                    "logo": "/images/tool-tech/recharge.svg"
                              },
                              {
                                    "name": "Shiprocket",
                                    "logo": "/images/tool-tech/shiprocket.svg"
                              }
                        ]
                  },
                  {
                        "title": "Conversion Optimization",
                        "description": "Improve product pages, cart, checkout, and buying journey.",
                        "tools": [
                              {
                                    "name": "CRO",
                                    "logo": "/images/tool-tech/cro.svg"
                              },
                              {
                                    "name": "A/B Testing",
                                    "logo": "/images/tool-tech/a/b-testing.svg"
                              },
                              {
                                    "name": "Heatmaps",
                                    "logo": "/images/tool-tech/heatmaps.svg"
                              },
                              {
                                    "name": "Analytics",
                                    "logo": "/images/tool-tech/analytics.svg"
                              }
                        ]
                  },
                  {
                        "title": "Performance Optimization",
                        "description": "Improve Shopify speed, mobile UX, and Core Web Vitals.",
                        "tools": [
                              {
                                    "name": "Lighthouse",
                                    "logo": "/images/tool-tech/lighthouse.svg"
                              },
                              {
                                    "name": "PageSpeed",
                                    "logo": "/images/tool-tech/pagespeed.svg"
                              },
                              {
                                    "name": "Image Optimization",
                                    "logo": "/images/tool-tech/image-optimization.svg"
                              }
                        ]
                  }
            ]
      }
};

export default shopifyDevelopment;
