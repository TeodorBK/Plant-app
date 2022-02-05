import bg1 from "../images/bg1.png"

export default function Background(props) {
  return (
    <div>
      <img className={props.forCalss1} src={bg1} alt="background leaf" />
      <img className={props.forCalss2} src={bg1} alt="background leaf" />
    </div>
  );
}
