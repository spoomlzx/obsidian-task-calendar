<script lang='ts'>
import { defineComponent } from 'vue'
import { CalendarOptions, EventApi, DateSelectInfo, EventClickInfo } from '@fullcalendar/vue3'
import FullCalendar from '@fullcalendar/vue3'
import classicThemePlugin from '@fullcalendar/vue3/themes/forma'
import dayGridPlugin from '@fullcalendar/vue3/daygrid'
import timeGridPlugin from '@fullcalendar/vue3/timegrid'
import interactionPlugin from '@fullcalendar/vue3/interaction'
import listPlugin from '@fullcalendar/vue3/list'
import zhLocale from '@fullcalendar/vue3/locales/zh-cn'
import { RESOURCES, INITIAL_EVENTS, createEventId } from '@/utils/event-utils'

import '@/styles/skeleton.css'
import '@/styles/theme.css'
import '@/styles/palette.css'

export default defineComponent({
	components: {
		FullCalendar,
	},
	data(): {
		calendarOptions: CalendarOptions
		currentEvents: EventApi[]
	} {
		return {
			calendarOptions: {
				plugins: [
					classicThemePlugin,
					interactionPlugin, // needed for dateClick
					dayGridPlugin,
					timeGridPlugin,
					listPlugin,
				],
				headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
				},
				buttons: {
					today: {
						text: '今天',
					},
					dayGridMonth: {
						text: '月',
					},
					timeGridWeek: {
						text: '周',
					},
					timeGridDay: {
						text: '日',
					},
					listMonth: {
						text: '日程',
					},
				},
				nowIndicator: true,
				initialView: 'dayGridMonth',
				locale: 'zh-cn',
				initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
				resources: RESOURCES,
				editable: true,
				selectable: true,
				selectMirror: true,
				dayMaxEvents: true,
				weekends: true,
				select: this.handleDateSelect,
				eventClick: this.handleEventClick,
				eventsSet: this.handleEvents,
				schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
				height: '100%',
				/* you can update a remote database when these fire:
				eventAdd:
				eventChange:
				eventRemove:
				*/
			} as unknown as CalendarOptions,
			currentEvents: [] as EventApi[],
		}
	},
	methods: {
		handleWeekendsToggle() {
			this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
		},
		handleDateSelect(selectInfo: DateSelectInfo) {
			let title = prompt('Please enter a new title for your event')
			let calendarApi = selectInfo.view.calendar

			calendarApi.unselect() // clear date selection

			if (title) {
				calendarApi.addEvent({
					id: createEventId(),
					resourceId: selectInfo.resource?.id,
					title,
					start: selectInfo.startStr,
					end: selectInfo.endStr,
					allDay: selectInfo.allDay
				})
			}
		},
		handleEventClick(clickInfo: EventClickInfo) {
			if (confirm(`Are you sure you want to delete the event '${ clickInfo.event.title }'`)) {
				clickInfo.event.remove()
			}
		},
		handleEvents(events: EventApi[]) {
			this.currentEvents = events
		},
		handlePrint() {
			window.print()
		},
	}
})

</script>

<template>
	<div class='calendar-app'>
		<FullCalendar class='app-calendar' :options='calendarOptions'>
			<template v-slot:eventContent='arg'>
				<b>{{ arg.timeText }}</b>
				<i>{{ arg.event.title }}</i>
			</template>
		</FullCalendar>
	</div>
</template>

<style lang='css'>
.calendar-app {
	font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
	font-size: 16px;
	height: 100%;
}

.fc {
	flex: 1;
	/* 确保滚动条在日历内部 */
	overflow: auto;
}

</style>
