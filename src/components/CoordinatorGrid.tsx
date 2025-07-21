import { CoordinatorDto } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const CoordinatorGrid = ({ coords }: { coords: CoordinatorDto[] }) => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-center p-5">
      {coords?.length > 0 ? (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[800px] gap-8">
          {coords?.map((x, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 text-sm"
              onClick={() => {
                router.push(`/coordinators/${x._id}`);
              }}
            >
              <Image
                src={x.photoUrl}
                alt="coord"
                width={300}
                height={300}
                className="rounded-lg w-full"
                unoptimized
              />
              <h4 className="font-semibold">{x.name}</h4>
              <p className="flex items-center gap-2">{x.location}</p>
              <p className="flex items-center "> ₦{x.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl text-center">No Coordinators Found</p>
      )}
    </div>
  );
};

export default CoordinatorGrid;
