import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const handExitComplete = (): void => {
    if (typeof window !== 'undefined') {
      const hashId = window.location.hash;
      
      if (hashId) {
        const element = document.querySelector(hashId);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    }
  };
  
  return(
    <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp