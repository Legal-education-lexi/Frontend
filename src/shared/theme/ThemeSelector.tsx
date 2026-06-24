import { Laptop, Moon, Sun } from 'lucide-react'
import { type ThemePreference, useTheme } from './ThemeProvider'

const options: Array<{ value: ThemePreference; label: string; icon: typeof Sun }> = [
  { value: 'light', label: 'Светлая', icon: Sun },
  { value: 'system', label: 'Системная', icon: Laptop },
  { value: 'dark', label: 'Тёмная', icon: Moon },
]

export function ThemeSelector() {
  const { preference, setPreference } = useTheme()

  return (
    <section className="theme-settings" aria-labelledby="theme-settings-title">
      <div>
        <span className="eyebrow">Интерфейс</span>
        <h2 id="theme-settings-title">Цветовая тема</h2>
        <p>Выберите оформление или синхронизируйте его с устройством.</p>
      </div>
      <div className="theme-options" role="radiogroup" aria-label="Цветовая тема">
        {options.map(({ value, label, icon: Icon }) => (
          <label key={value} className={preference === value ? 'active' : ''}>
            <input
              type="radio"
              name="color-theme"
              value={value}
              checked={preference === value}
              onChange={() => setPreference(value)}
            />
            <Icon size={17} strokeWidth={1.45} aria-hidden="true" />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </section>
  )
}
