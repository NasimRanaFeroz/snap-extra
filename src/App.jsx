import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 600);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isMobile && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
             bg-clip-text text-transparent text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl font-semibold max-w-md">
              This website is not optimized for mobile & screens below 600px.
              Please use a larger device or desktop for the best experience.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && <Home />}
    </>
  );
}

export default App;
