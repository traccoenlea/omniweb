const API_CONTACT = "/api/contact";

export async function addContactToDb(data) {
  const response = await fetch(`${API_CONTACT}/addContactToDb`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Oops une erreur est survenue");
    }
  }
}

export async function sendingEmail(data) {
  const response = await fetch(`${API_CONTACT}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Oops une erreur est survenue");
    }
  }
}
