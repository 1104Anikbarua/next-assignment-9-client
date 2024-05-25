"use server";
// send user data to server and register user
const registerUser = async (formValues: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/create-user`,
    {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache", //don't cache the user data
    }
  );
  const patient = await res.json();
  return patient;
};
export default registerUser;
