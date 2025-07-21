"use client";
import { BookingForm, Button, Loader } from "@/components";
import Image from "next/image";
import React, { Suspense } from "react";
import useLogic from "./useLogic";
import { useRouter } from "next/navigation";

const SingleCoord = () => {
  const { data, makeBooking, setMakeBooking, loading, formik } = useLogic();

  const router = useRouter();
  return (
    <Suspense>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-5 text-sm p-5 max-w-[600px]">
            <div className="flex justify-center w-full">
              <Image
                src={data?.photoUrl as string}
                alt="coord"
                width={300}
                height={300}
                className="rounded-lg w-full max-w-[600px]"
                unoptimized
              />
            </div>
            <h3 className="font-semibold text-3xl">
              {makeBooking && "Book"} {data?.name}
            </h3>
            <>
              {makeBooking ? (
                <BookingForm formik={formik} setMakeBooking={setMakeBooking} />
              ) : (
                <>
                  <p className="flex items-center gap-2">{data?.bio}</p>
                  <p className="flex items-center gap-2 ">{data?.location}</p>
                  <p className="flex items-center p-3 rounded bg-purple-100 dark:bg-purple-500">
                    {" "}
                    ₦{data?.price}
                  </p>
                  <div className="grid grid-cols-2 gap-5">
                    <Button
                      title={"Back to Coordinators"}
                      variant="outlined"
                      onClick={() => {
                        router.push("/coordinators");
                      }}
                      fullWidth
                    />
                    <Button
                      title={`Book `}
                      className="bg-gray-600"
                      onClick={() => {
                        setMakeBooking(true);
                      }}
                      fullWidth
                    />
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default SingleCoord;
