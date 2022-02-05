import classes from "./Overlay.module.css";

export default function Overlay(props) {
  return <div className={classes.overlay} onClick={props.click}></div>;
}
