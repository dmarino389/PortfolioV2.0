// app/contact/page.jsx
"use client";

export default function ContactPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Create a new FormData object from the form event

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Continue with your response handling
      // ...
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Thanks for taking the time to reach out.
        </h1>
        <h2 className="mb-8">How can I help you today?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-2 w-full border rounded"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-2 w-full border rounded"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              required
              className="p-2 w-full border rounded h-32"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
