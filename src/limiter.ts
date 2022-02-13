class Limiter {
    private ipDb: Map<string, number>;
    private limit: number;
    constructor(limit: number = 7 * 7) {
        this.limit = limit;
        this.ipDb = new Map<string, number>();
        setInterval(() => {
            this.ipDb.forEach((value, key) => {
                if (value > this.limit) {
                    this.ipDb.set(key, 0);
                }
            });
        }, 1000 * 60 * 10); // 10 minutes
    }

    isLimited(ipAddress: string): boolean {
        if (!this.ipDb.get(ipAddress)) {
            this.ipDb.set(ipAddress, 0);
            return false;
        }
        if (this.ipDb.get(ipAddress)! > this.limit) {
            return true;
        }
        return false;
    }

    incrementLimit(ipAddress: string): void {
        if (!this.ipDb.get(ipAddress)) {
            this.ipDb.set(ipAddress, 1);
        } else {
            this.ipDb.set(ipAddress, this.ipDb.get(ipAddress)! + 1);
        }
    }
}

export default Limiter;