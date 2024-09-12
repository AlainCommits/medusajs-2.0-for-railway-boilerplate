import { WobbleCard } from "@/components/ui/wobble-card";
import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import  Image  from 'next/image';
const Hero = () => {
  return (
    // <div className="h-[75vh] w-full border-b border-ui-border-base relative ">
    //   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6 gap-6">
    //     {/* Grid Layout für die WobbleCards */}
    //     <div className="w-full max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    //       {/* Obere Reihe */}
    //       <div className="lg:col-span-2">
    //         <WobbleCard
    //           containerClassName="w-full h-64 radial-gradient(88%_100%_at_top,rgba(var(--accent-foreground)),rgba(var(--primary))"
    //           className="text-center p-6  radial-gradient(88%_100%_at_top,rgba(var(--accent-foreground)),rgba(var(--primary))"
    //         >
    //           <h2 className="text-2xl font-semibold">Linke Karte</h2>
    //           <p className="mt-4">Dies ist die doppelt so breite Karte.</p>
    //         </WobbleCard>
    //       </div>
    //       <div>
    //         <WobbleCard
    //           containerClassName="w-full h-64"
    //           className="text-center p-6 bg-secondary"
    //         >
    //           <h2 className="text-2xl font-semibold">Rechte Karte</h2>
    //           <p className="mt-4">Dies ist die kleinere Karte.</p>
    //         </WobbleCard>
    //       </div>

    //       {/* Untere Reihe */}
    //       <div className="lg:col-span-3">
    //         <WobbleCard
    //           containerClassName="w-full h-64"
    //           className="text-center p-6"
    //         >
    //           <h2 className="text-2xl font-semibold">Untere Karte</h2>
    //           <p className="mt-4">Dies ist die Karte, die die gesamte Breite einnimmt.</p>
    //         </WobbleCard>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className="min-h-screen bg-gradient-to-r from-background to-secondary flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        {/* Left column with text */}
        <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-1">
            EasyGreen
          </h1>
          <p className="text-xl text-gray-600 mb-8 gradient-text-2">
            Original Bisasam Shit  
          </p>
          
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-50">
            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,(var(--primary)#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent-foreground))_50%,hsl(var(--primary))_100%)]" />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-gradient-1 backdrop-blur-3xl">
              Zum Shop
            </span>
          </button>
        </div>

        {/* Right column with asymmetric grid */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
            <div className="col-span-4 row-span-4 relative overflow-hidden shadow-lg bg-background rounded-3xl">
              
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Large landscape"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg bg-background rounded-3xl">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Small square 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg bg-background rounded-3xl">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Small square 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-lg bg-background rounded-3xl">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Wide rectangle"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-lg bg-background rounded-3xl">
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
    </section>
  );
};

export default Hero;
