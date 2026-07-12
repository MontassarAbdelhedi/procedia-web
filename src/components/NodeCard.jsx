import { cn } from '../lib/utils'

const categoryColors = {
  core: '#534AB7',
  data: '#D4AC0D',
  layers: '#185FA5',
  shapes: '#1ABC9C',
  effects: '#27AE60',
  utility: '#5F5E5A',
  error: '#e05555',
}

export function NodeCard({
  children,
  className,
  category = 'core',
  selected = false,
  ports = { left: true, right: true },
  title,
  titleBadge,
  stateDot = 'alive',
  stretch = false,
}) {
  const catColor = categoryColors[category] || categoryColors.core

  return (
    <div
      className={cn(
        'node-card group relative rounded-lg border transition-all duration-200',
        selected
          ? 'border-[#534AB7] shadow-[0_0_0_1px_#534AB7,0_2px_12px_rgba(0,0,0,0.55)]'
          : 'border-[#2a2a28] hover:border-[#3a3a38]',
        'bg-[#1a1a18] shadow-[0_2px_12px_rgba(0,0,0,0.55)]',
        stretch && 'flex flex-col',
        className
      )}
    >
      {/* Port dots - left */}
      {ports.left && (
        <div className="absolute -left-[6px] top-4 z-10">
          <div
            className="h-3 w-3 rounded-full border-2 border-[#161614]"
            style={{ background: catColor }}
          />
        </div>
      )}

      {/* Port dots - right */}
      {ports.right && (
        <div className="absolute -right-[6px] top-4 z-10">
          <div
            className="h-3 w-3 rounded-full border-2 border-[#161614]"
            style={{ background: catColor }}
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-2 rounded-t-lg bg-[#161614] px-3 py-2.5">
        <div
          className="h-4 w-[3px] flex-shrink-0 rounded-full"
          style={{ background: catColor }}
        />
        {title && (
          <span className="flex-1 truncate text-xs font-medium text-[#d4d2cc]">
            {title}
          </span>
        )}
        {titleBadge && (
          <span className="inline-flex items-center gap-1 rounded-md bg-[#534AB7]/15 border border-[#534AB7]/30 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[#7B72D0]">
            {titleBadge}
          </span>
        )}
        <div
          className={cn(
            'h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors',
            stateDot === 'alive' && 'bg-[#4cbb6c]',
            stateDot === 'ghost' && 'bg-[#444441]',
            stateDot === 'error' && 'bg-[#e05555]'
          )}
        />
      </div>

      {/* Body */}
      <div className={cn('p-3', stretch && 'flex flex-1 flex-col')}>{children}</div>
    </div>
  )
}

export function NodeParam({ label, value, port = false, portColor, wired = false }) {
  return (
    <div className="relative flex items-center gap-2 py-1">
      {port && (
        <div
          className="absolute -left-[6px] h-2.5 w-2.5 rounded-full border-2 border-[#1a1a18]"
          style={{ background: portColor || '#4a4a48' }}
        />
      )}
      <span className="min-w-[52px] flex-shrink-0 text-[11px] text-[#888780]">
        {label}
      </span>
      <span
        className={cn(
          'flex-1 truncate text-[11px]',
          wired ? 'text-[#f5c542]' : 'text-[#d4d2cc]'
        )}
      >
        {value}
      </span>
    </div>
  )
}
