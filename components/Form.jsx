import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email Address" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="tel" placeholder="Phone Number" />
          <Select>
            <SelectTrigger className="w-full rounded-none !h-[54px] utline-none py-2 px-6 !text-[#121315]">
              <SelectValue placeholder="Select a service"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          placeholder="Enter your message"
          className="h-[180px] resize-none rounded-none px-6 py-2 placeholder:text-[#121315]"
        />
        <Button text={"Send Message"} />
      </div>
    </form>
  );
};

export default Form;
