
import { NextPage } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BarChart, Home } from 'lucide-react';

const ProductsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">
            Two Platforms. One Mission.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300">
            Transforming Nigeria's property ecosystem from the ground up. We provide the tools for governments to achieve fiscal clarity and for citizens to transact with confidence.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* FastFind360 Card */}
          <Card glass hover bordered className="p-8 flex flex-col">
            <div className="flex-grow">
              <div className="p-3 bg-blue-900/50 rounded-lg inline-block mb-4">
                <BarChart className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-white">FastFind360</h2>
              <p className="mt-2 text-blue-200 font-semibold">For Government Revenue Intelligence</p>
              <p className="mt-4 text-neutral-300">
                The definitive tool for state governments to identify unmapped properties, unlock billions in lost revenue, and drive economic development with AI-powered satellite data.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-200">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Automated satellite-driven property discovery</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Actionable tax intelligence and revenue modeling</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Secure, exportable reports for official use</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/products/fastfind360" passHref>
                <Button variant="primary" size="lg" fullWidth>
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Propabridge Card */}
          <Card glass hover bordered className="p-8 flex flex-col">
            <div className="flex-grow">
              <div className="p-3 bg-orange-900/50 rounded-lg inline-block mb-4">
                <Home className="w-8 h-8 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-white">Propabridge</h2>
              <p className="mt-2 text-orange-200 font-semibold">For The Consumer Marketplace</p>
              <p className="mt-4 text-neutral-300">
                Nigeria's most trusted property marketplace. We connect buyers, renters, and developers with verified listings, eliminating fraud and streamlining the search for your next home or investment.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-200">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>100% verified listings with satellite-backed proof</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>AI-powered search and advanced fraud detection</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Direct, secure messaging with landlords & developers</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/products/propabridge" passHref>
                <Button variant="accent" size="lg" fullWidth>
                  Explore Properties <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
