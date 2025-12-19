"use client";

import { Form, Input, Button } from "@heroui/react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-screen snap-start grow items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold p-5 text-center">
          Contact Me
        </h1>
        <div className="flex flex-col shadow-2xl rounded-3xl p-10">
          <Form className="w-full max-w-xs">
            <Input
              className="my-4"
              isRequired
              label="Firstname"
              labelPlacement="outside"
              name="firstname"
              placeholder="Enter your firstname"
              type="text"
            />
            <Input
              className="my-4"
              isRequired
              label="Lastname"
              labelPlacement="outside"
              name="lastname"
              placeholder="Enter your lastname"
              type="text"
            />
            <Input
              className="my-4"
              isRequired
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </Form>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
  );
}
