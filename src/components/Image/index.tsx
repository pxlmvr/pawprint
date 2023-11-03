import classes from './styles.module.css'

type Props = {
  url: string
  breed: string
}

export const Image: React.FC<Props> = ({ url, breed }) => {
  return (
    <figure>
      <img
        alt={`A cute ${breed}`}
        loading="lazy"
        className={classes.image}
        src={url}
      ></img>
    </figure>
  )
}
