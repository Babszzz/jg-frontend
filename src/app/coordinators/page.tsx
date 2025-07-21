"use client";
import { CoordinatorGrid, Loader, SearchInput } from "@/components";
import { useApiRequest } from "@/libs/ useApiRequest";
import { CoordinatorDto } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Coordinators = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { data, loading } = useApiRequest<{ data: CoordinatorDto[] }>({
    url: `/coordinators?limit=20&search=${searchQuery}`,
  });

  return (
    <div className="flex flex-col ">
      <h1 className="text-4xl md:text-5xl font-bold font-secondary flex justify-center mt-5">
        Our Coordinators
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full px-5 md:px-10 my-7">
            <SearchInput
              setSearchQuery={setSearchQuery}
              placeholder="Book Wedding Coordinators"
              searchQuery={searchQuery}
            />
          </div>
          <CoordinatorGrid coords={data?.data ?? []} />
        </>
      )}
    </div>
  );
};

export default Coordinators;
