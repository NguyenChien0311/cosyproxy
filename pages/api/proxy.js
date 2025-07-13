export default async function handler(req, res) {
  console.log('res: ', res);
  console.log('req: ', req);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://api.cosyfoto.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: req.headers.authorization || "",
        Companyid: req.headers.companyid || "",
        Namespace: req.headers.namespace || "",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", message: err.message });
  }
}
