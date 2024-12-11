
const token = '010112826dc97bc53ef853b7894019f0925ce8484d682aa0f9a9bec06c0c225ff7fec03e587af0fa8b1571662cda02be4d6ef68129610b5b76f6b3e65df6fb76a641d09de71dcf95de97a01b65eeb41d33218b3048aa7c0c394183f03b8c1a1ed4b8a42a047428ca6e613c6a4fdfa209ae0969e6c00f608ce90b4ba8ae95196e';







export default async function sendEmailCode(emailForRecovery) {

    const email = emailForRecovery;

  const url = `http://localhost:1337/api/auth/forgot-password`;
  try {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
})

if (!response.ok) {
    const errorData = await response.json();
    console.error("Forgot Password Error:", errorData);
    throw new Error(errorData.error.message || 'Failed to send password reset email');
  }

  const data = await response.json();
  console.log("thsi si the response of sendEmailCode before returbn:", data);
  return data; // Typically contains a success message
} catch (error) {
  console.error("Forgot Password Request Error:", error.message);
  return null;
}

}