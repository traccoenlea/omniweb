const API_ARTICLES = "/api/articles";

export async function getArticles() {
  const response = await fetch(`${API_ARTICLES}/getArticles`);
  return response.json();
}
