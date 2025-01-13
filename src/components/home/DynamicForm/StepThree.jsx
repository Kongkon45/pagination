"use client";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const StepThree = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });
  return (
    <div>
      {fields?.map((field, index) => (
        <div key={field.id} className="flex items-center justify-between gap-4">
          <div className="w-3/4">
            <label htmlFor="hobbies">
              {" "}
              Hobby {index + 1} :
              <input
                {...register(`hobbies.${index}.name`)}
                placeholder="Hooby Name"
                className="w-full border py-1 px-2 rounded-full mb-2"
              />
            </label>
          </div>
          <div className="w-1/4 mt-3">
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-500 text-white py-1 px-4 rounded-full "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "" })} className="bg-green-500 text-white py-1 px-4 rounded-full ">
        Add Hooby
      </button>
    </div>
  );
};

export default StepThree;
