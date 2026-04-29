import { Notice, Plugin } from "obsidian";
import { CALENDAR_VIEW_TYPE, CalendarView } from "./views/CalendarView";
import { DEFAULT_SETTINGS, TaskCalendarSettings, TaskCalendarSettingTab } from "@/views/settings";

export default class TaskCalendarPlugin extends Plugin {

	settings: TaskCalendarSettings = DEFAULT_SETTINGS;

	async onload() {
		await this.loadSettings();

		this.registerView(CALENDAR_VIEW_TYPE, (leaf) => new CalendarView(leaf));

		this.addSettingTab(new TaskCalendarSettingTab(this.app, this))

		this.addRibbonIcon("dice", "Open Vue Component", () => {
			this.activateView().then(() => {
				new Notice("Vue Component opened");
			});
		});
	}

	async activateView() {
		this.app.workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);

		await this.app.workspace.getLeaf('tab')?.setViewState({
			type: CALENDAR_VIEW_TYPE,
			active: true,
		});

		await this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(CALENDAR_VIEW_TYPE)[0]
		);
	}

	onunload() {
		if (import.meta.env.MODE !== "development") {
			this.app.workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
