
import { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Download, Info } from 'lucide-react';

const PressPage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-200 to-white dark:from-neutral-800 dark:to-neutral-900 py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-neutral-900 dark:text-white">
              Press & Media
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
              Information and resources for journalists, bloggers, and media professionals. For all media inquiries, please contact us directly.
            </p>
            <div className="mt-10">
              <Button as="a" href="mailto:press@zippatek.com" variant="primary" size="xl">
                Contact Media Relations
              </Button>
            </div>
          </div>
        </section>

        {/* Media Kit & Info Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* About Zippatek */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold font-heading text-primary-900 dark:text-white">About Zippatek</h2>
                <p>
                  Zippatek Digital is Nigeria's first integrated PropTech platform using AI and satellite data to solve Africa's ₦2 trillion property visibility problem. Our mission is to build the digital infrastructure that enables governments to collect revenue, citizens to verify property, and developers to transact with confidence.
                </p>
                <p>
                  Our two flagship platforms, FastFind360 for government revenue intelligence and Propabridge for the consumer marketplace, work in tandem to create a transparent and efficient property ecosystem for all.
                </p>
                <h3 className="text-2xl font-bold font-heading">Key Facts</h3>
                <ul>
                  <li><strong>Founded:</strong> 2023</li>
                  <li><strong>Location:</strong> Abuja, FCT, Nigeria</li>
                  <li><strong>Mission:</strong> To make Africa's invisible infrastructure visible.</li>
                  <li><strong>Impact:</strong> Over 2 million properties analyzed, partnerships with 4+ government agencies.</li>
                </ul>
              </div>

              {/* Media Kit */}
              <div>
                <Card bordered>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold font-heading mb-6">Media Kit</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                      Our media kit includes logos, executive headshots, and platform screenshots. Please use these assets in accordance with our brand guidelines.
                    </p>
                    <div className="space-y-4">
                      <Button as="a" href="/downloads/zippatek-media-kit.zip" variant="secondary" size="lg" fullWidth>
                        <Download className="w-5 h-5 mr-2" />
                        Download Media Kit (.zip)
                      </Button>
                      <Button as="a" href="/downloads/zippatek-brand-guidelines.pdf" variant="outline" size="lg" fullWidth>
                        <Info className="w-5 h-5 mr-2" />
                        Brand Guidelines (.pdf)
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Press Releases Section */}
        <section className="py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
                Recent Press
              </h2>
               <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                As we grow, you'll find our latest announcements and media coverage here.
              </p>
            </div>
             <div className="mt-16 max-w-2xl mx-auto">
              <Card bordered>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold font-heading">No recent press releases.</h3>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                    Check back soon for news and updates on our progress.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PressPage;
