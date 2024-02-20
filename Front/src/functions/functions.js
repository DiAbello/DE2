export const Fun = {
     validate(event) {
        if(event.key.match(/[a-zA-Z1-9?!.,:;'`"/]/g) && !(event.key === 'Backspace') && !(event.key === 'Shift') && !(event.key === 'Control') && !(event.key === 'Alt')) {
            alert(`Использован некоректный символ ${event.key}`)
            event.preventDefault()
        }
    },
     validateEng(event) {
        if(event.key.match(/[а-яА-Я1-9?!.,:;'`"/]/g) && !(event.key === 'Backspace')) {
            alert(`Использован некоректный символ ${event.key}`)
            event.preventDefault()
        }
    },
    SelectedSortOption(movies, newVal) {
        if (newVal === 'name') {
            movies.value.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })
        } else if (newVal === 'date') {
            movies.value.sort((a, b) => {
                if (a.show_date > b.show_date) {
                    return 1
                }
                if (a.show_date < b.show_date) {
                    return -1
                }
                return 0
            })
        } else if (newVal === 'price') {
            movies.value.sort((a, b) => {
                if (a.price > b.price) {
                    return 1
                }
                if (a.price < b.price) {
                    return -1
                }
                return 0
            })
        }
    }
}