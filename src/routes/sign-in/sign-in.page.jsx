import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase";

const SignInPage = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-in">
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in</button>
    </div>
  );
};

export default SignInPage;
