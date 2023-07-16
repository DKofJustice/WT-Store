import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'tb7t8407',
    dataset: 'production',
    apiVersion: '2023-07-07',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);