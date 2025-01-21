const express = require('express');
const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Function to extract the reel video URL using Puppeteer
async function getReelVideoUrl(instagramUrl) {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(instagramUrl, { waitUntil: 'networkidle2' });

        // Wait for the video element to load
        await page.waitForSelector('video');

        const videoUrl = await page.evaluate(() => {
            const videoElement = document.querySelector('video');
            return videoElement ? videoElement.src : null;
        });

        await browser.close();
        return videoUrl;
    } catch (error) {
        console.error('Error extracting video URL:', error);
        throw new Error('Failed to extract video URL');
    }
}

// Function to download a video from a URL
async function downloadVideo(videoUrl, outputPath) {
    try {
        const response = await axios({
            method: 'get',
            url: videoUrl,
            responseType: 'stream',
        });

        const writer = fs.createWriteStream(outputPath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading video:', error);
        throw new Error('Failed to download video');
    }
}

// API endpoint to handle Instagram reel download
router.post('/', async (req, res) => {
    const { instagramUrl } = req.body;

    if (!instagramUrl) {
        return res.status(400).send('Instagram URL is required.');
    }

    const outputPath = path.join(__dirname, '../output.mp4');

    try {
        // Extract video URL from Instagram reel
        const videoUrl = await getReelVideoUrl(instagramUrl);
        if (!videoUrl) {
            return res.status(500).send('Failed to retrieve video URL from Instagram.');
        }

        // Download the video
        await downloadVideo(videoUrl, outputPath);

        // Stream the video to the client
        const videoStream = fs.createReadStream(outputPath);
        res.setHeader('Content-Disposition', 'attachment; filename="reel.mp4"');
        res.setHeader('Content-Type', 'video/mp4');
        videoStream.pipe(res);

        // Cleanup the file after streaming
        videoStream.on('end', () => {
            fs.unlinkSync(outputPath);
        });
    } catch (error) {
        console.error('Error in /api/download:', error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

module.exports = router;