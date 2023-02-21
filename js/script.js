const app = Vue.createApp({
  data() {
    return {
      headerTop: [
        {
          location: "&hearts; North baukhula, tala, USA",
          email: "&hearts; demo@example.com",
          businessHours: "&hearts; 8.30AM-8.30PM",
          socialAccounts: [
            {
              facebookAccount: "fa-brands fa-facebook-f",
              twitterAccount: "tw-logo",
              instagramAccount: "ig-logo",
              pinterestAccount: "pts-logo",
            },
          ],
        },
      ],

      headerBottom: [
        {
          logo: "logo.png",
          navbar: [
            {
              home: "HOME" + "&hearts;",
              about: "ABOUT" + "&hearts;",
              service: "SERVICE" + "&hearts;",
              portfolio: "PORTFOLIO" + "&hearts;",
              shop: "SHOP" + "&hearts;",
              blog: "BLOG" + "&hearts;",
              contact: "CONTACT" + "&hearts;",
            },
          ],
          search: "hearts;",
          cart: "hearts;",
          button: "ORDER NOW",
        },
      ],

      footerTop: [
        //logo + icons
        {
          logo: "img-logo",
          text: "War should never be entered",
          socialAccounts: [
            {
              facebookAccount: "fb-logo",
              googleAccount: "g+-logo",
              instagramAccount: "ig-logo",
              pinterestAccount: "pts-logo",
            },
          ],
        },
        //emergency links
        {
          emergencyLinks: [
            {
              linkTitle: "Emergency Link.",
              linkShop: "Organic Food Shop",
              linkTerms: "Our Term & Condition",
              linkFaq: "Gogrin Faq Section",
              linkTeam: "Our Team Member",
              linkNews: "Our Latest News Feed",
            },
          ],
        },
        //latest blog
        {
          blog: [
            {
              blogTitle: "Our Latest Blog.",
              postPreview: [
                {
                  postImg: "img-blog-1",
                  postText: "text-blog-1",
                  postDate: "date-blog-1",
                },
                {
                  postImg: "img-blog-2",
                  postText: "text-blog-2",
                  postDate: "date-blog-2",
                },
              ],
            },
          ],
        },
        //galley
        {
          gallery: [
            {
              galleryTitle: "Our Gallery",
              imgPreview: [
                {
                  galleryImg: "img-gallery-1",
                  galleryImg: "img-gallery-2",
                  galleryImg: "img-gallery-3",
                  galleryImg: "img-gallery-4",
                  galleryImg: "img-gallery-5",
                  galleryImg: "img-gallery-6",
                },
              ],
            },
          ],
        },
      ],

      footerBottom: [
        {
          copiright: "Copiright&copy; gogrin all rights reserved.",
          service: "Service",
          prices: "Pricing Table",
          contact: "Contact",
        },
      ],
    };
  },

  methods: {},
});

app.mount("#app");
