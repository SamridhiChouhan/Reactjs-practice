import Card from "./Card";

function CardSection(props) {
  console.log(props.items);

  return (
    <>
      <section>
        {props.items.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </section>
    </>
  );
}

export default CardSection;
