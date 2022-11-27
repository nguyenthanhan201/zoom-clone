import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../app/slices/AuthSlice";
import { firebaseAuth } from "../utils/FirebaseConfig";

function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      // console.log("👌 ~ user", user);
      if (!user) navigate("/login");
      else {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      }
    });
    return unsubscribe;
  }, [dispatch, navigate]);
}

export default useAuth;
