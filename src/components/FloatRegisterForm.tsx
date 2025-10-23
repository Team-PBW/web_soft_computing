"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { Button } from "@/components/ui/button";

const FloatRegisterForm = () => {
  const form = useForm();

  return (
    <div className="w-2/5 h-4/5 flex justify-center items-center bg-white rounded-lg">
      <Form {...form}>
        <form action="" className="flex flex-col gap-8 py-8 w-4/5 mx-9">
          <h1 className="text-black font-inter font-extrabold text-[24px] leading-[100%] tracking-[0.01em] align-middle">
            Register
          </h1>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput
                    type="input"
                    placeholder="Nama"
                    isHidden={false}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="Email Address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput
                    type="email"
                    placeholder="Email Address"
                    isHidden={false}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput
                    type="password"
                    placeholder="Password"
                    isHidden={false}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput
                    type="password"
                    placeholder="Confirm Password"
                    isHidden={false}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <h6 className="font-inter font-semibold text-[12px] leading-[100%] tracking-[0] text-[#006FFD]">
            Forgot password?
          </h6>

          <Button className="bg-[#006FFD] w-2/5">Register</Button>

          <h6 className="font-inter font-normal text-[12px] leading-[16px] tracking-[0.01em] text-center">
            Already a member?{" "}
            <span className="text-[#006FFD] font-inter font-semibold text-[12px] leading-[100%] tracking-[0] text-center">
              Login now
            </span>
          </h6>
        </form>
      </Form>
    </div>
  );
};

export default FloatRegisterForm;
