import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
        <section  className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <Badge variant="outline" className="bg-orange-100 text-orange-600">Split smarter. Spend better.</Badge>

            <h1  className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
              Effortless expense sharing, powered by brains
            </h1>

            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Split costs with ease, track every detail. No more awkward IOUs or forgotten tabs.
            </p>

            {/* <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div> */}
          </div>
        </section>
        
    </div>
  );
}
