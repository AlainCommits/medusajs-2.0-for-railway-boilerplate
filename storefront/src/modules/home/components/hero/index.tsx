import { WobbleCard } from "@/components/ui/wobble-card";
import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-background to-secondary flex items-center py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left column with text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 gradient-text-1">
              EasyGreen
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 lg:mb-8 gradient-text-2 max-w-md mx-auto lg:mx-0">
              Original Bisasam Shit  
            </p>
            
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent-foreground))_50%,hsl(var(--primary))_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-medium text-gradient-1 backdrop-blur-3xl">
                Zum Shop
              </span>
            </button>
          </div>

          {/* Right column with asymmetric grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="col-span-4 row-span-4 relative overflow-hidden shadow-lg bg-background rounded-2xl md:rounded-3xl">
                <Image
                  src="/bild1.png"
                  alt="Large landscape"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="col-span-2 row-span-2 relative overflow-hidden shadow-lg bg-background rounded-xl md:rounded-2xl">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Small square 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="col-span-2 row-span-2 relative overflow-hidden shadow-lg bg-background rounded-xl md:rounded-2xl">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Small square 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="col-span-3 row-span-2 relative overflow-hidden shadow-lg bg-background rounded-xl md:rounded-2xl">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Wide rectangle"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="col-span-3 row-span-2 relative overflow-hidden shadow-lg bg-background rounded-xl md:rounded-2xl">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Wide rectangle 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;