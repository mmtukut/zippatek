
import { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

const CareersPage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 via-white to-white dark:from-cyan-900/30 dark:via-neutral-900 dark:to-neutral-900 py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-neutral-900 dark:text-white">
              Join Our Mission
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
              We are building the infrastructure that makes Africa's invisible economy visible. If you are passionate about solving complex problems that have a real-world impact, we want to hear from you.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-900 dark:text-white">
                Why Work at Zippatek?
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">Build for Impact</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">Your work will directly contribute to economic development, transparency, and efficiency in Nigeria and beyond.</p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">Solve Hard Problems</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">From AI-powered satellite imagery analysis to building fraud-proof marketplaces, you'll tackle immense technical challenges.</p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">World-Class Team</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">Collaborate with a diverse, mission-driven team of engineers, designers, and strategists.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
                Open Positions
              </h2>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                We are not actively hiring for any roles at the moment, but we are always interested in hearing from exceptional talent.
              </p>
            </div>

            <div className="mt-16 max-w-2xl mx-auto">
              <Card bordered>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold font-heading">No Openings Currently</h3>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                    Please check back later for future opportunities. If you believe you're a great fit for our mission, feel free to send a speculative application.
                  </p>
                  <div className="mt-8">
                    <Button as="a" href="mailto:careers@zippatek.com" variant="secondary" size="lg">
                      Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
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

export default CareersPage;
