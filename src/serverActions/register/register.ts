"use server";
// send user data to server and register user
const registerUser = async (formValues: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/create-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
      cache: "no-cache", //don't cache the user data
      credentials: "include",
    }
  );
  const patient = await res.json();
  return patient;
};
export default registerUser;
