"use client";

import { useState, useMemo } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category?: string
  featured?: boolean
  date?: string
}

export function ProductList() {
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation",
      price: 99.99,
      image: "/placeholder.svg",
      category: "apparel",
    },
    {
      id: 2,
      name: "Leather Backpack",
      description: "Durable and stylish everyday bag",
      price: 149.99,
      image: "/placeholder.svg",
      category: "home",
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track your fitness and stay connected",
      price: 199.99,
      image: "/placeholder.svg",
      category: "electronics",
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      description: "Powerful sound in a compact design",
      price: 79.99,
      image: "/placeholder.svg",
      category: "electronics",
    },
    {
      id: 5,
      name: "Ergonomic Office Chair",
      description: "Comfortable and supportive for long hours",
      price: 299.99,
      image: "/placeholder.svg",
      category: "outdoor",
    },
    {
      id: 6,
      name: "Outdoor Camping Gear",
      description: "Essential equipment for your next adventure",
      price: 149.99,
      image: "/placeholder.svg",
      category: "outdoor",
    },
  ]

  const [sortBy, setSortBy] = useState<string>("featured")
  const [filterBy, setFilterBy] = useState<string[]>([])

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const handleFilterChange = (value: string) => {
    setFilterBy(prevFilterBy =>
      prevFilterBy.includes(value)
        ? prevFilterBy.filter(item => item !== value)
        : [...prevFilterBy, value]
    )
  }

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        if (filterBy.length === 0) return true
        return filterBy.includes(product.category || "")
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
          case "low":
            return a.price - b.price
          case "high":
            return b.price - a.price
          case "newest":
            return (new Date(b.date || "").getTime() - new Date(a.date || "").getTime())
          default:
            return 0
        }
      })
  }, [products, sortBy, filterBy])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                Sort by: {sortBy}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSortChange}>
                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuCheckboxItem
                checked={filterBy.includes("electronics")}
                onCheckedChange={() => handleFilterChange("electronics")}
              >
                Electronics
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterBy.includes("apparel")}
                onCheckedChange={() => handleFilterChange("apparel")}
              >
                Apparel
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterBy.includes("home")}
                onCheckedChange={() => handleFilterChange("home")}
              >
                Home
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterBy.includes("outdoor")}
                onCheckedChange={() => handleFilterChange("outdoor")}
              >
                Outdoor
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-semibold">${product.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
