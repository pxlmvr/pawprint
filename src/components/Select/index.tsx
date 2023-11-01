import React from 'react'
import classes from './styles.module.css'

export type SelectOption = { value: string; label: string }

type Props = {
  label: string
  name: string
  options: SelectOption[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  className?: string
}

export const Select: React.FC<Props> = ({
  label,
  name,
  options,
  onChange,
  placeholder = 'Select...',
  className,
}) => {
  const id = `select_${name}`

  return (
    <div className={className}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <select
        onChange={onChange}
        id={id}
        name={name}
        className={classes.select}
        defaultValue={placeholder}
      >
        <option disabled>{placeholder}</option>
        {options.map((option: SelectOption) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
