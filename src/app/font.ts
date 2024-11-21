// font.ts
import { Caveat } from 'next/font/google';

export const caveat = Caveat({
  weight: ['400', '500', '600', '700'],  // Specify the weights you need
  subsets: ['latin'],                    // Add any subsets as needed
});
import { Inter } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '500', '700'],  // Specify the weights you need
  subsets: ['latin'],             // Add any subsets as needed
});