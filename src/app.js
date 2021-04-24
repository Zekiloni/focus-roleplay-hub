



let app = new Vue({
    el: '#hud',
    data: {
        repo: 'https://api.github.com/repos/Zekiloni/focus-roleplay-hub/',
        token: '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',
        files: []

    },

    created() {
        this.docs()
    },

    methods: { 
        
        docs: function() { 
            fetch(this.repo + 'contents/documentation', { method: 'get', headers: new Headers({ 'Authorization': 'token ' + this.token, 'Content-Type': 'none' }) }) 
                .then(response => response.json())
                .then(data => this.stack(data))
        },

        stack: function (docs) { 
            for (let i of docs) { 
                if (i.type === 'file') { 
                    this.files.push({ name: i.name, path: i.path })
                } else if (i.type) { 
                    
                }
            }
            console.log(docs)
        }

    }
})
