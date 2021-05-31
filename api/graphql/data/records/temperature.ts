import {dateFromISO} from "../../../../utils/date";
import {getWrapped, repeat} from "../../../../utils/array";

export const temperatures: TemperatureRecord[] = [{
    date: "2020-10-20",
    targetCelsius: 22,
    hourlyCelsius: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          12,  11,  11,  9,   10,  12,  13,  14,  18,  24,  25,  23,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          20,  21,  23,  21,  14,  10,  15,  21,  // ... Not yet set
    ],
}, {
    date: "2020-10-19",
    targetCelsius: 18,
    hourlyCelsius: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          9,   10,  10,  9,   10,  11,  11,  12,  14,  17,  18,  18,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          19,  19,  20,  19,  18,  18,  17,  18,  16,  14,  12,  10
    ],
}, {
    date: "2020-10-19",
    targetCelsius: 24,
    hourlyCelsius: [
    //    12am 1am  2am  3am  4am  5am  6am  7am  8am  9am  10am 11am
          11,  12,  12,  11,  12,  11,  11,  17,  23,  24,  23,  24,
    //    12pm 1pm  2pm  3pm  4pm  5pm  6pm  7pm  8pm  9pm  10pm 11pm
          24,  24,  25,  24,  24,  24,  23,  17,  16,  13,  12,  10
    ],
}];

export const createTemperatures = (seed: number, count = 3, override?: Partial<Temperatures>) => Object.assign({
    dailyTemperatures: repeat(count, () => getWrapped(seed++, temperatures))
} as Temperatures, override);
