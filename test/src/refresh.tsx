function add_admin(): void {
  let isloginstatus = localStorage.getItem("islogin");
  if (isloginstatus === null) {
    localStorage.setItem("islogin", "false");
  } else {
    localStorage.setItem("islogin", isloginstatus);
  }
  localStorage.setItem("admin-username", "admin@admin.com");
  localStorage.setItem("admin-password", "12345@");
  console.log("repeated");
}

export default add_admin;
