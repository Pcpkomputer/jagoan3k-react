const env = "production"

const endpoint = (env==="production") ? "https://jagoank3.com":"http://localhost:8000";

export default endpoint;