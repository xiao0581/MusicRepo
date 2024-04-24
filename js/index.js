Vue.createApp({
    data() {
        return {
            musics: [],
            music: null
        }
    },
    
    methods: {

        async getMusic() {
            const response = await fetch("https://api.deezer.com/chart/0/tracks")
            const data = await response.json()
            this.musics = data.data
        }
    }
}).mount("#app")
    