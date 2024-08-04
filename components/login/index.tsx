import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderTwo from "../layout/headers/header-2";
import LoginArea from "./LoginArea";

const Login = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Login Page" title="Login" />
        <LoginArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Login;
