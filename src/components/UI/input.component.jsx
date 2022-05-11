import classes from './input.module.css';

const Input = (props) =>{
    const {input,label} = props;
    return (
        <div className={classes.input}>
            <label>{label}</label>
            <input {...input} />
        </div>
            
)
}


export default Input;