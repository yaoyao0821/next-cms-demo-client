// import createClient from '@sanity/client';
import { createClient } from "next-sanity";

const client = createClient({
    projectId: '5sye697u',
    dataset: 'production',
    apiVersion: 'v1',
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: true, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
});

export default client;
