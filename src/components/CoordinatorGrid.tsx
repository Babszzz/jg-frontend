import Image from "next/image";
import React from "react";

export const dummyCoordinators = [
  {
    _id: "1",
    name: "Amara Events",
    location: "Lagos, Nigeria",
    price: 1200,
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    _id: "2",
    name: "Elegant Touch Weddings",
    location: "Abuja, Nigeria",
    price: 1500,
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    _id: "3",
    name: "Bella Bliss Coordination",
    location: "Port Harcourt, Nigeria",
    price: 1000,
    photoUrl: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    _id: "4",
    name: "Golden Moments",
    location: "Ibadan, Nigeria",
    price: 900,
    photoUrl: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

export const CoordinatorGrid = () => {
  return (
    <div className="flex w-full justify-center p-5">
      <div className="w-full grid grid-cols-4 max-w-[800px] gap-8">
        {dummyCoordinators?.map((x, i) => (
          <div key={i} className="flex flex-col gap-2 text-sm">
            <Image
              src={x.photoUrl}
              alt="coord"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h4 className="font-semibold">{x.name}</h4>
            <p className="flex items-center gap-2">{x.location}</p>
            <p className="flex items-center "> ₦{x.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoordinatorGrid;
