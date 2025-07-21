import { useApiRequest } from "@/libs/ useApiRequest";
import { apiRequest } from "@/libs/apiRequest";
import { CoordinatorDto, WeddingBooking } from "@/types";
import { useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

const useLogic = () => {
  const { id } = useParams();
  const { data, loading } = useApiRequest<CoordinatorDto>({
    url: `/coordinators/${id}`,
  });

  const [makeBooking, setMakeBooking] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);

  const initialValues: WeddingBooking = {
    coordinatorId: (id as string) ?? "",
    name: "",
    email: "",
    weddingDate: "",
    guestNumber: 0,
  };

  const validationSchema = yup.object({
    coordinatorId: yup.string().required("Coordinator is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    weddingDate: yup
      .date()
      .required("Wedding date is required")
      .min(new Date(), "Wedding date cannot be in the past"),
    guestNumber: yup
      .number()
      .min(1, "Must invite at least 1 guest")
      .required("Number of guests is required"),
  });

  const createBooking = async (payload: WeddingBooking) => {
    return await apiRequest({
      method: "post",
      url: "/bookings",
      data: payload,
      showSuccessToast: true,
    });
  };

  const router = useRouter();

  const formik = useFormik<WeddingBooking>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoadingForm(true);
      const { success } = await createBooking(values);

      if (success) {
        console.log("Successful");
        router.push("/coordinators");
      }

      setLoadingForm(false);
    },
  });
  return { data, makeBooking, setMakeBooking, loading, formik, loadingForm };
};

export default useLogic;
