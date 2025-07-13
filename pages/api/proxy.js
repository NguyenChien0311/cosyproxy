export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Chỉ hỗ trợ POST' });
    }
  
    try {
      const response = await fetch('https://api.cosyfoto.com/', {
        method: 'POST',
        headers: {
          Authorization: req.headers.authorization || '',
          Companyid: req.headers.companyid || '',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Namespace: 'CMS',
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Lỗi proxy:', error);
      res.status(500).json({ message: 'Lỗi proxy server' });
    }
  }
  