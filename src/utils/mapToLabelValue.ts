import { SelectOption } from '@/components/Select'
import { capitalize } from './capitalize'

export const mapToLabelValue = (value: string): SelectOption => ({
  label: capitalize(value),
  value,
})
