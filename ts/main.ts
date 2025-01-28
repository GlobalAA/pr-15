import { IEvent } from './interfaces/IEvent'
import './qrcode'
import { events, eventsData, timeP, yearP } from './vars'
import { weekCount, year } from './week'

var selectedDay = 'Monday'

timeP.textContent = weekCount()
yearP.textContent = year.toString()

const printEvents = (event: IEvent) => {
	events.innerHTML += `
		<div class="event">
			<p id="time">${event.time}</p>
			<img src="/static/img/${event.img}" alt="" />
			<h1>${event.eventName}</h1>
			<p>
				${event.description}
			</p>
		</div>
	`
}

const finalEvent = () => {
	events.innerHTML = ''
	eventsData.forEach((event: IEvent) => {
		const date = new Date(event.date).toLocaleString('en-us', {
			weekday: 'long',
		})

		if (date === selectedDay) {
			printEvents(event)
		}
	})
	if (events.innerHTML === '') {
		events.innerHTML = 'Nothing found...'
	}
}

const weekHead: NodeListOf<HTMLHeadingElement> = document.querySelectorAll(
	'.navigation > h1'
) as NodeListOf<HTMLHeadingElement>

const weekSelect: HTMLSelectElement = document.querySelector(
	'select'
) as HTMLSelectElement

weekHead.forEach((el: HTMLHeadingElement) => {
	el.addEventListener('click', () => {
		selectedDay = el.textContent as string
		events.innerHTML = ''
		finalEvent()
		weekHead.forEach(h => h.classList.remove('active'))
		el.classList.toggle('active')
		weekSelect.value = el.textContent as string
	})
})

weekSelect.addEventListener('change', () => {
	selectedDay = weekSelect.value

	document.querySelector('h1.active')?.classList.remove('active')
	const xPath = `//h1[text()='${selectedDay}']`
	const navElement = document.evaluate(
		xPath,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null
	).singleNodeValue as HTMLHeadingElement
	weekHead.forEach(h => h.classList.remove('active'))
	navElement.classList.add('active')

	events.innerHTML = ''
	finalEvent()
})

finalEvent()
