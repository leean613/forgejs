
const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const authenticationService = {
  logout,

  get token() {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  },
  get userName() {
    const userName = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))["userName"]
      : null;
    return userName;
  },
  get currentUser() {
    const currentUser = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    return currentUser;
  },
  get system() {
    const system = localStorage.getItem("system")
      ? localStorage.getItem("system")
      : null;
    return system;
  },
  get accountService() {
    const accountService = localStorage.getItem("accountService")
      ? localStorage.getItem("accountService")
      : null;
    return accountService;
  },
  get isAdmin() {
    const isAdmin = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))["isAdmin"]
      : null;
    return isAdmin;
  },
  get userId() {
    const userId = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))["id"]
      : null;
    return userId;
  },
  get userEmail() {
    const userIdLocal = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))["userId"]
      : null;
    const userIdSess = sessionStorage.getItem("currentUser")
      ? JSON.parse(sessionStorage.getItem("currentUser"))["userId"]
      : null;
    return userIdLocal ? userIdLocal : userIdSess;
  },
};
