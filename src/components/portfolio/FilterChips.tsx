import { CATEGORY_META } from '@/data/portfolio'
import type { Category } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export type ProjectFilter = Category | 'all'

interface Chip {
  value: ProjectFilter
  label: string
  accent?: string
}

const chips: Chip[] = [
  { value: 'all', label: 'All' },
  ...(Object.keys(CATEGORY_META) as Category[]).map(category => ({
    value: category,
    label: CATEGORY_META[category].label,
    accent: CATEGORY_META[category].accent,
  })),
]

interface FilterChipsProps {
  active: ProjectFilter
  onChange: (filter: ProjectFilter) => void
}

export default function FilterChips({ active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {chips.map(chip => {
        const isActive = active === chip.value
        return (
          <button
            key={chip.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(chip.value)}
            className={cn(
              'cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/70',
              isActive && !chip.accent && 'border-white/40 bg-white/10 text-white',
              !isActive && 'border-white/10 bg-white/5 text-text-muted hover:border-white/25 hover:bg-white/10 hover:text-text-primary'
            )}
            style={isActive && chip.accent ? { color: chip.accent, backgroundColor: `${chip.accent}1A`, borderColor: `${chip.accent}66` } : undefined}
          >
            {chip.label}
          </button>
        )
      })}
    </div>
  )
}
