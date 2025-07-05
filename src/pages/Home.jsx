import { motion } from "framer-motion";
import bgImage from "../assets/imgs/homeBG.png";

const optionsLeft = [
  {
    label: "My Deck",
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
  },
  {
    label: "Cards",
    gradient: "bg-gradient-to-r from-green-400 to-emerald-600",
  },
];

const optionsRight = [
  {
    label: "About",
    gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    label: "How To Play",
    gradient: "bg-gradient-to-r from-pink-400 to-rose-600",
  },
];

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.button
        className="absolute left-1/2 bottom-[20%] -translate-x-1/2 text-white text-[1.5vw] px-12 py-6 rounded-full shadow-lg font-bold
                   bg-gradient-to-br from-red-500 via-pink-500 to-yellow-500 hover:scale-110 transition-all duration-300"
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
        whileTap={{ scale: 0.95 }}
      >
        Play
      </motion.button>

      <div className="absolute left-[6vw] top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {optionsLeft.map(({ label, gradient }) => (
          <motion.button
            key={label}
            className={`text-white text-[1.5vw] py-4 px-10 font-bold rounded-full shadow-xl ${gradient} hover:scale-105 transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <div className="absolute right-[6vw] top-1/2 -translate-y-1/2 flex flex-col gap-[3vw]">
        {optionsRight.map(({ label, gradient }) => (
          <motion.button
            key={label}
            className={`text-white text-[1.5vw] py-4 px-10 font-bold rounded-full shadow-xl ${gradient} hover:scale-105 transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Home;
