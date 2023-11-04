import classes from './styles.module.css'

type Props = {
  breed: string
  url: string
}

export const Image: React.FC<Props> = ({ breed, url }) => {
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
