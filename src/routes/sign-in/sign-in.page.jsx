import { signInWithGooglePopup } from "../../utils/firebase";

const SignInPage = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div className="sign-in">
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in</button>
        </div>
    );
}

export default SignInPage;