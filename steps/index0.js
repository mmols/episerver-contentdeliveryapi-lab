new Vue({
    el: '#app',
    data: {
        apiUrl: 'http://restapi.thecommerceguy.com/api',
        startPageId: '',
        infoPageId: ``,
        title: 'Welcome to the Music Festival lab',
        heroImage: '',
        preamble: '',
        mainBody: '',
        artists: [],
        loadingArtists: false,
        currentLanguage: 'en',
        languages: [],
        currentFilter: "",
        filterOptions: [

        ],
        currentSort: '',
        sortOptions: [

        ]
    },
    created: function () {
        this.getSiteInfo();
        this.getArtists();
    },
    methods: {
        getSiteInfo: function () {

            var vm = this;

        },
        getStartPage: function () {

            var vm = this;
        },
        getInfoPageContent: function () {

            var vm = this;

        },
        getArtists: function () {

            var vm = this;

        },
        formatPerformanceTime: function(rawDate) {

            var vm = this;

            var date = new Date(rawDate);
            
            var options = {  
                weekday: "long", month: "short",  
                day: "numeric", hour: "2-digit", minute: "2-digit"  
            };  

            return date.toLocaleDateString(vm.currentLanguage, options)

        }
    }
});