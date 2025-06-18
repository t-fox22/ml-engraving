const form = document.getElementById("whatsappForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById("name")?.value || "");
  const email = encodeURIComponent(
    document.getElementById("email")?.value || ""
  );
  const messageText = encodeURIComponent(
    document.getElementById("message")?.value || ""
  );

  const fullMessage = `Hello, my name is ${name}. ${messageText}`;
  // const phone = '353876336306';
  const phone = "353876336306";
  const url = `https://wa.me/${phone}?text=${fullMessage}`;

  window.open(url, "_blank");
});
