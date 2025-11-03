"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"


const formSchema = z.object({
    email: z.email({ message: "Invalid email address." }),
})

const ForgotPasswordPage = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-gray-300 p-5 rounded shadow flex flex-col w-[450px]">
                <h1 className="text-xl font-bold">
                    Forgot your password? No worries. Enter your email
                </h1>
                <hr className='my-3 border border-gray-300' />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <h1 className="text-sm text-gray-600">
                                Forgot password
                            </h1>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full bg-black text-white hover:bg-neutral-800">
                            Send Request Link
                        </Button>
                        <h1 className="text-sm">
                            Click here to Login,{" "}
                            <Link className="underline" to={'/login'}>Login</Link>
                        </h1>
                    </form>
                </Form>

            </div>
        </div>
    )
}

export default ForgotPasswordPage