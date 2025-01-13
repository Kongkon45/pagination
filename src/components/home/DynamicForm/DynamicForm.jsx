"use client";
import React from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const DynamicForm = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      hobbies: [{ name: "" }],
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };
  return (
    <div>
      <h3 className="text-3xl font-bold text-black leading-normal text-center">
        Dynamic Form
      </h3>
      <div className="w-1/2 mx-auto">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <StepOne />
            <StepTwo />
            <StepThree />
              <button type="submit" className="w-full bg-orange-500 text-white py-1 px-4 rounded-full mt-4 text-center">Submit</button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
};

export default DynamicForm;
