'use client';
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Rocket, GitFork, Earth, LayoutGrid, Zap, Expand, Sparkles } from 'lucide-react';

export default function IndexPage() {
  return (
    <main className="flex flex-1 flex-col justify-center bg-muted text-center">
      <section className="flex flex-col items-center gap-4 w-full py-50 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/background.svg')" }}
      >
        <Image
          src="/logo_long.png"
          alt="SpecFWAT Logo"
          width={500}
          height={200}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold text-fd-foreground">
          SpecFWAT: Illuminate Refined Subsurface Structures
        </h1>
        <p className="text-fd-muted-foreground text-gray-500 text-opacity-70">
          An easy, fast, and powerful full-waveform adjoint tomography (FWAT) tool for multiple seismic data.
        </p>
        <div className="flex gap-4 items-center max-w-xs mx-auto">
        <Button className="bg-indigo-500" size="sm" asChild>
        <Link href="/docs">  Get Started <Rocket /> </Link>
        </Button>
        <Button className='flex-1' size="sm" variant="outline" asChild>
          <Link href="https://github.com/CompSeismoUT/SpecFWAT" > Fork on GitHub <GitFork /> </Link>
        </Button>
        </div>
      </section>
      <section className="w-full bg-background flex flex-col items-center gap-4 py-10">
        <h1 className="text-4xl font-bold tracking-tight text-fd-foreground">
          Features
        </h1>
        <p className="text-fd-muted-foreground max-w-md text-gray-500 text-opacity-70">
          SpecFWAT employ adjoint waveform tomography method and support multiple types of seismic data and is designed to be user-friendly and fast
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <Earth />
              <CardTitle>SPECFEM3D</CardTitle>
              <CardDescription>
                It is built on top of the open-source software package SPECFEM3D for simulating seismic wave propagation in 3D heterogeneous media.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <Sparkles />
              <CardTitle>Flexible data support</CardTitle>
              <CardDescription>
                Teleseismic, ambient noise, and receiver function data are supported and their joint inversion can also be used.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <LayoutGrid />
              <CardTitle>Multi-parameter inversion</CardTitle>
              <CardDescription>
                Both isotropic (Vp, Vs, and density) and anisotropic (Gc and Gs) elastic parameters can be inverted for.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <Zap />
              <CardTitle>Fast and efficient</CardTitle>
              <CardDescription>
                SpecFWAT is designed to be fast and efficient, allowing users to perform FWI on supercomputer accelerated by GPUs and CPUs.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <Earth />
              <CardTitle>Easy</CardTitle>
              <CardDescription>
              Simple format for model files (<strong>.h5</strong>), data files (<strong>.sac</strong>) and parameter files (<strong>.yml</strong>) that are easy to read and write.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <Expand />
              <CardTitle>Scalable</CardTitle>
              <CardDescription>
              It is designed to be scalable under Object-Oriented Fortran by modularizing the code and using CMake for building.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="flex flex-col bg-indigo-50/70 items-center gap-4 w-full py-10 ">
        <h1 className="text-4xl font-bold tracking-tight text-fd-foreground">
          Showcases
        </h1>
        <p className="text-fd-muted-foreground max-w-md text-gray-500 text-opacity-70">
          SpecFWAT has been used to invert for the subsurface structure of the Earth in various regions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] max-w-6xl w-full mx-auto border border-white/20 rounded-lg bg-background backdrop-blur-md shadow-lg">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <CardTitle>Receiver Function Adjoint Tomography</CardTitle>
              <CardDescription>
              We have developed a novel technique that allows for direct inversion of P-wave receiver functions for a detailed 3-D S-wave velocity model. By applying this technique to a dense seismic array located in the southeastern margin of the Tibetan Plateau, we can resolve detailed crustal and uppermost mantle structures with strong lateral variations. The results indicate that the boundary faults of the geological blocks play a critical role in controlling the lateral variations of the crustal and upper mantle structures. Our findings provide new insights into the dynamics of lithosphere-asthenosphere interactions and continental collision processes in this region.
              </CardDescription>
              <CardFooter className="text-left items-start">
                <Link 
                href="https://doi.org/10.1029/2023GL104077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-500 hover:underline"
              >
                learn more
              </Link>
              </CardFooter>
            </CardHeader>
          </Card>
          <Card className="shadow-none bg-transparent border-none">
            <CardContent>
              <Image
                src="/rfker.jpg"
                alt="Receiver Function Ker"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] max-w-6xl w-full mx-auto border border-white/20 rounded-lg bg-background backdrop-blur-md shadow-lg">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-left items-start">
              <CardTitle>Joint Full-waveform Adjoint Tomography</CardTitle>
              <CardDescription>
              The genesis of the Cenozoic intraplate volcanism in Central Mongolia, characterized by sustained and low-volume eruptions remains debated due to the lack of a comprehensive model to interpret the Cenozoic volcanic activities. Here, we introduce a high-resolution 3D velocity model of the Hangay Dome, using a novel joint method which combines receiver function adjoint tomography and ambient noise adjoint tomography. The small-scale low-velocity zones in the crust and uppermost mantle reveal a crustal magma reservoir and partially molten subcontinental lithospheric mantle (SCLM). Melt fraction estimation indicates low-degree partially molten crust and SCLM. Combining previous geophysical and geochemical observations, we suggest that the volcanism in the Hangay Dome is driven by multilevel mechanisms. The remnant Mesozoic volatiles triggered upper mantle upwelling. This upwelling accumulated in the asthenosphere, heating the SCLM, and prompted its low-degree partial melting. The molten SCLM caused local lithospheric thinning and facilitated the magmatic underplating in the lower crust, eventually leading to the formation of the crustal magma reservoir.
              </CardDescription>
              <CardFooter className="text-left items-start">
                <Link 
                href="https://doi.org/10.1016/j.epsl.2024.119137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-500 hover:underline"
              >
                learn more
              </Link>
              </CardFooter>
            </CardHeader>
          </Card>
          <Card className="shadow-none bg-transparent border-none">
            <CardContent>
              <Image
                src="/jointat.jpg"
                alt="Ambient Noise Ker"
                width={250}
                height={200}
                className="rounded-lg mx-auto"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
    
  )
}
