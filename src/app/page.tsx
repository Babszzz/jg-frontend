"use client";
import { weddingImg } from "@/assets";
import { Button, CoordinatorGrid, Loader, SearchInput } from "@/components";
import { useApiRequest } from "@/libs/ useApiRequest";
import { CoordinatorDto } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { data, loading } = useApiRequest<{ data: CoordinatorDto[] }>({
    url: `/coordinators?limit=4&search=${searchQuery}`,
  });

  return (
    <>
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <CoordinatorGrid coords={data?.data ?? []} />
          <div className="w-full flex justify-center pb-20">
            <Button
              title="See more coordinators"
              variant="text"
              onClick={() => {
                router.push("coordinators");
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
