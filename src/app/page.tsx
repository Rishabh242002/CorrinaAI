import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { ArrowRightCircleIcon, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[30px] gap-4 ">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
            An AI powered sales assistant chatbot
          </span>
          <div className="w-full max-w-[500px]">
            <Image
              src="/images/corinna-ai-logo.png"
              width={500}
              height={100}
              alt="Logo"
              className="max-w-full h-auto object-contain"
            />
          </div>
          <p className="text-center text-lg max-w-[500px]">
            Your AI powered sales assistant! Embed Corinna AI into any website
            with just a snippet of code!
          </p>
          <Button asChild className="bg-orange font-bold text-white px-4">
            <Link href="/dashboard">Try For Free</Link>
          </Button>
          <div className="w-full max-w-[400px]">
            <Image
              src="/images/iphonecorinna.png"
              width={400}
              height={100}
              alt="Logo"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="-mt-6">
        <div className="App flex flex-col items-center justify-center min-h-screen bg-white p-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange">
              Appointment Booking Made Simple
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mx-auto max-w-2xl mb-10">
              Your Assistant simplifies scheduling and ensures user book your
              appointment hassle-free.
            </p>
          </header>
          <img
            src="https://ucarecdn.com/2e758e20-06c5-4a30-b320-ad3f69cb1902/undraw_booking_re_gw4j.svg"
            alt="Appointment Booking"
            className="w-full h-1/2 max-w-md object-contain"
          />
        </div>
      </section>

      <section className="-mt-20">
        <div className="App flex flex-col items-center justify-center min-h-screen bg-white p-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange">
              Effortless Email Marketing Campaigns{" "}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mx-auto max-w-2xl">
              Easily create and manage email campaigns with our intuitive tools.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mx-auto max-w-2xl">
              Add contacts, craft your message, and send emails with just one
              click.
            </p>
          </header>
          <Image
            src="https://ucarecdn.com/8c5e9793-ed56-4b36-a77f-34a3a6ef334f/undraw_email_campaign_re_m6k5.svg"
            alt="Appointment Booking"
            className="w-full h-max max-w-md object-contain"
            width={400}
            height={500}
          />
        </div>
      </section>
      <section className="-mt-15">
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange">
            {" "}
            Choose what fits you right
          </h1>
          <p className="text-muted-foreground text-center max-w-lg">
            Our straightforward pricing plans are tailored to meet your needs.
            If
            {" you're"} not ready to commit you can get started for free.
          </p>
        </div>

        <div className="flex  justify-center gap-4 flex-wrap mt-4">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited",
              })}
            >
              <CardHeader>
                <CardTitle className="text-orange">{card.title}</CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/ month</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex gap-2">
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/dashbord?plan=${card.title}`}
                  className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="min-h-screen bg-white p-8 -mt-20 -mb-15">
        <div className="App flex flex-col items-center justify-center min-h-screen bg-white p-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange">
              Get started for free
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mx-auto max-w-2xl">
              Play around with it first. Pay and add your team later.
            </p>
          </header>
          <div className="relative w-full h-1/2 max-w-md">
            <img
              src="https://ucarecdn.com/f0b02066-a781-4f8e-ae6e-da88043494cd/notionparade.webp"
              alt="Notion Parade"
              className="w-full  object-contain"
            />
          </div>
        </div>
      </section>
      <footer className="bg-orange/20 py-4 -mt-15">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center"></div>
            <ul className="flex gap-5 text-sm text-neutral-700">
              <li>Made with ❤️</li>
            </ul>
            <img src="/images/logo.png" alt="Logo" className="w-16 h-auto" />
          </div>
        </div>
      </footer>
    </main>
  );
}
