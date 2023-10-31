import classes from './styles.module.css'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Select } from '@/components/Select'

export const Form: React.FC = () => {
  return (
    <section className={classes.form}>
      <Container>
        <Select />
        <Select />

        <Button onClick={() => {}}>Random</Button>
        <Button onClick={() => {}}>List</Button>
      </Container>
    </section>
  )
}
