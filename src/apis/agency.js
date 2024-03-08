const API_AGENCY = "/api/agency";

export async function getAgencyStory() {
  const response = await fetch(`${API_AGENCY}/getAgencyStory`);
  return response.json();
}
