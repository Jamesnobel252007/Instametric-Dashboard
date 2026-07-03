const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/instagram", (req, res) => {
  const authUrl =
    "https://www.facebook.com/v20.0/dialog/oauth?" +
    new URLSearchParams({
      client_id: process.env.META_APP_ID,
      redirect_uri: process.env.META_REDIRECT_URI,
      scope: [
        "pages_show_list",
        "business_management",
        "instagram_basic",
        "instagram_manage_insights",
      ].join(","),
      response_type: "code",
    });

  res.redirect(authUrl);
});

router.get("/instagram/callback", async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ message: "Authorization code missing" });
    }

    const tokenResponse = await axios.get(
      "https://graph.facebook.com/v20.0/oauth/access_token",
      {
        params: {
          client_id: process.env.META_APP_ID,
          client_secret: process.env.META_APP_SECRET,
          redirect_uri: process.env.META_REDIRECT_URI,
          code,
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 1: Get Facebook pages
    const pagesResponse = await axios.get(
      "https://graph.facebook.com/v20.0/me/accounts",
      {
        params: {
          access_token: accessToken,
        },
      }
    );

    const pages = pagesResponse.data.data;

    if (!pages || pages.length === 0) {
      return res.status(404).json({
        message: "No Facebook Pages found. Connect your Instagram account to a Facebook Page first.",
      });
    }

    const page = pages[0];

    // Step 2: Get Instagram business account connected to page
    const igResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${page.id}`,
      {
        params: {
          fields: "instagram_business_account",
          access_token: accessToken,
        },
      }
    );

    const instagramAccount = igResponse.data.instagram_business_account;

    if (!instagramAccount) {
      return res.status(404).json({
        message: "No Instagram Business account connected to this Facebook Page.",
      });
    }

    // Step 3: Get Instagram profile info
    const profileResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${instagramAccount.id}`,
      {
        params: {
          fields: "id,username,followers_count,media_count",
          access_token: accessToken,
        },
      }
    );

    res.redirect(
      `${process.env.FRONTEND_URL}/connect?connected=true&username=${profileResponse.data.username}`
    );
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      message: "Instagram connection failed",
      error: error.response?.data || error.message,
    });
  }
});

module.exports = router;