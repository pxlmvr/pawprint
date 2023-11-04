import React from 'react'
import classes from './styles.module.css'

export type SelectOption = { value: string; label: string }

type Props = {
  className?: string
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: SelectOption[]
  placeholder?: string
}

export const Select: React.FC<Props> = ({
  className,
  label,
  name,
  onChange,
  options,
  placeholder = 'Select...',
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
