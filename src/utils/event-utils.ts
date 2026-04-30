import { EventInput } from '@fullcalendar/vue3'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
	{
		id: createEventId(),
		title: '仔细研究fullcalendar源码，撰写几十块经典复刻减税降费',
		start: todayStr,
		resourceId: 'a',
	},
	{
		id: createEventId(),
		title: '编写task Calendar 插件',
		start: todayStr + 'T12:00:00',
		resourceId: 'b',
	}
]

export function createEventId() {
	return String(eventGuid++)
}

export const RESOURCES = [
	{ id: 'a', title: 'Auditorium A' },
	{ id: 'b', title: 'Auditorium B', eventColor: 'green' },
	{ id: 'c', title: 'Auditorium C', eventColor: 'orange' },
]
