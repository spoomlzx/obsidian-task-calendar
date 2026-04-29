import { App, PluginSettingTab, Setting } from "obsidian";
import TaskCalendarPlugin from "@/main";

export interface TaskCalendarSettings {
	timeFormat: '24h' | '12h';
}

export const DEFAULT_SETTINGS: TaskCalendarSettings = {
	timeFormat: '24h'
};


export class TaskCalendarSettingTab extends PluginSettingTab {
	plugin: TaskCalendarPlugin;

	constructor(app: App, plugin: TaskCalendarPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}


	display(): void {
		let { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("时间格式")
			.setDesc("任务时间的显示格式，影响弹窗和视图中时间的展示方式")
			.addDropdown(drop => drop
				.addOption('24h', '24 小时制 (14:30)')
				.addOption('12h', '12 小时制 (2:30 PM)')
				.setValue(this.plugin.settings.timeFormat || '24h')
				.onChange(async (value) => {
					this.plugin.settings.timeFormat = value as '24h' | '12h';
					await this.plugin.saveSettings();
				}))
	}


}
