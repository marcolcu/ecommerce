"use client";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { useCart } from "@/app/cartcontext";

export function Navbar() {
  const { cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold">Acme Store</span>
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-4">
            <Link href="/" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
              Men
            </Link>
            <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
              Women
            </Link>
            <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
              Kids
            </Link>
            <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
              Sale
            </Link>
          </nav>
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              className="h-9 w-72 rounded-md border border-gray-300 bg-white pl-10 text-sm focus:border-gray-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative" prefetch={false}>
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItems}
                </span>
              )}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                >
                  <img
                    src="/placeholder-user.jpg"
                    width="32"
                    height="32"
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="font-bold">Acme Store</span>
              </Link>
            </div>
            <nav className="grid gap-4 px-4 py-6">
              <Link href="/" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
                Men
              </Link>
              <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
                Women
              </Link>
              <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
                Kids
              </Link>
              <Link href="#" className="font-medium hover:text-gray-900 dark:hover:text-gray-50" prefetch={false}>
                Sale
              </Link>
            </nav>
            <div className="border-t px-4 py-6 dark:border-gray-800">
              <div className="relative flex items-center">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="h-9 w-full rounded-md border border-gray-300 bg-white pl-10 text-sm focus:border-gray-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                />
              </div>
            </div>
            <div className="border-t px-4 py-6 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <Link href="/cart" className="relative" prefetch={false}>
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    3
                  </span>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    >
                      <img
                        src="/placeholder-user.jpg"
                        width="32"
                        height="32"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem>Wishlist</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
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


function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
