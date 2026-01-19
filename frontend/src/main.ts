const API_BASE = "http://backend:8080";

async function login(username: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  // 🔴 IMPORTANT FIX
  const token = data?.data?.token;

  if (!token) {
    alert("Login failed: token not received");
    return;
  }

  localStorage.setItem("token", token);
  alert("Login successful");
}

async function predict() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    return;
  }

  const body = {
    age: 25,
    systolicbp: 120,
    diastolicbp: 80,
    heart_rate: 72,
    smoker: false
  };

  const res = await fetch(`${API_BASE}/api/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });

  const result = await res.json();
  console.log(result);
  alert(JSON.stringify(result, null, 2));
}

(window as any).login = login;
(window as any).predict = predict;
