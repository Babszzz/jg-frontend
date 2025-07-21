import { WeddingBooking } from "@/types";
import { FormikProps } from "formik";
import React, { Dispatch, SetStateAction } from "react";
import Input from "./Input";
import { Button } from "./Button";

export const BookingForm = ({
  formik,
  setMakeBooking,
  loadingForm,
}: {
  formik: FormikProps<WeddingBooking>;
  setMakeBooking: Dispatch<SetStateAction<boolean>>;
  loadingForm: boolean;
}) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.name}
        touched={touched.name}
        placeholder="e.g Jane Doe"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.email}
        touched={touched.email}
        placeholder="e.g jane@example.com"
      />

      <Input
        label="Wedding Date"
        name="weddingDate"
        type="date"
        value={values.weddingDate}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.weddingDate}
        touched={touched.weddingDate}
      />

      <Input
        label="Guest Number"
        name="guestNumber"
        type="number"
        value={values.guestNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.guestNumber}
        touched={touched.guestNumber}
        placeholder="e.g 150"
      />

      <div className="grid grid-cols-2 gap-5">
        <Button
          title={"Cancel"}
          variant="outlined"
          onClick={() => {
            setMakeBooking(false);
          }}
          fullWidth
        />{" "}
        <Button
          title={"Make Booking"}
          type="submit"
          fullWidth
          loading={loadingForm}
        />
      </div>
    </form>
  );
};

export default BookingForm;
