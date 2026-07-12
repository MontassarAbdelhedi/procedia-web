import { cn } from '../lib/utils'

export function Container({ className, children, ...props }) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  )
}

export function Section({ className, children, ...props }) {
  return (
    <section className={cn('relative py-20 sm:py-28', className)} {...props}>
      {children}
    </section>
  )
}

export function SectionHeader({ badge, title, titleGradient, description, className }) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#534AB7]/20 bg-[#534AB7]/10 px-3 py-1 text-xs text-[#7B72D0]">
          {badge}
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-[#d4d2cc] sm:text-3xl lg:text-4xl">
        {title}{' '}
        {titleGradient && (
          <span className="bg-gradient-to-r from-[#534AB7] to-[#4cbb6c] bg-clip-text text-transparent">
            {titleGradient}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-[#888780]">{description}</p>
      )}
    </div>
  )
}
