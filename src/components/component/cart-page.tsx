"use client";
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function CartPage() {
  // Initial cart items with quantity state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Acme Circles T-Shirt",
      description: "60% combed ringspun cotton/40% polyester jersey tee.",
      price: 29.99,
      quantity: 2,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Aqua Filters",
      description: "High-quality water filters for your home.",
      price: 49.00,
      quantity: 3,
      image: "/placeholder.svg",
    }
  ])

  // Function to handle quantity change
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item
      )
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 grid md:grid-cols-[2fr_1fr] gap-8">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {cartItems.map(item => (
                <div key={item.id} className="grid md:grid-cols-[80px_1fr_100px_50px_50px] items-center gap-4">
                  <img
                    src={item.image}
                    width={80}
                    height={80}
                    alt="Product Image"
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  <Button variant="destructive" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Apply Promo Code</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex gap-2">
              <Input type="text" placeholder="Enter promo code" className="flex-1" />
              <Button>Apply</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span className="text-green-500">-$19.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) - 19).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Order Total</span>
              <span>${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) - 19 + 10).toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
