"use client"

import { useState } from "react"
import { contactSchema } from "../app/index";  // adjust the path as needed


import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

// import { siteConfig } from "@/config/site"
// import { Icons } from "../components/icons"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import MotionDiv from "@/components/motion-div"
import ContactList from "@/components/contact-list"

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true)
    try {
      await axios.post("/api/send", {
        email: values.email,
        message: values.message,
      })
      toast.success("Thanks for reaching out!")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="contact"
    >
      {/* Section heading */}
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>

      {/* Contact list intro */}
      <MotionDiv>
        <p>
          If you are interested in working together, please don't hesitate to
          get in touch with me.
        </p>
      </MotionDiv>
      
      {/* Contact details list */}
      <ContactList />

      {/* Form section */}
      <motion.div
        className="mt-8 w-full max-w-xl"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4"
          >
            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-auto">
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-auto">
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                      className="h-32"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button */}
            <Button
              type="submit"
              variant="default"
              disabled={isLoading}
              className="group"
            >
               Submit
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  )
}

export default Contact
