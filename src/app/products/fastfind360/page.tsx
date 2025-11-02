
import { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle, BarChart, FileText, Database, ArrowRight } from 'lucide-react';

const FastFind360Page: NextPage = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-900 to-neutral-900 text-white text-center py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading">
              Unlock Billions in Lost Revenue
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-primary-100">
              FastFind360 is the definitive Government Revenue Intelligence Platform, using AI and satellite data to make Nigeria's ₦2 trillion invisible property problem, visible.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button as="a" href="/contact?subject=FastFind360+Demo" variant="primary" size="xl">
                Request a Demo
              </Button>
              <Button as="a" href="#features" variant="outline" size="xl">
                Explore Features
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-900 dark:text-white">
                The High Cost of Invisibility
              </h2>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                Manual surveying is slow, expensive, and quickly outdated. This leads to billions in uncollected property taxes, informal developments operating outside the net, and economic potential left untapped.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card bordered>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading text-accent-cyan">₦2T+</h3>
                  <p className="mt-2 font-semibold text-neutral-800 dark:text-neutral-200">Annual Revenue Loss</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Estimated value of uncollected property-related taxes in Nigeria each year.</p>
                </div>
              </Card>
              <Card bordered>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading text-accent-cyan">60%</h3>
                  <p className="mt-2 font-semibold text-neutral-800 dark:text-neutral-200">Informal Development</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Majority of property development occurs informally, remaining invisible to state revenue boards.</p>
                </div>
              </Card>
              <Card bordered>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading text-accent-cyan">10M+</h3>
                  <p className="mt-2 font-semibold text-neutral-800 dark:text-neutral-200">Unmapped Properties</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Across just six Nigerian states, millions of structures are untracked and untaxed.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="features" className="bg-white dark:bg-neutral-800 py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-900 dark:text-white">
                The Solution: Intelligence at Scale
              </h2>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                FastFind360 combines cutting-edge technologies to provide a single source of truth for property data, empowering governments to act with precision and confidence.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-item">
                <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full inline-block">
                  <Database className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="mt-4 text-xl font-bold font-heading">Automated Property Detection</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Our AI models analyze high-resolution satellite imagery to automatically identify and map every structure, from new estates to informal settlements, with over 94% accuracy.</p>
              </div>
              <div className="feature-item">
                <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full inline-block">
                  <BarChart className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="mt-4 text-xl font-bold font-heading">Revenue Potential Analytics</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Go beyond mapping. Our platform calculates the revenue potential of newly discovered properties, providing clear, data-driven insights to prioritize collection efforts and forecast gains.</p>
              </div>
              <div className="feature-item">
                <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full inline-block">
                  <FileText className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="mt-4 text-xl font-bold font-heading">Exportable PDF & CSV Reports</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Generate official, print-ready reports for field operations, stakeholder meetings, and archival purposes. Data is formatted for immediate use by revenue officers and policymakers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-900 dark:text-white">
                  The Zippatek Advantage
                </h2>
                <p>
                  By partnering with Zippatek, government agencies gain more than a tool—they gain a strategic asset for fiscal stability and urban planning.
                </p>
                <ul className="mt-6">
                  <li><CheckCircle className="inline w-6 h-6 mr-2 text-success-500" /><strong>Maximize Revenue:</strong> Identify and capture billions in previously lost tax income.</li>
                  <li><CheckCircle className="inline w-6 h-6 mr-2 text-success-500" /><strong>Increase Efficiency:</strong> Reduce manual surveying time by up to 85% and cut costs significantly.</li>
                  <li><CheckCircle className="inline w-6 h-6 mr-2 text-success-500" /><strong>Data-Driven Policy:</strong> Make informed decisions on infrastructure, and public services with up-to-date property data.</li>
                  <li><CheckCircle className="inline w-6 h-6 mr-2 text-success-500" /><strong>Enhance Transparency:</strong> Build public trust with a fair and comprehensive property database.</li>
                </ul>
              </div>
              <div className="order-first md:order-last">
                 {/* Placeholder for an image or graphic */}
                 <Card glass intense>
                    <div className="p-8 aspect-video bg-gradient-to-br from-primary-700 to-accent-cyan flex items-center justify-center rounded-lg">
                        <p className="text-white font-bold text-2xl">Visual Representation Here</p>
                    </div>
                 </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                Ready to Unlock Your State's Hidden Revenue?
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                Join forward-thinking governments already piloting FastFind360. Schedule a private demo to see the platform in action and receive a complimentary revenue potential analysis for your chosen LGA.
              </p>
              <div className="mt-8">
                <Button as="a" href="/contact?subject=FastFind360+Demo" variant="accent" size="xl">
                  Schedule Your Free Demo <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FastFind360Page;
