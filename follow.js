function follow() {
  if (document.getElementById("follow-button") === "◆ Follow") {
    document.getElementById("follow-button").innerHTML = "◆ Unfollow";
  } else if (document.getElementById("follow-button") === "◆ Unfollow") {
    document.getElementById("follow-button").innerHTML = "◆ Follow";
  }
}