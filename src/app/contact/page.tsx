
import { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage: NextPage = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-900 to-neutral-900 text-white text-center py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-primary-100">
              We're here to answer your questions, schedule a demo, or discuss how we can solve Nigeria's property visibility challenges together.
            </p>
          </div>
        </section>

        {/* Contact Info and Form Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold font-heading text-primary-900 dark:text-white">Contact Information</h2>
                <p>
                  Reach out to us via phone, email, or visit our office. Our team is ready to assist you.
                </p>
                <ul className="mt-8 space-y-4 list-none p-0">
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1 text-accent-cyan flex-shrink-0" />
                    <div>
                      <strong>Email Us</strong><br />
                      <a href="mailto:info@zippatek.com" className="text-accent-cyan hover:underline">info@zippatek.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1 text-accent-cyan flex-shrink-0" />
                    <div>
                      <strong>Call Us</strong><br />
                      <span>+234 (0) 800 123 4567</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1 text-accent-cyan flex-shrink-0" />
                    <div>
                      <strong>Visit Us</strong><br />
                      <span>123 Innovation Drive, Wuse 2, Abuja, FCT, Nigeria</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-12">
                  {/* Map Placeholder */}
                  <Card bordered>
                    <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                      <p className="text-neutral-500">Map Placeholder</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card glass intense>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold font-heading text-white mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-100">Full Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full bg-primary-900/50 border-primary-700 rounded-md shadow-sm text-white focus:ring-accent-cyan focus:border-accent-cyan" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-100">Email Address</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full bg-primary-900/50 border-primary-700 rounded-md shadow-sm text-white focus:ring-accent-cyan focus:border-accent-cyan" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-primary-100">Subject</label>
                        <select id="subject" name="subject" className="mt-1 block w-full bg-primary-900/50 border-primary-700 rounded-md shadow-sm text-white focus:ring-accent-cyan focus:border-accent-cyan">
                          <option>General Inquiry</option>
                          <option>FastFind360 Demo Request</option>
                          <option>Propabridge Property Listing</option>
                          <option>Press & Media</option>
                          <option>Careers</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary-100">Message</label>
                        <textarea id="message" name="message" rows={5} className="mt-1 block w-full bg-primary-900/50 border-primary-700 rounded-md shadow-sm text-white focus:ring-accent-cyan focus:border-accent-cyan"></textarea>
                      </div>
                      <div>
                        <Button type="submit" variant="primary" size="lg" fullWidth>Send Message</Button>
                      </div>
                    </form>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
