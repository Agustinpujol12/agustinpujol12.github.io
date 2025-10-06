"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { certificateImages } from "@/lib/data";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function CertificatesSection() {
  const [open, setOpen] = useState(false);
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedSrc(src);
    setOpen(true);
  };

  return (
    <section id="certificates" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Certificados
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Mis certificaciones destacadas
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {certificateImages.map((src, idx) => (
            <SwiperSlide key={idx} className="flex">
              <Card
                className="flex h-full w-full items-center justify-center p-6 cursor-zoom-in"
                onClick={() => handleOpen(src)}
                aria-label={`Abrir certificado ${idx + 1}`}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={src}
                    alt={`Certificado ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={idx < 2}
                  />
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal de zoom */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-0">
          <div className="relative w-full h-[80vh]">
            {selectedSrc && (
              <Image
                src={selectedSrc}
                alt="Certificado ampliado"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
