class Memory {
    constructor(size) {
        this.data = new Uint8Array(size);
    }

    read8(address) {
        return this.data[address];
    }

    write8(address, value) {
        this.data[address] = value & 0xFF;
    }
}