const express = require('express');
const ytdl = require('yt-dlp'); // Make sure yt-dlp is installed
const router = express.Router();

router.get('/', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({ error: 'Please provide a valid URL.' });
    }

    try {
        // Fetch the video stream using yt-dlp
        const videoStream = ytdl(videoUrl, { format: 'mp4' });

        // Set headers for downloading the video
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');

        // Pipe the video stream to the response
        videoStream.pipe(res);
    } catch (error) {
        console.error('Error downloading video:', error);
        res.status(500).json({ error: 'Failed to download video.' });
    }
});

module.exports = router;
