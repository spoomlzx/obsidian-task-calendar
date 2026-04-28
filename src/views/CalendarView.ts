import { ItemView, WorkspaceLeaf } from "obsidian";
import { createApp, type App as VueApp } from "vue";
import CalendarComponent from "../components/CalendarComponent.vue";
import '../styles.css'

export const CALENDAR_VIEW_TYPE = "calendar-view";

export class CalendarView extends ItemView {
	private vueApp: VueApp | undefined;

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
		this.vueApp = createApp(CalendarComponent);
		this.vueApp.mount(container);
	}

	async onClose() {
		if (this.vueApp) {
			this.vueApp.unmount();
		}
	}
}
