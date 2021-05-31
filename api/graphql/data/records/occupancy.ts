import {dateFromISO} from "../../../../utils/date";
import {getWrapped, repeat} from "../../../../utils/array";

export const occupancy: OccupancyRecord[] = [{
    date: dateFromISO("2020-10-20"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   0,   0,   0,   20,  20,  20,  20,  10,  20,  0,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          0,   0,   0,   20,  20,  10,  // ... Not yet set
    ],
}, {
    date: dateFromISO("2020-10-19"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   0,   20,  20,  20,  80,  80,  20,  80,  80,  80,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          10,  60,  60,  60,  60,  10,  10,  0,   0,   0,   0,   0,
    ],
}, {
    date: dateFromISO("2020-10-18"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   20,  80,  20,  80,  20,  80,  60,  0,   80,  60,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          80,  80,  60,  60,  60,  10,  0,   0,   0,   0,   0,   0,
    ],
}, {
    date: dateFromISO("2020-10-17"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   80,  20,  20,  80,  20,  30,  40,  40,  60,  10,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          80,  80,  80,  80,  60,  60,  40,  40,  0,   10,  10,  0,
    ],
}, {
    date: dateFromISO("2020-10-16"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   20,  20,  80,  20,  80,  20,  60,  80,  40,  80,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          10,  80,  20,  20,  10,  10,  10,  60,  60,  80,  0,   0,
    ],
}, {
    date: dateFromISO("2020-10-15"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   20,  80,  20,  80,  20,  20,  20,  80,  80,  10,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          80,  80,  80,  20,  20,  10,  10,  10,  0,   0,   0,   0,
    ],
}, {
    date: dateFromISO("2020-10-14"),
    hourlyPercentage: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          0,   0,   0,   0,   0,   0,   10,  10,   0,   0,   0,  10,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          10,  10,  0,   0,   10,  10,  0,   0,   0,   0,   0,   0,
    ],
}].reverse();

export const createOccupancies = (seed: number, count = 3, override?: Partial<Occupancies>) => Object.assign({
    dailyOccupancy: repeat(count, () => getWrapped(seed++, occupancy))
} as Occupancies, override);
