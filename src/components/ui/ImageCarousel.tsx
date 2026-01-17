import { motion, AnimatePresence } from "framer-motion";
export const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <motion.div className="relative w-full overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing">
      <motion.div 
        drag="x"
        dragConstraints={{ right: 0, left: -((images.length - 1) * 300) }}
        className="flex gap-4"
      >
        {images.map((img, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className="min-w-[300px] aspect-video rounded-xl overflow-hidden border border-white/5 bg-slate-800"
          >
            <img src={img} alt="Gallery" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};