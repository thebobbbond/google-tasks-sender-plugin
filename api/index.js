export default async function handler(req, res) {
  try {
    const makeWebhookUrl = "https://hook.eu2.make.com/dm34sewci9xme214l9coxtsuuq0o9gyi";
    const response = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    console.error("Error calling Make webhook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
