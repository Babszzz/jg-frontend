"use client";
import { useApiRequest } from "@/libs/ useApiRequest";
import { CoordinatorDto } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Coordinators = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { data, loading } = useApiRequest<{ data: CoordinatorDto[] }>({
    url: `/coordinators?limit=20&searchQuery=${searchQuery}`,
  });

  return <div></div>;
};

export default Coordinators;
