const API_BASE_URL = window.location.hostname === "localhost" 
    ? "http://localhost:8080"  // ✅ Local Dev
    : "https://testingsqlite.onrender.com";  // ✅ Render Deployment

export default API_BASE_URL;
