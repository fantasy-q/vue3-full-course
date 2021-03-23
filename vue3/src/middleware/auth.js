export default function (next, store) {
  console.log("middleware/auth.js");
  if (!store.state.isSigned) {
    next("/");
    store.commit("setLoginModal", true);
  } else {
    next();
  }
}