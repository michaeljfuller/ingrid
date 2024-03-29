import {users} from "../users";
import {getFromWrappedIndex, repeat} from "../../../../utils/array";
import {AlertLevel} from "../../../../utils/enums";

export const alerts: AlertRecord[] = [{
    id: 'a1',
    level: AlertLevel.High,
    title: "Radon levels higher than average.",
    message: "The Shard, Floor 7",
    assignee: users[0],
    timestamp: "2020-10-19",
}, {
    id: 'a2',
    level: AlertLevel.Mid,
    title: "CO² levels are higher than average.",
    message: "The Shard, Floor 7",
    assignee: users[1],
    timestamp: "2020-10-16",
}, {
    id: 'a3',
    level: AlertLevel.Low,
    title: "Humidity levels are higher than average.",
    message: "The Shard, Floor 7",
    assignee: users[2],
    timestamp: "2020-10-13",
}];

export const createAlerts = (seed: number, count = 3, override?: Partial<Alerts>) => Object.assign({
    items: repeat(count, () => getFromWrappedIndex(seed++, alerts))
} as Alerts, override);
