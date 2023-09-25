import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const authOptions ={
    providers:[
        GoogleProvider({
            clientId:"",
            clientSecret:"",
        }),
    ],
};

const handler = nextAuth(authOptions);

export {handler as GET , handler as POST};