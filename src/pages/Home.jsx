import { motion } from "framer-motion";
import bgImage from "../assets/imgs/homeBG.png";
import LogoImage from "../assets/imgs/logo.png";

const optionsLeft = [
  {
    label: "My Deck",
    gradient: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600",
    shadow: "shadow-indigo-500/30",
  },
  {
    label: "Cards",
    gradient: "bg-gradient-to-r from-green-400 via-green-500 to-emerald-600",
    shadow: "shadow-green-500/30",
  },
];

const optionsRight = [
  {
    label: "About",
    gradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500",
    shadow: "shadow-yellow-500/30",
  },
  {
    label: "How To Play",
    gradient: "bg-gradient-to-r from-pink-400 via-pink-500 to-rose-600",
    shadow: "shadow-pink-500/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const logoVariants = {
  hidden: { scale: 0, rotate: -180, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const playButtonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute left-1/2 top-[8vh] -translate-x-1/2 z-10"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={LogoImage}
          alt="Game Logo"
          className="h-[16vh] w-auto drop-shadow-2xl rounded-full"
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.6 },
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full blur-xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.button
        className="absolute left-1/2 bottom-[20%] -translate-x-1/2 text-white text-[1.8vw] px-16 py-6 rounded-full 
                   font-bold bg-gradient-to-br from-red-500 via-pink-500 to-yellow-500 
                   shadow-2xl shadow-red-500/40 backdrop-blur-sm border border-white/20
                   hover:shadow-red-500/60 transition-all duration-300"
        variants={playButtonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 40px rgba(239, 68, 68, 0.8)",
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          PLAY
        </motion.span>
      </motion.button>

      <motion.div
        className="absolute left-[6vw] top-1/2 -translate-y-1/2 flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {optionsLeft.map(({ label, gradient, shadow }, index) => (
          <motion.button
            key={label}
            className={`text-white text-[1.6vw] py-5 px-12 font-bold rounded-full 
                       shadow-2xl ${gradient} ${shadow} backdrop-blur-sm border border-white/20
                       hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -10,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "200%",
                transition: { duration: 0.6 },
              }}
            />
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              {label}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="absolute right-[6vw] top-1/2 -translate-y-1/2 flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {optionsRight.map(({ label, gradient, shadow }, index) => (
          <motion.button
            key={label}
            className={`text-white text-[1.6vw] py-5 px-12 font-bold rounded-full 
                       shadow-2xl ${gradient} ${shadow} backdrop-blur-sm border border-white/20
                       hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -10,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "200%",
                transition: { duration: 0.6 },
              }}
            />
            <motion.span
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              {label}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Home;
