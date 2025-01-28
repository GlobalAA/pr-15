export const year = new Date().getFullYear()

export const weekCount = () => {
	const date = new Date()
	const dayOfWeek = date.getDay()
	const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

	const startOfWeek = new Date(date)
	startOfWeek.setDate(date.getDate() + diff)

	const endOfWeek = new Date(startOfWeek)
	endOfWeek.setDate(startOfWeek.getDate() + 6)

	const formatDate = (d: Date) =>
		`${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1)
			.toString()
			.padStart(2, '0')}`

	const timeP = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`
	return timeP
}
