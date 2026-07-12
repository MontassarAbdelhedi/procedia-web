import { cn } from '../lib/utils'

const categoryColors = {
  core: '#534AB7',
  data: '#D4AC0D',
  layers: '#185FA5',
  shapes: '#1ABC9C',
  effects: '#27AE60',
  utility: '#5F5E5A',
}

export function CategoryBadge({ category = 'core', label, className }) {
  const color = categoryColors[category] || categoryColors.core

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-medium',
        'bg-[#1a1a18] border border-[#2a2a28]',
        className
      )}
    >
      <span
        className="h-3 w-[3px] rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <span className="text-[#d4d2cc]">{label}</span>
    </span>
  )
}

export function PortDot({ color = '#4cbb6c', size = 'sm', className }) {
  const sizeClasses = {
    sm: 'h-2.5 w-2.5',
    md: 'h-3 w-3',
    lg: 'h-3.5 w-3.5',
  }

  return (
    <div
      className={cn(
        'rounded-full border-2 border-[#161614] flex-shrink-0',
        sizeClasses[size],
        className
      )}
      style={{ background: color }}
    />
  )
}
