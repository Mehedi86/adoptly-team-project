"use server";


export const createUser = async (userInfo) => {
  // console.log("Creating user with info:", userInfo);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    // if (!response.ok) {
    //   throw new Error("Failed to create user");
    // }

    return await response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
