import React from "react";
import { useAuthState,useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import NotVerified from "../NotVerified/NotVerified";

const RequireAuth = ({ children }) => {
  // firebase
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
    auth
  );
  let location = useLocation();
  if (loading) {
    return;
  }

  // if user not loged in
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if email not verified
  if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
    return <NotVerified sendEmailVerification={sendEmailVerification} />
  }

  return children;
};

export default RequireAuth;
