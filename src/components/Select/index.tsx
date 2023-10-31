import React from 'react'
import classes from './styles.module.css'

type Option = { value: string; label: string }

type Props = {
  label: string
  name: string
  options: Option[]
  onChange: (v: string) => void
}

export const Select: React.FC<Props> = ({ label, name, options, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={`select_${name}`}>{label}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        id={`select_${name}`}
        name={name}
        className={classes.select}
      >
        {options.map((option: Option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </React.Fragment>
  )
}
