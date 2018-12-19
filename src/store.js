const STORAGE_KEY1 = 'question'
const STORAGE_KEY2 = 'list'
const STORAGE_KEY3 = 'factor'

export default {

    fetchOne: function() {

        return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY1) || '[]')

    },

    saveOne: function(items) {

        window.localStorage.setItem(STORAGE_KEY1, window.JSON.stringify(items))

    },
    fetchTwo: function() {

        return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY2) || '[]')

    },

    saveTwo: function(items) {

        window.localStorage.setItem(STORAGE_KEY2, window.JSON.stringify(items))

    },
    fetchThree: function() {

        return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY3) || '[]')

    },

    saveThree: function(items) {

        window.localStorage.setItem(STORAGE_KEY3, window.JSON.stringify(items))

    }

}
