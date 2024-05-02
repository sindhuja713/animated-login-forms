import {useState, useEffect} from 'react';
import registerImg from "../../assets/register.svg"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {GoDotFill} from 'react-icons/go';
import {FaCheck} from 'react-icons/fa';

const Register = ({onLogin}) => {
  const[showPassword, setShowPassword] = useState(false);
  const[showIndicator, setShowIndicator] = useState(false);
  const[pass, setPass] = useState("");

  const[passLetter, setPassLetter] = useState(false);
  const[passNumber, setPassNumber] = useState(false);
  const[passChar, setPassChar] = useState(false);
  const[passLength, setPassLength] = useState(false);

  const[passComplete, setPassComplete] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowIndicator = () => {
    setShowIndicator(true);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  useEffect(() => {
    // check Lower and Uppercase
      if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) ){
        setPassLetter(true);
      } else{
        setPassLetter(false);
      }

      // Check For Numbers
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }
    // Check For Special char

    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }

    if (pass.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass, passLetter, passNumber, passChar, passLength]);

  


  return (
    <div className="main-container --flex-center">
      
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />
          {/* PASSWORD FIELD */}
          <div className='password'> 
          <input
              type={showPassword ? "text": "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasswordChange }
            />
            <span className='icon' onClick={handleTogglePassword}>
              {showPassword ? <AiOutlineEyeInvisible/> : 
              <AiOutlineEye/> }
              
              </span>
          </div>
          {/* PASSWORD FIELD */}
          <button className="--btn --btn-primary --btn-block">Register</button>
          <a href='#' className='--text-sm'>Forgot Password</a>
          <span className='--text-sm --block'>Have an account? {" "}
          <a href='#' className='--text-sm'onClick={onLogin}>
            Login
          </a></span>

          {/* pass strenght Indicator */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className='--list-style-none --card 
            --bg-grey --text-sm --p'>
              <p className='--text-sm'>Password Strenght Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className='--align-center'>
                  {passLetter ? <FaCheck/> : <GoDotFill/> }
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
              <span className='--align-center'>
              {passNumber ? <FaCheck/> : <GoDotFill/> }
                &nbsp; Numbers(0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
              <span className='--align-center'>
                {passChar ? <FaCheck/> : <GoDotFill/> }
                &nbsp; Special Character (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
              <span className='--align-center'>
                {passLength ? <FaCheck/> : <GoDotFill/> }
                &nbsp; At least 8 Character
                </span>
              </li>
            </ul>
          </div>



        </form>
      </div> 
      <div className="img-container">
        <img src={registerImg} alt="login" />
      </div>
      
    </div>
  );
};

export default Register;
