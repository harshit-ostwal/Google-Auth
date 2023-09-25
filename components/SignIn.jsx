"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignIn() {
    return (
        <>
            <div className="flex items-center justify-center h-96">
                <button onClick={() => signIn('google')} className="flex items-center animate-fade-in-top rounded-lg px-10 py-5 text-primary bg-black hover:scale-95 transition-all ease-linear hover:bg-white">
                    <Image src="/google-logo.png" className="h-6 w-6 mr-5"  width={30} height={30}/>
                    <span>Sign in with Google</span>
                </button>
            </div>
        </>
    )
}