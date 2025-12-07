export enum ItemTypeEnum {
	NOTE = "note",
	EVENT = "event",
	TASK = "task"
}

export interface IItem {
	itemContent: string;
	isDone: boolean;
	itemType: ItemTypeEnum;
	itemDate: Date;
}
