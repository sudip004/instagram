// import React, { useEffect, useState } from "react";
// import { Navigation, SingOutStack } from "./Navigation";
// import { firebase } from "./firebase";

// const AuthNavigation = () => {
//   const [currentuser, setcurrentuser] = useState(null);
//   const userHandal = (user) =>
//     user ? setcurrentuser(user) : setcurrentuser(null);
//   useEffect(
//     () =>
//       //hack handal return
//       firebase.auth().onAuthStateChanged((user) => userHandal(user)),
//     []
//   );
//   return <>{currentuser ? <Navigation /> : <SingOutStack />}</>;
// };

// export default AuthNavigation;
