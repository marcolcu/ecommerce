"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/app/cartcontext";

export function LandingPage() {
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  const handleAddToCart = () => {
    addToCart(); // Call addToCart when the button is clicked
  };

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-green-300 to-secondary   py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Discover the Latest Trends in Fashion
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Explore our curated collection of stylish and high-quality products for all your fashion needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-background px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Collection
              </Link>
            </div>
          </div>
          <Carousel className="rounded-lg shadow-lg">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Hero Image 1"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] md:h-[500px] lg:h-[600px]"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Hero Image 2"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] md:h-[500px] lg:h-[600px]"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Hero Image 3"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] md:h-[500px] lg:h-[600px]"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            prefetch={false}
          >
            <ShirtIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Tops</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            prefetch={false}
          >
            <PenIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Bottoms</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            prefetch={false}
          >
            <FootprintsIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Shoes</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            prefetch={false}
          >
            <ShoppingBagIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Bags</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            prefetch={false}
          >
            <AccessibilityIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Accessories</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            prefetch={false}
          >
            <GemIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Jewelry</span>
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-r from-secondary to-green-300 py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold">Summer Dress</h3>
              <p className="text-muted-foreground mb-4">Lightweight and Stylish</p>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold">$49.99</span>
                <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold">Casual Shirt</h3>
              <p className="text-muted-foreground mb-4">Comfortable and Versatile</p>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold">$29.99</span>
                <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold">Skinny Jeans</h3>
              <p className="text-muted-foreground mb-4">Flattering and Trendy</p>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold">$59.99</span>
                <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tighter">Top Selling Products</h2>
            <Link
              href="/product"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <Carousel className="rounded-lg bg-transparent">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <Link href="/product/1" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Product Image"
                        width={400}
                        height={400}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                        style={{ aspectRatio: "400/400", objectFit: "cover" }}
                      />
                    </Link>
                    <CardContent className="p-4">
                      <Link href="/product/1" prefetch={false}>
                        <h3 className="text-lg font-semibold">Summer Dress</h3>
                        <p className="text-muted-foreground mb-4">Lightweight and Stylish</p>
                      </Link>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">$49.99</span>
                        <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <Link href="/product/1" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Product Image"
                        width={400}
                        height={400}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                        style={{ aspectRatio: "400/400", objectFit: "cover" }}
                      />
                    </Link>
                    <CardContent className="p-4">
                      <Link href="/product/1" prefetch={false}>
                        <h3 className="text-lg font-semibold">Casual Shirt</h3>
                        <p className="text-muted-foreground mb-4">Comfortable and Versatile</p>
                      </Link>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">$29.99</span>
                        <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <Link href="/product/1" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Product Image"
                        width={400}
                        height={400}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                        style={{ aspectRatio: "400/400", objectFit: "cover" }}
                      />
                    </Link>
                    <CardContent className="p-4">
                      <Link href="/product/1" prefetch={false}>
                        <h3 className="text-lg font-semibold">Skinny Jeans</h3>
                        <p className="text-muted-foreground mb-4">Flattering and Trendy</p>
                      </Link>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">$59.99</span>
                        <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main >
  )
}

function AccessibilityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function FootprintsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}


function GemIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShirtIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function ShoppingBagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}


function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
