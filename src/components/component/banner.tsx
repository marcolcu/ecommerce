import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const Banner: React.FC = () => {
    return (
        <Carousel
            className="w-full max-w-[84rem]"
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/placeholder.svg"
                            alt="Banner 1"
                            width="800"
                            height="400"
                            className="w-full object-cover"
                            style={{ aspectRatio: "800/400", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Discover our latest products</h3>
                            <p className="mt-2 text-lg">Check out our new collection and find the perfect fit for you.</p>
                            <Button className="mt-4">Shop Now</Button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/placeholder.svg"
                            alt="Banner 2"
                            width="800"
                            height="400"
                            className="w-full object-cover"
                            style={{ aspectRatio: "800/400", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Summer Sale is on!</h3>
                            <p className="mt-2 text-lg">Don't miss out on our amazing discounts.</p>
                            <Button className="mt-4">Shop Now</Button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/placeholder.svg"
                            alt="Banner 3"
                            width="800"
                            height="400"
                            className="w-full object-cover"
                            style={{ aspectRatio: "800/400", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Upgrade your style</h3>
                            <p className="mt-2 text-lg">Explore our latest collection and find your perfect fit.</p>
                            <Button className="mt-4">Shop Now</Button>
                        </div>
                    </div>
                </CarouselItem>
                {/* Add more CarouselItem components here */}
            </CarouselContent>
            <CarouselPrevious className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white hover:text-primary focus:outline-none" />
            <CarouselNext className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white hover:text-primary focus:outline-none" />
        </Carousel>
    );
}

export default Banner;