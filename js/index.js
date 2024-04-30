url = "https://musicserver20240430122510.azurewebsites.net/api/musics",
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
    