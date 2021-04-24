



let app = new Vue({
    el: '#app',
    data: {

        page: 'documentation',

        repo: 'https://api.github.com/repos/Zekiloni/focus-roleplay-hub/',
        token: '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',

        directoriums: [],
        files: []

    },

    created() {
        this.load(this.page)
    },

    methods: { 
        
        load: function(page) { 
            this.page = page;
            fetch(this.repo + 'contents/' + page, { method: 'get', headers: new Headers({ 'Authorization': 'token ' + this.token, 'Content-Type': 'none' }) }) 
                .then(response => response.json())
                .then(data => this.stack(data))
        },

        stack: function (docs) { 
            console.log(docs)
            this.files = [], this.directoriums = [];
            for (let i of docs) { 
                if (i.type === 'file') { 
                    this.files.push({ name: i.name, path: i.path });
                } else if (i.type === 'dir') { 
                    this.directoriums.push({ name: i.name, path: i.path });
                }
            }

        }


    }
})
