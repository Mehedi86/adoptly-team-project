// server/adminQueries.js
// "use server";

const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    // if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const adminQueries = { getAllUsers };
