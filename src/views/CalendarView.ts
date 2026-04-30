import { ItemView, WorkspaceLeaf } from "obsidian";
import { Calendar } from 'fullcalendar';
import interactionPlugin from 'fullcalendar/interaction';
import dayGridPlugin from 'fullcalendar/daygrid';
import timeGridPlugin from 'fullcalendar/timegrid';
import listPlugin from 'fullcalendar/list';
import classicThemePlugin from 'fullcalendar/themes/forma';
import adaptivePlugin from 'fullcalendar-scheduler/adaptive';
import zhLocale from 'fullcalendar/locales/zh-cn';

import '../styles.css'
import 'fullcalendar/skeleton.css';
import 'fullcalendar/themes/forma/theme.css';
import 'fullcalendar/themes/forma/palettes/blue.css';

export const CALENDAR_VIEW_TYPE = "calendar-view";

export class CalendarView extends ItemView {

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return CALENDAR_VIEW_TYPE;
	}

	getDisplayText(): string {
		return "Task Calendar";
	}

	getIcon(): string {
		return "calendar-range";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		let calendarEl = container.createEl("div");

		calendarEl.style.height = '100%';

		let calendar = new Calendar(calendarEl, {
			plugins: [
				adaptivePlugin,
				classicThemePlugin,
				interactionPlugin,
				dayGridPlugin,
				listPlugin,
				timeGridPlugin,
			],
			schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
			locale: zhLocale,
			now: '2026-04-07',
			initialView: 'dayGridMonth',
			nowIndicator: true,
			editable: true, // enable draggable events
			selectable: true,
			height: '100%',
			scrollTime: '00:00', // undo default 6am scrollTime
			dayMaxEventRows: 5,
			headerToolbar: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
			},
			events: [
				{ id: '1', resourceId: 'b', start: '2026-04-07T02:00:00', end: '2026-04-07T07:00:00', title: '23尽快和您问你件事你姐夫说法受打击饭卡是' },
				{ id: '2', resourceId: 'c', start: '2026-04-07T05:00:00', end: '2026-04-07T22:00:00', title: '尾款人就看见无人可及微辣可热忘记' },
				{ id: '3', resourceId: 'd', start: '2026-04-06', end: '2026-04-08', title: '时间风口浪尖文明，没时间快递费记录卡' },
				{ id: '4', resourceId: 'e', start: '2026-04-07T03:00:00', end: '2026-04-07T08:00:00', title: '违法经济学基础局is几受打击覅加速地发' },
				{ id: '5', resourceId: 'f', start: '2026-04-07T00:30:00', end: '2026-04-07T02:30:00', title: '酷企鹅卡加斯打卡积分打破覅哦斯' },
				{ id: '6', resourceId: 'g', start: '2026-04-07T08:30:00', end: '2026-04-07T12:30:00', title: '就是打开了金风科技问哦破' },
				{ id: '7', resourceId: 'h', start: '2026-04-07T14:00:00', end: '2026-04-07T20:00:00', title: '违法经济学基础局is几受打击覅加速地发' },
				{ id: '8', resourceId: 'i', start: '2026-04-07T15:30:00', end: '2026-04-07T22:30:00', title: '酷企鹅卡加斯打卡积分打破覅哦斯' },
				{ id: '9', resourceId: 'j', start: '2026-04-07T16:30:00', end: '2026-04-07T23:30:00', title: '就是打开了金风科技问哦破' }
			]
		});

		calendar.render();

	}

	async onClose() {

	}
}
