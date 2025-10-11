import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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

            <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
              >
                <Link href="/dashboard">
                  Start Splitting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <Link href="#how-it-works">See It In Action</Link>
              </Button>
            </div>
          </div>

          <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
            <div className="gradient p-1 aspect-[16/9]">
              <Image
                src="/hero.png"
                width={1280}
                height={720}
                alt="Banner"
                className="rounded-lg mx-auto"
                priority
                />
            </div>
          </div>
        </section>
        
        <section id="features" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Badge variant="outline" className="bg-orange-100 text-orange-700">
              Features
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Split smarter — everything you need, in one place
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Built to simplify every shared expense — from rent to road trips.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ title, Icon, bg, color, description }) => (
                <Card
                  key={title}
                  className="flex flex-col items-center space-y-4 p-6 text-center"
                >
                  <div className={`rounded-full p-3 ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>

                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Badge variant="outline" className="bg-orange-100 text-orange-700">
              How It Works
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Splitting expenses has never been easier
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Follow these simple steps to start tracking and splitting expenses
              with friends.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              {STEPS.map(({ label, title, description }) => (
                <div key={label} className="flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-600">
                    {label}
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500 text-center">{description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Testimonials */}

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-orange-100 text-orange-700">
            Testimonials
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are saying
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between">
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      {/* Placeholder avatar */}
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 gradient">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Ready to make splitting expenses effortless?
          </h2>
          <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed">
            Thousands trust SplitAi to make expense sharing effortless.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/dashboard">
              Dive In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SplitAI. All rights reserved.
      </footer>
    </div>
  );
}
