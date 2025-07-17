"use client";
import { weddingImg } from "@/assets";
import { Button, CoordinatorGrid, SearchInput } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  return (
    <>
      <section className="w-full bg-white dark:bg-gray-700 dark:text-white h-20 flex items-center secondary-font justify-center text-xl font-secondary">
        The Wedding Coord
      </section>
      <section
        className="relative h-[60vh] w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${weddingImg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-secondary">
            Find Your Perfect Wedding Coordinator
          </h1>
          <p className="mt-4 text-lg max-w-xl mb-5">
            Browse experienced professionals to make your special day stress
            free.
          </p>
          <div className="w-full px-10">
            <SearchInput
              setSearchQuery={setSearchQuery}
              placeholder="Book Wedding Coordinators"
            />
          </div>
        </div>
      </section>
      <CoordinatorGrid />
      <div className="w-full flex justify-center mb-10">
        <Button
          title="See more coordinators"
          variant="text"
          onClick={() => {
            router.push("coordinators");
          }}
        />
      </div>
    </>
  );
}
