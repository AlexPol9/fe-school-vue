export default api => {
	api.Events = {
		getEvents(dto) {
            return api.instance.request({
                method: 'post',
				url: `tasks`,
				data: dto
            })
        },
	}
}