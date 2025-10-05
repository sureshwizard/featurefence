const OUT = document.getElementById("out");
document.getElementById("lintBtn").addEventListener("click", async () => {
  OUT.textContent = "Linting...";
  const code = document.getElementById("code").value;
  const api = (location.origin.includes("localhost"))
    ? "http://localhost:3000/lint"
    : "/api/lint"; // use Nginx path proxy in production

  const res = await fetch(api, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ code })
  });
  const data = await res.json();
  OUT.textContent = JSON.stringify(data, null, 2);
});
