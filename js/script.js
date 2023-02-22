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
              twitterAccount: "fa-brands fa-twitter",
              instagramAccount: "ig-logo",
              pinterestAccount: "pts-logo",
            },
          ],
        },
      ],

      headerBottom: [
        {
          logo: "logo",
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
        //logo + icons [0]
        {
          logo: "footer-logo",
          text: "War should never beshould entered entered  should never be entered never be entered",
          socialAccounts: [
            {
              facebookAccount: "fa-brands fa-facebook-f",
              googleAccount: "fa-brands fa-google-plus-g",
              twitterAccount: "fa-brands fa-twitter",
              pinterestAccount: "fa-brands fa-pinterest",
            },
          ],
        },
        //emergency links [1]
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
        //latest blog [2]
        {
          blog: [
            {
              blogTitle: "Our Latest Blog.",
              postPreview: [
                "blo1-300x300", //0
                " Where I live, I am sourrounded by fresh, organic food, so I eat really well.", //1
                "December 17, 2022", //2

                "blo2-300x300", //3
                "What we get at home  is 100% organic food. We are also 90% vegetarian.", //4
                "December 16, 2022", //5
              ],
            },
          ],
        },
        //galley [3]
        {
          gallery: [
            {
              galleryTitle: "Our Gallery",
              imgPreview: [
                "blo1-300x300",
                "blo9-300x300",
                "blo8-300x300",
                "blo7-300x300",
                "blo4-300x300",
                "blo3-300x300",
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

app.mount("#root");
