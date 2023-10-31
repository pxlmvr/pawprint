import classes from './styles.module.css'

import { Button } from '@/components/Button'
import { Select } from '@/components/Select'

export const Form: React.FC = () => {
  return (
    <section className={classes.form}>
      <Select />
      <Select />

      <Button>Random</Button>
      <Button>List</Button>
    </section>
  )
}
