
import { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Search, ShieldCheck, Zap, MessageSquare, ArrowRight } from 'lucide-react';

const PropabridgePage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-white dark:from-orange-900/30 dark:via-neutral-900 dark:to-neutral-900 text-center py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-neutral-900 dark:text-white">
              Find Your Home in Minutes, Not Weeks
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
              Welcome to Nigeria's most trusted property marketplace. Say goodbye to fake listings and endless searching. Say hello to verified properties and instant connections.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button as="a" href="#search" variant="accent" size="xl">
                Start Searching Now
              </Button>
              <Button as="a" href="/contact?subject=List+My+Property" variant="secondary" size="xl">
                List Your Property
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
                Tired of the Property Hunt Headaches?
              </h2>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                The traditional property search in Nigeria is broken. It's a frustrating maze of phantom listings, unreliable agents, and wasted time. We built Propabridge to fix that.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold font-heading text-error-500">Fake Listings</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Endless scrolling through properties that don't actually exist or have already been taken.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-error-500">Verification Nightmare</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">No easy way to confirm if a property is legitimate or if the seller has the right to transact.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-error-500">Wasted Time & Money</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Countless hours and transport fares spent visiting non-existent or misrepresented properties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
                Your Search, Perfected.
              </h2>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                Propabridge is designed from the ground up to deliver safety, speed, and peace of mind to your property search.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card hover>
                <div className="p-6 text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full inline-block">
                    <ShieldCheck className="w-8 h-8 text-accent-orange" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold font-heading">Verified Listings</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Every single property is backed by our satellite data verification. If it's on Propabridge, it exists.</p>
                </div>
              </Card>
              <Card hover>
                <div className="p-6 text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full inline-block">
                    <Search className="w-8 h-8 text-accent-orange" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold font-heading">AI-Powered Search</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Our smart search understands your needs to find you the perfect home, faster than ever before.</p>
                </div>
              </Card>
              <Card hover>
                <div className="p-6 text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full inline-block">
                    <Zap className="w-8 h-8 text-accent-orange" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold font-heading">Instant Connections</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">No middlemen. Connect and chat directly with verified landlords and developers securely on our platform.</p>
                </div>
              </Card>
              <Card hover>
                <div className="p-6 text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full inline-block">
                    <MessageSquare className="w-8 h-8 text-accent-orange" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold font-heading">Fraud Detection</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">We use advanced tools to flag suspicious listings and protect you from potential scams.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Search Preview Section */}
        <section id="search" className="py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                 {/* Placeholder for an interactive search demo component */}
                 <Card glass intense>
                    <div className="p-8 aspect-square bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center rounded-lg">
                        <p className="text-white font-bold text-2xl">Interactive Search Demo Here</p>
                    </div>
                 </Card>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
                  Find Your Perfect Match
                </h2>
                <p>
                  Our powerful and intuitive search makes finding a home a delight, not a chore. Filter by location, price, property type, and amenities to narrow down your options in seconds.
                </p>
                <ul className="mt-6">
                  <li><strong>For Rent or For Sale:</strong> Find exactly what you're looking for.</li>
                  <li><strong>Detailed Listings:</strong> High-quality photos, floor plans, and verified details.</li>
                  <li><strong>Neighborhood Insights:</strong> Information on schools, security, and local services.</li>
                </ul>
                <div className="mt-8">
                  <Button variant="accent" size="lg">Launch Search App <span className="text-xs ml-2">(Coming Soon)</span></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-500 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                Your Next Home is Waiting
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Whether you're looking to rent, buy, or list a property, Propabridge is your trusted partner. Join the future of real estate in Nigeria today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button as="a" href="#search" variant="primary" className="bg-white text-orange-600 hover:bg-orange-100" size="xl">
                  Start Your Search <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button as="a" href="/contact?subject=List+My+Property" variant="outline" className="border-white text-white hover:bg-white/10" size="xl">
                  List Your Property
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

export default PropabridgePage;
