import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export function Wire({ className, direction = 'horizontal', color = '#534AB7', length = 100 }) {
  if (direction === 'horizontal') {
    return (
      <svg
        width={length}
        height="40"
        viewBox={`0 0 ${length} 40`}
        fill="none"
        className={cn('', className)}
      >
        <motion.path
          d={`M 0 20 C ${length * 0.3} 20, ${length * 0.3} 8, ${length * 0.5} 8 C ${length * 0.7} 8, ${length * 0.7} 32, ${length} 32`}
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="0"
          cy="20"
          r="4"
          fill={color}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
        <motion.circle
          cx={length}
          cy="32"
          r="4"
          fill={color}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
      </svg>
    )
  }

  return (
    <svg
      width="40"
      height={length}
      viewBox={`0 0 40 ${length}`}
      fill="none"
      className={cn('', className)}
    >
      <motion.path
        d={`M 20 0 C 20 ${length * 0.3}, 32 ${length * 0.3}, 32 ${length * 0.5} C 32 ${length * 0.7}, 8 ${length * 0.7}, 8 ${length}`}
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function WireHorizontal({ className, color = '#534AB7' }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <svg width="100%" height="2" className="max-w-xs">
        <motion.line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </svg>
    </div>
  )
}
