const app = Vue.createApp({
  data() {
    return {
      headerTop: [
        {
          location: "&hearts; luogo",
          email: "email@mail.com",
          businessHours: "8AM- 8PM",
          socialAccounts: [
            {
              facebookAccount: "fb-logo",
              twitterAccount: "tw-logo",
              instagramAccount: "ig-logo",
              pinterestAccount: "pts-logo",
            },
          ],
        },
      ],

      headerBottom: [
        {
          logo: "img-logo",
          navbar: [
            {
              home: "link-home",
              about: "link-about",
              service: "link-service",
              portfolio: "link-portfolio",
              shop: "link-shop",
              blog: "link-blog",
              contact: "link-contact",
            },
          ],
          search: "search-icon",
          chart: "chart-icon",
          button: "ORDER NOW",
        },
      ],
    };
  },

  methods: {},
});

app.mount("#app");
