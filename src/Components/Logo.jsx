import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img
        src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg"
        alt="logo"
      />
    </Link>
  );
}
export default Logo;
