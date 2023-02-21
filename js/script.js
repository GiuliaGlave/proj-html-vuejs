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
          copiright: "Copiright (copy) gogrin all rights reserved.",
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
