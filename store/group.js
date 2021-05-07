import baseUrl from '../nuxt.config'

const end_point = 'api/v1/groups'

export default {
    all() {
        return baseUrl.get(end_point)
    },

    show(id) {
        return baseUrl.get(`${end_point}/${id}`)
    }
}