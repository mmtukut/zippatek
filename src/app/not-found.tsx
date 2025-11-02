
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-neutral-900">
      <Header />
      <main className="flex items-center justify-center py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-semibold text-primary-500 dark:text-accent-cyan">404</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-neutral-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button onClick={() => router.back()} variant="secondary" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button as="a" href="/" variant="primary" size="lg">
                <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
