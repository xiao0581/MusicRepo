url = "http://localhost:5027/api/Musics",
Vue.createApp({
    data() {
        return {
            musics: [],
            music: null
        }
    },
    
    methods: {
        
        async getMusic() {
            try {
                const res = await axios.get(url)
                this.musics = await res.data
            } catch (e) {
                this.error = e
            }
        }
    }
}).mount("#app")
    