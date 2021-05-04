export class RenderUtils {
    static longAsMillisecond(time: Long.Long): number {
        let us = time.div(1_000).toNumber(); // this rounds
        return us / 1000; // this essentially gives 1us of precision as a float of ms
    }
}
