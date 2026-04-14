// function handleCredentialResponse(response) {
//   const userData = parseJwt(response.credential);

//   document.getElementById("userInfo").style.display = "block";

//   document.getElementById("userImage").src = userData.picture;
//   document.getElementById("userName").textContent = userData.name;
//   document.getElementById("userEmail").textContent = userData.email;

//   localStorage.setItem("user", JSON.stringify(userData));
// }

// function parseJwt(token) {
//   const base64Url = token.split(".")[1];
//   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

//   const jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split("")
//       .map(function (char) {
//         return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );

//   return JSON.parse(jsonPayload);
// }

// function logout() {
//   localStorage.removeItem("user");

//   document.getElementById("userInfo").style.display = "none";
//   document.getElementById("userImage").src = "";
//   document.getElementById("userName").textContent = "";
//   document.getElementById("userEmail").textContent = "";
// }

// window.onload = function () {
//   const savedUser = localStorage.getItem("user");

//   if (savedUser) {
//     const userData = JSON.parse(savedUser);

//     document.getElementById("userInfo").style.display = "block";
//     document.getElementById("userImage").src = userData.picture;
//     document.getElementById("userName").textContent = userData.name;
//     document.getElementById("userEmail").textContent = userData.email;
//   }
// };

function handleCredentialResponse(response) {
  const userData = parseJwt(response.credential);

  localStorage.setItem("user", JSON.stringify(userData));

  showUser(userData);
}

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (char) {
        return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function showUser(userData) {
  document.querySelector(".g_id_signin").style.display = "none";
  document.getElementById("userProfile").style.display = "flex";

  document.getElementById("userImage").src = userData.picture;
  document.getElementById("userName").textContent = userData.name;
}

function logout() {
  localStorage.removeItem("user");

  document.querySelector(".g_id_signin").style.display = "block";
  document.getElementById("userProfile").style.display = "none";

  document.getElementById("userImage").src = "";
  document.getElementById("userName").textContent = "";
}

window.onload = function () {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    const userData = JSON.parse(savedUser);
    showUser(userData);
  }
};
// const googleClientId = "0543-06543841.apps.googleusercontent.com";