function Loader(props) {
  return (
    <div className={props.box}>
      <div className={props.outside}>
        <div className={props.inside}></div>
      </div>
    </div>
  );
}

export default Loader;
