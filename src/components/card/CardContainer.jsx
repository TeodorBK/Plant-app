import Card from './Card';
import AddCard from './AddCard';
import classes from './CardContainer.module.css';

function CardContainer(props) {
  return (
    <div className={classes.cardContainer}>
      {!props.page ? <AddCard /> : ''}
      {props.data.map(data => {
        return (
          <Card
            id={data.id}
            key={data.id}
            title={data.title}
            image={data.image}
            description={data.description}
            watered={data.watered}
          />
        );
      })}
    </div>
  );
}

export default CardContainer;
