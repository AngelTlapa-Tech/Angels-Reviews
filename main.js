const overlay = document.getElementById("devOverlay");
if (overlay) {
  // Popup
  if (!sessionStorage.getItem("popupSeen")) {
    document.getElementById("devOverlay").style.display = "flex";
    sessionStorage.setItem("popupSeen", "true");
  } else {
    document.getElementById("devOverlay").style.display = "none";
  }

  function closePopup() {
    document.getElementById("devOverlay").style.display = "none";
  }
}
