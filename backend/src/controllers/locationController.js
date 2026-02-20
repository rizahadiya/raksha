exports.getMapsLink = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude required' });
    }

    const mapsLink = `https://google.com/maps?q=${latitude},${longitude}`;
    const message = `🆘 EMERGENCY! I need help!\n\nLocation: ${mapsLink}\n\nPlease reach out immediately!`;

    res.json({
      success: true,
      mapsLink,
      message,
      whatsappLink: `https://wa.me/?text=${encodeURIComponent(message)}`,
      telegramLink: `https://t.me/share/url?url=${encodeURIComponent(mapsLink)}&text=SOS%20Emergency`
    });
  } catch (error) {
    console.error('Error generating maps link:', error);
    res.status(500).json({ error: 'Failed to generate maps link' });
  }
};
