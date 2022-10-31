import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/auth";
import LoadingOverLay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("later", "later....");
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverLay message="creating....." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
