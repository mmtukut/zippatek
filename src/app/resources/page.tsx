
import { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { BookOpen, FileText, BarChart2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ResourcesPage: NextPage = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-900 to-neutral-900 text-white text-center py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading">
              Resources & Insights
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-primary-100">
              Explore our analysis of the African property market, technical documentation for our platforms, and success stories from our partners.
            </p>
          </div>
        </section>

        {/* Resources Grid Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog */}
              <Card hover bordered className="flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg inline-block mb-4">
                    <BookOpen className="w-8 h-8 text-primary-500" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading">Our Blog</h2>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                    The latest news, market analysis, and stories about how data is transforming Africa's property ecosystem.
                  </p>
                </div>
                <div className="p-8 pt-0">
                  <Link href="/blog">
                    <span className="font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                      Read the Blog <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                </div>
              </Card>

              {/* Case Studies */}
              <Card hover bordered className="flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg inline-block mb-4">
                    <BarChart2 className="w-8 h-8 text-success-500" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading">Case Studies</h2>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                    Discover the real-world impact of FastFind360 with in-depth success stories from our government partners.
                  </p>
                </div>
                <div className="p-8 pt-0">
                   <span className="font-semibold text-neutral-400 dark:text-neutral-500 flex items-center cursor-not-allowed">
                      Coming Soon <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </div>
              </Card>

              {/* Documentation */}
              <Card hover bordered className="flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg inline-block mb-4">
                    <FileText className="w-8 h-8 text-accent-orange" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading">Documentation</h2>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                    Technical guides, API references, and integration tutorials for developers and platform administrators.
                  </p>
                </div>
                <div className="p-8 pt-0">
                    <span className="font-semibold text-neutral-400 dark:text-neutral-500 flex items-center cursor-not-allowed">
                      Coming Soon <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
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

export default ResourcesPage;
