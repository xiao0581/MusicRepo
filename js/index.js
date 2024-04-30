url = "https://musicserver20240430122510.azurewebsites.net/api/musics",
Vue.createApp({
    data() {
        return {
            musics: [],
            music: {
                title: "",
                artist: "",
                genre: "",
                year: "",
                album: "",
                path: "",


            },
            sort: "",
        }
    },
     async created() { // life cycle method. Called when browser reloads page
        this.getMusic()
    },
    methods: {
        
        async getMusic() {
            try {
                const res = await axios.get(url)
                this.musics = await res.data
            } catch (e) {
                this.error = e
            }
        },
        async postMusic() {
            try {
                const res = await axios.post(url, this.music)
                this.musics = await res.data
                this.getMusic()
            } catch (e) {
                this.error = e
            }
        },
        async sortMusic() {
            try {
                const res = await axios.get(url + "?sortBy=" + this.sort)
                this.musics = await res.data
            } catch (e) {
                this.error = e
            }
        }
    }
}).mount("#app")
    